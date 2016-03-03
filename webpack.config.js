const webpack = require('webpack')
const notifier = require('webpack-notifier')
const path = require('path')

module.exports = {
  entry: './client/js/index.js',
  output: {
    path: path.join(__dirname, '/client/public'),
    publicPath: 'public/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.css$/,
        loader: 'style!css'
      },
      {
        test: /\.scss$/,
        loader: 'style!css!sass'
      },
      { test: /\.(png|jpg|woff|woff2|eot|ttf|svg)$/,
        loader: 'url-loader?limit=100000'
      }
    ]
  },
  resolve: {
    modulesDirectories: ['node_modules']
  },
  plugins: [
    new notifier()
  ]
}
