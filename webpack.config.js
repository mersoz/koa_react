const path = require('path');
const webpack = require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const injectConfig = new HtmlWebpackPlugin({
  template: 'index.html',
  filename: 'index.html',
  inject: 'body'
});
const HotModuleReplcement = new webpack.HotModuleReplacementPlugin();
module.exports = {
  context: __dirname + '/app',
  entry: `${__dirname}/app/index.js`,
  output: {
    // publicPath: __dirname + '/bundle.js',
    path: path.resolve('build'),
    filename: 'bundle.js'
    // sourceMapFilename: 'app/index.js'
  },
  module: {
    loaders: [
      { test: /\.js$/, include: [`${__dirname}/app/`] , loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.jsx?$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.scss$/, loaders: ['style-loader', 'css-loader', 'sass-loader'], exclude: /node_modules/ }
    ]
  },
  devServer: {
    historyApiFallback: true,
    hot: true,
    inline: true,
    port: 8000
  },
  plugins: [HotModuleReplcement, injectConfig],
  node: {
    fs: 'empty'
  }
};
