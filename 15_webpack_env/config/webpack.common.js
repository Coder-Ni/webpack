const path = require("path");
const devConfig = require("./webpack.dev");
const prodConfig = require("./webpack.prod");
const { merge } = require("webpack-merge");

const commonConfig = {
  // 绝对路径，默认启动文件所在的文件夹
  // context: path.resolve(__dirname),
  // 相对于context配置的路径
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "../output"),
    filename: "./js/hello.js",
    clean: true,
  },
};

module.exports = (env) => {
  process.env.NODE_ENV = env.development ? "development" : "production";
  console.log("process.env.NODE_ENV", process.env.NODE_ENV);

  // 判断当前环境，通过merge合并配置
  const config = merge(commonConfig, env.production ? prodConfig : devConfig);
  console.log(config);
  return config;
};
