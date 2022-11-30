const User = require("./../models/userModel");
require("dotenv").config();
const jwt = require("jsonwebtoken");
const AppError = require("./../utils/appError");
const catchAsync = require("../utils/catchAsync");
const { promisify } = require("util");

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
      if (req.file) {
        req.body.data.photo = req.file.filename;
      }
      newuser = await User.create(req.body.data);
    } else {
      req.body.photo = req.file.filename;
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

exports.logout = (req, res) => {
  res.cookie("jwt", "loogedout", {
    expires: new Date(Date.now() + 3 * 1000),
    httpOnly: true,
  });

  res.status(200).json({ status: "success" });
};

exports.protect = async (req, res, next) => {
  try {
    let token;

    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Brarer")
    ) {
      token = req.headers.authorization.split(" ")[1];
    } else if (req.cookies.jwt) {
      token = req.cookies.jwt;
    }
    if (!token) {
      return next(
        new AppError("You are not logged in! Please log in to get access.", 401)
      );
    }

    const decode = await promisify(jwt.verify)(token, process.env.JWT_SECRET);

    const currentUser = await User.findById(decode.id);

    if (!currentUser) {
      return next(
        new AppError(
          "The user belonging to this token does no longer exist.",
          401
        )
      );
    }

    // Need to complete (check if user changed password after the token was issued)
    req.user = currentUser;
    return next();
  } catch (err) {
    return next();
  }
};
