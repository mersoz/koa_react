const User = require('../models/user');

class UserController {
  async index(ctx) {
    ctx.body = await User.find();
    ctx.response.status = 200;
  }

  async update(ctx) {
    let user = await User.findById(ctx.params.id);
    if(!user) ctx.response.status(404);

    user = Object.assign(user, ctx.request.body);

    ctx.body = await user.save();
  }
}

const user = new UserController;

module.exports = user;
