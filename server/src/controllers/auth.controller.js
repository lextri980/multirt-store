const User = require("../models/User");
const {
  generateToken,
  generateRememberedToken,
} = require("../utils/generateToken");
const { emailRegex, passwordRegex } = require("../constants/regex");
const { dtoSc, dtoFail, dtoServer } = require("../utils/dto");

//! desc   Login
//! route  POST /auth/login
//! access Public
const login = async (req, res) => {
  const { email, password, remember } = req.body;
  //Validate lack of field
  if (!email || !password) {
    return dtoFail(res, "Missing information");
  }
  try {
    const user = await User.findOne({ email, password }).select("-password");
    if (!user || !password) {
      return dtoFail(res, "Incorrect information");
    }
    return dtoSc(res, {
      success: true,
      message: "Login successfully",
      token: remember
        ? generateRememberedToken(user._id)
        : generateToken(user._id),
      user,
    });
  } catch (error) {
    console.log(error);
    return dtoServer(res);
  }
};

//! desc   Register
//! route  POST /auth/register
//! access Public
const register = async (req, res) => {
  const { name, email, password } = req.body;
  //Validate lack of field
  if (!name || !email || !password) {
    return dtoFail(res, "Missing information");
  }
  //Validate email format
  if (emailRegex.test(email) === false) {
    return dtoFail(res, "Invalid email");
  }
  //Validate password format
  if (passwordRegex.test(password) === false) {
    return dtoFail(res, "Invalid password");
  }

  try {
    const user = await User.findOne({ email });
    if (user) {
      return dtoFail(res, "Email is already existed");
    }

    const newUser = new User({ name, email, password });
    await newUser.save();
    return dtoSc(res, {
      success: true,
      message: "Register successfully",
    });
  } catch (error) {
    console.log(error);
    return dtoServer(res);
  }
};

module.exports = { login, register };
