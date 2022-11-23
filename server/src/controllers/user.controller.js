const { emailRegex, passwordRegex } = require("../constants/regex");
const User = require("../models/User");
const { dtoSc, dtoFail, dtoServer } = require("../utils/dto");
const { PAGE, LIMIT } = require("../constants/common");

//! desc   Get all user
//! route  GET /user
//! access Private/isAdmin
const getUser = async (req, res) => {
  try {
    //* Init variables --------------------
    let data;
    const query = req.query;
    const querylength = Object.keys(query).length;
    const searchArray = [];
    const sortObject = {};
    const page = Number(query.page) || PAGE;
    const limit = Number(query.limit) || LIMIT;
    const startIndex = (page - 1) * limit;

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
    data = await User.find({});
    //* Search function - Pagination - find() model --------------------
    if (querylength > 0 && query.search) {
      console.log("Normal search");
      data = await User.find({
        $or: [
          { name: { $regex: query.search, $options: "i" } },
          { email: { $regex: query.search, $options: "i" } },
        ],
      })
        .sort(sortObject)
        .skip(startIndex)
        .limit(limit);
    } else if (querylength > 0 && !query.search) {
      console.log("Advanced search");
      data = await User.find({
        $and: searchArray,
      })
        .sort(sortObject)
        .skip(startIndex)
        .limit(limit);
    } else {
      console.log("No query");
      data = await User.find().sort({ name: 1 }).skip(startIndex).limit(limit);
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
//! access Private/Owner
const getUserProfile = async (req, res) => {
  try {
    const data = await User.findById(req.user._id).select("-password");

    if (!data) {
      return dtoFail(res, "User is not found");
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

//! desc   Update user profile
//! route  POST /user/profile/update
//! access Private/Owner
const updateUserProfile = async (req, res) => {
  const { email, name } = req.body;

  // Validate missing field
  if (!email || !name) {
    return dtoFail(res, "Missing information");
  }

  try {
    // Validate field
    if (emailRegex.test(email === false)) {
      return dtoFail(res, "Invalid email");
    }

    //Update data
    let updateData = { email, name };
    const updateCondition = { _id: req.user.id };
    updateData = await User.findOneAndUpdate(updateCondition, updateData, {
      new: true,
    }).select("-password");
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
    return dtoFail(res, "Maybe email is already existed");
  }
};

//! desc   Check old password
//! route  POST /user/profile/change-password
//! access Private/Owner
const updatePassword = async (req, res) => {
  const { oldPassword, password } = req.body;

  if (!oldPassword || !password) {
    return dtoFail(res, "Missing information");
  }

  try {
    const userProfile = await User.findById(req.user._id).select("password");

    if (oldPassword !== userProfile.password) {
      return dtoFail(res, "Your old password is not match");
    }

    if (password === userProfile.password) {
      return dtoFail(
        res,
        "Your new password must be different from your old password"
      );
    }

    let updateData = { password };
    const updateCondition = { _id: req.user.id };
    updateData = await User.findOneAndUpdate(updateCondition, updateData, {
      new: true,
    });

    if (!updateData) {
      return dtoFail(res, "User is not found");
    }

    return dtoSc(res, {
      success: true,
      message: "Change password successfully",
      data: true,
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
  updatePassword,
};
