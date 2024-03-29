const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const Cart = require("../models/cartModel");
const Order = require("../models/orderModel");
const catchAsync = require("../utils/catchAsync");
const BuyingProductsEmail = require("../utils/Emails/BuyingProductsEmail");
const { removeCartOfUser } = require("./cartController");

exports.getCheckoutSession = catchAsync(async (req, res, next) => {
  const customer = await stripe.customers.create({
    metadata: {
      userId: req.user.id,
    },
  });

  const line_items = req.body.cart.map((item) => {
    return {
      price_data: {
        currency: "USD",
        unit_amount: item.price * 100,
        product_data: {
          name: item.name,
          images: [
            `${req.protocol}://${req.get(
              "host"
            )}/img/products/product-6374f8c989012df5630c8d69-1669823372799-1.jpeg`,
          ],
          description: item.description,
        },
      },
      quantity: item.quantity,
    };
  });

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    shipping_address_collection: { allowed_countries: ["US", "CA", "IL"] },
    shipping_options: [
      {
        shipping_rate_data: {
          type: "fixed_amount",
          fixed_amount: { amount: 0, currency: "USD" },
          display_name: "Free shipping",
          delivery_estimate: {
            minimum: { unit: "business_day", value: 5 },
            maximum: { unit: "business_day", value: 7 },
          },
        },
      },
      {
        shipping_rate_data: {
          type: "fixed_amount",
          fixed_amount: { amount: 1500, currency: "USD" },
          display_name: "Next day air",
          delivery_estimate: {
            minimum: { unit: "business_day", value: 1 },
            maximum: { unit: "business_day", value: 1 },
          },
        },
      },
    ],
    phone_number_collection: {
      enabled: true,
    },
    customer: customer.id,
    success_url: `http://localhost:3000`,
    cancel_url: `http://localhost:3000`,
    mode: "payment",
    // customer_email: req.user.email,
    client_reference_id: req.user.id,
    line_items,
  });

  res.status(200).json({
    status: "success",
    session,
    cart: req.body.cart,
  });
});

const createOrder = async (customer, data) => {
  const cart = await Cart.aggregate([
    {
      $match: { userId: { $eq: customer.metadata.userId } },
    },
  ]);

  const itemsInCart = await Cart.aggregate([
    { $match: { userId: { $eq: customer.metadata.userId } } },
    {
      $group: {
        _id: null,
        total: { $sum: { $multiply: ["$price", "$quantity"] } },
      },
    },
  ]);

  let total =
    data.amount_total > data.amount_subtotal
      ? (itemsInCart[0].total + 15).toFixed(2)
      : itemsInCart[0].total.toFixed(2);

  // console.log(data.amount_subtotal);
  // console.log(data.amount_total);

  const newOrder = new Order({
    userId: data.client_reference_id,
    customerId: data.customer,
    paymentIntentId: data.payment_intent,
    products: cart,
    subtotal: itemsInCart[0].total.toFixed(2),
    total: total,
    shipping: data.customer_details,
    payment_status: data.payment_status,
  });

  const user = {
    email: customer.email,
    name: data.customer_details.name,
  };
  const order = {
    cart,
    id: newOrder._id,
    total: newOrder.total,
    shippingAddress: newOrder.shipping.address,
  };
  try {
    await newOrder.save();
    await new BuyingProductsEmail(order, user).buyingProductsEmail();
  } catch (err) {
    console.log(err);
  }
};

exports.webhook = (req, res) => {
  let endpointSecret = process.env.STRIPE_WEB_HOOK;

  const sig = req.headers["stripe-signature"];

  let data;
  let eventType;
  let event;
  if (endpointSecret) {
    try {
      event = stripe.webhooks.constructEvent(req.body, sig, endpointSecret);
    } catch (err) {
      console.log(`Webhook Error: ${err.message}`);
      response.status(400).send(`Webhook Error: ${err.message}`);
      return;
    }

    data = event.data.object;
    eventType = event.type;
  } else {
    data = req.body.data.object;
    eventType = req.body.type;
  }

  // Handle the event
  if (eventType === "checkout.session.completed") {
    stripe.customers
      .retrieve(data.customer)
      .then((customer) => {
        createOrder(customer, data);
        removeCartOfUser(customer.metadata.userId);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }

  res.status(200).json({ status: "success" });
};
