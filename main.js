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
___CSS_LOADER_EXPORT___.push([module.id, "* {\n    box-sizing: border-box;\n    -webkit-tap-highlight-color: transparent;\n    font-family: 'Cinzel';\n    color: rgba(20, 19, 20, 0.753);\n}\n\n@font-face {\n    font-family: Cinzel;\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n}\n\nbody {\n    width: 100vw;\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    align-items: center;\n    padding: 0;\n    margin: 0;\n\n    background: linear-gradient(\n        100deg,\n        rgba(30, 128, 241, 1) 0%,\n        rgba(34, 133, 20, 1) 19%,\n        rgba(213, 192, 64, 1) 35%,\n        rgba(204, 149, 149, 1) 53%,\n        rgba(126, 101, 123, 1) 70%,\n        rgba(77, 157, 151, 1) 86%,\n        rgba(17, 75, 130, 1) 100%\n    );\n    background-size: 400% 400%;\n    -webkit-animation: gradient 35s ease infinite;\n            animation: gradient 35s ease infinite;\n\n    overflow: hidden;\n}\n\n#welcomePage {\n    position: absolute;\n    top: 0;\n    left: 0;\n    height: 100vh;\n    width: 100vw;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    gap: 5%;\n    -webkit-backdrop-filter: blur(2vmax);\n            backdrop-filter: blur(2vmax);\n\n    transition: ease-out 0.3s;\n}\n\n#welcomePage h1 {\n    font-size: 5vmax;\n    text-shadow: 2px 2px 20px rgba(0, 0, 0, 0.5);\n}\n\n#welcomePage h3 {\n    font-size: 4vmax;\n    background-color: rgba(240, 248, 255, 0.31);\n    box-shadow: 0px 0px 20px 30px rgba(240, 248, 255, 0.31);\n    padding: 0 1vmax;\n    border-radius: 20px;\n    display: none;\n}\n\nheader {\n    flex: 0 0 min-content;\n    font-size: 6vmax;\n    margin-bottom: 7vmin;\n    text-shadow: 2px 2px 20px rgba(0, 0, 0, 0.8);\n}\n\nbutton {\n    cursor: pointer;\n    font-size: 4vmin;\n    padding: 1vmin 2vmin;\n    border-radius: 1vmax;\n    box-shadow: 2px 2px black;\n    background-color: rgba(116, 160, 199, 0.351);\n    -webkit-backdrop-filter: blur(100px);\n            backdrop-filter: blur(100px);\n    transition: 0.2s;\n}\n\nbutton:hover {\n    box-shadow: 4px 4px black;\n}\n\nbutton:active {\n    box-shadow: none;\n    transform: translateX(4px) translateY(4px);\n}\n\n#gameboards {\n    flex: 1 0 60%;\n    width: 95vw;\n    display: flex;\n    flex-direction: row;\n    flex-wrap: wrap;\n    align-items: center;\n    justify-content: center;\n    overflow: hidden;\n    gap: 2%;\n}\n\n#gameboards > div {\n    flex: 0 1 fit-content;\n    height: -webkit-max-content;\n    height: -moz-max-content;\n    height: max-content;\n    overflow: hidden;\n}\n\nh2 {\n    /* TODO: responsive */\n    text-align: center;\n    font-size: 4vmin;\n    margin: 0;\n    padding: 0;\n}\n\n.gameboard {\n    width: 30vh;\n    display: flex;\n    flex-wrap: wrap;\n    border: 2px solid rgba(0, 0, 0, 0.397);\n    opacity: 0.5;\n    pointer-events: none;\n    -webkit-backdrop-filter: blur(10vmax);\n            backdrop-filter: blur(10vmax);\n    background-color: rgba(240, 248, 255, 0.507);\n    transform: scale(0.85);\n\n    transition: 0.3s;\n    /* transition-delay: 0.3s; */\n}\n\n.active-gb {\n    pointer-events: auto;\n    opacity: 1;\n    transform: scale(1);\n}\n\n/* aside */\n\naside {\n    flex: 0 1 min-content;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap: 5%;\n    margin: 2vh 0;\n}\n\naside > * {\n    flex-basis: min-content;\n    white-space: nowrap;\n}\n\n/* grid elements */\n\n/* non-ship */\n.non {\n    flex: 0 0 10%;\n    overflow: hidden;\n    aspect-ratio: 1/1;\n    border: 2px solid rgba(0, 0, 0, 0.397);\n\n    display: flex;\n    justify-content: center;\n    align-items: center;\n\n    position: relative;\n    cursor: pointer;\n    transition: 0.4s;\n}\n\n.non > * {\n    opacity: 0;\n}\n\n.non-clicked {\n    display: flex;\n    background-color: rgba(226, 196, 196, 0.685);\n    pointer-events: none;\n}\n\n.non-clicked * {\n    opacity: 1;\n}\n\n.point {\n    width: 20%;\n    height: 20%;\n    background-color: rgb(0, 0, 0);\n    border-radius: 50%;\n    pointer-events: none;\n}\n\n/* ship */\n\n.ship {\n    flex: 0 0 10%;\n    overflow: hidden;\n    aspect-ratio: 1/1;\n    border: 2px solid rgba(0, 0, 0, 0.397);\n\n    display: flex;\n    justify-content: center;\n    align-items: center;\n\n    position: relative;\n    cursor: pointer;\n    transition: 0.4s;\n}\n\n.ship > * {\n    opacity: 0;\n}\n\n.ship-clicked {\n    background-color: rgba(240, 128, 128, 0.664);\n    pointer-events: none;\n}\n\n.ship-clicked > * {\n    opacity: 1;\n}\n\n.line {\n    width: 145%;\n    height: 10%;\n    background-color: black;\n    transform: rotate(-45deg);\n\n    position: absolute;\n    top: 45%;\n    pointer-events: none;\n}\n\n.ship > .line:first-of-type {\n    transform: rotate(45deg);\n}\n\n/* players board */\n\n.playerBoard {\n    background-color: rgba(30, 105, 105, 0.562);\n    pointer-events: none;\n}\n\n.playerBoard .ship > * {\n    opacity: 1;\n}\n\n.playerBoard .non > * {\n    opacity: 0;\n}\n\n@media all and (min-width: 600px) and (orientation: landscape) {\n    /*tablet*/\n}\n\n@media all and (min-width: 768px) {\n    /*számítógép*/\n\n    #gameboards {\n        width: 95vw;\n        gap: 2%;\n    }\n\n    .gameboard {\n        width: 30vw;\n    }\n\n    .non:hover,\n    .ship:hover {\n        background-color: rgba(27, 252, 7, 0.664);\n        transform: scale(1.2);\n        transition: 0.1s;\n    }\n}\n\n@-webkit-keyframes gradient {\n    0% {\n        background-position: 0% 50%;\n    }\n    50% {\n        background-position: 100% 50%;\n    }\n    100% {\n        background-position: 0% 50%;\n    }\n}\n\n@keyframes gradient {\n    0% {\n        background-position: 0% 50%;\n    }\n    50% {\n        background-position: 100% 50%;\n    }\n    100% {\n        background-position: 0% 50%;\n    }\n}\n", "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"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","sourcesContent":["* {\n    box-sizing: border-box;\n    -webkit-tap-highlight-color: transparent;\n    font-family: 'Cinzel';\n    color: rgba(20, 19, 20, 0.753);\n}\n\n@font-face {\n    font-family: Cinzel;\n    src: url(font/Cinzel_Decorative/CinzelDecorative-Bold.ttf);\n}\n\nbody {\n    width: 100vw;\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    align-items: center;\n    padding: 0;\n    margin: 0;\n\n    background: linear-gradient(\n        100deg,\n        rgba(30, 128, 241, 1) 0%,\n        rgba(34, 133, 20, 1) 19%,\n        rgba(213, 192, 64, 1) 35%,\n        rgba(204, 149, 149, 1) 53%,\n        rgba(126, 101, 123, 1) 70%,\n        rgba(77, 157, 151, 1) 86%,\n        rgba(17, 75, 130, 1) 100%\n    );\n    background-size: 400% 400%;\n    animation: gradient 35s ease infinite;\n\n    overflow: hidden;\n}\n\n#welcomePage {\n    position: absolute;\n    top: 0;\n    left: 0;\n    height: 100vh;\n    width: 100vw;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    gap: 5%;\n    backdrop-filter: blur(2vmax);\n\n    transition: ease-out 0.3s;\n}\n\n#welcomePage h1 {\n    font-size: 5vmax;\n    text-shadow: 2px 2px 20px rgba(0, 0, 0, 0.5);\n}\n\n#welcomePage h3 {\n    font-size: 4vmax;\n    background-color: rgba(240, 248, 255, 0.31);\n    box-shadow: 0px 0px 20px 30px rgba(240, 248, 255, 0.31);\n    padding: 0 1vmax;\n    border-radius: 20px;\n    display: none;\n}\n\nheader {\n    flex: 0 0 min-content;\n    font-size: 6vmax;\n    margin-bottom: 7vmin;\n    text-shadow: 2px 2px 20px rgba(0, 0, 0, 0.8);\n}\n\nbutton {\n    cursor: pointer;\n    font-size: 4vmin;\n    padding: 1vmin 2vmin;\n    border-radius: 1vmax;\n    box-shadow: 2px 2px black;\n    background-color: rgba(116, 160, 199, 0.351);\n    backdrop-filter: blur(100px);\n    transition: 0.2s;\n}\n\nbutton:hover {\n    box-shadow: 4px 4px black;\n}\n\nbutton:active {\n    box-shadow: none;\n    transform: translateX(4px) translateY(4px);\n}\n\n#gameboards {\n    flex: 1 0 60%;\n    width: 95vw;\n    display: flex;\n    flex-direction: row;\n    flex-wrap: wrap;\n    align-items: center;\n    justify-content: center;\n    overflow: hidden;\n    gap: 2%;\n}\n\n#gameboards > div {\n    flex: 0 1 fit-content;\n    height: max-content;\n    overflow: hidden;\n}\n\nh2 {\n    /* TODO: responsive */\n    text-align: center;\n    font-size: 4vmin;\n    margin: 0;\n    padding: 0;\n}\n\n.gameboard {\n    width: 30vh;\n    display: flex;\n    flex-wrap: wrap;\n    border: 2px solid rgba(0, 0, 0, 0.397);\n    opacity: 0.5;\n    pointer-events: none;\n    backdrop-filter: blur(10vmax);\n    background-color: rgba(240, 248, 255, 0.507);\n    transform: scale(0.85);\n\n    transition: 0.3s;\n    /* transition-delay: 0.3s; */\n}\n\n.active-gb {\n    pointer-events: auto;\n    opacity: 1;\n    transform: scale(1);\n}\n\n/* aside */\n\naside {\n    flex: 0 1 min-content;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap: 5%;\n    margin: 2vh 0;\n}\n\naside > * {\n    flex-basis: min-content;\n    white-space: nowrap;\n}\n\n/* grid elements */\n\n/* non-ship */\n.non {\n    flex: 0 0 10%;\n    overflow: hidden;\n    aspect-ratio: 1/1;\n    border: 2px solid rgba(0, 0, 0, 0.397);\n\n    display: flex;\n    justify-content: center;\n    align-items: center;\n\n    position: relative;\n    cursor: pointer;\n    transition: 0.4s;\n}\n\n.non > * {\n    opacity: 0;\n}\n\n.non-clicked {\n    display: flex;\n    background-color: rgba(226, 196, 196, 0.685);\n    pointer-events: none;\n}\n\n.non-clicked * {\n    opacity: 1;\n}\n\n.point {\n    width: 20%;\n    height: 20%;\n    background-color: rgb(0, 0, 0);\n    border-radius: 50%;\n    pointer-events: none;\n}\n\n/* ship */\n\n.ship {\n    flex: 0 0 10%;\n    overflow: hidden;\n    aspect-ratio: 1/1;\n    border: 2px solid rgba(0, 0, 0, 0.397);\n\n    display: flex;\n    justify-content: center;\n    align-items: center;\n\n    position: relative;\n    cursor: pointer;\n    transition: 0.4s;\n}\n\n.ship > * {\n    opacity: 0;\n}\n\n.ship-clicked {\n    background-color: rgba(240, 128, 128, 0.664);\n    pointer-events: none;\n}\n\n.ship-clicked > * {\n    opacity: 1;\n}\n\n.line {\n    width: 145%;\n    height: 10%;\n    background-color: black;\n    transform: rotate(-45deg);\n\n    position: absolute;\n    top: 45%;\n    pointer-events: none;\n}\n\n.ship > .line:first-of-type {\n    transform: rotate(45deg);\n}\n\n/* players board */\n\n.playerBoard {\n    background-color: rgba(30, 105, 105, 0.562);\n    pointer-events: none;\n}\n\n.playerBoard .ship > * {\n    opacity: 1;\n}\n\n.playerBoard .non > * {\n    opacity: 0;\n}\n\n@media all and (min-width: 600px) and (orientation: landscape) {\n    /*tablet*/\n}\n\n@media all and (min-width: 768px) {\n    /*számítógép*/\n\n    #gameboards {\n        width: 95vw;\n        gap: 2%;\n    }\n\n    .gameboard {\n        width: 30vw;\n    }\n\n    .non:hover,\n    .ship:hover {\n        background-color: rgba(27, 252, 7, 0.664);\n        transform: scale(1.2);\n        transition: 0.1s;\n    }\n}\n\n@keyframes gradient {\n    0% {\n        background-position: 0% 50%;\n    }\n    50% {\n        background-position: 100% 50%;\n    }\n    100% {\n        background-position: 0% 50%;\n    }\n}\n"],"sourceRoot":""}]);
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
    gbs[1].classList.remove('active-gb');
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFdBQVcsYUFBYSxLQUFLLFlBQVksYUFBYSxjQUFjLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxjQUFjLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsY0FBYyxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLE9BQU8sV0FBVyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxhQUFhLFdBQVcsS0FBSyxVQUFVLFlBQVksYUFBYSxjQUFjLFdBQVcsWUFBWSxjQUFjLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sV0FBVyxLQUFLLFVBQVUsWUFBWSxhQUFhLGNBQWMsV0FBVyxZQUFZLGNBQWMsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFB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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZXMuY3NzP2E4ZDAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2ZhY3RvcnlfZnVuY3Rpb25zL2J1aWxkR2FtZWJvYXJkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZmFjdG9yeV9mdW5jdGlvbnMvZ2FtZWJvYXJkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZmFjdG9yeV9mdW5jdGlvbnMvbG9nQ2xpY2suanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9mYWN0b3J5X2Z1bmN0aW9ucy9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9mYWN0b3J5X2Z1bmN0aW9ucy9zaGlwLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZnVuY3Rpb25zL2NsaWNrRmVlZGJhY2suanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9mdW5jdGlvbnMvY3B1Q2xpY2suanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9mdW5jdGlvbnMvY3B1RnVuY3Rpb25zL2NvdW50Q2xpY2tlZE5laWdoYm91cnMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9mdW5jdGlvbnMvY3B1RnVuY3Rpb25zL2dldE5laWdoYm91ckNvb3Jkcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2Z1bmN0aW9ucy9jcHVGdW5jdGlvbnMvZ2V0UmFuZG9tQ29vcmRpbmF0ZXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9mdW5jdGlvbnMvY3B1RnVuY3Rpb25zL2dldFJhbmRvbU5laWdoYm91ci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2Z1bmN0aW9ucy9jcHVGdW5jdGlvbnMvcGxheWVyQ2xpY2suanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9mdW5jdGlvbnMvY3JlYXRlL2J1aWxkR3JpZC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2Z1bmN0aW9ucy9jcmVhdGUvY3JlYXRlR3JpZEVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9mdW5jdGlvbnMvc3R5bGluZy9hZGRTdHlsaW5nR3JpZC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2Z1bmN0aW9ucy9zdHlsaW5nL3N0eWxlQ29sdW1uTmVpZ2hib3Vycy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2Z1bmN0aW9ucy9zdHlsaW5nL3N0eWxlUm93TmVpZ2hib3Vycy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcImZvbnQvQ2luemVsX0RlY29yYXRpdmUvQ2luemVsRGVjb3JhdGl2ZS1Cb2xkLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBmb250LWZhbWlseTogJ0NpbnplbCc7XFxuICAgIGNvbG9yOiByZ2JhKDIwLCAxOSwgMjAsIDAuNzUzKTtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiBDaW56ZWw7XFxuICAgIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG59XFxuXFxuYm9keSB7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIG1hcmdpbjogMDtcXG5cXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxcbiAgICAgICAgMTAwZGVnLFxcbiAgICAgICAgcmdiYSgzMCwgMTI4LCAyNDEsIDEpIDAlLFxcbiAgICAgICAgcmdiYSgzNCwgMTMzLCAyMCwgMSkgMTklLFxcbiAgICAgICAgcmdiYSgyMTMsIDE5MiwgNjQsIDEpIDM1JSxcXG4gICAgICAgIHJnYmEoMjA0LCAxNDksIDE0OSwgMSkgNTMlLFxcbiAgICAgICAgcmdiYSgxMjYsIDEwMSwgMTIzLCAxKSA3MCUsXFxuICAgICAgICByZ2JhKDc3LCAxNTcsIDE1MSwgMSkgODYlLFxcbiAgICAgICAgcmdiYSgxNywgNzUsIDEzMCwgMSkgMTAwJVxcbiAgICApO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDQwMCUgNDAwJTtcXG4gICAgLXdlYmtpdC1hbmltYXRpb246IGdyYWRpZW50IDM1cyBlYXNlIGluZmluaXRlO1xcbiAgICAgICAgICAgIGFuaW1hdGlvbjogZ3JhZGllbnQgMzVzIGVhc2UgaW5maW5pdGU7XFxuXFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbiN3ZWxjb21lUGFnZSB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDUlO1xcbiAgICAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1cigydm1heCk7XFxuICAgICAgICAgICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDJ2bWF4KTtcXG5cXG4gICAgdHJhbnNpdGlvbjogZWFzZS1vdXQgMC4zcztcXG59XFxuXFxuI3dlbGNvbWVQYWdlIGgxIHtcXG4gICAgZm9udC1zaXplOiA1dm1heDtcXG4gICAgdGV4dC1zaGFkb3c6IDJweCAycHggMjBweCByZ2JhKDAsIDAsIDAsIDAuNSk7XFxufVxcblxcbiN3ZWxjb21lUGFnZSBoMyB7XFxuICAgIGZvbnQtc2l6ZTogNHZtYXg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQwLCAyNDgsIDI1NSwgMC4zMSk7XFxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMjBweCAzMHB4IHJnYmEoMjQwLCAyNDgsIDI1NSwgMC4zMSk7XFxuICAgIHBhZGRpbmc6IDAgMXZtYXg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbmhlYWRlciB7XFxuICAgIGZsZXg6IDAgMCBtaW4tY29udGVudDtcXG4gICAgZm9udC1zaXplOiA2dm1heDtcXG4gICAgbWFyZ2luLWJvdHRvbTogN3ZtaW47XFxuICAgIHRleHQtc2hhZG93OiAycHggMnB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjgpO1xcbn1cXG5cXG5idXR0b24ge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogNHZtaW47XFxuICAgIHBhZGRpbmc6IDF2bWluIDJ2bWluO1xcbiAgICBib3JkZXItcmFkaXVzOiAxdm1heDtcXG4gICAgYm94LXNoYWRvdzogMnB4IDJweCBibGFjaztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMTYsIDE2MCwgMTk5LCAwLjM1MSk7XFxuICAgIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEwMHB4KTtcXG4gICAgICAgICAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTAwcHgpO1xcbiAgICB0cmFuc2l0aW9uOiAwLjJzO1xcbn1cXG5cXG5idXR0b246aG92ZXIge1xcbiAgICBib3gtc2hhZG93OiA0cHggNHB4IGJsYWNrO1xcbn1cXG5cXG5idXR0b246YWN0aXZlIHtcXG4gICAgYm94LXNoYWRvdzogbm9uZTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDRweCkgdHJhbnNsYXRlWSg0cHgpO1xcbn1cXG5cXG4jZ2FtZWJvYXJkcyB7XFxuICAgIGZsZXg6IDEgMCA2MCU7XFxuICAgIHdpZHRoOiA5NXZ3O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICBnYXA6IDIlO1xcbn1cXG5cXG4jZ2FtZWJvYXJkcyA+IGRpdiB7XFxuICAgIGZsZXg6IDAgMSBmaXQtY29udGVudDtcXG4gICAgaGVpZ2h0OiAtd2Via2l0LW1heC1jb250ZW50O1xcbiAgICBoZWlnaHQ6IC1tb3otbWF4LWNvbnRlbnQ7XFxuICAgIGhlaWdodDogbWF4LWNvbnRlbnQ7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbmgyIHtcXG4gICAgLyogVE9ETzogcmVzcG9uc2l2ZSAqL1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogNHZtaW47XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG59XFxuXFxuLmdhbWVib2FyZCB7XFxuICAgIHdpZHRoOiAzMHZoO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4zOTcpO1xcbiAgICBvcGFjaXR5OiAwLjU7XFxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgICAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1cigxMHZtYXgpO1xcbiAgICAgICAgICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxMHZtYXgpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0MCwgMjQ4LCAyNTUsIDAuNTA3KTtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjg1KTtcXG5cXG4gICAgdHJhbnNpdGlvbjogMC4zcztcXG4gICAgLyogdHJhbnNpdGlvbi1kZWxheTogMC4zczsgKi9cXG59XFxuXFxuLmFjdGl2ZS1nYiB7XFxuICAgIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcbn1cXG5cXG4vKiBhc2lkZSAqL1xcblxcbmFzaWRlIHtcXG4gICAgZmxleDogMCAxIG1pbi1jb250ZW50O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiA1JTtcXG4gICAgbWFyZ2luOiAydmggMDtcXG59XFxuXFxuYXNpZGUgPiAqIHtcXG4gICAgZmxleC1iYXNpczogbWluLWNvbnRlbnQ7XFxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxufVxcblxcbi8qIGdyaWQgZWxlbWVudHMgKi9cXG5cXG4vKiBub24tc2hpcCAqL1xcbi5ub24ge1xcbiAgICBmbGV4OiAwIDAgMTAlO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICBhc3BlY3QtcmF0aW86IDEvMTtcXG4gICAgYm9yZGVyOiAycHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjM5Nyk7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgdHJhbnNpdGlvbjogMC40cztcXG59XFxuXFxuLm5vbiA+ICoge1xcbiAgICBvcGFjaXR5OiAwO1xcbn1cXG5cXG4ubm9uLWNsaWNrZWQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIyNiwgMTk2LCAxOTYsIDAuNjg1KTtcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxufVxcblxcbi5ub24tY2xpY2tlZCAqIHtcXG4gICAgb3BhY2l0eTogMTtcXG59XFxuXFxuLnBvaW50IHtcXG4gICAgd2lkdGg6IDIwJTtcXG4gICAgaGVpZ2h0OiAyMCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAwLCAwKTtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG59XFxuXFxuLyogc2hpcCAqL1xcblxcbi5zaGlwIHtcXG4gICAgZmxleDogMCAwIDEwJTtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgYXNwZWN0LXJhdGlvOiAxLzE7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4zOTcpO1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHRyYW5zaXRpb246IDAuNHM7XFxufVxcblxcbi5zaGlwID4gKiB7XFxuICAgIG9wYWNpdHk6IDA7XFxufVxcblxcbi5zaGlwLWNsaWNrZWQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0MCwgMTI4LCAxMjgsIDAuNjY0KTtcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxufVxcblxcbi5zaGlwLWNsaWNrZWQgPiAqIHtcXG4gICAgb3BhY2l0eTogMTtcXG59XFxuXFxuLmxpbmUge1xcbiAgICB3aWR0aDogMTQ1JTtcXG4gICAgaGVpZ2h0OiAxMCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xcblxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogNDUlO1xcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG59XFxuXFxuLnNoaXAgPiAubGluZTpmaXJzdC1vZi10eXBlIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xcbn1cXG5cXG4vKiBwbGF5ZXJzIGJvYXJkICovXFxuXFxuLnBsYXllckJvYXJkIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgzMCwgMTA1LCAxMDUsIDAuNTYyKTtcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxufVxcblxcbi5wbGF5ZXJCb2FyZCAuc2hpcCA+ICoge1xcbiAgICBvcGFjaXR5OiAxO1xcbn1cXG5cXG4ucGxheWVyQm9hcmQgLm5vbiA+ICoge1xcbiAgICBvcGFjaXR5OiAwO1xcbn1cXG5cXG5AbWVkaWEgYWxsIGFuZCAobWluLXdpZHRoOiA2MDBweCkgYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSB7XFxuICAgIC8qdGFibGV0Ki9cXG59XFxuXFxuQG1lZGlhIGFsbCBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcXG4gICAgLypzesOhbcOtdMOzZ8OpcCovXFxuXFxuICAgICNnYW1lYm9hcmRzIHtcXG4gICAgICAgIHdpZHRoOiA5NXZ3O1xcbiAgICAgICAgZ2FwOiAyJTtcXG4gICAgfVxcblxcbiAgICAuZ2FtZWJvYXJkIHtcXG4gICAgICAgIHdpZHRoOiAzMHZ3O1xcbiAgICB9XFxuXFxuICAgIC5ub246aG92ZXIsXFxuICAgIC5zaGlwOmhvdmVyIHtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjcsIDI1MiwgNywgMC42NjQpO1xcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xcbiAgICAgICAgdHJhbnNpdGlvbjogMC4xcztcXG4gICAgfVxcbn1cXG5cXG5ALXdlYmtpdC1rZXlmcmFtZXMgZ3JhZGllbnQge1xcbiAgICAwJSB7XFxuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwJSA1MCU7XFxuICAgIH1cXG4gICAgNTAlIHtcXG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IDEwMCUgNTAlO1xcbiAgICB9XFxuICAgIDEwMCUge1xcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCUgNTAlO1xcbiAgICB9XFxufVxcblxcbkBrZXlmcmFtZXMgZ3JhZGllbnQge1xcbiAgICAwJSB7XFxuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwJSA1MCU7XFxuICAgIH1cXG4gICAgNTAlIHtcXG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IDEwMCUgNTAlO1xcbiAgICB9XFxuICAgIDEwMCUge1xcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCUgNTAlO1xcbiAgICB9XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksc0JBQXNCO0lBQ3RCLHdDQUF3QztJQUN4QyxxQkFBcUI7SUFDckIsOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLDRDQUEwRDtBQUM5RDs7QUFFQTtJQUNJLFlBQVk7SUFDWixZQUFZO0lBQ1osYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qiw4QkFBOEI7SUFDOUIsbUJBQW1CO0lBQ25CLFVBQVU7SUFDVixTQUFTOztJQUVUOzs7Ozs7Ozs7S0FTQztJQUNELDBCQUEwQjtJQUMxQiw2Q0FBcUM7WUFBckMscUNBQXFDOztJQUVyQyxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsTUFBTTtJQUNOLE9BQU87SUFDUCxhQUFhO0lBQ2IsWUFBWTtJQUNaLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNu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YUFBYTs7SUFFYjtRQUNJLFdBQVc7UUFDWCxPQUFPO0lBQ1g7O0lBRUE7UUFDSSxXQUFXO0lBQ2Y7O0lBRUE7O1FBRUkseUNBQXlDO1FBQ3pDLHFCQUFxQjtRQUNyQixnQkFBZ0I7SUFDcEI7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksMkJBQTJCO0lBQy9CO0lBQ0E7UUFDSSw2QkFBNkI7SUFDakM7SUFDQTtRQUNJLDJCQUEyQjtJQUMvQjtBQUNKOztBQVZBO0lBQ0k7UUFDSSwyQkFBMkI7SUFDL0I7SUFDQTtRQUNJLDZCQUE2QjtJQUNqQztJQUNBO1FBQ0ksMkJBQTJCO0lBQy9CO0FBQ0pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIGZvbnQtZmFtaWx5OiAnQ2luemVsJztcXG4gICAgY29sb3I6IHJnYmEoMjAsIDE5LCAyMCwgMC43NTMpO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6IENpbnplbDtcXG4gICAgc3JjOiB1cmwoZm9udC9DaW56ZWxfRGVjb3JhdGl2ZS9DaW56ZWxEZWNvcmF0aXZlLUJvbGQudHRmKTtcXG59XFxuXFxuYm9keSB7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIG1hcmdpbjogMDtcXG5cXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxcbiAgICAgICAgMTAwZGVnLFxcbiAgICAgICAgcmdiYSgzMCwgMTI4LCAyNDEsIDEpIDAlLFxcbiAgICAgICAgcmdiYSgzNCwgMTMzLCAyMCwgMSkgMTklLFxcbiAgICAgICAgcmdiYSgyMTMsIDE5MiwgNjQsIDEpIDM1JSxcXG4gICAgICAgIHJnYmEoMjA0LCAxNDksIDE0OSwgMSkgNTMlLFxcbiAgICAgICAgcmdiYSgxMjYsIDEwMSwgMTIzLCAxKSA3MCUsXFxuICAgICAgICByZ2JhKDc3LCAxNTcsIDE1MSwgMSkgODYlLFxcbiAgICAgICAgcmdiYSgxNywgNzUsIDEzMCwgMSkgMTAwJVxcbiAgICApO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDQwMCUgNDAwJTtcXG4gICAgYW5pbWF0aW9uOiBncmFkaWVudCAzNXMgZWFzZSBpbmZpbml0ZTtcXG5cXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuI3dlbGNvbWVQYWdlIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogNSU7XFxuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigydm1heCk7XFxuXFxuICAgIHRyYW5zaXRpb246IGVhc2Utb3V0IDAuM3M7XFxufVxcblxcbiN3ZWxjb21lUGFnZSBoMSB7XFxuICAgIGZvbnQtc2l6ZTogNXZtYXg7XFxuICAgIHRleHQtc2hhZG93OiAycHggMnB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjUpO1xcbn1cXG5cXG4jd2VsY29tZVBhZ2UgaDMge1xcbiAgICBmb250LXNpemU6IDR2bWF4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0MCwgMjQ4LCAyNTUsIDAuMzEpO1xcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDIwcHggMzBweCByZ2JhKDI0MCwgMjQ4LCAyNTUsIDAuMzEpO1xcbiAgICBwYWRkaW5nOiAwIDF2bWF4O1xcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgICBmbGV4OiAwIDAgbWluLWNvbnRlbnQ7XFxuICAgIGZvbnQtc2l6ZTogNnZtYXg7XFxuICAgIG1hcmdpbi1ib3R0b206IDd2bWluO1xcbiAgICB0ZXh0LXNoYWRvdzogMnB4IDJweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC44KTtcXG59XFxuXFxuYnV0dG9uIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBmb250LXNpemU6IDR2bWluO1xcbiAgICBwYWRkaW5nOiAxdm1pbiAydm1pbjtcXG4gICAgYm9yZGVyLXJhZGl1czogMXZtYXg7XFxuICAgIGJveC1zaGFkb3c6IDJweCAycHggYmxhY2s7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTE2LCAxNjAsIDE5OSwgMC4zNTEpO1xcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTAwcHgpO1xcbiAgICB0cmFuc2l0aW9uOiAwLjJzO1xcbn1cXG5cXG5idXR0b246aG92ZXIge1xcbiAgICBib3gtc2hhZG93OiA0cHggNHB4IGJsYWNrO1xcbn1cXG5cXG5idXR0b246YWN0aXZlIHtcXG4gICAgYm94LXNoYWRvdzogbm9uZTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDRweCkgdHJhbnNsYXRlWSg0cHgpO1xcbn1cXG5cXG4jZ2FtZWJvYXJkcyB7XFxuICAgIGZsZXg6IDEgMCA2MCU7XFxuICAgIHdpZHRoOiA5NXZ3O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICBnYXA6IDIlO1xcbn1cXG5cXG4jZ2FtZWJvYXJkcyA+IGRpdiB7XFxuICAgIGZsZXg6IDAgMSBmaXQtY29udGVudDtcXG4gICAgaGVpZ2h0OiBtYXgtY29udGVudDtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuaDIge1xcbiAgICAvKiBUT0RPOiByZXNwb25zaXZlICovXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiA0dm1pbjtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4uZ2FtZWJvYXJkIHtcXG4gICAgd2lkdGg6IDMwdmg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAgYm9yZGVyOiAycHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjM5Nyk7XFxuICAgIG9wYWNpdHk6IDAuNTtcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxMHZtYXgpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0MCwgMjQ4LCAyNTUsIDAuNTA3KTtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjg1KTtcXG5cXG4gICAgdHJhbnNpdGlvbjogMC4zcztcXG4gICAgLyogdHJhbnNpdGlvbi1kZWxheTogMC4zczsgKi9cXG59XFxuXFxuLmFjdGl2ZS1nYiB7XFxuICAgIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcbn1cXG5cXG4vKiBhc2lkZSAqL1xcblxcbmFzaWRlIHtcXG4gICAgZmxleDogMCAxIG1pbi1jb250ZW50O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiA1JTtcXG4gICAgbWFyZ2luOiAydmggMDtcXG59XFxuXFxuYXNpZGUgPiAqIHtcXG4gICAgZmxleC1iYXNpczogbWluLWNvbnRlbnQ7XFxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxufVxcblxcbi8qIGdyaWQgZWxlbWVudHMgKi9cXG5cXG4vKiBub24tc2hpcCAqL1xcbi5ub24ge1xcbiAgICBmbGV4OiAwIDAgMTAlO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICBhc3BlY3QtcmF0aW86IDEvMTtcXG4gICAgYm9yZGVyOiAycHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjM5Nyk7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgdHJhbnNpdGlvbjogMC40cztcXG59XFxuXFxuLm5vbiA+ICoge1xcbiAgICBvcGFjaXR5OiAwO1xcbn1cXG5cXG4ubm9uLWNsaWNrZWQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIyNiwgMTk2LCAxOTYsIDAuNjg1KTtcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxufVxcblxcbi5ub24tY2xpY2tlZCAqIHtcXG4gICAgb3BhY2l0eTogMTtcXG59XFxuXFxuLnBvaW50IHtcXG4gICAgd2lkdGg6IDIwJTtcXG4gICAgaGVpZ2h0OiAyMCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAwLCAwKTtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG59XFxuXFxuLyogc2hpcCAqL1xcblxcbi5zaGlwIHtcXG4gICAgZmxleDogMCAwIDEwJTtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgYXNwZWN0LXJhdGlvOiAxLzE7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4zOTcpO1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHRyYW5zaXRpb246IDAuNHM7XFxufVxcblxcbi5zaGlwID4gKiB7XFxuICAgIG9wYWNpdHk6IDA7XFxufVxcblxcbi5zaGlwLWNsaWNrZWQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0MCwgMTI4LCAxMjgsIDAuNjY0KTtcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxufVxcblxcbi5zaGlwLWNsaWNrZWQgPiAqIHtcXG4gICAgb3BhY2l0eTogMTtcXG59XFxuXFxuLmxpbmUge1xcbiAgICB3aWR0aDogMTQ1JTtcXG4gICAgaGVpZ2h0OiAxMCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xcblxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogNDUlO1xcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG59XFxuXFxuLnNoaXAgPiAubGluZTpmaXJzdC1vZi10eXBlIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xcbn1cXG5cXG4vKiBwbGF5ZXJzIGJvYXJkICovXFxuXFxuLnBsYXllckJvYXJkIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgzMCwgMTA1LCAxMDUsIDAuNTYyKTtcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxufVxcblxcbi5wbGF5ZXJCb2FyZCAuc2hpcCA+ICoge1xcbiAgICBvcGFjaXR5OiAxO1xcbn1cXG5cXG4ucGxheWVyQm9hcmQgLm5vbiA+ICoge1xcbiAgICBvcGFjaXR5OiAwO1xcbn1cXG5cXG5AbWVkaWEgYWxsIGFuZCAobWluLXdpZHRoOiA2MDBweCkgYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSB7XFxuICAgIC8qdGFibGV0Ki9cXG59XFxuXFxuQG1lZGlhIGFsbCBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcXG4gICAgLypzesOhbcOtdMOzZ8OpcCovXFxuXFxuICAgICNnYW1lYm9hcmRzIHtcXG4gICAgICAgIHdpZHRoOiA5NXZ3O1xcbiAgICAgICAgZ2FwOiAyJTtcXG4gICAgfVxcblxcbiAgICAuZ2FtZWJvYXJkIHtcXG4gICAgICAgIHdpZHRoOiAzMHZ3O1xcbiAgICB9XFxuXFxuICAgIC5ub246aG92ZXIsXFxuICAgIC5zaGlwOmhvdmVyIHtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjcsIDI1MiwgNywgMC42NjQpO1xcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xcbiAgICAgICAgdHJhbnNpdGlvbjogMC4xcztcXG4gICAgfVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIGdyYWRpZW50IHtcXG4gICAgMCUge1xcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCUgNTAlO1xcbiAgICB9XFxuICAgIDUwJSB7XFxuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAxMDAlIDUwJTtcXG4gICAgfVxcbiAgICAxMDAlIHtcXG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IDAlIDUwJTtcXG4gICAgfVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG5cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpOyAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBwbGF5ZXIgZnJvbSAnLi9wbGF5ZXInO1xyXG5cclxuY29uc3QgYnVpbGRHYW1lYm9hcmQgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBwID0gcGxheWVyKCk7XHJcbiAgICBwLmJ1aWxkRmxlZXQoKTtcclxuXHJcbiAgICBjb25zdCBnYW1lYm9hcmRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2dhbWVib2FyZHMnKTtcclxuICAgIGNvbnN0IGdiID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBnYi5jbGFzc0xpc3QuYWRkKCdnYW1lYm9hcmQnKTtcclxuXHJcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGRpdi5hcHBlbmRDaGlsZChnYik7XHJcbiAgICBnYW1lYm9hcmRzLmFwcGVuZENoaWxkKGRpdik7XHJcblxyXG4gICAgcmV0dXJuIHsgZ2IsIHAgfTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGJ1aWxkR2FtZWJvYXJkO1xyXG4iLCJpbXBvcnQgc2hpcCBmcm9tICcuL3NoaXAnO1xyXG5cclxuY29uc3QgZ2FtZWJvYXJkID0gKCkgPT4ge1xyXG4gICAgbGV0IG1pc3NlZFNob3RzID0gW107XHJcbiAgICBsZXQgc2hpcHMgPSBbXTtcclxuXHJcbiAgICBjb25zdCBwbGFjZVNoaXAgPSAoc2hpcCwgeCwgeSwgZGlyZWN0aW9uKSA9PiB7XHJcbiAgICAgICAgc2hpcC5wb3NpdGlvblswXSA9IHg7XHJcbiAgICAgICAgc2hpcC5wb3NpdGlvblsyXSA9IHk7XHJcbiAgICAgICAgc2hpcC5lbmRPZlNoaXAoZGlyZWN0aW9uKTtcclxuICAgICAgICBzaGlwcy5wdXNoKHNoaXApO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCByZWNlaXZlQXR0YWNrID0gKHgsIHkpID0+IHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXBzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgIHNoaXBzW2ldLnBvc2l0aW9uWzBdIDw9IHggJiZcclxuICAgICAgICAgICAgICAgIHNoaXBzW2ldLnBvc2l0aW9uWzFdID49IHggJiZcclxuICAgICAgICAgICAgICAgIHNoaXBzW2ldLnBvc2l0aW9uWzJdIDw9IHkgJiZcclxuICAgICAgICAgICAgICAgIHNoaXBzW2ldLnBvc2l0aW9uWzNdID49IHlcclxuICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoc2hpcHNbaV0ucG9zaXRpb25bMF0gPT0geCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNoaXBzW2ldLmhpdCh5IC0gc2hpcHNbaV0ucG9zaXRpb25bMl0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBzaGlwc1tpXTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2hpcHNbaV0uaGl0KHggLSBzaGlwc1tpXS5wb3NpdGlvblswXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHNoaXBzW2ldO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgbWlzc2VkU2hvdHMucHVzaCh4LCB5KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgYWxsU2hpcHNTdW5rID0gKCkgPT4ge1xyXG4gICAgICAgIGlmIChzaGlwcy5ldmVyeSgodikgPT4gdi5pc1N1bmsoKSA9PSB0cnVlKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4geyBzaGlwcywgbWlzc2VkU2hvdHMsIHBsYWNlU2hpcCwgcmVjZWl2ZUF0dGFjaywgYWxsU2hpcHNTdW5rIH07XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBnYW1lYm9hcmQ7XHJcbiIsImNvbnN0IGxvZ0NsaWNrID0gKGdiLCBnKSA9PiB7XHJcbiAgICBjb25zdCBwb3MgPSBBcnJheS5mcm9tKGdiLmNoaWxkcmVuKS5pbmRleE9mKGcpO1xyXG4gICAgbGV0IHhDb29yZDtcclxuICAgIGxldCB5Q29vcmQ7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8PSBwb3M7IGkgKz0gMTApIHtcclxuICAgICAgICB4Q29vcmQgPSBpIC8gMTA7XHJcbiAgICAgICAgeUNvb3JkID0gcG9zIC0gaTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4geyB4Q29vcmQsIHlDb29yZCB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgbG9nQ2xpY2s7XHJcbiIsImltcG9ydCBnYW1lYm9hcmQgZnJvbSAnLi9nYW1lYm9hcmQnO1xyXG5pbXBvcnQgc2hpcCBmcm9tICcuL3NoaXAnO1xyXG5cclxuY29uc3QgcGxheWVyID0gKCkgPT4ge1xyXG4gICAgY29uc3QgZ2IgPSBnYW1lYm9hcmQoKTtcclxuXHJcbiAgICBjb25zdCBzaGlwcyA9IFtdO1xyXG5cclxuICAgIGxldCBmcmVlU3BhY2VzID0gW107XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcclxuICAgICAgICBmcmVlU3BhY2VzW2ldID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCAxMDsgaisrKSB7XHJcbiAgICAgICAgICAgIGZyZWVTcGFjZXNbaV1bal0gPSBqO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBidWlsZEZsZWV0ID0gKCkgPT4ge1xyXG4gICAgICAgIHNoaXBzWzBdID0gc2hpcCg0KTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDI7IGkrKykge1xyXG4gICAgICAgICAgICBzaGlwc1tpICsgMV0gPSBzaGlwKDMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDM7IGkrKykge1xyXG4gICAgICAgICAgICBzaGlwc1tpICsgM10gPSBzaGlwKDIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDQ7IGkrKykge1xyXG4gICAgICAgICAgICBzaGlwc1tpICsgNl0gPSBzaGlwKDEpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyogcmFuZG9tIHBvc2l0aW9uLCBhbmQgd2VhdGhlciBpdCBpcyBmcmVlICovXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBjb25zdCBybmQgPSByYW5kUG9zaXRpb24oKTtcclxuICAgICAgICAgICAgdGVzdFBvc2l0aW9uKHNoaXBzW2ldLCBybmQpO1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcclxuICAgICAgICAgICAgLy8gICAgIHNoaXBzW2ldLnBvc2l0aW9uLFxyXG4gICAgICAgICAgICAvLyAgICAgcm5kLmRpcmVjdGlvblxyXG4gICAgICAgICAgICAvLyApO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgdGVzdFBvc2l0aW9uID0gKHMsIHIpID0+IHtcclxuICAgICAgICBsZXQgcGxhY2VJc0ZyZWUgPSB0cnVlO1xyXG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgcy53b3VuZHMubGVuZ3RoOyBqKyspIHtcclxuICAgICAgICAgICAgaWYgKHIuZGlyZWN0aW9uID09ICd4Jykge1xyXG4gICAgICAgICAgICAgICAgaWYgKHIucm5kWSArIHMud291bmRzLmxlbmd0aCA+IDkpIHtcclxuICAgICAgICAgICAgICAgICAgICBwbGFjZUlzRnJlZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICghZnJlZVNwYWNlc1tyLnJuZFhdLmluY2x1ZGVzKHIucm5kWSArIGopKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2VJc0ZyZWUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIGlmIChyLmRpcmVjdGlvbiA9PSAneScpIHtcclxuICAgICAgICAgICAgICAgIGlmIChyLnJuZFggKyBzLndvdW5kcy5sZW5ndGggPiA5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2VJc0ZyZWUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoIWZyZWVTcGFjZXNbci5ybmRYICsgal0uaW5jbHVkZXMoci5ybmRZKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlSXNGcmVlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHBsYWNlSXNGcmVlID09IHRydWUpIHtcclxuICAgICAgICAgICAgcGxhY2VTaGlwKHMsIHIpO1xyXG4gICAgICAgICAgICBkZWxldGVTcGFjZXMocy53b3VuZHMubGVuZ3RoLCByLnJuZFgsIHIucm5kWSwgci5kaXJlY3Rpb24pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJuZCA9IHJhbmRQb3NpdGlvbigpO1xyXG4gICAgICAgICAgICB0ZXN0UG9zaXRpb24ocywgcm5kKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IHJhbmRQb3NpdGlvbiA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCBybmRYID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xyXG4gICAgICAgIGNvbnN0IHJuZFkgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XHJcbiAgICAgICAgY29uc3QgZGlyZWN0aW9uID0gTWF0aC5yYW5kb20oKSA8IDAuNSA/ICd4JyA6ICd5JztcclxuXHJcbiAgICAgICAgcmV0dXJuIHsgcm5kWCwgcm5kWSwgZGlyZWN0aW9uIH07XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IHBsYWNlU2hpcCA9IChzLCByKSA9PiB7XHJcbiAgICAgICAgZ2IucGxhY2VTaGlwKHMsIHIucm5kWCwgci5ybmRZLCByLmRpcmVjdGlvbik7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGRlbGV0ZVNwYWNlcyA9IChsLCB4LCB5LCBkKSA9PiB7XHJcbiAgICAgICAgLyogcGxhY2UgbmVpZ2hib3VyaW5nIGdyaWQtcyAqL1xyXG4gICAgICAgIGlmIChkID09ICd4Jykge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGwgKyAyOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgMzsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHggLSAxICsgaiA8PSA5ICYmIHkgLSAxICsgaSA8PSA5ICYmIHggLSAxICsgaiA+PSAwICYmIHkgLSAxICsgaSA+PSAwICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmcmVlU3BhY2VzW3ggLSAxICsgal1beSAtIDEgKyBpXSA9ICd4JztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2UgaWYgKGQgPT0gJ3knKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbCArIDI7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCAzOyBqKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoeCAtIDEgKyBpIDw9IDkgJiYgeSAtIDEgKyBqIDw9IDkgJiYgeCAtIDEgKyBpID49IDAgJiYgeSAtIDEgKyBqID49IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZnJlZVNwYWNlc1t4IC0gMSArIGldW3kgLSAxICsgal0gPSAneCc7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKiBwbGFjZSB0aGUgc2hpcHMgKi9cclxuICAgICAgICBpZiAoZCA9PSAneCcpIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGZyZWVTcGFjZXNbeF1beSArIGldID0gYHNoaXAgJHtsfWA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2UgaWYgKGQgPT0gJ3knKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBmcmVlU3BhY2VzW3ggKyBpXVt5XSA9IGBzaGlwICR7bH1gO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGdiLFxyXG4gICAgICAgIGZyZWVTcGFjZXMsXHJcbiAgICAgICAgc2hpcHMsXHJcbiAgICAgICAgYnVpbGRGbGVldCxcclxuICAgICAgICB0ZXN0UG9zaXRpb24sXHJcbiAgICAgICAgcmFuZFBvc2l0aW9uLFxyXG4gICAgICAgIHBsYWNlU2hpcCxcclxuICAgIH07XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBwbGF5ZXI7XHJcbiIsImNvbnN0IHNoaXAgPSAobGVuZ3RoKSA9PiB7XHJcbiAgICBsZXQgd291bmRzID0gbmV3IEFycmF5KGxlbmd0aCk7XHJcbiAgICB3b3VuZHMuZmlsbCgnc2FmZScpO1xyXG5cclxuICAgIC8qIHhTdGFydCwgeEVuZCwgeVN0YXJ0LCB5RW5kICovXHJcbiAgICBsZXQgcG9zaXRpb24gPSBuZXcgQXJyYXkoNCk7XHJcbiAgICBsZXQgZCA9IG5ldyBBcnJheSgxKTtcclxuXHJcbiAgICBjb25zdCBlbmRPZlNoaXAgPSAoZGlyZWN0aW9uKSA9PiB7XHJcbiAgICAgICAgaWYgKGRpcmVjdGlvbiA9PSAneCcpIHtcclxuICAgICAgICAgICAgZFswXSA9ICd4JztcclxuICAgICAgICAgICAgcG9zaXRpb25bMV0gPSBwb3NpdGlvblswXTtcclxuICAgICAgICAgICAgcG9zaXRpb25bM10gPSBwb3NpdGlvblsyXSArIGxlbmd0aCAtIDE7XHJcbiAgICAgICAgfSBlbHNlIGlmIChkaXJlY3Rpb24gPT0gJ3knKSB7XHJcbiAgICAgICAgICAgIGRbMF0gPSAneSc7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uWzFdID0gcG9zaXRpb25bMF0gKyBsZW5ndGggLSAxO1xyXG4gICAgICAgICAgICBwb3NpdGlvblszXSA9IHBvc2l0aW9uWzJdO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgaGl0ID0gKGRtZykgPT4ge1xyXG4gICAgICAgIHdvdW5kc1tkbWddID0gJ2hpdCc7XHJcbiAgICAgICAgcmV0dXJuIHdvdW5kc1tkbWddO1xyXG4gICAgfTtcclxuICAgIGNvbnN0IGlzU3VuayA9ICgpID0+IHtcclxuICAgICAgICBpZiAod291bmRzLmV2ZXJ5KCh2KSA9PiB2ID09ICdoaXQnKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIHJldHVybiB7IHdvdW5kcywgcG9zaXRpb24sIGQsIGVuZE9mU2hpcCwgaGl0LCBpc1N1bmsgfTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHNoaXA7XHJcbiIsImltcG9ydCBsb2dDbGljayBmcm9tICcuLi9mYWN0b3J5X2Z1bmN0aW9ucy9sb2dDbGljayc7XHJcbmltcG9ydCBzdHlsZVJvd05laWdoYm91cnMgZnJvbSAnLi9zdHlsaW5nL3N0eWxlUm93TmVpZ2hib3Vycyc7XHJcbmltcG9ydCBzdHlsZUNvbHVtbk5laWdobm91cnMgZnJvbSAnLi9zdHlsaW5nL3N0eWxlQ29sdW1uTmVpZ2hib3Vycyc7XHJcblxyXG5mdW5jdGlvbiBjbGlja0ZlZWRiYWNrKHAsIGdiLCBnLCBpLCBqKSB7XHJcbiAgICBpZiAoU3RyaW5nKHAuZnJlZVNwYWNlc1tpXVtqXSkuaW5jbHVkZXMoJ3NoaXAnKSkge1xyXG4gICAgICAgIC8qIGFkZCBhcHByb3BpYXRlIHN0eWxpbmcgKi9cclxuICAgICAgICBnLmNsYXNzTGlzdC5hZGQoJ3NoaXAtY2xpY2tlZCcpO1xyXG5cclxuICAgICAgICAvKiBsb2cgdGhlIGNsaWNrcyBjb29yZGluYXRlcyAqL1xyXG4gICAgICAgIGNvbnN0IGNsaWNrID0gbG9nQ2xpY2soZ2IsIGcpO1xyXG4gICAgICAgIC8qIHBsYXkgdGhlIHJlY2VpdmVBdHRhY2sgZnVuY3Rpb24gKi9cclxuICAgICAgICBjb25zdCBzaGlwID0gcC5nYi5yZWNlaXZlQXR0YWNrKGNsaWNrLnhDb29yZCwgY2xpY2sueUNvb3JkKTtcclxuXHJcbiAgICAgICAgLyogJ2NsaWNrJyBkaWFnb25hbCAqL1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCB4biA9IHNldERpYWdvbmFsTmVpZ2hib3VyQ29vcmRzKFxyXG4gICAgICAgICAgICAgICAgaSxcclxuICAgICAgICAgICAgICAgIGNsaWNrLnhDb29yZCxcclxuICAgICAgICAgICAgICAgIGNsaWNrLnlDb29yZCxcclxuICAgICAgICAgICAgKS54O1xyXG5cclxuICAgICAgICAgICAgbGV0IHluID0gc2V0RGlhZ29uYWxOZWlnaGJvdXJDb29yZHMoXHJcbiAgICAgICAgICAgICAgICBpLFxyXG4gICAgICAgICAgICAgICAgY2xpY2sueENvb3JkLFxyXG4gICAgICAgICAgICAgICAgY2xpY2sueUNvb3JkLFxyXG4gICAgICAgICAgICApLnk7XHJcblxyXG4gICAgICAgICAgICBpZiAoeG4gPiA5IHx8IHhuIDwgMCB8fCB5biA+IDkgfHwgeW4gPCAwKSB7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBnYi5jaGlsZHJlblt4biAqIDEwICsgeW5dLmNsYXNzTGlzdC5hZGQoJ25vbi1jbGlja2VkJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qIHdoYXQgdG8gZG8sIHdoZW4gc2hpcCBpcyBzdW5rICovXHJcbiAgICAgICAgY29uc3Qgc3VuayA9IHNoaXAuaXNTdW5rKCk7XHJcbiAgICAgICAgaWYgKHN1bmsgPT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICBpZiAoc2hpcC5kWzBdID09ICd4Jykge1xyXG4gICAgICAgICAgICAgICAgc3R5bGVSb3dOZWlnaGJvdXJzKHNoaXAsIGdiKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChzaGlwLmRbMF0gPT0gJ3knKSB7XHJcbiAgICAgICAgICAgICAgICBzdHlsZUNvbHVtbk5laWdobm91cnMoc2hpcCwgZ2IpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBnLmNsYXNzTGlzdC5hZGQoJ25vbi1jbGlja2VkJyk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgd29uID0gcC5nYi5hbGxTaGlwc1N1bmsoKTtcclxuICAgIGlmICh3b24pIHtcclxuICAgICAgICBjb25zdCB3aW5uZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdoMycpO1xyXG4gICAgICAgIGlmIChnYi5jbGFzc05hbWUuaW5jbHVkZXMoJ3BsYXllckJvYXJkJykpIHtcclxuICAgICAgICAgICAgd2lubmVyLmlubmVyVGV4dCA9ICd0aGUgY3B1IHdvbic7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgd2lubmVyLmlubmVyVGV4dCA9ICd5b3Ugd29uJztcclxuICAgICAgICB9XHJcbiAgICAgICAgd2lubmVyLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG5cclxuICAgICAgICBjb25zdCBnYnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZ2FtZWJvYXJkcycpO1xyXG4gICAgICAgIGdicy5pbm5lckhUTUwgPSAnJztcclxuXHJcbiAgICAgICAgY29uc3Qgd2VsY29tZVBhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjd2VsY29tZVBhZ2UnKTtcclxuICAgICAgICB3ZWxjb21lUGFnZS5zdHlsZS50b3AgPSAnMCc7XHJcbiAgICAgICAgd2VsY29tZVBhZ2Uuc3R5bGUuYmFja2Ryb3BGaWx0ZXIgPSAnYmx1cigydm1heCknO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGlja0ZlZWRiYWNrO1xyXG5cclxuY29uc3Qgc2V0RGlhZ29uYWxOZWlnaGJvdXJDb29yZHMgPSAoaW5kZXgsIHhDb29yZCwgeUNvb3JkKSA9PiB7XHJcbiAgICBzd2l0Y2ggKGluZGV4KSB7XHJcbiAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgICB4Q29vcmQrKztcclxuICAgICAgICAgICAgeUNvb3JkKys7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgeENvb3JkKys7XHJcbiAgICAgICAgICAgIHlDb29yZC0tO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgIHhDb29yZC0tO1xyXG4gICAgICAgICAgICB5Q29vcmQrKztcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAzOlxyXG4gICAgICAgICAgICB4Q29vcmQtLTtcclxuICAgICAgICAgICAgeUNvb3JkLS07XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG5cclxuICAgIGxldCB4ID0geENvb3JkO1xyXG4gICAgbGV0IHkgPSB5Q29vcmQ7XHJcblxyXG4gICAgcmV0dXJuIHsgeCwgeSB9O1xyXG59O1xyXG4iLCJpbXBvcnQgY2xpY2tGZWVkYmFjayBmcm9tICcuL2NsaWNrRmVlZGJhY2snO1xyXG5pbXBvcnQgZ2V0UmFuZG9tQ29vcmR0aW5hdGVzIGZyb20gJy4vY3B1RnVuY3Rpb25zL2dldFJhbmRvbUNvb3JkaW5hdGVzJztcclxuaW1wb3J0IGdldFJhbmRvbU5laWdoYm91ciBmcm9tICcuL2NwdUZ1bmN0aW9ucy9nZXRSYW5kb21OZWlnaGJvdXInO1xyXG5pbXBvcnQgY291bnRDbGlja2VkTmVpZ2hib3VycyBmcm9tICcuL2NwdUZ1bmN0aW9ucy9jb3VudENsaWNrZWROZWlnaGJvdXJzJztcclxuXHJcbi8qIGNsaWNrIGNvb3JkaW5hdGVzIG9mIHRoZSBjcHUgKi9cclxubGV0IHggPSAwO1xyXG5sZXQgeSA9IDA7XHJcbi8qIHRoZSBjb29yZGluYXRlcyBvZiB0aGUgcHJldmlvdXMgY2xpY2sgb2YgdGhlIGNwdSAqL1xyXG5sZXQgeHAgPSAwO1xyXG5sZXQgeXAgPSAwO1xyXG4vKiB0aGUgZGlmZmVyZW5jZSBiZXR3ZWVuIHRoZSBwcmV2aW91cyBhbmQgdGhlIGN1cnJlbnQgY2xpY2tzIGNvb3JkaW5hdGVzICovXHJcbmxldCB2eDtcclxubGV0IHZ5O1xyXG4vKiBkZXRlcm1pbmUsIHdlYXRoZXIgdGhlIGRhbWFnZWQgc2hpcCBpcyBzaW5raW5nLCBvciBub3QgKGFscmVhZHkgc3Vuaywgb3Igbm8gc2hpcCBkYW1hZ2VkKSAqL1xyXG5sZXQgc2lua2luZyA9IGZhbHNlO1xyXG4vKiBzdG9yZXMgdGhlIG51bWJlciBvZiBjbGlja2VkIG5laWdoYm91cnMgKGZ1bmN0aW9uIHJldHVybikgKi9cclxubGV0IG51bWJlck9mQ2xpY2tlZE5laWdoYm91cnM7XHJcbi8qIHZhcmlhYmxlLCB0aGF0IHN0b3JlcyB0aGUgc2hpcHMgZGF0YXMgLSB1c2VkIHRvIGRldGVybWluZSwgd2VhdGhlciB0aGUgc2hpcCBoYXMgc3VuayBvciBub3QgLSBoYXMgYSBkZWZhdWx0IHZhbHVlIG9mIGZpcnN0IHNoaXAgKi9cclxuLy8gbGV0IGNsaWNrZWRTaGlwID0gZ2FtZWJvYXJkWzBdLnAuc2hpcHNbMF07XHJcbmxldCBjbGlja2VkU2hpcDtcclxuXHJcbmZ1bmN0aW9uIGNwdUNsaWNrKGdicywgZ2FtZWJvYXJkKSB7XHJcbiAgICBpZiAoc2lua2luZyA9PSBmYWxzZSkge1xyXG4gICAgICAgIC8qIGlmIG5vIHNoaXAgaXMgc2lua2luZywgdGhlbiBnZXQgYSByYW5kb20gY29vcmRpbmF0ZSAqL1xyXG4gICAgICAgIGxldCBudW1iID0gZ2V0UmFuZG9tQ29vcmR0aW5hdGVzKGdicyk7XHJcblxyXG4gICAgICAgIC8qIGdldCB0aGUgY29vcmRpbmF0ZXMgb2YgdGhlIGhpdCAqL1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDw9IG51bWI7IGkgKz0gMTApIHtcclxuICAgICAgICAgICAgeCA9IGkgLyAxMDtcclxuICAgICAgICAgICAgeSA9IG51bWIgLSB4ICogMTA7XHJcbiAgICAgICAgfVxyXG4gICAgfSBlbHNlIGlmIChzaW5raW5nID09IHRydWUpIHtcclxuICAgICAgICAvKiB3aGF0IHRvIGRvLCB3aGVuIHRoZSBzaGlwIGlzIGhpdCwgYnV0IG5vdCB5ZXQgc3VuayAqL1xyXG4gICAgICAgIC8qIGlmIHRoZSBsYXN0IGVsZW1lbnQgaXMgbm90IGEgc2hpcCwgYnV0IHRoZSBwcmV2aW91cyBiZWZvcmUgdGhhdCBpcyBhIHNoaXAsIHRoYW4gcmVjYWxjdWxhdGUgdGhlIG51bWJlciBvZiBjbGlja2VkIG5laWdoYm91cnMgZm9yIHRoZSBsYXN0IHNoaXAgKi9cclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICFnYnNbMF0uY2hpbGRyZW5bMTAgKiB4ICsgeV0uY2xhc3NOYW1lLmluY2x1ZGVzKCdzaGlwJykgJiZcclxuICAgICAgICAgICAgZ2JzWzBdLmNoaWxkcmVuWzEwICogeHAgKyB5cF0uY2xhc3NOYW1lLmluY2x1ZGVzKCdzaGlwJylcclxuICAgICAgICApIHtcclxuICAgICAgICAgICAgbnVtYmVyT2ZDbGlja2VkTmVpZ2hib3VycyA9IGNvdW50Q2xpY2tlZE5laWdoYm91cnMoeHAsIHlwLCBnYnMpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKG51bWJlck9mQ2xpY2tlZE5laWdoYm91cnMgPT0gNCkge1xyXG4gICAgICAgICAgICAvKiBnZXQgdGhlIG9wcG9zaXRlIGRpcmVjdGlvbiBvZiBjbGlja2luZyAqL1xyXG4gICAgICAgICAgICB2eCA9IHggLSB4cDtcclxuICAgICAgICAgICAgdnkgPSB5IC0geXA7XHJcblxyXG4gICAgICAgICAgICAvKiBnZXQgdG8gdGhlIGxhc3QgY2xpY2tlZCBzaGlwICovXHJcbiAgICAgICAgICAgIHggPSB4IC0gdng7XHJcbiAgICAgICAgICAgIHkgPSB5IC0gdnk7XHJcblxyXG4gICAgICAgICAgICAvKiB3aGlsZSB0aGUgZ3JpZCBlbGVtZW50IGlzIGNsaWNrZWQgYW5kIGlzIHNoaXAsIHN0ZXAgdG8gdGhlIG5leHQgZWxlbWVudCAoZ29pbmcgYmFja3dhcmRzKSAqL1xyXG4gICAgICAgICAgICB3aGlsZSAoXHJcbiAgICAgICAgICAgICAgICBnYnNbMF0uY2hpbGRyZW5bMTAgKiB4ICsgeV0uY2xhc3NOYW1lLmluY2x1ZGVzKCdjbGlja2VkJykgJiZcclxuICAgICAgICAgICAgICAgIGdic1swXS5jaGlsZHJlblsxMCAqIHggKyB5XS5jbGFzc05hbWUuaW5jbHVkZXMoJ3NoaXAnKVxyXG4gICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgIHggPSB4IC0gdng7XHJcbiAgICAgICAgICAgICAgICB5ID0geSAtIHZ5O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8qIGdldCBiYWNrIHRvIHRoZSBsYXN0IHNoaXAgKG90aGVyd2lzZSB0aGUgY3B1IGlzIGxvb2tpbmcgZm9yIGEgZnJlZSBuZWlnaGJvdXIgb2YgYW4gdW5jbGlja2VkIHNoaXApICovXHJcbiAgICAgICAgICAgIHggPSB4ICsgdng7XHJcbiAgICAgICAgICAgIHkgPSB5ICsgdnk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKiBpZiB0aGUgbGFzdCBlbGVtZW50IGlzIG5vdCBhIHNoaXAgKHRoZSBzZWxlY3RlZCBuZWlnaGJvdXIgaXMgbm90IGEgc2hpcCksIHRoZW4gZ28gYmFjayB0byB0aGUgbGFzdCBzaGlwICovXHJcbiAgICAgICAgaWYgKCFnYnNbMF0uY2hpbGRyZW5bMTAgKiB4ICsgeV0uY2xhc3NOYW1lLmluY2x1ZGVzKCdzaGlwJykpIHtcclxuICAgICAgICAgICAgeCA9IHhwO1xyXG4gICAgICAgICAgICB5ID0geXA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKiBnZXQgYSByYW5kb20gbmVpZ2hib3VyIG9mIHRoZSBzZWxlY3RlZCBlbGVtZW50LCB0aGF0IGlzIG5vdCBjbGlja2VkICovXHJcbiAgICAgICAgY29uc3QgbmVpZ2hib3VyID0gZ2V0UmFuZG9tTmVpZ2hib3VyKHgsIHksIGdicyk7XHJcblxyXG4gICAgICAgIC8qIGxvZyB0aGUgcHJldmlvdXMgY2xpY2ssIGFuZCB0aGUgbmV3ICovXHJcbiAgICAgICAgeHAgPSB4O1xyXG4gICAgICAgIHlwID0geTtcclxuICAgICAgICB4ID0gbmVpZ2hib3VyLnhuO1xyXG4gICAgICAgIHkgPSBuZWlnaGJvdXIueW47XHJcbiAgICB9XHJcblxyXG4gICAgLyogbG9vayBmb3IgdGhlIGNsaWNrZWQgc2hpcCAoaWYgYW55KSBpbiB0aGUgZmFjdG9yeSBmdW5jdGlvbnMgKi9cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgICAgZ2FtZWJvYXJkWzBdLnAuc2hpcHNbaV0ucG9zaXRpb25bMF0gPD0geCAmJlxyXG4gICAgICAgICAgICBnYW1lYm9hcmRbMF0ucC5zaGlwc1tpXS5wb3NpdGlvblsxXSA+PSB4ICYmXHJcbiAgICAgICAgICAgIGdhbWVib2FyZFswXS5wLnNoaXBzW2ldLnBvc2l0aW9uWzJdIDw9IHkgJiZcclxuICAgICAgICAgICAgZ2FtZWJvYXJkWzBdLnAuc2hpcHNbaV0ucG9zaXRpb25bM10gPj0geVxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgICBjbGlja2VkU2hpcCA9IGdhbWVib2FyZFswXS5wLnNoaXBzW2ldO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKiBpbml0aWF0ZSB0aGUgRE9NIGZlZWRiYWNrIG9mIHRoZSAnY2xpY2snICovXHJcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGNsaWNrRmVlZGJhY2soZ2FtZWJvYXJkWzBdLnAsIGdic1swXSwgZ2JzWzBdLmNoaWxkcmVuWzEwICogeCArIHldLCB4LCB5KTtcclxuXHJcbiAgICAgICAgLyogY291bnQgdGhlIGNsaWNrZWQgbmVpZ2hib3VycyBvZiB0aGUgY2xpY2sgKi9cclxuICAgICAgICBudW1iZXJPZkNsaWNrZWROZWlnaGJvdXJzID0gY291bnRDbGlja2VkTmVpZ2hib3Vycyh4LCB5LCBnYnMpO1xyXG4gICAgXHJcbiAgICAgICAgLyogaWYgdGhlIGNsaWNrIGhpdCwgdGhlbiBjYWxsIGZvciB0aGlzIGZ1bmN0aW9uICdjbGljaycgYWdhaW4gKi9cclxuICAgICAgICBpZiAoZ2JzWzBdLmNoaWxkcmVuWzEwICogeCArIHldLmNsYXNzTmFtZS5pbmNsdWRlcygnc2hpcCcpKSB7XHJcbiAgICAgICAgICAgIC8qIGRldGVybWluZSwgd2VhdGhlciB0aGUgY2xpY2sgc3VuayBhIHNoaXAsIG9yIG5vdCAqL1xyXG4gICAgICAgICAgICBpZiAoY2xpY2tlZFNoaXAuaXNTdW5rKCkgPT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgc2lua2luZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgc2lua2luZyA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY3B1Q2xpY2soZ2JzLCBnYW1lYm9hcmQpO1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgIFxyXG4gICAgICAgICAgICB9LCA1MDApO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAvKiBpZiB0aGUgY2xpY2sgZGlkbid0IGhpdCwgdGhlbiB0aGUgcGxheWVyJ3MgdHVybiBjb21lcyAqL1xyXG4gICAgICAgICAgICAgICAgZ2JzWzBdLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZS1nYicpO1xyXG4gICAgICAgICAgICAgICAgZ2JzWzFdLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZS1nYicpO1xyXG4gICAgICAgICAgICB9LCA1MDApO1xyXG4gICAgICAgIH1cclxuICAgIH0sIDUwMCk7XHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjcHVDbGljaztcclxuIiwiaW1wb3J0IGdldE5laWdoYm91ckNvb3JkcyBmcm9tICcuL2dldE5laWdoYm91ckNvb3Jkcyc7XHJcblxyXG4vKiBjaGVjayB0aGUgbmVpZ2hib3VyczogbG9nIHRoZSBudW1iZXIgb2Ygbm9uLWNsaWNrZWQgbmVpZ2hib3VycyAobm8gbmVpZ2hib3VyIGlzIGNvdW50ZWQpICovXHJcbmZ1bmN0aW9uIGNvdW50Q2xpY2tlZE5laWdoYm91cnMoeCwgeSwgZ2JzKSB7XHJcbiAgICBsZXQgY2xpY2tlZE5laWdoYm91cnMgPSAwO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCA0OyBpKyspIHtcclxuICAgICAgICBjb25zdCBuZWlnaGJvdXIgPSBnZXROZWlnaGJvdXJDb29yZHMoaSwgeCwgeSk7XHJcbiAgICAgICAgbGV0IHhuID0gbmVpZ2hib3VyLng7XHJcbiAgICAgICAgbGV0IHluID0gbmVpZ2hib3VyLnk7XHJcblxyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgICAgeG4gPiA5IHx8XHJcbiAgICAgICAgICAgIHhuIDwgMCB8fFxyXG4gICAgICAgICAgICB5biA+IDkgfHxcclxuICAgICAgICAgICAgeW4gPCAwIHx8XHJcbiAgICAgICAgICAgIGdic1swXS5jaGlsZHJlblsxMCAqIHhuICsgeW5dLmNsYXNzTmFtZS5pbmNsdWRlcygnY2xpY2tlZCcpXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIGNsaWNrZWROZWlnaGJvdXJzKys7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGNsaWNrZWROZWlnaGJvdXJzO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb3VudENsaWNrZWROZWlnaGJvdXJzO1xyXG4iLCIvKiBnZXQgdGhlIGNvb3JkaW5hdGVzIG9mIHRoZSByYW5kb21seSBzZWxlY3RlZCBuZWlnaGJvdXIgKi9cclxuY29uc3QgZ2V0TmVpZ2hib3VyQ29vcmRzID0gKGluZGV4LCB4Q29vcmQsIHlDb29yZCkgPT4ge1xyXG4gICAgc3dpdGNoIChpbmRleCkge1xyXG4gICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgeENvb3JkKys7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgeENvb3JkLS07XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgeUNvb3JkKys7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgMzpcclxuICAgICAgICAgICAgeUNvb3JkLS07XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG5cclxuICAgIGxldCB4ID0geENvb3JkO1xyXG4gICAgbGV0IHkgPSB5Q29vcmQ7XHJcblxyXG4gICAgcmV0dXJuIHsgeCwgeSB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZ2V0TmVpZ2hib3VyQ29vcmRzO1xyXG4iLCIvKiBnZXQgYSByYW5kb20gY29vcmRpbmF0ZSBvZiB0aGUgZ3JpZDogaWYgaXQgaGFzIGJlZW4gY2xpY2tlZCBwcmV2aW91c2x5LCBnZXQgYW5vdGhlciBvbmUgKi9cclxuZnVuY3Rpb24gZ2V0UmFuZG9tQ29vcmR0aW5hdGVzKGdicykge1xyXG4gICAgY29uc3Qgcm5kWCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcclxuICAgIGNvbnN0IHJuZFkgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XHJcbiAgICBsZXQgbnVtYiA9IDEwICogcm5kWCArIHJuZFk7XHJcblxyXG4gICAgaWYgKGdic1swXS5jaGlsZHJlbltudW1iXS5jbGFzc05hbWUuaW5jbHVkZXMoJ2NsaWNrZWQnKSkge1xyXG4gICAgICAgIG51bWIgPSBnZXRSYW5kb21Db29yZHRpbmF0ZXMoZ2JzKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gbnVtYjtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZ2V0UmFuZG9tQ29vcmR0aW5hdGVzO1xyXG4iLCJpbXBvcnQgZ2V0TmVpZ2hib3VyQ29vcmRzIGZyb20gJy4vZ2V0TmVpZ2hib3VyQ29vcmRzJztcclxuXHJcbi8qIGdldCBhIHJhbmRvbSBuZWlnaGJvdXI6IGlmIGl0IGhhcyBiZWVuIGFscmVhZHkgY2xpY2tlZCwgb3IgaXQgaXMgb3V0IG9mIHRoZSBncmlkLCB0aGVuIHNlbGVjdCBhbm90aGVyIG9uZSAqL1xyXG5jb25zdCBnZXRSYW5kb21OZWlnaGJvdXIgPSAocm5kWCwgcm5kWSwgZ2JzKSA9PiB7XHJcbiAgICBsZXQgciA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDQpO1xyXG5cclxuICAgIGNvbnN0IG5laWdoYm91ciA9IGdldE5laWdoYm91ckNvb3JkcyhyLCBybmRYLCBybmRZKTtcclxuICAgIGxldCB4biA9IG5laWdoYm91ci54O1xyXG4gICAgbGV0IHluID0gbmVpZ2hib3VyLnk7XHJcblxyXG4gICAgaWYgKFxyXG4gICAgICAgIHhuID4gOSB8fFxyXG4gICAgICAgIHhuIDwgMCB8fFxyXG4gICAgICAgIHluID4gOSB8fFxyXG4gICAgICAgIHluIDwgMCB8fFxyXG4gICAgICAgIGdic1swXS5jaGlsZHJlblt4biAqIDEwICsgeW5dLmNsYXNzTmFtZS5pbmNsdWRlcygnY2xpY2tlZCcpXHJcbiAgICApIHtcclxuICAgICAgICBsZXQgbmVpZ2hib3VyID0gZ2V0UmFuZG9tTmVpZ2hib3VyKHJuZFgsIHJuZFksIGdicyk7XHJcbiAgICAgICAgeG4gPSBuZWlnaGJvdXIueG47XHJcbiAgICAgICAgeW4gPSBuZWlnaGJvdXIueW47XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHsgeG4sIHluIH07XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBnZXRSYW5kb21OZWlnaGJvdXI7XHJcbiIsImltcG9ydCBjbGlja0ZlZWRiYWNrIGZyb20gXCIuLi9jbGlja0ZlZWRiYWNrXCI7XHJcbmltcG9ydCBjcHVDbGljayBmcm9tIFwiLi4vY3B1Q2xpY2tcIjtcclxuXHJcbi8qIGNsaWNrIGNvb3JkaW5hdGVzIG9mIHRoZSBwbGF5ZXIgKi9cclxubGV0IHhQbGF5ZXI7XHJcbmxldCB5UExheWVyO1xyXG5cclxuZnVuY3Rpb24gcGxheWVyQ2xpY2soZSwgZ2FtZWJvYXJkLCBnYnMpIHtcclxuICAgIC8qIGdldCB0aGUgbnVtYmVyIG9mIHRoZSBjbGljayAqL1xyXG4gICAgbGV0IG51bWIgPSBBcnJheS5mcm9tKGdic1sxXS5jaGlsZHJlbikuaW5kZXhPZihlLnRhcmdldCk7XHJcblxyXG4gICAgLyogZ2V0IHRoZSBjb29yZGluYXRlcyAqL1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPD0gbnVtYjsgaSArPSAxMCkge1xyXG4gICAgICAgIHhQbGF5ZXIgPSBpIC8gMTA7XHJcbiAgICAgICAgeVBMYXllciA9IG51bWIgLSB4UGxheWVyICogMTA7XHJcbiAgICB9XHJcbiAgICAvKiBnZXQgdGhlIERPTSBmZWVkYmFjayAqL1xyXG4gICAgY2xpY2tGZWVkYmFjayhnYW1lYm9hcmRbMV0ucCwgZ2JzWzFdLCBlLnRhcmdldCwgeFBsYXllciwgeVBMYXllcik7XHJcblxyXG4gICAgLyogaWYgdGhlIGNsaWNrIGRpZG4ndCBoaXQsIHRoZW4gdGhlIGNwdSBjb21lcyAqL1xyXG4gICAgaWYgKCFlLnRhcmdldC5jbGFzc05hbWUuaW5jbHVkZXMoJ3NoaXAnKSkge1xyXG4gICAgICAgIGdic1swXS5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUtZ2InKTtcclxuICAgICAgICBnYnNbMV0uY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlLWdiJyk7XHJcblxyXG4gICAgICAgIGNwdUNsaWNrKGdicywgZ2FtZWJvYXJkKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcGxheWVyQ2xpY2s7IiwiaW1wb3J0IGNyZWF0ZUdyaWRFbGVtZW50IGZyb20gJy4vY3JlYXRlR3JpZEVsZW1lbnQnO1xyXG5pbXBvcnQgYWRkU3R5bGluZ0dyaWQgZnJvbSAnLi4vc3R5bGluZy9hZGRTdHlsaW5nR3JpZCc7XHJcblxyXG5mdW5jdGlvbiBidWlsZEdyaWQoZ2IsIHApIHtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xyXG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgMTA7IGorKykge1xyXG4gICAgICAgICAgICAvKiBjcmVhdGUgZ3JpZCBlbGVtZW50cyAqL1xyXG4gICAgICAgICAgICBjb25zdCBnID0gY3JlYXRlR3JpZEVsZW1lbnQoZ2IpO1xyXG4gICAgICAgICAgICBhZGRTdHlsaW5nR3JpZChwLCBnLCBpLCBqKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGJ1aWxkR3JpZDtcclxuIiwiZnVuY3Rpb24gY3JlYXRlR3JpZEVsZW1lbnQoZ2IpIHtcclxuICAgIGNvbnN0IGcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIC8vIGcuY2xhc3NMaXN0LmFkZCgnZ3JpZCcpO1xyXG4gICAgZ2IuYXBwZW5kQ2hpbGQoZyk7XHJcbiAgICByZXR1cm4gZztcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlR3JpZEVsZW1lbnQ7IiwiZnVuY3Rpb24gYWRkU3R5bGluZ0dyaWQocCwgZywgaSwgaikge1xyXG4gICAgaWYgKFN0cmluZyhwLmZyZWVTcGFjZXNbaV1bal0pLmluY2x1ZGVzKCdzaGlwJykpIHtcclxuICAgICAgICBjb25zdCBsaW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgY29uc3QgbGluZTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBsaW5lLmNsYXNzTGlzdC5hZGQoJ2xpbmUnKTtcclxuICAgICAgICBsaW5lMi5jbGFzc0xpc3QuYWRkKCdsaW5lJyk7XHJcblxyXG4gICAgICAgIGcuYXBwZW5kKGxpbmUsIGxpbmUyKTtcclxuICAgICAgICBnLmNsYXNzTGlzdC5hZGQoJ3NoaXAnKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc3QgcG9pbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBwb2ludC5jbGFzc0xpc3QuYWRkKCdwb2ludCcpO1xyXG5cclxuICAgICAgICBnLmFwcGVuZENoaWxkKHBvaW50KTtcclxuICAgICAgICBnLmNsYXNzTGlzdC5hZGQoJ25vbicpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhZGRTdHlsaW5nR3JpZDtcclxuIiwiZnVuY3Rpb24gc3R5bGVDb2x1bW5OZWlnaG5vdXJzKHNoaXAsIGdiKSB7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXAud291bmRzLmxlbmd0aCArIDI7IGkrKykge1xyXG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgMzsgaisrKSB7XHJcbiAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgIHNoaXAucG9zaXRpb25bMF0gLSAxICsgaSA8PSA5ICYmXHJcbiAgICAgICAgICAgICAgICBzaGlwLnBvc2l0aW9uWzJdIC0gMSArIGogPD0gOSAmJlxyXG4gICAgICAgICAgICAgICAgc2hpcC5wb3NpdGlvblswXSAtIDEgKyBpID49IDAgJiZcclxuICAgICAgICAgICAgICAgIHNoaXAucG9zaXRpb25bMl0gLSAxICsgaiA+PSAwICYmXHJcbiAgICAgICAgICAgICAgICAhZ2IuY2hpbGRyZW5bXHJcbiAgICAgICAgICAgICAgICAgICAgKHNoaXAucG9zaXRpb25bMF0gLSAxICsgaSkgKiAxMCArIHNoaXAucG9zaXRpb25bMl0gLSAxICsgalxyXG4gICAgICAgICAgICAgICAgXS5jbGFzc05hbWUuaW5jbHVkZXMoJ3NoaXAnKVxyXG4gICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgIC8vIGZyZWVTcGFjZXNbeCAtIDEgKyBpXVt5IC0gMSArIGpdID0gJ3gnO1xyXG4gICAgICAgICAgICAgICAgZ2IuY2hpbGRyZW5bXHJcbiAgICAgICAgICAgICAgICAgICAgKHNoaXAucG9zaXRpb25bMF0gLSAxICsgaSkgKiAxMCArIHNoaXAucG9zaXRpb25bMl0gLSAxICsgalxyXG4gICAgICAgICAgICAgICAgXS5jbGFzc0xpc3QuYWRkKCdub24tY2xpY2tlZCcpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBzdHlsZUNvbHVtbk5laWdobm91cnM7IiwiZnVuY3Rpb24gc3R5bGVSb3dOZWlnaGJvdXJzKHNoaXAsIGdiKSB7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXAud291bmRzLmxlbmd0aCArIDI7IGkrKykge1xyXG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgMzsgaisrKSB7XHJcbiAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgIHNoaXAucG9zaXRpb25bMF0gLSAxICsgaiA8PSA5ICYmXHJcbiAgICAgICAgICAgICAgICBzaGlwLnBvc2l0aW9uWzJdIC0gMSArIGkgPD0gOSAmJlxyXG4gICAgICAgICAgICAgICAgc2hpcC5wb3NpdGlvblswXSAtIDEgKyBqID49IDAgJiZcclxuICAgICAgICAgICAgICAgIHNoaXAucG9zaXRpb25bMl0gLSAxICsgaSA+PSAwICYmXHJcbiAgICAgICAgICAgICAgICAhZ2IuY2hpbGRyZW5bXHJcbiAgICAgICAgICAgICAgICAgICAgKHNoaXAucG9zaXRpb25bMF0gLSAxICsgaikgKiAxMCArIHNoaXAucG9zaXRpb25bMl0gLSAxICsgaVxyXG4gICAgICAgICAgICAgICAgXS5jbGFzc05hbWUuaW5jbHVkZXMoJ3NoaXAnKVxyXG4gICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgIGdiLmNoaWxkcmVuW1xyXG4gICAgICAgICAgICAgICAgICAgIChzaGlwLnBvc2l0aW9uWzBdIC0gMSArIGopICogMTAgKyBzaGlwLnBvc2l0aW9uWzJdIC0gMSArIGlcclxuICAgICAgICAgICAgICAgIF0uY2xhc3NMaXN0LmFkZCgnbm9uLWNsaWNrZWQnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgc3R5bGVSb3dOZWlnaGJvdXJzO1xyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlcy5jc3MnO1xyXG5pbXBvcnQgYnVpbGRHYW1lYm9hcmQgZnJvbSAnLi9mYWN0b3J5X2Z1bmN0aW9ucy9idWlsZEdhbWVib2FyZCc7XHJcbmltcG9ydCBidWlsZEdyaWQgZnJvbSAnLi9mdW5jdGlvbnMvY3JlYXRlL2J1aWxkR3JpZCc7XHJcbmltcG9ydCBwbGF5ZXJDbGljayBmcm9tICcuL2Z1bmN0aW9ucy9jcHVGdW5jdGlvbnMvcGxheWVyQ2xpY2snO1xyXG5cclxuZnVuY3Rpb24gZ2VuZXJhdGVQbGF5Z3JvdW5kKCkge1xyXG4gICAgLyogYnVpbGQgdGhlIHR3byBnYW1lYm9hcmQgZm9yIHRoZSB0aGUgcGxheWVyLCBhbmQgc3RvcmUgdGhlIGdhbWVib2FyZCAqL1xyXG4gICAgY29uc3QgZ2FtZWJvYXJkID0gW107XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDI7IGkrKykge1xyXG4gICAgICAgIGNvbnN0IGIgPSBidWlsZEdhbWVib2FyZCgpO1xyXG4gICAgICAgIGJ1aWxkR3JpZChiLmdiLCBiLnApO1xyXG5cclxuICAgICAgICBnYW1lYm9hcmRbaV0gPSBiO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGdicyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5nYW1lYm9hcmQnKTtcclxuICAgIC8qIHRoZSBwbGF5ZXIgc3RhcnRzIGF0dGFja2luZyAqL1xyXG4gICAgZ2JzWzBdLmNsYXNzTGlzdC5hZGQoJ3BsYXllckJvYXJkJyk7XHJcblxyXG4gICAgY29uc3Qgc3RhcnRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc3RhcnQnKTtcclxuICAgIHN0YXJ0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXHJcbiAgICAgICAgJ2NsaWNrJyxcclxuICAgICAgICAoKSA9PiB7XHJcbiAgICAgICAgICAgIGdic1sxXS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUtZ2InKTtcclxuICAgICAgICAgICAgc3RhcnRCdXR0b24uc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICAgICAgY29uc3QgZ2VuZXJhdGVCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZ2VuZXJhdGUnKTtcclxuICAgICAgICAgICAgZ2VuZXJhdGVCdXR0b24uc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICB9LFxyXG4gICAgICAgIHsgb25jZTogdHJ1ZSB9LFxyXG4gICAgKTtcclxuXHJcbiAgICBjb25zdCBwbGF5ZXJCb2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNnYW1lYm9hcmRzID4gZGl2OmZpcnN0LWNoaWxkJyk7XHJcbiAgICBjb25zdCBwbGF5ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xyXG4gICAgcGxheWVyLmlubmVyVGV4dCA9IFwicGxheWVyJ3MgYm9hcmRcIjtcclxuXHJcbiAgICBjb25zdCBjcHVCb2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNnYW1lYm9hcmRzID4gZGl2Om50aC1jaGlsZCgyKScpO1xyXG4gICAgY29uc3QgY3B1ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcclxuICAgIGNwdS5pbm5lclRleHQgPSBcImNwdSdzIGJvYXJkXCI7XHJcbiAgICBwbGF5ZXJCb2FyZC5pbnNlcnRCZWZvcmUocGxheWVyLCBnYnNbMF0pO1xyXG4gICAgY3B1Qm9hcmQuaW5zZXJ0QmVmb3JlKGNwdSwgZ2JzWzFdKTtcclxuXHJcbiAgICAvKiBzb21laG93IG9ubHkgZ2l2aW5nIHRoZSBlbmVteXMgcGxheWVyYm9hcmQgY2xpY2sgZXZlbnQgcmVzdWx0cyBpbiBhIGJ1ZyAqL1xyXG4gICAgZ2JzLmZvckVhY2goKGIpID0+IHtcclxuICAgICAgICBBcnJheS5mcm9tKGIuY2hpbGRyZW4pLmZvckVhY2goKGcpID0+IHtcclxuICAgICAgICAgICAgZy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZ2JzWzFdLmNsYXNzTmFtZS5pbmNsdWRlcygnYWN0aXZlJykpIHtcclxuICAgICAgICAgICAgICAgICAgICBwbGF5ZXJDbGljayhlLCBnYW1lYm9hcmQsIGdicyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNsZWFyUExheWdyb3VuZCgpIHtcclxuICAgIGNvbnN0IGdiID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2dhbWVib2FyZHMnKTtcclxuICAgIGdiLmlubmVySFRNTCA9ICcnO1xyXG59XHJcblxyXG4vLyBnZW5lcmF0ZVBsYXlncm91bmQoKTtcclxuXHJcbmNvbnN0IGdlbmVyYXRlQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2dlbmVyYXRlJyk7XHJcbmdlbmVyYXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgY2xlYXJQTGF5Z3JvdW5kKCk7XHJcbiAgICBnZW5lcmF0ZVBsYXlncm91bmQoKTtcclxufSk7XHJcblxyXG5jb25zdCBuZXdHYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25ld0dhbWUnKTtcclxubmV3R2FtZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIGNsZWFyUExheWdyb3VuZCgpO1xyXG4gICAgZ2VuZXJhdGVQbGF5Z3JvdW5kKCk7XHJcblxyXG4gICAgY29uc3Qgd2VsY29tZVBhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjd2VsY29tZVBhZ2UnKTtcclxuICAgIC8vIG5ld0dhbWUuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgd2VsY29tZVBhZ2Uuc3R5bGUudG9wID0gJzEwMHZoJztcclxuICAgIHdlbGNvbWVQYWdlLnN0eWxlLmJhY2tkcm9wRmlsdGVyID0gJ2JsdXIoMHB4KSc7XHJcblxyXG4gICAgY29uc3Qgc3RhcnRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc3RhcnQnKTtcclxuICAgIHN0YXJ0QnV0dG9uLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgY29uc3QgZ2VuZXJhdGVCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZ2VuZXJhdGUnKTtcclxuICAgIGdlbmVyYXRlQnV0dG9uLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG5cclxuICAgIGNvbnN0IGdicyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5nYW1lYm9hcmQnKTtcclxuICAgIGdic1swXS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUtZ2InKTtcclxuICAgIGdic1sxXS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUtZ2InKTtcclxufSk7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==