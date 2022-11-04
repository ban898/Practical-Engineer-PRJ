const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    maxLength: [
      40,
      "A product name must have less or equal then 40 characters",
    ],
    minLength: [5, "A product name must have more or equal then 5 characters"],
  },
  createAt: {
    type: Date,
    default: Date.now(),
  },
  description: {
    type: String,
    trim: true,
  },
  price: {
    type: Number,
    required: [true, "A Product must have a price"],
  },
  lengthProduct: {
    type: String,
    enum: {
      values: ["l", "xl", "xxl", "s", "m"],
      message: "Length is either: s, m, l, xl, xxl",
    },
  },
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
