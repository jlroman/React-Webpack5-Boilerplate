/* eslint-disable global-require */
/* eslint-disable object-shorthand */
/* eslint-disable func-names */
const cwd = process.cwd();
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  target: 'web',

  entry: {
    index: './src/index.js',
  },

  optimization: {
    splitChunks: {
      chunks: 'all',
      automaticNameDelimiter: '_',
    },
  },

  module: {
    rules: [
      {
        test: /\.(png|jpg)$/,
        use: ['file-loader'],
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              plugins: function () {
                return [require('precss'), require('autoprefixer')];
              },
            },
          },
          'sass-loader',
        ],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/env', '@babel/preset-react'],
            plugins: ['transform-class-properties'],
          },
        },
      },
      {
        test: /\.hbs$/,
        loader: 'handlebars-loader',
      },
    ],
  },

  plugins: [
    new CleanWebpackPlugin(),

    new HtmlWebpackPlugin({
      filename: 'index.html',
      chunks: ['index', 'vendors_index'],
      title: 'Hello World',
      description: 'Template for Projects Using React',
      template: './src/index.hbs',
    }),
  ],

  resolve: {
    alias: {
      Components: `${cwd}/src/components/`,
    },
  },
};
