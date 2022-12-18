const Order = require("../models/orderModel");

exports.getAllOrdersOfUser = async (req, res) => {
  try {
    const orders = await Order.aggregate([
      { $match: { userId: { $eq: req.user.id } } },
    ]);

    res.status(200).json({ status: "success", orders });
  } catch (err) {
    res.status(400).json({ status: "fail", err });
  }
};
