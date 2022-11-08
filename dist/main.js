"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkcapstone_project_1"] = self["webpackChunkcapstone_project_1"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\r\\n  padding: 0;\\r\\n  margin: 0;\\r\\n  box-sizing: border-box;\\r\\n}\\r\\n\\r\\nbody {\\r\\n  background: #eee;\\r\\n  font-family: 'Poppins', sans-serif;\\r\\n  color: gray;\\r\\n}\\r\\n\\r\\n.completed {\\r\\n  text-decoration: line-through;\\r\\n}\\r\\n\\r\\n.wrapper {\\r\\n  background: #fff;\\r\\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\\r\\n}\\r\\n\\r\\n.todo-title,\\r\\n.todo-input,\\r\\n.todo-list ul li {\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n  border-bottom: 1px solid #ccc;\\r\\n  padding-inline: 15px;\\r\\n}\\r\\n\\r\\n.todo-list ul li {\\r\\n  padding-block: 5px;\\r\\n}\\r\\n\\r\\n.todo-title h1 {\\r\\n  font-size: 1em;\\r\\n}\\r\\n\\r\\nsvg {\\r\\n  align-self: center;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n.checkbox {\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n.trash-icon {\\r\\n  display: none;\\r\\n}\\r\\n\\r\\n#todo-form {\\r\\n  width: 100%;\\r\\n}\\r\\n\\r\\n#todo-form input {\\r\\n  width: 90%;\\r\\n  padding-inline: 11px;\\r\\n  padding-block: 5px;\\r\\n  border: none;\\r\\n}\\r\\n\\r\\n#todo-form input:focus {\\r\\n  outline: none;\\r\\n}\\r\\n\\r\\n.todo-input .form-icon,\\r\\n.list-icon {\\r\\n  width: 5%;\\r\\n}\\r\\n\\r\\n.todo-title,\\r\\n.todo-clear,\\r\\n.todo-input {\\r\\n  padding-block: 13px;\\r\\n}\\r\\n\\r\\n.todo-clear {\\r\\n  background-color: #eee;\\r\\n  color: gray;\\r\\n  text-align: center;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n.todo-clear:hover {\\r\\n  color: black;\\r\\n  text-decoration: underline;\\r\\n}\\r\\n\\r\\n.list-item {\\r\\n  display: flex;\\r\\n  justify-content: flex-start;\\r\\n  gap: 9px;\\r\\n  width: 90%;\\r\\n  padding: 11px;\\r\\n  border: none;\\r\\n}\\r\\n\\r\\n@media all and  (min-width: 768px) {\\r\\n  .wrapper {\\r\\n    margin: auto;\\r\\n    margin-top: 10%;\\r\\n    width: 50%;\\r\\n  }\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://capstone-project-1/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://capstone-project-1/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://capstone-project-1/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://capstone-project-1/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://capstone-project-1/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://capstone-project-1/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://capstone-project-1/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://capstone-project-1/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://capstone-project-1/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://capstone-project-1/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _modules_createTodo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/createTodo */ \"./src/modules/createTodo.js\");\n/* harmony import */ var _modules_renderTodos__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/renderTodos */ \"./src/modules/renderTodos.js\");\n/* harmony import */ var _modules_clearCompletedTodo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/clearCompletedTodo */ \"./src/modules/clearCompletedTodo.js\");\n\n\n\n\n\nconst createTodoForm = document.querySelector('#todo-form');\nconst clearCompletedBtn = document.querySelector('.todo-clear');\n\n(0,_modules_renderTodos__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n\nclearCompletedBtn.addEventListener('click', () => {\n  (0,_modules_clearCompletedTodo__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n});\n\ncreateTodoForm.addEventListener('submit', (e) => {\n  e.preventDefault();\n  (0,_modules_createTodo__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(createTodoForm);\n});\n\n\n//# sourceURL=webpack://capstone-project-1/./src/index.js?");

/***/ }),

/***/ "./src/modules/clearCompletedTodo.js":
/*!*******************************************!*\
  !*** ./src/modules/clearCompletedTodo.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _renderTodos__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./renderTodos */ \"./src/modules/renderTodos.js\");\n/* harmony import */ var _saveTodo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./saveTodo */ \"./src/modules/saveTodo.js\");\n/* harmony import */ var _todos__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todos */ \"./src/modules/todos.js\");\n\n\n\n\nconst clearCompleted = () => {\n  let todos = (0,_todos__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n  todos = todos.filter((todo) => (\n    !todo.completed\n  ));\n  todos = todos.map((todo, i) => {\n    todo.index = i + 1;\n    return todo;\n  });\n  (0,_saveTodo__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(todos);\n  (0,_renderTodos__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (clearCompleted);\n\n//# sourceURL=webpack://capstone-project-1/./src/modules/clearCompletedTodo.js?");

