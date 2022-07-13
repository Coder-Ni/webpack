// import "css-loader!../../css/index.css";
import "../css/index.css";
import "./component.less";

function component() {
  const div = document.createElement("div");
  div.innerHTML = ["hello", "world"].join("!");
  div.className = "content";

  const img = new Image();
  // img.src = require("../img/1.jpeg");
  // file loader 4 以后返回对象
  img.src = require("../img/1.jpeg").default;

  const bgDiv = document.createElement("div");
  bgDiv.style.width = 200 + "px";
  bgDiv.style.height = 200 + "px";
  // bgDiv.style.backgroundColor = "pink";
  bgDiv.className = "bg-div";

  div.appendChild(img);
  div.appendChild(bgDiv);

  return div;
}

document.body.appendChild(component());
