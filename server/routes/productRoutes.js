const express = require("express");
const productController = require("./../controllers/productController");
const authController = require("./../controllers/authController");
const userController = require("./../controllers/userController");

const router = express.Router();

router
  .route("/")
  .post(productController.getAllProducts)
  .post(
    authController.protect,
    userController.getMe,
    productController.uploadProductImages,
    productController.resizeProductImages,
    productController.createProduct
  );

router.post("/getProductsByCetegory", productController.getProductsByCetegory);

module.exports = router;
