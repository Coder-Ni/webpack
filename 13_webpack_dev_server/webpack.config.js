const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  mode: "development",
  devtool: "source-map",
  entry: "./src/index.js",
  output: {
    filename: "./js/build.js",
    path: path.resolve(__dirname, "./build"),
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      // template: "./public/index.html",
      title: "ni",
    }),
  ],
  // watch: true,
  devServer: {
    hot: true,
    liveReload: false,
    port: 715
  },
};
