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
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! font/Cinzel_Decorative/CinzelDecorative-Bold.ttf */ "./src/font/Cinzel_Decorative/CinzelDecorative-Bold.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n    box-sizing: border-box;\n    -webkit-tap-highlight-color: transparent;\n    font-family: 'Cinzel';\n    color: rgba(20, 19, 20, 0.753);\n}\n\n@font-face {\n    font-family: Cinzel;\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n}\n\nbody {\n    width: 100vw;\n    height: 100vh;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    align-items: center;\n    padding: 0;\n    margin: 0;\n\n    background: linear-gradient(\n        100deg,\n        rgba(30, 128, 241, 1) 0%,\n        rgba(34, 133, 20, 1) 19%,\n        rgba(213, 192, 64, 1) 35%,\n        rgba(204, 149, 149, 1) 53%,\n        rgba(126, 101, 123, 1) 70%,\n        rgba(77, 157, 151, 1) 86%,\n        rgba(17, 75, 130, 1) 100%\n    );\n    background-size: 400% 400%;\n    -webkit-animation: gradient 35s ease infinite;\n            animation: gradient 35s ease infinite;\n\n    overflow: hidden;\n}\n\n#welcomePage {\n    position: absolute;\n    top: 0;\n    left: 0;\n    height: 100vh;\n    width: 100vw;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    gap: 5%;\n    -webkit-backdrop-filter: blur(2vmax);\n            backdrop-filter: blur(2vmax);\n\n    transition: ease-out 0.3s;\n}\n\n#welcomePage h1 {\n    font-size: 5vmax;\n    text-shadow: 2px 2px 20px rgba(0, 0, 0, 0.5);\n}\n\n#welcomePage h3 {\n    font-size: 4vmax;\n    background-color: rgba(240, 248, 255, 0.31);\n    box-shadow: 0px 0px 20px 30px rgba(240, 248, 255, 0.31);\n    padding: 0 1vmax;\n    border-radius: 20px;\n    display: none;\n}\n\nheader {\n    flex: 0 0 min-content;\n    font-size: 6vmax;\n    margin-bottom: 7vmin;\n    text-shadow: 2px 2px 20px rgba(0, 0, 0, 0.8);\n}\n\nbutton {\n    cursor: pointer;\n    font-size: 4vmin;\n    padding: 1vmin 2vmin;\n    border-radius: 1vmax;\n    box-shadow: 2px 2px black;\n    background-color: rgba(116, 160, 199, 0.351);\n    -webkit-backdrop-filter: blur(100px);\n            backdrop-filter: blur(100px);\n    transition: 0.2s;\n}\n\nbutton:hover {\n    box-shadow: 4px 4px black;\n}\n\nbutton:active {\n    box-shadow: none;\n    transform: translateX(4px) translateY(4px);\n}\n\n#gameboards {\n    flex: 1 0 60%;\n    width: 95vw;\n    display: flex;\n    flex-direction: row;\n    flex-wrap: wrap;\n    align-items: center;\n    justify-content: center;\n    overflow: hidden;\n    gap: 2%;\n}\n\n#gameboards > div {\n    flex: 0 1 fit-content;\n    height: -webkit-max-content;\n    height: -moz-max-content;\n    height: max-content;\n    overflow: hidden;\n}\n\nh2 {\n    /* TODO: responsive */\n    text-align: center;\n    font-size: 4vmin;\n    margin: 0;\n    padding: 0;\n}\n\n.gameboard {\n    width: 30vh;\n    display: flex;\n    flex-wrap: wrap;\n    border: 2px solid rgba(0, 0, 0, 0.397);\n    opacity: 0.5;\n    pointer-events: none;\n    -webkit-backdrop-filter: blur(10vmax);\n            backdrop-filter: blur(10vmax);\n    background-color: rgba(240, 248, 255, 0.507);\n    transform: scale(0.85);\n\n    transition: 0.3s;\n    /* transition-delay: 0.3s; */\n}\n\n.active-gb {\n    pointer-events: auto;\n    opacity: 1;\n    transform: scale(1);\n}\n\n/* aside */\n\naside {\n    flex: 0 1 min-content;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap: 5%;\n    margin: 2vh 0;\n}\n\naside > * {\n    flex-basis: min-content;\n    white-space: nowrap;\n}\n\n/* grid elements */\n\n/* non-ship */\n.non {\n    flex: 0 0 10%;\n    overflow: hidden;\n    aspect-ratio: 1/1;\n    border: 2px solid rgba(0, 0, 0, 0.397);\n\n    display: flex;\n    justify-content: center;\n    align-items: center;\n\n    position: relative;\n    cursor: pointer;\n    transition: 0.4s;\n}\n\n.non > * {\n    opacity: 0;\n}\n\n.non-clicked {\n    display: flex;\n    background-color: rgba(226, 196, 196, 0.685);\n    pointer-events: none;\n}\n\n.non-clicked * {\n    opacity: 1;\n}\n\n.point {\n    width: 20%;\n    height: 20%;\n    background-color: rgb(0, 0, 0);\n    border-radius: 50%;\n    pointer-events: none;\n}\n\n/* ship */\n\n.ship {\n    flex: 0 0 10%;\n    overflow: hidden;\n    aspect-ratio: 1/1;\n    border: 2px solid rgba(0, 0, 0, 0.397);\n\n    display: flex;\n    justify-content: center;\n    align-items: center;\n\n    position: relative;\n    cursor: pointer;\n    transition: 0.4s;\n}\n\n.ship > * {\n    opacity: 0;\n}\n\n.ship-clicked {\n    background-color: rgba(240, 128, 128, 0.664);\n    pointer-events: none;\n}\n\n.ship-clicked > * {\n    opacity: 1;\n}\n\n.line {\n    width: 145%;\n    height: 10%;\n    background-color: black;\n    transform: rotate(-45deg);\n\n    position: absolute;\n    top: 45%;\n    pointer-events: none;\n}\n\n.ship > .line:first-of-type {\n    transform: rotate(45deg);\n}\n\n/* players board */\n\n.playerBoard {\n    background-color: rgba(30, 105, 105, 0.562);\n    pointer-events: none;\n}\n\n.playerBoard .ship > * {\n    opacity: 1;\n}\n\n.playerBoard .non > * {\n    opacity: 0;\n}\n\n@media all and (min-width: 600px) and (orientation: landscape) {\n    /*tablet*/\n}\n\n@media all and (min-width: 768px) {\n    /*számítógép*/\n\n    #gameboards {\n        width: 95vw;\n        gap: 2%;\n    }\n\n    .gameboard {\n        width: 30vw;\n    }\n\n    .non:hover,\n    .ship:hover {\n        background-color: rgba(27, 252, 7, 0.664);\n        transform: scale(1.2);\n        transition: 0.1s;\n    }\n}\n\n@-webkit-keyframes gradient {\n    0% {\n        background-position: 0% 50%;\n    }\n    50% {\n        background-position: 100% 50%;\n    }\n    100% {\n        background-position: 0% 50%;\n    }\n}\n\n@keyframes gradient {\n    0% {\n        background-position: 0% 50%;\n    }\n    50% {\n        background-position: 100% 50%;\n    }\n    100% {\n        background-position: 0% 50%;\n    }\n}\n", "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"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","sourcesContent":["* {\n    box-sizing: border-box;\n    -webkit-tap-highlight-color: transparent;\n    font-family: 'Cinzel';\n    color: rgba(20, 19, 20, 0.753);\n}\n\n@font-face {\n    font-family: Cinzel;\n    src: url(font/Cinzel_Decorative/CinzelDecorative-Bold.ttf);\n}\n\nbody {\n    width: 100vw;\n    height: 100vh;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    align-items: center;\n    padding: 0;\n    margin: 0;\n\n    background: linear-gradient(\n        100deg,\n        rgba(30, 128, 241, 1) 0%,\n        rgba(34, 133, 20, 1) 19%,\n        rgba(213, 192, 64, 1) 35%,\n        rgba(204, 149, 149, 1) 53%,\n        rgba(126, 101, 123, 1) 70%,\n        rgba(77, 157, 151, 1) 86%,\n        rgba(17, 75, 130, 1) 100%\n    );\n    background-size: 400% 400%;\n    animation: gradient 35s ease infinite;\n\n    overflow: hidden;\n}\n\n#welcomePage {\n    position: absolute;\n    top: 0;\n    left: 0;\n    height: 100vh;\n    width: 100vw;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    gap: 5%;\n    backdrop-filter: blur(2vmax);\n\n    transition: ease-out 0.3s;\n}\n\n#welcomePage h1 {\n    font-size: 5vmax;\n    text-shadow: 2px 2px 20px rgba(0, 0, 0, 0.5);\n}\n\n#welcomePage h3 {\n    font-size: 4vmax;\n    background-color: rgba(240, 248, 255, 0.31);\n    box-shadow: 0px 0px 20px 30px rgba(240, 248, 255, 0.31);\n    padding: 0 1vmax;\n    border-radius: 20px;\n    display: none;\n}\n\nheader {\n    flex: 0 0 min-content;\n    font-size: 6vmax;\n    margin-bottom: 7vmin;\n    text-shadow: 2px 2px 20px rgba(0, 0, 0, 0.8);\n}\n\nbutton {\n    cursor: pointer;\n    font-size: 4vmin;\n    padding: 1vmin 2vmin;\n    border-radius: 1vmax;\n    box-shadow: 2px 2px black;\n    background-color: rgba(116, 160, 199, 0.351);\n    backdrop-filter: blur(100px);\n    transition: 0.2s;\n}\n\nbutton:hover {\n    box-shadow: 4px 4px black;\n}\n\nbutton:active {\n    box-shadow: none;\n    transform: translateX(4px) translateY(4px);\n}\n\n#gameboards {\n    flex: 1 0 60%;\n    width: 95vw;\n    display: flex;\n    flex-direction: row;\n    flex-wrap: wrap;\n    align-items: center;\n    justify-content: center;\n    overflow: hidden;\n    gap: 2%;\n}\n\n#gameboards > div {\n    flex: 0 1 fit-content;\n    height: max-content;\n    overflow: hidden;\n}\n\nh2 {\n    /* TODO: responsive */\n    text-align: center;\n    font-size: 4vmin;\n    margin: 0;\n    padding: 0;\n}\n\n.gameboard {\n    width: 30vh;\n    display: flex;\n    flex-wrap: wrap;\n    border: 2px solid rgba(0, 0, 0, 0.397);\n    opacity: 0.5;\n    pointer-events: none;\n    backdrop-filter: blur(10vmax);\n    background-color: rgba(240, 248, 255, 0.507);\n    transform: scale(0.85);\n\n    transition: 0.3s;\n    /* transition-delay: 0.3s; */\n}\n\n.active-gb {\n    pointer-events: auto;\n    opacity: 1;\n    transform: scale(1);\n}\n\n/* aside */\n\naside {\n    flex: 0 1 min-content;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap: 5%;\n    margin: 2vh 0;\n}\n\naside > * {\n    flex-basis: min-content;\n    white-space: nowrap;\n}\n\n/* grid elements */\n\n/* non-ship */\n.non {\n    flex: 0 0 10%;\n    overflow: hidden;\n    aspect-ratio: 1/1;\n    border: 2px solid rgba(0, 0, 0, 0.397);\n\n    display: flex;\n    justify-content: center;\n    align-items: center;\n\n    position: relative;\n    cursor: pointer;\n    transition: 0.4s;\n}\n\n.non > * {\n    opacity: 0;\n}\n\n.non-clicked {\n    display: flex;\n    background-color: rgba(226, 196, 196, 0.685);\n    pointer-events: none;\n}\n\n.non-clicked * {\n    opacity: 1;\n}\n\n.point {\n    width: 20%;\n    height: 20%;\n    background-color: rgb(0, 0, 0);\n    border-radius: 50%;\n    pointer-events: none;\n}\n\n/* ship */\n\n.ship {\n    flex: 0 0 10%;\n    overflow: hidden;\n    aspect-ratio: 1/1;\n    border: 2px solid rgba(0, 0, 0, 0.397);\n\n    display: flex;\n    justify-content: center;\n    align-items: center;\n\n    position: relative;\n    cursor: pointer;\n    transition: 0.4s;\n}\n\n.ship > * {\n    opacity: 0;\n}\n\n.ship-clicked {\n    background-color: rgba(240, 128, 128, 0.664);\n    pointer-events: none;\n}\n\n.ship-clicked > * {\n    opacity: 1;\n}\n\n.line {\n    width: 145%;\n    height: 10%;\n    background-color: black;\n    transform: rotate(-45deg);\n\n    position: absolute;\n    top: 45%;\n    pointer-events: none;\n}\n\n.ship > .line:first-of-type {\n    transform: rotate(45deg);\n}\n\n/* players board */\n\n.playerBoard {\n    background-color: rgba(30, 105, 105, 0.562);\n    pointer-events: none;\n}\n\n.playerBoard .ship > * {\n    opacity: 1;\n}\n\n.playerBoard .non > * {\n    opacity: 0;\n}\n\n@media all and (min-width: 600px) and (orientation: landscape) {\n    /*tablet*/\n}\n\n@media all and (min-width: 768px) {\n    /*számítógép*/\n\n    #gameboards {\n        width: 95vw;\n        gap: 2%;\n    }\n\n    .gameboard {\n        width: 30vw;\n    }\n\n    .non:hover,\n    .ship:hover {\n        background-color: rgba(27, 252, 7, 0.664);\n        transform: scale(1.2);\n        transition: 0.1s;\n    }\n}\n\n@keyframes gradient {\n    0% {\n        background-position: 0% 50%;\n    }\n    50% {\n        background-position: 100% 50%;\n    }\n    100% {\n        background-position: 0% 50%;\n    }\n}\n"],"sourceRoot":""}]);
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

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
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

    const div = document.createElement('div');
    div.appendChild(gb);
    gameboards.appendChild(div);

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
        g.classList.add('ship-clicked');

        /* log the clicks coordinates */
        const click = (0,_factory_functions_logClick__WEBPACK_IMPORTED_MODULE_0__["default"])(gb, g);
        /* play the receiveAttack function */
        const ship = p.gb.receiveAttack(click.xCoord, click.yCoord);

        /* 'click' diagonal */
        for (let i = 0; i < 4; i++) {
            let xn = setDiagonalNeighbourCoords(
                i,
                click.xCoord,
                click.yCoord,
            ).x;

            let yn = setDiagonalNeighbourCoords(
                i,
                click.xCoord,
                click.yCoord,
            ).y;

            if (xn > 9 || xn < 0 || yn > 9 || yn < 0) {
            } else {
                gb.children[xn * 10 + yn].classList.add('non-clicked');
            }
        }

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
        g.classList.add('non-clicked');
    }

    const won = p.gb.allShipsSunk();
    if (won) {
        const winner = document.querySelector('h3');
        if (gb.className.includes('playerBoard')) {
            winner.innerText = 'the cpu won';
        } else {
            winner.innerText = 'you won';
        }
        winner.style.display = 'block';

        const gbs = document.querySelector('#gameboards');
        gbs.innerHTML = '';

        const welcomePage = document.querySelector('#welcomePage');
        welcomePage.style.top = '0';
        welcomePage.style.backdropFilter = 'blur(2vmax)';
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (clickFeedback);

const setDiagonalNeighbourCoords = (index, xCoord, yCoord) => {
    switch (index) {
        case 0:
            xCoord++;
            yCoord++;
            break;
        case 1:
            xCoord++;
            yCoord--;
            break;
        case 2:
            xCoord--;
            yCoord++;
            break;
        case 3:
            xCoord--;
            yCoord--;
            break;
        default:
            break;
    }

    let x = xCoord;
    let y = yCoord;

    return { x, y };
};


/***/ }),

