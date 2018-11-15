const CleanWebPackPlugin = require('clean-webpack-plugin');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require('path');
const devMode = process.env.NODE_ENV !== 'production'

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = {
  entry: [
    'bootstrap-loader',
    './src/index.js'
  ],
  output: {
    filename: devMode ? '[name].js' : '[name].[hash].js',
    path: path.resolve('./build')
  },
  resolve: {
    extensions: ['.js'],
    alias: {
      '@': resolve('src'),
      'stylesheets': resolve('src/assets/stylesheets'),
      'images': resolve('src/assets/images')
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: ['/node_modules/'],
        use: [{ loader: 'babel-loader' }]
      },
      {
        test: /\.js$/,
        loader: "eslint-loader",
        enforce: 'pre',
        include: [path.resolve('./src')],
        options: {
          formatter: require('eslint-friendly-formatter'),
          emitWarning: true
        }
      },
      {
        test: /\.s(a|c)ss$/,
        use: [
          { loader: MiniCssExtractPlugin.loader },
          { loader: 'css-loader' },
          { loader: 'sass-loader' },
          {
            loader: 'sass-resources-loader',
            options: {
              resources: [
                './src/assets/stylesheets/variables.scss',
                './src/assets/stylesheets/mixins.scss'
              ]
            }
          }
        ]
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
                name: '[hash].[ext]',
                outputPath: 'images/'
            }
          }
        ]
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
                name: '[hash].[ext]',
                outputPath: 'fonts/'
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: devMode ? '[name].css' : '[name].[hash].css',
      chunkFilename: devMode ? '[id].css' : '[id].[hash].css',
    }),
    new HtmlWebPackPlugin({
      template: 'index.html'
    }),
    new CleanWebPackPlugin(['./build'])
  ]
}
