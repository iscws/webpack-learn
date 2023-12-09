const path = require("path")

module.exports = {
  entry: "./src/main.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "./build")
  },
  module:{
    rules:[
      {
        test:/\.css$/,
        use:[
          // use当中的loader是从后往前的
          {loader:"style-loader"},
          {loader:"css-loader"},
          {loader:"postcss-loader"},

        ]
      },{
        test:/\.less$/,
        use:[
          'style-loader',
          'css-loader',
          'less-loader'
        ]
      },{
        test:/\.(png|jpe?g|svg|gif)$/,
        type:"asset"
      }
    ]
  }
}
