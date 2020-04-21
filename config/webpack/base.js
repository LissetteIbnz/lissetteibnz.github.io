const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const Dotenv = require('dotenv-webpack');
const helpers = require('./helpers');

module.exports = merge(
  {},
  {
    context: helpers.srcPath,
    resolve: {
      alias: {
        '@': helpers.srcPath,
        content: helpers.contentPath,
      },
      extensions: ['.js', '.ts', '.tsx'],
    },
    entry: {
      baseStyles: [`${helpers.srcAssetsPath}/app.css`, `${helpers.srcAssetsPath}/animate.css`],
      app: ['regenerator-runtime/runtime', './index.tsx'],
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
        },
        {
          test: /\.md$/,
          use: 'raw-loader',
        },
      ],
    },
    optimization: {
      runtimeChunk: 'single',
      splitChunks: {
        cacheGroups: {
          vendor: {
            chunks: 'all',
            name: 'vendor',
            test: /[\\/]node_modules[\\/]/,
            enforce: true,
          },
        },
      },
    },
    plugins: [
      new HtmlWebpackPlugin({
        favicon: `${helpers.srcAssetsPath}/favicon-32x32.png`,
        filename: 'index.html',
        template: 'index.html',
      }),
      new Dotenv({
        path: '.env',
      }),
    ],
  }
);
