"terser-webpack-plugin": "^2.3.6"

---

"style-loader": "^1.2.1",

# React-Webpack4-Boilerplate

This repo serves as a boilerplate for future projects that will be built with React and Webpack 4

# Scripts

1. `npm run start-dev` - Will compile, transpile, and run a local dev server on port 3000

2. `npm prod build` - Will compile and transpile code into produciton ready bundles

3. `npm start-server` - Will run an express server on port 3000. Will server files in `/dist` foler

4. `start-prod` - Will run `npm prod build` and `npm start-server`

# Tech Stack

## React

A JavaScript library for building user interfaces

## Webpack

A static module bundler for modern JavaScript applications.

#### MiniCSSExtractPlugin

This plugin extracts CSS into separate files. It creates a CSS file per JS file which contains CSS. It supports On-Demand-Loading of CSS and SourceMaps.

Link: https://webpack.js.org/plugins/mini-css-extract-plugin/

#### CleanWebpackPlugin

By default, this plugin will remove all files inside webpack's output.path directory, as well as all unused webpack assets after every successful rebuild.

Link: https://github.com/johnagan/clean-webpack-plugin

#### HtmlWebpackPlugin

The plugin will generate an HTML5 file for you that includes all your webpack bundles in the body using script tags.

Link: https://webpack.js.org/plugins/html-webpack-plugin/

#### WriteFileWebpackPlugin

Forces webpack-dev-server program to write bundle files to the file system.

Link: https://github.com/gajus/write-file-webpack-plugin

#### Webpack DevServer

Use webpack with a development server that provides live reloading. This should be used for development only.

Link: https://webpack.js.org/configuration/dev-server/

## Babel

- Transpiling Javascript and React

## ESLint

- Maintain a code patter through the project
