const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "./dist"),
    // asset资源路径
    assetModuleFilename: "img/[name][hash:6][ext]"
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
          filename: "img/Ni[name][ext]"
        },
        parser: {
          dataUrlCondition: {
            maxSize: 30 * 1024
          }
        }
      },
    ],
  },
};
