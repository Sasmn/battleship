/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/styles.css":
/*!********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/styles.css ***!
  \********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n    box-sizing: border-box;\n    -webkit-tap-highlight-color: transparent;\n}\n\nbody {\n    width: 100vw;\n    height: 100vh;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    padding: 0;\n    margin: 0;\n}\n\nheader {\n    font-size: 8vmax;\n    margin-bottom: 7vh;\n}\n\n#gameboards{\n    display: flex;\n    gap: 10%;\n}\n\n.gameboard {\n    display: flex;\n    flex-wrap: wrap;\n    width: 80vw;\n    border: 2px solid black;\n}\n\n.grid {\n    flex: 0 0 10%;\n    overflow: hidden;\n    aspect-ratio: 1/1;\n    border: 2px solid black;\n\n    display: flex;\n    justify-content: center;\n    align-items: center;\n\n    position: relative;\n    cursor: pointer;\n}\n\n.grid > * {\n    opacity: 0;\n}\n\n.point {\n    width: 20%;\n    height: 20%;\n    background-color: rgb(0, 0, 0);\n    border-radius: 50%;\n}\n\n.non-ship {\n    display: flex;\n    background-color: rgb(255, 208, 208);\n    pointer-events: none;\n}\n\n.non-ship > * {\n    opacity: 1;\n}\n\n.point-dark {\n    width: 20%;\n    height: 20%;\n    background-color: black;\n    border-radius: 50%;\n}\n\n.ship {\n    background-color: lightcoral;\n    pointer-events: none;\n}\n\n.ship > * {\n    opacity: 1;\n}\n\n.line {\n    width: 145%;\n    height: 10%;\n    background-color: black;\n    transform: rotate(-45deg);\n\n    position: absolute;\n    top: 45%;\n}\n\n.grid > .line:first-of-type {\n    transform: rotate(45deg);\n}\n\n@media all and (min-width: 600px) {\n    /*tablet*/\n}\n\n@media all and (min-width: 768px) {\n    /*számítógép*/\n\n    .gameboard {\n        width: 30vw;\n    }\n\n    .grid:hover {\n        border: 3px solid green;\n        background-color: lightgreen;\n    }\n}\n", "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA;IACI,sBAAsB;IACtB,wCAAwC;AAC5C;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;IACnB,UAAU;IACV,SAAS;AACb;;AAEA;IACI,gBAAgB;IAChB,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,QAAQ;AACZ;;AAEA;IACI,aAAa;IACb,eAAe;IACf,WAAW;IACX,uBAAuB;AAC3B;;AAEA;IACI,aAAa;IACb,gBAAgB;IAChB,iBAAiB;IACjB,uBAAuB;;IAEvB,aAAa;IACb,uBAAuB;IACvB,mBAAmB;;IAEnB,kBAAkB;IAClB,eAAe;AACnB;;AAEA;IACI,UAAU;AACd;;AAEA;IACI,UAAU;IACV,WAAW;IACX,8BAA8B;IAC9B,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,oCAAoC;IACpC,oBAAoB;AACxB;;AAEA;IACI,UAAU;AACd;;AAEA;IACI,UAAU;IACV,WAAW;IACX,uBAAuB;IACvB,kBAAkB;AACtB;;AAEA;IACI,4BAA4B;IAC5B,oBAAoB;AACxB;;AAEA;IACI,UAAU;AACd;;AAEA;IACI,WAAW;IACX,WAAW;IACX,uBAAuB;IACvB,yBAAyB;;IAEzB,kBAAkB;IAClB,QAAQ;AACZ;;AAEA;IACI,wBAAwB;AAC5B;;AAEA;IACI,SAAS;AACb;;AAEA;IACI,aAAa;;IAEb;QACI,WAAW;IACf;;IAEA;QACI,uBAAuB;QACvB,4BAA4B;IAChC;AACJ","sourcesContent":["* {\n    box-sizing: border-box;\n    -webkit-tap-highlight-color: transparent;\n}\n\nbody {\n    width: 100vw;\n    height: 100vh;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    padding: 0;\n    margin: 0;\n}\n\nheader {\n    font-size: 8vmax;\n    margin-bottom: 7vh;\n}\n\n#gameboards{\n    display: flex;\n    gap: 10%;\n}\n\n.gameboard {\n    display: flex;\n    flex-wrap: wrap;\n    width: 80vw;\n    border: 2px solid black;\n}\n\n.grid {\n    flex: 0 0 10%;\n    overflow: hidden;\n    aspect-ratio: 1/1;\n    border: 2px solid black;\n\n    display: flex;\n    justify-content: center;\n    align-items: center;\n\n    position: relative;\n    cursor: pointer;\n}\n\n.grid > * {\n    opacity: 0;\n}\n\n.point {\n    width: 20%;\n    height: 20%;\n    background-color: rgb(0, 0, 0);\n    border-radius: 50%;\n}\n\n.non-ship {\n    display: flex;\n    background-color: rgb(255, 208, 208);\n    pointer-events: none;\n}\n\n.non-ship > * {\n    opacity: 1;\n}\n\n.point-dark {\n    width: 20%;\n    height: 20%;\n    background-color: black;\n    border-radius: 50%;\n}\n\n.ship {\n    background-color: lightcoral;\n    pointer-events: none;\n}\n\n.ship > * {\n    opacity: 1;\n}\n\n.line {\n    width: 145%;\n    height: 10%;\n    background-color: black;\n    transform: rotate(-45deg);\n\n    position: absolute;\n    top: 45%;\n}\n\n.grid > .line:first-of-type {\n    transform: rotate(45deg);\n}\n\n@media all and (min-width: 600px) {\n    /*tablet*/\n}\n\n@media all and (min-width: 768px) {\n    /*számítógép*/\n\n    .gameboard {\n        width: 30vw;\n    }\n\n    .grid:hover {\n        border: 3px solid green;\n        background-color: lightgreen;\n    }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/postcss-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/factory_functions/buildGameboard.js":
/*!*************************************************!*\
  !*** ./src/factory_functions/buildGameboard.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player */ "./src/factory_functions/player.js");


const buildGameboard = () => {
    const p = (0,_player__WEBPACK_IMPORTED_MODULE_0__["default"])();
    p.buildFleet();

    const gameboards = document.querySelector('#gameboards');
    const gb = document.createElement('div');
    gb.classList.add('gameboard');
    gameboards.appendChild(gb);

    return { gb, p };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (buildGameboard);


/***/ }),

