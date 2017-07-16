const User = require('../models/user');
const jwt = require('jsonwebtoken');
const { secret } = require('../config/environment');

class Auth {
  async register(ctx){
    ctx.body = await User.create(ctx.request.body);
    ctx.response.status= 201;
  }
}
const auth = new Auth;
module.exports = auth;
