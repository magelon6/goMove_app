const bcrypt = require('bcrypt');
const uuid = require('uuid');
const { User } = require('../db/models');
const mailService = require('./mail-service');
const tokenService = require('./token-service');
const ApiError = require('../exceptions/api-errors');

class UserService {
  async registration(email, password) {
    const user = await User.findOne({ where: { email } });
    if (user) {
      throw ApiError.badRequestError('User already exists');
    }
    const hash = await bcrypt.hash(password, 7);
    const activationLink = uuid.v4();
    const newUser = await User.create({
      email,
      password: hash,
      activationLink,
    });
    await mailService.sendActivationMail(email, `${process.env.API_URL}/api/activate/${activationLink}`);
    const tokens = await tokenService.generateTokens({ ...newUser });
    await tokenService.saveToken(newUser, tokens.refreshToken);
    return { ...tokens, user: newUser };
  }

  async activate(activationLink) {
    const user = await User.findOne({ where: { activationLink } });
    if (!user) {
      throw ApiError.badRequestError('User not found');
    }
    if (user.isActivated) {
      throw ApiError.badRequestError('User already activated');
    }
    user.isActivated = true;
    await user.save();
    const tokens = await tokenService.generateTokens({ ...user });
    await tokenService.saveToken(user, tokens.refreshToken);
    return { ...tokens, user };
  }

  async login(email, password) {
    const user = await User.findOne({ where: { email } });
    if (!user) {
      throw ApiError.badRequestError('User not found');
    }
    if (!user.isActivated) {
      throw ApiError.badRequestError('User not activated');
    }
    const isValid = await bcrypt.compare(password, user.password);
    if (!isValid) {
      throw ApiError.badRequestError('Invalid password');
    }
    const tokens = await tokenService.generateTokens({ ...user });
    await tokenService.saveToken(user, tokens.refreshToken);
    return { ...tokens, user };
  }

  async logout(refreshToken) {
    const token = await tokenService.removeToken(refreshToken);
    return token;
  }

  async refresh(refreshToken) {
    if (!refreshToken) {
      throw ApiError.UnauthorizedError(401, 'Refresh token is required');
    }
    const userData = await tokenService.validateRefreshToken(refreshToken);
    const tokenFromDb = await tokenService.findToken(refreshToken);
    if (!userData || !tokenFromDb) {
      throw ApiError.UnauthorizedError(401, 'Rennew token required');
    }
    const userId = userData.dataValues.id;
    const user = await User.findOne({ where: { id: userId } });
    const tokens = await tokenService.generateTokens({ ...user });
    await tokenService.saveToken(user, tokens.refreshToken);
    return { ...tokens, user };
  }

  async getUsers() {
    const user = await User.findAll();
    if (!user) {
      throw ApiError.badRequestError('Users not found');
    }
    return user;
  }
}

module.exports = new UserService();
