const express = require("express");
const stripeController = require("../controllers/stripeController");
const authController = require("../controllers/authController");
const router = express.Router();

router.post(
  "/checkout-session",
  //authController.protect,
  stripeController.getCheckoutSession
);

module.exports = router;
