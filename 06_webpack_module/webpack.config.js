const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { DefinePlugin } = require("webpack");

module.exports = {
  mode: 'development',
  devtool: "source-map",
  entry: "./src/index.js",
  output: {
    filename: "js/main.js",
    path: path.resolve(__dirname, "./dist"),
  },

  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: "ni",
    }),
    new DefinePlugin({
      Ni: "'Niiiiii'",
      BASE_URL: "'./'",
    })
  ],
};
