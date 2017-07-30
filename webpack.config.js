const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const injectConfig = new HtmlWebpackPlugin({
  template: 'index.html',
  filename: 'index.html',
  inject: 'body'
});
module.exports = {
  context: __dirname + '/app',
  entry: `${__dirname}/app/index.js`,
  output: {
    // publicPath: __dirname + '/bundle.js',
    path: path.join(__dirname, './'),
    filename: 'bundle.js'
    // sourceMapFilename: 'app/index.js'
  },
  devtool: 'source-map',
  module: {
    loaders: [
      { test: /\.js$/, include: [`${__dirname}/app/`] , loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.jsx?$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.scss$/, loaders: ['style-loader', 'css-loader', 'sass-loader'], exclude: /node_modules/ }
    ]
  },
  plugins: [injectConfig],
  node: {
    fs: 'empty'
  }
};
