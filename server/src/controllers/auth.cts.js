const User = require("../models/User");
const generateToken = require("../utils/generateToken");
const { emailRegex } = require("../constants/regex");
const dto = require("../utils/dto");

//! desc   Login
//! route  POST /auth/login
//! access Public
const login = async (req, res) => {
  const { email, password } = req.body;
  //Validate lack of field
  if (!email || !password) {
    return dto(res, 400, false, "Missing information");
  }
  try {
    const user = await User.findOne({ email, password }).select("-password");
    if (!user || !password) {
      return dto(res, 400, false, "Incorrect information");
    }
    return res.status(200).json({
      success: true,
      message: "Login successfully",
      token: generateToken(user._id),
      user,
    });
  } catch (error) {
    console.log(error);
    return dto(res, 500, false, "Internal server error");
  }
};

//! desc   Register
//! route  POST /auth/register
//! access Public
const register = async (req, res) => {
  const { name, email, password } = req.body;
  //Validate lack of field
  if (!name || !email || !password) {
    return dto(res, 400, false, "Missing information");
  }
  //Validate email format
  if (emailRegex.test(email) === false) {
    return dto(res, 400, false, "Email is invalid");
  }
  try {
    const user = await User.findOne({ email });
    if (user) {
      return dto(res, 400, false, "Email is already existed");
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
    return dto(res, 500, false, "Internal server error");
  }
};

module.exports = { login, register };
