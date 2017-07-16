const User = require('../models/user');
const jwt = require('jsonwebtoken');
const { secret } = require('../config/environment');

export default class Auth {
  async register(ctx){
    console.log(ctx);
  }
}