/***/ "./src/functions/cpuClick.js":
/*!***********************************!*\
  !*** ./src/functions/cpuClick.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _clickFeedback__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clickFeedback */ "./src/functions/clickFeedback.js");
/* harmony import */ var _cpuFunctions_getRandomCoordinates__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cpuFunctions/getRandomCoordinates */ "./src/functions/cpuFunctions/getRandomCoordinates.js");
/* harmony import */ var _cpuFunctions_getRandomNeighbour__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cpuFunctions/getRandomNeighbour */ "./src/functions/cpuFunctions/getRandomNeighbour.js");
/* harmony import */ var _cpuFunctions_countClickedNeighbours__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cpuFunctions/countClickedNeighbours */ "./src/functions/cpuFunctions/countClickedNeighbours.js");





/* click coordinates of the cpu */
let x = 0;
let y = 0;
/* the coordinates of the previous click of the cpu */
let xp = 0;
let yp = 0;
/* the difference between the previous and the current clicks coordinates */
let vx;
let vy;
/* determine, weather the damaged ship is sinking, or not (already sunk, or no ship damaged) */
let sinking = false;
/* stores the number of clicked neighbours (function return) */
let numberOfClickedNeighbours;
/* variable, that stores the ships datas - used to determine, weather the ship has sunk or not - has a default value of first ship */
// let clickedShip = gameboard[0].p.ships[0];
let clickedShip;

function cpuClick(gbs, gameboard) {
    if (sinking == false) {
        /* if no ship is sinking, then get a random coordinate */
        let numb = (0,_cpuFunctions_getRandomCoordinates__WEBPACK_IMPORTED_MODULE_1__["default"])(gbs);

        /* get the coordinates of the hit */
        for (let i = 0; i <= numb; i += 10) {
            x = i / 10;
            y = numb - x * 10;
        }
    } else if (sinking == true) {
        /* what to do, when the ship is hit, but not yet sunk */
        /* if the last element is not a ship, but the previous before that is a ship, than recalculate the number of clicked neighbours for the last ship */
        if (
            !gbs[0].children[10 * x + y].className.includes('ship') &&
            gbs[0].children[10 * xp + yp].className.includes('ship')
        ) {
            numberOfClickedNeighbours = (0,_cpuFunctions_countClickedNeighbours__WEBPACK_IMPORTED_MODULE_3__["default"])(xp, yp, gbs);
        }

        if (numberOfClickedNeighbours == 4) {
            /* get the opposite direction of clicking */
            vx = x - xp;
            vy = y - yp;

            /* get to the last clicked ship */
            x = x - vx;
            y = y - vy;

            /* while the grid element is clicked and is ship, step to the next element (going backwards) */
            while (
                gbs[0].children[10 * x + y].className.includes('clicked') &&
                gbs[0].children[10 * x + y].className.includes('ship')
            ) {
                x = x - vx;
                y = y - vy;
            }
            /* get back to the last ship (otherwise the cpu is looking for a free neighbour of an unclicked ship) */
            x = x + vx;
            y = y + vy;
        }

        /* if the last element is not a ship (the selected neighbour is not a ship), then go back to the last ship */
        if (!gbs[0].children[10 * x + y].className.includes('ship')) {
            x = xp;
            y = yp;
        }

        /* get a random neighbour of the selected element, that is not clicked */
        const neighbour = (0,_cpuFunctions_getRandomNeighbour__WEBPACK_IMPORTED_MODULE_2__["default"])(x, y, gbs);

        /* log the previous click, and the new */
        xp = x;
        yp = y;
        x = neighbour.xn;
        y = neighbour.yn;
    }

    /* look for the clicked ship (if any) in the factory functions */
    for (let i = 0; i < 10; i++) {
        if (
            gameboard[0].p.ships[i].position[0] <= x &&
            gameboard[0].p.ships[i].position[1] >= x &&
            gameboard[0].p.ships[i].position[2] <= y &&
            gameboard[0].p.ships[i].position[3] >= y
        ) {
            clickedShip = gameboard[0].p.ships[i];
        }
    }

    /* initiate the DOM feedback of the 'click' */
    setTimeout(function() {
        (0,_clickFeedback__WEBPACK_IMPORTED_MODULE_0__["default"])(gameboard[0].p, gbs[0], gbs[0].children[10 * x + y], x, y);

        /* count the clicked neighbours of the click */
        numberOfClickedNeighbours = (0,_cpuFunctions_countClickedNeighbours__WEBPACK_IMPORTED_MODULE_3__["default"])(x, y, gbs);
    
        /* if the click hit, then call for this function 'click' again */
        if (gbs[0].children[10 * x + y].className.includes('ship')) {
            /* determine, weather the click sunk a ship, or not */
            if (clickedShip.isSunk() == true) {
                sinking = false;
            } else {
                sinking = true;
            }
            cpuClick(gbs, gameboard);
            setTimeout(function () {
    
            }, 500);
        } else {
            setTimeout(function() {
                /* if the click didn't hit, then the player's turn comes */
                gbs[0].classList.toggle('active-gb');
                gbs[1].classList.toggle('active-gb');
            }, 500);
        }
    }, 500);

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cpuClick);


/***/ }),

/***/ "./src/functions/cpuFunctions/countClickedNeighbours.js":
/*!**************************************************************!*\
  !*** ./src/functions/cpuFunctions/countClickedNeighbours.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _getNeighbourCoords__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getNeighbourCoords */ "./src/functions/cpuFunctions/getNeighbourCoords.js");


/* check the neighbours: log the number of non-clicked neighbours (no neighbour is counted) */
function countClickedNeighbours(x, y, gbs) {
    let clickedNeighbours = 0;
    for (let i = 0; i < 4; i++) {
        const neighbour = (0,_getNeighbourCoords__WEBPACK_IMPORTED_MODULE_0__["default"])(i, x, y);
        let xn = neighbour.x;
        let yn = neighbour.y;

        if (
            xn > 9 ||
            xn < 0 ||
            yn > 9 ||
            yn < 0 ||
            gbs[0].children[10 * xn + yn].className.includes('clicked')
        ) {
            clickedNeighbours++;
        }
    }
    return clickedNeighbours;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (countClickedNeighbours);


/***/ }),

/***/ "./src/functions/cpuFunctions/getNeighbourCoords.js":
/*!**********************************************************!*\
  !*** ./src/functions/cpuFunctions/getNeighbourCoords.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* get the coordinates of the randomly selected neighbour */
const getNeighbourCoords = (index, xCoord, yCoord) => {
    switch (index) {
        case 0:
            xCoord++;
            break;
        case 1:
            xCoord--;
            break;
        case 2:
            yCoord++;
            break;
        case 3:
            yCoord--;
            break;
        default:
            break;
    }

    let x = xCoord;
    let y = yCoord;

    return { x, y };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getNeighbourCoords);


/***/ }),

/***/ "./src/functions/cpuFunctions/getRandomCoordinates.js":
/*!************************************************************!*\
  !*** ./src/functions/cpuFunctions/getRandomCoordinates.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* get a random coordinate of the grid: if it has been clicked previously, get another one */
function getRandomCoordtinates(gbs) {
    const rndX = Math.floor(Math.random() * 10);
    const rndY = Math.floor(Math.random() * 10);
    let numb = 10 * rndX + rndY;

    if (gbs[0].children[numb].className.includes('clicked')) {
        numb = getRandomCoordtinates(gbs);
    }

    return numb;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getRandomCoordtinates);


/***/ }),

/***/ "./src/functions/cpuFunctions/getRandomNeighbour.js":
/*!**********************************************************!*\
  !*** ./src/functions/cpuFunctions/getRandomNeighbour.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _getNeighbourCoords__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getNeighbourCoords */ "./src/functions/cpuFunctions/getNeighbourCoords.js");


/* get a random neighbour: if it has been already clicked, or it is out of the grid, then select another one */
const getRandomNeighbour = (rndX, rndY, gbs) => {
    let r = Math.floor(Math.random() * 4);

    const neighbour = (0,_getNeighbourCoords__WEBPACK_IMPORTED_MODULE_0__["default"])(r, rndX, rndY);
    let xn = neighbour.x;
    let yn = neighbour.y;

    if (
        xn > 9 ||
        xn < 0 ||
        yn > 9 ||
        yn < 0 ||
        gbs[0].children[xn * 10 + yn].className.includes('clicked')
    ) {
        let neighbour = getRandomNeighbour(rndX, rndY, gbs);
        xn = neighbour.xn;
        yn = neighbour.yn;
    }

    return { xn, yn };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getRandomNeighbour);


/***/ }),

/***/ "./src/functions/cpuFunctions/playerClick.js":
/*!***************************************************!*\
  !*** ./src/functions/cpuFunctions/playerClick.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _clickFeedback__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../clickFeedback */ "./src/functions/clickFeedback.js");
/* harmony import */ var _cpuClick__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../cpuClick */ "./src/functions/cpuClick.js");



/* click coordinates of the player */
let xPlayer;
let yPLayer;

function playerClick(e, gameboard, gbs) {
    /* get the number of the click */
    let numb = Array.from(gbs[1].children).indexOf(e.target);

    /* get the coordinates */
    for (let i = 0; i <= numb; i += 10) {
        xPlayer = i / 10;
        yPLayer = numb - xPlayer * 10;
    }
    /* get the DOM feedback */
    (0,_clickFeedback__WEBPACK_IMPORTED_MODULE_0__["default"])(gameboard[1].p, gbs[1], e.target, xPlayer, yPLayer);

    /* if the click didn't hit, then the cpu comes */
    if (!e.target.className.includes('ship')) {
        gbs[0].classList.toggle('active-gb');
        gbs[1].classList.toggle('active-gb');

        (0,_cpuClick__WEBPACK_IMPORTED_MODULE_1__["default"])(gbs, gameboard);
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (playerClick);

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



function buildGrid(gb, p) {
    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            /* create grid elements */
            const g = (0,_createGridElement__WEBPACK_IMPORTED_MODULE_0__["default"])(gb);
            (0,_styling_addStylingGrid__WEBPACK_IMPORTED_MODULE_1__["default"])(p, g, i, j);
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
    // g.classList.add('grid');
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
        g.classList.add('ship');
    } else {
        const point = document.createElement('div');
        point.classList.add('point');

        g.appendChild(point);
        g.classList.add('non');
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
                !gb.children[
                    (ship.position[0] - 1 + i) * 10 + ship.position[2] - 1 + j
                ].className.includes('ship')
            ) {
                // freeSpaces[x - 1 + i][y - 1 + j] = 'x';
                gb.children[
                    (ship.position[0] - 1 + i) * 10 + ship.position[2] - 1 + j
                ].classList.add('non-clicked');
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
                !gb.children[
                    (ship.position[0] - 1 + j) * 10 + ship.position[2] - 1 + i
                ].className.includes('ship')
            ) {
                gb.children[
                    (ship.position[0] - 1 + j) * 10 + ship.position[2] - 1 + i
                ].classList.add('non-clicked');
            }
        }
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styleRowNeighbours);


