const { dtoSc, dtoFail, dtoServer } = require("../utils/dto");
const Product = require("../models/Product");

//! desc   Get all products
//! route  /product/list
//! access Public
const getProduct = async (req, res) => {
  try {
    //* Init variables --------------------
    let data;
    const query = req.query;
    const querylength = Object.keys(query).length;
    const searchArray = [];
    const sortObject = {};
    const page = Number(query.page) || 1;
    const limit = Number(query.limit) || 2;
    let startIndex = (page - 1) * limit;

    //* Loop handle query search --------------------
    for (let i = 0; i < querylength; i++) {
      searchArray.push({
        [Object.keys(query)[i]]: {
          $regex: query[Object.keys(query)[i]],
          $options: "i",
        },
      });
    }

    //* Sort function --------------------
    if (query.sort) {
      const sortSplit = query.sort.split("_")[0];
      if (query.sort === `${sortSplit}_asc`) {
        sortObject[sortSplit] = 1;
      } else if (query.sort === `${sortSplit}_desc`) {
        sortObject[sortSplit] = -1;
      }
    }

    //* Search function - Pagination - find() model --------------------
    if (querylength > 0 && query.search) {
      console.log("Normal search");
      data = await Product.find({
        $or: [
          { name: { $regex: query.search, $options: "i" } },
          { brand: { $regex: query.search, $options: "i" } },
          { category: { $regex: query.search, $options: "i" } },
        ],
      })
        .sort(sortObject)
        .skip(startIndex)
        .limit(limit);
    } else if (querylength > 0 && !query.search) {
      console.log("Advanced search");
      data = await Product.find({
        $and: searchArray,
      })
        .sort(sortObject)
        .skip(startIndex)
        .limit(limit);
    } else {
      console.log("No query");
      data = await Product.find()
        .sort({ name: 1 })
        .skip(startIndex)
        .limit(limit);
    }

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
  const image = req.file;
  const { name, brand, category, description, price, countInStock } = req.body;
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
      user: req.user._id,
    });
    await newProduct.save();
    return dtoSc(res, {
      success: true,
      message: "Create product successfully",
      data: newProduct,
    });
  } catch (error) {
    console.log(error);
    return dtoServer(res);
  }
};

module.exports = { getProduct, getProductDetail, GetProductTop, createProduct };
