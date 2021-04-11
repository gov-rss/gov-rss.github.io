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
              className: "menu-grid",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIkhvbWUiLCJmZWVkUHJvcHMiLCJyZXF1aXJlIiwiZmxhZ3MiLCJuc3ciLCJxbGQiLCJzYSIsInRhcyIsInZpYyIsIndhIiwiYWN0IiwibnQiLCJmZWVkTGlzdCIsIk9iamVjdCIsImtleXMiLCJtYXAiLCJyZWdpb24iLCJ0b1VwcGVyQ2FzZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFZSxTQUFTQSxJQUFULEdBQWdCO0FBQUE7O0FBQzdCLE1BQU1DLFNBQVMsR0FBR0MsbUJBQU8sQ0FBQyw2Q0FBRCxDQUF6Qjs7QUFFQSxNQUFNQyxLQUFLLEdBQUc7QUFDWkMsT0FBRyxFQUFFLDZCQURPO0FBRVpDLE9BQUcsRUFBRSx3QkFGTztBQUdaQyxNQUFFLEVBQUUsNkJBSFE7QUFJWkMsT0FBRyxFQUFFLHNCQUpPO0FBS1pDLE9BQUcsRUFBRSxrQ0FMTztBQU1aQyxNQUFFLEVBQUUsK0JBTlE7QUFPWkMsT0FBRyxFQUFFLDhDQVBPO0FBUVpDLE1BQUUsRUFBRTtBQVJRLEdBQWQ7O0FBV0EsTUFBTUMsUUFBUSxnQkFDWjtBQUFBLDJCQUNFO0FBQUksZUFBUyxFQUFDLHlCQUFkO0FBQUEsZ0JBQ0dDLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZYixTQUFaLEVBQXVCYyxHQUF2QixDQUEyQixVQUFDQyxNQUFELEVBQVk7QUFDdEMsNEJBQ0U7QUFBSSxtQkFBUyxFQUFDLFdBQWQ7QUFBQSxpQ0FDRSw4REFBQyxrREFBRDtBQUNFLGdCQUFJLGFBRE47QUFFRSxjQUFFLEVBQUUsTUFBZ0NBLE1BRnRDO0FBQUEsbUNBSUU7QUFBRyx1QkFBUyxFQUFDLFdBQWI7QUFBQSxzQ0FDRTtBQUNFLG1CQUFHLEVBQUUsWUFBc0NiLEtBQUssQ0FBQ2EsTUFBRCxDQURsRDtBQUVFLHlCQUFTLEVBQUMsc0JBRlo7QUFHRSxxQkFBSyxFQUFDLElBSFI7QUFJRSxzQkFBTSxFQUFDLElBSlQ7QUFLRSxtQkFBRyxFQUFFQSxNQUFNLENBQUNDLFdBQVAsS0FBdUI7QUFMOUI7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFERixlQVNFO0FBQU0seUJBQVMsRUFBQyx1Q0FBaEI7QUFBQSwwQkFDR0Q7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQVRGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixXQUErQkEsTUFBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERjtBQXNCRCxPQXZCQTtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixtQkFERjs7QUErQkEsc0JBQU8sOERBQUMseURBQUQ7QUFBVSxXQUFPLEVBQUVKO0FBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBUDtBQUNEO0tBOUN1QlosSSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4yMDRhYzJmNDgxMTQyZTI0M2U3NC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IFNrZWxldG9uIGZyb20gXCIuLi9jb21wb25lbnRzL3NrZWxldG9uXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IGZlZWRQcm9wcyA9IHJlcXVpcmUoXCIuLi9kYXRhL3Jzcy5qc29uXCIpO1xuXG4gIGNvbnN0IGZsYWdzID0ge1xuICAgIG5zdzogXCJGbGFnX29mX05ld19Tb3V0aF9XYWxlcy5zdmdcIixcbiAgICBxbGQ6IFwiRmxhZ19vZl9RdWVlbnNsYW5kLnN2Z1wiLFxuICAgIHNhOiBcIkZsYWdfb2ZfU291dGhfQXVzdHJhbGlhLnN2Z1wiLFxuICAgIHRhczogXCJGbGFnX29mX1Rhc21hbmlhLnN2Z1wiLFxuICAgIHZpYzogXCJGbGFnX29mX1ZpY3RvcmlhXyhBdXN0cmFsaWEpLnN2Z1wiLFxuICAgIHdhOiBcIkZsYWdfb2ZfV2VzdGVybl9BdXN0cmFsaWEuc3ZnXCIsXG4gICAgYWN0OiBcIkZsYWdfb2ZfdGhlX0F1c3RyYWxpYW5fQ2FwaXRhbF9UZXJyaXRvcnkuc3ZnXCIsXG4gICAgbnQ6IFwiRmxhZ19vZl90aGVfTm9ydGhlcm5fVGVycml0b3J5LnN2Z1wiLFxuICB9O1xuXG4gIGNvbnN0IGZlZWRMaXN0ID0gKFxuICAgIDw+XG4gICAgICA8dWwgY2xhc3NOYW1lPVwibGc6Z3JpZC1jb2xzLTIgeGw6dy00LzVcIj5cbiAgICAgICAge09iamVjdC5rZXlzKGZlZWRQcm9wcykubWFwKChyZWdpb24pID0+IHtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm1lbnUtaXRlbVwiIGtleT17cmVnaW9ufT5cbiAgICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgICBocmVmPXtwcm9jZXNzLmVudi5CQUNLRU5EX1VSTCArIFwiL1tyZWdpb25dXCJ9XG4gICAgICAgICAgICAgICAgYXM9e3Byb2Nlc3MuZW52LkJBQ0tFTkRfVVJMICsgXCIvXCIgKyByZWdpb259XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJtZW51LWdyaWRcIj5cbiAgICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgICAgc3JjPXtwcm9jZXNzLmVudi5CQUNLRU5EX1VSTCArIFwiL2ZsYWdzL1wiICsgZmxhZ3NbcmVnaW9uXX1cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxhZyBwbGFjZS1zZWxmLWxlZnRcIlxuICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjU2XCJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiMjlcIlxuICAgICAgICAgICAgICAgICAgICBhbHQ9e3JlZ2lvbi50b1VwcGVyQ2FzZSgpICsgXCIgc3RhdGUgZmxhZ1wifVxuICAgICAgICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicGxhY2Utc2VsZi1jZW50ZXIgZm9udC1ib2xkIHVwcGVyY2FzZVwiPlxuICAgICAgICAgICAgICAgICAgICB7cmVnaW9ufVxuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICApO1xuICAgICAgICB9KX1cbiAgICAgIDwvdWw+XG4gICAgPC8+XG4gICk7XG5cbiAgcmV0dXJuIDxTa2VsZXRvbiBjb250ZW50PXtmZWVkTGlzdH0gLz47XG59XG4iXSwic291cmNlUm9vdCI6IiJ9