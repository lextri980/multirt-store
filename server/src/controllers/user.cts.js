const { emailRegex, passwordRegex } = require("../constants/regex");
const User = require("../models/User");
const { dtoSc, dtoFail, dtoServer } = require("../utils/dto");

//! desc   Get all user
//! route  GET /user
//! access Private/isAdmin
const getUser = async (req, res) => {
  try {
    const data = await User.find({});
    return dtoSc(res, {
      success: true,
      data,
    });
  } catch (error) {
    console.log(error);
    return dtoServer(res);
  }
};

//! desc   Get user detail
//! route  GET /user/:id
//! access Private/isAdmin
const getUserDetail = async (req, res) => {
  try {
    const data = await User.findOne({ _id: req.params.id });
    return dtoSc(res, {
      success: true,
      data,
    });
  } catch (error) {
    console.log(error);
    return dtoServer(res);
  }
};

//! desc   Update user
//! route  POST /user/:id
//! access Private/isAdmin
const updateUser = async (req, res) => {
  const { isAdmin } = req.body;
  try {
    let updateData = { isAdmin };
    const updateCondition = { _id: req.params.id };
    updateData = await User.findOneAndUpdate(updateCondition, updateData, {
      new: true,
    });
    if (!updateData) {
      return dtoFail(res, "User is not found");
    }
    return dtoSc(res, {
      success: true,
      message: "Update user successfully",
      data: updateData,
    });
  } catch (error) {
    console.log(error);
    return dtoServer(res);
  }
};

//! desc   Delete user
//! route  DELETE /user/:id
//! access Private/isAdmin
const deleteUser = async (req, res) => {
  const deleteCondition = { _id: req.params.id };
  try {
    const deleteData = await User.findOneAndDelete(deleteCondition);
    if (!deleteData) {
      return dtoFail(res, "User is not found");
    }
    return dtoSc(res, {
      success: true,
      message: "Delete user successfully",
      data: deleteData,
    });
  } catch (error) {
    console.log(error);
    return dtoServer(res);
  }
};

//! desc   Get user profile
//! route  GET /user/profile
//! access Private
const getUserProfile = async (req, res) => {
  try {
    const data = await User.findById(req.user._id);
    return dtoSc(res, {
      success: true,
      data,
    });
  } catch (error) {
    console.log(error);
    return dtoServer(res);
  }
};

//! desc   Update user profile
//! route  POST /user/profile
//! access Private
const updateUserProfile = async (req, res) => {
  const { email, name, password } = req.body;

  // Validate missing field
  if (!email || !name || !password) {
    return dtoFail(res, "Missing information");
  }

  try {
    // Validate field
    const user = await User.findOne({ email });
    if (user) {
      return dtoFail(res, "Email is already existed");
    }
    if (emailRegex.test(email === false)) {
      return dtoFail(res, "Invalid email");
    }
    if (passwordRegex.test(password) === false) {
      return dtoFail(res, "Invalid password");
    }

    //Update data
    let updateData = { email, name, password };
    const updateCondition = { _id: req.user.id };
    updateData = await User.findOneAndUpdate(updateCondition, updateData, {
      new: true,
    });
    if (!updateData) {
      return dtoFail(res, "User is not found");
    }
    return dtoSc(res, {
      success: true,
      message: "Update user successfully",
      data: updateData,
    });
  } catch (error) {
    console.log(error);
    return dtoServer(res);
  }
};

module.exports = {
  getUser,
  getUserDetail,
  updateUser,
  deleteUser,
  getUserProfile,
  updateUserProfile,
};
