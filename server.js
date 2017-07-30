const Koa = require('koa');
const IO = require('koa-socket');
const send = require('koa-send');
const {port, dbURI} = require('./config/environment');
const app = new Koa();
const io = new IO();
const serve = require('koa-static');
const bodyParser = require('koa-bodyparser');
const cors = require('koa2-cors');
const mongoose = require('mongoose');
const errHandler = require('./lib/errorHandler');
const routes = require('./config/routes');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const e2k = require('express-to-koa');
const config = require('./webpack.config');
const compiler = webpack(config);
mongoose.plugin(require('./lib/toJSON'));
mongoose.Promise = require('bluebird');

app.use(e2k(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath })));
app.use(e2k(webpackHotMiddleware(compiler)));

mongoose.connect(dbURI);
app.use(serve(`${__dirname}/build`));
app.use(bodyParser());
app.use(cors());
app.use(routes.routes());


app.use(async (ctx)=>{
  await send(ctx, 'build/index.html');
});
app.use(errHandler);

io.attach( app );

io.on('connection',(socket)=>{
  console.log('user has connected', io.connections.size);
  io.broadcast('connections', {
    numConnections: io.connections.size
  });
});

io.on('message', (socket)=>{
  io.broadcast('response', {
    message: socket.data
  });
});

io.on('disconnect', async ()=>{
  await console.log('disconnecting socket');
  await io.sockets.disconnect();
  await io.sockets.close();
});
app.listen(port, ()=> console.log(`Koa is up and running on port ${port}`));
