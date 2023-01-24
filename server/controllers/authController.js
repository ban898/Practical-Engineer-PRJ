const User = require("./../models/userModel");
require("dotenv").config();
const jwt = require("jsonwebtoken");
const AppError = require("./../utils/appError");
const catchAsync = require("../utils/catchAsync");
const { promisify } = require("util");
const SingUpEmail = require("../utils/Emails/SingUpEmail");

const signToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};

const createSendToken = (user, statusCode, res) => {
  const token = signToken(user.id);

  res.cookie("jwt", token, {
    expires: new Date(
      Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 10 * 60 * 60 * 1000
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
    const userData = req.body.data || req.body;
    if (req.file) {
      userData.photo = req.file.filename;
    }
    const newUser = await User.create(userData);
    newUser.passwordConfirm = undefined;
    newUser.password = undefined;

    createSendToken(newUser, 201, res);
    await new SingUpEmail(newUser).signUpMail();
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

exports.restrictTo = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return next(
        new AppError("You do not have permission to perform this action", 403)
      );
    }

    next();
  };
};

exports.forgotPassword = async (req, res, next) => {
  try {
    const user = await User.findOne({ email: req.body.email });

    if (!user) {
      return next(new AppError("There is no user with email address", 404));
    }

    const resetToken = user.createPasswordResetToken();
    await user.save({ validateBeforeSave: false });
  } catch (err) {
    res.status(400).json({ status: "fail" });
  }
};

exports.updatePassword = async (req, res, next) => {
  try {
    const user = await User.findById(req.user._id).select("+password");
    const data = req.body.data;
    // const data = req.body || req.body.data;

    const { newPassword, passwordConfirm, currentPassword } = data;

    if (!(await user.correctPassword(currentPassword, user.password))) {
      return next(new AppError("Your current password is wrong.", 401));
    }

    user.password = newPassword;
    user.passwordConfirm = passwordConfirm;
    await user.save();

    createSendToken(user, 200, res);
  } catch (err) {
    res.status(400).json({ status: "fail", err });
  }
};
