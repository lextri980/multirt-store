const User = require("../models/User");
const { dtoSc, dtoFail, dtoServer } = require('../utils/dto');

//! desc   Get all user
//! route  GET /user
//! access Private/isAdmin
const getUser = async (req, res) => {
  try {
    const data = await User.find({})
    return dtoSc(res, {
      success: true,
      data
    });
  } catch (error) {
    console.log(error)
    return dtoServer(res);
  }
};

//! desc   Get user detail
//! route  GET /user/:id
//! access Private/isAdmin
const getUserDetail = async (req, res) => {
  try {
    const data = await User.findById(req.params.id)
    return dtoSc(res, {
      success: true,
      data
    });
  } catch (error) {
    console.log(error)
    return dtoServer(res);
  }
};

//! desc   Update user
//! route  POST /user/:id
//! access Private/isAdmin
const updateUser = async (req, res) => {};

//! desc   Delete user
//! route  DELETE /user/:id
//! access Private/isAdmin
const deleteUser = async (req, res) => {};

//! desc   Get user profile
//! route  GET /user/profile
//! access Private
const getUserProfile = async (req, res) => {
  console.log('id', req.user._id.toString())
  const id = req.user._id.toString()
  try {
    const data = await User.findById(id)
    return dtoSc(res, {
      success: true,
      data
    });
  } catch (error) {
    console.log(error)
    return dtoServer(res);
  }
};

//! desc   Update user profile
//! route  POST /user/profile
//! access Private
const updateUserProfile = async (req, res) => {};

module.exports = {
  getUser,
  getUserDetail,
  updateUser,
  deleteUser,
  getUserProfile,
  updateUserProfile,
};
