const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  devtool: false,
  entry: "./src/main.js",
  // entry: {
  //   index: {
  //     import: "./src/index.js",
  //     dependOn: "shared",
  //   },
  //   main: {
  //     import: "./src/main.js",
  //     dependOn: "shared",
  //   },
  //   shared: ["axios"],
  // },
  output: {
    path: path.resolve(__dirname, "./build"),
    //placeholder
    filename: "[name]-bundle.js",
    chunkFilename: "[name]_chunk.js",
    clean: true,
  },
  resolve: {
    extensions: [".js", ".json", ".wasm", ".jsx", ".ts"],
  },
  devServer: {
    static: ["public", "content"],
    // host: '0.0.0.0',
    port: 4000,
    open: true,
    compress: true,
    proxy: {
      "/api": {
        target: "http://localhost:9000",
        pathRewrite: {
          "^/api": "",
        },

        // changeOrigin: true,
      },
    },
    historyApiFallback: true,
  },
  module: {
    rules: [
      // 针对jsx?代码进行babel处理
      {
        test: /\.jsx?$/, // x?: 0或者1个x
        // exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.ts$/,
        // use: "ts-loader"
        use: "babel-loader",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html",
    }),
  ],
};
