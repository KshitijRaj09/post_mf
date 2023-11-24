"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkpost_mf"] = self["webpackChunkpost_mf"] || []).push([["src_bootstrap_js"],{

/***/ "./node_modules/@mui/material/styles/ThemeProvider.js":
/*!************************************************************!*\
  !*** ./node_modules/@mui/material/styles/ThemeProvider.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ThemeProvider)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ \"./node_modules/@babel/runtime/helpers/esm/extends.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ \"./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"webpack/sharing/consume/default/react/react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _mui_system__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/system */ \"./node_modules/@mui/system/esm/ThemeProvider/ThemeProvider.js\");\n/* harmony import */ var _identifier__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./identifier */ \"./node_modules/@mui/material/styles/identifier.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n'use client';\n\n\n\nconst _excluded = [\"theme\"];\n\n\n\n\n\nfunction ThemeProvider(_ref) {\n  let {\n      theme: themeInput\n    } = _ref,\n    props = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_ref, _excluded);\n  const scopedTheme = themeInput[_identifier__WEBPACK_IMPORTED_MODULE_4__[\"default\"]];\n  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_mui_system__WEBPACK_IMPORTED_MODULE_5__[\"default\"], (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, props, {\n    themeId: scopedTheme ? _identifier__WEBPACK_IMPORTED_MODULE_4__[\"default\"] : undefined,\n    theme: scopedTheme || themeInput\n  }));\n}\n false ? 0 : void 0;\n\n//# sourceURL=webpack://post_mf/./node_modules/@mui/material/styles/ThemeProvider.js?");

/***/ }),

/***/ "./node_modules/@mui/private-theming/ThemeProvider/ThemeProvider.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@mui/private-theming/ThemeProvider/ThemeProvider.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ \"./node_modules/@babel/runtime/helpers/esm/extends.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"webpack/sharing/consume/default/react/react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _useTheme_ThemeContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../useTheme/ThemeContext */ \"./node_modules/@mui/private-theming/useTheme/ThemeContext.js\");\n/* harmony import */ var _useTheme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../useTheme */ \"./node_modules/@mui/private-theming/useTheme/useTheme.js\");\n/* harmony import */ var _nested__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./nested */ \"./node_modules/@mui/private-theming/ThemeProvider/nested.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n\n\n\n\n\n\n\n\n// To support composition of theme.\n\nfunction mergeOuterLocalTheme(outerTheme, localTheme) {\n  if (typeof localTheme === 'function') {\n    const mergedTheme = localTheme(outerTheme);\n    if (false) {}\n    return mergedTheme;\n  }\n  return (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, outerTheme, localTheme);\n}\n\n/**\n * This component takes a `theme` prop.\n * It makes the `theme` available down the React tree thanks to React context.\n * This component should preferably be used at **the root of your component tree**.\n */\nfunction ThemeProvider(props) {\n  const {\n    children,\n    theme: localTheme\n  } = props;\n  const outerTheme = (0,_useTheme__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n  if (false) {}\n  const theme = react__WEBPACK_IMPORTED_MODULE_1__.useMemo(() => {\n    const output = outerTheme === null ? localTheme : mergeOuterLocalTheme(outerTheme, localTheme);\n    if (output != null) {\n      output[_nested__WEBPACK_IMPORTED_MODULE_4__[\"default\"]] = outerTheme !== null;\n    }\n    return output;\n  }, [localTheme, outerTheme]);\n  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_useTheme_ThemeContext__WEBPACK_IMPORTED_MODULE_5__[\"default\"].Provider, {\n    value: theme,\n    children: children\n  });\n}\n false ? 0 : void 0;\nif (false) {}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ThemeProvider);\n\n//# sourceURL=webpack://post_mf/./node_modules/@mui/private-theming/ThemeProvider/ThemeProvider.js?");

/***/ }),

/***/ "./node_modules/@mui/private-theming/ThemeProvider/nested.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@mui/private-theming/ThemeProvider/nested.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst hasSymbol = typeof Symbol === 'function' && Symbol.for;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (hasSymbol ? Symbol.for('mui.nested') : '__THEME_NESTED__');\n\n//# sourceURL=webpack://post_mf/./node_modules/@mui/private-theming/ThemeProvider/nested.js?");

/***/ }),

/***/ "./node_modules/@mui/private-theming/useTheme/ThemeContext.js":
/*!********************************************************************!*\
  !*** ./node_modules/@mui/private-theming/useTheme/ThemeContext.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"webpack/sharing/consume/default/react/react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nconst ThemeContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext(null);\nif (false) {}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ThemeContext);\n\n//# sourceURL=webpack://post_mf/./node_modules/@mui/private-theming/useTheme/ThemeContext.js?");

/***/ }),

/***/ "./node_modules/@mui/private-theming/useTheme/useTheme.js":
/*!****************************************************************!*\
  !*** ./node_modules/@mui/private-theming/useTheme/useTheme.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ useTheme)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"webpack/sharing/consume/default/react/react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _ThemeContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ThemeContext */ \"./node_modules/@mui/private-theming/useTheme/ThemeContext.js\");\n\n\nfunction useTheme() {\n  const theme = react__WEBPACK_IMPORTED_MODULE_0__.useContext(_ThemeContext__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n  if (false) {}\n  return theme;\n}\n\n//# sourceURL=webpack://post_mf/./node_modules/@mui/private-theming/useTheme/useTheme.js?");

/***/ }),

