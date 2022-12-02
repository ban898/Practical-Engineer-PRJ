const Cart = require("../models/cartModel");
// const AppError = require("../utils/appError");

exports.createCart = async (req, res) => {
  try {
    // req.body.userId = req.user.id;
    req.body.userId = "6374f8c989012df5630c8d69";

    await Cart.create(req.body);

    res.status(201).json({ status: "success" });
  } catch (err) {
    res.status(400).json({ status: "fail" });
  }
};

exports.getCartOfUser = async (req, res, next) => {
  try {
    const cart = await Cart.aggregate([
      { $match: { userId: { $eq: "6374f8c989012df5630c8d69" } } },
    ]);

    // const cart = await Cart.aggregate([
    //   { $match: { userId: { $eq: req.user.id } } },
    // ]);

    res.status(200).json({ status: "success", cart });
  } catch (err) {
    res.status(400).json({ status: "fail" });
  }
};

exports.addQuantity = async (req, res) => {
  try {
    const item = await Cart.findById({ _id: req.body.productId });

    await Cart.updateOne(
      { _id: req.body.productId },
      {
        quantity: req.body.quantity
          ? item.quantity + req.body.quantity
          : item.quantity + 1,
      }
    );

    const updatedItem = await Cart.findById({ _id: req.body.productId });

    res.status(200).json({ status: "success", quantity: updatedItem.quantity });
  } catch (err) {
    res.status(400).json({ status: "fail" });
  }
};

exports.removeQuantity = async (req, res) => {
  try {
    const item = await Cart.findById({ _id: req.body.productId });

    if (
      item.quantity === 1 ||
      item.quantity < req.body.quantity ||
      item.quantity === req.body.quantity
    ) {
      await Cart.findByIdAndDelete({ _id: req.body.productId });
    } else {
      await Cart.updateOne(
        { _id: req.body.productId },
        {
          quantity: req.body.quantity
            ? item.quantity - req.body.quantity
            : item.quantity - 1,
        }
      );
    }

    const updateditem = await Cart.findById({ _id: req.body.productId });

    res.status(200).json({ status: "success", quantity: updateditem.quantity });
  } catch (err) {
    res.status(400).json({ status: "fail", message: err });
  }
};

exports.deleteItem = async (req, res) => {
  try {
    console.log(req.params.productId);
    await Cart.findByIdAndDelete({ _id: req.params.productId });

    res.status(204).json({ status: "success" });
  } catch (err) {
    res.status(400).json({ status: "fail" });
  }
};
