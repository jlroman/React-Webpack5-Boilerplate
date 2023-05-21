/* eslint-disable import/no-dynamic-require */
const cwd = process.cwd();
const common = require(`${cwd}/webpack.common.config.js`);
const { merge } = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = merge(common, {
  mode: 'production',

  output: {
    filename: '[name].[contenthash].js',
    path: `${cwd}/dist`,
    publicPath: '/static/',
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
    }),
  ],
});
