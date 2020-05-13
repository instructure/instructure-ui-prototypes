const webpack = require('webpack')

module.exports = {
  entry: './src/index.js',
  output: {
    path: __dirname + '/public/dist/',
    filename: 'index.js',
    publicPath: '/dist'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      }
    ]
  }
}
