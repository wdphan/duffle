/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./src/components/store/index.tsx":
/*!****************************************!*\
  !*** ./src/components/store/index.tsx ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"GlobalStore\": () => (/* binding */ GlobalStore),\n/* harmony export */   \"globalContext\": () => (/* binding */ globalContext),\n/* harmony export */   \"initialState\": () => (/* binding */ initialState)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reducer */ \"./src/components/store/reducer.ts\");\n\n// REF: https://javascript.plainenglish.io/global-state-using-only-react-hooks-with-the-context-api-typescript-edition-ada822fc282c\n\n\n/**\n * React Context-based Global Store with a reducer\n **/ function GlobalStore({ children  }) {\n    const { 0: globalState , 1: dispatch  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useReducer)(_reducer__WEBPACK_IMPORTED_MODULE_2__[\"default\"], initialState);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(globalContext.Provider, {\n        value: {\n            globalState,\n            dispatch\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/williamphan/Desktop/duffle/src/components/store/index.tsx\",\n        lineNumber: 13,\n        columnNumber: 5\n    }, this);\n}\nconst globalContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({});\nconst initialState = {\n    provider: null,\n    web3: null,\n    account: \"\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9zdG9yZS9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFDQTtBQURBLG1JQUFtSTtBQUN4RDtBQUMzQztBQUdoQzs7SUFFSSxDQUNHLFNBQVNHLFdBQVcsQ0FBQyxFQUFFQyxRQUFRLEdBQTJCLEVBQWdCO0lBQy9FLE1BQU0sRUFUUixHQVNTQyxXQUFXLEdBVHBCLEdBU3NCQyxRQUFRLE1BQUlMLGlEQUFVLENBQUNDLGdEQUFPLEVBQUVLLFlBQVksQ0FBQztJQUVqRSxxQkFDRSw4REFBQ0MsYUFBYSxDQUFDQyxRQUFRO1FBQUNDLEtBQUssRUFBRTtZQUFFTCxXQUFXO1lBQUVDLFFBQVE7U0FBRTtrQkFDckRGLFFBQVE7Ozs7O1lBQ2MsQ0FDekI7Q0FDSDtBQUVNLE1BQU1JLGFBQWEsaUJBQUdSLG9EQUFhLENBQUMsRUFBRSxDQUFnQixDQUFDO0FBRXZELE1BQU1PLFlBQVksR0FBeUI7SUFDaERJLFFBQVEsRUFBRSxJQUFJO0lBQ2RDLElBQUksRUFBRSxJQUFJO0lBQ1ZDLE9BQU8sRUFBRSxFQUFFO0NBQ1osQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2RhcHAtc3RhcnRlci8uL3NyYy9jb21wb25lbnRzL3N0b3JlL2luZGV4LnRzeD8wNzNhIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFJFRjogaHR0cHM6Ly9qYXZhc2NyaXB0LnBsYWluZW5nbGlzaC5pby9nbG9iYWwtc3RhdGUtdXNpbmctb25seS1yZWFjdC1ob29rcy13aXRoLXRoZS1jb250ZXh0LWFwaS10eXBlc2NyaXB0LWVkaXRpb24tYWRhODIyZmMyODJjXG5pbXBvcnQgeyBjcmVhdGVDb250ZXh0LCBSZWFjdEVsZW1lbnQsIFJlYWN0Tm9kZSwgdXNlUmVkdWNlciB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWR1Y2VyIGZyb20gJy4vcmVkdWNlcic7XG5pbXBvcnQgeyBDb250ZXh0VHlwZSwgR2xvYmFsU3RhdGVJbnRlcmZhY2UgfSBmcm9tICcuL3R5cGVzJztcblxuLyoqXG4gKiBSZWFjdCBDb250ZXh0LWJhc2VkIEdsb2JhbCBTdG9yZSB3aXRoIGEgcmVkdWNlclxuICoqL1xuZXhwb3J0IGZ1bmN0aW9uIEdsb2JhbFN0b3JlKHsgY2hpbGRyZW4gfTogeyBjaGlsZHJlbjogUmVhY3ROb2RlIH0pOiBSZWFjdEVsZW1lbnQge1xuICBjb25zdCBbZ2xvYmFsU3RhdGUsIGRpc3BhdGNoXSA9IHVzZVJlZHVjZXIoUmVkdWNlciwgaW5pdGlhbFN0YXRlKTtcblxuICByZXR1cm4gKFxuICAgIDxnbG9iYWxDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7IGdsb2JhbFN0YXRlLCBkaXNwYXRjaCB9fT5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L2dsb2JhbENvbnRleHQuUHJvdmlkZXI+XG4gICk7XG59XG5cbmV4cG9ydCBjb25zdCBnbG9iYWxDb250ZXh0ID0gY3JlYXRlQ29udGV4dCh7fSBhcyBDb250ZXh0VHlwZSk7XG5cbmV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGU6IEdsb2JhbFN0YXRlSW50ZXJmYWNlID0ge1xuICBwcm92aWRlcjogbnVsbCxcbiAgd2ViMzogbnVsbCxcbiAgYWNjb3VudDogJycsXG59O1xuIl0sIm5hbWVzIjpbImNyZWF0ZUNvbnRleHQiLCJ1c2VSZWR1Y2VyIiwiUmVkdWNlciIsIkdsb2JhbFN0b3JlIiwiY2hpbGRyZW4iLCJnbG9iYWxTdGF0ZSIsImRpc3BhdGNoIiwiaW5pdGlhbFN0YXRlIiwiZ2xvYmFsQ29udGV4dCIsIlByb3ZpZGVyIiwidmFsdWUiLCJwcm92aWRlciIsIndlYjMiLCJhY2NvdW50Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/store/index.tsx\n");

