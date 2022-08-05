const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  mode: "development",
  devtool: "source-map",
  entry: "./src/index.js",
  output: {
    filename: "./js/dist.js",
    path: path.resolve(__dirname, "./dist"),
    // 在打包后的静态资源路径前拼接
    // publicPath: "./",
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "ni",
    }),
  ],
  devServer: {
    hot: true,
    liveReload: false,
    port: 715,
    static: {
      publicPath: "ni",
    },
    open: true,
    // 性能优化 -- 开启gzip，压缩打包后的静态文件
    compress: true,
    // 跨域代理
    proxy: {
      api: {
        // 需要代理的服务器地址
        target: "http://localhost:9090",
        // 将字符串替换成target
        pathRewrite: { "^/api": "" },
        // https服务器无证书情况下需要代理时
        secure: false,
        // 服务器需要校验请求头时，将此属性设置为true可避免校验失败
        changeOrigin: true,
      },
    },
  },
  // 解析包
  resolve: {
    // 别名
    alias: {
      src: path.resolve(__dirname, "./src"),
    },
    // 当解析为文件夹时，默认加载index文件
    mainFiles: ["index"],
    // 当解析为文件时，默认添加后缀
    extensions: [".js", ".json", ".wasm", "jsx"],
  },
};
