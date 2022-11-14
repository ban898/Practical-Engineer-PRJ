const User = require("./../models/userModel");
require("dotenv").config();
const jwt = require("jsonwebtoken");
const AppError = require("./../utils/appError");
const catchAsync = require("../utils/catchAsync");

const signToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};

const createSendToken = (user, statusCode, res) => {
  const token = signToken(user.id);

  res.cookie("jwt", token, {
    expires: new Date(
      Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 3 * 60 * 60 * 1000
    ),
    httpOnly: true,
  });

  user.password = undefined;
  res.status(statusCode).json({
    status: "success",
    token,
    user,
  });
};

exports.signup = async (req, res, next) => {
  try {
    let newUser = {};

    if (req.body.data) {
      newuser = await User.create({
        firstName: req.body.data.firstName,
        lastName: req.body.data.lastName,
        address: req.body.data.address,
        email: req.body.data.email,
        password: req.body.data.password,
        passwordConfirm: req.body.data.passwordConfirm,
      });
    } else {
      newUser = await User.create(req.body);
    }
    createSendToken(newUser, 201, res);
  } catch (err) {
    return next(err);
  }
};

exports.login = catchAsync(async (req, res, next) => {
  let email;
  let password;

  if (req.body.user) {
    email = req.body.user.email;
    password = req.body.user.password;
  } else {
    email = req.body.email;
    password = req.body.password;
  }

  if (!email || !password) {
    return next(new AppError("Please provide email or password!", 400));
  }

  const user = await User.findOne({ email }).select("+password");

  if (!user || !(await user.correctPassword(password, user.password))) {
    return next(new AppError("Incorrect email or password", 401));
  }

  createSendToken(user, 200, res);
});
