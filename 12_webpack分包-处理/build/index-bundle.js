"use strict";
(self["webpackChunkbabel_core_demo"] = self["webpackChunkbabel_core_demo"] || []).push([["index"],{

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/lib/axios.js");

var message = "hello index";
console.log(message);
function foo() {
  console.log("fool fn");
}
foo();
axios__WEBPACK_IMPORTED_MODULE_0__["default"].get("http://123.207.32.32:8000/lyric?id=1842025914a").then(function (res) {
  console.log(res);
});

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);