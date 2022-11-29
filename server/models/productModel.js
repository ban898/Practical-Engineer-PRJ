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
    minLength: [4, "A product name must have more or equal then 5 characters"],
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
    type: Array,
    default: ["s", "m", "l", "xl", "xxl"],
  },
  images: [String],
  category: {
    type: String,
    required: true,
  },
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
