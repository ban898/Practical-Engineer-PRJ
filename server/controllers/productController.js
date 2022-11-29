const Product = require("./../models/productModel");
const multer = require("multer");
const AppError = require("./../utils/appError");
const sharp = require("sharp");

const multerStorage = multer.memoryStorage();

const multerFilter = (req, file, cb) => {
  if (file.mimetype.startsWith("image")) {
    cb(null, true);
  } else {
    cb(new AppError("Not an image! Please upload only images.", 400), false);
  }
};

const upload = multer({ storage: multerStorage, fileFilter: multerFilter });

exports.uploadProductImages = upload.fields([{ name: "images", maxCount: 6 }]);

exports.resizeProductImages = async (req, res, next) => {
  console.log("test 1");
  if (!req.files.images) return next();
  console.log("test 2");
  req.body.images = [];

  await Promise.all(
    req.files.images.map(async (file, i) => {
      const filename = `product-${req.params.id}-${Date.now()}-${i + 1}.jpeg`;

      await sharp(file.buffer)
        .resize(2000, 1333)
        .toFormat("jpeg")
        .jpeg({ quality: 90 })
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
  console.log(req.body.categoryId);
  try {
    const products = await Product.aggregate([
      {
        $match: { category: { $eq: req.body.categoryId } },
      },
    ]);
    res.status(200).json({
      status: "success",
      products,
    });
  } catch (err) {
    res.status(400).json({ status: "fail", message: err });
  }
};
