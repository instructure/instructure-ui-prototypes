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
      },
      {
        test: /\.css$/,
        exclude: [/node_modules/],
        use: [
          'babel-loader',
          // Add the custom themeable loader
          'themeable-css-loader',
          // You can also add postcss to process css loaded via themeable
          'postcss-loader'
        ]
      }
    ]
  },
  resolveLoader: {
    alias: require('@instructure/ui-webpack-config').resolveLoader.alias
  }
}
