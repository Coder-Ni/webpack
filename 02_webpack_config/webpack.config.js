const path = require("path");
// 输出当前被运行文件的绝对文件路径
console.log(path.resolve(__filename));
// 输出当前被运行文件的绝对路径
console.log(path.resolve(__dirname));

module.exports = {
  // 指定入口文件
  entry: "./src/index.js",
  // +指定输出
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "./dist"), // 必须为绝对路径
  },
  module: {
    rules: [
      {
        // 正则表达式,匹配资源
        test: /\.css$/,
        /*use只有一个loader时的简写*/
        // loader: "css-loader",
        /*loader加载顺序默认从下至上*/
        use: [
          "style-loader",

          {
            loader: "css-loader",
            options: {
              importLoaders:1
            }
          },
          // {
          //   loader: "postcss-loader",
          //   options: {
          //     postcssOptions: {
          //       plugins: [
          //         // require("autoprefixer"),
          //         "postcss-preset-env", // require的简写
          //       ],
          //     },
          //   },
          // },
          "postcss-loader",
          /*useEntry对象的简写*/
          // "css-loader"
        ],
      },
      {
        test: /\.less$/,
        use: ["style-loader", "css-loader", "less-loader"],
      },
    ],
  },
};