/***/ "./src/factory_functions/gameboard.js":
/*!********************************************!*\
  !*** ./src/factory_functions/gameboard.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship */ "./src/factory_functions/ship.js");


const gameboard = () => {
    let missedShots = [];
    let ships = [];

    const placeShip = (ship, x, y, direction) => {
        ship.position[0] = x;
        ship.position[2] = y;
        ship.endOfShip(direction);
        ships.push(ship);
    };

    const receiveAttack = (x, y) => {
        for (let i = 0; i < ships.length; i++) {
            if (
                ships[i].position[0] <= x &&
                ships[i].position[1] >= x &&
                ships[i].position[2] <= y &&
                ships[i].position[3] >= y
            ) {
                if (ships[i].position[0] == x) {
                    ships[i].hit(y - ships[i].position[2]);
                    return ships[i];
                } else {
                    ships[i].hit(x - ships[i].position[0]);
                    return ships[i];
                }
            } else {
                missedShots.push(x, y);
            }
        }
    };

    const allShipsSunk = () => {
        if (ships.every((v) => v.isSunk() == true)) {
            return true;
        } else {
            return false;
        }
    };

    return { ships, missedShots, placeShip, receiveAttack, allShipsSunk };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (gameboard);


/***/ }),

/***/ "./src/factory_functions/logClick.js":
/*!*******************************************!*\
  !*** ./src/factory_functions/logClick.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const logClick = (gb, g) => {
    const pos = Array.from(gb.children).indexOf(g);
    let xCoord;
    let yCoord;
    for (let i = 0; i <= pos; i += 10) {
        xCoord = i / 10;
        yCoord = pos - i;
    }

    return { xCoord, yCoord };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (logClick);

/***/ }),

/***/ "./src/factory_functions/player.js":
/*!*****************************************!*\
  !*** ./src/factory_functions/player.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard */ "./src/factory_functions/gameboard.js");
/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ship */ "./src/factory_functions/ship.js");



const player = () => {
    const gb = (0,_gameboard__WEBPACK_IMPORTED_MODULE_0__["default"])();

    const ships = [];

    let freeSpaces = [];
    for (let i = 0; i < 10; i++) {
        freeSpaces[i] = [];
        for (let j = 0; j < 10; j++) {
            freeSpaces[i][j] = j;
        }
    }

    const buildFleet = () => {
        ships[0] = (0,_ship__WEBPACK_IMPORTED_MODULE_1__["default"])(4);
        for (let i = 0; i < 2; i++) {
            ships[i + 1] = (0,_ship__WEBPACK_IMPORTED_MODULE_1__["default"])(3);
        }
        for (let i = 0; i < 3; i++) {
            ships[i + 3] = (0,_ship__WEBPACK_IMPORTED_MODULE_1__["default"])(2);
        }
        for (let i = 0; i < 4; i++) {
            ships[i + 6] = (0,_ship__WEBPACK_IMPORTED_MODULE_1__["default"])(1);
        }

        /* random position, and weather it is free */
        for (let i = 0; i < ships.length; i++) {
            const rnd = randPosition();
            testPosition(ships[i], rnd);
            // console.log(
            //     ships[i].position,
            //     rnd.direction
            // );
        }
    };

    const testPosition = (s, r) => {
        let placeIsFree = true;
        for (let j = 0; j < s.wounds.length; j++) {
            if (r.direction == 'x') {
                if (r.rndY + s.wounds.length > 9) {
                    placeIsFree = false;
                } else if (!freeSpaces[r.rndX].includes(r.rndY + j)) {
                    placeIsFree = false;
                }
            } else if (r.direction == 'y') {
                if (r.rndX + s.wounds.length > 9) {
                    placeIsFree = false;
                } else if (!freeSpaces[r.rndX + j].includes(r.rndY)) {
                    placeIsFree = false;
                }
            }
        }
        if (placeIsFree == true) {
            placeShip(s, r);
            deleteSpaces(s.wounds.length, r.rndX, r.rndY, r.direction);
        } else {
            const rnd = randPosition();
            testPosition(s, rnd);
        }
    };

    const randPosition = () => {
        const rndX = Math.floor(Math.random() * 10);
        const rndY = Math.floor(Math.random() * 10);
        const direction = Math.random() < 0.5 ? 'x' : 'y';

        return { rndX, rndY, direction };
    };

    const placeShip = (s, r) => {
        gb.placeShip(s, r.rndX, r.rndY, r.direction);
    };

    const deleteSpaces = (l, x, y, d) => {
        /* place neighbouring grid-s */
        if (d == 'x') {
            for (let i = 0; i < l + 2; i++) {
                for (let j = 0; j < 3; j++) {
                    if (x - 1 + j <= 9 && y - 1 + i <= 9 && x - 1 + j >= 0 && y - 1 + i >= 0 ) {
                        freeSpaces[x - 1 + j][y - 1 + i] = 'x';
                    }
                }
            }
        } else if (d == 'y') {
            for (let i = 0; i < l + 2; i++) {
                for (let j = 0; j < 3; j++) {
                    if (x - 1 + i <= 9 && y - 1 + j <= 9 && x - 1 + i >= 0 && y - 1 + j >= 0) {
                        freeSpaces[x - 1 + i][y - 1 + j] = 'x';
                    }
                }
            }
        }

        /* place the ships */
        if (d == 'x') {
            for (let i = 0; i < l; i++) {
                freeSpaces[x][y + i] = `ship ${l}`;
            }
        } else if (d == 'y') {
            for (let i = 0; i < l; i++) {
                freeSpaces[x + i][y] = `ship ${l}`;
            }
        }
    };

    const attack = (x, y, enemyBoard) => {
        enemyBoard.receiveAttack(x, y);
    };

    return {
        gb,
        freeSpaces,
        ships,
        buildFleet,
        testPosition,
        randPosition,
        placeShip,
    };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (player);


/***/ }),

