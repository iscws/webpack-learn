/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => {
  // webpackBootstrap
  /******/ "use strict";
  /******/ var __webpack_modules__ = {
    /***/ "./src/main.js":
      /*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils_math__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/math */ "./src/utils/math.js");\n\r\n\r\nconst message = "Hello World"\r\nconsole.log(message)\r\n\r\nconsole.log(address)\r\n\r\nconst foo = () => {\r\n  console.log("foo function exec~")\r\n}\r\nfoo()\r\n\r\nconsole.log((0,_utils_math__WEBPACK_IMPORTED_MODULE_0__.add)(20, 30))\r\nconsole.log((0,_utils_math__WEBPACK_IMPORTED_MODULE_0__.sub)(20, 30))\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbWFpbi5qcy5qcyIsIm1hcHBpbmdzIjoiOztBQUF1QztBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxnREFBRztBQUNmLFlBQVksZ0RBQUciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zb3VyY2VfbWFwLy4vc3JjL21haW4uanM/NTZkNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBhZGQsIHN1YiB9IGZyb20gJy4vdXRpbHMvbWF0aCdcclxuXHJcbmNvbnN0IG1lc3NhZ2UgPSBcIkhlbGxvIFdvcmxkXCJcclxuY29uc29sZS5sb2cobWVzc2FnZSlcclxuXHJcbmNvbnNvbGUubG9nKGFkZHJlc3MpXHJcblxyXG5jb25zdCBmb28gPSAoKSA9PiB7XHJcbiAgY29uc29sZS5sb2coXCJmb28gZnVuY3Rpb24gZXhlY35cIilcclxufVxyXG5mb28oKVxyXG5cclxuY29uc29sZS5sb2coYWRkKDIwLCAzMCkpXHJcbmNvbnNvbGUubG9nKHN1YigyMCwgMzApKVxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/main.js\n'
        );

        /***/
      },

    /***/ "./src/utils/math.js":
      /*!***************************!*\
  !*** ./src/utils/math.js ***!
  \***************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "add": () => (/* binding */ add),\n/* harmony export */   "sub": () => (/* binding */ sub)\n/* harmony export */ });\nfunction add(num1, num2) {\r\n  return num1 + num2\r\n}\r\n\r\nfunction sub(num1, num2) {\r\n  return num1 - num2\r\n}\r\n\r\nconsole.log(count)\r\n\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdXRpbHMvbWF0aC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc291cmNlX21hcC8uL3NyYy91dGlscy9tYXRoLmpzP2VkYzAiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gYWRkKG51bTEsIG51bTIpIHtcclxuICByZXR1cm4gbnVtMSArIG51bTJcclxufVxyXG5cclxuZnVuY3Rpb24gc3ViKG51bTEsIG51bTIpIHtcclxuICByZXR1cm4gbnVtMSAtIG51bTJcclxufVxyXG5cclxuY29uc29sZS5sb2coY291bnQpXHJcblxyXG5leHBvcnQge1xyXG4gIGFkZCxcclxuICBzdWJcclxufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/utils/math.js\n'
        );

        /***/
      },

    /******/
  };
  /************************************************************************/
  /******/ // The module cache
  /******/ var __webpack_module_cache__ = {};
  /******/
  /******/ // The require function
  /******/ function __webpack_require__(moduleId) {
    /******/ // Check if module is in cache
    /******/ var cachedModule = __webpack_module_cache__[moduleId];
    /******/ if (cachedModule !== undefined) {
      /******/ return cachedModule.exports;
      /******/
    }
    /******/ // Create a new module (and put it into the cache)
    /******/ var module = (__webpack_module_cache__[moduleId] = {
      /******/ // no module.id needed
      /******/ // no module.loaded needed
      /******/ exports: {},
      /******/
    });
    /******/
    /******/ // Execute the module function
    /******/ __webpack_modules__[moduleId](
      module,
      module.exports,
      __webpack_require__
    );
    /******/
    /******/ // Return the exports of the module
    /******/ return module.exports;
    /******/
  }
  /******/
  /************************************************************************/
  /******/ /* webpack/runtime/define property getters */
  /******/ (() => {
    /******/ // define getter functions for harmony exports
    /******/ __webpack_require__.d = (exports, definition) => {
      /******/ for (var key in definition) {
        /******/ if (
          __webpack_require__.o(definition, key) &&
          !__webpack_require__.o(exports, key)
        ) {
          /******/ Object.defineProperty(exports, key, {
            enumerable: true,
            get: definition[key],
          });
          /******/
        }
        /******/
      }
      /******/
    };
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/hasOwnProperty shorthand */
  /******/ (() => {
    /******/ __webpack_require__.o = (obj, prop) =>
      Object.prototype.hasOwnProperty.call(obj, prop);
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/make namespace object */
  /******/ (() => {
    /******/ // define __esModule on exports
    /******/ __webpack_require__.r = (exports) => {
      /******/ if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
        /******/ Object.defineProperty(exports, Symbol.toStringTag, {
          value: "Module",
        });
        /******/
      }
      /******/ Object.defineProperty(exports, "__esModule", { value: true });
      /******/
    };
    /******/
  })();
  /******/
  /************************************************************************/
  /******/
  /******/ // startup
  /******/ // Load entry module and return exports
  /******/ // This entry module can't be inlined because the eval-source-map devtool is used.
  /******/ var __webpack_exports__ = __webpack_require__("./src/main.js");
  /******/
  /******/
})();
