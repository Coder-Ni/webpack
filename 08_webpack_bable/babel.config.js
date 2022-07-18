module.exports = {
  //   presets: ["@babel/preset-env"],
  presets: [
    [
      "@babel/preset-env",
      {
        /*不使用polyfill*/
        useBuiltIns: false,
        /*按需使用polyfill*/
        // useBuiltIns: "usage",
        /*按入口文件用polyfill*/
        // useBuiltIns: "entry",
        corejs: "3.23",
      },
    ],
  ],

  plugins: [
    // "@babel/plugin-transform-block-scoping",
    // "@babel/plugin-transform-arrow-functions",
  ],
};
