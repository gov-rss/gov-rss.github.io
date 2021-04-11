self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Home; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_skeleton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/skeleton */ "./src/components/skeleton.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "/home/callum/code/gov/website/src/pages/index.js";


function Home() {
  var _this = this;

  var feedProps = __webpack_require__(/*! ../data/rss.json */ "./src/data/rss.json");

  var flags = {
    nsw: "Flag_of_New_South_Wales.svg",
    qld: "Flag_of_Queensland.svg",
    sa: "Flag_of_South_Australia.svg",
    tas: "Flag_of_Tasmania.svg",
    vic: "Flag_of_Victoria_(Australia).svg",
    wa: "Flag_of_Western_Australia.svg",
    act: "Flag_of_the_Australian_Capital_Territory.svg",
    nt: "Flag_of_the_Northern_Territory.svg"
  };

  var feedList = /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
      className: "lg:grid-cols-2 xl:w-4/5",
      children: Object.keys(feedProps).map(function (region) {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
          className: "menu-item hover:menu-item",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
            href: "/[region]",
            as: "/" + region,
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
              className: "grid grid-cols-3",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
                src: "/flags/" + flags[region],
                className: "flag place-self-left",
                width: "56",
                height: "29",
                alt: region.toUpperCase() + " state flag"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 29,
                columnNumber: 19
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                className: "place-self-center font-bold uppercase",
                children: region
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 37,
                columnNumber: 19
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 28,
              columnNumber: 17
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 24,
            columnNumber: 15
          }, _this)
        }, region, false, {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 13
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }, this)
  }, void 0, false);

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_skeleton__WEBPACK_IMPORTED_MODULE_2__.default, {
    content: feedList
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 49,
    columnNumber: 10
  }, this);
}
_c = Home;

var _c;

