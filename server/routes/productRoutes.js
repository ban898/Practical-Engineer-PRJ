const express = require("express");
const productController = require("./../controllers/productController");
const authController = require("./../controllers/authController");
const userController = require("./../controllers/userController");

const router = express.Router();

router
  .route("/")
  .get(productController.getAllProducts)
  .post(
    authController.protect,
    userController.getMe,
    productController.uploadProductImages,
    productController.resizeProductImages,
    productController.createProduct
  );

router.patch(
  "/updateProduct",
  authController.protect,
  productController.uploadProductImages,
  productController.resizeProductImages,
  productController.updateProduct
);

router.post("/getProductsByCetegory", productController.getProductsByCetegory);
router.route("/:id").delete(productController.deleteProduct);

module.exports = router;
