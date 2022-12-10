const mongoose = require("mongoose");
const crypto = require("crypto");
const validator = require("validator");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    trim: true,
    required: [true, "A user must have a first name"],
  },
  lastName: {
    type: String,
    trim: true,
    required: [true, "A user must have a last name"],
  },
  email: {
    type: String,
    trim: true,
    unique: [true, "This email not valid"],
    required: [true, "A user must have a email"],
    lowercase: true,
    validate: [validator.isEmail, "Please provide a valid email"],
  },
  role: {
    type: String,
    enum: ["user", "admin"],
    default: "user",
  },
  password: {
    type: String,
    required: [true, "Please provide a password"],
    trim: true,
    minlength: 8,
    select: false,
  },
  passwordConfirm: {
    type: String,
    required: [true, "Please confirm your password"],
    trim: true,
    select: false,
    validate: {
      validator: function (el) {
        return el === this.password;
      },
      message: "Password are not the same!",
    },
  },
  passwordChangedAt: Date,
  passwordResetToken: String,
  passwordResetExpires: Date,
  address: {
    type: String,
    trim: true,
    required: [true, "A user must have address"],
  },
  active: {
    type: Boolean,
    default: true,
    select: false,
  },
  photo: {
    type: String,
    default: "default.jpg",
  },
});

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();

  this.password = await bcrypt.hash(this.password, 12);
  this.passwordConfirm = undefined;

  next();
});

userSchema.methods.correctPassword = async function (
  candidatePassword,
  userPassword
) {
  return await bcrypt.compare(candidatePassword, userPassword);
};

userSchema.methods.createPasswordResetToken = async function () {
  const resetToken = await crypto.randomBytes(32).toString("hex");

  this.passwordResetToken = await crypto
    .createHash("sha256")
    .update(resetToken)
    .digest("hex");

  this.passwordResetExpires = Date.now() + 10 * 60 * 1000;

  return resetToken;
};

const User = mongoose.model("User", userSchema);

module.exports = User;