$RefreshReg$(_c, "Home");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIkhvbWUiLCJmZWVkUHJvcHMiLCJyZXF1aXJlIiwiZmxhZ3MiLCJuc3ciLCJxbGQiLCJzYSIsInRhcyIsInZpYyIsIndhIiwiYWN0IiwibnQiLCJmZWVkTGlzdCIsIk9iamVjdCIsImtleXMiLCJtYXAiLCJyZWdpb24iLCJ0b1VwcGVyQ2FzZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFZSxTQUFTQSxJQUFULEdBQWdCO0FBQUE7O0FBQzdCLE1BQU1DLFNBQVMsR0FBR0MsbUJBQU8sQ0FBQyw2Q0FBRCxDQUF6Qjs7QUFFQSxNQUFNQyxLQUFLLEdBQUc7QUFDWkMsT0FBRyxFQUFFLDZCQURPO0FBRVpDLE9BQUcsRUFBRSx3QkFGTztBQUdaQyxNQUFFLEVBQUUsNkJBSFE7QUFJWkMsT0FBRyxFQUFFLHNCQUpPO0FBS1pDLE9BQUcsRUFBRSxrQ0FMTztBQU1aQyxNQUFFLEVBQUUsK0JBTlE7QUFPWkMsT0FBRyxFQUFFLDhDQVBPO0FBUVpDLE1BQUUsRUFBRTtBQVJRLEdBQWQ7O0FBV0EsTUFBTUMsUUFBUSxnQkFDWjtBQUFBLDJCQUNFO0FBQUksZUFBUyxFQUFDLHlCQUFkO0FBQUEsZ0JBQ0dDLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZYixTQUFaLEVBQXVCYyxHQUF2QixDQUEyQixVQUFDQyxNQUFELEVBQVk7QUFDdEMsNEJBQ0U7QUFBSSxtQkFBUyxFQUFDLDJCQUFkO0FBQUEsaUNBQ0UsOERBQUMsa0RBQUQ7QUFDRSxnQkFBSSxhQUROO0FBRUUsY0FBRSxFQUFFLE1BQWdDQSxNQUZ0QztBQUFBLG1DQUlFO0FBQUcsdUJBQVMsRUFBQyxrQkFBYjtBQUFBLHNDQUNFO0FBQ0UsbUJBQUcsRUFBRSxZQUFzQ2IsS0FBSyxDQUFDYSxNQUFELENBRGxEO0FBRUUseUJBQVMsRUFBQyxzQkFGWjtBQUdFLHFCQUFLLEVBQUMsSUFIUjtBQUlFLHNCQUFNLEVBQUMsSUFKVDtBQUtFLG1CQUFHLEVBQUVBLE1BQU0sQ0FBQ0MsV0FBUCxLQUF1QjtBQUw5QjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURGLGVBU0U7QUFBTSx5QkFBUyxFQUFDLHVDQUFoQjtBQUFBLDBCQUNHRDtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBVEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLFdBQStDQSxNQUEvQztBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGO0FBc0JELE9BdkJBO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLG1CQURGOztBQStCQSxzQkFBTyw4REFBQyx5REFBRDtBQUFVLFdBQU8sRUFBRUo7QUFBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUFQO0FBQ0Q7S0E5Q3VCWixJIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmM0MjA4ZTVlOTdmYzAzNDQ5ZDk3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgU2tlbGV0b24gZnJvbSBcIi4uL2NvbXBvbmVudHMvc2tlbGV0b25cIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgZmVlZFByb3BzID0gcmVxdWlyZShcIi4uL2RhdGEvcnNzLmpzb25cIik7XG5cbiAgY29uc3QgZmxhZ3MgPSB7XG4gICAgbnN3OiBcIkZsYWdfb2ZfTmV3X1NvdXRoX1dhbGVzLnN2Z1wiLFxuICAgIHFsZDogXCJGbGFnX29mX1F1ZWVuc2xhbmQuc3ZnXCIsXG4gICAgc2E6IFwiRmxhZ19vZl9Tb3V0aF9BdXN0cmFsaWEuc3ZnXCIsXG4gICAgdGFzOiBcIkZsYWdfb2ZfVGFzbWFuaWEuc3ZnXCIsXG4gICAgdmljOiBcIkZsYWdfb2ZfVmljdG9yaWFfKEF1c3RyYWxpYSkuc3ZnXCIsXG4gICAgd2E6IFwiRmxhZ19vZl9XZXN0ZXJuX0F1c3RyYWxpYS5zdmdcIixcbiAgICBhY3Q6IFwiRmxhZ19vZl90aGVfQXVzdHJhbGlhbl9DYXBpdGFsX1RlcnJpdG9yeS5zdmdcIixcbiAgICBudDogXCJGbGFnX29mX3RoZV9Ob3J0aGVybl9UZXJyaXRvcnkuc3ZnXCIsXG4gIH07XG5cbiAgY29uc3QgZmVlZExpc3QgPSAoXG4gICAgPD5cbiAgICAgIDx1bCBjbGFzc05hbWU9XCJsZzpncmlkLWNvbHMtMiB4bDp3LTQvNVwiPlxuICAgICAgICB7T2JqZWN0LmtleXMoZmVlZFByb3BzKS5tYXAoKHJlZ2lvbikgPT4ge1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibWVudS1pdGVtIGhvdmVyOm1lbnUtaXRlbVwiIGtleT17cmVnaW9ufT5cbiAgICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgICBocmVmPXtwcm9jZXNzLmVudi5CQUNLRU5EX1VSTCArIFwiL1tyZWdpb25dXCJ9XG4gICAgICAgICAgICAgICAgYXM9e3Byb2Nlc3MuZW52LkJBQ0tFTkRfVVJMICsgXCIvXCIgKyByZWdpb259XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0zXCI+XG4gICAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgIHNyYz17cHJvY2Vzcy5lbnYuQkFDS0VORF9VUkwgKyBcIi9mbGFncy9cIiArIGZsYWdzW3JlZ2lvbl19XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsYWcgcGxhY2Utc2VsZi1sZWZ0XCJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCI1NlwiXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjI5XCJcbiAgICAgICAgICAgICAgICAgICAgYWx0PXtyZWdpb24udG9VcHBlckNhc2UoKSArIFwiIHN0YXRlIGZsYWdcIn1cbiAgICAgICAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInBsYWNlLXNlbGYtY2VudGVyIGZvbnQtYm9sZCB1cHBlcmNhc2VcIj5cbiAgICAgICAgICAgICAgICAgICAge3JlZ2lvbn1cbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgKTtcbiAgICAgICAgfSl9XG4gICAgICA8L3VsPlxuICAgIDwvPlxuICApO1xuXG4gIHJldHVybiA8U2tlbGV0b24gY29udGVudD17ZmVlZExpc3R9IC8+O1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==