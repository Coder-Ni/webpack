import React, { PureComponent } from "react";
import ReactDOM from "react-dom";

export default class Index extends PureComponent {
  render() {
    return <div>index</div>;
  }
}

ReactDOM.render(<Index />, document.getElementById("root"));
