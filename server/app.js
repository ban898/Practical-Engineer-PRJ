const express = require("express");
const productRouter = require("./routes/productRoutes");
const userRouter = require("./routes/userRoutes");
const globalErrorHandler = require("./controllers/errorController");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const cartRouter = require("./routes/cartRoutes");
const stripeRouter = require("./routes/stripeRoutes");
const stripeController = require("./controllers/stripeController");
const orderRoutes = require("./routes/orderRoutes");

const app = express();

app.use(cors());
app.options("*", cors());

app.post(
  "/webhook",
  express.raw({ type: "application/json" }),
  stripeController.webhook
);

app.use(express.json());
app.use(cookieParser());

app.use(express.static("public"));

app.use("/api/v1/products", productRouter);
app.use("/api/v1/users", userRouter);
app.use("/api/v1/cart", cartRouter);
app.use("/api/v1/stripe", stripeRouter);
app.use("/api/v1/orders", orderRoutes);

app.use(globalErrorHandler);

module.exports = app;
