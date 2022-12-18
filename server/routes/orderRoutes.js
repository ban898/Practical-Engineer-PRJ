const express = require("express");
const orderController = require("../controllers/orderController");
const authController = require("../controllers/authController");
const router = express.Router();

router.get(
  "/getAllOrdersOfUser",
  authController.protect,
  orderController.getAllOrdersOfUser
);

module.exports = router;
