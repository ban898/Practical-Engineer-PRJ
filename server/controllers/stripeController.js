const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const Order = require("../models/orderModel");
const catchAsync = require("../utils/catchAsync");

exports.getCheckoutSession = catchAsync(async (req, res, next) => {
  // const customer = await stripe.customers.create({
  //   metadata: {
  //     userId: req.user.id,
  //     cart: JSON.stringify(req.body.cart),
  //   },
  // });

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
    // customer: customer.id,
    cart: req.body.cart,
    success_url: `http://localhost:3000`,
    cancel_url: `http://localhost:3000`,
    mode: "payment",
    customer_email: req.user.email,
    client_reference_id: req.user.id,
    line_items,
  });

  res.status(200).json({
    status: "success",
    session,
  });
});

const createOrder = async (object, data) => {
  // const items = JSON.parse(customer.metadata.cart);
  console.log(object);
  const newOrder = new Order({
    userId: object.client_reference_id,
    customerId: object.id,
    paymentIntentId: object.payment_intent,
    products: object,
    subtotal: object.amount_subtotal,
    total: object.amount_total,
    shipping: object.customer_details,
    payment_status: object.payment_status,
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
    // stripe.customers
    //   .retrieve(data.customer)
    //   .then((customer) => {
    //     createOrder(customer, data);
    //   })
    //   .catch((err) => {
    //     console.log(err.message);
    //   });
    console.log("event.data.object");
    console.log(event.data.object, cart);
    createOrder(event.data.object);
    console.log(event.data.object);
    // console.log(event.data.object)
  }

  res.status(200).json({ status: "success" });
};