/***/ }),

/***/ "./src/components/store/reducer.ts":
/*!*****************************************!*\
  !*** ./src/components/store/reducer.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ \"./src/components/store/index.tsx\");\n\nconst Reducer = (state, action)=>{\n    switch(action.type){\n        case \"SET_ACCOUNT\":\n            return {\n                ...state,\n                account: action.payload\n            };\n        case \"SET_PROVIDER\":\n            return {\n                ...state,\n                provider: action.payload\n            };\n        case \"SET_WEB3\":\n            return {\n                ...state,\n                web3: action.payload\n            };\n        case \"CLEAR_STATE\":\n            return _index__WEBPACK_IMPORTED_MODULE_0__.initialState;\n        default:\n            return state;\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Reducer);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9zdG9yZS9yZWR1Y2VyLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQ3VDO0FBRXZDLE1BQU1DLE9BQU8sR0FBRyxDQUFDQyxLQUEyQixFQUFFQyxNQUFrQixHQUFVO0lBQ3RFLE9BQVFBLE1BQU0sQ0FBQ0MsSUFBSTtRQUNmLEtBQUssYUFBYTtZQUNkLE9BQU87Z0JBQ0gsR0FBR0YsS0FBSztnQkFDUkcsT0FBTyxFQUFFRixNQUFNLENBQUNHLE9BQU87YUFDMUIsQ0FBQztRQUNOLEtBQUssY0FBYztZQUNmLE9BQU87Z0JBQ0gsR0FBR0osS0FBSztnQkFDUkssUUFBUSxFQUFFSixNQUFNLENBQUNHLE9BQU87YUFDM0IsQ0FBQztRQUNOLEtBQUssVUFBVTtZQUNYLE9BQU87Z0JBQ0gsR0FBR0osS0FBSztnQkFDUk0sSUFBSSxFQUFFTCxNQUFNLENBQUNHLE9BQU87YUFDdkIsQ0FBQztRQUNOLEtBQUssYUFBYTtZQUNkLE9BQU9OLGdEQUFZLENBQUM7UUFDeEI7WUFDSSxPQUFPRSxLQUFLLENBQUM7S0FDcEI7Q0FDSjtBQUVELGlFQUFlRCxPQUFPLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kYXBwLXN0YXJ0ZXIvLi9zcmMvY29tcG9uZW50cy9zdG9yZS9yZWR1Y2VyLnRzPzI3NmIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWN0aW9uVHlwZSwgR2xvYmFsU3RhdGVJbnRlcmZhY2UgfSBmcm9tICcuL3R5cGVzJztcbmltcG9ydCB7IGluaXRpYWxTdGF0ZSB9IGZyb20gJy4vaW5kZXgnO1xuXG5jb25zdCBSZWR1Y2VyID0gKHN0YXRlOiBHbG9iYWxTdGF0ZUludGVyZmFjZSwgYWN0aW9uOiBBY3Rpb25UeXBlKTogYW55ID0+IHtcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgICAgIGNhc2UgJ1NFVF9BQ0NPVU5UJzpcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICAgICAgYWNjb3VudDogYWN0aW9uLnBheWxvYWQsXG4gICAgICAgICAgICB9O1xuICAgICAgICBjYXNlICdTRVRfUFJPVklERVInOlxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgICAgICBwcm92aWRlcjogYWN0aW9uLnBheWxvYWQsXG4gICAgICAgICAgICB9O1xuICAgICAgICBjYXNlICdTRVRfV0VCMyc6XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgICAgIHdlYjM6IGFjdGlvbi5wYXlsb2FkLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgY2FzZSAnQ0xFQVJfU1RBVEUnOlxuICAgICAgICAgICAgcmV0dXJuIGluaXRpYWxTdGF0ZTtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBSZWR1Y2VyOyJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdGUiLCJSZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwiYWNjb3VudCIsInBheWxvYWQiLCJwcm92aWRlciIsIndlYjMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/store/reducer.ts\n");

/***/ }),

