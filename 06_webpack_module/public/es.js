(function () {
  "use strict";
  var __webpack_modules__ = {
    "./src/js/math.js": function (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) {
      __webpack_require__.r(__webpack_exports__);
      __webpack_require__.d(__webpack_exports__, {
        mul: function () {
          return mul;
        },
        sum: function () {
          return sum;
        },
      });
      function sum(num1, num2) {
        return num1 + num2;
      }

      function mul(num1, num2) {
        return num1 * num2;
      }
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

  !(function () {
    __webpack_require__.d = function (exports, definition) {
      for (var key in definition) {
        if (
          __webpack_require__.o(definition, key) &&
          !__webpack_require__.o(exports, key)
        ) {
          Object.defineProperty(exports, key, {
            enumerable: true,
            get: definition[key],
          });
        }
      }
    };
  })();

  !(function () {
    __webpack_require__.o = function (obj, prop) {
      return Object.prototype.hasOwnProperty.call(obj, prop);
    };
  })();

  !(function () {
    __webpack_require__.r = function (exports) {
      if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
        Object.defineProperty(exports, Symbol.toStringTag, {
          value: "Module",
        });
      }
      Object.defineProperty(exports, "__esModule", { value: true });
    };
  })();

  var __webpack_exports__ = {};
  !(function () {
    __webpack_require__.r(__webpack_exports__);
    var _js_math_js__WEBPACK_IMPORTED_MODULE_0__ =
      __webpack_require__("./src/js/math.js");

    console.log((0, _js_math_js__WEBPACK_IMPORTED_MODULE_0__.sum)(20, 30));
    console.log((0, _js_math_js__WEBPACK_IMPORTED_MODULE_0__.mul)(20, 30));
  })();
})();
