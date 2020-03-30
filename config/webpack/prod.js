const merge = require('webpack-merge');
// const Dotenv = require('dotenv-webpack');
const base = require('./base');
const helpers = require('./helpers');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = merge(base, {
  mode: 'production',
  output: {
    path: helpers.resolveFromRootPath(''),
    filename: './dist/js/[name].[chunkhash].js',
  },
  module: {
    rules: [
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: './dist/images/[name].[ext]?[hash]',
        },
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
    ],
  },
  plugins: [
    // new Dotenv({
    //   path: 'prod.env',
    // }),
    new MiniCssExtractPlugin({
      filename: './dist/css/[chunkhash].[name].css',
    }),
  ],
});
