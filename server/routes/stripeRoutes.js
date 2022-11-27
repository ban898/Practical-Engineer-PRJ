const express = require("express");
const stripeController = require("../controllers/stripeController");
const authController = require("../controllers/authController");
const router = express.Router();

router.post(
  "/checkout-session",
  //authController.protect,
  stripeController.getCheckoutSession
);

router.post(
  "/webhook",
  express.json({ type: "application/json" }),
  stripeController.webhook
);

module.exports = router;
