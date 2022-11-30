const Product = require("./../models/productModel");
const multer = require("multer");
const AppError = require("./../utils/appError");
const sharp = require("sharp");

const multerStorage = multer.memoryStorage();

// const multerStorage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, "public/img/products/");
//   },
//   filename: (req, file, cb) => {
//     const ext = file.mimetype.split("/")[1];
//     cb(null, `user-${req.user.id}-${Date.now()}.${ext}`);
//   },
// });

const multerFilter = (req, file, cb) => {
  if (file.mimetype.startsWith("image")) {
    cb(null, true);
  } else {
    cb(new AppError("Not an image! Please upload only images.", 400), false);
  }
};

const upload = multer({ storage: multerStorage, fileFilter: multerFilter });

//exports.uploadProductImages = upload.single("image");

exports.uploadProductImages = upload.fields([{ name: "images", maxCount: 6 }]);

exports.resizeProductImages = async (req, res, next) => {
  if (!req.files.images) return next();
  req.body.images = [];

  await Promise.all(
    req.files.images.map(async (file, i) => {
      const filename = `product-${req.params.id}-${Date.now()}-${i + 1}.jpeg`;

      await sharp(file.buffer)
        .resize(900, 1198)
        .toFormat("jpeg")
        .jpeg({ quality: 100 })
        .toFile(`public/img/products/${filename}`);

      req.body.images.push(filename);
    })
  );

  next();
};

exports.getAllProducts = async (req, res, next) => {
  try {
    const products = await Product.find({ category: req.body.category });
    console.log(products);

    res.status(200).json({
      status: "success",
      results: products.length,
      products,
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      err,
    });
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

exports.getProductsByCetegory = async (req, res) => {
  try {
    const products = await Product.aggregate([
      {
        $match: { category: { $eq: req.body.categoryId } },
      },
    ]);
    res.status(200).json({
      status: "success",
      results: products.length,
      products,
    });
  } catch (err) {
    res.status(400).json({ status: "fail", message: err });
  }
};

exports.updateProduct = async (req, res, next) => {
  try {
    const newProduct = await Product.findByIdAndUpdate(
      req.body.productId,
      req.body,
      { new: true, runValidators: true }
    );

    if (!newProduct) {
      return next(new AppError("No document found with that ID", 404));
    }

    res.status(200).json({
      status: "success",
    });
  } catch (err) {
    res.status(400).json({ status: "fail", message: err });
  }
};

exports.deleteProduct = async (req, res, next) => {
  try {
    const document = await Product.findByIdAndDelete(req.params.id);

    if (!document) {
      return next(new AppError("No document found with that ID", 404));
    }

    res.status(204).json({ status: "success" });
  } catch (err) {
    res.status(404).json({ status: "fail" });
  }
};
