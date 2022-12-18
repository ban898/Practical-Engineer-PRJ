const express = require("express");
const authController = require("./../controllers/authController");
const userController = require("./../controllers/userController");

const router = express.Router();

router
  .route("/signup")
  .post(
    userController.uploadUserPhoto,
    userController.resizeUserPhoto,
    authController.signup
  );
router.route("/login").post(authController.login);
router.get("/logout", authController.logout);

router.use(authController.protect);

router.route("/me").get(userController.getMe, userController.getUser);

router.patch("/updateMe", userController.updateMe);

router.patch(
  "/updatePassword",
  authController.protect,
  authController.updatePassword
);

module.exports = router;
