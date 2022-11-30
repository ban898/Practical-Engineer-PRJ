const cartController = require("../controllers/cartController");
const express = require("express");
const authController = require("../controllers/authController");

const router = express.Router();

router
  .route("/")
  .get(
    //authController.protect,
    cartController.getCarts
  )
  .post(
    //authController.protect,
    cartController.createCart
  );

module.exports = router;
