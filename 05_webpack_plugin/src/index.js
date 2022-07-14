import { sum, mul } from "./js/math.js";
console.log(sum(20, 30));
console.log(mul(20, 30));

const { dateFormat, priceFormat } = require("./js/format.js");
console.log(dateFormat());
console.log(priceFormat());

import "./component/component";
