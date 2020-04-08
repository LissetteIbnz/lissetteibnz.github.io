const merge = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const base = require('./base');
const helpers = require('./helpers');

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
    new MiniCssExtractPlugin({
      filename: './dist/css/[chunkhash].[name].css',
    }),
  ],
});
