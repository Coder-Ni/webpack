const path = require("path");

module.exports = {
  mode: "production",
  output: {
    path: path.resolve(__dirname, "../prod"),
    filename: "./js/hello.js",
    clean: true,
  },
};
