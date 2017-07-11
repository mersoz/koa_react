const Koa = require('koa');
const {port, dbURI} = require('./config/environment');
const app = new Koa();
const bodyParser = require('koa-bodyparser');
const mongoose = require('mongoose');
const errHandler = require('./lib/errorHandler');
mongoose.plugin(require('./lib/toJSON'));
mongoose.Promise = require('bluebird');

mongoose.connect(dbURI);

app.use(bodyParser());


app.use(errHandler);
app.listen(port, ()=> console.log(`Koa is up and running on port ${port}`));
