/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Game: () => (/* binding */ Game)
/* harmony export */ });
/* harmony import */ var _objects_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./objects.js */ "./src/objects.js");

const Game = (() => {
  let players = [];
  let gameboards = [];
  let player = (0,_objects_js__WEBPACK_IMPORTED_MODULE_0__.Player)('Player', false);
  let playerGameboard = (0,_objects_js__WEBPACK_IMPORTED_MODULE_0__.Gameboard)();
  let computer = (0,_objects_js__WEBPACK_IMPORTED_MODULE_0__.Player)('Computer', true);
  let computerGameboard = (0,_objects_js__WEBPACK_IMPORTED_MODULE_0__.Gameboard)();
  players.push(player);
  players.push(computer);
  gameboards.push(playerGameboard);
  gameboards.push(computerGameboard);
  let activePlayer = players[0];
  let activeBoard = gameboards[0];
  const getActivePlayer = () => activePlayer;
  const getActiveGameboard = () => activeBoard;
  const getPlayer = () => player;
  const getComputer = () => computer;
  const getPlayerGameboard = () => playerGameboard;
  const getComputerGameboard = () => computerGameboard;
  const switchPlayerTurn = () => {
    if (activePlayer === players[0]) {
      activePlayer = players[1];
    } else {
      activePlayer = players[0];
    }
  };
  const switchActiveBoard = () => {
    if (activeBoard === gameboards[0]) {
      activeBoard = gameboards[1];
    } else {
      activeBoard = gameboards[0];
    }
  };
  return {
    getPlayer,
    getPlayerGameboard,
    getComputer,
    getComputerGameboard,
    getActivePlayer,
    getActiveGameboard,
    switchPlayerTurn,
    switchActiveBoard
  };
})();


/***/ }),

/***/ "./src/objects.js":
/*!************************!*\
  !*** ./src/objects.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Gameboard: () => (/* binding */ Gameboard),
