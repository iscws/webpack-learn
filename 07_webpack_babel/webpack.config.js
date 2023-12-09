const path = require("path");
module.exports = {
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
  },
};
