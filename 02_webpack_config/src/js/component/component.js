import "../../css/index.css";

function component() {
  const div = document.createElement("div");
  div.innerHTML = ["hello", "world"].join("!");
  div.className = "content";
  return div;
}

document.body.appendChild(component());
