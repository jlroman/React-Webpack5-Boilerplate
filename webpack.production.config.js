const cwd = process.cwd();
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
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
};
