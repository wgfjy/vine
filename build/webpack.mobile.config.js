const path = require('path')
const merge = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpackBaseConfig = require('./webpack.base.config.js')

module.exports = merge(webpackBaseConfig, {
  mode: 'production',
  entry: {
    'vine-mobile': './examples/mobile.js'
  },
  output: {
    path: path.join(__dirname, '../examples/dist'),
    publicPath: 'https://github.com/wgfjy/vine/blob/master/examples/dist/',
    filename: '[name].[hash:8].js',
    chunkFilename: 'async_[name].[chunkhash:8].js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      chunks: ['vine-mobile'],
      template: 'examples/index.tpl',
      filename: 'index.html',
      inject: true
    })
  ]
})