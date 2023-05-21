/* eslint-disable import/no-dynamic-require */
const cwd = process.cwd();
const common = require(`${cwd}/webpack.common.config.js`);
const { merge } = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const WriteFilePlugin = require('write-file-webpack-plugin');

module.exports = merge(common, {
  mode: 'development',

  devtool: 'inline-source-map',

  output: {
    filename: '[name].bundle.js',
    path: `${cwd}/dist`,
    publicPath: '/',
  },

  devServer: {
    static: `${cwd}/dist`,
    port: 3000,
  },

  plugins: [
    new WriteFilePlugin({
      test: /^(?!.*(hot)).*/,
    }),

    new MiniCssExtractPlugin({
      filename: '[name].style.css',
    }),
  ],
});