/***/ "./src/factory_functions/ship.js":
/*!***************************************!*\
  !*** ./src/factory_functions/ship.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const ship = (length) => {
    let wounds = new Array(length);
    wounds.fill('safe');

    /* xStart, xEnd, yStart, yEnd */
    let position = new Array(4);
    let d = new Array(1);

    const endOfShip = (direction) => {
        if (direction == 'x') {
            d[0] = 'x';
            position[1] = position[0];
            position[3] = position[2] + length - 1;
        } else if (direction == 'y') {
            d[0] = 'y';
            position[1] = position[0] + length - 1;
            position[3] = position[2];
        }
    };

    const hit = (dmg) => {
        wounds[dmg] = 'hit';
        return wounds[dmg];
    };
    const isSunk = () => {
        if (wounds.every((v) => v == 'hit')) {
            return true;
        } else {
            return false;
        }
    };
    return { wounds, position, d, endOfShip, hit, isSunk };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ship);


/***/ }),

/***/ "./src/functions/clickFeedback.js":
/*!****************************************!*\
  !*** ./src/functions/clickFeedback.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _factory_functions_logClick__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../factory_functions/logClick */ "./src/factory_functions/logClick.js");
/* harmony import */ var _styling_styleRowNeighbours__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styling/styleRowNeighbours */ "./src/functions/styling/styleRowNeighbours.js");
/* harmony import */ var _styling_styleColumnNeighbours__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styling/styleColumnNeighbours */ "./src/functions/styling/styleColumnNeighbours.js");




function clickFeedback(p, gb, g, i, j) {
    if (String(p.freeSpaces[i][j]).includes('ship')) {
        /* add appropiate styling */
        g.classList.add('ship');

        /* log the clicks coordinates */
        const click = (0,_factory_functions_logClick__WEBPACK_IMPORTED_MODULE_0__["default"])(gb, g);
        /* play the receiveAttack function */
        const ship = p.gb.receiveAttack(click.xCoord, click.yCoord);

        /* what to do, when ship is sunk */
        const sunk = ship.isSunk();
        if (sunk == true) {
            if (ship.d[0] == 'x') {
                (0,_styling_styleRowNeighbours__WEBPACK_IMPORTED_MODULE_1__["default"])(ship, gb);
            } else if (ship.d[0] == 'y') {
                (0,_styling_styleColumnNeighbours__WEBPACK_IMPORTED_MODULE_2__["default"])(ship, gb);
            }
        }
    } else {
        g.classList.add('non-ship');
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (clickFeedback);


/***/ }),

/***/ "./src/functions/create/buildGrid.js":
/*!*******************************************!*\
  !*** ./src/functions/create/buildGrid.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _createGridElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createGridElement */ "./src/functions/create/createGridElement.js");
/* harmony import */ var _styling_addStylingGrid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styling/addStylingGrid */ "./src/functions/styling/addStylingGrid.js");
/* harmony import */ var _clickFeedback__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../clickFeedback */ "./src/functions/clickFeedback.js");






function buildGrid(gb, p) {
    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            /* create grid elements */
            const g = (0,_createGridElement__WEBPACK_IMPORTED_MODULE_0__["default"])(gb);
            (0,_styling_addStylingGrid__WEBPACK_IMPORTED_MODULE_1__["default"])(p, g, i, j);

            g.addEventListener('click', () => {
                (0,_clickFeedback__WEBPACK_IMPORTED_MODULE_2__["default"])(p, gb, g, i, j);
            });
        }
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (buildGrid);

/***/ }),

/***/ "./src/functions/create/createGridElement.js":
/*!***************************************************!*\
  !*** ./src/functions/create/createGridElement.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function createGridElement(gb) {
    const g = document.createElement('div');
    g.classList.add('grid');
    gb.appendChild(g);
    return g;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createGridElement);

/***/ }),

/***/ "./src/functions/styling/addStylingGrid.js":
/*!*************************************************!*\
  !*** ./src/functions/styling/addStylingGrid.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function addStylingGrid(p, g, i, j) {
    if (String(p.freeSpaces[i][j]).includes('ship')) {
        const line = document.createElement('div');
        const line2 = document.createElement('div');
        line.classList.add('line');
        line2.classList.add('line');

        g.append(line, line2);
    } else {
        const point = document.createElement('div');
        point.classList.add('point');

        g.appendChild(point);
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addStylingGrid);

/***/ }),

/***/ "./src/functions/styling/styleColumnNeighbours.js":
/*!********************************************************!*\
  !*** ./src/functions/styling/styleColumnNeighbours.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function styleColumnNeighnours(ship, gb) {
    for (let i = 0; i < ship.wounds.length + 2; i++) {
        for (let j = 0; j < 3; j++) {
            if (
                ship.position[0] - 1 + i <= 9 &&
                ship.position[2] - 1 + j <= 9 &&
                ship.position[0] - 1 + i >= 0 &&
                ship.position[2] - 1 + j >= 0 &&
                gb.children[
                    (ship.position[0] - 1 + i) * 10 + ship.position[2] - 1 + j
                ].className != 'ship'
            ) {
                // freeSpaces[x - 1 + i][y - 1 + j] = 'x';
                gb.children[
                    (ship.position[0] - 1 + i) * 10 + ship.position[2] - 1 + j
                ].classList.add('non-ship');
            }
        }
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styleColumnNeighnours);

/***/ }),

/***/ "./src/functions/styling/styleRowNeighbours.js":
/*!*****************************************************!*\
  !*** ./src/functions/styling/styleRowNeighbours.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function styleRowNeighbours(ship, gb) {
    for (let i = 0; i < ship.wounds.length + 2; i++) {
        for (let j = 0; j < 3; j++) {
            if (
                ship.position[0] - 1 + j <= 9 &&
                ship.position[2] - 1 + i <= 9 &&
                ship.position[0] - 1 + j >= 0 &&
                ship.position[2] - 1 + i >= 0 &&
                gb.children[
                    (ship.position[0] - 1 + j) * 10 + ship.position[2] - 1 + i
                ].className != 'ship'
            ) {
                gb.children[
                    (ship.position[0] - 1 + j) * 10 + ship.position[2] - 1 + i
                ].classList.add('non-ship');
            }
        }
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styleRowNeighbours);

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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");
/* harmony import */ var _factory_functions_buildGameboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./factory_functions/buildGameboard */ "./src/factory_functions/buildGameboard.js");
/* harmony import */ var _functions_create_buildGrid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./functions/create/buildGrid */ "./src/functions/create/buildGrid.js");





