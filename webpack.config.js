const path = require("path")
const HtmlWebpackPlugin = require('html-webpack-plugin')

const htmlPlugin = new HtmlWebpackPlugin({
  template: "./public/index.html",
  filename: "./index.html"
})

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.css/,
        exclude: /node_modules/,
        use: ["css-loader"]
      }
    ],
  },
  resolve: {
    extensions: ["*", ".js", ".jsx"],
  },
  plugins: [htmlPlugin]
}