const express = require("express");
const authController = require("./../controllers/authController");
const userController = require("./../controllers/userController");

const router = express.Router();

router
  .route("/signup")
  .post(userController.uploadUserPhoto, authController.signup);
router.route("/login").post(authController.login);

router.use(authController.protect);

router.route("/me").get(userController.getMe, userController.getUser);

module.exports = router;
