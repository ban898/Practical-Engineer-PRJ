const cartController = require("../controllers/cartController");
const express = require("express");
const authController = require("../controllers/authController");
const userController = require("../controllers/userController");

const router = express.Router();

router
  .route("/")
  .get(
    //authController.protect,
    cartController.getCartOfUser
  )
  .post(
    //authController.protect,
    userController.getMe,
    cartController.createCart
  );

router.patch(
  "/addQuantity",
  //authController.protect,
  userController.getMe,
  cartController.addQuantity
);

router.patch(
  "/removeQuantity",
  //authController.protect,
  userController.getMe,
  cartController.removeQuantity
);

router.delete(
  "/deleteItem/:productId",
  //authController.protect,
  userController.getMe,
  cartController.deleteItem
);

module.exports = router;
