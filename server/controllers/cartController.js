const Cart = require("../models/cartModel");

exports.getCarts = async (req, res) => {
  try {
    const carts = await Cart.find();

    res.status(200).json({
      status: "success",
      carts,
    });
  } catch (err) {
    res.status(400).json({ status: "fail" });
  }
};

exports.createCart = async (req, res) => {
  try {
    await Cart.create(req.body);

    res.status(201).json({ status: "success" });
  } catch (err) {
    res.status(400).json({ status: "fail" });
  }
};
