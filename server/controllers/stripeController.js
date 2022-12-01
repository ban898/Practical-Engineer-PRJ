const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const Order = require("../models/orderModel");
const catchAsync = require("../utils/catchAsync");

exports.getCheckoutSession = catchAsync(async (req, res, next) => {
  const customer = await stripe.customers.create({
    metadata: {
      userId: "6365f5bc3be5457de62d5211",
      cart: JSON.stringify(req.body.cart),
    },
  });

  const line_items = req.body.cart.map((item) => {
    return {
      price_data: {
        currency: "ils",
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
          fixed_amount: { amount: 0, currency: "ils" },
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
          fixed_amount: { amount: 1500, currency: "ils" },
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
    success_url: `http://localhost:3000/shop`,
    cancel_url: `http://localhost:3000/shop`,
    mode: "payment",
    //customer_email: req.user.email,
    //client_reference_id: req.user.id,
    line_items,
  });

  res.status(200).json({
    status: "success",
    session,
  });
});

const createOrder = async (customer, data) => {
  const items = JSON.parse(customer.metadata.cart);

  const newOrder = new Order({
    userId: customer.metadata.userId,
    customerId: data.customer,
    paymentIntentId: data.payment_intent,
    products: items,
    subtotal: data.amount_subtotal,
    total: data.amount_total,
    shipping: data.customer_details,
    payment_status: data.payment_status,
  });
  try {
    const res = await newOrder.save();
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

      console.log("Webhook verified.");
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
      })
      .catch((err) => {
        console.log(err.message);
        console.log("ssdsd");
      });
  }

  res.status(200).json({ status: "success" });
};
