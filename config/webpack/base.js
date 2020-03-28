const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const helpers = require('./helpers');

module.exports = merge(
  {},
  {
    context: helpers.resolveFromRootPath('src'),
    resolve: {
      alias: {
        '@material-ui/core': '@material-ui/core/es',
        '~': helpers.resolveFromRootPath('src'),
        // assets: helpers.resolveFromRootPath('src/assets'),
        // common: helpers.resolveFromRootPath('src/common'),
        // core: helpers.resolveFromRootPath('src/core'),
        // layouts: helpers.resolveFromRootPath('src/layouts'),
        // pods: helpers.resolveFromRootPath('src/pods'),
        // scenes: helpers.resolveFromRootPath('src/scenes'),
        // 'common-app': helpers.resolveFromRootPath('src/common-app'),
      },
      extensions: ['.js', '.ts', '.tsx'],
    },
    entry: {
      baseStyles: ['./base.css'],
      app: ['regenerator-runtime/runtime', './index.tsx'],
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
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
        // favicon: 'assets/favicon.ico',
        filename: 'index.html',
        template: 'index.html',
      }),
    ],
  }
);
