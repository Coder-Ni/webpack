const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  devtool: "source-map",
  entry: "./src/index.js",
  output: {
    filename: "js/main.js",
    path: path.resolve(__dirname, "./dist"),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: "babel-loader",
          options: {
            "presets": ["@babel/preset-env"]
            // plugins: ["@babel/plugin-transform-block-scoping","@babel/plugin-transform-arrow-functions"]
          },
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "ni",
    }),
  ],
};
