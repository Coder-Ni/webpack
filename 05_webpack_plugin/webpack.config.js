const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { DefinePlugin } = require("webpack");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "js/main.js",
    path: path.resolve(__dirname, "./dist"),
    // asset资源路径
    assetModuleFilename: "img/[name][hash:6][ext]",
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
            },
          },
          "postcss-loader",
        ],
      },
      {
        test: /\.less$/,
        use: ["style-loader", "css-loader", "less-loader"],
      },
      /*file-loader*/
      // {
      //   test: /\.(png|svg|jpe?g|gif)$/i,
      //   type: "asset/resource",
      //   generator: {
      //     filename: "imgs/[name][hash:6][ext]"
      //   }
      // },
      /*url-loader*/
      // {
      //   test: /\.(png|svg|jpe?g|gif)$/i,
      //   type: "asset/inline",
      //   // generator: {
      //   //   dataUrl: content => {
      //   //     content = content.toString();
      //   //     return (content);
      //   //   }
      //   // }
      // },
      /*url-loader limit属性*/
      {
        test: /\.(png|svg|jpe?g|gif)$/i,
        type: "asset",
        generator: {
          filename: "img/Ni[name][ext]",
        },
        parser: {
          dataUrlCondition: {
            maxSize: 30 * 1024,
          },
        },
      },

      {
        test: /\.ttf$/i,
        type: "asset/resource",
        generator: {
          filename: "font/[name][hash:2][ext]",
        },
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: "ni",
      // favicon: "./src/img/1.jpeg",
      template: "./public/index.html",
    }),
    new DefinePlugin({
      Ni: "'Niiiiii'",
      BASE_URL: "'./'",
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: "public",
          globOptions: { ignore: ["**/*.html"] },
        },
      ],
    }),
  ],
};
