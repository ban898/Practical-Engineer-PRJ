const Cart = require("../models/cartModel");
// const AppError = require("../utils/appError");

exports.createCart = async (req, res) => {
  try {
    req.body.userId = req.params.id;

    await Cart.create(req.body);

    res.status(201).json({ status: "success" });
  } catch (err) {
    res.status(400).json({ status: "fail" });
  }
};

exports.getCartOfUser = async (req, res, next) => {
  try {
    const cart = await Cart.aggregate([
      { $match: { userId: { $eq: req.params.id } } },
    ]);

    if (!cart.length) {
      res.status(200).json({ status: "success", length: 0 });
    } else {
      const itemsInCart = await Cart.aggregate([
        { $match: { userId: { $eq: req.params.id } } },
        {
          $group: {
            _id: null,
            itemsInCart: { $sum: "$quantity" },
            total: { $sum: { $multiply: ["$price", "$quantity"] } },
          },
        },
      ]);

      res.status(200).json({
        status: "success",
        cart,
        itemsInCart: itemsInCart[0].itemsInCart,
        total: itemsInCart[0].total,
      });
    }
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
    let updateditem = undefined;
    const item = await Cart.findById({ _id: req.body.productId });

    if (
      item.quantity === 1 ||
      item.quantity < req.body.quantity ||
      item.quantity === req.body.quantity
    ) {
      const res = await Cart.findByIdAndDelete({ _id: req.body.productId });
    } else {
      await Cart.updateOne(
        { _id: req.body.productId },
        {
          quantity: req.body.quantity
            ? item.quantity - req.body.quantity
            : item.quantity - 1,
        }
      );

      updateditem = await Cart.findById({ _id: req.body.productId });
    }

    if (!updateditem) {
      res.status(204).json({ status: "success" });
    } else {
      res
        .status(200)
        .json({ status: "success", quantity: updateditem.quantity });
    }
  } catch (err) {
    res.status(400).json({ status: "fail", message: err });
  }
};

exports.deleteItem = async (req, res) => {
  try {
    await Cart.findByIdAndDelete({ _id: req.params.productId });

    res.status(204).json({ status: "success" });
  } catch (err) {
    res.status(400).json({ status: "fail" });
  }
};
