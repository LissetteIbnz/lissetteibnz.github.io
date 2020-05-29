const merge = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const base = require('./base');
const helpers = require('./helpers');

module.exports = merge(base, {
  mode: 'production',
  output: {
    path: helpers.distPath, //helpers.resolveFromRootPath(''),
    filename: `${helpers.outputBundlesPath}/[name].[chunkhash].js`,
  },
  module: {
    rules: [
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: `${helpers.outputImagesPath}/[name].[ext]?[hash]`,
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
      filename: `${helpers.outputStylesPath}/[chunkhash].[name].css`,
    }),
  ],
});
