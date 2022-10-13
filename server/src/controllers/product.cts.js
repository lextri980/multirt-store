const { dtoSc, dtoFail, dtoServer } = require("../utils/dto");
const Product = require("../models/Product");

//! desc   Get all products
//! route  /product/list
//! access Public
const getProduct = async (req, res) => {
  try {
    const data = await Product.find();
    return dtoSc(res, {
      success: true,
      data,
    });
  } catch (error) {
    console.log(error);
    return dtoServer(res);
  }
};

//! desc   Get detail product
//! route  /product/detail/:id
//! access Public
const getProductDetail = async (req, res) => {
  try {
    const data = await Product.findOne({ _id: req.params.id });
    return dtoSc(res, {
      success: true,
      data,
    });
  } catch (error) {
    console.log(error);
    return dtoServer(res);
  }
};

//! desc   Get 3 top products
//! route  /product/top
//! access Public
const GetProductTop = async (req, res) => {
  try {
    const data = await Product.find().sort({ review: -1 }).limit(3);
    return dtoSc(res, {
      success: true,
      data,
    });
  } catch (error) {
    console.log(error);
    return dtoServer(res);
  }
};

//! desc   Create new product
//! route  /product/create
//! access Private/isAdmin
const createProduct = async (req, res) => {
  const { name, image, brand, category, description, price, countInStock } =
    req.body;
  //* Validate missing field
  if (
    !name ||
    !image ||
    !brand ||
    !category ||
    !description ||
    !price ||
    !countInStock
  ) {
    return dtoFail(res, "Missing information");
  }
  try {
    const newProduct = new Product({
      name,
      image,
      brand,
      category,
      description,
      price,
      countInStock,
    });
    await newProduct.save();
  } catch (error) {
    console.log(error);
    return dtoServer(res);
  }
};

module.exports = { getProduct, getProductDetail, GetProductTop, createProduct };
