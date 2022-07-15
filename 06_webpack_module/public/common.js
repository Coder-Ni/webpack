(function () {
  var __webpack_modules__ = {
    "./src/js/format.js": function (module) {
      const dateFormat = () => "2022.1.1";
      const priceFormat = () => "$9.99";

      module.exports = {
        dateFormat,
        priceFormat,
      };
    },
  };
  var __webpack_module_cache__ = {};

  function __webpack_require__(moduleId) {
    var cachedModule = __webpack_module_cache__[moduleId];
    if (cachedModule !== undefined) {
      return cachedModule.exports;
    }
    var module = (__webpack_module_cache__[moduleId] = {
      exports: {},
    });
    __webpack_modules__[moduleId](module, module.exports, __webpack_require__);
    return module.exports;
  }

  var __webpack_exports__ = {};
  !(function () {
    const { dateFormat, priceFormat } =
      __webpack_require__("./src/js/format.js");

    console.log(dateFormat());
    console.log(priceFormat());
  })();
})();
