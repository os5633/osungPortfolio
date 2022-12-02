"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 115:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: ./node_modules/next/app.js
var app = __webpack_require__(544);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(297);
;// CONCATENATED MODULE: external "recoil"
const external_recoil_namespaceObject = require("recoil");
;// CONCATENATED MODULE: external "swr"
const external_swr_namespaceObject = require("swr");
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(282);
;// CONCATENATED MODULE: ./pages/_app.tsx
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







class MyApp extends app.default {
  render() {
    const {
      pageProps
    } = this.props;
    const Component = this.props.Component;
    return /*#__PURE__*/jsx_runtime_.jsx(external_swr_namespaceObject.SWRConfig, {
      value: {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        fetcher: (...args) => fetch(...args).then(res => res.json())
      },
      children: /*#__PURE__*/jsx_runtime_.jsx(external_recoil_namespaceObject.RecoilRoot, {
        children: /*#__PURE__*/jsx_runtime_.jsx(Component, _objectSpread({}, pageProps))
      })
    });
  }

}

/* harmony default export */ const _app = (MyApp);

/***/ }),

/***/ 620:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 297:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 282:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [544], () => (__webpack_exec__(115)));
module.exports = __webpack_exports__;

})();