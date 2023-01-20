const Cart = require("../models/cartModel");
const Product = require("../models/productModel");
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

exports.removeCartOfUser = async (req, res, next) => {
  try {
    const cart = await Cart.aggregate([{ $match: { userId: { $eq: req } } }]);

    cart.forEach(async (doc) => {
      await Cart.deleteOne({ userId: doc.userId });
    });
  } catch (err) {
    console.log(err);
  }
};

exports.addToCart = async (req, res) => {
  try {
    let flag = 0;
    try {
      const item = await Cart.findOne({
        productId: req.params.productId,
        size: req.body.size,
      });
      await Cart.updateOne(
        { productId: req.params.productId, size: req.body.size },
        {
          quantity: req.body.quantity
            ? item.quantity + req.body.quantity
            : item.quantity + 1,
        }
      );

      const updatedItem = await Cart.findOne({
        productId: req.params.productId,
      });
      flag = 1;
      res
        .status(200)
        .json({ status: "success", quantity: updatedItem.quantity });
    } catch (err) {}
    if (flag) return;
    const product = await Product.findById({ _id: req.params.productId });
    await Cart.create({
      userId: req.params.id,
      image: product.images[0],
      name: product.name,
      description: product.description,
      price: product.price,
      quantity: 1,
      productId: product._id,
    });
    res.status(200).json({ status: "success" });
  } catch (err) {
    res.status(400).json({ status: "fail", message: err });
  }
};

exports.addQuantity = async (req, res) => {
  try {
    const item = await Cart.findOne({ productId: req.params.productId });

    await Cart.updateOne(
      { productId: req.params.productId },
      {
        quantity: req.body.quantity
          ? item.quantity + req.body.quantity
          : item.quantity + 1,
      }
    );

    const updatedItem = await Cart.findOne({
      productId: req.params.productId,
    });

    res.status(200).json({ status: "success", quantity: updatedItem.quantity });
  } catch (err) {
    res.status(400).json({ status: "fail", message: err });
  }
};

exports.removeQuantity = async (req, res) => {
  try {
    let updateditem = undefined;
    const item = await Cart.findOne({ productId: req.body.productId });

    if (
      item.quantity === 1 ||
      item.quantity < req.body.quantity ||
      item.quantity === req.body.quantity
    ) {
      await Cart.findOneAndDelete({
        productId: req.body.productId,
      });
    } else {
      await Cart.updateOne(
        { productId: req.body.productId },
        {
          quantity: req.body.quantity
            ? item.quantity - req.body.quantity
            : item.quantity - 1,
        }
      );

      updateditem = await Cart.findOne({ productId: req.body.productId });
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
    await Cart.findOneAndDelete({ productId: req.params.productId });

    res.status(204).json({ status: "success" });
  } catch (err) {
    res.status(400).json({ status: "fail" });
  }
};
