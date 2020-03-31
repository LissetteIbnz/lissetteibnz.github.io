const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const helpers = require('./helpers');
const hljs = require('highlight.js');

module.exports = merge(
  {},
  {
    context: helpers.resolveFromRootPath('src'),
    resolve: {
      alias: {
        '@': helpers.resolveFromRootPath('src'),
        content: helpers.resolveFromRootPath('content'),
        // '@material-ui/core': '@material-ui/core/es',
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
      baseStyles: ['./base.css', './app.css'],
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
          use: [
            {
              loader: 'html-loader',
            },
            {
              loader: 'markdown-loader',
              options: {
                highlight: (code, lang) => {
                  if (!lang || ['text', 'literal', 'nohighlight'].includes(lang)) {
                    return `<pre class="hljs">${code}</pre>`;
                  }
                  return hljs.highlight(lang, code).value;
                },
              },
            },
          ],
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
