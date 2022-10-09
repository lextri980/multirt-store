const dto = (res, status, success, message) => {
  return res.status(status).json({
    success: success,
    message: message,
  });
};

module.exports = dto;