/***/ }),

/***/ "./src/font/Cinzel_Decorative/CinzelDecorative-Bold.ttf":
/*!**************************************************************!*\
  !*** ./src/font/Cinzel_Decorative/CinzelDecorative-Bold.ttf ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4701e9921703cb64dfce.ttf";

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
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
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
/* harmony import */ var _functions_cpuFunctions_playerClick__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./functions/cpuFunctions/playerClick */ "./src/functions/cpuFunctions/playerClick.js");





function generatePlayground() {
    /* build the two gameboard for the the player, and store the gameboard */
    const gameboard = [];
    for (let i = 0; i < 2; i++) {
        const b = (0,_factory_functions_buildGameboard__WEBPACK_IMPORTED_MODULE_1__["default"])();
        (0,_functions_create_buildGrid__WEBPACK_IMPORTED_MODULE_2__["default"])(b.gb, b.p);

        gameboard[i] = b;
    }

    const gbs = document.querySelectorAll('.gameboard');
    /* the player starts attacking */
    gbs[0].classList.add('playerBoard');

    const startButton = document.querySelector('#start');
    startButton.addEventListener(
        'click',
        () => {
            gbs[1].classList.add('active-gb');
            startButton.style.display = 'none';
            const generateButton = document.querySelector('#generate');
            generateButton.style.display = 'none';
        },
        { once: true },
    );

    const playerBoard = document.querySelector('#gameboards > div:first-child');
    const player = document.createElement('h2');
    player.innerText = "player's board";

    const cpuBoard = document.querySelector('#gameboards > div:nth-child(2)');
    const cpu = document.createElement('h2');
    cpu.innerText = "cpu's board";
    playerBoard.insertBefore(player, gbs[0]);
    cpuBoard.insertBefore(cpu, gbs[1]);

    /* somehow only giving the enemys playerboard click event results in a bug */
    gbs.forEach((b) => {
        Array.from(b.children).forEach((g) => {
            g.addEventListener('click', (e) => {
                if (gbs[1].className.includes('active')) {
                    (0,_functions_cpuFunctions_playerClick__WEBPACK_IMPORTED_MODULE_3__["default"])(e, gameboard, gbs);
                }
            });
        });
    });
}

function clearPLayground() {
    const gb = document.querySelector('#gameboards');
    gb.innerHTML = '';
}

// generatePlayground();

const generateButton = document.querySelector('#generate');
generateButton.addEventListener('click', () => {
    clearPLayground();
    generatePlayground();
});

