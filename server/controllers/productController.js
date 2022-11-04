const Product = require("./../models/productModel");

exports.getAllProducts = async (req, res, next) => {
  try {
    const products = await Product.find();

    res.status(200).json({
      status: "success",
      results: products.length,
      products,
    });
  } catch (err) {
    // res.status(400).json({
    //   status: "fail",
    //   err,
    //});
    console.log(err);
  }
};

exports.createProduct = async (req, res, next) => {
  try {
    await Product.create(req.body);

    res.status(200).json({
      status: "success",
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      err,
    });
  }
};
