const Koa = require('koa');
const IO = require('koa-socket');
const {port, dbURI} = require('./config/environment');
const app = new Koa();
const io = new IO();
const bodyParser = require('koa-bodyparser');
const mongoose = require('mongoose');
const errHandler = require('./lib/errorHandler');
const routes = require('./config/routes');
mongoose.plugin(require('./lib/toJSON'));
mongoose.Promise = require('bluebird');

mongoose.connect(dbURI);

app.use(bodyParser());

app.use(routes.routes());

app.use(errHandler);

io.attach( app );

io.on('join', (ctx, data)=>{
  console.log('event fire', data);
});
console.log('logging from the server');

io.on('disconnect', async ()=>{
  console.log('disconnecting socket');
  await io.sockets.disconnect();
  await io.sockets.close();
});

app.listen(port, ()=> console.log(`Koa is up and running on port ${port}`));
