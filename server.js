const Koa = require('koa');
const {port} = require('./config/environment');
const app = new Koa();
const bodyParser = require('koa-bodyparser');

app.use(bodyParser());

app.listen(port, ()=> console.log(`Koa is up and running on port ${port}`));
