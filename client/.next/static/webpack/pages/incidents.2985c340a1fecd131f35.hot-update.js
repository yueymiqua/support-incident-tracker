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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_janicehung_github_support_incident_tracker_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_janicehung_github_support_incident_tracker_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_janicehung_github_support_incident_tracker_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Users_janicehung_github_support_incident_tracker_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core */ \"./node_modules/@material-ui/core/esm/index.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _graphql_queries__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../graphql/queries */ \"./graphql/queries.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nvar _jsxFileName = \"/Users/janicehung/github/support-incident-tracker/client/components/login.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\nvar login = function login(_ref) {\n  _s();\n\n  var setUserAuthenticated = _ref.setUserAuthenticated,\n      setCurrentUsername = _ref.setCurrentUsername;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(''),\n      username = _useState[0],\n      setUsername = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(''),\n      password = _useState2[0],\n      setPassword = _useState2[1]; // const [fetchedUsername, setFetchedUsername] = useState('');\n  // const [fetchedPassword, setFetchedPassword] = useState('');\n\n\n  var _useQuery = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_6__.useQuery)(_graphql_queries__WEBPACK_IMPORTED_MODULE_5__.GET_USER_BY_USERNAME, {\n    variables: {\n      username: username,\n      password: password\n    },\n    refetchOnWindowFocus: false,\n    enabled: false\n  }),\n      data = _useQuery.data,\n      refetch = _useQuery.refetch;\n\n  var onSubmit = /*#__PURE__*/function () {\n    var _ref2 = (0,_Users_janicehung_github_support_incident_tracker_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/_Users_janicehung_github_support_incident_tracker_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(e) {\n      return _Users_janicehung_github_support_incident_tracker_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              e.preventDefault();\n              refetch();\n\n              if (data.getUserByUsername.username === username && data.getUserByUsername.password === password) {\n                setUserAuthenticated(true);\n                setCurrentUsername(username);\n              } else {\n                alert('Incorrect username or password - please try again');\n                setUsername('');\n                setPassword('');\n              }\n\n            case 3:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function onSubmit(_x) {\n      return _ref2.apply(this, arguments);\n    };\n  }();\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    style: {\n      display: \"flex\",\n      height: \"100vh\",\n      justifyContent: \"center\",\n      background: \"lightGray\",\n      alignItems: \"center\"\n    },\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n      className: \"form-container\",\n      style: {\n        textAlign: \"center\",\n        background: 'white',\n        padding: '15px 20px',\n        borderRadius: '10px',\n        borderWidth: '2px',\n        borderStyle: 'groove'\n      },\n      onSubmit: onSubmit,\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n        children: \"Login to Account\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 36,\n        columnNumber: 17\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.FormControl, {\n          required: true,\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.InputLabel, {\n            id: \"username-label\",\n            children: \"Username\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 39,\n            columnNumber: 25\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.Input, {\n            id: \"username\",\n            \"aria-describedby\": \"my-helper-text\",\n            placeholder: \"username\",\n            value: username,\n            onInput: function onInput(e) {\n              return setUsername(e.target.value);\n            }\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 40,\n            columnNumber: 25\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 38,\n          columnNumber: 21\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 37,\n        columnNumber: 17\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.FormControl, {\n          required: true,\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.InputLabel, {\n            id: \"password-label\",\n            children: \"Password\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 45,\n            columnNumber: 25\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.Input, {\n            id: \"password\",\n            \"aria-describedby\": \"my-helper-text\",\n            placeholder: \"password\",\n            type: \"password\",\n            value: password,\n            onInput: function onInput(e) {\n              return setPassword(e.target.value);\n            }\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 46,\n            columnNumber: 25\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 44,\n          columnNumber: 21\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 43,\n        columnNumber: 17\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.Button, {\n        type: \"submit\",\n        style: {\n          color: 'ivory',\n          backgroundColor: 'steelblue',\n          margin: '10px 0px'\n        },\n        children: \"Login\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 49,\n        columnNumber: 17\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 49,\n        columnNumber: 129\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n        href: \"/\",\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.Button, {\n          style: {\n            color: 'ivory',\n            backgroundColor: 'purple'\n          },\n          children: \"Back\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 50,\n          columnNumber: 32\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 50,\n        columnNumber: 17\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 13\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 34,\n    columnNumber: 9\n  }, _this);\n};\n\n_s(login, \"w5nMqbX94IonDsaJ+JsGKrM5JQg=\", false, function () {\n  return [_apollo_client__WEBPACK_IMPORTED_MODULE_6__.useQuery];\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (login);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9sb2dpbi5qcz80ZjliIl0sIm5hbWVzIjpbImxvZ2luIiwic2V0VXNlckF1dGhlbnRpY2F0ZWQiLCJzZXRDdXJyZW50VXNlcm5hbWUiLCJ1c2VTdGF0ZSIsInVzZXJuYW1lIiwic2V0VXNlcm5hbWUiLCJwYXNzd29yZCIsInNldFBhc3N3b3JkIiwidXNlUXVlcnkiLCJHRVRfVVNFUl9CWV9VU0VSTkFNRSIsInZhcmlhYmxlcyIsInJlZmV0Y2hPbldpbmRvd0ZvY3VzIiwiZW5hYmxlZCIsImRhdGEiLCJyZWZldGNoIiwib25TdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJnZXRVc2VyQnlVc2VybmFtZSIsImFsZXJ0IiwiZGlzcGxheSIsImhlaWdodCIsImp1c3RpZnlDb250ZW50IiwiYmFja2dyb3VuZCIsImFsaWduSXRlbXMiLCJ0ZXh0QWxpZ24iLCJwYWRkaW5nIiwiYm9yZGVyUmFkaXVzIiwiYm9yZGVyV2lkdGgiLCJib3JkZXJTdHlsZSIsInRhcmdldCIsInZhbHVlIiwiY29sb3IiLCJiYWNrZ3JvdW5kQ29sb3IiLCJtYXJnaW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLEtBQUssR0FBRyxTQUFSQSxLQUFRLE9BQWtEO0FBQUE7O0FBQUEsTUFBL0NDLG9CQUErQyxRQUEvQ0Esb0JBQStDO0FBQUEsTUFBekJDLGtCQUF5QixRQUF6QkEsa0JBQXlCOztBQUFBLGtCQUM1QkMsK0NBQVEsQ0FBQyxFQUFELENBRG9CO0FBQUEsTUFDckRDLFFBRHFEO0FBQUEsTUFDM0NDLFdBRDJDOztBQUFBLG1CQUU1QkYsK0NBQVEsQ0FBQyxFQUFELENBRm9CO0FBQUEsTUFFckRHLFFBRnFEO0FBQUEsTUFFM0NDLFdBRjJDLGtCQUc1RDtBQUNBOzs7QUFKNEQsa0JBS2xDQyx3REFBUSxDQUFDQyxrRUFBRCxFQUF1QjtBQUNyREMs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QUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFSSixlQWNJLDhEQUFDLHFEQUFEO0FBQVEsWUFBSSxFQUFDLFFBQWI7QUFBc0IsYUFBSyxFQUFFO0FBQUVDLGVBQUssRUFBRSxPQUFUO0FBQWtCQyx5QkFBZSxFQUFFLFdBQW5DO0FBQWdEQyxnQkFBTSxFQUFFO0FBQXhELFNBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBZEosZUFjb0g7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQWRwSCxlQWVJLDhEQUFDLGtEQUFEO0FBQU0sWUFBSSxFQUFDLEdBQVg7QUFBQSwrQkFBZSw4REFBQyxxREFBRDtBQUFRLGVBQUssRUFBRTtBQUFFRixpQkFBSyxFQUFFLE9BQVQ7QUFBa0JDLDJCQUFlLEVBQUU7QUFBbkMsV0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFmSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUFxQkgsQ0EvQ0Q7O0dBQU1qQyxLO1VBS3dCUSxvRDs7O0FBNEM5QiwrREFBZVIsS0FBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvbG9naW4uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVF1ZXJ5IH0gZnJvbSAnQGFwb2xsby9jbGllbnQnO1xuaW1wb3J0IHsgSW5wdXQsIElucHV0TGFiZWwsIEZvcm1Db250cm9sLCBCdXR0b24gfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IHsgR0VUX1VTRVJfQllfVVNFUk5BTUUgfSBmcm9tICcuLi9ncmFwaHFsL3F1ZXJpZXMnO1xuXG5jb25zdCBsb2dpbiA9ICh7IHNldFVzZXJBdXRoZW50aWNhdGVkLCBzZXRDdXJyZW50VXNlcm5hbWUgfSkgPT4ge1xuICAgIGNvbnN0IFt1c2VybmFtZSwgc2V0VXNlcm5hbWVdID0gdXNlU3RhdGUoJycpO1xuICAgIGNvbnN0IFtwYXNzd29yZCwgc2V0UGFzc3dvcmRdID0gdXNlU3RhdGUoJycpO1xuICAgIC8vIGNvbnN0IFtmZXRjaGVkVXNlcm5hbWUsIHNldEZldGNoZWRVc2VybmFtZV0gPSB1c2VTdGF0ZSgnJyk7XG4gICAgLy8gY29uc3QgW2ZldGNoZWRQYXNzd29yZCwgc2V0RmV0Y2hlZFBhc3N3b3JkXSA9IHVzZVN0YXRlKCcnKTtcbiAgICBjb25zdCB7IGRhdGEsIHJlZmV0Y2ggfSA9IHVzZVF1ZXJ5KEdFVF9VU0VSX0JZX1VTRVJOQU1FLCB7IFxuICAgICAgICB2YXJpYWJsZXM6IHsgXG4gICAgICAgICAgICB1c2VybmFtZTogdXNlcm5hbWUsIHBhc3N3b3JkOiBwYXNzd29yZFxuICAgICAgICB9LFxuICAgICAgICByZWZldGNoT25XaW5kb3dGb2N1czogZmFsc2UsXG4gICAgICAgIGVuYWJsZWQ6IGZhbHNlLFxuICAgIH0pO1xuXG4gICAgY29uc3Qgb25TdWJtaXQgPSBhc3luYyAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHJlZmV0Y2goKTtcbiAgICAgICAgaWYoZGF0YS5nZXRVc2VyQnlVc2VybmFtZS51c2VybmFtZSA9PT0gdXNlcm5hbWUgJiYgZGF0YS5nZXRVc2VyQnlVc2VybmFtZS5wYXNzd29yZCA9PT0gcGFzc3dvcmQpIHtcbiAgICAgICAgICAgIHNldFVzZXJBdXRoZW50aWNhdGVkKHRydWUpXG4gICAgICAgICAgICBzZXRDdXJyZW50VXNlcm5hbWUodXNlcm5hbWUpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBhbGVydCgnSW5jb3JyZWN0IHVzZXJuYW1lIG9yIHBhc3N3b3JkIC0gcGxlYXNlIHRyeSBhZ2FpbicpXG4gICAgICAgICAgICBzZXRVc2VybmFtZSgnJylcbiAgICAgICAgICAgIHNldFBhc3N3b3JkKCcnKSBcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6IFwiZmxleFwiLCBoZWlnaHQ6IFwiMTAwdmhcIiwganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsIGJhY2tncm91bmQ6IFwibGlnaHRHcmF5XCIsIGFsaWduSXRlbXM6IFwiY2VudGVyXCJ9fT5cbiAgICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT0nZm9ybS1jb250YWluZXInIHN0eWxlPXt7dGV4dEFsaWduOiBcImNlbnRlclwiLCBiYWNrZ3JvdW5kOiAnd2hpdGUnLCBwYWRkaW5nOiAnMTVweCAyMHB4JywgYm9yZGVyUmFkaXVzOiAnMTBweCcsIGJvcmRlcldpZHRoOiAnMnB4JywgYm9yZGVyU3R5bGU6ICdncm9vdmUnfX0gb25TdWJtaXQ9e29uU3VibWl0fT5cbiAgICAgICAgICAgICAgICA8aDE+TG9naW4gdG8gQWNjb3VudDwvaDE+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPEZvcm1Db250cm9sIHJlcXVpcmVkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0TGFiZWwgaWQ9XCJ1c2VybmFtZS1sYWJlbFwiPlVzZXJuYW1lPC9JbnB1dExhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0IGlkPVwidXNlcm5hbWVcIiBhcmlhLWRlc2NyaWJlZGJ5PVwibXktaGVscGVyLXRleHRcIiBwbGFjZWhvbGRlcj1cInVzZXJuYW1lXCIgdmFsdWU9e3VzZXJuYW1lfSBvbklucHV0PXsoZSkgPT4gc2V0VXNlcm5hbWUoZS50YXJnZXQudmFsdWUpfS8+XG4gICAgICAgICAgICAgICAgICAgIDwvRm9ybUNvbnRyb2w+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPEZvcm1Db250cm9sIHJlcXVpcmVkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0TGFiZWwgaWQ9XCJwYXNzd29yZC1sYWJlbFwiPlBhc3N3b3JkPC9JbnB1dExhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0IGlkPVwicGFzc3dvcmRcIiBhcmlhLWRlc2NyaWJlZGJ5PVwibXktaGVscGVyLXRleHRcIiBwbGFjZWhvbGRlcj1cInBhc3N3b3JkXCIgdHlwZT1cInBhc3N3b3JkXCIgdmFsdWU9e3Bhc3N3b3JkfSBvbklucHV0PXsoZSkgPT4gc2V0UGFzc3dvcmQoZS50YXJnZXQudmFsdWUpfS8+XG4gICAgICAgICAgICAgICAgPC9Gb3JtQ29udHJvbD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBzdHlsZT17eyBjb2xvcjogJ2l2b3J5JywgYmFja2dyb3VuZENvbG9yOiAnc3RlZWxibHVlJywgbWFyZ2luOiAnMTBweCAwcHgnfX0+TG9naW48L0J1dHRvbj48YnI+PC9icj5cbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPjxCdXR0b24gc3R5bGU9e3sgY29sb3I6ICdpdm9yeScsIGJhY2tncm91bmRDb2xvcjogJ3B1cnBsZScgfX0+QmFjazwvQnV0dG9uPjwvTGluaz5cbiAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufTtcblxuZXhwb3J0IGRlZmF1bHQgbG9naW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/login.js\n");

/***/ })

});