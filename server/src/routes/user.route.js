const express = require("express");
const {
  getUser,
  getUserDetail,
  updateUser,
  deleteUser,
  getUserProfile,
  updateUserProfile,
} = require("../controllers/user.cts");
const isAdmin = require("../middleware/isAdmin");
const protectedRoute = require("../middleware/protectedRoute");
const router = express.Router();

router.get("/list", protectedRoute, isAdmin, getUser);
router.get("/detail/:id", protectedRoute, isAdmin, getUserDetail);
router.post("/update/:id", protectedRoute, isAdmin, updateUser);
router.delete("/delete/:id", protectedRoute, isAdmin, deleteUser);

router.get("/profile/list", protectedRoute, getUserProfile);
router.post("/profile/update", protectedRoute, updateUserProfile);
module.exports = router;