/* harmony export */   Player: () => (/* binding */ Player),
/* harmony export */   Ship: () => (/* binding */ Ship)
/* harmony export */ });
const Ship = position => {
  const getPosition = () => position;
  const setPosition = coords => {
    getPosition().push(coords);
  };
  return {
    getPosition,
    setPosition
  };
};
const Gameboard = () => {
  const row = 10;
  const column = 10;
  const board = [];
  const misssedCells = [];
  const hitCells = [];
  const emptyCells = [];
  const occupiedCells = [];
  for (let i = 0; i < row; i++) {
    board[i] = [];
    for (let j = 0; j < column; j++) {
      board[i].push(i.toString() + j.toString());
    }
  }
  const getBoard = () => board;
  const getMissedCells = () => {
    return misssedCells;
  };
  const setMissedCells = newCell => {
    misssedCells.push(newCell);
  };
  const getHitCells = () => {
    return hitCells;
  };
  const setHitCells = newCell => {
    hitCells.push(newCell);
  };
  const getEmptyCells = () => {
    return emptyCells;
  };
  const setEmptyCells = newCell => {
    emptyCells.push(newCell);
  };
  const getOccupiedCells = () => {
    return occupiedCells;
  };
  const setOccupiedCells = newCell => {
    occupiedCells.push(newCell);
  };
  const placeShips = ships => {
    ships.forEach(ship => {
      ship.getPosition().forEach(positionCell => {
        setOccupiedCells(positionCell);
      });
    });
  };
  const placeEmptySpace = () => {
    getBoard().forEach(cell => {
      if (!getOccupiedCells().includes(cell)) {
        setEmptyCells(cell);
      }
    });
  };
  const recieveAttack = coordinate => {
    if (getOccupiedCells().includes(coordinate)) {
      setHitCells(coordinate);
    } else {
      setMissedCells(coordinate);
    }
    const occupiedIndex = getOccupiedCells().indexOf(coordinate);
    if (occupiedIndex > -1) {
      getOccupiedCells().splice(occupiedIndex, 1);
    }
    const emptyIndex = getEmptyCells().indexOf(coordinate);
    if (emptyIndex > -1) {
      getEmptyCells().splice(emptyIndex, 1);
    }
  };
  const checkGameOver = () => {
    if (getOccupiedCells.length == 0) {
      return true;
    } else {
      return false;
    }
  };
  return {
    getMissedCells,
    setMissedCells,
    getHitCells,
    setHitCells,
    getEmptyCells,
    setEmptyCells,
    getOccupiedCells,
    setOccupiedCells,
    getBoard,
    placeShips,
    placeEmptySpace,
    recieveAttack,
    checkGameOver
  };
};
const Player = (name, isAI) => {
  const getName = () => name;
  const getIsAI = () => isAI;
  const row = 10;
  const column = 10;
  const possibleChoices = [];
  for (let i = 0; i < row; i++) {
    possibleChoices[i] = [];
    for (let j = 0; j < column; j++) {
      possibleChoices[i].push(i.toString() + j.toString());
    }
  }
  const computerAttack = () => {
    if (getIsAI == true) {
      let attackCoordinate = possibleChoices[Math.floor(Math.random() * possibleChoices.length)];
      const index = possibleChoices.indexOf(attackCoordinate);
      if (index > -1) {
        possibleChoices.splice(index, 1);
      }
      return attackCoordinate;
    }
  };
  return {
    getName,
    computerAttack
  };
};


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, `.container {
    height: 100vh;

    display: grid;
    grid-template-columns: 1fr 1fr;
}

.player-one-gameboard {
    height: 500px;
    width: 500px;
    border: 1px solid black;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
}

.player-one-gameboard div {
    box-sizing: border-box;
    border: 1px solid black;
}

.player-two-gameboard {
    height: 500px;
    width: 500px;
    border: 1px solid black;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
}

.player-two-gameboard div {
    box-sizing: border-box;
    border: 1px solid black;
}

.occupied-cell {
    background: black;
}

.empty-cell {
    background: white;
}

.hit-cell {
    background: red;
}

.missed-cell {
    background: gray;
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,aAAa;;IAEb,aAAa;IACb,8BAA8B;AAClC;;AAEA;IACI,aAAa;IACb,YAAY;IACZ,uBAAuB;;IAEvB,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,eAAe;AACnB;;AAEA;IACI,sBAAsB;IACtB,uBAAuB;AAC3B;;AAEA;IACI,aAAa;IACb,YAAY;IACZ,uBAAuB;;IAEvB,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,eAAe;AACnB;;AAEA;IACI,sBAAsB;IACtB,uBAAuB;AAC3B;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,gBAAgB;AACpB","sourcesContent":[".container {\n    height: 100vh;\n\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n}\n\n.player-one-gameboard {\n    height: 500px;\n    width: 500px;\n    border: 1px solid black;\n\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-wrap: wrap;\n}\n\n.player-one-gameboard div {\n    box-sizing: border-box;\n    border: 1px solid black;\n}\n\n.player-two-gameboard {\n    height: 500px;\n    width: 500px;\n    border: 1px solid black;\n\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-wrap: wrap;\n}\n\n.player-two-gameboard div {\n    box-sizing: border-box;\n    border: 1px solid black;\n}\n\n.occupied-cell {\n    background: black;\n}\n\n.empty-cell {\n    background: white;\n}\n\n.hit-cell {\n    background: red;\n}\n\n.missed-cell {\n    background: gray;\n}"],"sourceRoot":""}]);
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
  var list = [];

  // return the list of modules as css string
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
  };

  // import a list of modules into the list
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
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
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
  }

  // For old IE
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
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
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
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _game_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game.js */ "./src/game.js");
/* harmony import */ var _objects_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./objects.js */ "./src/objects.js");



_game_js__WEBPACK_IMPORTED_MODULE_1__.Game;
function displayHeader() {
  const playerOneHeader = document.querySelector('.player-one-header');
  const playerTwoHeader = document.querySelector('.player-two-header');
  playerOneHeader.textContent = _game_js__WEBPACK_IMPORTED_MODULE_1__.Game.getActivePlayer().getName();
  _game_js__WEBPACK_IMPORTED_MODULE_1__.Game.switchPlayerTurn();
  playerTwoHeader.textContent = _game_js__WEBPACK_IMPORTED_MODULE_1__.Game.getActivePlayer().getName();
  _game_js__WEBPACK_IMPORTED_MODULE_1__.Game.switchPlayerTurn();
}
function renderPlayerGameboard(coordinate) {
  if (_game_js__WEBPACK_IMPORTED_MODULE_1__.Game.getPlayerGameboard().getOccupiedCells().includes(coordinate)) {
    coordinate.classList.add('occupied-cell');
  } else if (_game_js__WEBPACK_IMPORTED_MODULE_1__.Game.getPlayerGameboard().getEmptyCells().includes(coordinate)) {
    coordinate.classList.add('empty-cell');
  } else if (_game_js__WEBPACK_IMPORTED_MODULE_1__.Game.getPlayerGameboard().getHitCells().includes(coordinate)) {
    coordinate.classList.add('hit-cell');
  } else if (_game_js__WEBPACK_IMPORTED_MODULE_1__.Game.getPlayerGameboard().getMissedCells().includes(coordinate)) {
    coordinate.classList.add('missed-cell');
  }
}
function displayPlayerOneBoard() {
  const playerOneGameboard = document.querySelector('.player-one-gameboard');
  setPlayerShips();
  _game_js__WEBPACK_IMPORTED_MODULE_1__.Game.getPlayerGameboard().placeShips(playerShips);
  _game_js__WEBPACK_IMPORTED_MODULE_1__.Game.getPlayerGameboard().placeEmptySpace();
  _game_js__WEBPACK_IMPORTED_MODULE_1__.Game.getPlayerGameboard().getBoard().forEach(rowCell => {
    rowCell.forEach(columnCell => {
      const boardCell = document.createElement('div');
      boardCell.textContent = columnCell;
      boardCell.setAttribute('id', columnCell);
      boardCell.classList.add('player-one-cells');
      if (_game_js__WEBPACK_IMPORTED_MODULE_1__.Game.getPlayerGameboard().getOccupiedCells().includes(boardCell.textContent)) {
        boardCell.classList.add('occupied-cell');
      } else if (_game_js__WEBPACK_IMPORTED_MODULE_1__.Game.getPlayerGameboard().getEmptyCells().includes(boardCell.textContent)) {
        boardCell.classList.add('empty-cell');
      } else if (_game_js__WEBPACK_IMPORTED_MODULE_1__.Game.getPlayerGameboard().getHitCells().includes(boardCell.textContent)) {
        boardCell.classList.add('hit-cell');
      } else if (_game_js__WEBPACK_IMPORTED_MODULE_1__.Game.getPlayerGameboard().getMissedCells().includes(boardCell.textContent)) {
        boardCell.classList.add('missed-cell');
      }
      boardCell.style.width = '10%';
      boardCell.style.height = '10%';
      playerOneGameboard.appendChild(boardCell);
    });
  });
}
function displayPlayerTwoBoard() {
  const playerTwoGameboard = document.querySelector('.player-two-gameboard');
  _game_js__WEBPACK_IMPORTED_MODULE_1__.Game.getComputerGameboard().getBoard().forEach(rowCell => {
    rowCell.forEach(columnCell => {
      const boardCell = document.createElement('div');
      boardCell.textContent = columnCell;
      boardCell.setAttribute('id', columnCell);
      boardCell.classList.add('player-two-cells');
      boardCell.style.width = '10%';
      boardCell.style.height = '10%';
      playerTwoGameboard.appendChild(boardCell);
    });
  });
}
let playerShips = [];
function setPlayerShips() {
  let carrier = (0,_objects_js__WEBPACK_IMPORTED_MODULE_2__.Ship)(['42', '43', '44', '45', '46'], false);
  let battleship = (0,_objects_js__WEBPACK_IMPORTED_MODULE_2__.Ship)(['09', '19', '29', '39'], false);
  let destroyer = (0,_objects_js__WEBPACK_IMPORTED_MODULE_2__.Ship)(['72', '73', '74'], false);
  let submarine = (0,_objects_js__WEBPACK_IMPORTED_MODULE_2__.Ship)(['67', '77', '87'], false);
  let patrol = (0,_objects_js__WEBPACK_IMPORTED_MODULE_2__.Ship)(['11', '12'], false);
  playerShips.push(carrier);
  playerShips.push(battleship);
  playerShips.push(destroyer);
  playerShips.push(submarine);
  playerShips.push(patrol);
}
displayHeader();
displayPlayerOneBoard();
displayPlayerTwoBoard();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFHbkcsaURBQUksQ0FBQyxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLEVBQUUsS0FBSyxDQUFDO0VBQy9DLElBQUlvRyxNQUFNLEdBQUdwRyxpREFBSSxDQUFDLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxFQUFFLEtBQUssQ0FBQztFQUV0Q29GLFdBQVcsQ0FBQzFFLElBQUksQ0FBQ3NGLE9BQU8sQ0FBQztFQUN6QlosV0FBVyxDQUFDMUUsSUFBSSxDQUFDdUYsVUFBVSxDQUFDO0VBQzVCYixXQUFXLENBQUMxRSxJQUFJLENBQUN3RixTQUFTLENBQUM7RUFDM0JkLFdBQVcsQ0FBQzFFLElBQUksQ0FBQ3lGLFNBQVMsQ0FBQztFQUMzQmYsV0FBVyxDQUFDMUUsSUFBSSxDQUFDMEYsTUFBTSxDQUFDO0FBQzVCO0FBRUE1QixhQUFhLENBQUMsQ0FBQztBQUNmUyxxQkFBcUIsQ0FBQyxDQUFDO0FBQ3ZCYSxxQkFBcUIsQ0FBQyxDQUFDLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2dhbWUuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9vYmplY3RzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTaGlwLCBHYW1lYm9hcmQsIFBsYXllciB9IGZyb20gXCIuL29iamVjdHMuanNcIjtcblxuY29uc3QgR2FtZSA9ICgoKSA9PiB7XG5cbiAgICBsZXQgcGxheWVycyA9IFtdXG4gICAgbGV0IGdhbWVib2FyZHMgPSBbXVxuXG4gICAgbGV0IHBsYXllciA9IFBsYXllcignUGxheWVyJywgZmFsc2UpXG4gICAgbGV0IHBsYXllckdhbWVib2FyZCA9IEdhbWVib2FyZCgpXG5cbiAgICBsZXQgY29tcHV0ZXIgPSBQbGF5ZXIoJ0NvbXB1dGVyJywgdHJ1ZSlcbiAgICBsZXQgY29tcHV0ZXJHYW1lYm9hcmQgPSBHYW1lYm9hcmQoKVxuXG4gICAgcGxheWVycy5wdXNoKHBsYXllcilcbiAgICBwbGF5ZXJzLnB1c2goY29tcHV0ZXIpXG5cbiAgICBnYW1lYm9hcmRzLnB1c2gocGxheWVyR2FtZWJvYXJkKVxuICAgIGdhbWVib2FyZHMucHVzaChjb21wdXRlckdhbWVib2FyZClcblxuICAgIGxldCBhY3RpdmVQbGF5ZXIgPSBwbGF5ZXJzWzBdXG4gICAgbGV0IGFjdGl2ZUJvYXJkID0gZ2FtZWJvYXJkc1swXVxuXG4gICAgY29uc3QgZ2V0QWN0aXZlUGxheWVyID0gKCkgPT4gYWN0aXZlUGxheWVyXG4gICAgY29uc3QgZ2V0QWN0aXZlR2FtZWJvYXJkID0gKCkgPT4gYWN0aXZlQm9hcmRcblxuICAgIGNvbnN0IGdldFBsYXllciA9ICgpID0+IHBsYXllclxuICAgIGNvbnN0IGdldENvbXB1dGVyID0gKCkgPT4gY29tcHV0ZXJcblxuICAgIGNvbnN0IGdldFBsYXllckdhbWVib2FyZCA9ICgpID0+IHBsYXllckdhbWVib2FyZFxuICAgIGNvbnN0IGdldENvbXB1dGVyR2FtZWJvYXJkID0gKCkgPT4gY29tcHV0ZXJHYW1lYm9hcmRcblxuICAgIGNvbnN0IHN3aXRjaFBsYXllclR1cm4gPSAoKSA9PiB7XG4gICAgICAgIGlmIChhY3RpdmVQbGF5ZXIgPT09IHBsYXllcnNbMF0pIHtcbiAgICAgICAgICAgIGFjdGl2ZVBsYXllciA9IHBsYXllcnNbMV1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGFjdGl2ZVBsYXllciA9IHBsYXllcnNbMF1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHN3aXRjaEFjdGl2ZUJvYXJkID0gKCkgPT4ge1xuICAgICAgICBpZiAoYWN0aXZlQm9hcmQgPT09IGdhbWVib2FyZHNbMF0pIHtcbiAgICAgICAgICAgIGFjdGl2ZUJvYXJkID0gZ2FtZWJvYXJkc1sxXVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYWN0aXZlQm9hcmQgPSBnYW1lYm9hcmRzWzBdXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBnZXRQbGF5ZXIsXG4gICAgICAgIGdldFBsYXllckdhbWVib2FyZCxcbiAgICAgICAgZ2V0Q29tcHV0ZXIsXG4gICAgICAgIGdldENvbXB1dGVyR2FtZWJvYXJkLFxuICAgICAgICBnZXRBY3RpdmVQbGF5ZXIsXG4gICAgICAgIGdldEFjdGl2ZUdhbWVib2FyZCxcbiAgICAgICAgc3dpdGNoUGxheWVyVHVybixcbiAgICAgICAgc3dpdGNoQWN0aXZlQm9hcmRcbiAgICB9XG5cbn0pKCk7XG5cbmV4cG9ydCB7IEdhbWUgfSAiLCJjb25zdCBTaGlwID0gKHBvc2l0aW9uKSA9PiB7XG5cbiAgICBjb25zdCBnZXRQb3NpdGlvbiA9ICgpID0+IHBvc2l0aW9uXG5cbiAgICBjb25zdCBzZXRQb3NpdGlvbiA9IChjb29yZHMpID0+IHtcbiAgICAgICAgZ2V0UG9zaXRpb24oKS5wdXNoKGNvb3JkcylcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBnZXRQb3NpdGlvbixcbiAgICAgICAgc2V0UG9zaXRpb25cbiAgICB9XG59XG5cbmNvbnN0IEdhbWVib2FyZCA9ICgpID0+IHtcbiAgICBjb25zdCByb3cgPSAxMFxuICAgIGNvbnN0IGNvbHVtbiA9IDEwXG4gICAgY29uc3QgYm9hcmQgPSBbXVxuICAgIGNvbnN0IG1pc3NzZWRDZWxscyA9IFtdXG4gICAgY29uc3QgaGl0Q2VsbHMgPSBbXVxuICAgIGNvbnN0IGVtcHR5Q2VsbHMgPSBbXVxuICAgIGNvbnN0IG9jY3VwaWVkQ2VsbHMgPSBbXVxuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCByb3c7IGkrKykge1xuICAgICAgICBib2FyZFtpXSA9IFtdXG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgY29sdW1uOyBqKyspIHtcbiAgICAgICAgICAgIGJvYXJkW2ldLnB1c2goaS50b1N0cmluZygpICsgai50b1N0cmluZygpKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgZ2V0Qm9hcmQgPSAoKSA9PiBib2FyZFxuXG4gICAgY29uc3QgZ2V0TWlzc2VkQ2VsbHMgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBtaXNzc2VkQ2VsbHNcbiAgICB9XG5cbiAgICBjb25zdCBzZXRNaXNzZWRDZWxscyA9IG5ld0NlbGwgPT4ge1xuICAgICAgICBtaXNzc2VkQ2VsbHMucHVzaChuZXdDZWxsKVxuICAgIH1cblxuICAgIGNvbnN0IGdldEhpdENlbGxzID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gaGl0Q2VsbHNcbiAgICB9XG5cbiAgICBjb25zdCBzZXRIaXRDZWxscyA9IG5ld0NlbGwgPT4ge1xuICAgICAgICBoaXRDZWxscy5wdXNoKG5ld0NlbGwpXG4gICAgfVxuXG4gICAgY29uc3QgZ2V0RW1wdHlDZWxscyA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIGVtcHR5Q2VsbHNcbiAgICB9XG5cbiAgICBjb25zdCBzZXRFbXB0eUNlbGxzID0gbmV3Q2VsbCA9PiB7XG4gICAgICAgIGVtcHR5Q2VsbHMucHVzaChuZXdDZWxsKVxuICAgIH1cblxuICAgIGNvbnN0IGdldE9jY3VwaWVkQ2VsbHMgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBvY2N1cGllZENlbGxzXG4gICAgfVxuXG4gICAgY29uc3Qgc2V0T2NjdXBpZWRDZWxscyA9IG5ld0NlbGwgPT4ge1xuICAgICAgICBvY2N1cGllZENlbGxzLnB1c2gobmV3Q2VsbClcbiAgICB9XG5cbiAgICBjb25zdCBwbGFjZVNoaXBzID0gKHNoaXBzKSA9PiB7XG4gICAgICAgIHNoaXBzLmZvckVhY2goc2hpcCA9PiB7XG4gICAgICAgICAgICBzaGlwLmdldFBvc2l0aW9uKCkuZm9yRWFjaChwb3NpdGlvbkNlbGwgPT4ge1xuICAgICAgICAgICAgICAgIHNldE9jY3VwaWVkQ2VsbHMocG9zaXRpb25DZWxsKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgY29uc3QgcGxhY2VFbXB0eVNwYWNlID0gKCkgPT4ge1xuICAgICAgICBnZXRCb2FyZCgpLmZvckVhY2goY2VsbCA9PiB7XG4gICAgICAgICAgICBpZiAoIShnZXRPY2N1cGllZENlbGxzKCkuaW5jbHVkZXMoY2VsbCkpKSB7XG4gICAgICAgICAgICAgICAgc2V0RW1wdHlDZWxscyhjZWxsKVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIGNvbnN0IHJlY2lldmVBdHRhY2sgPSAoY29vcmRpbmF0ZSkgPT4ge1xuICAgICAgICBpZiAoZ2V0T2NjdXBpZWRDZWxscygpLmluY2x1ZGVzKGNvb3JkaW5hdGUpKSB7XG4gICAgICAgICAgICBzZXRIaXRDZWxscyhjb29yZGluYXRlKVxuXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzZXRNaXNzZWRDZWxscyhjb29yZGluYXRlKVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgb2NjdXBpZWRJbmRleCA9IGdldE9jY3VwaWVkQ2VsbHMoKS5pbmRleE9mKGNvb3JkaW5hdGUpXG4gICAgICAgIGlmIChvY2N1cGllZEluZGV4ID4gLTEpIHtcbiAgICAgICAgICAgIGdldE9jY3VwaWVkQ2VsbHMoKS5zcGxpY2Uob2NjdXBpZWRJbmRleCwgMSkgXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBlbXB0eUluZGV4ID0gZ2V0RW1wdHlDZWxscygpLmluZGV4T2YoY29vcmRpbmF0ZSlcbiAgICAgICAgaWYgKGVtcHR5SW5kZXggPiAtMSkge1xuICAgICAgICAgICAgZ2V0RW1wdHlDZWxscygpLnNwbGljZShlbXB0eUluZGV4LCAxKVxuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICBjb25zdCBjaGVja0dhbWVPdmVyID0gKCkgPT57XG4gICAgICAgIGlmIChnZXRPY2N1cGllZENlbGxzLmxlbmd0aCA9PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBnZXRNaXNzZWRDZWxscyxcbiAgICAgICAgc2V0TWlzc2VkQ2VsbHMsXG4gICAgICAgIGdldEhpdENlbGxzLFxuICAgICAgICBzZXRIaXRDZWxscyxcbiAgICAgICAgZ2V0RW1wdHlDZWxscyxcbiAgICAgICAgc2V0RW1wdHlDZWxscyxcbiAgICAgICAgZ2V0T2NjdXBpZWRDZWxscyxcbiAgICAgICAgc2V0T2NjdXBpZWRDZWxscyxcbiAgICAgICAgZ2V0Qm9hcmQsXG4gICAgICAgIHBsYWNlU2hpcHMsXG4gICAgICAgIHBsYWNlRW1wdHlTcGFjZSxcbiAgICAgICAgcmVjaWV2ZUF0dGFjayxcbiAgICAgICAgY2hlY2tHYW1lT3ZlclxuICAgIH1cbn1cblxuY29uc3QgUGxheWVyID0gKG5hbWUsIGlzQUkpID0+IHtcbiAgICBjb25zdCBnZXROYW1lID0gKCkgPT4gbmFtZVxuICAgIGNvbnN0IGdldElzQUkgPSAoKSA9PiBpc0FJXG5cbiAgICBjb25zdCByb3cgPSAxMFxuICAgIGNvbnN0IGNvbHVtbiA9IDEwXG4gICAgY29uc3QgcG9zc2libGVDaG9pY2VzID0gW11cblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcm93OyBpKyspIHtcbiAgICAgICAgcG9zc2libGVDaG9pY2VzW2ldID0gW11cbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBjb2x1bW47IGorKykge1xuICAgICAgICAgICAgcG9zc2libGVDaG9pY2VzW2ldLnB1c2goaS50b1N0cmluZygpICsgai50b1N0cmluZygpKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgY29tcHV0ZXJBdHRhY2sgPSAoKSA9PiB7XG5cbiAgICAgICAgaWYgKGdldElzQUkgPT0gdHJ1ZSkge1xuXG4gICAgICAgICAgICBsZXQgYXR0YWNrQ29vcmRpbmF0ZSA9IHBvc3NpYmxlQ2hvaWNlc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBwb3NzaWJsZUNob2ljZXMubGVuZ3RoKV1cblxuICAgICAgICAgICAgY29uc3QgaW5kZXggPSBwb3NzaWJsZUNob2ljZXMuaW5kZXhPZihhdHRhY2tDb29yZGluYXRlKVxuICAgICAgICAgICAgaWYgKGluZGV4ID4gLTEpIHtcbiAgICAgICAgICAgICAgICBwb3NzaWJsZUNob2ljZXMuc3BsaWNlKGluZGV4LCAxKSBcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIGF0dGFja0Nvb3JkaW5hdGVcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIGdldE5hbWUsXG4gICAgICAgIGNvbXB1dGVyQXR0YWNrXG4gICAgfVxufVxuXG5leHBvcnQgeyBTaGlwLCBHYW1lYm9hcmQsIFBsYXllciB9IiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC5jb250YWluZXIge1xuICAgIGhlaWdodDogMTAwdmg7XG5cbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcbn1cblxuLnBsYXllci1vbmUtZ2FtZWJvYXJkIHtcbiAgICBoZWlnaHQ6IDUwMHB4O1xuICAgIHdpZHRoOiA1MDBweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcblxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG59XG5cbi5wbGF5ZXItb25lLWdhbWVib2FyZCBkaXYge1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG59XG5cbi5wbGF5ZXItdHdvLWdhbWVib2FyZCB7XG4gICAgaGVpZ2h0OiA1MDBweDtcbiAgICB3aWR0aDogNTAwcHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG5cbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZmxleC13cmFwOiB3cmFwO1xufVxuXG4ucGxheWVyLXR3by1nYW1lYm9hcmQgZGl2IHtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xufVxuXG4ub2NjdXBpZWQtY2VsbCB7XG4gICAgYmFja2dyb3VuZDogYmxhY2s7XG59XG5cbi5lbXB0eS1jZWxsIHtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbn1cblxuLmhpdC1jZWxsIHtcbiAgICBiYWNrZ3JvdW5kOiByZWQ7XG59XG5cbi5taXNzZWQtY2VsbCB7XG4gICAgYmFja2dyb3VuZDogZ3JheTtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxhQUFhOztJQUViLGFBQWE7SUFDYiw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsWUFBWTtJQUNaLHVCQUF1Qjs7SUFFdkIsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0Qix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsWUFBWTtJQUNaLHVCQUF1Qjs7SUFFdkIsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0Qix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5jb250YWluZXIge1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcblxcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxufVxcblxcbi5wbGF5ZXItb25lLWdhbWVib2FyZCB7XFxuICAgIGhlaWdodDogNTAwcHg7XFxuICAgIHdpZHRoOiA1MDBweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxufVxcblxcbi5wbGF5ZXItb25lLWdhbWVib2FyZCBkaXYge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG59XFxuXFxuLnBsYXllci10d28tZ2FtZWJvYXJkIHtcXG4gICAgaGVpZ2h0OiA1MDBweDtcXG4gICAgd2lkdGg6IDUwMHB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG59XFxuXFxuLnBsYXllci10d28tZ2FtZWJvYXJkIGRpdiB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG4ub2NjdXBpZWQtY2VsbCB7XFxuICAgIGJhY2tncm91bmQ6IGJsYWNrO1xcbn1cXG5cXG4uZW1wdHktY2VsbCB7XFxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xcbn1cXG5cXG4uaGl0LWNlbGwge1xcbiAgICBiYWNrZ3JvdW5kOiByZWQ7XFxufVxcblxcbi5taXNzZWQtY2VsbCB7XFxuICAgIGJhY2tncm91bmQ6IGdyYXk7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiXG5cbmltcG9ydCB7IEdhbWUgfSBmcm9tIFwiLi9nYW1lLmpzXCI7XG5pbXBvcnQgeyBTaGlwIH0gZnJvbSBcIi4vb2JqZWN0cy5qc1wiO1xuXG5HYW1lXG5cbmZ1bmN0aW9uIGRpc3BsYXlIZWFkZXIoKSB7XG4gICAgY29uc3QgcGxheWVyT25lSGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBsYXllci1vbmUtaGVhZGVyJylcbiAgICBjb25zdCBwbGF5ZXJUd29IZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGxheWVyLXR3by1oZWFkZXInKVxuXG4gICAgcGxheWVyT25lSGVhZGVyLnRleHRDb250ZW50ID0gR2FtZS5nZXRBY3RpdmVQbGF5ZXIoKS5nZXROYW1lKClcbiAgICBHYW1lLnN3aXRjaFBsYXllclR1cm4oKVxuICAgIHBsYXllclR3b0hlYWRlci50ZXh0Q29udGVudCA9IEdhbWUuZ2V0QWN0aXZlUGxheWVyKCkuZ2V0TmFtZSgpXG4gICAgR2FtZS5zd2l0Y2hQbGF5ZXJUdXJuKClcbn1cblxuZnVuY3Rpb24gcmVuZGVyUGxheWVyR2FtZWJvYXJkKGNvb3JkaW5hdGUpIHtcblxuICAgIGlmIChHYW1lLmdldFBsYXllckdhbWVib2FyZCgpLmdldE9jY3VwaWVkQ2VsbHMoKS5pbmNsdWRlcyhjb29yZGluYXRlKSkge1xuICAgICAgICBjb29yZGluYXRlLmNsYXNzTGlzdC5hZGQoJ29jY3VwaWVkLWNlbGwnKVxuICAgIH0gZWxzZSBpZiAoR2FtZS5nZXRQbGF5ZXJHYW1lYm9hcmQoKS5nZXRFbXB0eUNlbGxzKCkuaW5jbHVkZXMoY29vcmRpbmF0ZSkpIHtcbiAgICAgICAgY29vcmRpbmF0ZS5jbGFzc0xpc3QuYWRkKCdlbXB0eS1jZWxsJylcbiAgICB9IGVsc2UgaWYgKEdhbWUuZ2V0UGxheWVyR2FtZWJvYXJkKCkuZ2V0SGl0Q2VsbHMoKS5pbmNsdWRlcyhjb29yZGluYXRlKSkge1xuICAgICAgICBjb29yZGluYXRlLmNsYXNzTGlzdC5hZGQoJ2hpdC1jZWxsJylcbiAgICB9IGVsc2UgaWYgKEdhbWUuZ2V0UGxheWVyR2FtZWJvYXJkKCkuZ2V0TWlzc2VkQ2VsbHMoKS5pbmNsdWRlcyhjb29yZGluYXRlKSkge1xuICAgICAgICBjb29yZGluYXRlLmNsYXNzTGlzdC5hZGQoJ21pc3NlZC1jZWxsJylcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlQbGF5ZXJPbmVCb2FyZCgpIHtcbiAgICBjb25zdCBwbGF5ZXJPbmVHYW1lYm9hcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGxheWVyLW9uZS1nYW1lYm9hcmQnKTtcbiAgICBzZXRQbGF5ZXJTaGlwcygpO1xuICAgIEdhbWUuZ2V0UGxheWVyR2FtZWJvYXJkKCkucGxhY2VTaGlwcyhwbGF5ZXJTaGlwcyk7XG4gICAgR2FtZS5nZXRQbGF5ZXJHYW1lYm9hcmQoKS5wbGFjZUVtcHR5U3BhY2UoKTtcblxuICAgIChHYW1lLmdldFBsYXllckdhbWVib2FyZCgpLmdldEJvYXJkKCkpLmZvckVhY2goKHJvd0NlbGwpID0+IHtcblxuICAgICAgICByb3dDZWxsLmZvckVhY2goKGNvbHVtbkNlbGwpID0+IHtcblxuICAgICAgICAgICAgY29uc3QgYm9hcmRDZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgICAgIGJvYXJkQ2VsbC50ZXh0Q29udGVudCA9IGNvbHVtbkNlbGxcbiAgICAgICAgICAgIGJvYXJkQ2VsbC5zZXRBdHRyaWJ1dGUoJ2lkJywgY29sdW1uQ2VsbClcbiAgICAgICAgICAgIGJvYXJkQ2VsbC5jbGFzc0xpc3QuYWRkKCdwbGF5ZXItb25lLWNlbGxzJylcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYgKEdhbWUuZ2V0UGxheWVyR2FtZWJvYXJkKCkuZ2V0T2NjdXBpZWRDZWxscygpLmluY2x1ZGVzKGJvYXJkQ2VsbC50ZXh0Q29udGVudCkpIHtcbiAgICAgICAgICAgICAgICBib2FyZENlbGwuY2xhc3NMaXN0LmFkZCgnb2NjdXBpZWQtY2VsbCcpXG4gICAgICAgICAgICB9IGVsc2UgaWYgKEdhbWUuZ2V0UGxheWVyR2FtZWJvYXJkKCkuZ2V0RW1wdHlDZWxscygpLmluY2x1ZGVzKGJvYXJkQ2VsbC50ZXh0Q29udGVudCkpIHtcbiAgICAgICAgICAgICAgICBib2FyZENlbGwuY2xhc3NMaXN0LmFkZCgnZW1wdHktY2VsbCcpXG4gICAgICAgICAgICB9IGVsc2UgaWYgKEdhbWUuZ2V0UGxheWVyR2FtZWJvYXJkKCkuZ2V0SGl0Q2VsbHMoKS5pbmNsdWRlcyhib2FyZENlbGwudGV4dENvbnRlbnQpKSB7XG4gICAgICAgICAgICAgICAgYm9hcmRDZWxsLmNsYXNzTGlzdC5hZGQoJ2hpdC1jZWxsJylcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoR2FtZS5nZXRQbGF5ZXJHYW1lYm9hcmQoKS5nZXRNaXNzZWRDZWxscygpLmluY2x1ZGVzKGJvYXJkQ2VsbC50ZXh0Q29udGVudCkpIHtcbiAgICAgICAgICAgICAgICBib2FyZENlbGwuY2xhc3NMaXN0LmFkZCgnbWlzc2VkLWNlbGwnKVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBib2FyZENlbGwuc3R5bGUud2lkdGggPSAnMTAlJ1xuICAgICAgICAgICAgYm9hcmRDZWxsLnN0eWxlLmhlaWdodCA9ICcxMCUnXG4gICAgICAgICAgICBwbGF5ZXJPbmVHYW1lYm9hcmQuYXBwZW5kQ2hpbGQoYm9hcmRDZWxsKVxuXG4gICAgICAgIH0pXG4gICAgfSlcbn1cblxuZnVuY3Rpb24gZGlzcGxheVBsYXllclR3b0JvYXJkKCkge1xuICAgIGNvbnN0IHBsYXllclR3b0dhbWVib2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wbGF5ZXItdHdvLWdhbWVib2FyZCcpO1xuXG4gICAgKEdhbWUuZ2V0Q29tcHV0ZXJHYW1lYm9hcmQoKS5nZXRCb2FyZCgpKS5mb3JFYWNoKChyb3dDZWxsKSA9PiB7XG5cbiAgICAgICAgcm93Q2VsbC5mb3JFYWNoKChjb2x1bW5DZWxsKSA9PiB7XG5cbiAgICAgICAgICAgIGNvbnN0IGJvYXJkQ2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgICAgICBib2FyZENlbGwudGV4dENvbnRlbnQgPSBjb2x1bW5DZWxsXG4gICAgICAgICAgICBib2FyZENlbGwuc2V0QXR0cmlidXRlKCdpZCcsIGNvbHVtbkNlbGwpXG4gICAgICAgICAgICBib2FyZENlbGwuY2xhc3NMaXN0LmFkZCgncGxheWVyLXR3by1jZWxscycpXG4gICAgICAgICAgICBib2FyZENlbGwuc3R5bGUud2lkdGggPSAnMTAlJ1xuICAgICAgICAgICAgYm9hcmRDZWxsLnN0eWxlLmhlaWdodCA9ICcxMCUnXG4gICAgICAgICAgICBwbGF5ZXJUd29HYW1lYm9hcmQuYXBwZW5kQ2hpbGQoYm9hcmRDZWxsKVxuXG4gICAgICAgIH0pXG4gICAgfSlcbn1cblxuXG5sZXQgcGxheWVyU2hpcHMgPSBbXVxuXG5mdW5jdGlvbiBzZXRQbGF5ZXJTaGlwcygpIHtcbiAgICBsZXQgY2FycmllciA9IFNoaXAoWyc0MicsICc0MycsICc0NCcsICc0NScsICc0NiddLCBmYWxzZSlcbiAgICBsZXQgYmF0dGxlc2hpcCA9IFNoaXAoWycwOScsICcxOScsICcyOScsICczOSddLCBmYWxzZSlcbiAgICBsZXQgZGVzdHJveWVyID0gU2hpcChbJzcyJywgJzczJywgJzc0J10sIGZhbHNlKVxuICAgIGxldCBzdWJtYXJpbmUgPSBTaGlwKFsnNjcnLCAnNzcnLCAnODcnXSwgZmFsc2UpXG4gICAgbGV0IHBhdHJvbCA9IFNoaXAoWycxMScsICcxMiddLCBmYWxzZSlcblxuICAgIHBsYXllclNoaXBzLnB1c2goY2FycmllcilcbiAgICBwbGF5ZXJTaGlwcy5wdXNoKGJhdHRsZXNoaXApXG4gICAgcGxheWVyU2hpcHMucHVzaChkZXN0cm95ZXIpXG4gICAgcGxheWVyU2hpcHMucHVzaChzdWJtYXJpbmUpXG4gICAgcGxheWVyU2hpcHMucHVzaChwYXRyb2wpXG59XG5cbmRpc3BsYXlIZWFkZXIoKVxuZGlzcGxheVBsYXllck9uZUJvYXJkKClcbmRpc3BsYXlQbGF5ZXJUd29Cb2FyZCgpXG4iXSwibmFtZXMiOlsiU2hpcCIsIkdhbWVib2FyZCIsIlBsYXllciIsIkdhbWUiLCJwbGF5ZXJzIiwiZ2FtZWJvYXJkcyIsInBsYXllciIsInBsYXllckdhbWVib2FyZCIsImNvbXB1dGVyIiwiY29tcHV0ZXJHYW1lYm9hcmQiLCJwdXNoIiwiYWN0aXZlUGxheWVyIiwiYWN0aXZlQm9hcmQiLCJnZXRBY3RpdmVQbGF5ZXIiLCJnZXRBY3RpdmVHYW1lYm9hcmQiLCJnZXRQbGF5ZXIiLCJnZXRDb21wdXRlciIsImdldFBsYXllckdhbWVib2FyZCIsImdldENvbXB1dGVyR2FtZWJvYXJkIiwic3dpdGNoUGxheWVyVHVybiIsInN3aXRjaEFjdGl2ZUJvYXJkIiwicG9zaXRpb24iLCJnZXRQb3NpdGlvbiIsInNldFBvc2l0aW9uIiwiY29vcmRzIiwicm93IiwiY29sdW1uIiwiYm9hcmQiLCJtaXNzc2VkQ2VsbHMiLCJoaXRDZWxscyIsImVtcHR5Q2VsbHMiLCJvY2N1cGllZENlbGxzIiwiaSIsImoiLCJ0b1N0cmluZyIsImdldEJvYXJkIiwiZ2V0TWlzc2VkQ2VsbHMiLCJzZXRNaXNzZWRDZWxscyIsIm5ld0NlbGwiLCJnZXRIaXRDZWxscyIsInNldEhpdENlbGxzIiwiZ2V0RW1wdHlDZWxscyIsInNldEVtcHR5Q2VsbHMiLCJnZXRPY2N1cGllZENlbGxzIiwic2V0T2NjdXBpZWRDZWxscyIsInBsYWNlU2hpcHMiLCJzaGlwcyIsImZvckVhY2giLCJzaGlwIiwicG9zaXRpb25DZWxsIiwicGxhY2VFbXB0eVNwYWNlIiwiY2VsbCIsImluY2x1ZGVzIiwicmVjaWV2ZUF0dGFjayIsImNvb3JkaW5hdGUiLCJvY2N1cGllZEluZGV4IiwiaW5kZXhPZiIsInNwbGljZSIsImVtcHR5SW5kZXgiLCJjaGVja0dhbWVPdmVyIiwibGVuZ3RoIiwibmFtZSIsImlzQUkiLCJnZXROYW1lIiwiZ2V0SXNBSSIsInBvc3NpYmxlQ2hvaWNlcyIsImNvbXB1dGVyQXR0YWNrIiwiYXR0YWNrQ29vcmRpbmF0ZSIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsImluZGV4IiwiZGlzcGxheUhlYWRlciIsInBsYXllck9uZUhlYWRlciIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInBsYXllclR3b0hlYWRlciIsInRleHRDb250ZW50IiwicmVuZGVyUGxheWVyR2FtZWJvYXJkIiwiY2xhc3NMaXN0IiwiYWRkIiwiZGlzcGxheVBsYXllck9uZUJvYXJkIiwicGxheWVyT25lR2FtZWJvYXJkIiwic2V0UGxheWVyU2hpcHMiLCJwbGF5ZXJTaGlwcyIsInJvd0NlbGwiLCJjb2x1bW5DZWxsIiwiYm9hcmRDZWxsIiwiY3JlYXRlRWxlbWVudCIsInNldEF0dHJpYnV0ZSIsInN0eWxlIiwid2lkdGgiLCJoZWlnaHQiLCJhcHBlbmRDaGlsZCIsImRpc3BsYXlQbGF5ZXJUd29Cb2FyZCIsInBsYXllclR3b0dhbWVib2FyZCIsImNhcnJpZXIiLCJiYXR0bGVzaGlwIiwiZGVzdHJveWVyIiwic3VibWFyaW5lIiwicGF0cm9sIl0sInNvdXJjZVJvb3QiOiIifQ==