var webpack = require('webpack')
var path = require('path')

module.exports = {
  entry: './index.jsx',
  output: {
    filename: 'dist/bundle.js',
    path: path.resolve(__dirname, '')
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  }
}
