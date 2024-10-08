/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./luffyimg.jpg */ \"./src/luffyimg.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `ul {\n  list-style-type: none;\n  display: flex;\n  gap: 10px;\n  justify-content: center;\n  padding: 0;\n}\n\nnav li button {\n  background-color: #e59744;\n  border: none;\n  border-radius: 8px;\n  font-size: 1.3rem;\n  color: #fff;\n}\n\n.content-container, .starter-container, .main-container, .side-container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  gap: 20px;\n}\n\n.content-container div {\n  border: 1px solid #d3d3d3;\n  border-radius: 8px;\n  width: 40vw;\n  padding: 10px;\n  background-color: #fff;\n}\n\n.starter-container div,\n.main-container div,\n.side-container div {\n  border: none;\n}\n\nh1, h3, h4 {\n  text-align: center;\n}\n\nbutton {\n  width: 125px;\n  padding: 10px;\n} \n\nbody {\n  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});\n  background-size: 25vw;\n  text-align: center;\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://restaurant-page/./src/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://restaurant-page/./src/styles.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ContactModule: () => (/* binding */ ContactModule)\n/* harmony export */ });\n// Contact\nconst ContactModule = () => {\n  // Create helper functions\n  function createElement(tag, classNames = [], textContent = \"\") {\n    const element = document.createElement(tag);\n    classNames.forEach((className) => element.classList.add(className));\n    if (textContent) element.textContent = textContent;\n    return element;\n  }\n\n  const appendChildren = (parent, children = []) => {\n    children.forEach((child) => {\n      parent.appendChild(child);\n    });\n  };\n\n  // *** CREATE ELEMENTS ***\n  // main container\n  const contactContainer = createElement(\"div\", [\"content-container\"]);\n\n  // First Contact Info\n  const firstContainer = createElement(\"div\", [\"first-contact\"]);\n  const firstContainerHeader = createElement(\"h4\", [], \"Luffy\");\n  const firstContainerParagraph = createElement(\n    \"p\",\n    [],\n    \"Role: Captain\\nNumber: 111-111-111\\nEmail: LuffyDono@test.com\"\n  );\n\n  // Second Contact Info\n  const secondContainer = createElement(\"div\", [\"second-contact\"]);\n  const secondContainerHeader = createElement(\"h4\", [], \"Zoro\");\n  const secondContainerParagraph = createElement(\n    \"p\",\n    [],\n    \"Role: Butcher Chef\\nNumber: 222-222-222\\nEmail: ZoroJuro@test.com\"\n  );\n\n  // Third Contact Info\n  const thirdContainer = createElement(\"div\", [\"third-contact\"]);\n  const thirdContainerHeader = createElement(\"h4\", [], \"Sanji\");\n  const thirdContainerParagraph = createElement(\n    \"p\",\n    [],\n    \"Role: Lead Chef\\nNumber: 333-333-333\\nEmail: StealthBlack@test.com\"\n  );\n\n  // *** Append Elements ***\n  // Append first class\n  appendChildren(firstContainer, [\n    firstContainerHeader,\n    firstContainerParagraph,\n  ]);\n  appendChildren(secondContainer, [\n    secondContainerHeader,\n    secondContainerParagraph,\n  ]);\n  appendChildren(thirdContainer, [\n    thirdContainerHeader,\n    thirdContainerParagraph,\n  ]);\n\n  appendChildren(contactContainer, [\n    firstContainer,\n    secondContainer,\n    thirdContainer,\n  ]);\n\n  return contactContainer;\n};\n\n\n//# sourceURL=webpack://restaurant-page/./src/contact.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   HomeModule: () => (/* binding */ HomeModule)\n/* harmony export */ });\n// Home page\n\nconst HomeModule = () => {\n  // *** CREATE ALL ELEMENTS ***\n  const homeContainer = document.createElement(\"div\");\n  homeContainer.classList.add(\"content-container\");\n\n  // Create element helper function\n  const createElement = (tag, classNames = [], textContent = \"\") => {\n    const element = document.createElement(tag);\n    classNames.forEach((className) => element.classList.add(className));\n    if (textContent) element.textContent = textContent;\n    return element;\n  };\n\n  // *** ELEMENT CREATION ***\n\n  // Title section\n  const titleContainer = createElement(\"div\", [\"title-container\"]);\n  const titleHeader = createElement(\"h1\", [], \"Baratie\");\n\n  // Description section\n  const descriptionContainer = createElement(\"div\", [\"description-container\"]);\n  const descriptionHeader = createElement(\"h3\", [], \"About Baratie\");\n\n  const descriptionTexts = [\n    \"Welcome to Baratie, the seafaring restaurant where gourmet cuisine meets the high seas! Inspired by the legendary floating eatery from the world of One Piece, Baratie brings you a unique dining experience filled with adventurous flavors, pirate spirit, and a splash of the extraordinary.\",\n    \"Step aboard our ship-shaped restaurant and indulge in a fusion of maritime delicacies, international flavors, and whimsical dishes straight out of the Grand Line. Whether you're a pirate, marine, or traveler, our crew of skilled chefs, led by a Sanji-inspired culinary master, is here to serve you top-tier meals that rival those of the All Blue.\",\n    \"With a stunning oceanfront view, a lively atmosphere, and a nod to your favorite anime, Baratie is the perfect place to gather, feast, and embark on a culinary voyage like no other.\",\n  ];\n\n  const descriptionParagraphs = descriptionTexts.map((text) =>\n    createElement(\"p\", [], text)\n  );\n\n  // Open and close section\n  const openCloseContainer = createElement(\"div\", [\"open-close-container\"]);\n  const openCloseHeader = createElement(\"h3\", [], \"Open/Close\");\n\n  const openCloseHours = [\n    { day: \"Sunday\", hours: \"8am - 8pm\" },\n    { day: \"Monday\", hours: \"6am - 6pm\" },\n    { day: \"Tuesday\", hours: \"6am - 6pm\" },\n    { day: \"Wednesday\", hours: \"6am - 6pm\" },\n    { day: \"Thursday\", hours: \"6am - 10pm\" },\n    { day: \"Friday\", hours: \"6am - 10pm\" },\n    { day: \"Saturday\", hours: \"8am - 10pm\" },\n  ];\n\n  const openCloseList = createElement(\"ul\", [\"open-close-list\"]);\n\n  openCloseHours.forEach((day) => {\n    const listItem = createElement(\"li\", [], `${day.day}: ${day.hours}`);\n    openCloseList.appendChild(listItem);\n  });\n\n  // Location section\n  const locationContainer = createElement(\"div\", [\"location-container\"]);\n  const locationHeader = createElement(\"h3\", [], \"Locations\");\n  const locationParagraph = createElement(\n    \"p\",\n    [],\n    \"the Sambas Region (サンバス海域, Sanbasu Kaiiki?) of the East Blue, close to the Paradise half of the Grand Line\"\n  );\n\n  // *** APPEND STRUCTURE ***\n\n  // Title Appends\n  titleContainer.appendChild(titleHeader);\n\n  // Description Appends\n  descriptionContainer.appendChild(descriptionHeader);\n  descriptionParagraphs.forEach((paragraph) =>\n    descriptionContainer.appendChild(paragraph)\n  );\n\n  // Open Close Appends\n  openCloseContainer.appendChild(openCloseHeader);\n  openCloseContainer.appendChild(openCloseList);\n\n  // Location Appends\n  locationContainer.appendChild(locationHeader);\n  locationContainer.appendChild(locationParagraph);\n\n  // HomeContainer Appends\n  homeContainer.appendChild(titleContainer);\n  homeContainer.appendChild(descriptionContainer);\n  homeContainer.appendChild(openCloseContainer);\n  homeContainer.appendChild(locationContainer);\n\n  return homeContainer;\n};\n\n/**\n * <div class=\"home-container\">\n            <div class=\"title\"><h1>Baratie</h1></div>\n            <div class=\"description\">\n              <h3>About Baratie</h3>\n              <p>\n                Welcome to Baratie, the seafaring restaurant where gourmet\n                cuisine meets the high seas! Inspired by the legendary floating\n                eatery from the world of One Piece, Baratie brings you a unique\n                dining experience filled with adventurous flavors, pirate\n                spirit, and a splash of the extraordinary.\n              </p>\n              <p>\n                Step aboard our ship-shaped restaurant and indulge in a fusion\n                of maritime delicacies, international flavors, and whimsical\n                dishes straight out of the Grand Line. Whether you're a pirate,\n                marine, or traveler, our crew of skilled chefs, led by a\n                Sanji-inspired culinary master, is here to serve you top-tier\n                meals that rival those of the All Blue.\n              </p>\n              <p>\n                With a stunning oceanfront view, a lively atmosphere, and a nod\n                to your favorite anime, Baratie is the perfect place to gather,\n                feast, and embark on a culinary voyage like no other.\n              </p>\n            </div>\n            <div class=\"open-close\">\n              <h3>Open/Close</h3>\n              <ul>\n                <li>Sunday: 8am - 8pm</li>\n                <li>Monday: 6am - 6pm</li>\n                <li>Tuesday: 6am - 6pm</li>\n                <li>Wednesday: 6am - 6pm</li>\n                <li>Thursday: 6am - 10pm</li>\n                <li>Friday: 6am - 10pm</li>\n                <li>Saturday: 8am - 10pm</li>\n              </ul>\n            </div>\n            <div class=\"location\">\n              <h3>location</h3>\n              <p>\n                the Sambas Region (サンバス海域, Sanbasu Kaiiki?) of the East\n                Blue, close to the Paradise half of the Grand Line\n              </p>\n            </div>\n    </div>\n */\n\n\n//# sourceURL=webpack://restaurant-page/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n\n// import luffyimg from \"./luffyimg.jpg\";\n\n\n\n\n// Importing img to be used in js\n// const image = document.createElement(\"img\");\n// image.src = luffyimg;\n// document.body.appendChild(image);\n\nconst homeBtn = document.querySelector(\"#home\");\nconst menuBtn = document.querySelector(\"#menu\");\nconst contactBtn = document.querySelector(\"#contact\");\n\n// Home Module used by default\ncontent.appendChild((0,_home__WEBPACK_IMPORTED_MODULE_1__.HomeModule)());\n\n// Pressing home button removes content inside the content container\nhomeBtn.addEventListener(\"click\", () => {\n  content.textContent = \"\";\n  content.appendChild((0,_home__WEBPACK_IMPORTED_MODULE_1__.HomeModule)());\n});\n\nmenuBtn.addEventListener(\"click\", () => {\n  content.textContent = \"\";\n  content.appendChild((0,_menu__WEBPACK_IMPORTED_MODULE_2__.MenuModule)());\n});\n\ncontactBtn.addEventListener(\"click\", () => {\n  content.textContent = \"\";\n  content.appendChild((0,_contact__WEBPACK_IMPORTED_MODULE_3__.ContactModule)());\n});\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   MenuModule: () => (/* binding */ MenuModule)\n/* harmony export */ });\n// Menu\n\nconst MenuModule = () => {\n  // Create element helper\n  const createElement = (tag, classNames = [], textContent = \"\") => {\n    const element = document.createElement(tag);\n    classNames.forEach((className) => element.classList.add(className));\n    if (textContent) element.textContent = textContent;\n    return element;\n  };\n\n  // Append helper\n  const appendChildren = (parent, children = []) => {\n    children.forEach((child) => {\n      parent.appendChild(child);\n    });\n  };\n\n  // *** ELEMENT CREATION ***\n\n  // Menu Container\n  const menuContainer = createElement(\"div\", [\"content-container\"]);\n\n  // Starters\n  const starterContainer = createElement(\"div\", [\"starter-container\"]);\n  const starterHeader = createElement(\"h2\", [], \"Starter\");\n  const starterDish1Container = createElement(\"div\", [\"starter-container\"]);\n  const starterDish1Header = createElement(\n    \"h4\",\n    [],\n    \"East Blue Seafood Platter\"\n  );\n  const starterDish1Info = createElement(\n    \"p\",\n    [],\n    \"A selection of fresh ocean delights—shrimp, oysters, and calamari—with a dipping trio of citrus aioli, spicy marinara, and soy-ginger sauce.\"\n  );\n  const starterDish2Container = createElement(\"div\", [\"starter-container\"]);\n  const starterDish2Header = createElement(\n    \"h4\",\n    [],\n    \"Luffy's Meat on the Bone\"\n  );\n  const starterDish2Info = createElement(\n    \"p\",\n    [],\n    \"Roasted pork ribs slathered in a honey glaze, perfect for those with an insatiable appetite.\"\n  );\n  const starterDish3Container = createElement(\"div\", [\"starter-container\"]);\n  const starterDish3Header = createElement(\n    \"h4\",\n    [],\n    \"Pirate's Treasure Croquettes\"\n  );\n  const starterDish3Info = createElement(\n    \"p\",\n    [],\n    \"Crispy golden croquettes filled with creamy mashed potatoes and a blend of cheese and smoked fish.\"\n  );\n\n  // Mains\n  const mainContainer = createElement(\"div\", [\"main-container\"]);\n  const mainHeader = createElement(\"h2\", [], \"Main\");\n  const mainDish1Container = createElement(\"div\", [\"main-container\"]);\n  const maindDish1Header = createElement(\"h4\", [], \"Sanji’s Signature Soba\");\n  const mainDish1Info = createElement(\n    \"p\",\n    [],\n    \"A steaming bowl of buckwheat noodles in a rich broth, topped with sliced beef, soft-boiled egg, and a drizzle of truffle oil.\"\n  );\n  const mainDish2Container = createElement(\"div\", [\"main-container\"]);\n  const mainDish2Header = createElement(\"h4\", [], \"All Blue Paella\");\n  const mainDish2Info = createElement(\n    \"p\",\n    [],\n    \"A flavorful Spanish-inspired rice dish brimming with shrimp, mussels, squid, and chorizo, cooked to perfection with saffron and spices.\"\n  );\n  const mainDish3Container = createElement(\"div\", [\"main-container\"]);\n  const mainDish3Header = createElement(\"h4\", [], \" Grand Line Grilled Salmon\");\n  const mainDish3Info = createElement(\n    \"p\",\n    [],\n    \"Tender salmon fillet grilled and served with a citrus glaze, accompanied by roasted vegetables and herbed rice.\"\n  );\n  const mainDish4Container = createElement(\"div\", [\"main-container\"]);\n  const maindDish4Header = createElement(\"h4\", [], \"Pirate King Steak\");\n  const mainDish4Info = createElement(\n    \"p\",\n    [],\n    \"A juicy, marinated ribeye cooked to your liking, served with garlic butter and a side of crispy fries.\"\n  );\n\n  // Sides\n  const sidesContainer = createElement(\"div\", [\"side-container\"]);\n  const sideHeader = createElement(\"h2\", [], \"Side Dishes\");\n  const sideDish1Container = createElement(\"div\", [\"sides-container\"]);\n  const sideDish1Header = createElement(\"h4\", [], \"Merry's Mashed Potatoes\");\n  const sideDish1Info = createElement(\n    \"p\",\n    [],\n    \"Creamy mashed potatoes with a hint of garlic and butter.\"\n  );\n  const sideDish2Container = createElement(\"div\", [\"sides-container\"]);\n  const sideDish2Header = createElement(\"h4\", [], \"Sky Island Cloud Cake\");\n  const sideDish2Info = createElement(\n    \"p\",\n    [],\n    \"A refreshing mix of crisp greens, cherry tomatoes, cucumbers, and a tangy vinaigrette.\"\n  );\n\n  // *** Append ***\n\n  // Starter dishes\n  appendChildren(starterDish1Container, [starterDish1Header, starterDish1Info]);\n  appendChildren(starterDish2Container, [starterDish2Header, starterDish2Info]);\n  appendChildren(starterDish3Container, [starterDish3Header, starterDish3Info]);\n\n  appendChildren(starterContainer, [\n    starterHeader,\n    starterDish1Container,\n    starterDish2Container,\n    starterDish3Container,\n  ]);\n\n  // Main dishes\n  appendChildren(mainDish1Container, [maindDish1Header, mainDish1Info]);\n  appendChildren(mainDish2Container, [mainDish2Header, mainDish2Info]);\n  appendChildren(mainDish3Container, [mainDish3Header, mainDish3Info]);\n  appendChildren(mainDish4Container, [maindDish4Header, mainDish4Info]);\n\n  appendChildren(mainContainer, [\n    mainHeader,\n    mainDish1Container,\n    mainDish2Container,\n    mainDish3Container,\n    mainDish4Container,\n  ]);\n\n  // Sides\n  appendChildren(sideDish1Container, [sideDish1Header, sideDish1Info]);\n  appendChildren(sideDish2Container, [sideDish2Header, sideDish2Info]);\n\n  appendChildren(sidesContainer, [\n    sideHeader,\n    sideDish1Container,\n    sideDish2Container,\n  ]);\n\n  // Join Containers\n  appendChildren(menuContainer, [\n    starterContainer,\n    mainContainer,\n    sidesContainer,\n  ]);\n\n  return menuContainer;\n};\n\n/**\n * Menu\nStarters\n\n    East Blue Seafood Platter\n    A selection of fresh ocean delights—shrimp, oysters, and calamari—with a dipping trio of citrus aioli, spicy marinara, and soy-ginger sauce.\n\n    Luffy’s Meat on the Bone\n    Roasted pork ribs slathered in a honey glaze, perfect for those with an insatiable appetite.\n\n    Pirate's Treasure Croquettes\n    Crispy golden croquettes filled with creamy mashed potatoes and a blend of cheese and smoked fish.\n\nMains\n\n    Sanji’s Signature Soba\n    A steaming bowl of buckwheat noodles in a rich broth, topped with sliced beef, soft-boiled egg, and a drizzle of truffle oil.\n\n    All Blue Paella\n    A flavorful Spanish-inspired rice dish brimming with shrimp, mussels, squid, and chorizo, cooked to perfection with saffron and spices.\n\n    Grand Line Grilled Salmon\n    Tender salmon fillet grilled and served with a citrus glaze, accompanied by roasted vegetables and herbed rice.\n\n    Pirate King Steak\n    A juicy, marinated ribeye cooked to your liking, served with garlic butter and a side of crispy fries.\n\nSides\n\n    Merry’s Mashed Potatoes\n    Creamy mashed potatoes with a hint of garlic and butter.\n\n    Nami’s Fresh Garden Salad\n    A refreshing mix of crisp greens, cherry tomatoes, cucumbers, and a tangy vinaigrette.\n\nDesserts\n\n    Devil Fruit Sorbet\n    A mysterious and vibrant assortment of tropical sorbets inspired by the fabled Devil Fruits. Will you gain powers or just a sweet treat?\n\n    Sky Island Cloud Cake\n    Fluffy, light sponge cake topped with whipped cream and berries, as airy as the clouds of Sky Island.\n\nDrinks\n\n    Zoro’s Sake Flight\n    A selection of premium sakes for the seasoned swordsman (or woman).\n\n    Chopper’s Cotton Candy Soda\n    A fun and fizzy drink with a swirl of cotton candy flavor, perfect for kids and the young at heart.\n\n    Red-Haired Shanks Rum Punch\n    A tropical rum cocktail with pineapple, coconut, and a dash of grenadine.\n */\n\n\n//# sourceURL=webpack://restaurant-page/./src/menu.js?");

/***/ }),

/***/ "./src/luffyimg.jpg":
/*!**************************!*\
  !*** ./src/luffyimg.jpg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"fd744aa9b726e5d6bb25.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/luffyimg.jpg?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;