const newGame = document.querySelector('#newGame');
newGame.addEventListener('click', () => {
    clearPLayground();
    generatePlayground();

    const welcomePage = document.querySelector('#welcomePage');
    // newGame.style.display = "none";
    welcomePage.style.top = '100vh';
    welcomePage.style.backdropFilter = 'blur(0px)';

    const startButton = document.querySelector('#start');
    startButton.style.display = 'block';
    const generateButton = document.querySelector('#generate');
    generateButton.style.display = 'block';

    const gbs = document.querySelectorAll('.gameboard');
    gbs[0].classList.remove('active-gb');
    gbs[1].classList.add('active-gb');
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFdBQVcsYUFBYSxLQUFLLFlBQVksYUFBYSxjQUFjLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxjQUFjLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsY0FBYyxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLE9BQU8sV0FBVyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxhQUFhLFdBQVcsS0FBSyxVQUFVLFlBQVksYUFBYSxjQUFjLFdBQVcsWUFBWSxjQUFjLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sV0FBVyxLQUFLLFVBQVUsWUFBWSxhQUFhLGNBQWMsV0FBVyxZQUFZLGNBQWMsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFB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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZXMuY3NzP2E4ZDAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2ZhY3RvcnlfZnVuY3Rpb25zL2J1aWxkR2FtZWJvYXJkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZmFjdG9yeV9mdW5jdGlvbnMvZ2FtZWJvYXJkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZmFjdG9yeV9mdW5jdGlvbnMvbG9nQ2xpY2suanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9mYWN0b3J5X2Z1bmN0aW9ucy9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9mYWN0b3J5X2Z1bmN0aW9ucy9zaGlwLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZnVuY3Rpb25zL2NsaWNrRmVlZGJhY2suanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9mdW5jdGlvbnMvY3B1Q2xpY2suanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9mdW5jdGlvbnMvY3B1RnVuY3Rpb25zL2NvdW50Q2xpY2tlZE5laWdoYm91cnMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9mdW5jdGlvbnMvY3B1RnVuY3Rpb25zL2dldE5laWdoYm91ckNvb3Jkcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2Z1bmN0aW9ucy9jcHVGdW5jdGlvbnMvZ2V0UmFuZG9tQ29vcmRpbmF0ZXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9mdW5jdGlvbnMvY3B1RnVuY3Rpb25zL2dldFJhbmRvbU5laWdoYm91ci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2Z1bmN0aW9ucy9jcHVGdW5jdGlvbnMvcGxheWVyQ2xpY2suanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9mdW5jdGlvbnMvY3JlYXRlL2J1aWxkR3JpZC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2Z1bmN0aW9ucy9jcmVhdGUvY3JlYXRlR3JpZEVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9mdW5jdGlvbnMvc3R5bGluZy9hZGRTdHlsaW5nR3JpZC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2Z1bmN0aW9ucy9zdHlsaW5nL3N0eWxlQ29sdW1uTmVpZ2hib3Vycy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2Z1bmN0aW9ucy9zdHlsaW5nL3N0eWxlUm93TmVpZ2hib3Vycy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcImZvbnQvQ2luemVsX0RlY29yYXRpdmUvQ2luemVsRGVjb3JhdGl2ZS1Cb2xkLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBmb250LWZhbWlseTogJ0NpbnplbCc7XFxuICAgIGNvbG9yOiByZ2JhKDIwLCAxOSwgMjAsIDAuNzUzKTtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiBDaW56ZWw7XFxuICAgIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG59XFxuXFxuYm9keSB7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBtYXJnaW46IDA7XFxuXFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcXG4gICAgICAgIDEwMGRlZyxcXG4gICAgICAgIHJnYmEoMzAsIDEyOCwgMjQxLCAxKSAwJSxcXG4gICAgICAgIHJnYmEoMzQsIDEzMywgMjAsIDEpIDE5JSxcXG4gICAgICAgIHJnYmEoMjEzLCAxOTIsIDY0LCAxKSAzNSUsXFxuICAgICAgICByZ2JhKDIwNCwgMTQ5LCAxNDksIDEpIDUzJSxcXG4gICAgICAgIHJnYmEoMTI2LCAxMDEsIDEyMywgMSkgNzAlLFxcbiAgICAgICAgcmdiYSg3NywgMTU3LCAxNTEsIDEpIDg2JSxcXG4gICAgICAgIHJnYmEoMTcsIDc1LCAxMzAsIDEpIDEwMCVcXG4gICAgKTtcXG4gICAgYmFja2dyb3VuZC1zaXplOiA0MDAlIDQwMCU7XFxuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBncmFkaWVudCAzNXMgZWFzZSBpbmZpbml0ZTtcXG4gICAgICAgICAgICBhbmltYXRpb246IGdyYWRpZW50IDM1cyBlYXNlIGluZmluaXRlO1xcblxcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG4jd2VsY29tZVBhZ2Uge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiA1JTtcXG4gICAgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IGJsdXIoMnZtYXgpO1xcbiAgICAgICAgICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigydm1heCk7XFxuXFxuICAgIHRyYW5zaXRpb246IGVhc2Utb3V0IDAuM3M7XFxufVxcblxcbiN3ZWxjb21lUGFnZSBoMSB7XFxuICAgIGZvbnQtc2l6ZTogNXZtYXg7XFxuICAgIHRleHQtc2hhZG93OiAycHggMnB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjUpO1xcbn1cXG5cXG4jd2VsY29tZVBhZ2UgaDMge1xcbiAgICBmb250LXNpemU6IDR2bWF4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0MCwgMjQ4LCAyNTUsIDAuMzEpO1xcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDIwcHggMzBweCByZ2JhKDI0MCwgMjQ4LCAyNTUsIDAuMzEpO1xcbiAgICBwYWRkaW5nOiAwIDF2bWF4O1xcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgICBmbGV4OiAwIDAgbWluLWNvbnRlbnQ7XFxuICAgIGZvbnQtc2l6ZTogNnZtYXg7XFxuICAgIG1hcmdpbi1ib3R0b206IDd2bWluO1xcbiAgICB0ZXh0LXNoYWRvdzogMnB4IDJweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC44KTtcXG59XFxuXFxuYnV0dG9uIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBmb250LXNpemU6IDR2bWluO1xcbiAgICBwYWRkaW5nOiAxdm1pbiAydm1pbjtcXG4gICAgYm9yZGVyLXJhZGl1czogMXZtYXg7XFxuICAgIGJveC1zaGFkb3c6IDJweCAycHggYmxhY2s7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTE2LCAxNjAsIDE5OSwgMC4zNTEpO1xcbiAgICAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1cigxMDBweCk7XFxuICAgICAgICAgICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEwMHB4KTtcXG4gICAgdHJhbnNpdGlvbjogMC4ycztcXG59XFxuXFxuYnV0dG9uOmhvdmVyIHtcXG4gICAgYm94LXNoYWRvdzogNHB4IDRweCBibGFjaztcXG59XFxuXFxuYnV0dG9uOmFjdGl2ZSB7XFxuICAgIGJveC1zaGFkb3c6IG5vbmU7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCg0cHgpIHRyYW5zbGF0ZVkoNHB4KTtcXG59XFxuXFxuI2dhbWVib2FyZHMge1xcbiAgICBmbGV4OiAxIDAgNjAlO1xcbiAgICB3aWR0aDogOTV2dztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgZ2FwOiAyJTtcXG59XFxuXFxuI2dhbWVib2FyZHMgPiBkaXYge1xcbiAgICBmbGV4OiAwIDEgZml0LWNvbnRlbnQ7XFxuICAgIGhlaWdodDogLXdlYmtpdC1tYXgtY29udGVudDtcXG4gICAgaGVpZ2h0OiAtbW96LW1heC1jb250ZW50O1xcbiAgICBoZWlnaHQ6IG1heC1jb250ZW50O1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG5oMiB7XFxuICAgIC8qIFRPRE86IHJlc3BvbnNpdmUgKi9cXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDR2bWluO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxufVxcblxcbi5nYW1lYm9hcmQge1xcbiAgICB3aWR0aDogMzB2aDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMzk3KTtcXG4gICAgb3BhY2l0eTogMC41O1xcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gICAgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTB2bWF4KTtcXG4gICAgICAgICAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTB2bWF4KTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDAsIDI0OCwgMjU1LCAwLjUwNyk7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMC44NSk7XFxuXFxuICAgIHRyYW5zaXRpb246IDAuM3M7XFxuICAgIC8qIHRyYW5zaXRpb24tZGVsYXk6IDAuM3M7ICovXFxufVxcblxcbi5hY3RpdmUtZ2Ige1xcbiAgICBwb2ludGVyLWV2ZW50czogYXV0bztcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG59XFxuXFxuLyogYXNpZGUgKi9cXG5cXG5hc2lkZSB7XFxuICAgIGZsZXg6IDAgMSBtaW4tY29udGVudDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogNSU7XFxuICAgIG1hcmdpbjogMnZoIDA7XFxufVxcblxcbmFzaWRlID4gKiB7XFxuICAgIGZsZXgtYmFzaXM6IG1pbi1jb250ZW50O1xcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbn1cXG5cXG4vKiBncmlkIGVsZW1lbnRzICovXFxuXFxuLyogbm9uLXNoaXAgKi9cXG4ubm9uIHtcXG4gICAgZmxleDogMCAwIDEwJTtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgYXNwZWN0LXJhdGlvOiAxLzE7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4zOTcpO1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHRyYW5zaXRpb246IDAuNHM7XFxufVxcblxcbi5ub24gPiAqIHtcXG4gICAgb3BhY2l0eTogMDtcXG59XFxuXFxuLm5vbi1jbGlja2VkIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMjYsIDE5NiwgMTk2LCAwLjY4NSk7XFxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbn1cXG5cXG4ubm9uLWNsaWNrZWQgKiB7XFxuICAgIG9wYWNpdHk6IDE7XFxufVxcblxcbi5wb2ludCB7XFxuICAgIHdpZHRoOiAyMCU7XFxuICAgIGhlaWdodDogMjAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMCwgMCk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxufVxcblxcbi8qIHNoaXAgKi9cXG5cXG4uc2hpcCB7XFxuICAgIGZsZXg6IDAgMCAxMCU7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIGFzcGVjdC1yYXRpbzogMS8xO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMzk3KTtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB0cmFuc2l0aW9uOiAwLjRzO1xcbn1cXG5cXG4uc2hpcCA+ICoge1xcbiAgICBvcGFjaXR5OiAwO1xcbn1cXG5cXG4uc2hpcC1jbGlja2VkIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDAsIDEyOCwgMTI4LCAwLjY2NCk7XFxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbn1cXG5cXG4uc2hpcC1jbGlja2VkID4gKiB7XFxuICAgIG9wYWNpdHk6IDE7XFxufVxcblxcbi5saW5lIHtcXG4gICAgd2lkdGg6IDE0NSU7XFxuICAgIGhlaWdodDogMTAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcXG5cXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDQ1JTtcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxufVxcblxcbi5zaGlwID4gLmxpbmU6Zmlyc3Qtb2YtdHlwZSB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcXG59XFxuXFxuLyogcGxheWVycyBib2FyZCAqL1xcblxcbi5wbGF5ZXJCb2FyZCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMzAsIDEwNSwgMTA1LCAwLjU2Mik7XFxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbn1cXG5cXG4ucGxheWVyQm9hcmQgLnNoaXAgPiAqIHtcXG4gICAgb3BhY2l0eTogMTtcXG59XFxuXFxuLnBsYXllckJvYXJkIC5ub24gPiAqIHtcXG4gICAgb3BhY2l0eTogMDtcXG59XFxuXFxuQG1lZGlhIGFsbCBhbmQgKG1pbi13aWR0aDogNjAwcHgpIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkge1xcbiAgICAvKnRhYmxldCovXFxufVxcblxcbkBtZWRpYSBhbGwgYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XFxuICAgIC8qc3rDoW3DrXTDs2fDqXAqL1xcblxcbiAgICAjZ2FtZWJvYXJkcyB7XFxuICAgICAgICB3aWR0aDogOTV2dztcXG4gICAgICAgIGdhcDogMiU7XFxuICAgIH1cXG5cXG4gICAgLmdhbWVib2FyZCB7XFxuICAgICAgICB3aWR0aDogMzB2dztcXG4gICAgfVxcblxcbiAgICAubm9uOmhvdmVyLFxcbiAgICAuc2hpcDpob3ZlciB7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI3LCAyNTIsIDcsIDAuNjY0KTtcXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcXG4gICAgICAgIHRyYW5zaXRpb246IDAuMXM7XFxuICAgIH1cXG59XFxuXFxuQC13ZWJraXQta2V5ZnJhbWVzIGdyYWRpZW50IHtcXG4gICAgMCUge1xcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCUgNTAlO1xcbiAgICB9XFxuICAgIDUwJSB7XFxuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAxMDAlIDUwJTtcXG4gICAgfVxcbiAgICAxMDAlIHtcXG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IDAlIDUwJTtcXG4gICAgfVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIGdyYWRpZW50IHtcXG4gICAgMCUge1xcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCUgNTAlO1xcbiAgICB9XFxuICAgIDUwJSB7XFxuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAxMDAlIDUwJTtcXG4gICAgfVxcbiAgICAxMDAlIHtcXG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IDAlIDUwJTtcXG4gICAgfVxcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLHNCQUFzQjtJQUN0Qix3Q0FBd0M7SUFDeEMscUJBQXFCO0lBQ3JCLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQiw0Q0FBMEQ7QUFDOUQ7O0FBRUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsOEJBQThCO0lBQzlCLG1CQUFtQjtJQUNuQixVQUFVO0lBQ1YsU0FBUzs7SUFFVDs7Ozs7Ozs7O0tBU0M7SUFDRCwwQkFBMEI7SUFDMUIsNkNBQXFDO1lBQXJDLHFDQUFxQzs7SUFFckMsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixPQUFPO0lBQ1AsYUFBYTtJQUNiLFlBQVk7SUFDWixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFD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LGFBQWE7O0lBRWI7UUFDSSxXQUFXO1FBQ1gsT0FBTztJQUNYOztJQUVBO1FBQ0ksV0FBVztJQUNmOztJQUVBOztRQUVJLHlDQUF5QztRQUN6QyxxQkFBcUI7UUFDckIsZ0JBQWdCO0lBQ3BCO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLDJCQUEyQjtJQUMvQjtJQUNBO1FBQ0ksNkJBQTZCO0lBQ2pDO0lBQ0E7UUFDSSwyQkFBMkI7SUFDL0I7QUFDSjs7QUFWQTtJQUNJO1FBQ0ksMkJBQTJCO0lBQy9CO0lBQ0E7UUFDSSw2QkFBNkI7SUFDakM7SUFDQTtRQUNJLDJCQUEyQjtJQUMvQjtBQUNKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIioge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBmb250LWZhbWlseTogJ0NpbnplbCc7XFxuICAgIGNvbG9yOiByZ2JhKDIwLCAxOSwgMjAsIDAuNzUzKTtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiBDaW56ZWw7XFxuICAgIHNyYzogdXJsKGZvbnQvQ2luemVsX0RlY29yYXRpdmUvQ2luemVsRGVjb3JhdGl2ZS1Cb2xkLnR0Zik7XFxufVxcblxcbmJvZHkge1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgbWFyZ2luOiAwO1xcblxcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXFxuICAgICAgICAxMDBkZWcsXFxuICAgICAgICByZ2JhKDMwLCAxMjgsIDI0MSwgMSkgMCUsXFxuICAgICAgICByZ2JhKDM0LCAxMzMsIDIwLCAxKSAxOSUsXFxuICAgICAgICByZ2JhKDIxMywgMTkyLCA2NCwgMSkgMzUlLFxcbiAgICAgICAgcmdiYSgyMDQsIDE0OSwgMTQ5LCAxKSA1MyUsXFxuICAgICAgICByZ2JhKDEyNiwgMTAxLCAxMjMsIDEpIDcwJSxcXG4gICAgICAgIHJnYmEoNzcsIDE1NywgMTUxLCAxKSA4NiUsXFxuICAgICAgICByZ2JhKDE3LCA3NSwgMTMwLCAxKSAxMDAlXFxuICAgICk7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogNDAwJSA0MDAlO1xcbiAgICBhbmltYXRpb246IGdyYWRpZW50IDM1cyBlYXNlIGluZmluaXRlO1xcblxcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG4jd2VsY29tZVBhZ2Uge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiA1JTtcXG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDJ2bWF4KTtcXG5cXG4gICAgdHJhbnNpdGlvbjogZWFzZS1vdXQgMC4zcztcXG59XFxuXFxuI3dlbGNvbWVQYWdlIGgxIHtcXG4gICAgZm9udC1zaXplOiA1dm1heDtcXG4gICAgdGV4dC1zaGFkb3c6IDJweCAycHggMjBweCByZ2JhKDAsIDAsIDAsIDAuNSk7XFxufVxcblxcbiN3ZWxjb21lUGFnZSBoMyB7XFxuICAgIGZvbnQtc2l6ZTogNHZtYXg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQwLCAyNDgsIDI1NSwgMC4zMSk7XFxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMjBweCAzMHB4IHJnYmEoMjQwLCAyNDgsIDI1NSwgMC4zMSk7XFxuICAgIHBhZGRpbmc6IDAgMXZtYXg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbmhlYWRlciB7XFxuICAgIGZsZXg6IDAgMCBtaW4tY29udGVudDtcXG4gICAgZm9udC1zaXplOiA2dm1heDtcXG4gICAgbWFyZ2luLWJvdHRvbTogN3ZtaW47XFxuICAgIHRleHQtc2hhZG93OiAycHggMnB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjgpO1xcbn1cXG5cXG5idXR0b24ge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogNHZtaW47XFxuICAgIHBhZGRpbmc6IDF2bWluIDJ2bWluO1xcbiAgICBib3JkZXItcmFkaXVzOiAxdm1heDtcXG4gICAgYm94LXNoYWRvdzogMnB4IDJweCBibGFjaztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMTYsIDE2MCwgMTk5LCAwLjM1MSk7XFxuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxMDBweCk7XFxuICAgIHRyYW5zaXRpb246IDAuMnM7XFxufVxcblxcbmJ1dHRvbjpob3ZlciB7XFxuICAgIGJveC1zaGFkb3c6IDRweCA0cHggYmxhY2s7XFxufVxcblxcbmJ1dHRvbjphY3RpdmUge1xcbiAgICBib3gtc2hhZG93OiBub25lO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNHB4KSB0cmFuc2xhdGVZKDRweCk7XFxufVxcblxcbiNnYW1lYm9hcmRzIHtcXG4gICAgZmxleDogMSAwIDYwJTtcXG4gICAgd2lkdGg6IDk1dnc7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIGdhcDogMiU7XFxufVxcblxcbiNnYW1lYm9hcmRzID4gZGl2IHtcXG4gICAgZmxleDogMCAxIGZpdC1jb250ZW50O1xcbiAgICBoZWlnaHQ6IG1heC1jb250ZW50O1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG5oMiB7XFxuICAgIC8qIFRPRE86IHJlc3BvbnNpdmUgKi9cXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDR2bWluO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxufVxcblxcbi5nYW1lYm9hcmQge1xcbiAgICB3aWR0aDogMzB2aDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMzk3KTtcXG4gICAgb3BhY2l0eTogMC41O1xcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEwdm1heCk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQwLCAyNDgsIDI1NSwgMC41MDcpO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuODUpO1xcblxcbiAgICB0cmFuc2l0aW9uOiAwLjNzO1xcbiAgICAvKiB0cmFuc2l0aW9uLWRlbGF5OiAwLjNzOyAqL1xcbn1cXG5cXG4uYWN0aXZlLWdiIHtcXG4gICAgcG9pbnRlci1ldmVudHM6IGF1dG87XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxufVxcblxcbi8qIGFzaWRlICovXFxuXFxuYXNpZGUge1xcbiAgICBmbGV4OiAwIDEgbWluLWNvbnRlbnQ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDUlO1xcbiAgICBtYXJnaW46IDJ2aCAwO1xcbn1cXG5cXG5hc2lkZSA+ICoge1xcbiAgICBmbGV4LWJhc2lzOiBtaW4tY29udGVudDtcXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG59XFxuXFxuLyogZ3JpZCBlbGVtZW50cyAqL1xcblxcbi8qIG5vbi1zaGlwICovXFxuLm5vbiB7XFxuICAgIGZsZXg6IDAgMCAxMCU7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIGFzcGVjdC1yYXRpbzogMS8xO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMzk3KTtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB0cmFuc2l0aW9uOiAwLjRzO1xcbn1cXG5cXG4ubm9uID4gKiB7XFxuICAgIG9wYWNpdHk6IDA7XFxufVxcblxcbi5ub24tY2xpY2tlZCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjI2LCAxOTYsIDE5NiwgMC42ODUpO1xcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG59XFxuXFxuLm5vbi1jbGlja2VkICoge1xcbiAgICBvcGFjaXR5OiAxO1xcbn1cXG5cXG4ucG9pbnQge1xcbiAgICB3aWR0aDogMjAlO1xcbiAgICBoZWlnaHQ6IDIwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDAsIDApO1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbn1cXG5cXG4vKiBzaGlwICovXFxuXFxuLnNoaXAge1xcbiAgICBmbGV4OiAwIDAgMTAlO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICBhc3BlY3QtcmF0aW86IDEvMTtcXG4gICAgYm9yZGVyOiAycHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjM5Nyk7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgdHJhbnNpdGlvbjogMC40cztcXG59XFxuXFxuLnNoaXAgPiAqIHtcXG4gICAgb3BhY2l0eTogMDtcXG59XFxuXFxuLnNoaXAtY2xpY2tlZCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQwLCAxMjgsIDEyOCwgMC42NjQpO1xcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG59XFxuXFxuLnNoaXAtY2xpY2tlZCA+ICoge1xcbiAgICBvcGFjaXR5OiAxO1xcbn1cXG5cXG4ubGluZSB7XFxuICAgIHdpZHRoOiAxNDUlO1xcbiAgICBoZWlnaHQ6IDEwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XFxuXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiA0NSU7XFxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbn1cXG5cXG4uc2hpcCA+IC5saW5lOmZpcnN0LW9mLXR5cGUge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XFxufVxcblxcbi8qIHBsYXllcnMgYm9hcmQgKi9cXG5cXG4ucGxheWVyQm9hcmQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDMwLCAxMDUsIDEwNSwgMC41NjIpO1xcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG59XFxuXFxuLnBsYXllckJvYXJkIC5zaGlwID4gKiB7XFxuICAgIG9wYWNpdHk6IDE7XFxufVxcblxcbi5wbGF5ZXJCb2FyZCAubm9uID4gKiB7XFxuICAgIG9wYWNpdHk6IDA7XFxufVxcblxcbkBtZWRpYSBhbGwgYW5kIChtaW4td2lkdGg6IDYwMHB4KSBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIHtcXG4gICAgLyp0YWJsZXQqL1xcbn1cXG5cXG5AbWVkaWEgYWxsIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xcbiAgICAvKnN6w6Ftw610w7Nnw6lwKi9cXG5cXG4gICAgI2dhbWVib2FyZHMge1xcbiAgICAgICAgd2lkdGg6IDk1dnc7XFxuICAgICAgICBnYXA6IDIlO1xcbiAgICB9XFxuXFxuICAgIC5nYW1lYm9hcmQge1xcbiAgICAgICAgd2lkdGg6IDMwdnc7XFxuICAgIH1cXG5cXG4gICAgLm5vbjpob3ZlcixcXG4gICAgLnNoaXA6aG92ZXIge1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNywgMjUyLCA3LCAwLjY2NCk7XFxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XFxuICAgICAgICB0cmFuc2l0aW9uOiAwLjFzO1xcbiAgICB9XFxufVxcblxcbkBrZXlmcmFtZXMgZ3JhZGllbnQge1xcbiAgICAwJSB7XFxuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwJSA1MCU7XFxuICAgIH1cXG4gICAgNTAlIHtcXG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IDEwMCUgNTAlO1xcbiAgICB9XFxuICAgIDEwMCUge1xcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCUgNTAlO1xcbiAgICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHBsYXllciBmcm9tICcuL3BsYXllcic7XHJcblxyXG5jb25zdCBidWlsZEdhbWVib2FyZCA9ICgpID0+IHtcclxuICAgIGNvbnN0IHAgPSBwbGF5ZXIoKTtcclxuICAgIHAuYnVpbGRGbGVldCgpO1xyXG5cclxuICAgIGNvbnN0IGdhbWVib2FyZHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZ2FtZWJvYXJkcycpO1xyXG4gICAgY29uc3QgZ2IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGdiLmNsYXNzTGlzdC5hZGQoJ2dhbWVib2FyZCcpO1xyXG5cclxuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgZGl2LmFwcGVuZENoaWxkKGdiKTtcclxuICAgIGdhbWVib2FyZHMuYXBwZW5kQ2hpbGQoZGl2KTtcclxuXHJcbiAgICByZXR1cm4geyBnYiwgcCB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYnVpbGRHYW1lYm9hcmQ7XHJcbiIsImltcG9ydCBzaGlwIGZyb20gJy4vc2hpcCc7XHJcblxyXG5jb25zdCBnYW1lYm9hcmQgPSAoKSA9PiB7XHJcbiAgICBsZXQgbWlzc2VkU2hvdHMgPSBbXTtcclxuICAgIGxldCBzaGlwcyA9IFtdO1xyXG5cclxuICAgIGNvbnN0IHBsYWNlU2hpcCA9IChzaGlwLCB4LCB5LCBkaXJlY3Rpb24pID0+IHtcclxuICAgICAgICBzaGlwLnBvc2l0aW9uWzBdID0geDtcclxuICAgICAgICBzaGlwLnBvc2l0aW9uWzJdID0geTtcclxuICAgICAgICBzaGlwLmVuZE9mU2hpcChkaXJlY3Rpb24pO1xyXG4gICAgICAgIHNoaXBzLnB1c2goc2hpcCk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IHJlY2VpdmVBdHRhY2sgPSAoeCwgeSkgPT4ge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgc2hpcHNbaV0ucG9zaXRpb25bMF0gPD0geCAmJlxyXG4gICAgICAgICAgICAgICAgc2hpcHNbaV0ucG9zaXRpb25bMV0gPj0geCAmJlxyXG4gICAgICAgICAgICAgICAgc2hpcHNbaV0ucG9zaXRpb25bMl0gPD0geSAmJlxyXG4gICAgICAgICAgICAgICAgc2hpcHNbaV0ucG9zaXRpb25bM10gPj0geVxyXG4gICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgIGlmIChzaGlwc1tpXS5wb3NpdGlvblswXSA9PSB4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2hpcHNbaV0uaGl0KHkgLSBzaGlwc1tpXS5wb3NpdGlvblsyXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHNoaXBzW2ldO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBzaGlwc1tpXS5oaXQoeCAtIHNoaXBzW2ldLnBvc2l0aW9uWzBdKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gc2hpcHNbaV07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBtaXNzZWRTaG90cy5wdXNoKHgsIHkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBhbGxTaGlwc1N1bmsgPSAoKSA9PiB7XHJcbiAgICAgICAgaWYgKHNoaXBzLmV2ZXJ5KCh2KSA9PiB2LmlzU3VuaygpID09IHRydWUpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiB7IHNoaXBzLCBtaXNzZWRTaG90cywgcGxhY2VTaGlwLCByZWNlaXZlQXR0YWNrLCBhbGxTaGlwc1N1bmsgfTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGdhbWVib2FyZDtcclxuIiwiY29uc3QgbG9nQ2xpY2sgPSAoZ2IsIGcpID0+IHtcclxuICAgIGNvbnN0IHBvcyA9IEFycmF5LmZyb20oZ2IuY2hpbGRyZW4pLmluZGV4T2YoZyk7XHJcbiAgICBsZXQgeENvb3JkO1xyXG4gICAgbGV0IHlDb29yZDtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDw9IHBvczsgaSArPSAxMCkge1xyXG4gICAgICAgIHhDb29yZCA9IGkgLyAxMDtcclxuICAgICAgICB5Q29vcmQgPSBwb3MgLSBpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7IHhDb29yZCwgeUNvb3JkIH07XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBsb2dDbGljaztcclxuIiwiaW1wb3J0IGdhbWVib2FyZCBmcm9tICcuL2dhbWVib2FyZCc7XHJcbmltcG9ydCBzaGlwIGZyb20gJy4vc2hpcCc7XHJcblxyXG5jb25zdCBwbGF5ZXIgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBnYiA9IGdhbWVib2FyZCgpO1xyXG5cclxuICAgIGNvbnN0IHNoaXBzID0gW107XHJcblxyXG4gICAgbGV0IGZyZWVTcGFjZXMgPSBbXTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xyXG4gICAgICAgIGZyZWVTcGFjZXNbaV0gPSBbXTtcclxuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDEwOyBqKyspIHtcclxuICAgICAgICAgICAgZnJlZVNwYWNlc1tpXVtqXSA9IGo7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGJ1aWxkRmxlZXQgPSAoKSA9PiB7XHJcbiAgICAgICAgc2hpcHNbMF0gPSBzaGlwKDQpO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMjsgaSsrKSB7XHJcbiAgICAgICAgICAgIHNoaXBzW2kgKyAxXSA9IHNoaXAoMyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMzsgaSsrKSB7XHJcbiAgICAgICAgICAgIHNoaXBzW2kgKyAzXSA9IHNoaXAoMik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHNoaXBzW2kgKyA2XSA9IHNoaXAoMSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKiByYW5kb20gcG9zaXRpb24sIGFuZCB3ZWF0aGVyIGl0IGlzIGZyZWUgKi9cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXBzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJuZCA9IHJhbmRQb3NpdGlvbigpO1xyXG4gICAgICAgICAgICB0ZXN0UG9zaXRpb24oc2hpcHNbaV0sIHJuZCk7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFxyXG4gICAgICAgICAgICAvLyAgICAgc2hpcHNbaV0ucG9zaXRpb24sXHJcbiAgICAgICAgICAgIC8vICAgICBybmQuZGlyZWN0aW9uXHJcbiAgICAgICAgICAgIC8vICk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCB0ZXN0UG9zaXRpb24gPSAocywgcikgPT4ge1xyXG4gICAgICAgIGxldCBwbGFjZUlzRnJlZSA9IHRydWU7XHJcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBzLndvdW5kcy5sZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgICBpZiAoci5kaXJlY3Rpb24gPT0gJ3gnKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoci5ybmRZICsgcy53b3VuZHMubGVuZ3RoID4gOSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlSXNGcmVlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKCFmcmVlU3BhY2VzW3Iucm5kWF0uaW5jbHVkZXMoci5ybmRZICsgaikpIHtcclxuICAgICAgICAgICAgICAgICAgICBwbGFjZUlzRnJlZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHIuZGlyZWN0aW9uID09ICd5Jykge1xyXG4gICAgICAgICAgICAgICAgaWYgKHIucm5kWCArIHMud291bmRzLmxlbmd0aCA+IDkpIHtcclxuICAgICAgICAgICAgICAgICAgICBwbGFjZUlzRnJlZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICghZnJlZVNwYWNlc1tyLnJuZFggKyBqXS5pbmNsdWRlcyhyLnJuZFkpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2VJc0ZyZWUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAocGxhY2VJc0ZyZWUgPT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICBwbGFjZVNoaXAocywgcik7XHJcbiAgICAgICAgICAgIGRlbGV0ZVNwYWNlcyhzLndvdW5kcy5sZW5ndGgsIHIucm5kWCwgci5ybmRZLCByLmRpcmVjdGlvbik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc3Qgcm5kID0gcmFuZFBvc2l0aW9uKCk7XHJcbiAgICAgICAgICAgIHRlc3RQb3NpdGlvbihzLCBybmQpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgcmFuZFBvc2l0aW9uID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHJuZFggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XHJcbiAgICAgICAgY29uc3Qgcm5kWSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcclxuICAgICAgICBjb25zdCBkaXJlY3Rpb24gPSBNYXRoLnJhbmRvbSgpIDwgMC41ID8gJ3gnIDogJ3knO1xyXG5cclxuICAgICAgICByZXR1cm4geyBybmRYLCBybmRZLCBkaXJlY3Rpb24gfTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgcGxhY2VTaGlwID0gKHMsIHIpID0+IHtcclxuICAgICAgICBnYi5wbGFjZVNoaXAocywgci5ybmRYLCByLnJuZFksIHIuZGlyZWN0aW9uKTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgZGVsZXRlU3BhY2VzID0gKGwsIHgsIHksIGQpID0+IHtcclxuICAgICAgICAvKiBwbGFjZSBuZWlnaGJvdXJpbmcgZ3JpZC1zICovXHJcbiAgICAgICAgaWYgKGQgPT0gJ3gnKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbCArIDI7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCAzOyBqKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoeCAtIDEgKyBqIDw9IDkgJiYgeSAtIDEgKyBpIDw9IDkgJiYgeCAtIDEgKyBqID49IDAgJiYgeSAtIDEgKyBpID49IDAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZyZWVTcGFjZXNbeCAtIDEgKyBqXVt5IC0gMSArIGldID0gJ3gnO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSBpZiAoZCA9PSAneScpIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsICsgMjsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDM7IGorKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh4IC0gMSArIGkgPD0gOSAmJiB5IC0gMSArIGogPD0gOSAmJiB4IC0gMSArIGkgPj0gMCAmJiB5IC0gMSArIGogPj0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmcmVlU3BhY2VzW3ggLSAxICsgaV1beSAtIDEgKyBqXSA9ICd4JztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qIHBsYWNlIHRoZSBzaGlwcyAqL1xyXG4gICAgICAgIGlmIChkID09ICd4Jykge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGw7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgZnJlZVNwYWNlc1t4XVt5ICsgaV0gPSBgc2hpcCAke2x9YDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSBpZiAoZCA9PSAneScpIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGZyZWVTcGFjZXNbeCArIGldW3ldID0gYHNoaXAgJHtsfWA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgZ2IsXHJcbiAgICAgICAgZnJlZVNwYWNlcyxcclxuICAgICAgICBzaGlwcyxcclxuICAgICAgICBidWlsZEZsZWV0LFxyXG4gICAgICAgIHRlc3RQb3NpdGlvbixcclxuICAgICAgICByYW5kUG9zaXRpb24sXHJcbiAgICAgICAgcGxhY2VTaGlwLFxyXG4gICAgfTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHBsYXllcjtcclxuIiwiY29uc3Qgc2hpcCA9IChsZW5ndGgpID0+IHtcclxuICAgIGxldCB3b3VuZHMgPSBuZXcgQXJyYXkobGVuZ3RoKTtcclxuICAgIHdvdW5kcy5maWxsKCdzYWZlJyk7XHJcblxyXG4gICAgLyogeFN0YXJ0LCB4RW5kLCB5U3RhcnQsIHlFbmQgKi9cclxuICAgIGxldCBwb3NpdGlvbiA9IG5ldyBBcnJheSg0KTtcclxuICAgIGxldCBkID0gbmV3IEFycmF5KDEpO1xyXG5cclxuICAgIGNvbnN0IGVuZE9mU2hpcCA9IChkaXJlY3Rpb24pID0+IHtcclxuICAgICAgICBpZiAoZGlyZWN0aW9uID09ICd4Jykge1xyXG4gICAgICAgICAgICBkWzBdID0gJ3gnO1xyXG4gICAgICAgICAgICBwb3NpdGlvblsxXSA9IHBvc2l0aW9uWzBdO1xyXG4gICAgICAgICAgICBwb3NpdGlvblszXSA9IHBvc2l0aW9uWzJdICsgbGVuZ3RoIC0gMTtcclxuICAgICAgICB9IGVsc2UgaWYgKGRpcmVjdGlvbiA9PSAneScpIHtcclxuICAgICAgICAgICAgZFswXSA9ICd5JztcclxuICAgICAgICAgICAgcG9zaXRpb25bMV0gPSBwb3NpdGlvblswXSArIGxlbmd0aCAtIDE7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uWzNdID0gcG9zaXRpb25bMl07XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBoaXQgPSAoZG1nKSA9PiB7XHJcbiAgICAgICAgd291bmRzW2RtZ10gPSAnaGl0JztcclxuICAgICAgICByZXR1cm4gd291bmRzW2RtZ107XHJcbiAgICB9O1xyXG4gICAgY29uc3QgaXNTdW5rID0gKCkgPT4ge1xyXG4gICAgICAgIGlmICh3b3VuZHMuZXZlcnkoKHYpID0+IHYgPT0gJ2hpdCcpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIHsgd291bmRzLCBwb3NpdGlvbiwgZCwgZW5kT2ZTaGlwLCBoaXQsIGlzU3VuayB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgc2hpcDtcclxuIiwiaW1wb3J0IGxvZ0NsaWNrIGZyb20gJy4uL2ZhY3RvcnlfZnVuY3Rpb25zL2xvZ0NsaWNrJztcclxuaW1wb3J0IHN0eWxlUm93TmVpZ2hib3VycyBmcm9tICcuL3N0eWxpbmcvc3R5bGVSb3dOZWlnaGJvdXJzJztcclxuaW1wb3J0IHN0eWxlQ29sdW1uTmVpZ2hub3VycyBmcm9tICcuL3N0eWxpbmcvc3R5bGVDb2x1bW5OZWlnaGJvdXJzJztcclxuXHJcbmZ1bmN0aW9uIGNsaWNrRmVlZGJhY2socCwgZ2IsIGcsIGksIGopIHtcclxuICAgIGlmIChTdHJpbmcocC5mcmVlU3BhY2VzW2ldW2pdKS5pbmNsdWRlcygnc2hpcCcpKSB7XHJcbiAgICAgICAgLyogYWRkIGFwcHJvcGlhdGUgc3R5bGluZyAqL1xyXG4gICAgICAgIGcuY2xhc3NMaXN0LmFkZCgnc2hpcC1jbGlja2VkJyk7XHJcblxyXG4gICAgICAgIC8qIGxvZyB0aGUgY2xpY2tzIGNvb3JkaW5hdGVzICovXHJcbiAgICAgICAgY29uc3QgY2xpY2sgPSBsb2dDbGljayhnYiwgZyk7XHJcbiAgICAgICAgLyogcGxheSB0aGUgcmVjZWl2ZUF0dGFjayBmdW5jdGlvbiAqL1xyXG4gICAgICAgIGNvbnN0IHNoaXAgPSBwLmdiLnJlY2VpdmVBdHRhY2soY2xpY2sueENvb3JkLCBjbGljay55Q29vcmQpO1xyXG5cclxuICAgICAgICAvKiAnY2xpY2snIGRpYWdvbmFsICovXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA0OyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IHhuID0gc2V0RGlhZ29uYWxOZWlnaGJvdXJDb29yZHMoXHJcbiAgICAgICAgICAgICAgICBpLFxyXG4gICAgICAgICAgICAgICAgY2xpY2sueENvb3JkLFxyXG4gICAgICAgICAgICAgICAgY2xpY2sueUNvb3JkLFxyXG4gICAgICAgICAgICApLng7XHJcblxyXG4gICAgICAgICAgICBsZXQgeW4gPSBzZXREaWFnb25hbE5laWdoYm91ckNvb3JkcyhcclxuICAgICAgICAgICAgICAgIGksXHJcbiAgICAgICAgICAgICAgICBjbGljay54Q29vcmQsXHJcbiAgICAgICAgICAgICAgICBjbGljay55Q29vcmQsXHJcbiAgICAgICAgICAgICkueTtcclxuXHJcbiAgICAgICAgICAgIGlmICh4biA+IDkgfHwgeG4gPCAwIHx8IHluID4gOSB8fCB5biA8IDApIHtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGdiLmNoaWxkcmVuW3huICogMTAgKyB5bl0uY2xhc3NMaXN0LmFkZCgnbm9uLWNsaWNrZWQnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyogd2hhdCB0byBkbywgd2hlbiBzaGlwIGlzIHN1bmsgKi9cclxuICAgICAgICBjb25zdCBzdW5rID0gc2hpcC5pc1N1bmsoKTtcclxuICAgICAgICBpZiAoc3VuayA9PSB0cnVlKSB7XHJcbiAgICAgICAgICAgIGlmIChzaGlwLmRbMF0gPT0gJ3gnKSB7XHJcbiAgICAgICAgICAgICAgICBzdHlsZVJvd05laWdoYm91cnMoc2hpcCwgZ2IpO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHNoaXAuZFswXSA9PSAneScpIHtcclxuICAgICAgICAgICAgICAgIHN0eWxlQ29sdW1uTmVpZ2hub3VycyhzaGlwLCBnYik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGcuY2xhc3NMaXN0LmFkZCgnbm9uLWNsaWNrZWQnKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCB3b24gPSBwLmdiLmFsbFNoaXBzU3VuaygpO1xyXG4gICAgaWYgKHdvbikge1xyXG4gICAgICAgIGNvbnN0IHdpbm5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2gzJyk7XHJcbiAgICAgICAgaWYgKGdiLmNsYXNzTmFtZS5pbmNsdWRlcygncGxheWVyQm9hcmQnKSkge1xyXG4gICAgICAgICAgICB3aW5uZXIuaW5uZXJUZXh0ID0gJ3RoZSBjcHUgd29uJztcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB3aW5uZXIuaW5uZXJUZXh0ID0gJ3lvdSB3b24nO1xyXG4gICAgICAgIH1cclxuICAgICAgICB3aW5uZXIuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcblxyXG4gICAgICAgIGNvbnN0IGdicyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNnYW1lYm9hcmRzJyk7XHJcbiAgICAgICAgZ2JzLmlubmVySFRNTCA9ICcnO1xyXG5cclxuICAgICAgICBjb25zdCB3ZWxjb21lUGFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN3ZWxjb21lUGFnZScpO1xyXG4gICAgICAgIHdlbGNvbWVQYWdlLnN0eWxlLnRvcCA9ICcwJztcclxuICAgICAgICB3ZWxjb21lUGFnZS5zdHlsZS5iYWNrZHJvcEZpbHRlciA9ICdibHVyKDJ2bWF4KSc7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsaWNrRmVlZGJhY2s7XHJcblxyXG5jb25zdCBzZXREaWFnb25hbE5laWdoYm91ckNvb3JkcyA9IChpbmRleCwgeENvb3JkLCB5Q29vcmQpID0+IHtcclxuICAgIHN3aXRjaCAoaW5kZXgpIHtcclxuICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgIHhDb29yZCsrO1xyXG4gICAgICAgICAgICB5Q29vcmQrKztcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICB4Q29vcmQrKztcclxuICAgICAgICAgICAgeUNvb3JkLS07XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgeENvb3JkLS07XHJcbiAgICAgICAgICAgIHlDb29yZCsrO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIDM6XHJcbiAgICAgICAgICAgIHhDb29yZC0tO1xyXG4gICAgICAgICAgICB5Q29vcmQtLTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IHggPSB4Q29vcmQ7XHJcbiAgICBsZXQgeSA9IHlDb29yZDtcclxuXHJcbiAgICByZXR1cm4geyB4LCB5IH07XHJcbn07XHJcbiIsImltcG9ydCBjbGlja0ZlZWRiYWNrIGZyb20gJy4vY2xpY2tGZWVkYmFjayc7XHJcbmltcG9ydCBnZXRSYW5kb21Db29yZHRpbmF0ZXMgZnJvbSAnLi9jcHVGdW5jdGlvbnMvZ2V0UmFuZG9tQ29vcmRpbmF0ZXMnO1xyXG5pbXBvcnQgZ2V0UmFuZG9tTmVpZ2hib3VyIGZyb20gJy4vY3B1RnVuY3Rpb25zL2dldFJhbmRvbU5laWdoYm91cic7XHJcbmltcG9ydCBjb3VudENsaWNrZWROZWlnaGJvdXJzIGZyb20gJy4vY3B1RnVuY3Rpb25zL2NvdW50Q2xpY2tlZE5laWdoYm91cnMnO1xyXG5cclxuLyogY2xpY2sgY29vcmRpbmF0ZXMgb2YgdGhlIGNwdSAqL1xyXG5sZXQgeCA9IDA7XHJcbmxldCB5ID0gMDtcclxuLyogdGhlIGNvb3JkaW5hdGVzIG9mIHRoZSBwcmV2aW91cyBjbGljayBvZiB0aGUgY3B1ICovXHJcbmxldCB4cCA9IDA7XHJcbmxldCB5cCA9IDA7XHJcbi8qIHRoZSBkaWZmZXJlbmNlIGJldHdlZW4gdGhlIHByZXZpb3VzIGFuZCB0aGUgY3VycmVudCBjbGlja3MgY29vcmRpbmF0ZXMgKi9cclxubGV0IHZ4O1xyXG5sZXQgdnk7XHJcbi8qIGRldGVybWluZSwgd2VhdGhlciB0aGUgZGFtYWdlZCBzaGlwIGlzIHNpbmtpbmcsIG9yIG5vdCAoYWxyZWFkeSBzdW5rLCBvciBubyBzaGlwIGRhbWFnZWQpICovXHJcbmxldCBzaW5raW5nID0gZmFsc2U7XHJcbi8qIHN0b3JlcyB0aGUgbnVtYmVyIG9mIGNsaWNrZWQgbmVpZ2hib3VycyAoZnVuY3Rpb24gcmV0dXJuKSAqL1xyXG5sZXQgbnVtYmVyT2ZDbGlja2VkTmVpZ2hib3VycztcclxuLyogdmFyaWFibGUsIHRoYXQgc3RvcmVzIHRoZSBzaGlwcyBkYXRhcyAtIHVzZWQgdG8gZGV0ZXJtaW5lLCB3ZWF0aGVyIHRoZSBzaGlwIGhhcyBzdW5rIG9yIG5vdCAtIGhhcyBhIGRlZmF1bHQgdmFsdWUgb2YgZmlyc3Qgc2hpcCAqL1xyXG4vLyBsZXQgY2xpY2tlZFNoaXAgPSBnYW1lYm9hcmRbMF0ucC5zaGlwc1swXTtcclxubGV0IGNsaWNrZWRTaGlwO1xyXG5cclxuZnVuY3Rpb24gY3B1Q2xpY2soZ2JzLCBnYW1lYm9hcmQpIHtcclxuICAgIGlmIChzaW5raW5nID09IGZhbHNlKSB7XHJcbiAgICAgICAgLyogaWYgbm8gc2hpcCBpcyBzaW5raW5nLCB0aGVuIGdldCBhIHJhbmRvbSBjb29yZGluYXRlICovXHJcbiAgICAgICAgbGV0IG51bWIgPSBnZXRSYW5kb21Db29yZHRpbmF0ZXMoZ2JzKTtcclxuXHJcbiAgICAgICAgLyogZ2V0IHRoZSBjb29yZGluYXRlcyBvZiB0aGUgaGl0ICovXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPD0gbnVtYjsgaSArPSAxMCkge1xyXG4gICAgICAgICAgICB4ID0gaSAvIDEwO1xyXG4gICAgICAgICAgICB5ID0gbnVtYiAtIHggKiAxMDtcclxuICAgICAgICB9XHJcbiAgICB9IGVsc2UgaWYgKHNpbmtpbmcgPT0gdHJ1ZSkge1xyXG4gICAgICAgIC8qIHdoYXQgdG8gZG8sIHdoZW4gdGhlIHNoaXAgaXMgaGl0LCBidXQgbm90IHlldCBzdW5rICovXHJcbiAgICAgICAgLyogaWYgdGhlIGxhc3QgZWxlbWVudCBpcyBub3QgYSBzaGlwLCBidXQgdGhlIHByZXZpb3VzIGJlZm9yZSB0aGF0IGlzIGEgc2hpcCwgdGhhbiByZWNhbGN1bGF0ZSB0aGUgbnVtYmVyIG9mIGNsaWNrZWQgbmVpZ2hib3VycyBmb3IgdGhlIGxhc3Qgc2hpcCAqL1xyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgICAgIWdic1swXS5jaGlsZHJlblsxMCAqIHggKyB5XS5jbGFzc05hbWUuaW5jbHVkZXMoJ3NoaXAnKSAmJlxyXG4gICAgICAgICAgICBnYnNbMF0uY2hpbGRyZW5bMTAgKiB4cCArIHlwXS5jbGFzc05hbWUuaW5jbHVkZXMoJ3NoaXAnKVxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgICBudW1iZXJPZkNsaWNrZWROZWlnaGJvdXJzID0gY291bnRDbGlja2VkTmVpZ2hib3Vycyh4cCwgeXAsIGdicyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAobnVtYmVyT2ZDbGlja2VkTmVpZ2hib3VycyA9PSA0KSB7XHJcbiAgICAgICAgICAgIC8qIGdldCB0aGUgb3Bwb3NpdGUgZGlyZWN0aW9uIG9mIGNsaWNraW5nICovXHJcbiAgICAgICAgICAgIHZ4ID0geCAtIHhwO1xyXG4gICAgICAgICAgICB2eSA9IHkgLSB5cDtcclxuXHJcbiAgICAgICAgICAgIC8qIGdldCB0byB0aGUgbGFzdCBjbGlja2VkIHNoaXAgKi9cclxuICAgICAgICAgICAgeCA9IHggLSB2eDtcclxuICAgICAgICAgICAgeSA9IHkgLSB2eTtcclxuXHJcbiAgICAgICAgICAgIC8qIHdoaWxlIHRoZSBncmlkIGVsZW1lbnQgaXMgY2xpY2tlZCBhbmQgaXMgc2hpcCwgc3RlcCB0byB0aGUgbmV4dCBlbGVtZW50IChnb2luZyBiYWNrd2FyZHMpICovXHJcbiAgICAgICAgICAgIHdoaWxlIChcclxuICAgICAgICAgICAgICAgIGdic1swXS5jaGlsZHJlblsxMCAqIHggKyB5XS5jbGFzc05hbWUuaW5jbHVkZXMoJ2NsaWNrZWQnKSAmJlxyXG4gICAgICAgICAgICAgICAgZ2JzWzBdLmNoaWxkcmVuWzEwICogeCArIHldLmNsYXNzTmFtZS5pbmNsdWRlcygnc2hpcCcpXHJcbiAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgeCA9IHggLSB2eDtcclxuICAgICAgICAgICAgICAgIHkgPSB5IC0gdnk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLyogZ2V0IGJhY2sgdG8gdGhlIGxhc3Qgc2hpcCAob3RoZXJ3aXNlIHRoZSBjcHUgaXMgbG9va2luZyBmb3IgYSBmcmVlIG5laWdoYm91ciBvZiBhbiB1bmNsaWNrZWQgc2hpcCkgKi9cclxuICAgICAgICAgICAgeCA9IHggKyB2eDtcclxuICAgICAgICAgICAgeSA9IHkgKyB2eTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qIGlmIHRoZSBsYXN0IGVsZW1lbnQgaXMgbm90IGEgc2hpcCAodGhlIHNlbGVjdGVkIG5laWdoYm91ciBpcyBub3QgYSBzaGlwKSwgdGhlbiBnbyBiYWNrIHRvIHRoZSBsYXN0IHNoaXAgKi9cclxuICAgICAgICBpZiAoIWdic1swXS5jaGlsZHJlblsxMCAqIHggKyB5XS5jbGFzc05hbWUuaW5jbHVkZXMoJ3NoaXAnKSkge1xyXG4gICAgICAgICAgICB4ID0geHA7XHJcbiAgICAgICAgICAgIHkgPSB5cDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qIGdldCBhIHJhbmRvbSBuZWlnaGJvdXIgb2YgdGhlIHNlbGVjdGVkIGVsZW1lbnQsIHRoYXQgaXMgbm90IGNsaWNrZWQgKi9cclxuICAgICAgICBjb25zdCBuZWlnaGJvdXIgPSBnZXRSYW5kb21OZWlnaGJvdXIoeCwgeSwgZ2JzKTtcclxuXHJcbiAgICAgICAgLyogbG9nIHRoZSBwcmV2aW91cyBjbGljaywgYW5kIHRoZSBuZXcgKi9cclxuICAgICAgICB4cCA9IHg7XHJcbiAgICAgICAgeXAgPSB5O1xyXG4gICAgICAgIHggPSBuZWlnaGJvdXIueG47XHJcbiAgICAgICAgeSA9IG5laWdoYm91ci55bjtcclxuICAgIH1cclxuXHJcbiAgICAvKiBsb29rIGZvciB0aGUgY2xpY2tlZCBzaGlwIChpZiBhbnkpIGluIHRoZSBmYWN0b3J5IGZ1bmN0aW9ucyAqL1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICBnYW1lYm9hcmRbMF0ucC5zaGlwc1tpXS5wb3NpdGlvblswXSA8PSB4ICYmXHJcbiAgICAgICAgICAgIGdhbWVib2FyZFswXS5wLnNoaXBzW2ldLnBvc2l0aW9uWzFdID49IHggJiZcclxuICAgICAgICAgICAgZ2FtZWJvYXJkWzBdLnAuc2hpcHNbaV0ucG9zaXRpb25bMl0gPD0geSAmJlxyXG4gICAgICAgICAgICBnYW1lYm9hcmRbMF0ucC5zaGlwc1tpXS5wb3NpdGlvblszXSA+PSB5XHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIGNsaWNrZWRTaGlwID0gZ2FtZWJvYXJkWzBdLnAuc2hpcHNbaV07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qIGluaXRpYXRlIHRoZSBET00gZmVlZGJhY2sgb2YgdGhlICdjbGljaycgKi9cclxuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgY2xpY2tGZWVkYmFjayhnYW1lYm9hcmRbMF0ucCwgZ2JzWzBdLCBnYnNbMF0uY2hpbGRyZW5bMTAgKiB4ICsgeV0sIHgsIHkpO1xyXG5cclxuICAgICAgICAvKiBjb3VudCB0aGUgY2xpY2tlZCBuZWlnaGJvdXJzIG9mIHRoZSBjbGljayAqL1xyXG4gICAgICAgIG51bWJlck9mQ2xpY2tlZE5laWdoYm91cnMgPSBjb3VudENsaWNrZWROZWlnaGJvdXJzKHgsIHksIGdicyk7XHJcbiAgICBcclxuICAgICAgICAvKiBpZiB0aGUgY2xpY2sgaGl0LCB0aGVuIGNhbGwgZm9yIHRoaXMgZnVuY3Rpb24gJ2NsaWNrJyBhZ2FpbiAqL1xyXG4gICAgICAgIGlmIChnYnNbMF0uY2hpbGRyZW5bMTAgKiB4ICsgeV0uY2xhc3NOYW1lLmluY2x1ZGVzKCdzaGlwJykpIHtcclxuICAgICAgICAgICAgLyogZGV0ZXJtaW5lLCB3ZWF0aGVyIHRoZSBjbGljayBzdW5rIGEgc2hpcCwgb3Igbm90ICovXHJcbiAgICAgICAgICAgIGlmIChjbGlja2VkU2hpcC5pc1N1bmsoKSA9PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICBzaW5raW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBzaW5raW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjcHVDbGljayhnYnMsIGdhbWVib2FyZCk7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgXHJcbiAgICAgICAgICAgIH0sIDUwMCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIC8qIGlmIHRoZSBjbGljayBkaWRuJ3QgaGl0LCB0aGVuIHRoZSBwbGF5ZXIncyB0dXJuIGNvbWVzICovXHJcbiAgICAgICAgICAgICAgICBnYnNbMF0uY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlLWdiJyk7XHJcbiAgICAgICAgICAgICAgICBnYnNbMV0uY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlLWdiJyk7XHJcbiAgICAgICAgICAgIH0sIDUwMCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgNTAwKTtcclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNwdUNsaWNrO1xyXG4iLCJpbXBvcnQgZ2V0TmVpZ2hib3VyQ29vcmRzIGZyb20gJy4vZ2V0TmVpZ2hib3VyQ29vcmRzJztcclxuXHJcbi8qIGNoZWNrIHRoZSBuZWlnaGJvdXJzOiBsb2cgdGhlIG51bWJlciBvZiBub24tY2xpY2tlZCBuZWlnaGJvdXJzIChubyBuZWlnaGJvdXIgaXMgY291bnRlZCkgKi9cclxuZnVuY3Rpb24gY291bnRDbGlja2VkTmVpZ2hib3Vycyh4LCB5LCBnYnMpIHtcclxuICAgIGxldCBjbGlja2VkTmVpZ2hib3VycyA9IDA7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDQ7IGkrKykge1xyXG4gICAgICAgIGNvbnN0IG5laWdoYm91ciA9IGdldE5laWdoYm91ckNvb3JkcyhpLCB4LCB5KTtcclxuICAgICAgICBsZXQgeG4gPSBuZWlnaGJvdXIueDtcclxuICAgICAgICBsZXQgeW4gPSBuZWlnaGJvdXIueTtcclxuXHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICB4biA+IDkgfHxcclxuICAgICAgICAgICAgeG4gPCAwIHx8XHJcbiAgICAgICAgICAgIHluID4gOSB8fFxyXG4gICAgICAgICAgICB5biA8IDAgfHxcclxuICAgICAgICAgICAgZ2JzWzBdLmNoaWxkcmVuWzEwICogeG4gKyB5bl0uY2xhc3NOYW1lLmluY2x1ZGVzKCdjbGlja2VkJylcclxuICAgICAgICApIHtcclxuICAgICAgICAgICAgY2xpY2tlZE5laWdoYm91cnMrKztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gY2xpY2tlZE5laWdoYm91cnM7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvdW50Q2xpY2tlZE5laWdoYm91cnM7XHJcbiIsIi8qIGdldCB0aGUgY29vcmRpbmF0ZXMgb2YgdGhlIHJhbmRvbWx5IHNlbGVjdGVkIG5laWdoYm91ciAqL1xyXG5jb25zdCBnZXROZWlnaGJvdXJDb29yZHMgPSAoaW5kZXgsIHhDb29yZCwgeUNvb3JkKSA9PiB7XHJcbiAgICBzd2l0Y2ggKGluZGV4KSB7XHJcbiAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgICB4Q29vcmQrKztcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICB4Q29vcmQtLTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICB5Q29vcmQrKztcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAzOlxyXG4gICAgICAgICAgICB5Q29vcmQtLTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IHggPSB4Q29vcmQ7XHJcbiAgICBsZXQgeSA9IHlDb29yZDtcclxuXHJcbiAgICByZXR1cm4geyB4LCB5IH07XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBnZXROZWlnaGJvdXJDb29yZHM7XHJcbiIsIi8qIGdldCBhIHJhbmRvbSBjb29yZGluYXRlIG9mIHRoZSBncmlkOiBpZiBpdCBoYXMgYmVlbiBjbGlja2VkIHByZXZpb3VzbHksIGdldCBhbm90aGVyIG9uZSAqL1xyXG5mdW5jdGlvbiBnZXRSYW5kb21Db29yZHRpbmF0ZXMoZ2JzKSB7XHJcbiAgICBjb25zdCBybmRYID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xyXG4gICAgY29uc3Qgcm5kWSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcclxuICAgIGxldCBudW1iID0gMTAgKiBybmRYICsgcm5kWTtcclxuXHJcbiAgICBpZiAoZ2JzWzBdLmNoaWxkcmVuW251bWJdLmNsYXNzTmFtZS5pbmNsdWRlcygnY2xpY2tlZCcpKSB7XHJcbiAgICAgICAgbnVtYiA9IGdldFJhbmRvbUNvb3JkdGluYXRlcyhnYnMpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBudW1iO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBnZXRSYW5kb21Db29yZHRpbmF0ZXM7XHJcbiIsImltcG9ydCBnZXROZWlnaGJvdXJDb29yZHMgZnJvbSAnLi9nZXROZWlnaGJvdXJDb29yZHMnO1xyXG5cclxuLyogZ2V0IGEgcmFuZG9tIG5laWdoYm91cjogaWYgaXQgaGFzIGJlZW4gYWxyZWFkeSBjbGlja2VkLCBvciBpdCBpcyBvdXQgb2YgdGhlIGdyaWQsIHRoZW4gc2VsZWN0IGFub3RoZXIgb25lICovXHJcbmNvbnN0IGdldFJhbmRvbU5laWdoYm91ciA9IChybmRYLCBybmRZLCBnYnMpID0+IHtcclxuICAgIGxldCByID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogNCk7XHJcblxyXG4gICAgY29uc3QgbmVpZ2hib3VyID0gZ2V0TmVpZ2hib3VyQ29vcmRzKHIsIHJuZFgsIHJuZFkpO1xyXG4gICAgbGV0IHhuID0gbmVpZ2hib3VyLng7XHJcbiAgICBsZXQgeW4gPSBuZWlnaGJvdXIueTtcclxuXHJcbiAgICBpZiAoXHJcbiAgICAgICAgeG4gPiA5IHx8XHJcbiAgICAgICAgeG4gPCAwIHx8XHJcbiAgICAgICAgeW4gPiA5IHx8XHJcbiAgICAgICAgeW4gPCAwIHx8XHJcbiAgICAgICAgZ2JzWzBdLmNoaWxkcmVuW3huICogMTAgKyB5bl0uY2xhc3NOYW1lLmluY2x1ZGVzKCdjbGlja2VkJylcclxuICAgICkge1xyXG4gICAgICAgIGxldCBuZWlnaGJvdXIgPSBnZXRSYW5kb21OZWlnaGJvdXIocm5kWCwgcm5kWSwgZ2JzKTtcclxuICAgICAgICB4biA9IG5laWdoYm91ci54bjtcclxuICAgICAgICB5biA9IG5laWdoYm91ci55bjtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4geyB4biwgeW4gfTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGdldFJhbmRvbU5laWdoYm91cjtcclxuIiwiaW1wb3J0IGNsaWNrRmVlZGJhY2sgZnJvbSBcIi4uL2NsaWNrRmVlZGJhY2tcIjtcclxuaW1wb3J0IGNwdUNsaWNrIGZyb20gXCIuLi9jcHVDbGlja1wiO1xyXG5cclxuLyogY2xpY2sgY29vcmRpbmF0ZXMgb2YgdGhlIHBsYXllciAqL1xyXG5sZXQgeFBsYXllcjtcclxubGV0IHlQTGF5ZXI7XHJcblxyXG5mdW5jdGlvbiBwbGF5ZXJDbGljayhlLCBnYW1lYm9hcmQsIGdicykge1xyXG4gICAgLyogZ2V0IHRoZSBudW1iZXIgb2YgdGhlIGNsaWNrICovXHJcbiAgICBsZXQgbnVtYiA9IEFycmF5LmZyb20oZ2JzWzFdLmNoaWxkcmVuKS5pbmRleE9mKGUudGFyZ2V0KTtcclxuXHJcbiAgICAvKiBnZXQgdGhlIGNvb3JkaW5hdGVzICovXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8PSBudW1iOyBpICs9IDEwKSB7XHJcbiAgICAgICAgeFBsYXllciA9IGkgLyAxMDtcclxuICAgICAgICB5UExheWVyID0gbnVtYiAtIHhQbGF5ZXIgKiAxMDtcclxuICAgIH1cclxuICAgIC8qIGdldCB0aGUgRE9NIGZlZWRiYWNrICovXHJcbiAgICBjbGlja0ZlZWRiYWNrKGdhbWVib2FyZFsxXS5wLCBnYnNbMV0sIGUudGFyZ2V0LCB4UGxheWVyLCB5UExheWVyKTtcclxuXHJcbiAgICAvKiBpZiB0aGUgY2xpY2sgZGlkbid0IGhpdCwgdGhlbiB0aGUgY3B1IGNvbWVzICovXHJcbiAgICBpZiAoIWUudGFyZ2V0LmNsYXNzTmFtZS5pbmNsdWRlcygnc2hpcCcpKSB7XHJcbiAgICAgICAgZ2JzWzBdLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZS1nYicpO1xyXG4gICAgICAgIGdic1sxXS5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUtZ2InKTtcclxuXHJcbiAgICAgICAgY3B1Q2xpY2soZ2JzLCBnYW1lYm9hcmQpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBwbGF5ZXJDbGljazsiLCJpbXBvcnQgY3JlYXRlR3JpZEVsZW1lbnQgZnJvbSAnLi9jcmVhdGVHcmlkRWxlbWVudCc7XHJcbmltcG9ydCBhZGRTdHlsaW5nR3JpZCBmcm9tICcuLi9zdHlsaW5nL2FkZFN0eWxpbmdHcmlkJztcclxuXHJcbmZ1bmN0aW9uIGJ1aWxkR3JpZChnYiwgcCkge1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCAxMDsgaisrKSB7XHJcbiAgICAgICAgICAgIC8qIGNyZWF0ZSBncmlkIGVsZW1lbnRzICovXHJcbiAgICAgICAgICAgIGNvbnN0IGcgPSBjcmVhdGVHcmlkRWxlbWVudChnYik7XHJcbiAgICAgICAgICAgIGFkZFN0eWxpbmdHcmlkKHAsIGcsIGksIGopO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgYnVpbGRHcmlkO1xyXG4iLCJmdW5jdGlvbiBjcmVhdGVHcmlkRWxlbWVudChnYikge1xyXG4gICAgY29uc3QgZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgLy8gZy5jbGFzc0xpc3QuYWRkKCdncmlkJyk7XHJcbiAgICBnYi5hcHBlbmRDaGlsZChnKTtcclxuICAgIHJldHVybiBnO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVHcmlkRWxlbWVudDsiLCJmdW5jdGlvbiBhZGRTdHlsaW5nR3JpZChwLCBnLCBpLCBqKSB7XHJcbiAgICBpZiAoU3RyaW5nKHAuZnJlZVNwYWNlc1tpXVtqXSkuaW5jbHVkZXMoJ3NoaXAnKSkge1xyXG4gICAgICAgIGNvbnN0IGxpbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBjb25zdCBsaW5lMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGxpbmUuY2xhc3NMaXN0LmFkZCgnbGluZScpO1xyXG4gICAgICAgIGxpbmUyLmNsYXNzTGlzdC5hZGQoJ2xpbmUnKTtcclxuXHJcbiAgICAgICAgZy5hcHBlbmQobGluZSwgbGluZTIpO1xyXG4gICAgICAgIGcuY2xhc3NMaXN0LmFkZCgnc2hpcCcpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBjb25zdCBwb2ludCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIHBvaW50LmNsYXNzTGlzdC5hZGQoJ3BvaW50Jyk7XHJcblxyXG4gICAgICAgIGcuYXBwZW5kQ2hpbGQocG9pbnQpO1xyXG4gICAgICAgIGcuY2xhc3NMaXN0LmFkZCgnbm9uJyk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFkZFN0eWxpbmdHcmlkO1xyXG4iLCJmdW5jdGlvbiBzdHlsZUNvbHVtbk5laWdobm91cnMoc2hpcCwgZ2IpIHtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcC53b3VuZHMubGVuZ3RoICsgMjsgaSsrKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCAzOyBqKyspIHtcclxuICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgc2hpcC5wb3NpdGlvblswXSAtIDEgKyBpIDw9IDkgJiZcclxuICAgICAgICAgICAgICAgIHNoaXAucG9zaXRpb25bMl0gLSAxICsgaiA8PSA5ICYmXHJcbiAgICAgICAgICAgICAgICBzaGlwLnBvc2l0aW9uWzBdIC0gMSArIGkgPj0gMCAmJlxyXG4gICAgICAgICAgICAgICAgc2hpcC5wb3NpdGlvblsyXSAtIDEgKyBqID49IDAgJiZcclxuICAgICAgICAgICAgICAgICFnYi5jaGlsZHJlbltcclxuICAgICAgICAgICAgICAgICAgICAoc2hpcC5wb3NpdGlvblswXSAtIDEgKyBpKSAqIDEwICsgc2hpcC5wb3NpdGlvblsyXSAtIDEgKyBqXHJcbiAgICAgICAgICAgICAgICBdLmNsYXNzTmFtZS5pbmNsdWRlcygnc2hpcCcpXHJcbiAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgLy8gZnJlZVNwYWNlc1t4IC0gMSArIGldW3kgLSAxICsgal0gPSAneCc7XHJcbiAgICAgICAgICAgICAgICBnYi5jaGlsZHJlbltcclxuICAgICAgICAgICAgICAgICAgICAoc2hpcC5wb3NpdGlvblswXSAtIDEgKyBpKSAqIDEwICsgc2hpcC5wb3NpdGlvblsyXSAtIDEgKyBqXHJcbiAgICAgICAgICAgICAgICBdLmNsYXNzTGlzdC5hZGQoJ25vbi1jbGlja2VkJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHN0eWxlQ29sdW1uTmVpZ2hub3VyczsiLCJmdW5jdGlvbiBzdHlsZVJvd05laWdoYm91cnMoc2hpcCwgZ2IpIHtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcC53b3VuZHMubGVuZ3RoICsgMjsgaSsrKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCAzOyBqKyspIHtcclxuICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgc2hpcC5wb3NpdGlvblswXSAtIDEgKyBqIDw9IDkgJiZcclxuICAgICAgICAgICAgICAgIHNoaXAucG9zaXRpb25bMl0gLSAxICsgaSA8PSA5ICYmXHJcbiAgICAgICAgICAgICAgICBzaGlwLnBvc2l0aW9uWzBdIC0gMSArIGogPj0gMCAmJlxyXG4gICAgICAgICAgICAgICAgc2hpcC5wb3NpdGlvblsyXSAtIDEgKyBpID49IDAgJiZcclxuICAgICAgICAgICAgICAgICFnYi5jaGlsZHJlbltcclxuICAgICAgICAgICAgICAgICAgICAoc2hpcC5wb3NpdGlvblswXSAtIDEgKyBqKSAqIDEwICsgc2hpcC5wb3NpdGlvblsyXSAtIDEgKyBpXHJcbiAgICAgICAgICAgICAgICBdLmNsYXNzTmFtZS5pbmNsdWRlcygnc2hpcCcpXHJcbiAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgZ2IuY2hpbGRyZW5bXHJcbiAgICAgICAgICAgICAgICAgICAgKHNoaXAucG9zaXRpb25bMF0gLSAxICsgaikgKiAxMCArIHNoaXAucG9zaXRpb25bMl0gLSAxICsgaVxyXG4gICAgICAgICAgICAgICAgXS5jbGFzc0xpc3QuYWRkKCdub24tY2xpY2tlZCcpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBzdHlsZVJvd05laWdoYm91cnM7XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGVzLmNzcyc7XHJcbmltcG9ydCBidWlsZEdhbWVib2FyZCBmcm9tICcuL2ZhY3RvcnlfZnVuY3Rpb25zL2J1aWxkR2FtZWJvYXJkJztcclxuaW1wb3J0IGJ1aWxkR3JpZCBmcm9tICcuL2Z1bmN0aW9ucy9jcmVhdGUvYnVpbGRHcmlkJztcclxuaW1wb3J0IHBsYXllckNsaWNrIGZyb20gJy4vZnVuY3Rpb25zL2NwdUZ1bmN0aW9ucy9wbGF5ZXJDbGljayc7XHJcblxyXG5mdW5jdGlvbiBnZW5lcmF0ZVBsYXlncm91bmQoKSB7XHJcbiAgICAvKiBidWlsZCB0aGUgdHdvIGdhbWVib2FyZCBmb3IgdGhlIHRoZSBwbGF5ZXIsIGFuZCBzdG9yZSB0aGUgZ2FtZWJvYXJkICovXHJcbiAgICBjb25zdCBnYW1lYm9hcmQgPSBbXTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMjsgaSsrKSB7XHJcbiAgICAgICAgY29uc3QgYiA9IGJ1aWxkR2FtZWJvYXJkKCk7XHJcbiAgICAgICAgYnVpbGRHcmlkKGIuZ2IsIGIucCk7XHJcblxyXG4gICAgICAgIGdhbWVib2FyZFtpXSA9IGI7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZ2JzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmdhbWVib2FyZCcpO1xyXG4gICAgLyogdGhlIHBsYXllciBzdGFydHMgYXR0YWNraW5nICovXHJcbiAgICBnYnNbMF0uY2xhc3NMaXN0LmFkZCgncGxheWVyQm9hcmQnKTtcclxuXHJcbiAgICBjb25zdCBzdGFydEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzdGFydCcpO1xyXG4gICAgc3RhcnRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcclxuICAgICAgICAnY2xpY2snLFxyXG4gICAgICAgICgpID0+IHtcclxuICAgICAgICAgICAgZ2JzWzFdLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZS1nYicpO1xyXG4gICAgICAgICAgICBzdGFydEJ1dHRvbi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgICAgICBjb25zdCBnZW5lcmF0ZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNnZW5lcmF0ZScpO1xyXG4gICAgICAgICAgICBnZW5lcmF0ZUJ1dHRvbi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgeyBvbmNlOiB0cnVlIH0sXHJcbiAgICApO1xyXG5cclxuICAgIGNvbnN0IHBsYXllckJvYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2dhbWVib2FyZHMgPiBkaXY6Zmlyc3QtY2hpbGQnKTtcclxuICAgIGNvbnN0IHBsYXllciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XHJcbiAgICBwbGF5ZXIuaW5uZXJUZXh0ID0gXCJwbGF5ZXIncyBib2FyZFwiO1xyXG5cclxuICAgIGNvbnN0IGNwdUJvYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2dhbWVib2FyZHMgPiBkaXY6bnRoLWNoaWxkKDIpJyk7XHJcbiAgICBjb25zdCBjcHUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xyXG4gICAgY3B1LmlubmVyVGV4dCA9IFwiY3B1J3MgYm9hcmRcIjtcclxuICAgIHBsYXllckJvYXJkLmluc2VydEJlZm9yZShwbGF5ZXIsIGdic1swXSk7XHJcbiAgICBjcHVCb2FyZC5pbnNlcnRCZWZvcmUoY3B1LCBnYnNbMV0pO1xyXG5cclxuICAgIC8qIHNvbWVob3cgb25seSBnaXZpbmcgdGhlIGVuZW15cyBwbGF5ZXJib2FyZCBjbGljayBldmVudCByZXN1bHRzIGluIGEgYnVnICovXHJcbiAgICBnYnMuZm9yRWFjaCgoYikgPT4ge1xyXG4gICAgICAgIEFycmF5LmZyb20oYi5jaGlsZHJlbikuZm9yRWFjaCgoZykgPT4ge1xyXG4gICAgICAgICAgICBnLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChnYnNbMV0uY2xhc3NOYW1lLmluY2x1ZGVzKCdhY3RpdmUnKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHBsYXllckNsaWNrKGUsIGdhbWVib2FyZCwgZ2JzKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gY2xlYXJQTGF5Z3JvdW5kKCkge1xyXG4gICAgY29uc3QgZ2IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZ2FtZWJvYXJkcycpO1xyXG4gICAgZ2IuaW5uZXJIVE1MID0gJyc7XHJcbn1cclxuXHJcbi8vIGdlbmVyYXRlUGxheWdyb3VuZCgpO1xyXG5cclxuY29uc3QgZ2VuZXJhdGVCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZ2VuZXJhdGUnKTtcclxuZ2VuZXJhdGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICBjbGVhclBMYXlncm91bmQoKTtcclxuICAgIGdlbmVyYXRlUGxheWdyb3VuZCgpO1xyXG59KTtcclxuXHJcbmNvbnN0IG5ld0dhbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmV3R2FtZScpO1xyXG5uZXdHYW1lLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgY2xlYXJQTGF5Z3JvdW5kKCk7XHJcbiAgICBnZW5lcmF0ZVBsYXlncm91bmQoKTtcclxuXHJcbiAgICBjb25zdCB3ZWxjb21lUGFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN3ZWxjb21lUGFnZScpO1xyXG4gICAgLy8gbmV3R2FtZS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICB3ZWxjb21lUGFnZS5zdHlsZS50b3AgPSAnMTAwdmgnO1xyXG4gICAgd2VsY29tZVBhZ2Uuc3R5bGUuYmFja2Ryb3BGaWx0ZXIgPSAnYmx1cigwcHgpJztcclxuXHJcbiAgICBjb25zdCBzdGFydEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzdGFydCcpO1xyXG4gICAgc3RhcnRCdXR0b24uc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICBjb25zdCBnZW5lcmF0ZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNnZW5lcmF0ZScpO1xyXG4gICAgZ2VuZXJhdGVCdXR0b24uc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcblxyXG4gICAgY29uc3QgZ2JzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmdhbWVib2FyZCcpO1xyXG4gICAgZ2JzWzBdLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZS1nYicpO1xyXG4gICAgZ2JzWzFdLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZS1nYicpO1xyXG59KTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9