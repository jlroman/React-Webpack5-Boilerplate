const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WriteFilePlugin = require('write-file-webpack-plugin');

module.exports = {
    entry: {
        'index' : './src/index.js'
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, './dist'),
        publicPath: ''
    },
    mode: 'development',
    devServer: {
        contentBase: path.resolve(__dirname, './dist'),
        index: 'index.html',
        port: 9000
    },
    optimization: {
        splitChunks: {
            chunks: "all",
            automaticNameDelimiter: '_'
        }
    },
    module : {
        rules : [
            {
                test: /\.(png|jpg)$/,
                use: [
                    'file-loader'
                ]
            }, 
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader, 'css-loader'
                ]
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
                                return [
                                    require('precss'),
                                    require('autoprefixer')
                                ]
                            }
                        }
                     },
                    'sass-loader'
                ]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/env', '@babel/preset-react'],
                        plugins: ['transform-class-properties']
                    }
                }
            },
            { 
                test: /\.hbs$/, 
                loader: 'handlebars-loader' 
            }
        ]
    },
    plugins : [
        new WriteFilePlugin(),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: '[name].style.css'
        }),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            chunks: ['index', 'vendors_index'],
            title: 'Hello World',
            description: 'Template for Projects Using React',
            template: './src/index.hbs'
        })
    ]
}