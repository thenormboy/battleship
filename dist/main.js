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
  let player = (0,_objects_js__WEBPACK_IMPORTED_MODULE_0__.Player)('Player');
  let playerGameboard = (0,_objects_js__WEBPACK_IMPORTED_MODULE_0__.Gameboard)();
  let computer = (0,_objects_js__WEBPACK_IMPORTED_MODULE_0__.Player)('Computer');
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
    getBoard().forEach(rowCell => {
      rowCell.forEach(columnCell => {
        if (!getOccupiedCells().includes(columnCell)) {
          setEmptyCells(columnCell);
        }
      });
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
const Player = name => {
  const getName = () => name;
  const row = 10;
  const column = 10;
  const possibleChoices = [];
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < column; j++) {
      possibleChoices.push(i.toString() + j.toString());
    }
  }
  const getPossibleChoices = () => possibleChoices;
  const computerAttack = () => {
    let attackCoordinate = getPossibleChoices()[Math.floor(Math.random() * getPossibleChoices().length)];
    const index = getPossibleChoices().indexOf(attackCoordinate);
    if (index > -1) {
      possibleChoices.splice(index, 1);
    }
    return attackCoordinate;
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
function displayPlayerOneBoard() {
  const playerOneGameboard = document.querySelector('.player-one-gameboard');
  setPlayerShips();
  let attackCoordinate = _game_js__WEBPACK_IMPORTED_MODULE_1__.Game.getComputer().computerAttack();
  console.log(attackCoordinate);
  _game_js__WEBPACK_IMPORTED_MODULE_1__.Game.getPlayerGameboard().placeShips(playerShips);
  _game_js__WEBPACK_IMPORTED_MODULE_1__.Game.getPlayerGameboard().placeEmptySpace();
  _game_js__WEBPACK_IMPORTED_MODULE_1__.Game.getPlayerGameboard().getBoard().forEach(rowCell => {
    rowCell.forEach(columnCell => {
      const boardCell = document.createElement('div');
      boardCell.textContent = columnCell;
      boardCell.setAttribute('id', columnCell);
      boardCell.classList.add('player-one-cells');
      boardCell.style.width = '10%';
      boardCell.style.height = '10%';
      if (_game_js__WEBPACK_IMPORTED_MODULE_1__.Game.getPlayerGameboard().getOccupiedCells().includes(boardCell.textContent)) {
        boardCell.classList.add('occupied-cell');
      } else if (_game_js__WEBPACK_IMPORTED_MODULE_1__.Game.getPlayerGameboard().getEmptyCells().includes(boardCell.textContent)) {
        boardCell.classList.add('empty-cell');
      } else if (_game_js__WEBPACK_IMPORTED_MODULE_1__.Game.getPlayerGameboard().getHitCells().includes(boardCell.textContent)) {
        boardCell.classList.add('hit-cell');
      } else if (_game_js__WEBPACK_IMPORTED_MODULE_1__.Game.getPlayerGameboard().getMissedCells().includes(boardCell.textContent)) {
        boardCell.classList.add('missed-cell');
      }
      function playerCellClick() {
        if (boardCell.getAttribute('id') == attackCoordinate) {
          if (boardCell.classList.contains('occupied-cell')) {
            boardCell.classList.remove('occupied-cell');
            boardCell.classList.add('hit-cell');
          }
          if (boardCell.classList.contains('empty-cell')) {
            boardCell.classList.remove('empty-cell');
            boardCell.classList.add('missed-cell');
          }
        }
      }
      playerCellClick();
      playerOneGameboard.appendChild(boardCell);
    });
  });
}
function displayPlayerTwoBoard() {
  const playerTwoGameboard = document.querySelector('.player-two-gameboard');
  setComputerShips();
  _game_js__WEBPACK_IMPORTED_MODULE_1__.Game.getComputerGameboard().placeShips(computerShips);
  _game_js__WEBPACK_IMPORTED_MODULE_1__.Game.getComputerGameboard().placeEmptySpace();
  _game_js__WEBPACK_IMPORTED_MODULE_1__.Game.getComputerGameboard().getBoard().forEach(rowCell => {
    rowCell.forEach(columnCell => {
      const boardCell = document.createElement('div');
      boardCell.textContent = columnCell;
      boardCell.setAttribute('id', columnCell);
      boardCell.classList.add('player-two-cells');
      boardCell.style.width = '10%';
      boardCell.style.height = '10%';
      if (_game_js__WEBPACK_IMPORTED_MODULE_1__.Game.getComputerGameboard().getOccupiedCells().includes(boardCell.textContent)) {
        boardCell.classList.add('occupied-com-cell');
      } else if (_game_js__WEBPACK_IMPORTED_MODULE_1__.Game.getComputerGameboard().getEmptyCells().includes(boardCell.textContent)) {
        boardCell.classList.add('empty-cell');
      } else if (_game_js__WEBPACK_IMPORTED_MODULE_1__.Game.getComputerGameboard().getHitCells().includes(boardCell.textContent)) {
        boardCell.classList.add('hit-cell');
      } else if (_game_js__WEBPACK_IMPORTED_MODULE_1__.Game.getComputerGameboard().getMissedCells().includes(boardCell.textContent)) {
        boardCell.classList.add('missed-cell');
      }
      function computerCellClick() {
        if (boardCell.classList.contains('hit-cell')) {
          return;
        } else if (boardCell.classList.contains('missed-cell')) {
          return;
        }
        if (boardCell.classList.contains('occupied-com-cell')) {
          boardCell.classList.remove('occupied-com-cell');
          boardCell.classList.add('hit-cell');
        }
        if (boardCell.classList.contains('empty-cell')) {
          boardCell.classList.remove('empty-cell');
          boardCell.classList.add('missed-cell');
        }
        boardCell.removeEventListener('click', computerCellClick);
      }
      boardCell.addEventListener('click', computerCellClick);
      playerTwoGameboard.appendChild(boardCell);
    });
  });
}
let playerShips = [];
function setPlayerShips() {
  let carrier = (0,_objects_js__WEBPACK_IMPORTED_MODULE_2__.Ship)(['42', '43', '44', '45', '46']);
  let battleship = (0,_objects_js__WEBPACK_IMPORTED_MODULE_2__.Ship)(['09', '19', '29', '39']);
  let destroyer = (0,_objects_js__WEBPACK_IMPORTED_MODULE_2__.Ship)(['72', '73', '74']);
  let submarine = (0,_objects_js__WEBPACK_IMPORTED_MODULE_2__.Ship)(['67', '77', '87']);
  let patrol = (0,_objects_js__WEBPACK_IMPORTED_MODULE_2__.Ship)(['11', '12']);
  playerShips.push(carrier);
  playerShips.push(battleship);
  playerShips.push(destroyer);
  playerShips.push(submarine);
  playerShips.push(patrol);
}
let computerShips = [];
function setComputerShips() {
  let carrier = (0,_objects_js__WEBPACK_IMPORTED_MODULE_2__.Ship)(['42', '43', '44', '45', '46']);
  let battleship = (0,_objects_js__WEBPACK_IMPORTED_MODULE_2__.Ship)(['09', '19', '29', '39']);
  let destroyer = (0,_objects_js__WEBPACK_IMPORTED_MODULE_2__.Ship)(['72', '73', '74']);
  let submarine = (0,_objects_js__WEBPACK_IMPORTED_MODULE_2__.Ship)(['67', '77', '87']);
  let patrol = (0,_objects_js__WEBPACK_IMPORTED_MODULE_2__.Ship)(['11', '12']);
  computerShips.push(carrier);
  computerShips.push(battleship);
  computerShips.push(destroyer);
  computerShips.push(submarine);
  computerShips.push(patrol);
}
displayHeader();
displayPlayerOneBoard();
displayPlayerTwoBoard();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztFQUMvQyxJQUFJMEcsU0FBUyxHQUFHMUcsaURBQUksQ0FBQyxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7RUFDeEMsSUFBSTJHLFNBQVMsR0FBRzNHLGlEQUFJLENBQUMsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO0VBQ3hDLElBQUk0RyxNQUFNLEdBQUc1RyxpREFBSSxDQUFDLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO0VBRS9Cb0csYUFBYSxDQUFDMUYsSUFBSSxDQUFDOEYsT0FBTyxDQUFDO0VBQzNCSixhQUFhLENBQUMxRixJQUFJLENBQUMrRixVQUFVLENBQUM7RUFDOUJMLGFBQWEsQ0FBQzFGLElBQUksQ0FBQ2dHLFNBQVMsQ0FBQztFQUM3Qk4sYUFBYSxDQUFDMUYsSUFBSSxDQUFDaUcsU0FBUyxDQUFDO0VBQzdCUCxhQUFhLENBQUMxRixJQUFJLENBQUNrRyxNQUFNLENBQUM7QUFDOUI7QUFFQXBDLGFBQWEsQ0FBQyxDQUFDO0FBQ2ZNLHFCQUFxQixDQUFDLENBQUM7QUFDdkJtQixxQkFBcUIsQ0FBQyxDQUFDLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2dhbWUuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9vYmplY3RzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTaGlwLCBHYW1lYm9hcmQsIFBsYXllciB9IGZyb20gXCIuL29iamVjdHMuanNcIjtcblxuY29uc3QgR2FtZSA9ICgoKSA9PiB7XG5cbiAgICBsZXQgcGxheWVycyA9IFtdXG4gICAgbGV0IGdhbWVib2FyZHMgPSBbXVxuXG4gICAgbGV0IHBsYXllciA9IFBsYXllcignUGxheWVyJylcbiAgICBsZXQgcGxheWVyR2FtZWJvYXJkID0gR2FtZWJvYXJkKClcblxuICAgIGxldCBjb21wdXRlciA9IFBsYXllcignQ29tcHV0ZXInKVxuICAgIGxldCBjb21wdXRlckdhbWVib2FyZCA9IEdhbWVib2FyZCgpXG5cbiAgICBwbGF5ZXJzLnB1c2gocGxheWVyKVxuICAgIHBsYXllcnMucHVzaChjb21wdXRlcilcblxuICAgIGdhbWVib2FyZHMucHVzaChwbGF5ZXJHYW1lYm9hcmQpXG4gICAgZ2FtZWJvYXJkcy5wdXNoKGNvbXB1dGVyR2FtZWJvYXJkKVxuXG4gICAgbGV0IGFjdGl2ZVBsYXllciA9IHBsYXllcnNbMF1cbiAgICBsZXQgYWN0aXZlQm9hcmQgPSBnYW1lYm9hcmRzWzBdXG5cbiAgICBjb25zdCBnZXRBY3RpdmVQbGF5ZXIgPSAoKSA9PiBhY3RpdmVQbGF5ZXJcbiAgICBjb25zdCBnZXRBY3RpdmVHYW1lYm9hcmQgPSAoKSA9PiBhY3RpdmVCb2FyZFxuXG4gICAgY29uc3QgZ2V0UGxheWVyID0gKCkgPT4gcGxheWVyXG4gICAgY29uc3QgZ2V0Q29tcHV0ZXIgPSAoKSA9PiBjb21wdXRlclxuXG4gICAgY29uc3QgZ2V0UGxheWVyR2FtZWJvYXJkID0gKCkgPT4gcGxheWVyR2FtZWJvYXJkXG4gICAgY29uc3QgZ2V0Q29tcHV0ZXJHYW1lYm9hcmQgPSAoKSA9PiBjb21wdXRlckdhbWVib2FyZFxuXG4gICAgY29uc3Qgc3dpdGNoUGxheWVyVHVybiA9ICgpID0+IHtcbiAgICAgICAgaWYgKGFjdGl2ZVBsYXllciA9PT0gcGxheWVyc1swXSkge1xuICAgICAgICAgICAgYWN0aXZlUGxheWVyID0gcGxheWVyc1sxXVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYWN0aXZlUGxheWVyID0gcGxheWVyc1swXVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3Qgc3dpdGNoQWN0aXZlQm9hcmQgPSAoKSA9PiB7XG4gICAgICAgIGlmIChhY3RpdmVCb2FyZCA9PT0gZ2FtZWJvYXJkc1swXSkge1xuICAgICAgICAgICAgYWN0aXZlQm9hcmQgPSBnYW1lYm9hcmRzWzFdXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBhY3RpdmVCb2FyZCA9IGdhbWVib2FyZHNbMF1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIGdldFBsYXllcixcbiAgICAgICAgZ2V0UGxheWVyR2FtZWJvYXJkLFxuICAgICAgICBnZXRDb21wdXRlcixcbiAgICAgICAgZ2V0Q29tcHV0ZXJHYW1lYm9hcmQsXG4gICAgICAgIGdldEFjdGl2ZVBsYXllcixcbiAgICAgICAgZ2V0QWN0aXZlR2FtZWJvYXJkLFxuICAgICAgICBzd2l0Y2hQbGF5ZXJUdXJuLFxuICAgICAgICBzd2l0Y2hBY3RpdmVCb2FyZFxuICAgIH1cblxufSkoKTtcblxuZXhwb3J0IHsgR2FtZSB9ICIsImNvbnN0IFNoaXAgPSAocG9zaXRpb24pID0+IHtcblxuICAgIGNvbnN0IGdldFBvc2l0aW9uID0gKCkgPT4gcG9zaXRpb25cblxuICAgIGNvbnN0IHNldFBvc2l0aW9uID0gKGNvb3JkcykgPT4ge1xuICAgICAgICBnZXRQb3NpdGlvbigpLnB1c2goY29vcmRzKVxuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIGdldFBvc2l0aW9uLFxuICAgICAgICBzZXRQb3NpdGlvblxuICAgIH1cbn1cblxuY29uc3QgR2FtZWJvYXJkID0gKCkgPT4ge1xuICAgIGNvbnN0IHJvdyA9IDEwXG4gICAgY29uc3QgY29sdW1uID0gMTBcbiAgICBjb25zdCBib2FyZCA9IFtdXG4gICAgY29uc3QgbWlzc3NlZENlbGxzID0gW11cbiAgICBjb25zdCBoaXRDZWxscyA9IFtdXG4gICAgY29uc3QgZW1wdHlDZWxscyA9IFtdXG4gICAgY29uc3Qgb2NjdXBpZWRDZWxscyA9IFtdXG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJvdzsgaSsrKSB7XG4gICAgICAgIGJvYXJkW2ldID0gW11cbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBjb2x1bW47IGorKykge1xuICAgICAgICAgICAgYm9hcmRbaV0ucHVzaChpLnRvU3RyaW5nKCkgKyBqLnRvU3RyaW5nKCkpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBnZXRCb2FyZCA9ICgpID0+IGJvYXJkXG5cbiAgICBjb25zdCBnZXRNaXNzZWRDZWxscyA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIG1pc3NzZWRDZWxsc1xuICAgIH1cblxuICAgIGNvbnN0IHNldE1pc3NlZENlbGxzID0gbmV3Q2VsbCA9PiB7XG4gICAgICAgIG1pc3NzZWRDZWxscy5wdXNoKG5ld0NlbGwpXG4gICAgfVxuXG4gICAgY29uc3QgZ2V0SGl0Q2VsbHMgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBoaXRDZWxsc1xuICAgIH1cblxuICAgIGNvbnN0IHNldEhpdENlbGxzID0gbmV3Q2VsbCA9PiB7XG4gICAgICAgIGhpdENlbGxzLnB1c2gobmV3Q2VsbClcbiAgICB9XG5cbiAgICBjb25zdCBnZXRFbXB0eUNlbGxzID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gZW1wdHlDZWxsc1xuICAgIH1cblxuICAgIGNvbnN0IHNldEVtcHR5Q2VsbHMgPSBuZXdDZWxsID0+IHtcbiAgICAgICAgZW1wdHlDZWxscy5wdXNoKG5ld0NlbGwpXG4gICAgfVxuXG4gICAgY29uc3QgZ2V0T2NjdXBpZWRDZWxscyA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIG9jY3VwaWVkQ2VsbHNcbiAgICB9XG5cbiAgICBjb25zdCBzZXRPY2N1cGllZENlbGxzID0gbmV3Q2VsbCA9PiB7XG4gICAgICAgIG9jY3VwaWVkQ2VsbHMucHVzaChuZXdDZWxsKVxuICAgIH1cblxuICAgIGNvbnN0IHBsYWNlU2hpcHMgPSAoc2hpcHMpID0+IHtcbiAgICAgICAgc2hpcHMuZm9yRWFjaChzaGlwID0+IHtcbiAgICAgICAgICAgIHNoaXAuZ2V0UG9zaXRpb24oKS5mb3JFYWNoKHBvc2l0aW9uQ2VsbCA9PiB7XG4gICAgICAgICAgICAgICAgc2V0T2NjdXBpZWRDZWxscyhwb3NpdGlvbkNlbGwpXG4gICAgICAgICAgICB9KVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBjb25zdCBwbGFjZUVtcHR5U3BhY2UgPSAoKSA9PiB7XG4gICAgICAgIGdldEJvYXJkKCkuZm9yRWFjaChyb3dDZWxsID0+IHtcbiAgICAgICAgICAgIHJvd0NlbGwuZm9yRWFjaChjb2x1bW5DZWxsID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoIShnZXRPY2N1cGllZENlbGxzKCkuaW5jbHVkZXMoY29sdW1uQ2VsbCkpKSB7XG4gICAgICAgICAgICAgICAgICAgIHNldEVtcHR5Q2VsbHMoY29sdW1uQ2VsbClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIGNvbnN0IHJlY2lldmVBdHRhY2sgPSAoY29vcmRpbmF0ZSkgPT4ge1xuICAgICAgICBpZiAoZ2V0T2NjdXBpZWRDZWxscygpLmluY2x1ZGVzKGNvb3JkaW5hdGUpKSB7XG4gICAgICAgICAgICBzZXRIaXRDZWxscyhjb29yZGluYXRlKVxuXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzZXRNaXNzZWRDZWxscyhjb29yZGluYXRlKVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgb2NjdXBpZWRJbmRleCA9IGdldE9jY3VwaWVkQ2VsbHMoKS5pbmRleE9mKGNvb3JkaW5hdGUpXG4gICAgICAgIGlmIChvY2N1cGllZEluZGV4ID4gLTEpIHtcbiAgICAgICAgICAgIGdldE9jY3VwaWVkQ2VsbHMoKS5zcGxpY2Uob2NjdXBpZWRJbmRleCwgMSkgXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBlbXB0eUluZGV4ID0gZ2V0RW1wdHlDZWxscygpLmluZGV4T2YoY29vcmRpbmF0ZSlcbiAgICAgICAgaWYgKGVtcHR5SW5kZXggPiAtMSkge1xuICAgICAgICAgICAgZ2V0RW1wdHlDZWxscygpLnNwbGljZShlbXB0eUluZGV4LCAxKVxuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICBjb25zdCBjaGVja0dhbWVPdmVyID0gKCkgPT57XG4gICAgICAgIGlmIChnZXRPY2N1cGllZENlbGxzLmxlbmd0aCA9PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBnZXRNaXNzZWRDZWxscyxcbiAgICAgICAgc2V0TWlzc2VkQ2VsbHMsXG4gICAgICAgIGdldEhpdENlbGxzLFxuICAgICAgICBzZXRIaXRDZWxscyxcbiAgICAgICAgZ2V0RW1wdHlDZWxscyxcbiAgICAgICAgc2V0RW1wdHlDZWxscyxcbiAgICAgICAgZ2V0T2NjdXBpZWRDZWxscyxcbiAgICAgICAgc2V0T2NjdXBpZWRDZWxscyxcbiAgICAgICAgZ2V0Qm9hcmQsXG4gICAgICAgIHBsYWNlU2hpcHMsXG4gICAgICAgIHBsYWNlRW1wdHlTcGFjZSxcbiAgICAgICAgcmVjaWV2ZUF0dGFjayxcbiAgICAgICAgY2hlY2tHYW1lT3ZlclxuICAgIH1cbn1cblxuY29uc3QgUGxheWVyID0gKG5hbWUpID0+IHtcbiAgICBjb25zdCBnZXROYW1lID0gKCkgPT4gbmFtZVxuXG4gICAgY29uc3Qgcm93ID0gMTBcbiAgICBjb25zdCBjb2x1bW4gPSAxMFxuICAgIGNvbnN0IHBvc3NpYmxlQ2hvaWNlcyA9IFtdXG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJvdzsgaSsrKSB7XG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgY29sdW1uOyBqKyspIHtcbiAgICAgICAgICAgIHBvc3NpYmxlQ2hvaWNlcy5wdXNoKGkudG9TdHJpbmcoKSArIGoudG9TdHJpbmcoKSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGdldFBvc3NpYmxlQ2hvaWNlcyA9ICgpID0+IHBvc3NpYmxlQ2hvaWNlc1xuXG4gICAgY29uc3QgY29tcHV0ZXJBdHRhY2sgPSAoKSA9PiB7XG5cbiAgICAgICAgICAgIGxldCBhdHRhY2tDb29yZGluYXRlID0gZ2V0UG9zc2libGVDaG9pY2VzKClbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogZ2V0UG9zc2libGVDaG9pY2VzKCkubGVuZ3RoKV1cblxuICAgICAgICAgICAgY29uc3QgaW5kZXggPSBnZXRQb3NzaWJsZUNob2ljZXMoKS5pbmRleE9mKGF0dGFja0Nvb3JkaW5hdGUpXG4gICAgICAgICAgICBpZiAoaW5kZXggPiAtMSkge1xuICAgICAgICAgICAgICAgIHBvc3NpYmxlQ2hvaWNlcy5zcGxpY2UoaW5kZXgsIDEpIFxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gYXR0YWNrQ29vcmRpbmF0ZVxuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIGdldE5hbWUsXG4gICAgICAgIGNvbXB1dGVyQXR0YWNrXG4gICAgfVxufVxuXG5leHBvcnQgeyBTaGlwLCBHYW1lYm9hcmQsIFBsYXllciB9IiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC5jb250YWluZXIge1xuICAgIGhlaWdodDogMTAwdmg7XG5cbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcbn1cblxuLnBsYXllci1vbmUtZ2FtZWJvYXJkIHtcbiAgICBoZWlnaHQ6IDUwMHB4O1xuICAgIHdpZHRoOiA1MDBweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcblxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG59XG5cbi5wbGF5ZXItb25lLWdhbWVib2FyZCBkaXYge1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG59XG5cbi5wbGF5ZXItdHdvLWdhbWVib2FyZCB7XG4gICAgaGVpZ2h0OiA1MDBweDtcbiAgICB3aWR0aDogNTAwcHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG5cbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZmxleC13cmFwOiB3cmFwO1xufVxuXG4ucGxheWVyLXR3by1nYW1lYm9hcmQgZGl2IHtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xufVxuXG4ub2NjdXBpZWQtY2VsbCB7XG4gICAgYmFja2dyb3VuZDogYmxhY2s7XG59XG5cbi5lbXB0eS1jZWxsIHtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbn1cblxuLmhpdC1jZWxsIHtcbiAgICBiYWNrZ3JvdW5kOiByZWQ7XG59XG5cbi5taXNzZWQtY2VsbCB7XG4gICAgYmFja2dyb3VuZDogZ3JheTtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxhQUFhOztJQUViLGFBQWE7SUFDYiw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsWUFBWTtJQUNaLHVCQUF1Qjs7SUFFdkIsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0Qix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsWUFBWTtJQUNaLHVCQUF1Qjs7SUFFdkIsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0Qix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5jb250YWluZXIge1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcblxcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxufVxcblxcbi5wbGF5ZXItb25lLWdhbWVib2FyZCB7XFxuICAgIGhlaWdodDogNTAwcHg7XFxuICAgIHdpZHRoOiA1MDBweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxufVxcblxcbi5wbGF5ZXItb25lLWdhbWVib2FyZCBkaXYge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG59XFxuXFxuLnBsYXllci10d28tZ2FtZWJvYXJkIHtcXG4gICAgaGVpZ2h0OiA1MDBweDtcXG4gICAgd2lkdGg6IDUwMHB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG59XFxuXFxuLnBsYXllci10d28tZ2FtZWJvYXJkIGRpdiB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG4ub2NjdXBpZWQtY2VsbCB7XFxuICAgIGJhY2tncm91bmQ6IGJsYWNrO1xcbn1cXG5cXG4uZW1wdHktY2VsbCB7XFxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xcbn1cXG5cXG4uaGl0LWNlbGwge1xcbiAgICBiYWNrZ3JvdW5kOiByZWQ7XFxufVxcblxcbi5taXNzZWQtY2VsbCB7XFxuICAgIGJhY2tncm91bmQ6IGdyYXk7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiXG5cbmltcG9ydCB7IEdhbWUgfSBmcm9tIFwiLi9nYW1lLmpzXCI7XG5pbXBvcnQgeyBTaGlwIH0gZnJvbSBcIi4vb2JqZWN0cy5qc1wiO1xuXG5HYW1lXG5cbmZ1bmN0aW9uIGRpc3BsYXlIZWFkZXIoKSB7XG4gICAgY29uc3QgcGxheWVyT25lSGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBsYXllci1vbmUtaGVhZGVyJylcbiAgICBjb25zdCBwbGF5ZXJUd29IZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGxheWVyLXR3by1oZWFkZXInKVxuXG4gICAgcGxheWVyT25lSGVhZGVyLnRleHRDb250ZW50ID0gR2FtZS5nZXRBY3RpdmVQbGF5ZXIoKS5nZXROYW1lKClcbiAgICBHYW1lLnN3aXRjaFBsYXllclR1cm4oKVxuICAgIHBsYXllclR3b0hlYWRlci50ZXh0Q29udGVudCA9IEdhbWUuZ2V0QWN0aXZlUGxheWVyKCkuZ2V0TmFtZSgpXG4gICAgR2FtZS5zd2l0Y2hQbGF5ZXJUdXJuKClcbn1cblxuZnVuY3Rpb24gZGlzcGxheVBsYXllck9uZUJvYXJkKCkge1xuICAgIGNvbnN0IHBsYXllck9uZUdhbWVib2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wbGF5ZXItb25lLWdhbWVib2FyZCcpO1xuICAgIHNldFBsYXllclNoaXBzKCk7XG5cbiAgICBsZXQgYXR0YWNrQ29vcmRpbmF0ZSA9IEdhbWUuZ2V0Q29tcHV0ZXIoKS5jb21wdXRlckF0dGFjaygpXG4gICAgY29uc29sZS5sb2coYXR0YWNrQ29vcmRpbmF0ZSlcblxuICAgIEdhbWUuZ2V0UGxheWVyR2FtZWJvYXJkKCkucGxhY2VTaGlwcyhwbGF5ZXJTaGlwcyk7XG4gICAgR2FtZS5nZXRQbGF5ZXJHYW1lYm9hcmQoKS5wbGFjZUVtcHR5U3BhY2UoKTtcblxuICAgIChHYW1lLmdldFBsYXllckdhbWVib2FyZCgpLmdldEJvYXJkKCkpLmZvckVhY2goKHJvd0NlbGwpID0+IHtcblxuICAgICAgICByb3dDZWxsLmZvckVhY2goKGNvbHVtbkNlbGwpID0+IHtcblxuICAgICAgICAgICAgY29uc3QgYm9hcmRDZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgICAgIGJvYXJkQ2VsbC50ZXh0Q29udGVudCA9IGNvbHVtbkNlbGxcbiAgICAgICAgICAgIGJvYXJkQ2VsbC5zZXRBdHRyaWJ1dGUoJ2lkJywgY29sdW1uQ2VsbClcbiAgICAgICAgICAgIGJvYXJkQ2VsbC5jbGFzc0xpc3QuYWRkKCdwbGF5ZXItb25lLWNlbGxzJylcbiAgICAgICAgICAgIGJvYXJkQ2VsbC5zdHlsZS53aWR0aCA9ICcxMCUnXG4gICAgICAgICAgICBib2FyZENlbGwuc3R5bGUuaGVpZ2h0ID0gJzEwJSdcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYgKEdhbWUuZ2V0UGxheWVyR2FtZWJvYXJkKCkuZ2V0T2NjdXBpZWRDZWxscygpLmluY2x1ZGVzKGJvYXJkQ2VsbC50ZXh0Q29udGVudCkpIHtcbiAgICAgICAgICAgICAgICBib2FyZENlbGwuY2xhc3NMaXN0LmFkZCgnb2NjdXBpZWQtY2VsbCcpXG4gICAgICAgICAgICB9IGVsc2UgaWYgKEdhbWUuZ2V0UGxheWVyR2FtZWJvYXJkKCkuZ2V0RW1wdHlDZWxscygpLmluY2x1ZGVzKGJvYXJkQ2VsbC50ZXh0Q29udGVudCkpIHtcbiAgICAgICAgICAgICAgICBib2FyZENlbGwuY2xhc3NMaXN0LmFkZCgnZW1wdHktY2VsbCcpXG4gICAgICAgICAgICB9IGVsc2UgaWYgKEdhbWUuZ2V0UGxheWVyR2FtZWJvYXJkKCkuZ2V0SGl0Q2VsbHMoKS5pbmNsdWRlcyhib2FyZENlbGwudGV4dENvbnRlbnQpKSB7XG4gICAgICAgICAgICAgICAgYm9hcmRDZWxsLmNsYXNzTGlzdC5hZGQoJ2hpdC1jZWxsJylcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoR2FtZS5nZXRQbGF5ZXJHYW1lYm9hcmQoKS5nZXRNaXNzZWRDZWxscygpLmluY2x1ZGVzKGJvYXJkQ2VsbC50ZXh0Q29udGVudCkpIHtcbiAgICAgICAgICAgICAgICBib2FyZENlbGwuY2xhc3NMaXN0LmFkZCgnbWlzc2VkLWNlbGwnKVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmdW5jdGlvbiBwbGF5ZXJDZWxsQ2xpY2soKSB7XG5cbiAgICAgICAgICAgICAgICBpZiAoYm9hcmRDZWxsLmdldEF0dHJpYnV0ZSgnaWQnKSA9PSBhdHRhY2tDb29yZGluYXRlKSB7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgaWYgKGJvYXJkQ2VsbC5jbGFzc0xpc3QuY29udGFpbnMoJ29jY3VwaWVkLWNlbGwnKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9hcmRDZWxsLmNsYXNzTGlzdC5yZW1vdmUoJ29jY3VwaWVkLWNlbGwnKVxuICAgICAgICAgICAgICAgICAgICAgICAgYm9hcmRDZWxsLmNsYXNzTGlzdC5hZGQoJ2hpdC1jZWxsJylcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBpZiAoYm9hcmRDZWxsLmNsYXNzTGlzdC5jb250YWlucygnZW1wdHktY2VsbCcpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBib2FyZENlbGwuY2xhc3NMaXN0LnJlbW92ZSgnZW1wdHktY2VsbCcpXG4gICAgICAgICAgICAgICAgICAgICAgICBib2FyZENlbGwuY2xhc3NMaXN0LmFkZCgnbWlzc2VkLWNlbGwnKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBwbGF5ZXJDZWxsQ2xpY2soKVxuXG4gICAgICAgICAgICBwbGF5ZXJPbmVHYW1lYm9hcmQuYXBwZW5kQ2hpbGQoYm9hcmRDZWxsKVxuXG4gICAgICAgIH0pXG4gICAgfSlcbn1cblxuZnVuY3Rpb24gZGlzcGxheVBsYXllclR3b0JvYXJkKCkge1xuICAgIGNvbnN0IHBsYXllclR3b0dhbWVib2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wbGF5ZXItdHdvLWdhbWVib2FyZCcpO1xuICAgIHNldENvbXB1dGVyU2hpcHMoKTtcbiAgICBHYW1lLmdldENvbXB1dGVyR2FtZWJvYXJkKCkucGxhY2VTaGlwcyhjb21wdXRlclNoaXBzKTtcbiAgICBHYW1lLmdldENvbXB1dGVyR2FtZWJvYXJkKCkucGxhY2VFbXB0eVNwYWNlKCk7XG5cbiAgICAoR2FtZS5nZXRDb21wdXRlckdhbWVib2FyZCgpLmdldEJvYXJkKCkpLmZvckVhY2goKHJvd0NlbGwpID0+IHtcblxuICAgICAgICByb3dDZWxsLmZvckVhY2goKGNvbHVtbkNlbGwpID0+IHtcblxuICAgICAgICAgICAgY29uc3QgYm9hcmRDZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgICAgIGJvYXJkQ2VsbC50ZXh0Q29udGVudCA9IGNvbHVtbkNlbGxcbiAgICAgICAgICAgIGJvYXJkQ2VsbC5zZXRBdHRyaWJ1dGUoJ2lkJywgY29sdW1uQ2VsbClcbiAgICAgICAgICAgIGJvYXJkQ2VsbC5jbGFzc0xpc3QuYWRkKCdwbGF5ZXItdHdvLWNlbGxzJylcbiAgICAgICAgICAgIGJvYXJkQ2VsbC5zdHlsZS53aWR0aCA9ICcxMCUnXG4gICAgICAgICAgICBib2FyZENlbGwuc3R5bGUuaGVpZ2h0ID0gJzEwJSdcblxuICAgICAgICAgICAgaWYgKEdhbWUuZ2V0Q29tcHV0ZXJHYW1lYm9hcmQoKS5nZXRPY2N1cGllZENlbGxzKCkuaW5jbHVkZXMoYm9hcmRDZWxsLnRleHRDb250ZW50KSkge1xuICAgICAgICAgICAgICAgIGJvYXJkQ2VsbC5jbGFzc0xpc3QuYWRkKCdvY2N1cGllZC1jb20tY2VsbCcpXG4gICAgICAgICAgICB9IGVsc2UgaWYgKEdhbWUuZ2V0Q29tcHV0ZXJHYW1lYm9hcmQoKS5nZXRFbXB0eUNlbGxzKCkuaW5jbHVkZXMoYm9hcmRDZWxsLnRleHRDb250ZW50KSkge1xuICAgICAgICAgICAgICAgIGJvYXJkQ2VsbC5jbGFzc0xpc3QuYWRkKCdlbXB0eS1jZWxsJylcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoR2FtZS5nZXRDb21wdXRlckdhbWVib2FyZCgpLmdldEhpdENlbGxzKCkuaW5jbHVkZXMoYm9hcmRDZWxsLnRleHRDb250ZW50KSkge1xuICAgICAgICAgICAgICAgIGJvYXJkQ2VsbC5jbGFzc0xpc3QuYWRkKCdoaXQtY2VsbCcpXG4gICAgICAgICAgICB9IGVsc2UgaWYgKEdhbWUuZ2V0Q29tcHV0ZXJHYW1lYm9hcmQoKS5nZXRNaXNzZWRDZWxscygpLmluY2x1ZGVzKGJvYXJkQ2VsbC50ZXh0Q29udGVudCkpIHtcbiAgICAgICAgICAgICAgICBib2FyZENlbGwuY2xhc3NMaXN0LmFkZCgnbWlzc2VkLWNlbGwnKVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmdW5jdGlvbiBjb21wdXRlckNlbGxDbGljaygpIHtcblxuICAgICAgICAgICAgICAgIGlmIChib2FyZENlbGwuY2xhc3NMaXN0LmNvbnRhaW5zKCdoaXQtY2VsbCcpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoYm9hcmRDZWxsLmNsYXNzTGlzdC5jb250YWlucygnbWlzc2VkLWNlbGwnKSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBpZiAoYm9hcmRDZWxsLmNsYXNzTGlzdC5jb250YWlucygnb2NjdXBpZWQtY29tLWNlbGwnKSkge1xuICAgICAgICAgICAgICAgICAgICBib2FyZENlbGwuY2xhc3NMaXN0LnJlbW92ZSgnb2NjdXBpZWQtY29tLWNlbGwnKVxuICAgICAgICAgICAgICAgICAgICBib2FyZENlbGwuY2xhc3NMaXN0LmFkZCgnaGl0LWNlbGwnKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGlmIChib2FyZENlbGwuY2xhc3NMaXN0LmNvbnRhaW5zKCdlbXB0eS1jZWxsJykpIHtcbiAgICAgICAgICAgICAgICAgICAgYm9hcmRDZWxsLmNsYXNzTGlzdC5yZW1vdmUoJ2VtcHR5LWNlbGwnKVxuICAgICAgICAgICAgICAgICAgICBib2FyZENlbGwuY2xhc3NMaXN0LmFkZCgnbWlzc2VkLWNlbGwnKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGJvYXJkQ2VsbC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGNvbXB1dGVyQ2VsbENsaWNrKVxuICAgICAgICAgICAgXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGJvYXJkQ2VsbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNvbXB1dGVyQ2VsbENsaWNrKVxuXG4gICAgICAgICAgICBwbGF5ZXJUd29HYW1lYm9hcmQuYXBwZW5kQ2hpbGQoYm9hcmRDZWxsKVxuXG4gICAgICAgIH0pXG4gICAgfSlcbn1cblxuXG5sZXQgcGxheWVyU2hpcHMgPSBbXVxuXG5mdW5jdGlvbiBzZXRQbGF5ZXJTaGlwcygpIHtcbiAgICBsZXQgY2FycmllciA9IFNoaXAoWyc0MicsICc0MycsICc0NCcsICc0NScsICc0NiddKVxuICAgIGxldCBiYXR0bGVzaGlwID0gU2hpcChbJzA5JywgJzE5JywgJzI5JywgJzM5J10pXG4gICAgbGV0IGRlc3Ryb3llciA9IFNoaXAoWyc3MicsICc3MycsICc3NCddKVxuICAgIGxldCBzdWJtYXJpbmUgPSBTaGlwKFsnNjcnLCAnNzcnLCAnODcnXSlcbiAgICBsZXQgcGF0cm9sID0gU2hpcChbJzExJywgJzEyJ10pXG5cbiAgICBwbGF5ZXJTaGlwcy5wdXNoKGNhcnJpZXIpXG4gICAgcGxheWVyU2hpcHMucHVzaChiYXR0bGVzaGlwKVxuICAgIHBsYXllclNoaXBzLnB1c2goZGVzdHJveWVyKVxuICAgIHBsYXllclNoaXBzLnB1c2goc3VibWFyaW5lKVxuICAgIHBsYXllclNoaXBzLnB1c2gocGF0cm9sKVxufVxuXG5sZXQgY29tcHV0ZXJTaGlwcyA9IFtdXG5cbmZ1bmN0aW9uIHNldENvbXB1dGVyU2hpcHMoKSB7XG4gICAgbGV0IGNhcnJpZXIgPSBTaGlwKFsnNDInLCAnNDMnLCAnNDQnLCAnNDUnLCAnNDYnXSlcbiAgICBsZXQgYmF0dGxlc2hpcCA9IFNoaXAoWycwOScsICcxOScsICcyOScsICczOSddKVxuICAgIGxldCBkZXN0cm95ZXIgPSBTaGlwKFsnNzInLCAnNzMnLCAnNzQnXSlcbiAgICBsZXQgc3VibWFyaW5lID0gU2hpcChbJzY3JywgJzc3JywgJzg3J10pXG4gICAgbGV0IHBhdHJvbCA9IFNoaXAoWycxMScsICcxMiddKVxuXG4gICAgY29tcHV0ZXJTaGlwcy5wdXNoKGNhcnJpZXIpXG4gICAgY29tcHV0ZXJTaGlwcy5wdXNoKGJhdHRsZXNoaXApXG4gICAgY29tcHV0ZXJTaGlwcy5wdXNoKGRlc3Ryb3llcilcbiAgICBjb21wdXRlclNoaXBzLnB1c2goc3VibWFyaW5lKVxuICAgIGNvbXB1dGVyU2hpcHMucHVzaChwYXRyb2wpXG59XG5cbmRpc3BsYXlIZWFkZXIoKVxuZGlzcGxheVBsYXllck9uZUJvYXJkKClcbmRpc3BsYXlQbGF5ZXJUd29Cb2FyZCgpXG4iXSwibmFtZXMiOlsiU2hpcCIsIkdhbWVib2FyZCIsIlBsYXllciIsIkdhbWUiLCJwbGF5ZXJzIiwiZ2FtZWJvYXJkcyIsInBsYXllciIsInBsYXllckdhbWVib2FyZCIsImNvbXB1dGVyIiwiY29tcHV0ZXJHYW1lYm9hcmQiLCJwdXNoIiwiYWN0aXZlUGxheWVyIiwiYWN0aXZlQm9hcmQiLCJnZXRBY3RpdmVQbGF5ZXIiLCJnZXRBY3RpdmVHYW1lYm9hcmQiLCJnZXRQbGF5ZXIiLCJnZXRDb21wdXRlciIsImdldFBsYXllckdhbWVib2FyZCIsImdldENvbXB1dGVyR2FtZWJvYXJkIiwic3dpdGNoUGxheWVyVHVybiIsInN3aXRjaEFjdGl2ZUJvYXJkIiwicG9zaXRpb24iLCJnZXRQb3NpdGlvbiIsInNldFBvc2l0aW9uIiwiY29vcmRzIiwicm93IiwiY29sdW1uIiwiYm9hcmQiLCJtaXNzc2VkQ2VsbHMiLCJoaXRDZWxscyIsImVtcHR5Q2VsbHMiLCJvY2N1cGllZENlbGxzIiwiaSIsImoiLCJ0b1N0cmluZyIsImdldEJvYXJkIiwiZ2V0TWlzc2VkQ2VsbHMiLCJzZXRNaXNzZWRDZWxscyIsIm5ld0NlbGwiLCJnZXRIaXRDZWxscyIsInNldEhpdENlbGxzIiwiZ2V0RW1wdHlDZWxscyIsInNldEVtcHR5Q2VsbHMiLCJnZXRPY2N1cGllZENlbGxzIiwic2V0T2NjdXBpZWRDZWxscyIsInBsYWNlU2hpcHMiLCJzaGlwcyIsImZvckVhY2giLCJzaGlwIiwicG9zaXRpb25DZWxsIiwicGxhY2VFbXB0eVNwYWNlIiwicm93Q2VsbCIsImNvbHVtbkNlbGwiLCJpbmNsdWRlcyIsInJlY2lldmVBdHRhY2siLCJjb29yZGluYXRlIiwib2NjdXBpZWRJbmRleCIsImluZGV4T2YiLCJzcGxpY2UiLCJlbXB0eUluZGV4IiwiY2hlY2tHYW1lT3ZlciIsImxlbmd0aCIsIm5hbWUiLCJnZXROYW1lIiwicG9zc2libGVDaG9pY2VzIiwiZ2V0UG9zc2libGVDaG9pY2VzIiwiY29tcHV0ZXJBdHRhY2siLCJhdHRhY2tDb29yZGluYXRlIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwiaW5kZXgiLCJkaXNwbGF5SGVhZGVyIiwicGxheWVyT25lSGVhZGVyIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwicGxheWVyVHdvSGVhZGVyIiwidGV4dENvbnRlbnQiLCJkaXNwbGF5UGxheWVyT25lQm9hcmQiLCJwbGF5ZXJPbmVHYW1lYm9hcmQiLCJzZXRQbGF5ZXJTaGlwcyIsImNvbnNvbGUiLCJsb2ciLCJwbGF5ZXJTaGlwcyIsImJvYXJkQ2VsbCIsImNyZWF0ZUVsZW1lbnQiLCJzZXRBdHRyaWJ1dGUiLCJjbGFzc0xpc3QiLCJhZGQiLCJzdHlsZSIsIndpZHRoIiwiaGVpZ2h0IiwicGxheWVyQ2VsbENsaWNrIiwiZ2V0QXR0cmlidXRlIiwiY29udGFpbnMiLCJyZW1vdmUiLCJhcHBlbmRDaGlsZCIsImRpc3BsYXlQbGF5ZXJUd29Cb2FyZCIsInBsYXllclR3b0dhbWVib2FyZCIsInNldENvbXB1dGVyU2hpcHMiLCJjb21wdXRlclNoaXBzIiwiY29tcHV0ZXJDZWxsQ2xpY2siLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiYWRkRXZlbnRMaXN0ZW5lciIsImNhcnJpZXIiLCJiYXR0bGVzaGlwIiwiZGVzdHJveWVyIiwic3VibWFyaW5lIiwicGF0cm9sIl0sInNvdXJjZVJvb3QiOiIifQ==