const mongoose = require("mongoose");
const validator = require("validator");

const cartSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  price: {
    type: Number,
  },
  description: {
    type: String,
  },
  image: String,
  quantity: {
    type: Number,
  },
  userId: {
    type: String,
    required: true,
  },
  productId: {
    type: String,
  },
  size: {
    type: String,
  },
});

const Cart = mongoose.model("Cart", cartSchema);

module.exports = Cart;
