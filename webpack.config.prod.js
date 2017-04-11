const path = require('path')
const webpack = require('webpack')
require("babel-polyfill")
const ExtractTextPlugin = require("extract-text-webpack-plugin");

function plugins() {
  return [
    new webpack.DefinePlugin({ 'process.env':{ 'NODE_ENV': JSON.stringify('production')} }),
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.optimize.CommonsChunkPlugin({ name: 'vendor', filename: 'vendor.js' }),
    new ExtractTextPlugin("./styles.css"),
  ]
}

function loaders() {
  return [
    {
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      query: {
        plugins: ['transform-decorators-legacy' ],
        presets: ['es2015', 'stage-0', 'react']
      }
    },
    {
      test: /\.css$/,
      loader: ExtractTextPlugin.extract({
        fallbackLoader: 'style-loader',
        loader: 'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader'
      })
    }
  ]
}

function entry() {
  return {
    app: './src/index',
    vendor: [ 'react', 'react-dom', 'react-redux', 'redux']
  }
}

function output() {
  return {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js',
    publicPath: '/public/'
  }
}

/* config */
module.exports = {
  entry: entry(),
  output: output(),
  module: { loaders: loaders() },
  plugins: plugins()
}
