const AppError = require("../utils/appError");
const catchAsync = require("../utils/catchAsync");
const User = require("./../models/userModel");

exports.getAllUsers = async (req, res, next) => {
  const users = await User.find();

  res.status(200).json({
    status: "success",
    countUsers: users.length,
    data: {
      users,
    },
  });
};

exports.getMe = (req, res, next) => {
  console.log(req.user);

  next();
};

exports.getUser = catchAsync(async (req, res, next) => {
  console.log("sdsd");
  const user = await User.findById(req.params.id);

  if (!user) {
    return next(new AppError("No document found with that ID", 404));
  }

  res.status(200).json({
    status: "success",
    user,
  });
});

exports.createUser = async (rea, res) => {
  try {
    const newUser = await User.create(req.body);

    res.status(201).json({
      status: "success",
      newUser,
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      error: err,
    });
  }
};