for (let i = 0; i < 2; i++) {
    const b = (0,_factory_functions_buildGameboard__WEBPACK_IMPORTED_MODULE_1__["default"])();
    (0,_functions_create_buildGrid__WEBPACK_IMPORTED_MODULE_2__["default"])(b.gb, b.p);
}

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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dHRsZXNoaXAvLi9zcmMvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZXMuY3NzP2E4ZDAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2ZhY3RvcnlfZnVuY3Rpb25zL2J1aWxkR2FtZWJvYXJkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZmFjdG9yeV9mdW5jdGlvbnMvZ2FtZWJvYXJkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZmFjdG9yeV9mdW5jdGlvbnMvbG9nQ2xpY2suanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9mYWN0b3J5X2Z1bmN0aW9ucy9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9mYWN0b3J5X2Z1bmN0aW9ucy9zaGlwLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZnVuY3Rpb25zL2NsaWNrRmVlZGJhY2suanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9mdW5jdGlvbnMvY3JlYXRlL2J1aWxkR3JpZC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2Z1bmN0aW9ucy9jcmVhdGUvY3JlYXRlR3JpZEVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9mdW5jdGlvbnMvc3R5bGluZy9hZGRTdHlsaW5nR3JpZC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2Z1bmN0aW9ucy9zdHlsaW5nL3N0eWxlQ29sdW1uTmVpZ2hib3Vycy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2Z1bmN0aW9ucy9zdHlsaW5nL3N0eWxlUm93TmVpZ2hib3Vycy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxufVxcblxcbmJvZHkge1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBtYXJnaW46IDA7XFxufVxcblxcbmhlYWRlciB7XFxuICAgIGZvbnQtc2l6ZTogOHZtYXg7XFxuICAgIG1hcmdpbi1ib3R0b206IDd2aDtcXG59XFxuXFxuI2dhbWVib2FyZHN7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMTAlO1xcbn1cXG5cXG4uZ2FtZWJvYXJkIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICB3aWR0aDogODB2dztcXG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxufVxcblxcbi5ncmlkIHtcXG4gICAgZmxleDogMCAwIDEwJTtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgYXNwZWN0LXJhdGlvOiAxLzE7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5ncmlkID4gKiB7XFxuICAgIG9wYWNpdHk6IDA7XFxufVxcblxcbi5wb2ludCB7XFxuICAgIHdpZHRoOiAyMCU7XFxuICAgIGhlaWdodDogMjAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMCwgMCk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG59XFxuXFxuLm5vbi1zaGlwIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjA4LCAyMDgpO1xcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG59XFxuXFxuLm5vbi1zaGlwID4gKiB7XFxuICAgIG9wYWNpdHk6IDE7XFxufVxcblxcbi5wb2ludC1kYXJrIHtcXG4gICAgd2lkdGg6IDIwJTtcXG4gICAgaGVpZ2h0OiAyMCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxufVxcblxcbi5zaGlwIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRjb3JhbDtcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxufVxcblxcbi5zaGlwID4gKiB7XFxuICAgIG9wYWNpdHk6IDE7XFxufVxcblxcbi5saW5lIHtcXG4gICAgd2lkdGg6IDE0NSU7XFxuICAgIGhlaWdodDogMTAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcXG5cXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDQ1JTtcXG59XFxuXFxuLmdyaWQgPiAubGluZTpmaXJzdC1vZi10eXBlIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xcbn1cXG5cXG5AbWVkaWEgYWxsIGFuZCAobWluLXdpZHRoOiA2MDBweCkge1xcbiAgICAvKnRhYmxldCovXFxufVxcblxcbkBtZWRpYSBhbGwgYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XFxuICAgIC8qc3rDoW3DrXTDs2fDqXAqL1xcblxcbiAgICAuZ2FtZWJvYXJkIHtcXG4gICAgICAgIHdpZHRoOiAzMHZ3O1xcbiAgICB9XFxuXFxuICAgIC5ncmlkOmhvdmVyIHtcXG4gICAgICAgIGJvcmRlcjogM3B4IHNvbGlkIGdyZWVuO1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmVlbjtcXG4gICAgfVxcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLHNCQUFzQjtJQUN0Qix3Q0FBd0M7QUFDNUM7O0FBRUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixVQUFVO0lBQ1YsU0FBUztBQUNiOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixRQUFRO0FBQ1o7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsZUFBZTtJQUNmLFdBQVc7SUFDWCx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQix1QkFBdUI7O0lBRXZCLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1COztJQUVuQixrQkFBa0I7SUFDbEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFVBQVU7QUFDZDs7QUFFQTtJQUNJLFVBQVU7SUFDVixXQUFXO0lBQ1gsOEJBQThCO0lBQzlCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixvQ0FBb0M7SUFDcEMsb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksVUFBVTtBQUNkOztBQUVBO0lBQ0ksVUFBVTtJQUNWLFdBQVc7SUFDWCx1QkFBdUI7SUFDdkIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksNEJBQTRCO0lBQzVCLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLFVBQVU7QUFDZDs7QUFFQTtJQUNJLFdBQVc7SUFDWCxXQUFXO0lBQ1gsdUJBQXVCO0lBQ3ZCLHlCQUF5Qjs7SUFFekIsa0JBQWtCO0lBQ2xCLFFBQVE7QUFDWjs7QUFFQTtJQUNJLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGFBQWE7O0lBRWI7UUFDSSxXQUFXO0lBQ2Y7O0lBRUE7UUFDSSx1QkFBdUI7UUFDdkIsNEJBQTRCO0lBQ2hDO0FBQ0pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxufVxcblxcbmJvZHkge1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBtYXJnaW46IDA7XFxufVxcblxcbmhlYWRlciB7XFxuICAgIGZvbnQtc2l6ZTogOHZtYXg7XFxuICAgIG1hcmdpbi1ib3R0b206IDd2aDtcXG59XFxuXFxuI2dhbWVib2FyZHN7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMTAlO1xcbn1cXG5cXG4uZ2FtZWJvYXJkIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICB3aWR0aDogODB2dztcXG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxufVxcblxcbi5ncmlkIHtcXG4gICAgZmxleDogMCAwIDEwJTtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgYXNwZWN0LXJhdGlvOiAxLzE7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5ncmlkID4gKiB7XFxuICAgIG9wYWNpdHk6IDA7XFxufVxcblxcbi5wb2ludCB7XFxuICAgIHdpZHRoOiAyMCU7XFxuICAgIGhlaWdodDogMjAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMCwgMCk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG59XFxuXFxuLm5vbi1zaGlwIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjA4LCAyMDgpO1xcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG59XFxuXFxuLm5vbi1zaGlwID4gKiB7XFxuICAgIG9wYWNpdHk6IDE7XFxufVxcblxcbi5wb2ludC1kYXJrIHtcXG4gICAgd2lkdGg6IDIwJTtcXG4gICAgaGVpZ2h0OiAyMCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxufVxcblxcbi5zaGlwIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRjb3JhbDtcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxufVxcblxcbi5zaGlwID4gKiB7XFxuICAgIG9wYWNpdHk6IDE7XFxufVxcblxcbi5saW5lIHtcXG4gICAgd2lkdGg6IDE0NSU7XFxuICAgIGhlaWdodDogMTAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcXG5cXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDQ1JTtcXG59XFxuXFxuLmdyaWQgPiAubGluZTpmaXJzdC1vZi10eXBlIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xcbn1cXG5cXG5AbWVkaWEgYWxsIGFuZCAobWluLXdpZHRoOiA2MDBweCkge1xcbiAgICAvKnRhYmxldCovXFxufVxcblxcbkBtZWRpYSBhbGwgYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XFxuICAgIC8qc3rDoW3DrXTDs2fDqXAqL1xcblxcbiAgICAuZ2FtZWJvYXJkIHtcXG4gICAgICAgIHdpZHRoOiAzMHZ3O1xcbiAgICB9XFxuXFxuICAgIC5ncmlkOmhvdmVyIHtcXG4gICAgICAgIGJvcmRlcjogM3B4IHNvbGlkIGdyZWVuO1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmVlbjtcXG4gICAgfVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgcGxheWVyIGZyb20gJy4vcGxheWVyJztcclxuXHJcbmNvbnN0IGJ1aWxkR2FtZWJvYXJkID0gKCkgPT4ge1xyXG4gICAgY29uc3QgcCA9IHBsYXllcigpO1xyXG4gICAgcC5idWlsZEZsZWV0KCk7XHJcblxyXG4gICAgY29uc3QgZ2FtZWJvYXJkcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNnYW1lYm9hcmRzJyk7XHJcbiAgICBjb25zdCBnYiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgZ2IuY2xhc3NMaXN0LmFkZCgnZ2FtZWJvYXJkJyk7XHJcbiAgICBnYW1lYm9hcmRzLmFwcGVuZENoaWxkKGdiKTtcclxuXHJcbiAgICByZXR1cm4geyBnYiwgcCB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYnVpbGRHYW1lYm9hcmQ7XHJcbiIsImltcG9ydCBzaGlwIGZyb20gJy4vc2hpcCc7XHJcblxyXG5jb25zdCBnYW1lYm9hcmQgPSAoKSA9PiB7XHJcbiAgICBsZXQgbWlzc2VkU2hvdHMgPSBbXTtcclxuICAgIGxldCBzaGlwcyA9IFtdO1xyXG5cclxuICAgIGNvbnN0IHBsYWNlU2hpcCA9IChzaGlwLCB4LCB5LCBkaXJlY3Rpb24pID0+IHtcclxuICAgICAgICBzaGlwLnBvc2l0aW9uWzBdID0geDtcclxuICAgICAgICBzaGlwLnBvc2l0aW9uWzJdID0geTtcclxuICAgICAgICBzaGlwLmVuZE9mU2hpcChkaXJlY3Rpb24pO1xyXG4gICAgICAgIHNoaXBzLnB1c2goc2hpcCk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IHJlY2VpdmVBdHRhY2sgPSAoeCwgeSkgPT4ge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgc2hpcHNbaV0ucG9zaXRpb25bMF0gPD0geCAmJlxyXG4gICAgICAgICAgICAgICAgc2hpcHNbaV0ucG9zaXRpb25bMV0gPj0geCAmJlxyXG4gICAgICAgICAgICAgICAgc2hpcHNbaV0ucG9zaXRpb25bMl0gPD0geSAmJlxyXG4gICAgICAgICAgICAgICAgc2hpcHNbaV0ucG9zaXRpb25bM10gPj0geVxyXG4gICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgIGlmIChzaGlwc1tpXS5wb3NpdGlvblswXSA9PSB4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2hpcHNbaV0uaGl0KHkgLSBzaGlwc1tpXS5wb3NpdGlvblsyXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHNoaXBzW2ldO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBzaGlwc1tpXS5oaXQoeCAtIHNoaXBzW2ldLnBvc2l0aW9uWzBdKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gc2hpcHNbaV07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBtaXNzZWRTaG90cy5wdXNoKHgsIHkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBhbGxTaGlwc1N1bmsgPSAoKSA9PiB7XHJcbiAgICAgICAgaWYgKHNoaXBzLmV2ZXJ5KCh2KSA9PiB2LmlzU3VuaygpID09IHRydWUpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiB7IHNoaXBzLCBtaXNzZWRTaG90cywgcGxhY2VTaGlwLCByZWNlaXZlQXR0YWNrLCBhbGxTaGlwc1N1bmsgfTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGdhbWVib2FyZDtcclxuIiwiY29uc3QgbG9nQ2xpY2sgPSAoZ2IsIGcpID0+IHtcclxuICAgIGNvbnN0IHBvcyA9IEFycmF5LmZyb20oZ2IuY2hpbGRyZW4pLmluZGV4T2YoZyk7XHJcbiAgICBsZXQgeENvb3JkO1xyXG4gICAgbGV0IHlDb29yZDtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDw9IHBvczsgaSArPSAxMCkge1xyXG4gICAgICAgIHhDb29yZCA9IGkgLyAxMDtcclxuICAgICAgICB5Q29vcmQgPSBwb3MgLSBpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7IHhDb29yZCwgeUNvb3JkIH07XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBsb2dDbGljazsiLCJpbXBvcnQgZ2FtZWJvYXJkIGZyb20gJy4vZ2FtZWJvYXJkJztcclxuaW1wb3J0IHNoaXAgZnJvbSAnLi9zaGlwJztcclxuXHJcbmNvbnN0IHBsYXllciA9ICgpID0+IHtcclxuICAgIGNvbnN0IGdiID0gZ2FtZWJvYXJkKCk7XHJcblxyXG4gICAgY29uc3Qgc2hpcHMgPSBbXTtcclxuXHJcbiAgICBsZXQgZnJlZVNwYWNlcyA9IFtdO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XHJcbiAgICAgICAgZnJlZVNwYWNlc1tpXSA9IFtdO1xyXG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgMTA7IGorKykge1xyXG4gICAgICAgICAgICBmcmVlU3BhY2VzW2ldW2pdID0gajtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgYnVpbGRGbGVldCA9ICgpID0+IHtcclxuICAgICAgICBzaGlwc1swXSA9IHNoaXAoNCk7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAyOyBpKyspIHtcclxuICAgICAgICAgICAgc2hpcHNbaSArIDFdID0gc2hpcCgzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAzOyBpKyspIHtcclxuICAgICAgICAgICAgc2hpcHNbaSArIDNdID0gc2hpcCgyKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA0OyBpKyspIHtcclxuICAgICAgICAgICAgc2hpcHNbaSArIDZdID0gc2hpcCgxKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qIHJhbmRvbSBwb3NpdGlvbiwgYW5kIHdlYXRoZXIgaXQgaXMgZnJlZSAqL1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgY29uc3Qgcm5kID0gcmFuZFBvc2l0aW9uKCk7XHJcbiAgICAgICAgICAgIHRlc3RQb3NpdGlvbihzaGlwc1tpXSwgcm5kKTtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXHJcbiAgICAgICAgICAgIC8vICAgICBzaGlwc1tpXS5wb3NpdGlvbixcclxuICAgICAgICAgICAgLy8gICAgIHJuZC5kaXJlY3Rpb25cclxuICAgICAgICAgICAgLy8gKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IHRlc3RQb3NpdGlvbiA9IChzLCByKSA9PiB7XHJcbiAgICAgICAgbGV0IHBsYWNlSXNGcmVlID0gdHJ1ZTtcclxuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHMud291bmRzLmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICAgIGlmIChyLmRpcmVjdGlvbiA9PSAneCcpIHtcclxuICAgICAgICAgICAgICAgIGlmIChyLnJuZFkgKyBzLndvdW5kcy5sZW5ndGggPiA5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2VJc0ZyZWUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoIWZyZWVTcGFjZXNbci5ybmRYXS5pbmNsdWRlcyhyLnJuZFkgKyBqKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlSXNGcmVlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoci5kaXJlY3Rpb24gPT0gJ3knKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoci5ybmRYICsgcy53b3VuZHMubGVuZ3RoID4gOSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlSXNGcmVlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKCFmcmVlU3BhY2VzW3Iucm5kWCArIGpdLmluY2x1ZGVzKHIucm5kWSkpIHtcclxuICAgICAgICAgICAgICAgICAgICBwbGFjZUlzRnJlZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChwbGFjZUlzRnJlZSA9PSB0cnVlKSB7XHJcbiAgICAgICAgICAgIHBsYWNlU2hpcChzLCByKTtcclxuICAgICAgICAgICAgZGVsZXRlU3BhY2VzKHMud291bmRzLmxlbmd0aCwgci5ybmRYLCByLnJuZFksIHIuZGlyZWN0aW9uKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zdCBybmQgPSByYW5kUG9zaXRpb24oKTtcclxuICAgICAgICAgICAgdGVzdFBvc2l0aW9uKHMsIHJuZCk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCByYW5kUG9zaXRpb24gPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3Qgcm5kWCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcclxuICAgICAgICBjb25zdCBybmRZID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xyXG4gICAgICAgIGNvbnN0IGRpcmVjdGlvbiA9IE1hdGgucmFuZG9tKCkgPCAwLjUgPyAneCcgOiAneSc7XHJcblxyXG4gICAgICAgIHJldHVybiB7IHJuZFgsIHJuZFksIGRpcmVjdGlvbiB9O1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBwbGFjZVNoaXAgPSAocywgcikgPT4ge1xyXG4gICAgICAgIGdiLnBsYWNlU2hpcChzLCByLnJuZFgsIHIucm5kWSwgci5kaXJlY3Rpb24pO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBkZWxldGVTcGFjZXMgPSAobCwgeCwgeSwgZCkgPT4ge1xyXG4gICAgICAgIC8qIHBsYWNlIG5laWdoYm91cmluZyBncmlkLXMgKi9cclxuICAgICAgICBpZiAoZCA9PSAneCcpIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsICsgMjsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDM7IGorKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh4IC0gMSArIGogPD0gOSAmJiB5IC0gMSArIGkgPD0gOSAmJiB4IC0gMSArIGogPj0gMCAmJiB5IC0gMSArIGkgPj0gMCApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZnJlZVNwYWNlc1t4IC0gMSArIGpdW3kgLSAxICsgaV0gPSAneCc7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIGlmIChkID09ICd5Jykge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGwgKyAyOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgMzsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHggLSAxICsgaSA8PSA5ICYmIHkgLSAxICsgaiA8PSA5ICYmIHggLSAxICsgaSA+PSAwICYmIHkgLSAxICsgaiA+PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZyZWVTcGFjZXNbeCAtIDEgKyBpXVt5IC0gMSArIGpdID0gJ3gnO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyogcGxhY2UgdGhlIHNoaXBzICovXHJcbiAgICAgICAgaWYgKGQgPT0gJ3gnKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBmcmVlU3BhY2VzW3hdW3kgKyBpXSA9IGBzaGlwICR7bH1gO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIGlmIChkID09ICd5Jykge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGw7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgZnJlZVNwYWNlc1t4ICsgaV1beV0gPSBgc2hpcCAke2x9YDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgYXR0YWNrID0gKHgsIHksIGVuZW15Qm9hcmQpID0+IHtcclxuICAgICAgICBlbmVteUJvYXJkLnJlY2VpdmVBdHRhY2soeCwgeSk7XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgZ2IsXHJcbiAgICAgICAgZnJlZVNwYWNlcyxcclxuICAgICAgICBzaGlwcyxcclxuICAgICAgICBidWlsZEZsZWV0LFxyXG4gICAgICAgIHRlc3RQb3NpdGlvbixcclxuICAgICAgICByYW5kUG9zaXRpb24sXHJcbiAgICAgICAgcGxhY2VTaGlwLFxyXG4gICAgfTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHBsYXllcjtcclxuIiwiY29uc3Qgc2hpcCA9IChsZW5ndGgpID0+IHtcclxuICAgIGxldCB3b3VuZHMgPSBuZXcgQXJyYXkobGVuZ3RoKTtcclxuICAgIHdvdW5kcy5maWxsKCdzYWZlJyk7XHJcblxyXG4gICAgLyogeFN0YXJ0LCB4RW5kLCB5U3RhcnQsIHlFbmQgKi9cclxuICAgIGxldCBwb3NpdGlvbiA9IG5ldyBBcnJheSg0KTtcclxuICAgIGxldCBkID0gbmV3IEFycmF5KDEpO1xyXG5cclxuICAgIGNvbnN0IGVuZE9mU2hpcCA9IChkaXJlY3Rpb24pID0+IHtcclxuICAgICAgICBpZiAoZGlyZWN0aW9uID09ICd4Jykge1xyXG4gICAgICAgICAgICBkWzBdID0gJ3gnO1xyXG4gICAgICAgICAgICBwb3NpdGlvblsxXSA9IHBvc2l0aW9uWzBdO1xyXG4gICAgICAgICAgICBwb3NpdGlvblszXSA9IHBvc2l0aW9uWzJdICsgbGVuZ3RoIC0gMTtcclxuICAgICAgICB9IGVsc2UgaWYgKGRpcmVjdGlvbiA9PSAneScpIHtcclxuICAgICAgICAgICAgZFswXSA9ICd5JztcclxuICAgICAgICAgICAgcG9zaXRpb25bMV0gPSBwb3NpdGlvblswXSArIGxlbmd0aCAtIDE7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uWzNdID0gcG9zaXRpb25bMl07XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBoaXQgPSAoZG1nKSA9PiB7XHJcbiAgICAgICAgd291bmRzW2RtZ10gPSAnaGl0JztcclxuICAgICAgICByZXR1cm4gd291bmRzW2RtZ107XHJcbiAgICB9O1xyXG4gICAgY29uc3QgaXNTdW5rID0gKCkgPT4ge1xyXG4gICAgICAgIGlmICh3b3VuZHMuZXZlcnkoKHYpID0+IHYgPT0gJ2hpdCcpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIHsgd291bmRzLCBwb3NpdGlvbiwgZCwgZW5kT2ZTaGlwLCBoaXQsIGlzU3VuayB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgc2hpcDtcclxuIiwiaW1wb3J0IGxvZ0NsaWNrIGZyb20gJy4uL2ZhY3RvcnlfZnVuY3Rpb25zL2xvZ0NsaWNrJztcclxuaW1wb3J0IHN0eWxlUm93TmVpZ2hib3VycyBmcm9tICcuL3N0eWxpbmcvc3R5bGVSb3dOZWlnaGJvdXJzJztcclxuaW1wb3J0IHN0eWxlQ29sdW1uTmVpZ2hub3VycyBmcm9tICcuL3N0eWxpbmcvc3R5bGVDb2x1bW5OZWlnaGJvdXJzJztcclxuXHJcbmZ1bmN0aW9uIGNsaWNrRmVlZGJhY2socCwgZ2IsIGcsIGksIGopIHtcclxuICAgIGlmIChTdHJpbmcocC5mcmVlU3BhY2VzW2ldW2pdKS5pbmNsdWRlcygnc2hpcCcpKSB7XHJcbiAgICAgICAgLyogYWRkIGFwcHJvcGlhdGUgc3R5bGluZyAqL1xyXG4gICAgICAgIGcuY2xhc3NMaXN0LmFkZCgnc2hpcCcpO1xyXG5cclxuICAgICAgICAvKiBsb2cgdGhlIGNsaWNrcyBjb29yZGluYXRlcyAqL1xyXG4gICAgICAgIGNvbnN0IGNsaWNrID0gbG9nQ2xpY2soZ2IsIGcpO1xyXG4gICAgICAgIC8qIHBsYXkgdGhlIHJlY2VpdmVBdHRhY2sgZnVuY3Rpb24gKi9cclxuICAgICAgICBjb25zdCBzaGlwID0gcC5nYi5yZWNlaXZlQXR0YWNrKGNsaWNrLnhDb29yZCwgY2xpY2sueUNvb3JkKTtcclxuXHJcbiAgICAgICAgLyogd2hhdCB0byBkbywgd2hlbiBzaGlwIGlzIHN1bmsgKi9cclxuICAgICAgICBjb25zdCBzdW5rID0gc2hpcC5pc1N1bmsoKTtcclxuICAgICAgICBpZiAoc3VuayA9PSB0cnVlKSB7XHJcbiAgICAgICAgICAgIGlmIChzaGlwLmRbMF0gPT0gJ3gnKSB7XHJcbiAgICAgICAgICAgICAgICBzdHlsZVJvd05laWdoYm91cnMoc2hpcCwgZ2IpO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHNoaXAuZFswXSA9PSAneScpIHtcclxuICAgICAgICAgICAgICAgIHN0eWxlQ29sdW1uTmVpZ2hub3VycyhzaGlwLCBnYik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGcuY2xhc3NMaXN0LmFkZCgnbm9uLXNoaXAnKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xpY2tGZWVkYmFjaztcclxuIiwiaW1wb3J0IGNyZWF0ZUdyaWRFbGVtZW50IGZyb20gXCIuL2NyZWF0ZUdyaWRFbGVtZW50XCI7XHJcbmltcG9ydCBhZGRTdHlsaW5nR3JpZCBmcm9tIFwiLi4vc3R5bGluZy9hZGRTdHlsaW5nR3JpZFwiO1xyXG5pbXBvcnQgY2xpY2tGZWVkYmFjayBmcm9tIFwiLi4vY2xpY2tGZWVkYmFja1wiO1xyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBidWlsZEdyaWQoZ2IsIHApIHtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xyXG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgMTA7IGorKykge1xyXG4gICAgICAgICAgICAvKiBjcmVhdGUgZ3JpZCBlbGVtZW50cyAqL1xyXG4gICAgICAgICAgICBjb25zdCBnID0gY3JlYXRlR3JpZEVsZW1lbnQoZ2IpO1xyXG4gICAgICAgICAgICBhZGRTdHlsaW5nR3JpZChwLCBnLCBpLCBqKTtcclxuXHJcbiAgICAgICAgICAgIGcuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjbGlja0ZlZWRiYWNrKHAsIGdiLCBnLCBpLCBqKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBidWlsZEdyaWQ7IiwiZnVuY3Rpb24gY3JlYXRlR3JpZEVsZW1lbnQoZ2IpIHtcclxuICAgIGNvbnN0IGcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGcuY2xhc3NMaXN0LmFkZCgnZ3JpZCcpO1xyXG4gICAgZ2IuYXBwZW5kQ2hpbGQoZyk7XHJcbiAgICByZXR1cm4gZztcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlR3JpZEVsZW1lbnQ7IiwiZnVuY3Rpb24gYWRkU3R5bGluZ0dyaWQocCwgZywgaSwgaikge1xyXG4gICAgaWYgKFN0cmluZyhwLmZyZWVTcGFjZXNbaV1bal0pLmluY2x1ZGVzKCdzaGlwJykpIHtcclxuICAgICAgICBjb25zdCBsaW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgY29uc3QgbGluZTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBsaW5lLmNsYXNzTGlzdC5hZGQoJ2xpbmUnKTtcclxuICAgICAgICBsaW5lMi5jbGFzc0xpc3QuYWRkKCdsaW5lJyk7XHJcblxyXG4gICAgICAgIGcuYXBwZW5kKGxpbmUsIGxpbmUyKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc3QgcG9pbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBwb2ludC5jbGFzc0xpc3QuYWRkKCdwb2ludCcpO1xyXG5cclxuICAgICAgICBnLmFwcGVuZENoaWxkKHBvaW50KTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgYWRkU3R5bGluZ0dyaWQ7IiwiZnVuY3Rpb24gc3R5bGVDb2x1bW5OZWlnaG5vdXJzKHNoaXAsIGdiKSB7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXAud291bmRzLmxlbmd0aCArIDI7IGkrKykge1xyXG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgMzsgaisrKSB7XHJcbiAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgIHNoaXAucG9zaXRpb25bMF0gLSAxICsgaSA8PSA5ICYmXHJcbiAgICAgICAgICAgICAgICBzaGlwLnBvc2l0aW9uWzJdIC0gMSArIGogPD0gOSAmJlxyXG4gICAgICAgICAgICAgICAgc2hpcC5wb3NpdGlvblswXSAtIDEgKyBpID49IDAgJiZcclxuICAgICAgICAgICAgICAgIHNoaXAucG9zaXRpb25bMl0gLSAxICsgaiA+PSAwICYmXHJcbiAgICAgICAgICAgICAgICBnYi5jaGlsZHJlbltcclxuICAgICAgICAgICAgICAgICAgICAoc2hpcC5wb3NpdGlvblswXSAtIDEgKyBpKSAqIDEwICsgc2hpcC5wb3NpdGlvblsyXSAtIDEgKyBqXHJcbiAgICAgICAgICAgICAgICBdLmNsYXNzTmFtZSAhPSAnc2hpcCdcclxuICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBmcmVlU3BhY2VzW3ggLSAxICsgaV1beSAtIDEgKyBqXSA9ICd4JztcclxuICAgICAgICAgICAgICAgIGdiLmNoaWxkcmVuW1xyXG4gICAgICAgICAgICAgICAgICAgIChzaGlwLnBvc2l0aW9uWzBdIC0gMSArIGkpICogMTAgKyBzaGlwLnBvc2l0aW9uWzJdIC0gMSArIGpcclxuICAgICAgICAgICAgICAgIF0uY2xhc3NMaXN0LmFkZCgnbm9uLXNoaXAnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgc3R5bGVDb2x1bW5OZWlnaG5vdXJzOyIsImZ1bmN0aW9uIHN0eWxlUm93TmVpZ2hib3VycyhzaGlwLCBnYikge1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwLndvdW5kcy5sZW5ndGggKyAyOyBpKyspIHtcclxuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDM7IGorKykge1xyXG4gICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICBzaGlwLnBvc2l0aW9uWzBdIC0gMSArIGogPD0gOSAmJlxyXG4gICAgICAgICAgICAgICAgc2hpcC5wb3NpdGlvblsyXSAtIDEgKyBpIDw9IDkgJiZcclxuICAgICAgICAgICAgICAgIHNoaXAucG9zaXRpb25bMF0gLSAxICsgaiA+PSAwICYmXHJcbiAgICAgICAgICAgICAgICBzaGlwLnBvc2l0aW9uWzJdIC0gMSArIGkgPj0gMCAmJlxyXG4gICAgICAgICAgICAgICAgZ2IuY2hpbGRyZW5bXHJcbiAgICAgICAgICAgICAgICAgICAgKHNoaXAucG9zaXRpb25bMF0gLSAxICsgaikgKiAxMCArIHNoaXAucG9zaXRpb25bMl0gLSAxICsgaVxyXG4gICAgICAgICAgICAgICAgXS5jbGFzc05hbWUgIT0gJ3NoaXAnXHJcbiAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgZ2IuY2hpbGRyZW5bXHJcbiAgICAgICAgICAgICAgICAgICAgKHNoaXAucG9zaXRpb25bMF0gLSAxICsgaikgKiAxMCArIHNoaXAucG9zaXRpb25bMl0gLSAxICsgaVxyXG4gICAgICAgICAgICAgICAgXS5jbGFzc0xpc3QuYWRkKCdub24tc2hpcCcpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBzdHlsZVJvd05laWdoYm91cnM7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlcy5jc3MnO1xyXG5pbXBvcnQgYnVpbGRHYW1lYm9hcmQgZnJvbSAnLi9mYWN0b3J5X2Z1bmN0aW9ucy9idWlsZEdhbWVib2FyZCc7XHJcbmltcG9ydCBidWlsZEdyaWQgZnJvbSAnLi9mdW5jdGlvbnMvY3JlYXRlL2J1aWxkR3JpZCc7XHJcblxyXG5cclxuZm9yIChsZXQgaSA9IDA7IGkgPCAyOyBpKyspIHtcclxuICAgIGNvbnN0IGIgPSBidWlsZEdhbWVib2FyZCgpO1xyXG4gICAgYnVpbGRHcmlkKGIuZ2IsIGIucCk7XHJcbn1cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9