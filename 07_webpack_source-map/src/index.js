// import { sum, mul } from "./js/math.js";
const { sum, mul } = require("./js/math.js");
console.log(sum(20, 30));
console.log(mul(20, 30));

// const { dateFormat, priceFormat } = require("./js/format.js");
import { dateFormat, priceFormat } from "./js/format.js"

console.log(dateFormat());
console.log(priceFormat());

console.log(process.env.NODE_ENV);