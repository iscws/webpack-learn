const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { DefinePlugin } = require("webpack");
// const HtmlWebpackPlugin=require('htm')

module.exports = {
  mode: "development",
  devtool: "eval-source-map",
  entry: "./src/main.js",
  output: {
    filename: "bundle.js",
    path: path.resolve("./build"),
    clean: true,
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: "webpack案例",
      template: "./public/index.ejs",
    }),
    new DefinePlugin({
      BASE_URL: '"../public/"',
    }),
  ],
  devServer: {
    port: 8080,
    compress: true,
  },
};
