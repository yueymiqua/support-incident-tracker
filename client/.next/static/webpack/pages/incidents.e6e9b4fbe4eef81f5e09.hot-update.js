/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/incidents",{

/***/ "./components/login.js":
/*!*****************************!*\
  !*** ./components/login.js ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_janicehung_github_support_incident_tracker_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_janicehung_github_support_incident_tracker_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_janicehung_github_support_incident_tracker_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Users_janicehung_github_support_incident_tracker_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core */ \"./node_modules/@material-ui/core/esm/index.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _graphql_queries__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../graphql/queries */ \"./graphql/queries.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nvar _jsxFileName = \"/Users/janicehung/github/support-incident-tracker/client/components/login.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\nvar login = function login(_ref) {\n  _s();\n\n  var setUserAuthenticated = _ref.setUserAuthenticated,\n      setCurrentUsername = _ref.setCurrentUsername;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(''),\n      username = _useState[0],\n      setUsername = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(''),\n      password = _useState2[0],\n      setPassword = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(''),\n      fetchedUsername = _useState3[0],\n      setFetchedUsername = _useState3[1];\n\n  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(''),\n      fetchedPassword = _useState4[0],\n      setFetchedPassword = _useState4[1];\n\n  var _useQuery = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_6__.useQuery)(_graphql_queries__WEBPACK_IMPORTED_MODULE_5__.GET_USER_BY_USERNAME, {\n    variables: {\n      username: username,\n      password: password\n    },\n    refetchOnWindowFocus: false,\n    enabled: false\n  }),\n      data = _useQuery.data,\n      refetch = _useQuery.refetch;\n\n  var onSubmit = /*#__PURE__*/function () {\n    var _ref2 = (0,_Users_janicehung_github_support_incident_tracker_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/_Users_janicehung_github_support_incident_tracker_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(e) {\n      return _Users_janicehung_github_support_incident_tracker_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              e.preventDefault();\n              refetch();\n              setFetchedUsername(data.getUserByUsername.username);\n              setFetchedPassword(data.getUserByUsername.password);\n\n              if (fetchedUsername === username && fetchedPassword === password) {\n                setUserAuthenticated(true);\n                setCurrentUsername(username);\n              } else {\n                alert('Incorrect username or password - please try again');\n                setUsername('');\n                setPassword('');\n              }\n\n            case 5:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function onSubmit(_x) {\n      return _ref2.apply(this, arguments);\n    };\n  }();\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    style: {\n      display: \"flex\",\n      height: \"100vh\",\n      justifyContent: \"center\",\n      background: \"lightGray\",\n      alignItems: \"center\"\n    },\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n      className: \"form-container\",\n      style: {\n        textAlign: \"center\",\n        background: 'white',\n        padding: '15px 20px',\n        borderRadius: '10px',\n        borderWidth: '2px',\n        borderStyle: 'groove'\n      },\n      onSubmit: onSubmit,\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n        children: \"Login to Account\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 38,\n        columnNumber: 17\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.FormControl, {\n          required: true,\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.InputLabel, {\n            id: \"username-label\",\n            children: \"Username\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 41,\n            columnNumber: 25\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.Input, {\n            id: \"username\",\n            \"aria-describedby\": \"my-helper-text\",\n            placeholder: \"username\",\n            value: username,\n            onInput: function onInput(e) {\n              return setUsername(e.target.value);\n            }\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 42,\n            columnNumber: 25\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 40,\n          columnNumber: 21\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 39,\n        columnNumber: 17\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.FormControl, {\n          required: true,\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.InputLabel, {\n            id: \"password-label\",\n            children: \"Password\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 47,\n            columnNumber: 25\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.Input, {\n            id: \"password\",\n            \"aria-describedby\": \"my-helper-text\",\n            placeholder: \"password\",\n            type: \"password\",\n            value: password,\n            onInput: function onInput(e) {\n              return setPassword(e.target.value);\n            }\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 48,\n            columnNumber: 25\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 46,\n          columnNumber: 21\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 45,\n        columnNumber: 17\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.Button, {\n        type: \"submit\",\n        style: {\n          color: 'ivory',\n          backgroundColor: 'steelblue',\n          margin: '10px 0px'\n        },\n        children: \"Login\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 51,\n        columnNumber: 17\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 51,\n        columnNumber: 129\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n        href: \"/\",\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.Button, {\n          style: {\n            color: 'ivory',\n            backgroundColor: 'purple'\n          },\n          children: \"Back\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 52,\n          columnNumber: 32\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 52,\n        columnNumber: 17\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 13\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 36,\n    columnNumber: 9\n  }, _this);\n};\n\n_s(login, \"ZqCN0jNNMzjDJ2HGCR6HNYm8bgw=\", false, function () {\n  return [_apollo_client__WEBPACK_IMPORTED_MODULE_6__.useQuery];\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (login);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9sb2dpbi5qcz80ZjliIl0sIm5hbWVzIjpbImxvZ2luIiwic2V0VXNlckF1dGhlbnRpY2F0ZWQiLCJzZXRDdXJyZW50VXNlcm5hbWUiLCJ1c2VTdGF0ZSIsInVzZXJuYW1lIiwic2V0VXNlcm5hbWUiLCJwYXNzd29yZCIsInNldFBhc3N3b3JkIiwiZmV0Y2hlZFVzZXJuYW1lIiwic2V0RmV0Y2hlZFVzZXJuYW1lIiwiZmV0Y2hlZFBhc3N3b3JkIiwic2V0RmV0Y2hlZFBhc3N3b3JkIiwidXNlUXVlcnkiLCJHRVRfVVNFUl9CWV9VU0VSTkFNRSIsInZhcmlhYmxlcyIsInJlZmV0Y2hPbldpbmRvd0ZvY3VzIiwiZW5hYmxlZCIsImRhdGEiLCJyZWZldGNoIiwib25TdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJnZXRVc2VyQnlVc2VybmFtZSIsImFsZXJ0IiwiZGlzcGxheSIsImhlaWdodCIsImp1c3RpZnlDb250ZW50IiwiYmFja2dyb3VuZCIsImFsaWduSXRlbXMiLCJ0ZXh0QWxpZ24iLCJwYWRkaW5nIiwiYm9yZGVyUmFkaXVzIiwiYm9yZGVyV2lkdGgiLCJib3JkZXJTdHlsZSIsInRhcmdldCIsInZhbHVlIiwiY29sb3IiLCJiYWNrZ3JvdW5kQ29sb3IiLCJtYXJnaW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLEtBQUssR0FBRyxTQUFSQSxLQUFRLE9BQWtEO0FBQUE7O0FBQUEsTUFBL0NDLG9CQUErQyxRQUEvQ0Esb0JBQStDO0FBQUEsTUFBekJDLGtCQUF5QixRQUF6QkEsa0JBQXlCOztBQUFBLGtCQUM1QkMsK0NBQVEsQ0FBQyxFQUFELENBRG9CO0FBQUEsTUFDckRDLFFBRHFEO0FBQUEsTUFDM0NDLFdBRDJDOztBQUFBLG1CQUU1QkYsK0NBQVEsQ0FBQyxFQUFELENBRm9CO0FBQUEsTUFFckRHLFFBRnFE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IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlUXVlcnkgfSBmcm9tICdAYXBvbGxvL2NsaWVudCc7XG5pbXBvcnQgeyBJbnB1dCwgSW5wdXRMYWJlbCwgRm9ybUNvbnRyb2wsIEJ1dHRvbiB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgeyBHRVRfVVNFUl9CWV9VU0VSTkFNRSB9IGZyb20gJy4uL2dyYXBocWwvcXVlcmllcyc7XG5cbmNvbnN0IGxvZ2luID0gKHsgc2V0VXNlckF1dGhlbnRpY2F0ZWQsIHNldEN1cnJlbnRVc2VybmFtZSB9KSA9PiB7XG4gICAgY29uc3QgW3VzZXJuYW1lLCBzZXRVc2VybmFtZV0gPSB1c2VTdGF0ZSgnJyk7XG4gICAgY29uc3QgW3Bhc3N3b3JkLCBzZXRQYXNzd29yZF0gPSB1c2VTdGF0ZSgnJyk7XG4gICAgY29uc3QgW2ZldGNoZWRVc2VybmFtZSwgc2V0RmV0Y2hlZFVzZXJuYW1lXSA9IHVzZVN0YXRlKCcnKTtcbiAgICBjb25zdCBbZmV0Y2hlZFBhc3N3b3JkLCBzZXRGZXRjaGVkUGFzc3dvcmRdID0gdXNlU3RhdGUoJycpO1xuICAgIGNvbnN0IHsgZGF0YSwgcmVmZXRjaCB9ID0gdXNlUXVlcnkoR0VUX1VTRVJfQllfVVNFUk5BTUUsIHsgXG4gICAgICAgIHZhcmlhYmxlczogeyBcbiAgICAgICAgICAgIHVzZXJuYW1lOiB1c2VybmFtZSwgcGFzc3dvcmQ6IHBhc3N3b3JkXG4gICAgICAgIH0sXG4gICAgICAgIHJlZmV0Y2hPbldpbmRvd0ZvY3VzOiBmYWxzZSxcbiAgICAgICAgZW5hYmxlZDogZmFsc2UsXG4gICAgfSk7XG5cbiAgICBjb25zdCBvblN1Ym1pdCA9IGFzeW5jIChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgcmVmZXRjaCgpO1xuICAgICAgICBzZXRGZXRjaGVkVXNlcm5hbWUoZGF0YS5nZXRVc2VyQnlVc2VybmFtZS51c2VybmFtZSlcbiAgICAgICAgc2V0RmV0Y2hlZFBhc3N3b3JkKGRhdGEuZ2V0VXNlckJ5VXNlcm5hbWUucGFzc3dvcmQpXG4gICAgICAgIGlmKGZldGNoZWRVc2VybmFtZSA9PT0gdXNlcm5hbWUgJiYgZmV0Y2hlZFBhc3N3b3JkID09PSBwYXNzd29yZCkge1xuICAgICAgICAgICAgc2V0VXNlckF1dGhlbnRpY2F0ZWQodHJ1ZSlcbiAgICAgICAgICAgIHNldEN1cnJlbnRVc2VybmFtZSh1c2VybmFtZSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGFsZXJ0KCdJbmNvcnJlY3QgdXNlcm5hbWUgb3IgcGFzc3dvcmQgLSBwbGVhc2UgdHJ5IGFnYWluJylcbiAgICAgICAgICAgIHNldFVzZXJuYW1lKCcnKVxuICAgICAgICAgICAgc2V0UGFzc3dvcmQoJycpIFxuICAgICAgICB9XG4gICAgfTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogXCJmbGV4XCIsIGhlaWdodDogXCIxMDB2aFwiLCBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIiwgYmFja2dyb3VuZDogXCJsaWdodEdyYXlcIiwgYWxpZ25JdGVtczogXCJjZW50ZXJcIn19PlxuICAgICAgICAgICAgPGZvcm0gY2xhc3NOYW1lPSdmb3JtLWNvbnRhaW5lcicgc3R5bGU9e3t0ZXh0QWxpZ246IFwiY2VudGVyXCIsIGJhY2tncm91bmQ6ICd3aGl0ZScsIHBhZGRpbmc6ICcxNXB4IDIwcHgnLCBib3JkZXJSYWRpdXM6ICcxMHB4JywgYm9yZGVyV2lkdGg6ICcycHgnLCBib3JkZXJTdHlsZTogJ2dyb292ZSd9fSBvblN1Ym1pdD17b25TdWJtaXR9PlxuICAgICAgICAgICAgICAgIDxoMT5Mb2dpbiB0byBBY2NvdW50PC9oMT5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8Rm9ybUNvbnRyb2wgcmVxdWlyZWQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRMYWJlbCBpZD1cInVzZXJuYW1lLWxhYmVsXCI+VXNlcm5hbWU8L0lucHV0TGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXQgaWQ9XCJ1c2VybmFtZVwiIGFyaWEtZGVzY3JpYmVkYnk9XCJteS1oZWxwZXItdGV4dFwiIHBsYWNlaG9sZGVyPVwidXNlcm5hbWVcIiB2YWx1ZT17dXNlcm5hbWV9IG9uSW5wdXQ9eyhlKSA9PiBzZXRVc2VybmFtZShlLnRhcmdldC52YWx1ZSl9Lz5cbiAgICAgICAgICAgICAgICAgICAgPC9Gb3JtQ29udHJvbD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8Rm9ybUNvbnRyb2wgcmVxdWlyZWQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRMYWJlbCBpZD1cInBhc3N3b3JkLWxhYmVsXCI+UGFzc3dvcmQ8L0lucHV0TGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXQgaWQ9XCJwYXNzd29yZFwiIGFyaWEtZGVzY3JpYmVkYnk9XCJteS1oZWxwZXItdGV4dFwiIHBsYWNlaG9sZGVyPVwicGFzc3dvcmRcIiB0eXBlPVwicGFzc3dvcmRcIiB2YWx1ZT17cGFzc3dvcmR9IG9uSW5wdXQ9eyhlKSA9PiBzZXRQYXNzd29yZChlLnRhcmdldC52YWx1ZSl9Lz5cbiAgICAgICAgICAgICAgICA8L0Zvcm1Db250cm9sPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cInN1Ym1pdFwiIHN0eWxlPXt7IGNvbG9yOiAnaXZvcnknLCBiYWNrZ3JvdW5kQ29sb3I6ICdzdGVlbGJsdWUnLCBtYXJnaW46ICcxMHB4IDBweCd9fT5Mb2dpbjwvQnV0dG9uPjxicj48L2JyPlxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+PEJ1dHRvbiBzdHlsZT17eyBjb2xvcjogJ2l2b3J5JywgYmFja2dyb3VuZENvbG9yOiAncHVycGxlJyB9fT5CYWNrPC9CdXR0b24+PC9MaW5rPlxuICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59O1xuXG5leHBvcnQgZGVmYXVsdCBsb2dpbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/login.js\n");

/***/ })

});