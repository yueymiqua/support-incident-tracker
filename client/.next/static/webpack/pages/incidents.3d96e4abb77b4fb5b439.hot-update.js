/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/incidents",{

/***/ "./components/filterCheckboxes.js":
/*!****************************************!*\
  !*** ./components/filterCheckboxes.js ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ \"./node_modules/@material-ui/core/esm/index.js\");\n/* harmony import */ var _material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Checkbox */ \"./node_modules/@material-ui/core/esm/Checkbox/index.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/Users/janicehung/github/support-incident-tracker/client/components/filterCheckboxes.js\",\n    _this = undefined;\n\n\n\n\nvar FilterCheckboxes = function FilterCheckboxes(_ref) {\n  var filterByDepartment = _ref.filterByDepartment,\n      hrCheckboxOn = _ref.hrCheckboxOn,\n      adminCheckboxOn = _ref.adminCheckboxOn,\n      financeCheckboxOn = _ref.financeCheckboxOn;\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.FormControl, {\n      component: \"fieldset\",\n      style: {\n        borderBlockColor: '#000',\n        borderBlockStyle: 'solid',\n        borderBlockWidth: '1px',\n        marginBottom: '10px'\n      },\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.FormLabel, {\n        component: \"legend\",\n        style: {\n          color: '#002984'\n        },\n        children: \"Filter Issues By Department\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 9,\n        columnNumber: 17\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.FormGroup, {\n        style: {\n          display: 'inline'\n        },\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.FormControlLabel, {\n          control: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_2__.default, {\n            name: \"HR\",\n            checked: hrCheckboxOn,\n            onChange: function onChange() {\n              return filterByDepartment(\"HR\");\n            }\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 12,\n            columnNumber: 34\n          }, _this),\n          label: \"HR\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 11,\n          columnNumber: 21\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.FormControlLabel, {\n          control: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_2__.default, {\n            name: \"Admin\",\n            checked: adminCheckboxOn,\n            onChange: function onChange() {\n              return filterByDepartment(\"Admin\");\n            }\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 16,\n            columnNumber: 34\n          }, _this),\n          label: \"Admin\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 15,\n          columnNumber: 21\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.FormControlLabel, {\n          control: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_2__.default, {\n            name: \"Finance\",\n            checked: financeCheckboxOn,\n            onChange: function onChange() {\n              return filterByDepartment(\"Finance\");\n            }\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 20,\n            columnNumber: 34\n          }, _this),\n          label: \"Finance\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 19,\n          columnNumber: 21\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 10,\n        columnNumber: 17\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 13\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 7,\n    columnNumber: 9\n  }, _this);\n};\n\n_c = FilterCheckboxes;\n/* harmony default export */ __webpack_exports__[\"default\"] = (FilterCheckboxes);\n\nvar _c;\n\n$RefreshReg$(_c, \"FilterCheckboxes\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9maWx0ZXJDaGVja2JveGVzLmpzPzNhZDQiXSwibmFtZXMiOlsiRmlsdGVyQ2hlY2tib3hlcyIsImZpbHRlckJ5RGVwYXJ0bWVudCIsImhyQ2hlY2tib3hPbiIsImFkbWluQ2hlY2tib3hPbiIsImZpbmFuY2VDaGVja2JveE9uIiwiYm9yZGVyQmxvY2tDb2xvciIsImJvcmRlckJsb2NrU3R5bGUiLCJib3JkZXJCbG9ja1dpZHRoIiwibWFyZ2luQm90dG9tIiwiY29sb3IiLCJkaXNwbGF5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsSUFBTUEsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixPQUE4RTtBQUFBLE1BQTNFQyxrQkFBMkUsUUFBM0VBLGtCQUEyRTtBQUFBLE1BQXZEQyxZQUF1RCxRQUF2REEsWUFBdUQ7QUFBQSxNQUF6Q0MsZUFBeUMsUUFBekNBLGVBQXlDO0FBQUEsTUFBeEJDLGlCQUF3QixRQUF4QkEsaUJBQXdCO0FBRW5HLHNCQUNJO0FBQUEsMkJBQ0ksOERBQUMsMERBQUQ7QUFBYSxlQUFTLEVBQUMsVUFBdkI7QUFBa0MsV0FBSyxFQUFFO0FBQUNDLHdCQUFnQixFQUFFLE1BQW5CO0FBQTJCQyx3QkFBZ0IsRUFBRSxPQUE3QztBQUFzREMsd0JBQWdCLEVBQUUsS0FBeEU7QUFBK0VDLG9CQUFZLEVBQUU7QUFBN0YsT0FBekM7QUFBQSw4QkFDSSw4REFBQyx3REFBRDtBQUFXLGlCQUFTLEVBQUMsUUFBckI7QUFBOEIsYUFBSyxFQUFFO0FBQUVDLGVBQUssRUFBRTtBQUFULFNBQXJDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREosZUFFSSw4REFBQyx3REFBRDtBQUFXLGFBQUssRUFBRTtBQUFDQyxpQkFBTyxFQUFFO0FBQVYsU0FBbEI7QUFBQSxnQ0FDSSw4REFBQywrREFBRDtBQUNJLGlCQUFPLGVBQUUsOERBQUMsK0RBQUQ7QUFBVSxnQkFBSSxFQUFDLElBQWY7QUFBb0IsbUJBQU8sRUFBRVIsWUFBN0I7QUFBMkMsb0JBQVEsRUFBRTtBQUFBLHFCQUFNRCxrQkFBa0IsQ0FBQyxJQUFELENBQXhCO0FBQUE7QUFBckQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFEYjtBQUVJLGVBQUssRUFBQztBQUZWO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREosZUFLSSw4REFBQywrREFBRDtBQUNJLGlCQUFPLGVBQUUsOERBQUMsK0RBQUQ7QUFBVSxnQkFBSSxFQUFDLE9BQWY7QUFBdUIsbUJBQU8sRUFBRUUsZUFBaEM7QUFBaUQsb0JBQVEsRUFBRTtBQUFBLHFCQUFNRixrQkFBa0IsQ0FBQyxPQUFELENBQXhCO0FBQUE7QUFBM0Q7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFEYjtBQUVJLGVBQUssRUFBQztBQUZWO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBTEosZUFTSSw4REFBQywrREFBRDtBQUNJLGlCQUFPLGVBQUUsOERBQUMsK0RBQUQ7QUFBVSxnQkFBSSxFQUFDLFNBQWY7QUFBeUIsbUJBQU8sRUFBRUcsaUJBQWxDO0FBQXFELG9CQUFRLEVBQUU7QUFBQSxxQkFBTUgsa0JBQWtCLENBQUMsU0FBRCxDQUF4QjtBQUFBO0FBQS9EO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRGI7QUFFSSxlQUFLLEVBQUM7QUFGVjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVRKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQXFCSCxDQXZCRDs7S0FBTUQsZ0I7QUF5Qk4sK0RBQWVBLGdCQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9maWx0ZXJDaGVja2JveGVzLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRm9ybUNvbnRyb2xMYWJlbCwgRm9ybUNvbnRyb2wsIEZvcm1MYWJlbCwgRm9ybUdyb3VwIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xuaW1wb3J0IENoZWNrYm94IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NoZWNrYm94JztcblxuY29uc3QgRmlsdGVyQ2hlY2tib3hlcyA9ICh7IGZpbHRlckJ5RGVwYXJ0bWVudCwgaHJDaGVja2JveE9uLCBhZG1pbkNoZWNrYm94T24sIGZpbmFuY2VDaGVja2JveE9uIH0pID0+IHtcblxuICAgIHJldHVybihcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxGb3JtQ29udHJvbCBjb21wb25lbnQ9XCJmaWVsZHNldFwiIHN0eWxlPXt7Ym9yZGVyQmxvY2tDb2xvcjogJyMwMDAnLCBib3JkZXJCbG9ja1N0eWxlOiAnc29saWQnLCBib3JkZXJCbG9ja1dpZHRoOiAnMXB4JywgbWFyZ2luQm90dG9tOiAnMTBweCd9fT5cbiAgICAgICAgICAgICAgICA8Rm9ybUxhYmVsIGNvbXBvbmVudD1cImxlZ2VuZFwiIHN0eWxlPXt7IGNvbG9yOiAnIzAwMjk4NCd9fT5GaWx0ZXIgSXNzdWVzIEJ5IERlcGFydG1lbnQ8L0Zvcm1MYWJlbD5cbiAgICAgICAgICAgICAgICA8Rm9ybUdyb3VwIHN0eWxlPXt7ZGlzcGxheTogJ2lubGluZSd9fT5cbiAgICAgICAgICAgICAgICAgICAgPEZvcm1Db250cm9sTGFiZWxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyb2w9ezxDaGVja2JveCBuYW1lPVwiSFJcIiBjaGVja2VkPXtockNoZWNrYm94T259IG9uQ2hhbmdlPXsoKSA9PiBmaWx0ZXJCeURlcGFydG1lbnQoXCJIUlwiKX0vPn1cbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiSFJcIlxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8Rm9ybUNvbnRyb2xMYWJlbFxuICAgICAgICAgICAgICAgICAgICAgICAgY29udHJvbD17PENoZWNrYm94IG5hbWU9XCJBZG1pblwiIGNoZWNrZWQ9e2FkbWluQ2hlY2tib3hPbn0gb25DaGFuZ2U9eygpID0+IGZpbHRlckJ5RGVwYXJ0bWVudChcIkFkbWluXCIpfS8+fVxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJBZG1pblwiXG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDxGb3JtQ29udHJvbExhYmVsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250cm9sPXs8Q2hlY2tib3ggbmFtZT1cIkZpbmFuY2VcIiBjaGVja2VkPXtmaW5hbmNlQ2hlY2tib3hPbn0gb25DaGFuZ2U9eygpID0+IGZpbHRlckJ5RGVwYXJ0bWVudChcIkZpbmFuY2VcIil9Lz59XG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkZpbmFuY2VcIlxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvRm9ybUdyb3VwPlxuICAgICAgICAgICAgPC9Gb3JtQ29udHJvbD5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBGaWx0ZXJDaGVja2JveGVzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/filterCheckboxes.js\n");

/***/ })

});