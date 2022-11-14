const express = require("express");
const authController = require("./../controllers/authController");
const userController = require("./../controllers/userController");

const router = express.Router();

//router.route("/").get();

router.route("/signup").post(authController.signup);
router.route("/login").post(authController.login);
router.route("/me").get(userController.getMe, userController.getUser);

module.exports = router;
