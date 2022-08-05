// 封装方法，解决webpack中的路径问题

const path = require("path");

const appDir = process.cwd(); // node api 返回当前node运行的文件夹
const resolveApp = (relativePath) => path.resolve(appDir, relativePath);

console.log(resolveApp("./"));
module.exports = resolveApp;
