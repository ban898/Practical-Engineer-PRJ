const express = require("express");
const productRouter = require("./routes/productRoutes");
const userRouter = require("./routes/userRoutes");
const globalErrorHandler = require("./controllers/errorController");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const cartRouter = require("./routes/cartRoutes");
const stripeRouter = require("./routes/stripeRoutes");
const stripeController = require("./controllers/stripeController");

const app = express();
//app.use(cors());

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
app.use("/api/v1/carts", cartRouter);
app.use("/api/v1/stripe", stripeRouter);

app.use(globalErrorHandler);

module.exports = app;
