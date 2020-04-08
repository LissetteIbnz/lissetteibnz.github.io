const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const Dotenv = require('dotenv-webpack');
const hljs = require('highlight.js');
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
      baseStyles: [`${helpers.srcAssetsPath}/app.css`],
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
        filename: 'index.html',
        template: 'index.html',
      }),
      new Dotenv({
        path: '.env',
      }),
    ],
  }
);