/***/ }),

/***/ "./src/modules/completeTodo.js":
/*!*************************************!*\
  !*** ./src/modules/completeTodo.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _renderTodos__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./renderTodos */ \"./src/modules/renderTodos.js\");\n/* harmony import */ var _saveTodo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./saveTodo */ \"./src/modules/saveTodo.js\");\n/* harmony import */ var _todos__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todos */ \"./src/modules/todos.js\");\n\n\n\n\nconst markCompleted = ({ target }) => {\n  const index = Number(target.id);\n  const todos = (0,_todos__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n\n  if (todos[index - 1].completed) {\n    todos[index - 1].completed = false;\n  } else {\n    todos[index - 1].completed = true;\n  }\n\n  (0,_saveTodo__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(todos);\n  (0,_renderTodos__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n};\n\nconst addEventListenerForMarkCompleted = (checkbox) => {\n  checkbox.addEventListener('click', markCompleted);\n};\nconst registerMarkCompletedEventListener = () => {\n  const checkboxes = document.querySelectorAll('.checkbox');\n  checkboxes.forEach(addEventListenerForMarkCompleted);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (registerMarkCompletedEventListener);\n\n//# sourceURL=webpack://capstone-project-1/./src/modules/completeTodo.js?");

/***/ }),

/***/ "./src/modules/createTodo.js":
/*!***********************************!*\
  !*** ./src/modules/createTodo.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _saveTodo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./saveTodo */ \"./src/modules/saveTodo.js\");\n/* harmony import */ var _todos__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todos */ \"./src/modules/todos.js\");\n/* harmony import */ var _renderTodos__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./renderTodos */ \"./src/modules/renderTodos.js\");\n\n\n\n\nconst validated = ({ description }, todos) => {\n  description = description.value.trim();\n  if (description.length > 0) {\n    return { description, completed: false, index: todos.length + 1 };\n  }\n  return null;\n};\n\nconst resetForm = ({ description }) => {\n  description.value = '';\n};\n\nconst addTodo = (createTodoForm) => {\n  const todos = (0,_todos__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n  const todo = validated(createTodoForm, todos);\n  if (todo === null) return;\n  todos.push(todo);\n  (0,_saveTodo__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(todos);\n  resetForm(createTodoForm);\n  (0,_renderTodos__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addTodo);\n\n//# sourceURL=webpack://capstone-project-1/./src/modules/createTodo.js?");

/***/ }),

/***/ "./src/modules/deleteTodo.js":
/*!***********************************!*\
  !*** ./src/modules/deleteTodo.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _renderTodos__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./renderTodos */ \"./src/modules/renderTodos.js\");\n/* harmony import */ var _saveTodo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./saveTodo */ \"./src/modules/saveTodo.js\");\n/* harmony import */ var _todos__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todos */ \"./src/modules/todos.js\");\n\n\n\n\nconst deleteTD = ({ target }) => {\n  const index = target.closest('svg').id;\n  const todos = (0,_todos__WEBPACK_IMPORTED_MODULE_2__[\"default\"])().filter((todo) => todo.index !== Number(index))\n    .map((todo, i) => {\n      todo.index = i + 1;\n      return todo;\n    });\n\n  (0,_saveTodo__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(todos);\n  (0,_renderTodos__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n};\n\nconst addEventListenerForDelete = (trashIcon) => {\n  trashIcon.addEventListener('click', deleteTD);\n};\nconst registerDeleteEventListener = () => {\n  const trashIcons = document.querySelectorAll('.trash-icon');\n  trashIcons.forEach(addEventListenerForDelete);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (registerDeleteEventListener);\n\n//# sourceURL=webpack://capstone-project-1/./src/modules/deleteTodo.js?");

/***/ }),

