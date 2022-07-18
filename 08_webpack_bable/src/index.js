const msg = "hello world";
const foo = (msg) => {
  console.log(msg);
};
const promise = new Promise((resolve, reject) => {
  resolve(1);
});

foo(msg);

/*入口文件使用polyfill*/
// import "core-js/stable";
