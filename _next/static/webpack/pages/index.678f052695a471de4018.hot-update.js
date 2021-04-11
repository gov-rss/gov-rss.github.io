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
          className: "menu-item",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
            href: "/[region]",
            as: "/" + region,
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
              className: "grid grid-cols-3 p-4",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIkhvbWUiLCJmZWVkUHJvcHMiLCJyZXF1aXJlIiwiZmxhZ3MiLCJuc3ciLCJxbGQiLCJzYSIsInRhcyIsInZpYyIsIndhIiwiYWN0IiwibnQiLCJmZWVkTGlzdCIsIk9iamVjdCIsImtleXMiLCJtYXAiLCJyZWdpb24iLCJ0b1VwcGVyQ2FzZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFZSxTQUFTQSxJQUFULEdBQWdCO0FBQUE7O0FBQzdCLE1BQU1DLFNBQVMsR0FBR0MsbUJBQU8sQ0FBQyw2Q0FBRCxDQUF6Qjs7QUFFQSxNQUFNQyxLQUFLLEdBQUc7QUFDWkMsT0FBRyxFQUFFLDZCQURPO0FBRVpDLE9BQUcsRUFBRSx3QkFGTztBQUdaQyxNQUFFLEVBQUUsNkJBSFE7QUFJWkMsT0FBRyxFQUFFLHNCQUpPO0FBS1pDLE9BQUcsRUFBRSxrQ0FMTztBQU1aQyxNQUFFLEVBQUUsK0JBTlE7QUFPWkMsT0FBRyxFQUFFLDhDQVBPO0FBUVpDLE1BQUUsRUFBRTtBQVJRLEdBQWQ7O0FBV0EsTUFBTUMsUUFBUSxnQkFDWjtBQUFBLDJCQUNFO0FBQUksZUFBUyxFQUFDLHlCQUFkO0FBQUEsZ0JBQ0dDLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZYixTQUFaLEVBQXVCYyxHQUF2QixDQUEyQixVQUFDQyxNQUFELEVBQVk7QUFDdEMsNEJBQ0U7QUFBSSxtQkFBUyxFQUFDLFdBQWQ7QUFBQSxpQ0FDRSw4REFBQyxrREFBRDtBQUNFLGdCQUFJLGFBRE47QUFFRSxjQUFFLEVBQUUsTUFBZ0NBLE1BRnRDO0FBQUEsbUNBSUU7QUFBRyx1QkFBUyxFQUFDLHNCQUFiO0FBQUEsc0NBQ0U7QUFDRSxtQkFBRyxFQUFFLFlBQXNDYixLQUFLLENBQUNhLE1BQUQsQ0FEbEQ7QUFFRSx5QkFBUyxFQUFDLHNCQUZaO0FBR0UscUJBQUssRUFBQyxJQUhSO0FBSUUsc0JBQU0sRUFBQyxJQUpUO0FBS0UsbUJBQUcsRUFBRUEsTUFBTSxDQUFDQyxXQUFQLEtBQXVCO0FBTDlCO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBREYsZUFTRTtBQUFNLHlCQUFTLEVBQUMsdUNBQWhCO0FBQUEsMEJBQ0dEO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFURjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYsV0FBK0JBLE1BQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREY7QUFzQkQsT0F2QkE7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYsbUJBREY7O0FBK0JBLHNCQUFPLDhEQUFDLHlEQUFEO0FBQVUsV0FBTyxFQUFFSjtBQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQVA7QUFDRDtLQTlDdUJaLEkiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNjc4ZjA1MjY5NWE0NzFkZTQwMTguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCBTa2VsZXRvbiBmcm9tIFwiLi4vY29tcG9uZW50cy9za2VsZXRvblwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCBmZWVkUHJvcHMgPSByZXF1aXJlKFwiLi4vZGF0YS9yc3MuanNvblwiKTtcblxuICBjb25zdCBmbGFncyA9IHtcbiAgICBuc3c6IFwiRmxhZ19vZl9OZXdfU291dGhfV2FsZXMuc3ZnXCIsXG4gICAgcWxkOiBcIkZsYWdfb2ZfUXVlZW5zbGFuZC5zdmdcIixcbiAgICBzYTogXCJGbGFnX29mX1NvdXRoX0F1c3RyYWxpYS5zdmdcIixcbiAgICB0YXM6IFwiRmxhZ19vZl9UYXNtYW5pYS5zdmdcIixcbiAgICB2aWM6IFwiRmxhZ19vZl9WaWN0b3JpYV8oQXVzdHJhbGlhKS5zdmdcIixcbiAgICB3YTogXCJGbGFnX29mX1dlc3Rlcm5fQXVzdHJhbGlhLnN2Z1wiLFxuICAgIGFjdDogXCJGbGFnX29mX3RoZV9BdXN0cmFsaWFuX0NhcGl0YWxfVGVycml0b3J5LnN2Z1wiLFxuICAgIG50OiBcIkZsYWdfb2ZfdGhlX05vcnRoZXJuX1RlcnJpdG9yeS5zdmdcIixcbiAgfTtcblxuICBjb25zdCBmZWVkTGlzdCA9IChcbiAgICA8PlxuICAgICAgPHVsIGNsYXNzTmFtZT1cImxnOmdyaWQtY29scy0yIHhsOnctNC81XCI+XG4gICAgICAgIHtPYmplY3Qua2V5cyhmZWVkUHJvcHMpLm1hcCgocmVnaW9uKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJtZW51LWl0ZW1cIiBrZXk9e3JlZ2lvbn0+XG4gICAgICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICAgICAgaHJlZj17cHJvY2Vzcy5lbnYuQkFDS0VORF9VUkwgKyBcIi9bcmVnaW9uXVwifVxuICAgICAgICAgICAgICAgIGFzPXtwcm9jZXNzLmVudi5CQUNLRU5EX1VSTCArIFwiL1wiICsgcmVnaW9ufVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMyBwLTRcIj5cbiAgICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgICAgc3JjPXtwcm9jZXNzLmVudi5CQUNLRU5EX1VSTCArIFwiL2ZsYWdzL1wiICsgZmxhZ3NbcmVnaW9uXX1cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxhZyBwbGFjZS1zZWxmLWxlZnRcIlxuICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjU2XCJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiMjlcIlxuICAgICAgICAgICAgICAgICAgICBhbHQ9e3JlZ2lvbi50b1VwcGVyQ2FzZSgpICsgXCIgc3RhdGUgZmxhZ1wifVxuICAgICAgICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicGxhY2Utc2VsZi1jZW50ZXIgZm9udC1ib2xkIHVwcGVyY2FzZVwiPlxuICAgICAgICAgICAgICAgICAgICB7cmVnaW9ufVxuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICApO1xuICAgICAgICB9KX1cbiAgICAgIDwvdWw+XG4gICAgPC8+XG4gICk7XG5cbiAgcmV0dXJuIDxTa2VsZXRvbiBjb250ZW50PXtmZWVkTGlzdH0gLz47XG59XG4iXSwic291cmNlUm9vdCI6IiJ9