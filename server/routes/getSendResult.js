exports.getErr = function (err = "server internal error", errCode = 500) {
  return {
    code: errCode,
    msg: err,
  };
};

exports.getResult = function (result) {
  return {
    code: 0,
    msg: "",
    data: result
  }
}
exports.asyncHandler = (handler) => {
  return async (req, res, next) => {
    try {
      const result = await handler(req, res, next);
      // 将返回的数据给前端
      res.send(exports.getResult(result));
    } catch (err) {
      next(err)
    }
  }
}
