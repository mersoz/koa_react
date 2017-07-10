const Koa = require('koa');
const {port} = require('./config/environment');
const app = new Koa();
const bodyParser = require('koa-bodyparser');