/***/ "./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var tailwindcss_tailwind_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tailwindcss/tailwind.css */ \"./node_modules/tailwindcss/tailwind.css\");\n/* harmony import */ var tailwindcss_tailwind_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tailwindcss_tailwind_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/react */ \"@chakra-ui/react\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var src_components_store_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/components/store/index */ \"./src/components/store/index.tsx\");\n/* harmony import */ var src_styles_globals_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/styles/globals.css */ \"./src/styles/globals.css\");\n/* harmony import */ var src_styles_globals_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(src_styles_globals_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var src_styles_styles_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/styles/styles.css */ \"./src/styles/styles.css\");\n/* harmony import */ var src_styles_styles_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(src_styles_styles_css__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\nconst App = ({ Component , pageProps  })=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(src_components_store_index__WEBPACK_IMPORTED_MODULE_3__.GlobalStore, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.ChakraProvider, {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"/Users/williamphan/Desktop/duffle/src/pages/_app.tsx\",\n                lineNumber: 12,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/Users/williamphan/Desktop/duffle/src/pages/_app.tsx\",\n            lineNumber: 11,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/williamphan/Desktop/duffle/src/pages/_app.tsx\",\n        lineNumber: 10,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBa0M7QUFFZ0I7QUFDTztBQUN6QjtBQUNEO0FBRS9CLE1BQU1FLEdBQUcsR0FBRyxDQUFDLEVBQUVDLFNBQVMsR0FBRUMsU0FBUyxHQUFFLEdBQUs7SUFDeEMscUJBQ0UsOERBQUNILG1FQUFXO2tCQUNWLDRFQUFDRCw0REFBYztzQkFDYiw0RUFBQ0csU0FBUztnQkFBRSxHQUFHQyxTQUFTOzs7Ozt5QkFBSTs7Ozs7cUJBQ2I7Ozs7O2lCQUNMLENBQ2Q7Q0FDSDtBQUVELGlFQUFlRixHQUFHLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kYXBwLXN0YXJ0ZXIvLi9zcmMvcGFnZXMvX2FwcC50c3g/ZjlkNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXCJ0YWlsd2luZGNzcy90YWlsd2luZC5jc3NcIjtcbmltcG9ydCB7IEFwcFByb3BzIH0gZnJvbSBcIm5leHQvYXBwXCI7XG5pbXBvcnQgeyBDaGFrcmFQcm92aWRlciB9IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XG5pbXBvcnQgeyBHbG9iYWxTdG9yZSB9IGZyb20gXCJzcmMvY29tcG9uZW50cy9zdG9yZS9pbmRleFwiO1xuaW1wb3J0IFwic3JjL3N0eWxlcy9nbG9iYWxzLmNzc1wiO1xuaW1wb3J0IFwic3JjL3N0eWxlcy9zdHlsZXMuY3NzXCI7XG5cbmNvbnN0IEFwcCA9ICh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8R2xvYmFsU3RvcmU+XG4gICAgICA8Q2hha3JhUHJvdmlkZXI+XG4gICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICAgIDwvQ2hha3JhUHJvdmlkZXI+XG4gICAgPC9HbG9iYWxTdG9yZT5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFwcDtcbiJdLCJuYW1lcyI6WyJDaGFrcmFQcm92aWRlciIsIkdsb2JhbFN0b3JlIiwiQXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/_app.tsx\n");

/***/ }),

/***/ "./node_modules/tailwindcss/tailwind.css":
/*!***********************************************!*\
  !*** ./node_modules/tailwindcss/tailwind.css ***!
  \***********************************************/
/***/ (() => {



/***/ }),

/***/ "./src/styles/globals.css":
/*!********************************!*\
  !*** ./src/styles/globals.css ***!
  \********************************/
/***/ (() => {



/***/ }),

/***/ "./src/styles/styles.css":
/*!*******************************!*\
  !*** ./src/styles/styles.css ***!
  \*******************************/
/***/ (() => {



/***/ }),

/***/ "@chakra-ui/react":
/*!***********************************!*\
  !*** external "@chakra-ui/react" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@chakra-ui/react");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/_app.tsx"));
module.exports = __webpack_exports__;

})();