const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

const mapClasses = require('./mapClasses')

module.exports = {
  entry: {
    index: './src/index.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
            {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
            options: {
              preprocessor: mapClasses
            }
          }
        ]
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'postcss-loader'
        ]
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'file-loader'
          }
        ]
      }
    ]
  },
  devServer: {
    contentBase: 'public/',
    hot: true,
    port: 8080
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      inject: true,
      chunks: ['index'],
      filename: 'index.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/about.html',
      inject: true,
      chunks: ['index'],
      filename: 'about.html'
    }),
  ]
}
