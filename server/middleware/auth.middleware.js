const ApiError = require('../exceptions/api-errors');
const tokenService = require('../service/token-service');

module.exports = function (req, res, next) {
  try {
    const accessToken = req.headers.authorization;
    if (!accessToken) {
      return next(ApiError.UnauthorizedError());
    }
    const data = accessToken.split(' ')[1];
    if (!data) {
      return next(ApiError.UnauthorizedError());
    }
    const userData = tokenService.validateAccessToken(data);
    if (!userData) {
      return next(ApiError.UnauthorizedError());
    }
    req.user = userData;
    next();
  } catch (e) {
    return next(ApiError.UnauthorizedError());
  }
};
