// import "css-loader!../../css/index.css";
import "../css/index.css";
import "./component.less";

function component() {
  const div = document.createElement("div");
  div.innerHTML = ["hello", "world"].join("!");
  div.className = "content";
  return div;
}

document.body.appendChild(component());
