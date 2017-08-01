const User = require('../models/user');

class UserController {
  async index(ctx) {
    ctx.body = await User.find();
    ctx.status = 200;
  }

  async show(ctx) {
    const user = await User.findById(ctx.params.id);
    if(!user) return ctx.response.status(404);
    ctx.status = 200;
    ctx.body = user;
  }

  async update(ctx) {
    let user = await User.findById(ctx.params.id);
    if(!user) return ctx.status = 404;

    user = Object.assign(user, ctx.request.body);

    ctx.body = await user.save();
  }
}

const user = new UserController;

module.exports = user;
