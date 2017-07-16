const HtmlWebpackPlugin = require('html-webpack-plugin');
const injectConfig = new HtmlWebpackPlugin({
  template: './index.html',
  filename: 'index.html',
  inject: 'body'
});
module.exports = {
  context: __dirname + '/app',
  entry: [`${__dirname}/app/index.js`, 'webpack-hot-middleware/client'],
  output: {
    publicPath: __dirname + '/build',
    path: __dirname + '/build',
    filename: 'bundle.js',
    sourceMapFilename: 'build/bundle.js.map'
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.jsx?$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.scss$/, loaders: ['style-loader', 'css-loader', 'sass-loader'], exclude: /node_modules/ }
    ]
  },
  plugins: [injectConfig],
  node: {
    fs: 'empty'
  }
};
