const webpack = require('webpack')
const path = require('path')

module.exports = {
  entry: ['./src/index.js'],
  output: {
    path: path.join(__dirname, '/public/dist/'),
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
  // This creates the alias for the `themeable-css-loader` used above and points it to the
  // custom webpack loader
  resolveLoader: {
    alias: require('@instructure/ui-webpack-config').resolveLoader.alias
  },
  devServer: {
    contentBase: 'public/',
    hot: true,
    port: 8080
  },
  plugins: [new webpack.NamedModulesPlugin(), new webpack.HotModuleReplacementPlugin()]
}
