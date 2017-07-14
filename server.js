const Koa = require('koa');
const IO = require('koa-socket');
const send = require('koa-send');
const {port, dbURI} = require('./config/environment');
const app = new Koa();
const io = new IO();
const serve = require('koa-static');
const bodyParser = require('koa-bodyparser');
const mongoose = require('mongoose');
const errHandler = require('./lib/errorHandler');
const routes = require('./config/routes');
mongoose.plugin(require('./lib/toJSON'));
mongoose.Promise = require('bluebird');

mongoose.connect(dbURI);
app.use(serve(`${__dirname}/build`));
app.use(bodyParser());

app.use(routes.routes());


app.use(async (ctx)=>{
  await send(ctx, 'build/index.html');
});
app.use(errHandler);

io.attach( app );

io.on('join', (ctx, data)=>{
  console.log('event fire', data);
});

io.on('connection',(socket)=>{
  console.log('user has connected');
});

io.on('message', async (socket)=>{
  console.log(socket);
  socket.emit('response', 'HELLO');
});


io.on('disconnect', async ()=>{
  await console.log('disconnecting socket');
  await io.sockets.disconnect();
  await io.sockets.close();
});

app.listen(port, ()=> console.log(`Koa is up and running on port ${port}`));
