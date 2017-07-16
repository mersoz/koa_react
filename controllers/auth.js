const User = require('../models/user');
const jwt = require('jsonwebtoken');
const { secret } = require('../config/environment');

class Auth {

  async index(ctx) {
    ctx.body = await User.find().exec();
    ctx.response.status = 200;
  }

  async register(ctx) {
    ctx.body = await User.create(ctx.request.body);
    ctx.response.status= 201;
  }

  async login(ctx) {
    const user = await User.findOne({ email: ctx.request.body.email}).exec();
    if(!user || !user.validatePassword(ctx.request.body.password)) return ctx.status = 401;
    ctx.body = { token: jwt.sign({id: user.id}, secret, { expiresIn: '4h' }) };
  }
}
const auth = new Auth;
module.exports = auth;
