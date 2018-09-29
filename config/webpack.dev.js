const path = require('path')
const merge = require('webpack-merge')
const common = require('./webpack.common.js')
const StyleLintPlugin = require('stylelint-webpack-plugin')

module.exports = merge(common, {
  mode: 'development',
  devServer: {
    host: 'localhost',
    port: 3000,
    open: true,
    stats: { children: false }
  },
  plugins: [
    new StyleLintPlugin({
      context: path.resolve(__dirname, '../src'),
      files: ['**/*.s?(a|c)ss']
    })
  ]
})
