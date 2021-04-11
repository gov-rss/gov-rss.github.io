self["webpackHotUpdate_N_E"]("pages/[region]",{

/***/ "./src/pages/[region]/index.js":
/*!*************************************!*\
  !*** ./src/pages/[region]/index.js ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__N_SSG": function() { return /* binding */ __N_SSG; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_skeleton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/skeleton */ "./src/components/skeleton.js");
/* module decorator */ module = __webpack_require__.hmd(module);

var _jsxFileName = "/home/callum/code/gov/website/src/pages/[region]/index.js";


function RssItem(_ref) {
  var title = _ref.title,
      rss = _ref.rss,
      source = _ref.source;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
    className: "grid menu-item",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("dl", {
      className: "self-center p-4",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("dt", {
          className: "sr-only",
          children: "Feed name"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 9,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("dd", {
          className: "font-bold",
          "aria-label": title,
          "aria-required": "true",
          children: title
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 10,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("dd", {
          children: ["\u25C8", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            className: "px-1",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
              href: rss,
              children: "Subscribe"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 18,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 17,
            columnNumber: 13
          }, this), "\u25C8"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 15,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("dd", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            href: source,
            children: "Source"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 25,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 5
  }, this);
}

_c = RssItem;

function RssList(_ref2) {
  var _this = this;

  var rssProps = _ref2.feedProps;
  var listItems = rssProps.map(function (rssItemProps) {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(RssItem, {
      title: rssItemProps.title,
      rss: rssItemProps.rss,
      source: rssItemProps.source
    }, rssItemProps.title, false, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }, _this);
  });
  var classes = listItems.length > 1 ? "lg:grid-cols-2 xl:w-4/5" : "lg:w-1/2";
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
    className: classes,
    children: listItems
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 45,
    columnNumber: 10
  }, this);
}

_c2 = RssList;

function RssPage(_ref3) {
  var rssRegionData = _ref3.rssRegionData;

  var content = /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(RssList, {
    feedProps: rssRegionData
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 49,
    columnNumber: 19
  }, this);

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_skeleton__WEBPACK_IMPORTED_MODULE_1__.default, {
    content: content
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 50,
    columnNumber: 10
  }, this);
}

_c3 = RssPage;
var __N_SSG = true;
/* harmony default export */ __webpack_exports__["default"] = (RssPage);

var _c, _c2, _c3;

$RefreshReg$(_c, "RssItem");
$RefreshReg$(_c2, "RssList");
$RefreshReg$(_c3, "RssPage");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL1tyZWdpb25dL2luZGV4LmpzIl0sIm5hbWVzIjpbIlJzc0l0ZW0iLCJ0aXRsZSIsInJzcyIsInNvdXJjZSIsIlJzc0xpc3QiLCJyc3NQcm9wcyIsImZlZWRQcm9wcyIsImxpc3RJdGVtcyIsIm1hcCIsInJzc0l0ZW1Qcm9wcyIsImNsYXNzZXMiLCJsZW5ndGgiLCJSc3NQYWdlIiwicnNzUmVnaW9uRGF0YSIsImNvbnRlbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFHQSxTQUFTQSxPQUFULE9BQXlDO0FBQUEsTUFBdEJDLEtBQXNCLFFBQXRCQSxLQUFzQjtBQUFBLE1BQWZDLEdBQWUsUUFBZkEsR0FBZTtBQUFBLE1BQVZDLE1BQVUsUUFBVkEsTUFBVTtBQUN2QyxzQkFDRTtBQUFJLGFBQVMsRUFBQyxnQkFBZDtBQUFBLDJCQUNFO0FBQUksZUFBUyxFQUFDLGlCQUFkO0FBQUEsOEJBQ0U7QUFBQSxnQ0FDRTtBQUFJLG1CQUFTLEVBQUMsU0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixlQUVFO0FBQUksbUJBQVMsRUFBQyxXQUFkO0FBQTBCLHdCQUFZRixLQUF0QztBQUE2QywyQkFBYyxNQUEzRDtBQUFBLG9CQUNHQTtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFPRTtBQUFBLCtCQUNFO0FBQUEsNENBRUU7QUFBTSxxQkFBUyxFQUFDLE1BQWhCO0FBQUEsbUNBQ0U7QUFBRyxrQkFBSSxFQUFFQyxHQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBUEYsZUFnQkU7QUFBQSwrQkFDRTtBQUFBLGlDQUNFO0FBQUcsZ0JBQUksRUFBRUMsTUFBVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBaEJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQTBCRDs7S0EzQlFILE87O0FBNkJULFNBQVNJLE9BQVQsUUFBMEM7QUFBQTs7QUFBQSxNQUFaQyxRQUFZLFNBQXZCQyxTQUF1QjtBQUN4QyxNQUFNQyxTQUFTLEdBQUdGLFFBQVEsQ0FBQ0csR0FBVCxDQUFhLFVBQUNDLFlBQUQsRUFBa0I7QUFDL0Msd0JBQ0UsOERBQUMsT0FBRDtBQUNFLFdBQUssRUFBRUEsWUFBWSxDQUFDUixLQUR0QjtBQUVFLFNBQUcsRUFBRVEsWUFBWSxDQUFDUCxHQUZwQjtBQUdFLFlBQU0sRUFBRU8sWUFBWSxDQUFDTjtBQUh2QixPQUlPTSxZQUFZLENBQUNSLEtBSnBCO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERjtBQVFELEdBVGlCLENBQWxCO0FBVUEsTUFBSVMsT0FBTyxHQUFHSCxTQUFTLENBQUNJLE1BQVYsR0FBbUIsQ0FBbkIsR0FBdUIseUJBQXZCLEdBQW1ELFVBQWpFO0FBQ0Esc0JBQU87QUFBSSxhQUFTLEVBQUVELE9BQWY7QUFBQSxjQUF5Qkg7QUFBekI7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUFQO0FBQ0Q7O01BYlFILE87O0FBZVQsU0FBU1EsT0FBVCxRQUFvQztBQUFBLE1BQWpCQyxhQUFpQixTQUFqQkEsYUFBaUI7O0FBQ2xDLE1BQU1DLE9BQU8sZ0JBQUcsOERBQUMsT0FBRDtBQUFTLGFBQVMsRUFBRUQ7QUFBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUFoQjs7QUFDQSxzQkFBTyw4REFBQyx5REFBRDtBQUFVLFdBQU8sRUFBRUM7QUFBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUFQO0FBQ0Q7O01BSFFGLE87O0FBdUJULCtEQUFlQSxPQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL1tyZWdpb25dLjFjZGEzNWIxZmE4ZjNiZThiZDQ2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU2tlbGV0b24gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvc2tlbGV0b25cIjtcbmltcG9ydCByc3NEYXRhIGZyb20gXCIuLi8uLi9kYXRhL3Jzcy5qc29uXCI7XG5cbmZ1bmN0aW9uIFJzc0l0ZW0oeyB0aXRsZSwgcnNzLCBzb3VyY2UgfSkge1xuICByZXR1cm4gKFxuICAgIDxsaSBjbGFzc05hbWU9XCJncmlkIG1lbnUtaXRlbVwiPlxuICAgICAgPGRsIGNsYXNzTmFtZT1cInNlbGYtY2VudGVyIHAtNFwiPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxkdCBjbGFzc05hbWU9XCJzci1vbmx5XCI+RmVlZCBuYW1lPC9kdD5cbiAgICAgICAgICA8ZGQgY2xhc3NOYW1lPVwiZm9udC1ib2xkXCIgYXJpYS1sYWJlbD17dGl0bGV9IGFyaWEtcmVxdWlyZWQ9XCJ0cnVlXCI+XG4gICAgICAgICAgICB7dGl0bGV9XG4gICAgICAgICAgPC9kZD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGRkPlxuICAgICAgICAgICAg4peIXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJweC0xXCI+XG4gICAgICAgICAgICAgIDxhIGhyZWY9e3Jzc30+U3Vic2NyaWJlPC9hPlxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAg4peIXG4gICAgICAgICAgPC9kZD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGRkPlxuICAgICAgICAgICAgPGEgaHJlZj17c291cmNlfT5Tb3VyY2U8L2E+XG4gICAgICAgICAgPC9kZD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2RsPlxuICAgIDwvbGk+XG4gICk7XG59XG5cbmZ1bmN0aW9uIFJzc0xpc3QoeyBmZWVkUHJvcHM6IHJzc1Byb3BzIH0pIHtcbiAgY29uc3QgbGlzdEl0ZW1zID0gcnNzUHJvcHMubWFwKChyc3NJdGVtUHJvcHMpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgPFJzc0l0ZW1cbiAgICAgICAgdGl0bGU9e3Jzc0l0ZW1Qcm9wcy50aXRsZX1cbiAgICAgICAgcnNzPXtyc3NJdGVtUHJvcHMucnNzfVxuICAgICAgICBzb3VyY2U9e3Jzc0l0ZW1Qcm9wcy5zb3VyY2V9XG4gICAgICAgIGtleT17cnNzSXRlbVByb3BzLnRpdGxlfVxuICAgICAgLz5cbiAgICApO1xuICB9KTtcbiAgdmFyIGNsYXNzZXMgPSBsaXN0SXRlbXMubGVuZ3RoID4gMSA/IFwibGc6Z3JpZC1jb2xzLTIgeGw6dy00LzVcIiA6IFwibGc6dy0xLzJcIjtcbiAgcmV0dXJuIDx1bCBjbGFzc05hbWU9e2NsYXNzZXN9PntsaXN0SXRlbXN9PC91bD47XG59XG5cbmZ1bmN0aW9uIFJzc1BhZ2UoeyByc3NSZWdpb25EYXRhIH0pIHtcbiAgY29uc3QgY29udGVudCA9IDxSc3NMaXN0IGZlZWRQcm9wcz17cnNzUmVnaW9uRGF0YX0gLz47XG4gIHJldHVybiA8U2tlbGV0b24gY29udGVudD17Y29udGVudH0gLz47XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTdGF0aWNQYXRocygpIHtcbiAgY29uc3QgcGF0aHMgPSBPYmplY3Qua2V5cyhyc3NEYXRhKS5tYXAoKHJlZ2lvbikgPT4gKHtcbiAgICBwYXJhbXM6IHsgcmVnaW9uOiByZWdpb24gfSxcbiAgfSkpO1xuXG4gIHJldHVybiB7IHBhdGhzLCBmYWxsYmFjazogZmFsc2UgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKHsgcGFyYW1zIH0pIHtcbiAgY29uc3QgcmVnaW9uID0gcGFyYW1zLnJlZ2lvbjtcbiAgY29uc3QgcnNzUmVnaW9uRGF0YSA9IHJzc0RhdGFbcmVnaW9uXTtcbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgcnNzUmVnaW9uRGF0YSxcbiAgICB9LFxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBSc3NQYWdlO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==