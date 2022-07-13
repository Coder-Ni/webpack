const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "./dist"),
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
      /* url-loder用法与file-loader相似,前者会将文件转化为base64编码的data嵌入js中(影响js加载速度)
       较小图片转成base64减少http请求
       较大的图片放在文件中使用http请求*/
      // {
      //   /*?0或1,+ 1或多, *0或多*/
      //   test: /\.(png|svg|jpe?g|gif)$/i,
      //   use: [
      //     {
      //       loader: "file-loader",
      //       options: {
      //         name: "img/[name]-[hash:6].[ext]",
      //         // outputPath: "img"
      //       },
      //     },
      //   ],
      // },

      {
        test: /\.(png|svg|jpe?g|gif)$/i,
        use: [
          {
            loader: "url-loader",
            options: {
              name: "img/[name]-[hash:6].[ext]",
              // 当文件超过limit限制的大小(bit)转化为文件
              limit: 30 * 1024,
            },
          },
        ],
      },
    ],
  },
};
