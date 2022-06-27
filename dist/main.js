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
___CSS_LOADER_EXPORT___.push([module.id, "* {\n    box-sizing: border-box;\n    -webkit-tap-highlight-color: transparent;\n    font-family: 'Cinzel';\n    color: rgba(20, 19, 20, 0.753);\n}\n\n@font-face {\n    font-family: Cinzel;\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n}\n\nhtml {\n    height: 100%;\n}\n\nbody {\n    height: 100%;\n    width: 100vw;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    align-items: center;\n    padding: 0;\n    margin: 0;\n\n    background: linear-gradient(\n        100deg,\n        rgba(30, 128, 241, 1) 0%,\n        rgba(34, 133, 20, 1) 19%,\n        rgba(213, 192, 64, 1) 35%,\n        rgba(204, 149, 149, 1) 53%,\n        rgba(126, 101, 123, 1) 70%,\n        rgba(77, 157, 151, 1) 86%,\n        rgba(17, 75, 130, 1) 100%\n    );\n    background-size: 400% 400%;\n    -webkit-animation: gradient 35s ease infinite;\n            animation: gradient 35s ease infinite;\n\n    overflow: hidden;\n}\n\n#welcomePage {\n    position: absolute;\n    top: 0;\n    left: 0;\n    height: 100vh;\n    width: 100vw;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    gap: 5%;\n    -webkit-backdrop-filter: blur(2vmax);\n            backdrop-filter: blur(2vmax);\n    overflow: hidden;\n\n    transition: ease-out 0.3s;\n}\n\n#welcomePage h1 {\n    font-size: 5vmax;\n    text-shadow: 2px 2px 20px rgba(0, 0, 0, 0.5);\n}\n\n#welcomePage h3 {\n    font-size: 4vmax;\n    background-color: rgba(240, 248, 255, 0.31);\n    box-shadow: 0px 0px 20px 30px rgba(240, 248, 255, 0.31);\n    padding: 0 1vmax;\n    border-radius: 20px;\n    display: none;\n}\n\nheader {\n    flex: 0 1 min-content;\n    font-size: 5vmax;\n    overflow: hidden;\n}\n\nbutton {\n    cursor: pointer;\n    font-size: 3.5vmin;\n    padding: 0 1vmin;\n    border-radius: 1vmax;\n    box-shadow: 2px 2px black;\n    background-color: rgba(116, 160, 199, 0.351);\n    -webkit-backdrop-filter: blur(100px);\n            backdrop-filter: blur(100px);\n    transition: 0.2s;\n}\n\nbutton:hover {\n    box-shadow: 4px 4px black;\n}\n\nbutton:active {\n    box-shadow: none;\n    transform: translateX(4px) translateY(4px);\n}\n\n#gameboards {\n    flex: 0 1 80%;\n    width: 95vw;\n    display: flex;\n    flex-direction: row;\n    flex-wrap: wrap;\n    align-items: center;\n    justify-content: center;\n    gap: 2%;\n}\n\n#gameboards > div {\n    flex: 0 1 100%;\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    align-items: center;\n    flex-wrap: wrap;\n}\n\nh2 {\n    flex: 0 0 100%;\n    text-align: center;\n    font-size: 4vmin;\n    margin: 0;\n    padding: 0;\n}\n\n.gameboard {\n    flex: 0 1 35vh;\n    aspect-ratio: 1/1;\n    max-height: 35vh;\n    display: flex;\n    flex-wrap: wrap;\n    border: 2px solid rgba(0, 0, 0, 0.397);\n    opacity: 0.5;\n    pointer-events: none;\n    -webkit-backdrop-filter: blur(10vmax);\n            backdrop-filter: blur(10vmax);\n    background-color: rgba(26, 117, 197, 0.664);\n    transform: scale(0.85);\n\n    transition: 0.3s;\n}\n\n.active-gb {\n    pointer-events: auto;\n    opacity: 1;\n    transform: scale(1);\n}\n\n/* aside */\n\naside {\n    flex: 0 0 min-content;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap: 5%;\n    margin: 2vh 0;\n}\n\naside > * {\n    flex-basis: min-content;\n    white-space: nowrap;\n}\n\n/* grid elements */\n\n/* non-ship */\n.non {\n    flex: 0 0 10%;\n    height: 10%;\n    overflow: hidden;\n    /* aspect-ratio: 1/1; */\n    border: 2px solid rgba(0, 0, 0, 0.397);\n\n    display: flex;\n    justify-content: center;\n    align-items: center;\n\n    position: relative;\n    cursor: pointer;\n    transition: 0.4s;\n}\n\n.non > * {\n    opacity: 0;\n}\n\n.non-clicked {\n    display: flex;\n    background-color: rgba(226, 196, 196, 0.685);\n    pointer-events: none;\n}\n\n.non-clicked * {\n    opacity: 1;\n}\n\n.point {\n    width: 20%;\n    height: 20%;\n    background-color: rgb(0, 0, 0);\n    border-radius: 50%;\n    pointer-events: none;\n}\n\n/* ship */\n\n.ship {\n    flex: 0 0 10%;\n    overflow: hidden;\n    /* aspect-ratio: 1/1; */\n    height: 10%;\n    border: 2px solid rgba(0, 0, 0, 0.397);\n\n    display: flex;\n    justify-content: center;\n    align-items: center;\n\n    position: relative;\n    cursor: pointer;\n    transition: 0.4s;\n}\n\n.ship > * {\n    opacity: 0;\n}\n\n.ship-clicked {\n    background-color: rgba(240, 128, 128, 0.664);\n    pointer-events: none;\n}\n\n.ship-clicked > * {\n    opacity: 1;\n}\n\n.line {\n    width: 145%;\n    height: 10%;\n    background-color: black;\n    transform: rotate(-45deg);\n\n    position: absolute;\n    top: 45%;\n    pointer-events: none;\n}\n\n.ship > .line:first-of-type {\n    transform: rotate(45deg);\n}\n\n/* players board */\n\n.playerBoard {\n    background-color: rgba(30, 105, 105, 0.562);\n    pointer-events: none;\n}\n\n.playerBoard .ship > * {\n    opacity: 1;\n}\n\n.playerBoard .non > * {\n    opacity: 0;\n}\n\n@media (orientation: landscape) {\n    #gameboards > div {\n        flex-basis: 49%;\n    }\n\n    .gameboard {\n        flex-basis: 50vh;\n        max-height: 50vh;\n    }\n}\n\n@media (hover: hover) and (pointer: fine) {\n    .non:hover,\n    .ship:hover {\n        background-color: rgba(40, 95, 35, 0.664);\n        transform: scale(1.2);\n        transition: 0.1s;\n    }\n}\n\n@-webkit-keyframes gradient {\n    0% {\n        background-position: 0% 50%;\n    }\n    50% {\n        background-position: 100% 50%;\n    }\n    100% {\n        background-position: 0% 50%;\n    }\n}\n\n@keyframes gradient {\n    0% {\n        background-position: 0% 50%;\n    }\n    50% {\n        background-position: 100% 50%;\n    }\n    100% {\n        background-position: 0% 50%;\n    }\n}\n", "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"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","sourcesContent":["* {\n    box-sizing: border-box;\n    -webkit-tap-highlight-color: transparent;\n    font-family: 'Cinzel';\n    color: rgba(20, 19, 20, 0.753);\n}\n\n@font-face {\n    font-family: Cinzel;\n    src: url(font/Cinzel_Decorative/CinzelDecorative-Bold.ttf);\n}\n\nhtml {\n    height: 100%;\n}\n\nbody {\n    height: 100%;\n    width: 100vw;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    align-items: center;\n    padding: 0;\n    margin: 0;\n\n    background: linear-gradient(\n        100deg,\n        rgba(30, 128, 241, 1) 0%,\n        rgba(34, 133, 20, 1) 19%,\n        rgba(213, 192, 64, 1) 35%,\n        rgba(204, 149, 149, 1) 53%,\n        rgba(126, 101, 123, 1) 70%,\n        rgba(77, 157, 151, 1) 86%,\n        rgba(17, 75, 130, 1) 100%\n    );\n    background-size: 400% 400%;\n    animation: gradient 35s ease infinite;\n\n    overflow: hidden;\n}\n\n#welcomePage {\n    position: absolute;\n    top: 0;\n    left: 0;\n    height: 100vh;\n    width: 100vw;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    gap: 5%;\n    backdrop-filter: blur(2vmax);\n    overflow: hidden;\n\n    transition: ease-out 0.3s;\n}\n\n#welcomePage h1 {\n    font-size: 5vmax;\n    text-shadow: 2px 2px 20px rgba(0, 0, 0, 0.5);\n}\n\n#welcomePage h3 {\n    font-size: 4vmax;\n    background-color: rgba(240, 248, 255, 0.31);\n    box-shadow: 0px 0px 20px 30px rgba(240, 248, 255, 0.31);\n    padding: 0 1vmax;\n    border-radius: 20px;\n    display: none;\n}\n\nheader {\n    flex: 0 1 min-content;\n    font-size: 5vmax;\n    overflow: hidden;\n}\n\nbutton {\n    cursor: pointer;\n    font-size: 3.5vmin;\n    padding: 0 1vmin;\n    border-radius: 1vmax;\n    box-shadow: 2px 2px black;\n    background-color: rgba(116, 160, 199, 0.351);\n    backdrop-filter: blur(100px);\n    transition: 0.2s;\n}\n\nbutton:hover {\n    box-shadow: 4px 4px black;\n}\n\nbutton:active {\n    box-shadow: none;\n    transform: translateX(4px) translateY(4px);\n}\n\n#gameboards {\n    flex: 0 1 80%;\n    width: 95vw;\n    display: flex;\n    flex-direction: row;\n    flex-wrap: wrap;\n    align-items: center;\n    justify-content: center;\n    gap: 2%;\n}\n\n#gameboards > div {\n    flex: 0 1 100%;\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    align-items: center;\n    flex-wrap: wrap;\n}\n\nh2 {\n    flex: 0 0 100%;\n    text-align: center;\n    font-size: 4vmin;\n    margin: 0;\n    padding: 0;\n}\n\n.gameboard {\n    flex: 0 1 35vh;\n    aspect-ratio: 1/1;\n    max-height: 35vh;\n    display: flex;\n    flex-wrap: wrap;\n    border: 2px solid rgba(0, 0, 0, 0.397);\n    opacity: 0.5;\n    pointer-events: none;\n    backdrop-filter: blur(10vmax);\n    background-color: rgba(26, 117, 197, 0.664);\n    transform: scale(0.85);\n\n    transition: 0.3s;\n}\n\n.active-gb {\n    pointer-events: auto;\n    opacity: 1;\n    transform: scale(1);\n}\n\n/* aside */\n\naside {\n    flex: 0 0 min-content;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap: 5%;\n    margin: 2vh 0;\n}\n\naside > * {\n    flex-basis: min-content;\n    white-space: nowrap;\n}\n\n/* grid elements */\n\n/* non-ship */\n.non {\n    flex: 0 0 10%;\n    height: 10%;\n    overflow: hidden;\n    /* aspect-ratio: 1/1; */\n    border: 2px solid rgba(0, 0, 0, 0.397);\n\n    display: flex;\n    justify-content: center;\n    align-items: center;\n\n    position: relative;\n    cursor: pointer;\n    transition: 0.4s;\n}\n\n.non > * {\n    opacity: 0;\n}\n\n.non-clicked {\n    display: flex;\n    background-color: rgba(226, 196, 196, 0.685);\n    pointer-events: none;\n}\n\n.non-clicked * {\n    opacity: 1;\n}\n\n.point {\n    width: 20%;\n    height: 20%;\n    background-color: rgb(0, 0, 0);\n    border-radius: 50%;\n    pointer-events: none;\n}\n\n/* ship */\n\n.ship {\n    flex: 0 0 10%;\n    overflow: hidden;\n    /* aspect-ratio: 1/1; */\n    height: 10%;\n    border: 2px solid rgba(0, 0, 0, 0.397);\n\n    display: flex;\n    justify-content: center;\n    align-items: center;\n\n    position: relative;\n    cursor: pointer;\n    transition: 0.4s;\n}\n\n.ship > * {\n    opacity: 0;\n}\n\n.ship-clicked {\n    background-color: rgba(240, 128, 128, 0.664);\n    pointer-events: none;\n}\n\n.ship-clicked > * {\n    opacity: 1;\n}\n\n.line {\n    width: 145%;\n    height: 10%;\n    background-color: black;\n    transform: rotate(-45deg);\n\n    position: absolute;\n    top: 45%;\n    pointer-events: none;\n}\n\n.ship > .line:first-of-type {\n    transform: rotate(45deg);\n}\n\n/* players board */\n\n.playerBoard {\n    background-color: rgba(30, 105, 105, 0.562);\n    pointer-events: none;\n}\n\n.playerBoard .ship > * {\n    opacity: 1;\n}\n\n.playerBoard .non > * {\n    opacity: 0;\n}\n\n@media (orientation: landscape) {\n    #gameboards > div {\n        flex-basis: 49%;\n    }\n\n    .gameboard {\n        flex-basis: 50vh;\n        max-height: 50vh;\n    }\n}\n\n@media (hover: hover) and (pointer: fine) {\n    .non:hover,\n    .ship:hover {\n        background-color: rgba(40, 95, 35, 0.664);\n        transform: scale(1.2);\n        transition: 0.1s;\n    }\n}\n\n@keyframes gradient {\n    0% {\n        background-position: 0% 50%;\n    }\n    50% {\n        background-position: 100% 50%;\n    }\n    100% {\n        background-position: 0% 50%;\n    }\n}\n"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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YUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxXQUFXLGFBQWEsS0FBSyxZQUFZLGFBQWEsY0FBYyxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxjQUFjLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxjQUFjLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLE9BQU8sV0FBVyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxhQUFhLFdBQVcsS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGNBQWMsV0FBVyxZQUFZLGNBQWMsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxXQUFXLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxhQUFhLFdBQVcsWUFBWSxjQUFjLGFBQWEs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QWE7QUFDYixTQUFTO0FBQ1QsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZXMuY3NzP2E4ZDAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2ZhY3RvcnlfZnVuY3Rpb25zL2J1aWxkR2FtZWJvYXJkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZmFjdG9yeV9mdW5jdGlvbnMvZ2FtZWJvYXJkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZmFjdG9yeV9mdW5jdGlvbnMvbG9nQ2xpY2suanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9mYWN0b3J5X2Z1bmN0aW9ucy9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9mYWN0b3J5X2Z1bmN0aW9ucy9zaGlwLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZnVuY3Rpb25zL2NsaWNrRmVlZGJhY2suanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9mdW5jdGlvbnMvY3B1Q2xpY2suanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9mdW5jdGlvbnMvY3B1RnVuY3Rpb25zL2NvdW50Q2xpY2tlZE5laWdoYm91cnMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9mdW5jdGlvbnMvY3B1RnVuY3Rpb25zL2dldE5laWdoYm91ckNvb3Jkcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2Z1bmN0aW9ucy9jcHVGdW5jdGlvbnMvZ2V0UmFuZG9tQ29vcmRpbmF0ZXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9mdW5jdGlvbnMvY3B1RnVuY3Rpb25zL2dldFJhbmRvbU5laWdoYm91ci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2Z1bmN0aW9ucy9jcHVGdW5jdGlvbnMvcGxheWVyQ2xpY2suanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9mdW5jdGlvbnMvY3JlYXRlL2J1aWxkR3JpZC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2Z1bmN0aW9ucy9jcmVhdGUvY3JlYXRlR3JpZEVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9mdW5jdGlvbnMvc3R5bGluZy9hZGRTdHlsaW5nR3JpZC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2Z1bmN0aW9ucy9zdHlsaW5nL3N0eWxlQ29sdW1uTmVpZ2hib3Vycy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2Z1bmN0aW9ucy9zdHlsaW5nL3N0eWxlUm93TmVpZ2hib3Vycy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcImZvbnQvQ2luemVsX0RlY29yYXRpdmUvQ2luemVsRGVjb3JhdGl2ZS1Cb2xkLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBmb250LWZhbWlseTogJ0NpbnplbCc7XFxuICAgIGNvbG9yOiByZ2JhKDIwLCAxOSwgMjAsIDAuNzUzKTtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiBDaW56ZWw7XFxuICAgIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG59XFxuXFxuaHRtbCB7XFxuICAgIGhlaWdodDogMTAwJTtcXG59XFxuXFxuYm9keSB7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIG1hcmdpbjogMDtcXG5cXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxcbiAgICAgICAgMTAwZGVnLFxcbiAgICAgICAgcmdiYSgzMCwgMTI4LCAyNDEsIDEpIDAlLFxcbiAgICAgICAgcmdiYSgzNCwgMTMzLCAyMCwgMSkgMTklLFxcbiAgICAgICAgcmdiYSgyMTMsIDE5MiwgNjQsIDEpIDM1JSxcXG4gICAgICAgIHJnYmEoMjA0LCAxNDksIDE0OSwgMSkgNTMlLFxcbiAgICAgICAgcmdiYSgxMjYsIDEwMSwgMTIzLCAxKSA3MCUsXFxuICAgICAgICByZ2JhKDc3LCAxNTcsIDE1MSwgMSkgODYlLFxcbiAgICAgICAgcmdiYSgxNywgNzUsIDEzMCwgMSkgMTAwJVxcbiAgICApO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDQwMCUgNDAwJTtcXG4gICAgLXdlYmtpdC1hbmltYXRpb246IGdyYWRpZW50IDM1cyBlYXNlIGluZmluaXRlO1xcbiAgICAgICAgICAgIGFuaW1hdGlvbjogZ3JhZGllbnQgMzVzIGVhc2UgaW5maW5pdGU7XFxuXFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbiN3ZWxjb21lUGFnZSB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDUlO1xcbiAgICAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1cigydm1heCk7XFxuICAgICAgICAgICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDJ2bWF4KTtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG5cXG4gICAgdHJhbnNpdGlvbjogZWFzZS1vdXQgMC4zcztcXG59XFxuXFxuI3dlbGNvbWVQYWdlIGgxIHtcXG4gICAgZm9udC1zaXplOiA1dm1heDtcXG4gICAgdGV4dC1zaGFkb3c6IDJweCAycHggMjBweCByZ2JhKDAsIDAsIDAsIDAuNSk7XFxufVxcblxcbiN3ZWxjb21lUGFnZSBoMyB7XFxuICAgIGZvbnQtc2l6ZTogNHZtYXg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQwLCAyNDgsIDI1NSwgMC4zMSk7XFxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMjBweCAzMHB4IHJnYmEoMjQwLCAyNDgsIDI1NSwgMC4zMSk7XFxuICAgIHBhZGRpbmc6IDAgMXZtYXg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbmhlYWRlciB7XFxuICAgIGZsZXg6IDAgMSBtaW4tY29udGVudDtcXG4gICAgZm9udC1zaXplOiA1dm1heDtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuYnV0dG9uIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBmb250LXNpemU6IDMuNXZtaW47XFxuICAgIHBhZGRpbmc6IDAgMXZtaW47XFxuICAgIGJvcmRlci1yYWRpdXM6IDF2bWF4O1xcbiAgICBib3gtc2hhZG93OiAycHggMnB4IGJsYWNrO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDExNiwgMTYwLCAxOTksIDAuMzUxKTtcXG4gICAgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTAwcHgpO1xcbiAgICAgICAgICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxMDBweCk7XFxuICAgIHRyYW5zaXRpb246IDAuMnM7XFxufVxcblxcbmJ1dHRvbjpob3ZlciB7XFxuICAgIGJveC1zaGFkb3c6IDRweCA0cHggYmxhY2s7XFxufVxcblxcbmJ1dHRvbjphY3RpdmUge1xcbiAgICBib3gtc2hhZG93OiBub25lO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNHB4KSB0cmFuc2xhdGVZKDRweCk7XFxufVxcblxcbiNnYW1lYm9hcmRzIHtcXG4gICAgZmxleDogMCAxIDgwJTtcXG4gICAgd2lkdGg6IDk1dnc7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGdhcDogMiU7XFxufVxcblxcbiNnYW1lYm9hcmRzID4gZGl2IHtcXG4gICAgZmxleDogMCAxIDEwMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxufVxcblxcbmgyIHtcXG4gICAgZmxleDogMCAwIDEwMCU7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiA0dm1pbjtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4uZ2FtZWJvYXJkIHtcXG4gICAgZmxleDogMCAxIDM1dmg7XFxuICAgIGFzcGVjdC1yYXRpbzogMS8xO1xcbiAgICBtYXgtaGVpZ2h0OiAzNXZoO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4zOTcpO1xcbiAgICBvcGFjaXR5OiAwLjU7XFxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgICAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1cigxMHZtYXgpO1xcbiAgICAgICAgICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxMHZtYXgpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI2LCAxMTcsIDE5NywgMC42NjQpO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuODUpO1xcblxcbiAgICB0cmFuc2l0aW9uOiAwLjNzO1xcbn1cXG5cXG4uYWN0aXZlLWdiIHtcXG4gICAgcG9pbnRlci1ldmVudHM6IGF1dG87XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxufVxcblxcbi8qIGFzaWRlICovXFxuXFxuYXNpZGUge1xcbiAgICBmbGV4OiAwIDAgbWluLWNvbnRlbnQ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDUlO1xcbiAgICBtYXJnaW46IDJ2aCAwO1xcbn1cXG5cXG5hc2lkZSA+ICoge1xcbiAgICBmbGV4LWJhc2lzOiBtaW4tY29udGVudDtcXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG59XFxuXFxuLyogZ3JpZCBlbGVtZW50cyAqL1xcblxcbi8qIG5vbi1zaGlwICovXFxuLm5vbiB7XFxuICAgIGZsZXg6IDAgMCAxMCU7XFxuICAgIGhlaWdodDogMTAlO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICAvKiBhc3BlY3QtcmF0aW86IDEvMTsgKi9cXG4gICAgYm9yZGVyOiAycHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjM5Nyk7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgdHJhbnNpdGlvbjogMC40cztcXG59XFxuXFxuLm5vbiA+ICoge1xcbiAgICBvcGFjaXR5OiAwO1xcbn1cXG5cXG4ubm9uLWNsaWNrZWQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIyNiwgMTk2LCAxOTYsIDAuNjg1KTtcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxufVxcblxcbi5ub24tY2xpY2tlZCAqIHtcXG4gICAgb3BhY2l0eTogMTtcXG59XFxuXFxuLnBvaW50IHtcXG4gICAgd2lkdGg6IDIwJTtcXG4gICAgaGVpZ2h0OiAyMCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAwLCAwKTtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG59XFxuXFxuLyogc2hpcCAqL1xcblxcbi5zaGlwIHtcXG4gICAgZmxleDogMCAwIDEwJTtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgLyogYXNwZWN0LXJhdGlvOiAxLzE7ICovXFxuICAgIGhlaWdodDogMTAlO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMzk3KTtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB0cmFuc2l0aW9uOiAwLjRzO1xcbn1cXG5cXG4uc2hpcCA+ICoge1xcbiAgICBvcGFjaXR5OiAwO1xcbn1cXG5cXG4uc2hpcC1jbGlja2VkIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDAsIDEyOCwgMTI4LCAwLjY2NCk7XFxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbn1cXG5cXG4uc2hpcC1jbGlja2VkID4gKiB7XFxuICAgIG9wYWNpdHk6IDE7XFxufVxcblxcbi5saW5lIHtcXG4gICAgd2lkdGg6IDE0NSU7XFxuICAgIGhlaWdodDogMTAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcXG5cXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDQ1JTtcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxufVxcblxcbi5zaGlwID4gLmxpbmU6Zmlyc3Qtb2YtdHlwZSB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcXG59XFxuXFxuLyogcGxheWVycyBib2FyZCAqL1xcblxcbi5wbGF5ZXJCb2FyZCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMzAsIDEwNSwgMTA1LCAwLjU2Mik7XFxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbn1cXG5cXG4ucGxheWVyQm9hcmQgLnNoaXAgPiAqIHtcXG4gICAgb3BhY2l0eTogMTtcXG59XFxuXFxuLnBsYXllckJvYXJkIC5ub24gPiAqIHtcXG4gICAgb3BhY2l0eTogMDtcXG59XFxuXFxuQG1lZGlhIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSB7XFxuICAgICNnYW1lYm9hcmRzID4gZGl2IHtcXG4gICAgICAgIGZsZXgtYmFzaXM6IDQ5JTtcXG4gICAgfVxcblxcbiAgICAuZ2FtZWJvYXJkIHtcXG4gICAgICAgIGZsZXgtYmFzaXM6IDUwdmg7XFxuICAgICAgICBtYXgtaGVpZ2h0OiA1MHZoO1xcbiAgICB9XFxufVxcblxcbkBtZWRpYSAoaG92ZXI6IGhvdmVyKSBhbmQgKHBvaW50ZXI6IGZpbmUpIHtcXG4gICAgLm5vbjpob3ZlcixcXG4gICAgLnNoaXA6aG92ZXIge1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg0MCwgOTUsIDM1LCAwLjY2NCk7XFxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XFxuICAgICAgICB0cmFuc2l0aW9uOiAwLjFzO1xcbiAgICB9XFxufVxcblxcbkAtd2Via2l0LWtleWZyYW1lcyBncmFkaWVudCB7XFxuICAgIDAlIHtcXG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IDAlIDUwJTtcXG4gICAgfVxcbiAgICA1MCUge1xcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMTAwJSA1MCU7XFxuICAgIH1cXG4gICAgMTAwJSB7XFxuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwJSA1MCU7XFxuICAgIH1cXG59XFxuXFxuQGtleWZyYW1lcyBncmFkaWVudCB7XFxuICAgIDAlIHtcXG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IDAlIDUwJTtcXG4gICAgfVxcbiAgICA1MCUge1xcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMTAwJSA1MCU7XFxuICAgIH1cXG4gICAgMTAwJSB7XFxuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwJSA1MCU7XFxuICAgIH1cXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxzQkFBc0I7SUFDdEIsd0NBQXdDO0lBQ3hDLHFCQUFxQjtJQUNyQiw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsNENBQTBEO0FBQzlEOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixZQUFZO0lBQ1osYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qiw4QkFBOEI7SUFDOUIsbUJBQW1CO0lBQ25CLFVBQVU7SUFDVixTQUFTOztJQUVUOzs7Ozs7Ozs7S0FTQztJQUNELDBCQUEwQjtJQUMxQiw2Q0FBcUM7WUFBckMscUNB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QjtBQUN4Qjs7QUFFQTtJQUNJLHdCQUF3QjtBQUM1Qjs7QUFFQSxrQkFBa0I7O0FBRWxCO0lBQ0ksMkNBQTJDO0lBQzNDLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLFVBQVU7QUFDZDs7QUFFQTtJQUNJLFVBQVU7QUFDZDs7QUFFQTtJQUNJO1FBQ0ksZUFBZTtJQUNuQjs7SUFFQTtRQUNJLGdCQUFnQjtRQUNoQixnQkFBZ0I7SUFDcEI7QUFDSjs7QUFFQTtJQUNJOztRQUVJLHlDQUF5QztRQUN6QyxxQkFBcUI7UUFDckIsZ0JBQWdCO0lBQ3BCO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLDJCQUEyQjtJQUMvQjtJQUNBO1FBQ0ksNkJBQTZCO0lBQ2pDO0lBQ0E7UUFDSSwyQkFBMkI7SUFDL0I7QUFDSjs7QUFWQTtJQUNJO1FBQ0ksMkJBQTJCO0lBQy9CO0lBQ0E7UUFDSSw2QkFBNkI7SUFDakM7SUFDQTtRQUNJLDJCQUEyQjtJQUMvQjtBQUNKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIioge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBmb250LWZhbWlseTogJ0NpbnplbCc7XFxuICAgIGNvbG9yOiByZ2JhKDIwLCAxOSwgMjAsIDAuNzUzKTtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiBDaW56ZWw7XFxuICAgIHNyYzogdXJsKGZvbnQvQ2luemVsX0RlY29yYXRpdmUvQ2luemVsRGVjb3JhdGl2ZS1Cb2xkLnR0Zik7XFxufVxcblxcbmh0bWwge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbmJvZHkge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBtYXJnaW46IDA7XFxuXFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcXG4gICAgICAgIDEwMGRlZyxcXG4gICAgICAgIHJnYmEoMzAsIDEyOCwgMjQxLCAxKSAwJSxcXG4gICAgICAgIHJnYmEoMzQsIDEzMywgMjAsIDEpIDE5JSxcXG4gICAgICAgIHJnYmEoMjEzLCAxOTIsIDY0LCAxKSAzNSUsXFxuICAgICAgICByZ2JhKDIwNCwgMTQ5LCAxNDksIDEpIDUzJSxcXG4gICAgICAgIHJnYmEoMTI2LCAxMDEsIDEyMywgMSkgNzAlLFxcbiAgICAgICAgcmdiYSg3NywgMTU3LCAxNTEsIDEpIDg2JSxcXG4gICAgICAgIHJnYmEoMTcsIDc1LCAxMzAsIDEpIDEwMCVcXG4gICAgKTtcXG4gICAgYmFja2dyb3VuZC1zaXplOiA0MDAlIDQwMCU7XFxuICAgIGFuaW1hdGlvbjogZ3JhZGllbnQgMzVzIGVhc2UgaW5maW5pdGU7XFxuXFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbiN3ZWxjb21lUGFnZSB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDUlO1xcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMnZtYXgpO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcblxcbiAgICB0cmFuc2l0aW9uOiBlYXNlLW91dCAwLjNzO1xcbn1cXG5cXG4jd2VsY29tZVBhZ2UgaDEge1xcbiAgICBmb250LXNpemU6IDV2bWF4O1xcbiAgICB0ZXh0LXNoYWRvdzogMnB4IDJweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC41KTtcXG59XFxuXFxuI3dlbGNvbWVQYWdlIGgzIHtcXG4gICAgZm9udC1zaXplOiA0dm1heDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDAsIDI0OCwgMjU1LCAwLjMxKTtcXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAyMHB4IDMwcHggcmdiYSgyNDAsIDI0OCwgMjU1LCAwLjMxKTtcXG4gICAgcGFkZGluZzogMCAxdm1heDtcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuaGVhZGVyIHtcXG4gICAgZmxleDogMCAxIG1pbi1jb250ZW50O1xcbiAgICBmb250LXNpemU6IDV2bWF4O1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG5idXR0b24ge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMy41dm1pbjtcXG4gICAgcGFkZGluZzogMCAxdm1pbjtcXG4gICAgYm9yZGVyLXJhZGl1czogMXZtYXg7XFxuICAgIGJveC1zaGFkb3c6IDJweCAycHggYmxhY2s7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTE2LCAxNjAsIDE5OSwgMC4zNTEpO1xcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTAwcHgpO1xcbiAgICB0cmFuc2l0aW9uOiAwLjJzO1xcbn1cXG5cXG5idXR0b246aG92ZXIge1xcbiAgICBib3gtc2hhZG93OiA0cHggNHB4IGJsYWNrO1xcbn1cXG5cXG5idXR0b246YWN0aXZlIHtcXG4gICAgYm94LXNoYWRvdzogbm9uZTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDRweCkgdHJhbnNsYXRlWSg0cHgpO1xcbn1cXG5cXG4jZ2FtZWJvYXJkcyB7XFxuICAgIGZsZXg6IDAgMSA4MCU7XFxuICAgIHdpZHRoOiA5NXZ3O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBnYXA6IDIlO1xcbn1cXG5cXG4jZ2FtZWJvYXJkcyA+IGRpdiB7XFxuICAgIGZsZXg6IDAgMSAxMDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbn1cXG5cXG5oMiB7XFxuICAgIGZsZXg6IDAgMCAxMDAlO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogNHZtaW47XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG59XFxuXFxuLmdhbWVib2FyZCB7XFxuICAgIGZsZXg6IDAgMSAzNXZoO1xcbiAgICBhc3BlY3QtcmF0aW86IDEvMTtcXG4gICAgbWF4LWhlaWdodDogMzV2aDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMzk3KTtcXG4gICAgb3BhY2l0eTogMC41O1xcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEwdm1heCk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjYsIDExNywgMTk3LCAwLjY2NCk7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMC44NSk7XFxuXFxuICAgIHRyYW5zaXRpb246IDAuM3M7XFxufVxcblxcbi5hY3RpdmUtZ2Ige1xcbiAgICBwb2ludGVyLWV2ZW50czogYXV0bztcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG59XFxuXFxuLyogYXNpZGUgKi9cXG5cXG5hc2lkZSB7XFxuICAgIGZsZXg6IDAgMCBtaW4tY29udGVudDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogNSU7XFxuICAgIG1hcmdpbjogMnZoIDA7XFxufVxcblxcbmFzaWRlID4gKiB7XFxuICAgIGZsZXgtYmFzaXM6IG1pbi1jb250ZW50O1xcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbn1cXG5cXG4vKiBncmlkIGVsZW1lbnRzICovXFxuXFxuLyogbm9uLXNoaXAgKi9cXG4ubm9uIHtcXG4gICAgZmxleDogMCAwIDEwJTtcXG4gICAgaGVpZ2h0OiAxMCU7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIC8qIGFzcGVjdC1yYXRpbzogMS8xOyAqL1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMzk3KTtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB0cmFuc2l0aW9uOiAwLjRzO1xcbn1cXG5cXG4ubm9uID4gKiB7XFxuICAgIG9wYWNpdHk6IDA7XFxufVxcblxcbi5ub24tY2xpY2tlZCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjI2LCAxOTYsIDE5NiwgMC42ODUpO1xcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG59XFxuXFxuLm5vbi1jbGlja2VkICoge1xcbiAgICBvcGFjaXR5OiAxO1xcbn1cXG5cXG4ucG9pbnQge1xcbiAgICB3aWR0aDogMjAlO1xcbiAgICBoZWlnaHQ6IDIwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDAsIDApO1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbn1cXG5cXG4vKiBzaGlwICovXFxuXFxuLnNoaXAge1xcbiAgICBmbGV4OiAwIDAgMTAlO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICAvKiBhc3BlY3QtcmF0aW86IDEvMTsgKi9cXG4gICAgaGVpZ2h0OiAxMCU7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4zOTcpO1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHRyYW5zaXRpb246IDAuNHM7XFxufVxcblxcbi5zaGlwID4gKiB7XFxuICAgIG9wYWNpdHk6IDA7XFxufVxcblxcbi5zaGlwLWNsaWNrZWQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0MCwgMTI4LCAxMjgsIDAuNjY0KTtcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxufVxcblxcbi5zaGlwLWNsaWNrZWQgPiAqIHtcXG4gICAgb3BhY2l0eTogMTtcXG59XFxuXFxuLmxpbmUge1xcbiAgICB3aWR0aDogMTQ1JTtcXG4gICAgaGVpZ2h0OiAxMCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xcblxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogNDUlO1xcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG59XFxuXFxuLnNoaXAgPiAubGluZTpmaXJzdC1vZi10eXBlIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xcbn1cXG5cXG4vKiBwbGF5ZXJzIGJvYXJkICovXFxuXFxuLnBsYXllckJvYXJkIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgzMCwgMTA1LCAxMDUsIDAuNTYyKTtcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxufVxcblxcbi5wbGF5ZXJCb2FyZCAuc2hpcCA+ICoge1xcbiAgICBvcGFjaXR5OiAxO1xcbn1cXG5cXG4ucGxheWVyQm9hcmQgLm5vbiA+ICoge1xcbiAgICBvcGFjaXR5OiAwO1xcbn1cXG5cXG5AbWVkaWEgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIHtcXG4gICAgI2dhbWVib2FyZHMgPiBkaXYge1xcbiAgICAgICAgZmxleC1iYXNpczogNDklO1xcbiAgICB9XFxuXFxuICAgIC5nYW1lYm9hcmQge1xcbiAgICAgICAgZmxleC1iYXNpczogNTB2aDtcXG4gICAgICAgIG1heC1oZWlnaHQ6IDUwdmg7XFxuICAgIH1cXG59XFxuXFxuQG1lZGlhIChob3ZlcjogaG92ZXIpIGFuZCAocG9pbnRlcjogZmluZSkge1xcbiAgICAubm9uOmhvdmVyLFxcbiAgICAuc2hpcDpob3ZlciB7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDQwLCA5NSwgMzUsIDAuNjY0KTtcXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcXG4gICAgICAgIHRyYW5zaXRpb246IDAuMXM7XFxuICAgIH1cXG59XFxuXFxuQGtleWZyYW1lcyBncmFkaWVudCB7XFxuICAgIDAlIHtcXG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IDAlIDUwJTtcXG4gICAgfVxcbiAgICA1MCUge1xcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMTAwJSA1MCU7XFxuICAgIH1cXG4gICAgMTAwJSB7XFxuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwJSA1MCU7XFxuICAgIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuXG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTsgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgcGxheWVyIGZyb20gJy4vcGxheWVyJztcclxuXHJcbmNvbnN0IGJ1aWxkR2FtZWJvYXJkID0gKCkgPT4ge1xyXG4gICAgY29uc3QgcCA9IHBsYXllcigpO1xyXG4gICAgcC5idWlsZEZsZWV0KCk7XHJcblxyXG4gICAgY29uc3QgZ2FtZWJvYXJkcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNnYW1lYm9hcmRzJyk7XHJcbiAgICBjb25zdCBnYiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgZ2IuY2xhc3NMaXN0LmFkZCgnZ2FtZWJvYXJkJyk7XHJcblxyXG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBkaXYuYXBwZW5kQ2hpbGQoZ2IpO1xyXG4gICAgZ2FtZWJvYXJkcy5hcHBlbmRDaGlsZChkaXYpO1xyXG5cclxuICAgIHJldHVybiB7IGdiLCBwIH07XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBidWlsZEdhbWVib2FyZDtcclxuIiwiaW1wb3J0IHNoaXAgZnJvbSAnLi9zaGlwJztcclxuXHJcbmNvbnN0IGdhbWVib2FyZCA9ICgpID0+IHtcclxuICAgIGxldCBtaXNzZWRTaG90cyA9IFtdO1xyXG4gICAgbGV0IHNoaXBzID0gW107XHJcblxyXG4gICAgY29uc3QgcGxhY2VTaGlwID0gKHNoaXAsIHgsIHksIGRpcmVjdGlvbikgPT4ge1xyXG4gICAgICAgIHNoaXAucG9zaXRpb25bMF0gPSB4O1xyXG4gICAgICAgIHNoaXAucG9zaXRpb25bMl0gPSB5O1xyXG4gICAgICAgIHNoaXAuZW5kT2ZTaGlwKGRpcmVjdGlvbik7XHJcbiAgICAgICAgc2hpcHMucHVzaChzaGlwKTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgcmVjZWl2ZUF0dGFjayA9ICh4LCB5KSA9PiB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICBzaGlwc1tpXS5wb3NpdGlvblswXSA8PSB4ICYmXHJcbiAgICAgICAgICAgICAgICBzaGlwc1tpXS5wb3NpdGlvblsxXSA+PSB4ICYmXHJcbiAgICAgICAgICAgICAgICBzaGlwc1tpXS5wb3NpdGlvblsyXSA8PSB5ICYmXHJcbiAgICAgICAgICAgICAgICBzaGlwc1tpXS5wb3NpdGlvblszXSA+PSB5XHJcbiAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHNoaXBzW2ldLnBvc2l0aW9uWzBdID09IHgpIHtcclxuICAgICAgICAgICAgICAgICAgICBzaGlwc1tpXS5oaXQoeSAtIHNoaXBzW2ldLnBvc2l0aW9uWzJdKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gc2hpcHNbaV07XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHNoaXBzW2ldLmhpdCh4IC0gc2hpcHNbaV0ucG9zaXRpb25bMF0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBzaGlwc1tpXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIG1pc3NlZFNob3RzLnB1c2goeCwgeSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGFsbFNoaXBzU3VuayA9ICgpID0+IHtcclxuICAgICAgICBpZiAoc2hpcHMuZXZlcnkoKHYpID0+IHYuaXNTdW5rKCkgPT0gdHJ1ZSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIHsgc2hpcHMsIG1pc3NlZFNob3RzLCBwbGFjZVNoaXAsIHJlY2VpdmVBdHRhY2ssIGFsbFNoaXBzU3VuayB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZ2FtZWJvYXJkO1xyXG4iLCJjb25zdCBsb2dDbGljayA9IChnYiwgZykgPT4ge1xyXG4gICAgY29uc3QgcG9zID0gQXJyYXkuZnJvbShnYi5jaGlsZHJlbikuaW5kZXhPZihnKTtcclxuICAgIGxldCB4Q29vcmQ7XHJcbiAgICBsZXQgeUNvb3JkO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPD0gcG9zOyBpICs9IDEwKSB7XHJcbiAgICAgICAgeENvb3JkID0gaSAvIDEwO1xyXG4gICAgICAgIHlDb29yZCA9IHBvcyAtIGk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHsgeENvb3JkLCB5Q29vcmQgfTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGxvZ0NsaWNrO1xyXG4iLCJpbXBvcnQgZ2FtZWJvYXJkIGZyb20gJy4vZ2FtZWJvYXJkJztcclxuaW1wb3J0IHNoaXAgZnJvbSAnLi9zaGlwJztcclxuXHJcbmNvbnN0IHBsYXllciA9ICgpID0+IHtcclxuICAgIGNvbnN0IGdiID0gZ2FtZWJvYXJkKCk7XHJcblxyXG4gICAgY29uc3Qgc2hpcHMgPSBbXTtcclxuXHJcbiAgICBsZXQgZnJlZVNwYWNlcyA9IFtdO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XHJcbiAgICAgICAgZnJlZVNwYWNlc1tpXSA9IFtdO1xyXG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgMTA7IGorKykge1xyXG4gICAgICAgICAgICBmcmVlU3BhY2VzW2ldW2pdID0gajtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgYnVpbGRGbGVldCA9ICgpID0+IHtcclxuICAgICAgICBzaGlwc1swXSA9IHNoaXAoNCk7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAyOyBpKyspIHtcclxuICAgICAgICAgICAgc2hpcHNbaSArIDFdID0gc2hpcCgzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAzOyBpKyspIHtcclxuICAgICAgICAgICAgc2hpcHNbaSArIDNdID0gc2hpcCgyKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA0OyBpKyspIHtcclxuICAgICAgICAgICAgc2hpcHNbaSArIDZdID0gc2hpcCgxKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qIHJhbmRvbSBwb3NpdGlvbiwgYW5kIHdlYXRoZXIgaXQgaXMgZnJlZSAqL1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgY29uc3Qgcm5kID0gcmFuZFBvc2l0aW9uKCk7XHJcbiAgICAgICAgICAgIHRlc3RQb3NpdGlvbihzaGlwc1tpXSwgcm5kKTtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXHJcbiAgICAgICAgICAgIC8vICAgICBzaGlwc1tpXS5wb3NpdGlvbixcclxuICAgICAgICAgICAgLy8gICAgIHJuZC5kaXJlY3Rpb25cclxuICAgICAgICAgICAgLy8gKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IHRlc3RQb3NpdGlvbiA9IChzLCByKSA9PiB7XHJcbiAgICAgICAgbGV0IHBsYWNlSXNGcmVlID0gdHJ1ZTtcclxuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHMud291bmRzLmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICAgIGlmIChyLmRpcmVjdGlvbiA9PSAneCcpIHtcclxuICAgICAgICAgICAgICAgIGlmIChyLnJuZFkgKyBzLndvdW5kcy5sZW5ndGggPiA5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2VJc0ZyZWUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoIWZyZWVTcGFjZXNbci5ybmRYXS5pbmNsdWRlcyhyLnJuZFkgKyBqKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlSXNGcmVlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoci5kaXJlY3Rpb24gPT0gJ3knKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoci5ybmRYICsgcy53b3VuZHMubGVuZ3RoID4gOSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlSXNGcmVlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKCFmcmVlU3BhY2VzW3Iucm5kWCArIGpdLmluY2x1ZGVzKHIucm5kWSkpIHtcclxuICAgICAgICAgICAgICAgICAgICBwbGFjZUlzRnJlZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChwbGFjZUlzRnJlZSA9PSB0cnVlKSB7XHJcbiAgICAgICAgICAgIHBsYWNlU2hpcChzLCByKTtcclxuICAgICAgICAgICAgZGVsZXRlU3BhY2VzKHMud291bmRzLmxlbmd0aCwgci5ybmRYLCByLnJuZFksIHIuZGlyZWN0aW9uKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zdCBybmQgPSByYW5kUG9zaXRpb24oKTtcclxuICAgICAgICAgICAgdGVzdFBvc2l0aW9uKHMsIHJuZCk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCByYW5kUG9zaXRpb24gPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3Qgcm5kWCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcclxuICAgICAgICBjb25zdCBybmRZID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xyXG4gICAgICAgIGNvbnN0IGRpcmVjdGlvbiA9IE1hdGgucmFuZG9tKCkgPCAwLjUgPyAneCcgOiAneSc7XHJcblxyXG4gICAgICAgIHJldHVybiB7IHJuZFgsIHJuZFksIGRpcmVjdGlvbiB9O1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBwbGFjZVNoaXAgPSAocywgcikgPT4ge1xyXG4gICAgICAgIGdiLnBsYWNlU2hpcChzLCByLnJuZFgsIHIucm5kWSwgci5kaXJlY3Rpb24pO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBkZWxldGVTcGFjZXMgPSAobCwgeCwgeSwgZCkgPT4ge1xyXG4gICAgICAgIC8qIHBsYWNlIG5laWdoYm91cmluZyBncmlkLXMgKi9cclxuICAgICAgICBpZiAoZCA9PSAneCcpIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsICsgMjsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDM7IGorKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh4IC0gMSArIGogPD0gOSAmJiB5IC0gMSArIGkgPD0gOSAmJiB4IC0gMSArIGogPj0gMCAmJiB5IC0gMSArIGkgPj0gMCApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZnJlZVNwYWNlc1t4IC0gMSArIGpdW3kgLSAxICsgaV0gPSAneCc7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIGlmIChkID09ICd5Jykge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGwgKyAyOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgMzsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHggLSAxICsgaSA8PSA5ICYmIHkgLSAxICsgaiA8PSA5ICYmIHggLSAxICsgaSA+PSAwICYmIHkgLSAxICsgaiA+PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZyZWVTcGFjZXNbeCAtIDEgKyBpXVt5IC0gMSArIGpdID0gJ3gnO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyogcGxhY2UgdGhlIHNoaXBzICovXHJcbiAgICAgICAgaWYgKGQgPT0gJ3gnKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBmcmVlU3BhY2VzW3hdW3kgKyBpXSA9IGBzaGlwICR7bH1gO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIGlmIChkID09ICd5Jykge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGw7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgZnJlZVNwYWNlc1t4ICsgaV1beV0gPSBgc2hpcCAke2x9YDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBnYixcclxuICAgICAgICBmcmVlU3BhY2VzLFxyXG4gICAgICAgIHNoaXBzLFxyXG4gICAgICAgIGJ1aWxkRmxlZXQsXHJcbiAgICAgICAgdGVzdFBvc2l0aW9uLFxyXG4gICAgICAgIHJhbmRQb3NpdGlvbixcclxuICAgICAgICBwbGFjZVNoaXAsXHJcbiAgICB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcGxheWVyO1xyXG4iLCJjb25zdCBzaGlwID0gKGxlbmd0aCkgPT4ge1xyXG4gICAgbGV0IHdvdW5kcyA9IG5ldyBBcnJheShsZW5ndGgpO1xyXG4gICAgd291bmRzLmZpbGwoJ3NhZmUnKTtcclxuXHJcbiAgICAvKiB4U3RhcnQsIHhFbmQsIHlTdGFydCwgeUVuZCAqL1xyXG4gICAgbGV0IHBvc2l0aW9uID0gbmV3IEFycmF5KDQpO1xyXG4gICAgbGV0IGQgPSBuZXcgQXJyYXkoMSk7XHJcblxyXG4gICAgY29uc3QgZW5kT2ZTaGlwID0gKGRpcmVjdGlvbikgPT4ge1xyXG4gICAgICAgIGlmIChkaXJlY3Rpb24gPT0gJ3gnKSB7XHJcbiAgICAgICAgICAgIGRbMF0gPSAneCc7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uWzFdID0gcG9zaXRpb25bMF07XHJcbiAgICAgICAgICAgIHBvc2l0aW9uWzNdID0gcG9zaXRpb25bMl0gKyBsZW5ndGggLSAxO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoZGlyZWN0aW9uID09ICd5Jykge1xyXG4gICAgICAgICAgICBkWzBdID0gJ3knO1xyXG4gICAgICAgICAgICBwb3NpdGlvblsxXSA9IHBvc2l0aW9uWzBdICsgbGVuZ3RoIC0gMTtcclxuICAgICAgICAgICAgcG9zaXRpb25bM10gPSBwb3NpdGlvblsyXTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGhpdCA9IChkbWcpID0+IHtcclxuICAgICAgICB3b3VuZHNbZG1nXSA9ICdoaXQnO1xyXG4gICAgICAgIHJldHVybiB3b3VuZHNbZG1nXTtcclxuICAgIH07XHJcbiAgICBjb25zdCBpc1N1bmsgPSAoKSA9PiB7XHJcbiAgICAgICAgaWYgKHdvdW5kcy5ldmVyeSgodikgPT4gdiA9PSAnaGl0JykpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICByZXR1cm4geyB3b3VuZHMsIHBvc2l0aW9uLCBkLCBlbmRPZlNoaXAsIGhpdCwgaXNTdW5rIH07XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBzaGlwO1xyXG4iLCJpbXBvcnQgbG9nQ2xpY2sgZnJvbSAnLi4vZmFjdG9yeV9mdW5jdGlvbnMvbG9nQ2xpY2snO1xyXG5pbXBvcnQgc3R5bGVSb3dOZWlnaGJvdXJzIGZyb20gJy4vc3R5bGluZy9zdHlsZVJvd05laWdoYm91cnMnO1xyXG5pbXBvcnQgc3R5bGVDb2x1bW5OZWlnaG5vdXJzIGZyb20gJy4vc3R5bGluZy9zdHlsZUNvbHVtbk5laWdoYm91cnMnO1xyXG5cclxuZnVuY3Rpb24gY2xpY2tGZWVkYmFjayhwLCBnYiwgZywgaSwgaikge1xyXG4gICAgaWYgKFN0cmluZyhwLmZyZWVTcGFjZXNbaV1bal0pLmluY2x1ZGVzKCdzaGlwJykpIHtcclxuICAgICAgICAvKiBhZGQgYXBwcm9waWF0ZSBzdHlsaW5nICovXHJcbiAgICAgICAgZy5jbGFzc0xpc3QuYWRkKCdzaGlwLWNsaWNrZWQnKTtcclxuXHJcbiAgICAgICAgLyogbG9nIHRoZSBjbGlja3MgY29vcmRpbmF0ZXMgKi9cclxuICAgICAgICBjb25zdCBjbGljayA9IGxvZ0NsaWNrKGdiLCBnKTtcclxuICAgICAgICAvKiBwbGF5IHRoZSByZWNlaXZlQXR0YWNrIGZ1bmN0aW9uICovXHJcbiAgICAgICAgY29uc3Qgc2hpcCA9IHAuZ2IucmVjZWl2ZUF0dGFjayhjbGljay54Q29vcmQsIGNsaWNrLnlDb29yZCk7XHJcblxyXG4gICAgICAgIC8qICdjbGljaycgZGlhZ29uYWwgKi9cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDQ7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgeG4gPSBzZXREaWFnb25hbE5laWdoYm91ckNvb3JkcyhcclxuICAgICAgICAgICAgICAgIGksXHJcbiAgICAgICAgICAgICAgICBjbGljay54Q29vcmQsXHJcbiAgICAgICAgICAgICAgICBjbGljay55Q29vcmQsXHJcbiAgICAgICAgICAgICkueDtcclxuXHJcbiAgICAgICAgICAgIGxldCB5biA9IHNldERpYWdvbmFsTmVpZ2hib3VyQ29vcmRzKFxyXG4gICAgICAgICAgICAgICAgaSxcclxuICAgICAgICAgICAgICAgIGNsaWNrLnhDb29yZCxcclxuICAgICAgICAgICAgICAgIGNsaWNrLnlDb29yZCxcclxuICAgICAgICAgICAgKS55O1xyXG5cclxuICAgICAgICAgICAgaWYgKHhuID4gOSB8fCB4biA8IDAgfHwgeW4gPiA5IHx8IHluIDwgMCkge1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgZ2IuY2hpbGRyZW5beG4gKiAxMCArIHluXS5jbGFzc0xpc3QuYWRkKCdub24tY2xpY2tlZCcpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKiB3aGF0IHRvIGRvLCB3aGVuIHNoaXAgaXMgc3VuayAqL1xyXG4gICAgICAgIGNvbnN0IHN1bmsgPSBzaGlwLmlzU3VuaygpO1xyXG4gICAgICAgIGlmIChzdW5rID09IHRydWUpIHtcclxuICAgICAgICAgICAgaWYgKHNoaXAuZFswXSA9PSAneCcpIHtcclxuICAgICAgICAgICAgICAgIHN0eWxlUm93TmVpZ2hib3VycyhzaGlwLCBnYik7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoc2hpcC5kWzBdID09ICd5Jykge1xyXG4gICAgICAgICAgICAgICAgc3R5bGVDb2x1bW5OZWlnaG5vdXJzKHNoaXAsIGdiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZy5jbGFzc0xpc3QuYWRkKCdub24tY2xpY2tlZCcpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHdvbiA9IHAuZ2IuYWxsU2hpcHNTdW5rKCk7XHJcbiAgICBpZiAod29uKSB7XHJcbiAgICAgICAgY29uc3Qgd2lubmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaDMnKTtcclxuICAgICAgICBpZiAoZ2IuY2xhc3NOYW1lLmluY2x1ZGVzKCdwbGF5ZXJCb2FyZCcpKSB7XHJcbiAgICAgICAgICAgIHdpbm5lci5pbm5lclRleHQgPSAndGhlIGNwdSB3b24nO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHdpbm5lci5pbm5lclRleHQgPSAneW91IHdvbic7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHdpbm5lci5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuXHJcbiAgICAgICAgY29uc3QgZ2JzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2dhbWVib2FyZHMnKTtcclxuICAgICAgICBnYnMuaW5uZXJIVE1MID0gJyc7XHJcblxyXG4gICAgICAgIGNvbnN0IHdlbGNvbWVQYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3dlbGNvbWVQYWdlJyk7XHJcbiAgICAgICAgd2VsY29tZVBhZ2Uuc3R5bGUudG9wID0gJzAnO1xyXG4gICAgICAgIHdlbGNvbWVQYWdlLnN0eWxlLmJhY2tkcm9wRmlsdGVyID0gJ2JsdXIoMnZtYXgpJztcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xpY2tGZWVkYmFjaztcclxuXHJcbmNvbnN0IHNldERpYWdvbmFsTmVpZ2hib3VyQ29vcmRzID0gKGluZGV4LCB4Q29vcmQsIHlDb29yZCkgPT4ge1xyXG4gICAgc3dpdGNoIChpbmRleCkge1xyXG4gICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgeENvb3JkKys7XHJcbiAgICAgICAgICAgIHlDb29yZCsrO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgIHhDb29yZCsrO1xyXG4gICAgICAgICAgICB5Q29vcmQtLTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICB4Q29vcmQtLTtcclxuICAgICAgICAgICAgeUNvb3JkKys7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgMzpcclxuICAgICAgICAgICAgeENvb3JkLS07XHJcbiAgICAgICAgICAgIHlDb29yZC0tO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICBicmVhaztcclxuICAgIH1cclxuXHJcbiAgICBsZXQgeCA9IHhDb29yZDtcclxuICAgIGxldCB5ID0geUNvb3JkO1xyXG5cclxuICAgIHJldHVybiB7IHgsIHkgfTtcclxufTtcclxuIiwiaW1wb3J0IGNsaWNrRmVlZGJhY2sgZnJvbSAnLi9jbGlja0ZlZWRiYWNrJztcclxuaW1wb3J0IGdldFJhbmRvbUNvb3JkdGluYXRlcyBmcm9tICcuL2NwdUZ1bmN0aW9ucy9nZXRSYW5kb21Db29yZGluYXRlcyc7XHJcbmltcG9ydCBnZXRSYW5kb21OZWlnaGJvdXIgZnJvbSAnLi9jcHVGdW5jdGlvbnMvZ2V0UmFuZG9tTmVpZ2hib3VyJztcclxuaW1wb3J0IGNvdW50Q2xpY2tlZE5laWdoYm91cnMgZnJvbSAnLi9jcHVGdW5jdGlvbnMvY291bnRDbGlja2VkTmVpZ2hib3Vycyc7XHJcblxyXG4vKiBjbGljayBjb29yZGluYXRlcyBvZiB0aGUgY3B1ICovXHJcbmxldCB4ID0gMDtcclxubGV0IHkgPSAwO1xyXG4vKiB0aGUgY29vcmRpbmF0ZXMgb2YgdGhlIHByZXZpb3VzIGNsaWNrIG9mIHRoZSBjcHUgKi9cclxubGV0IHhwID0gMDtcclxubGV0IHlwID0gMDtcclxuLyogdGhlIGRpZmZlcmVuY2UgYmV0d2VlbiB0aGUgcHJldmlvdXMgYW5kIHRoZSBjdXJyZW50IGNsaWNrcyBjb29yZGluYXRlcyAqL1xyXG5sZXQgdng7XHJcbmxldCB2eTtcclxuLyogZGV0ZXJtaW5lLCB3ZWF0aGVyIHRoZSBkYW1hZ2VkIHNoaXAgaXMgc2lua2luZywgb3Igbm90IChhbHJlYWR5IHN1bmssIG9yIG5vIHNoaXAgZGFtYWdlZCkgKi9cclxubGV0IHNpbmtpbmcgPSBmYWxzZTtcclxuLyogc3RvcmVzIHRoZSBudW1iZXIgb2YgY2xpY2tlZCBuZWlnaGJvdXJzIChmdW5jdGlvbiByZXR1cm4pICovXHJcbmxldCBudW1iZXJPZkNsaWNrZWROZWlnaGJvdXJzO1xyXG4vKiB2YXJpYWJsZSwgdGhhdCBzdG9yZXMgdGhlIHNoaXBzIGRhdGFzIC0gdXNlZCB0byBkZXRlcm1pbmUsIHdlYXRoZXIgdGhlIHNoaXAgaGFzIHN1bmsgb3Igbm90IC0gaGFzIGEgZGVmYXVsdCB2YWx1ZSBvZiBmaXJzdCBzaGlwICovXHJcbi8vIGxldCBjbGlja2VkU2hpcCA9IGdhbWVib2FyZFswXS5wLnNoaXBzWzBdO1xyXG5sZXQgY2xpY2tlZFNoaXA7XHJcblxyXG5mdW5jdGlvbiBjcHVDbGljayhnYnMsIGdhbWVib2FyZCkge1xyXG4gICAgaWYgKHNpbmtpbmcgPT0gZmFsc2UpIHtcclxuICAgICAgICAvKiBpZiBubyBzaGlwIGlzIHNpbmtpbmcsIHRoZW4gZ2V0IGEgcmFuZG9tIGNvb3JkaW5hdGUgKi9cclxuICAgICAgICBsZXQgbnVtYiA9IGdldFJhbmRvbUNvb3JkdGluYXRlcyhnYnMpO1xyXG5cclxuICAgICAgICAvKiBnZXQgdGhlIGNvb3JkaW5hdGVzIG9mIHRoZSBoaXQgKi9cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8PSBudW1iOyBpICs9IDEwKSB7XHJcbiAgICAgICAgICAgIHggPSBpIC8gMTA7XHJcbiAgICAgICAgICAgIHkgPSBudW1iIC0geCAqIDEwO1xyXG4gICAgICAgIH1cclxuICAgIH0gZWxzZSBpZiAoc2lua2luZyA9PSB0cnVlKSB7XHJcbiAgICAgICAgLyogd2hhdCB0byBkbywgd2hlbiB0aGUgc2hpcCBpcyBoaXQsIGJ1dCBub3QgeWV0IHN1bmsgKi9cclxuICAgICAgICAvKiBpZiB0aGUgbGFzdCBlbGVtZW50IGlzIG5vdCBhIHNoaXAsIGJ1dCB0aGUgcHJldmlvdXMgYmVmb3JlIHRoYXQgaXMgYSBzaGlwLCB0aGFuIHJlY2FsY3VsYXRlIHRoZSBudW1iZXIgb2YgY2xpY2tlZCBuZWlnaGJvdXJzIGZvciB0aGUgbGFzdCBzaGlwICovXHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAhZ2JzWzBdLmNoaWxkcmVuWzEwICogeCArIHldLmNsYXNzTmFtZS5pbmNsdWRlcygnc2hpcCcpICYmXHJcbiAgICAgICAgICAgIGdic1swXS5jaGlsZHJlblsxMCAqIHhwICsgeXBdLmNsYXNzTmFtZS5pbmNsdWRlcygnc2hpcCcpXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIG51bWJlck9mQ2xpY2tlZE5laWdoYm91cnMgPSBjb3VudENsaWNrZWROZWlnaGJvdXJzKHhwLCB5cCwgZ2JzKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChudW1iZXJPZkNsaWNrZWROZWlnaGJvdXJzID09IDQpIHtcclxuICAgICAgICAgICAgLyogZ2V0IHRoZSBvcHBvc2l0ZSBkaXJlY3Rpb24gb2YgY2xpY2tpbmcgKi9cclxuICAgICAgICAgICAgdnggPSB4IC0geHA7XHJcbiAgICAgICAgICAgIHZ5ID0geSAtIHlwO1xyXG5cclxuICAgICAgICAgICAgLyogZ2V0IHRvIHRoZSBsYXN0IGNsaWNrZWQgc2hpcCAqL1xyXG4gICAgICAgICAgICB4ID0geCAtIHZ4O1xyXG4gICAgICAgICAgICB5ID0geSAtIHZ5O1xyXG5cclxuICAgICAgICAgICAgLyogd2hpbGUgdGhlIGdyaWQgZWxlbWVudCBpcyBjbGlja2VkIGFuZCBpcyBzaGlwLCBzdGVwIHRvIHRoZSBuZXh0IGVsZW1lbnQgKGdvaW5nIGJhY2t3YXJkcykgKi9cclxuICAgICAgICAgICAgd2hpbGUgKFxyXG4gICAgICAgICAgICAgICAgZ2JzWzBdLmNoaWxkcmVuWzEwICogeCArIHldLmNsYXNzTmFtZS5pbmNsdWRlcygnY2xpY2tlZCcpICYmXHJcbiAgICAgICAgICAgICAgICBnYnNbMF0uY2hpbGRyZW5bMTAgKiB4ICsgeV0uY2xhc3NOYW1lLmluY2x1ZGVzKCdzaGlwJylcclxuICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICB4ID0geCAtIHZ4O1xyXG4gICAgICAgICAgICAgICAgeSA9IHkgLSB2eTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvKiBnZXQgYmFjayB0byB0aGUgbGFzdCBzaGlwIChvdGhlcndpc2UgdGhlIGNwdSBpcyBsb29raW5nIGZvciBhIGZyZWUgbmVpZ2hib3VyIG9mIGFuIHVuY2xpY2tlZCBzaGlwKSAqL1xyXG4gICAgICAgICAgICB4ID0geCArIHZ4O1xyXG4gICAgICAgICAgICB5ID0geSArIHZ5O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyogaWYgdGhlIGxhc3QgZWxlbWVudCBpcyBub3QgYSBzaGlwICh0aGUgc2VsZWN0ZWQgbmVpZ2hib3VyIGlzIG5vdCBhIHNoaXApLCB0aGVuIGdvIGJhY2sgdG8gdGhlIGxhc3Qgc2hpcCAqL1xyXG4gICAgICAgIGlmICghZ2JzWzBdLmNoaWxkcmVuWzEwICogeCArIHldLmNsYXNzTmFtZS5pbmNsdWRlcygnc2hpcCcpKSB7XHJcbiAgICAgICAgICAgIHggPSB4cDtcclxuICAgICAgICAgICAgeSA9IHlwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyogZ2V0IGEgcmFuZG9tIG5laWdoYm91ciBvZiB0aGUgc2VsZWN0ZWQgZWxlbWVudCwgdGhhdCBpcyBub3QgY2xpY2tlZCAqL1xyXG4gICAgICAgIGNvbnN0IG5laWdoYm91ciA9IGdldFJhbmRvbU5laWdoYm91cih4LCB5LCBnYnMpO1xyXG5cclxuICAgICAgICAvKiBsb2cgdGhlIHByZXZpb3VzIGNsaWNrLCBhbmQgdGhlIG5ldyAqL1xyXG4gICAgICAgIHhwID0geDtcclxuICAgICAgICB5cCA9IHk7XHJcbiAgICAgICAgeCA9IG5laWdoYm91ci54bjtcclxuICAgICAgICB5ID0gbmVpZ2hib3VyLnluO1xyXG4gICAgfVxyXG5cclxuICAgIC8qIGxvb2sgZm9yIHRoZSBjbGlja2VkIHNoaXAgKGlmIGFueSkgaW4gdGhlIGZhY3RvcnkgZnVuY3Rpb25zICovXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgIGdhbWVib2FyZFswXS5wLnNoaXBzW2ldLnBvc2l0aW9uWzBdIDw9IHggJiZcclxuICAgICAgICAgICAgZ2FtZWJvYXJkWzBdLnAuc2hpcHNbaV0ucG9zaXRpb25bMV0gPj0geCAmJlxyXG4gICAgICAgICAgICBnYW1lYm9hcmRbMF0ucC5zaGlwc1tpXS5wb3NpdGlvblsyXSA8PSB5ICYmXHJcbiAgICAgICAgICAgIGdhbWVib2FyZFswXS5wLnNoaXBzW2ldLnBvc2l0aW9uWzNdID49IHlcclxuICAgICAgICApIHtcclxuICAgICAgICAgICAgY2xpY2tlZFNoaXAgPSBnYW1lYm9hcmRbMF0ucC5zaGlwc1tpXTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyogaW5pdGlhdGUgdGhlIERPTSBmZWVkYmFjayBvZiB0aGUgJ2NsaWNrJyAqL1xyXG4gICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuICAgICAgICBjbGlja0ZlZWRiYWNrKGdhbWVib2FyZFswXS5wLCBnYnNbMF0sIGdic1swXS5jaGlsZHJlblsxMCAqIHggKyB5XSwgeCwgeSk7XHJcblxyXG4gICAgICAgIC8qIGNvdW50IHRoZSBjbGlja2VkIG5laWdoYm91cnMgb2YgdGhlIGNsaWNrICovXHJcbiAgICAgICAgbnVtYmVyT2ZDbGlja2VkTmVpZ2hib3VycyA9IGNvdW50Q2xpY2tlZE5laWdoYm91cnMoeCwgeSwgZ2JzKTtcclxuICAgIFxyXG4gICAgICAgIC8qIGlmIHRoZSBjbGljayBoaXQsIHRoZW4gY2FsbCBmb3IgdGhpcyBmdW5jdGlvbiAnY2xpY2snIGFnYWluICovXHJcbiAgICAgICAgaWYgKGdic1swXS5jaGlsZHJlblsxMCAqIHggKyB5XS5jbGFzc05hbWUuaW5jbHVkZXMoJ3NoaXAnKSkge1xyXG4gICAgICAgICAgICAvKiBkZXRlcm1pbmUsIHdlYXRoZXIgdGhlIGNsaWNrIHN1bmsgYSBzaGlwLCBvciBub3QgKi9cclxuICAgICAgICAgICAgaWYgKGNsaWNrZWRTaGlwLmlzU3VuaygpID09IHRydWUpIHtcclxuICAgICAgICAgICAgICAgIHNpbmtpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHNpbmtpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNwdUNsaWNrKGdicywgZ2FtZWJvYXJkKTtcclxuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICBcclxuICAgICAgICAgICAgfSwgNTAwKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgLyogaWYgdGhlIGNsaWNrIGRpZG4ndCBoaXQsIHRoZW4gdGhlIHBsYXllcidzIHR1cm4gY29tZXMgKi9cclxuICAgICAgICAgICAgICAgIGdic1swXS5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUtZ2InKTtcclxuICAgICAgICAgICAgICAgIGdic1sxXS5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUtZ2InKTtcclxuICAgICAgICAgICAgfSwgNTAwKTtcclxuICAgICAgICB9XHJcbiAgICB9LCA1MDApO1xyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY3B1Q2xpY2s7XHJcbiIsImltcG9ydCBnZXROZWlnaGJvdXJDb29yZHMgZnJvbSAnLi9nZXROZWlnaGJvdXJDb29yZHMnO1xyXG5cclxuLyogY2hlY2sgdGhlIG5laWdoYm91cnM6IGxvZyB0aGUgbnVtYmVyIG9mIG5vbi1jbGlja2VkIG5laWdoYm91cnMgKG5vIG5laWdoYm91ciBpcyBjb3VudGVkKSAqL1xyXG5mdW5jdGlvbiBjb3VudENsaWNrZWROZWlnaGJvdXJzKHgsIHksIGdicykge1xyXG4gICAgbGV0IGNsaWNrZWROZWlnaGJvdXJzID0gMDtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNDsgaSsrKSB7XHJcbiAgICAgICAgY29uc3QgbmVpZ2hib3VyID0gZ2V0TmVpZ2hib3VyQ29vcmRzKGksIHgsIHkpO1xyXG4gICAgICAgIGxldCB4biA9IG5laWdoYm91ci54O1xyXG4gICAgICAgIGxldCB5biA9IG5laWdoYm91ci55O1xyXG5cclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgIHhuID4gOSB8fFxyXG4gICAgICAgICAgICB4biA8IDAgfHxcclxuICAgICAgICAgICAgeW4gPiA5IHx8XHJcbiAgICAgICAgICAgIHluIDwgMCB8fFxyXG4gICAgICAgICAgICBnYnNbMF0uY2hpbGRyZW5bMTAgKiB4biArIHluXS5jbGFzc05hbWUuaW5jbHVkZXMoJ2NsaWNrZWQnKVxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgICBjbGlja2VkTmVpZ2hib3VycysrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBjbGlja2VkTmVpZ2hib3VycztcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY291bnRDbGlja2VkTmVpZ2hib3VycztcclxuIiwiLyogZ2V0IHRoZSBjb29yZGluYXRlcyBvZiB0aGUgcmFuZG9tbHkgc2VsZWN0ZWQgbmVpZ2hib3VyICovXHJcbmNvbnN0IGdldE5laWdoYm91ckNvb3JkcyA9IChpbmRleCwgeENvb3JkLCB5Q29vcmQpID0+IHtcclxuICAgIHN3aXRjaCAoaW5kZXgpIHtcclxuICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgIHhDb29yZCsrO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgIHhDb29yZC0tO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgIHlDb29yZCsrO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIDM6XHJcbiAgICAgICAgICAgIHlDb29yZC0tO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICBicmVhaztcclxuICAgIH1cclxuXHJcbiAgICBsZXQgeCA9IHhDb29yZDtcclxuICAgIGxldCB5ID0geUNvb3JkO1xyXG5cclxuICAgIHJldHVybiB7IHgsIHkgfTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGdldE5laWdoYm91ckNvb3JkcztcclxuIiwiLyogZ2V0IGEgcmFuZG9tIGNvb3JkaW5hdGUgb2YgdGhlIGdyaWQ6IGlmIGl0IGhhcyBiZWVuIGNsaWNrZWQgcHJldmlvdXNseSwgZ2V0IGFub3RoZXIgb25lICovXHJcbmZ1bmN0aW9uIGdldFJhbmRvbUNvb3JkdGluYXRlcyhnYnMpIHtcclxuICAgIGNvbnN0IHJuZFggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XHJcbiAgICBjb25zdCBybmRZID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xyXG4gICAgbGV0IG51bWIgPSAxMCAqIHJuZFggKyBybmRZO1xyXG5cclxuICAgIGlmIChnYnNbMF0uY2hpbGRyZW5bbnVtYl0uY2xhc3NOYW1lLmluY2x1ZGVzKCdjbGlja2VkJykpIHtcclxuICAgICAgICBudW1iID0gZ2V0UmFuZG9tQ29vcmR0aW5hdGVzKGdicyk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIG51bWI7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGdldFJhbmRvbUNvb3JkdGluYXRlcztcclxuIiwiaW1wb3J0IGdldE5laWdoYm91ckNvb3JkcyBmcm9tICcuL2dldE5laWdoYm91ckNvb3Jkcyc7XHJcblxyXG4vKiBnZXQgYSByYW5kb20gbmVpZ2hib3VyOiBpZiBpdCBoYXMgYmVlbiBhbHJlYWR5IGNsaWNrZWQsIG9yIGl0IGlzIG91dCBvZiB0aGUgZ3JpZCwgdGhlbiBzZWxlY3QgYW5vdGhlciBvbmUgKi9cclxuY29uc3QgZ2V0UmFuZG9tTmVpZ2hib3VyID0gKHJuZFgsIHJuZFksIGdicykgPT4ge1xyXG4gICAgbGV0IHIgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA0KTtcclxuXHJcbiAgICBjb25zdCBuZWlnaGJvdXIgPSBnZXROZWlnaGJvdXJDb29yZHMociwgcm5kWCwgcm5kWSk7XHJcbiAgICBsZXQgeG4gPSBuZWlnaGJvdXIueDtcclxuICAgIGxldCB5biA9IG5laWdoYm91ci55O1xyXG5cclxuICAgIGlmIChcclxuICAgICAgICB4biA+IDkgfHxcclxuICAgICAgICB4biA8IDAgfHxcclxuICAgICAgICB5biA+IDkgfHxcclxuICAgICAgICB5biA8IDAgfHxcclxuICAgICAgICBnYnNbMF0uY2hpbGRyZW5beG4gKiAxMCArIHluXS5jbGFzc05hbWUuaW5jbHVkZXMoJ2NsaWNrZWQnKVxyXG4gICAgKSB7XHJcbiAgICAgICAgbGV0IG5laWdoYm91ciA9IGdldFJhbmRvbU5laWdoYm91cihybmRYLCBybmRZLCBnYnMpO1xyXG4gICAgICAgIHhuID0gbmVpZ2hib3VyLnhuO1xyXG4gICAgICAgIHluID0gbmVpZ2hib3VyLnluO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7IHhuLCB5biB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZ2V0UmFuZG9tTmVpZ2hib3VyO1xyXG4iLCJpbXBvcnQgY2xpY2tGZWVkYmFjayBmcm9tIFwiLi4vY2xpY2tGZWVkYmFja1wiO1xyXG5pbXBvcnQgY3B1Q2xpY2sgZnJvbSBcIi4uL2NwdUNsaWNrXCI7XHJcblxyXG4vKiBjbGljayBjb29yZGluYXRlcyBvZiB0aGUgcGxheWVyICovXHJcbmxldCB4UGxheWVyO1xyXG5sZXQgeVBMYXllcjtcclxuXHJcbmZ1bmN0aW9uIHBsYXllckNsaWNrKGUsIGdhbWVib2FyZCwgZ2JzKSB7XHJcbiAgICAvKiBnZXQgdGhlIG51bWJlciBvZiB0aGUgY2xpY2sgKi9cclxuICAgIGxldCBudW1iID0gQXJyYXkuZnJvbShnYnNbMV0uY2hpbGRyZW4pLmluZGV4T2YoZS50YXJnZXQpO1xyXG5cclxuICAgIC8qIGdldCB0aGUgY29vcmRpbmF0ZXMgKi9cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDw9IG51bWI7IGkgKz0gMTApIHtcclxuICAgICAgICB4UGxheWVyID0gaSAvIDEwO1xyXG4gICAgICAgIHlQTGF5ZXIgPSBudW1iIC0geFBsYXllciAqIDEwO1xyXG4gICAgfVxyXG4gICAgLyogZ2V0IHRoZSBET00gZmVlZGJhY2sgKi9cclxuICAgIGNsaWNrRmVlZGJhY2soZ2FtZWJvYXJkWzFdLnAsIGdic1sxXSwgZS50YXJnZXQsIHhQbGF5ZXIsIHlQTGF5ZXIpO1xyXG5cclxuICAgIC8qIGlmIHRoZSBjbGljayBkaWRuJ3QgaGl0LCB0aGVuIHRoZSBjcHUgY29tZXMgKi9cclxuICAgIGlmICghZS50YXJnZXQuY2xhc3NOYW1lLmluY2x1ZGVzKCdzaGlwJykpIHtcclxuICAgICAgICBnYnNbMF0uY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlLWdiJyk7XHJcbiAgICAgICAgZ2JzWzFdLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZS1nYicpO1xyXG5cclxuICAgICAgICBjcHVDbGljayhnYnMsIGdhbWVib2FyZCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHBsYXllckNsaWNrOyIsImltcG9ydCBjcmVhdGVHcmlkRWxlbWVudCBmcm9tICcuL2NyZWF0ZUdyaWRFbGVtZW50JztcclxuaW1wb3J0IGFkZFN0eWxpbmdHcmlkIGZyb20gJy4uL3N0eWxpbmcvYWRkU3R5bGluZ0dyaWQnO1xyXG5cclxuZnVuY3Rpb24gYnVpbGRHcmlkKGdiLCBwKSB7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcclxuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDEwOyBqKyspIHtcclxuICAgICAgICAgICAgLyogY3JlYXRlIGdyaWQgZWxlbWVudHMgKi9cclxuICAgICAgICAgICAgY29uc3QgZyA9IGNyZWF0ZUdyaWRFbGVtZW50KGdiKTtcclxuICAgICAgICAgICAgYWRkU3R5bGluZ0dyaWQocCwgZywgaSwgaik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBidWlsZEdyaWQ7XHJcbiIsImZ1bmN0aW9uIGNyZWF0ZUdyaWRFbGVtZW50KGdiKSB7XHJcbiAgICBjb25zdCBnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAvLyBnLmNsYXNzTGlzdC5hZGQoJ2dyaWQnKTtcclxuICAgIGdiLmFwcGVuZENoaWxkKGcpO1xyXG4gICAgcmV0dXJuIGc7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUdyaWRFbGVtZW50OyIsImZ1bmN0aW9uIGFkZFN0eWxpbmdHcmlkKHAsIGcsIGksIGopIHtcclxuICAgIGlmIChTdHJpbmcocC5mcmVlU3BhY2VzW2ldW2pdKS5pbmNsdWRlcygnc2hpcCcpKSB7XHJcbiAgICAgICAgY29uc3QgbGluZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGNvbnN0IGxpbmUyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgbGluZS5jbGFzc0xpc3QuYWRkKCdsaW5lJyk7XHJcbiAgICAgICAgbGluZTIuY2xhc3NMaXN0LmFkZCgnbGluZScpO1xyXG5cclxuICAgICAgICBnLmFwcGVuZChsaW5lLCBsaW5lMik7XHJcbiAgICAgICAgZy5jbGFzc0xpc3QuYWRkKCdzaGlwJyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnN0IHBvaW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgcG9pbnQuY2xhc3NMaXN0LmFkZCgncG9pbnQnKTtcclxuXHJcbiAgICAgICAgZy5hcHBlbmRDaGlsZChwb2ludCk7XHJcbiAgICAgICAgZy5jbGFzc0xpc3QuYWRkKCdub24nKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgYWRkU3R5bGluZ0dyaWQ7XHJcbiIsImZ1bmN0aW9uIHN0eWxlQ29sdW1uTmVpZ2hub3VycyhzaGlwLCBnYikge1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwLndvdW5kcy5sZW5ndGggKyAyOyBpKyspIHtcclxuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDM7IGorKykge1xyXG4gICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICBzaGlwLnBvc2l0aW9uWzBdIC0gMSArIGkgPD0gOSAmJlxyXG4gICAgICAgICAgICAgICAgc2hpcC5wb3NpdGlvblsyXSAtIDEgKyBqIDw9IDkgJiZcclxuICAgICAgICAgICAgICAgIHNoaXAucG9zaXRpb25bMF0gLSAxICsgaSA+PSAwICYmXHJcbiAgICAgICAgICAgICAgICBzaGlwLnBvc2l0aW9uWzJdIC0gMSArIGogPj0gMCAmJlxyXG4gICAgICAgICAgICAgICAgIWdiLmNoaWxkcmVuW1xyXG4gICAgICAgICAgICAgICAgICAgIChzaGlwLnBvc2l0aW9uWzBdIC0gMSArIGkpICogMTAgKyBzaGlwLnBvc2l0aW9uWzJdIC0gMSArIGpcclxuICAgICAgICAgICAgICAgIF0uY2xhc3NOYW1lLmluY2x1ZGVzKCdzaGlwJylcclxuICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBmcmVlU3BhY2VzW3ggLSAxICsgaV1beSAtIDEgKyBqXSA9ICd4JztcclxuICAgICAgICAgICAgICAgIGdiLmNoaWxkcmVuW1xyXG4gICAgICAgICAgICAgICAgICAgIChzaGlwLnBvc2l0aW9uWzBdIC0gMSArIGkpICogMTAgKyBzaGlwLnBvc2l0aW9uWzJdIC0gMSArIGpcclxuICAgICAgICAgICAgICAgIF0uY2xhc3NMaXN0LmFkZCgnbm9uLWNsaWNrZWQnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgc3R5bGVDb2x1bW5OZWlnaG5vdXJzOyIsImZ1bmN0aW9uIHN0eWxlUm93TmVpZ2hib3VycyhzaGlwLCBnYikge1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwLndvdW5kcy5sZW5ndGggKyAyOyBpKyspIHtcclxuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDM7IGorKykge1xyXG4gICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICBzaGlwLnBvc2l0aW9uWzBdIC0gMSArIGogPD0gOSAmJlxyXG4gICAgICAgICAgICAgICAgc2hpcC5wb3NpdGlvblsyXSAtIDEgKyBpIDw9IDkgJiZcclxuICAgICAgICAgICAgICAgIHNoaXAucG9zaXRpb25bMF0gLSAxICsgaiA+PSAwICYmXHJcbiAgICAgICAgICAgICAgICBzaGlwLnBvc2l0aW9uWzJdIC0gMSArIGkgPj0gMCAmJlxyXG4gICAgICAgICAgICAgICAgIWdiLmNoaWxkcmVuW1xyXG4gICAgICAgICAgICAgICAgICAgIChzaGlwLnBvc2l0aW9uWzBdIC0gMSArIGopICogMTAgKyBzaGlwLnBvc2l0aW9uWzJdIC0gMSArIGlcclxuICAgICAgICAgICAgICAgIF0uY2xhc3NOYW1lLmluY2x1ZGVzKCdzaGlwJylcclxuICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICBnYi5jaGlsZHJlbltcclxuICAgICAgICAgICAgICAgICAgICAoc2hpcC5wb3NpdGlvblswXSAtIDEgKyBqKSAqIDEwICsgc2hpcC5wb3NpdGlvblsyXSAtIDEgKyBpXHJcbiAgICAgICAgICAgICAgICBdLmNsYXNzTGlzdC5hZGQoJ25vbi1jbGlja2VkJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHN0eWxlUm93TmVpZ2hib3VycztcclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZXMuY3NzJztcclxuaW1wb3J0IGJ1aWxkR2FtZWJvYXJkIGZyb20gJy4vZmFjdG9yeV9mdW5jdGlvbnMvYnVpbGRHYW1lYm9hcmQnO1xyXG5pbXBvcnQgYnVpbGRHcmlkIGZyb20gJy4vZnVuY3Rpb25zL2NyZWF0ZS9idWlsZEdyaWQnO1xyXG5pbXBvcnQgcGxheWVyQ2xpY2sgZnJvbSAnLi9mdW5jdGlvbnMvY3B1RnVuY3Rpb25zL3BsYXllckNsaWNrJztcclxuXHJcbmZ1bmN0aW9uIGdlbmVyYXRlUGxheWdyb3VuZCgpIHtcclxuICAgIC8qIGJ1aWxkIHRoZSB0d28gZ2FtZWJvYXJkIGZvciB0aGUgdGhlIHBsYXllciwgYW5kIHN0b3JlIHRoZSBnYW1lYm9hcmQgKi9cclxuICAgIGNvbnN0IGdhbWVib2FyZCA9IFtdO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAyOyBpKyspIHtcclxuICAgICAgICBjb25zdCBiID0gYnVpbGRHYW1lYm9hcmQoKTtcclxuICAgICAgICBidWlsZEdyaWQoYi5nYiwgYi5wKTtcclxuXHJcbiAgICAgICAgZ2FtZWJvYXJkW2ldID0gYjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBnYnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZ2FtZWJvYXJkJyk7XHJcbiAgICAvKiB0aGUgcGxheWVyIHN0YXJ0cyBhdHRhY2tpbmcgKi9cclxuICAgIGdic1swXS5jbGFzc0xpc3QuYWRkKCdwbGF5ZXJCb2FyZCcpO1xyXG5cclxuICAgIGNvbnN0IHN0YXJ0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3N0YXJ0Jyk7XHJcbiAgICBzdGFydEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFxyXG4gICAgICAgICdjbGljaycsXHJcbiAgICAgICAgKCkgPT4ge1xyXG4gICAgICAgICAgICBnYnNbMV0uY2xhc3NMaXN0LmFkZCgnYWN0aXZlLWdiJyk7XHJcbiAgICAgICAgICAgIHN0YXJ0QnV0dG9uLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgICAgIGNvbnN0IGdlbmVyYXRlQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2dlbmVyYXRlJyk7XHJcbiAgICAgICAgICAgIGdlbmVyYXRlQnV0dG9uLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7IG9uY2U6IHRydWUgfSxcclxuICAgICk7XHJcblxyXG4gICAgY29uc3QgcGxheWVyQm9hcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZ2FtZWJvYXJkcyA+IGRpdjpmaXJzdC1jaGlsZCcpO1xyXG4gICAgY29uc3QgcGxheWVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcclxuICAgIHBsYXllci5pbm5lclRleHQgPSBcInBsYXllcidzIGJvYXJkXCI7XHJcblxyXG4gICAgY29uc3QgY3B1Qm9hcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZ2FtZWJvYXJkcyA+IGRpdjpudGgtY2hpbGQoMiknKTtcclxuICAgIGNvbnN0IGNwdSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XHJcbiAgICBjcHUuaW5uZXJUZXh0ID0gXCJjcHUncyBib2FyZFwiO1xyXG4gICAgcGxheWVyQm9hcmQuaW5zZXJ0QmVmb3JlKHBsYXllciwgZ2JzWzBdKTtcclxuICAgIGNwdUJvYXJkLmluc2VydEJlZm9yZShjcHUsIGdic1sxXSk7XHJcblxyXG4gICAgLyogc29tZWhvdyBvbmx5IGdpdmluZyB0aGUgZW5lbXlzIHBsYXllcmJvYXJkIGNsaWNrIGV2ZW50IHJlc3VsdHMgaW4gYSBidWcgKi9cclxuICAgIGdicy5mb3JFYWNoKChiKSA9PiB7XHJcbiAgICAgICAgQXJyYXkuZnJvbShiLmNoaWxkcmVuKS5mb3JFYWNoKChnKSA9PiB7XHJcbiAgICAgICAgICAgIGcuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGdic1sxXS5jbGFzc05hbWUuaW5jbHVkZXMoJ2FjdGl2ZScpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGxheWVyQ2xpY2soZSwgZ2FtZWJvYXJkLCBnYnMpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjbGVhclBMYXlncm91bmQoKSB7XHJcbiAgICBjb25zdCBnYiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNnYW1lYm9hcmRzJyk7XHJcbiAgICBnYi5pbm5lckhUTUwgPSAnJztcclxufVxyXG5cclxuLy8gZ2VuZXJhdGVQbGF5Z3JvdW5kKCk7XHJcblxyXG5jb25zdCBnZW5lcmF0ZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNnZW5lcmF0ZScpO1xyXG5nZW5lcmF0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIGNsZWFyUExheWdyb3VuZCgpO1xyXG4gICAgZ2VuZXJhdGVQbGF5Z3JvdW5kKCk7XHJcbn0pO1xyXG5cclxuY29uc3QgbmV3R2FtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNuZXdHYW1lJyk7XHJcbm5ld0dhbWUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICBjbGVhclBMYXlncm91bmQoKTtcclxuICAgIGdlbmVyYXRlUGxheWdyb3VuZCgpO1xyXG5cclxuICAgIGNvbnN0IHdlbGNvbWVQYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3dlbGNvbWVQYWdlJyk7XHJcbiAgICAvLyBuZXdHYW1lLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgIHdlbGNvbWVQYWdlLnN0eWxlLnRvcCA9ICcxMDB2aCc7XHJcbiAgICB3ZWxjb21lUGFnZS5zdHlsZS5iYWNrZHJvcEZpbHRlciA9ICdibHVyKDBweCknO1xyXG5cclxuICAgIGNvbnN0IHN0YXJ0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3N0YXJ0Jyk7XHJcbiAgICBzdGFydEJ1dHRvbi5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgIGNvbnN0IGdlbmVyYXRlQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2dlbmVyYXRlJyk7XHJcbiAgICBnZW5lcmF0ZUJ1dHRvbi5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuXHJcbiAgICBjb25zdCBnYnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZ2FtZWJvYXJkJyk7XHJcbiAgICBnYnNbMF0uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlLWdiJyk7XHJcbiAgICBnYnNbMV0uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlLWdiJyk7XHJcbn0pO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=