const User = require("../models/User");
const generateToken = require("../utils/generateToken");
const { emailRegex } = require("../constants/regex");

//! desc   Login
//! route  POST /auth/login
//! access Public
const login = async (req, res) => {
  const { email, password } = req.body;
  //Validate lack of field
  if (!email || !password) {
    console.log(emailRegex.test(email));
    return res.status(400).json({
      success: false,
      message: "Missing information",
    });
  }
  //Validate email format
  if (emailRegex.test(email) === false) {
    console.log("in");
    return res.status(400).json({
      success: false,
      message: "Email is invalid",
    });
  }
  try {
    const user = await User.findOne({ email, password }).select("-password");
    console.log(user);
    if (!user || !password) {
      return res.status(400).json({
        success: false,
        message: "Incorrect information",
      });
    }
    return res.status(200).json({
      success: true,
      message: "Login successfully",
      token: generateToken(user._id),
      user,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

//! desc   Register
//! route  POST /auth/register
//! access Public
const register = async (req, res) => {
  const { name, email, password } = req.body;
  const regex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
  //Validate lack of field
  if (!name || !email || !password) {
    return res.status(400).json({
      success: false,
      message: "Missing information",
    });
  }
  //Validate email format
  if (emailRegex.test(email) === false) {
    return res.status(400).json({
      success: false,
      message: "Email is invalid",
    });
  }
  try {
    const user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({
        success: false,
        message: "Email is already existed",
      });
    }

    const newUser = new User({ name, email, password });
    await newUser.save();
    return res.status(200).json({
      success: true,
      message: "Register successfully",
      token: generateToken(newUser._id),
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

module.exports = { login, register };
