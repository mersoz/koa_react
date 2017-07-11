const port = process.env.PORT || 3000;
const env = process.env.ENV || 'development';
const dbURI = process.env.MONGODB_URI || 'mongodb://localhost/koa-rest-api';

module.exports = {port, env, dbURI};
