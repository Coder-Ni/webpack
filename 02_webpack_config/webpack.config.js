const path = require('path');
// 输出当前被运行文件的绝对文件路径
console.log(path.resolve(__filename));
// 输出当前被运行文件的绝对路径
console.log(path.resolve(__dirname));

module.exports = {
    // 指定入口文件
    entry: "./src/index.js",
    // +指定输出
    output: {
        filename: "dist.js",
        path: path.resolve(__dirname,'./build'), // 必须为绝对路径
    }
}