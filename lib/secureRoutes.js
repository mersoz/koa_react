const jwt = require('jsonwebtoken');
const { secret } = require('../config/environment');

async function secureRoute(ctx, next) {
  if(!ctx.request.header.authorization) return ctx.status = 401;
  const token = ctx.request.header.authorization.replace('Bearer ', '');
  try {
    jwt.verify(token, secret);
  } catch(err) {
    return ctx.status = 401;
  }

  await next();
}

module.exports = secureRoute;
