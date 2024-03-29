const AppError = require("../utils/appError");
const catchAsync = require("../utils/catchAsync");
const User = require("./../models/userModel");
const multer = require("multer");
const sharp = require("sharp");

// const multerStorage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, "public/img/users");
//   },
//   filename: (req, file, cb) => {
//     const ext = file.mimetype.split("/")[1];
//     cb(null, `user-123234234-${Date.now()}.${ext}`);
//   },
// });

const multerStorage = multer.memoryStorage();

const multerFilter = (req, file, cb) => {
  if (file.mimetype.startsWith("image")) {
    cb(null, true);
  } else {
    cb(new AppError("Not an image! Please upload only images.", 400), false);
  }
};

const upload = multer({ storage: multerStorage, fileFilter: multerFilter });

exports.uploadUserPhoto = upload.single("photo");

exports.resizeUserPhoto = (req, res, next) => {
  if (!req.file) return next();

  req.file.filename = `user-123234234-${Date.now()}.jpeg`;

  sharp(req.file.buffer)
    .resize(400, 400)
    .toFormat("jpeg")
    .jpeg({ quality: 90 })
    .toFile(`public/img/users/${req.file.filename}`);

  next();
};

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
  req.params.id = req.user.id || null;

  // req.params.id = "6372c141e5383bfb1e856314";
  next();
};

exports.updateMe = async (req, res, next) => {
  try {
    // const data = req.body.data || req.body;
    const data = req.body.data;

    if (data.password || data.passwordConfirm) {
      return next(
        new AppError(
          "This route is not for password updates. Please use /updatePassword.",
          400
        )
      );
    }

    allowedFields = ["firstName", "lastName", "address", "email", "photo"];
    const newData = {};
    Object.keys(data).forEach((el) => {
      if (allowedFields.includes(el) && data[el].trim() !== "") {
        newData[el] = data[el];
      }
    });

    await User.findByIdAndUpdate(req.user.id, newData, {
      new: true,
      runValidators: true,
    });

    res.status(204).json({ status: "success" });
  } catch (err) {
    res.status(400).json({ status: "fail", err });
  }
};

exports.getUser = catchAsync(async (req, res, next) => {
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
