const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { DefinePlugin } = require("webpack");
// const HtmlWebpackPlugin=require('htm')

module.exports = {
  mode: "production",
  plugins: [
    new HtmlWebpackPlugin({
      title: "webpack案例",
      template: "./public/index.ejs",
    }),
    new DefinePlugin({
      BASE_URL: '"../public/"',
    }),
  ],
  entry: "./src/index.js",
  module: {
    // rules: [
    //   {
    //     test: /\.m?js$/,
    //     use: {
    //       loader: "babel-loader",
    //     },
    //   },
    // ],
    rules: [
      {
        test: /\.m?js$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [["@babel/preset-env"]],
          },
        },
      },
    ],
  },
  output: {
    filename: "bundle.js",
    path: path.resolve("./build"),
    clean: true,
  },
  devServer: {
    port: 8080,
    compress: true,
  },
};