/***/ "./src/modules/renderTodos.js":
/*!************************************!*\
  !*** ./src/modules/renderTodos.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _completeTodo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./completeTodo */ \"./src/modules/completeTodo.js\");\n/* harmony import */ var _deleteTodo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./deleteTodo */ \"./src/modules/deleteTodo.js\");\n/* harmony import */ var _todos__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todos */ \"./src/modules/todos.js\");\n/* harmony import */ var _updateTodo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./updateTodo */ \"./src/modules/updateTodo.js\");\n\n\n\n\n\nconst renderTodos = () => {\n  const todoListContainer = document.querySelector('.todo-list');\n  const todosLists = (0,_todos__WEBPACK_IMPORTED_MODULE_2__[\"default\"])().sort((a, b) => a.index - b.index)\n    .map(({ completed, description, index }) => (\n      ` <li class=\"todo-li\">\n        <div class=\"list-item\">\n          <input id=\"${index}\" class=\"checkbox\" type=\"checkbox\" ${completed ? 'checked' : ''}>\n          <p class=\"${completed ? 'completed' : ''}\">${description}</p>\n        </div>\n        <svg id=\"${index}\" class=\"trash-icon\" xmlns=\"http://www.w3.org/2000/svg\" width=\"19\" height=\"19\" fill=\"currentColor\" class=\"bi bi-trash-fill\" viewBox=\"0 0 16 16\">\n          <path d=\"M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z\"/>\n        </svg>\n        <svg id=\"${index}\" class=\"three-dot-icon\" xmlns=\"http://www.w3.org/2000/svg\" width=\"19\" height=\"19\" fill=\"currentColor\" class=\"bi bi-three-dots-vertical\" viewBox=\"0 0 16 16\">\n          <path d=\"M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z\"/>\n        </svg>\n       </li>`\n    )).join('');\n  todoListContainer.innerHTML = `<ul> ${todosLists} </ul>`;\n  (0,_updateTodo__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n  (0,_deleteTodo__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n  (0,_completeTodo__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderTodos);\n\n//# sourceURL=webpack://capstone-project-1/./src/modules/renderTodos.js?");

/***/ }),

/***/ "./src/modules/saveTodo.js":
/*!*********************************!*\
  !*** ./src/modules/saveTodo.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst saveTodo = (todos) => {\n  localStorage.setItem('todos', JSON.stringify(todos));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (saveTodo);\n\n//# sourceURL=webpack://capstone-project-1/./src/modules/saveTodo.js?");

/***/ }),

/***/ "./src/modules/todos.js":
/*!******************************!*\
  !*** ./src/modules/todos.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst getTodos = () => (localStorage.getItem('todos') ? JSON.parse(localStorage.getItem('todos')) : []);\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getTodos);\n\n\n//# sourceURL=webpack://capstone-project-1/./src/modules/todos.js?");

/***/ }),

/***/ "./src/modules/updateTodo.js":
/*!***********************************!*\
  !*** ./src/modules/updateTodo.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _renderTodos__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./renderTodos */ \"./src/modules/renderTodos.js\");\n/* harmony import */ var _todos__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todos */ \"./src/modules/todos.js\");\n/* harmony import */ var _saveTodo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./saveTodo */ \"./src/modules/saveTodo.js\");\n\n\n\n\nconst showUpdateUI = (target) => {\n  const background = '#e7e5b0';\n  const parentList = target.closest('li');\n  parentList.style.paddingBlock = '3px';\n  parentList.style.background = background;\n  const description = parentList.querySelector('p').textContent;\n  parentList.querySelector('p').remove();\n  parentList.querySelector('.trash-icon').style.display = 'block';\n  parentList.querySelector('.three-dot-icon').style.display = 'none';\n  const todoContentContiner = parentList.querySelector('div');\n  const form = document.createElement('form');\n  form.setAttribute('id', 'todo-form');\n  form.className = 'todo-item-form';\n  const input = document.createElement('input');\n  input.setAttribute('name', 'description');\n  input.setAttribute('autofocus', 'true');\n  input.setAttribute('value', description);\n  input.style.background = background;\n  form.setAttribute('id', 'todo-form');\n  form.appendChild(input);\n  todoContentContiner.appendChild(form);\n};\n\nconst validated = ({ description }, books) => {\n  description = description.value.trim();\n  if (description.length > 0) {\n    return { description, completed: false, index: books.length + 1 };\n  }\n  return null;\n};\n\nconst update = (e) => {\n  e.preventDefault();\n  const todos = (0,_todos__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n  const updatedTodo = validated(e.target, todos);\n  if (updatedTodo === null) return;\n  const index = e.target.treeDotIcon.closest('svg').id;\n  todos[index - 1].description = updatedTodo.description;\n  (0,_saveTodo__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(todos);\n  (0,_renderTodos__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n};\n\nconst addEventListenerForUpdateForm = ({ target }) => {\n  showUpdateUI(target);\n  const updateTodoForm = document.querySelector('.todo-item-form');\n  updateTodoForm.treeDotIcon = target;\n  updateTodoForm.addEventListener('submit', update);\n};\n\nconst addEventListenerForShowUpdateUI = (treeDotIcon) => {\n  treeDotIcon.addEventListener('click', addEventListenerForUpdateForm);\n};\nconst registerUpdateEventListener = () => {\n  const treeDotIcons = document.querySelectorAll('.three-dot-icon');\n  treeDotIcons.forEach(addEventListenerForShowUpdateUI);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (registerUpdateEventListener);\n\n//# sourceURL=webpack://capstone-project-1/./src/modules/updateTodo.js?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);