/***/ "./node_modules/@mui/system/esm/ThemeProvider/ThemeProvider.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@mui/system/esm/ThemeProvider/ThemeProvider.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ \"./node_modules/@babel/runtime/helpers/esm/extends.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"webpack/sharing/consume/default/react/react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_private_theming__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/private-theming */ \"./node_modules/@mui/private-theming/useTheme/useTheme.js\");\n/* harmony import */ var _mui_private_theming__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/private-theming */ \"./node_modules/@mui/private-theming/ThemeProvider/ThemeProvider.js\");\n/* harmony import */ var _mui_styled_engine__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/styled-engine */ \"webpack/sharing/consume/default/@emotion/react/@emotion/react\");\n/* harmony import */ var _mui_styled_engine__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_styled_engine__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _useThemeWithoutDefault__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../useThemeWithoutDefault */ \"./node_modules/@mui/system/esm/useThemeWithoutDefault.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n'use client';\n\n\n\n\n\n\n\n\n\nconst EMPTY_THEME = {};\nfunction useThemeScoping(themeId, upperTheme, localTheme, isPrivate = false) {\n  return react__WEBPACK_IMPORTED_MODULE_1__.useMemo(() => {\n    const resolvedTheme = themeId ? upperTheme[themeId] || upperTheme : upperTheme;\n    if (typeof localTheme === 'function') {\n      const mergedTheme = localTheme(resolvedTheme);\n      const result = themeId ? (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, upperTheme, {\n        [themeId]: mergedTheme\n      }) : mergedTheme;\n      // must return a function for the private theme to NOT merge with the upper theme.\n      // see the test case \"use provided theme from a callback\" in ThemeProvider.test.js\n      if (isPrivate) {\n        return () => result;\n      }\n      return result;\n    }\n    return themeId ? (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, upperTheme, {\n      [themeId]: localTheme\n    }) : (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, upperTheme, localTheme);\n  }, [themeId, upperTheme, localTheme, isPrivate]);\n}\n\n/**\n * This component makes the `theme` available down the React tree.\n * It should preferably be used at **the root of your component tree**.\n *\n * <ThemeProvider theme={theme}> // existing use case\n * <ThemeProvider theme={{ id: theme }}> // theme scoping\n */\nfunction ThemeProvider(props) {\n  const {\n    children,\n    theme: localTheme,\n    themeId\n  } = props;\n  const upperTheme = (0,_useThemeWithoutDefault__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(EMPTY_THEME);\n  const upperPrivateTheme = (0,_mui_private_theming__WEBPACK_IMPORTED_MODULE_4__[\"default\"])() || EMPTY_THEME;\n  if (false) {}\n  const engineTheme = useThemeScoping(themeId, upperTheme, localTheme);\n  const privateTheme = useThemeScoping(themeId, upperPrivateTheme, localTheme, true);\n  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_mui_private_theming__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    theme: privateTheme,\n    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_mui_styled_engine__WEBPACK_IMPORTED_MODULE_6__.ThemeContext.Provider, {\n      value: engineTheme,\n      children: children\n    })\n  });\n}\n false ? 0 : void 0;\nif (false) {}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ThemeProvider);\n\n//# sourceURL=webpack://post_mf/./node_modules/@mui/system/esm/ThemeProvider/ThemeProvider.js?");

/***/ }),

/***/ "./src/bootstrap.js":
/*!**************************!*\
  !*** ./src/bootstrap.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-dom/client */ \"./node_modules/react-dom/client.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"webpack/sharing/consume/default/react/react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Main__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Main */ \"./src/components/Main.tsx\");\n\n\n\n\n// Clear the existing HTML content\n//document.body.innerHTML = '<div id=\"app\"></div>';\n\n// Render your React component instead\nvar root = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_0__.createRoot)(document.getElementById(\"post-app\"));\nconsole.log('post microfrontend loaded');\nroot.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_components_Main__WEBPACK_IMPORTED_MODULE_2__[\"default\"], null));\n\n//# sourceURL=webpack://post_mf/./src/bootstrap.js?");

/***/ }),

/***/ "./node_modules/react-dom/client.js":
/*!******************************************!*\
  !*** ./node_modules/react-dom/client.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nvar m = __webpack_require__(/*! react-dom */ \"webpack/sharing/consume/default/react-dom/react-dom\");\nif (true) {\n  exports.createRoot = m.createRoot;\n  exports.hydrateRoot = m.hydrateRoot;\n} else { var i; }\n\n\n//# sourceURL=webpack://post_mf/./node_modules/react-dom/client.js?");

/***/ }),

/***/ "./src/components/Main.tsx":
/*!*********************************!*\
  !*** ./src/components/Main.tsx ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"webpack/sharing/consume/default/react/react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/styles */ \"./node_modules/@mui/material/styles/ThemeProvider.js\");\n/* harmony import */ var _Posts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Posts */ \"./src/components/Posts.tsx\");\n/* harmony import */ var _Loaders__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Loaders */ \"./src/components/Loaders.tsx\");\n\n\n\n\n\nvar Main = function () {\n    var _a = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null), theme = _a[0], setTheme = _a[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n        __webpack_require__.e(/*! import() */ \"webpack_container_remote_Sharedlib_theme\").then(__webpack_require__.t.bind(__webpack_require__, /*! Sharedlib/theme */ \"webpack/container/remote/Sharedlib/theme\", 23)).then(function (sharedTheme) {\n            setTheme(sharedTheme.default);\n        }).catch(function (error) {\n            console.log('Error loading shared theme', error);\n        });\n    }, []);\n    if (!theme) {\n        return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Loaders__WEBPACK_IMPORTED_MODULE_2__[\"default\"], null));\n    }\n    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_styles__WEBPACK_IMPORTED_MODULE_3__[\"default\"], { theme: theme },\n        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Posts__WEBPACK_IMPORTED_MODULE_1__[\"default\"], null)));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Main);\n\n\n//# sourceURL=webpack://post_mf/./src/components/Main.tsx?");

/***/ })

}]);