const isAdmin = (req, res, next) => {
  if (req.user && req.user.isAdmin) {
    next();
  } else {
    return res.status(400).json({
      success: false,
      message: "Admin resource, not authorized",
    });
  }
};

module.exports = isAdmin;