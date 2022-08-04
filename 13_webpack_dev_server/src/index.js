import "./math";
import "./format";

const div = document.createElement("div");
const btn = document.createElement("a");
div.innerHTML = "hello Ni";
btn.innerHTML = "hello Nii";
btn.setAttribute("href", "#");
document.body.appendChild(div);
document.body.appendChild(btn);

if (module.hot) {
  // 接收两个参数：
  // 第一个参数：需要热更新的模块路径
  // 第二个参数：热更新结束后的回调

  // 若不传参数则所有模块都会热更新，且旧模块的代码会重复执行
  module.hot.accept();
}
