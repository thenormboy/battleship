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
  const createCarrier = (coordinate, orientation) => {
    coordinate = Number(coordinate);
    if (coordinate.toString().length == 1) {
      setPosition('0' + String(coordinate));
      for (let i = 1; i < 5; i++) {
        if (orientation == 'X') {
          setPosition('0' + String(coordinate + i));
        } else if (orientation == 'Y') {
          setPosition(String(coordinate + i * 10));
        }
      }
    } else {
      for (let i = 0; i < 5; i++) {
        if (orientation == 'X') {
          setPosition(String(coordinate + i));
        } else if (orientation == 'Y') {
          setPosition(String(coordinate + i * 10));
        }
      }
    }
  };
  function createBattleship(coordinate, orientation) {
    coordinate = Number(coordinate);
    if (coordinate.toString().length == 1) {
      setPosition('0' + String(coordinate));
      for (let i = 1; i < 4; i++) {
        if (orientation == 'X') {
          setPosition('0' + String(coordinate + i));
        } else if (orientation == 'Y') {
          setPosition(String(coordinate + i * 10));
        }
      }
    } else {
      for (let i = 0; i < 4; i++) {
        if (orientation == 'X') {
          setPosition(String(coordinate + i));
        } else if (orientation == 'Y') {
          setPosition(String(coordinate + i * 10));
        }
      }
    }
  }
  function createDestroyer(coordinate, orientation) {
    coordinate = Number(coordinate);
    if (coordinate.toString().length == 1) {
      setPosition('0' + String(coordinate));
      for (let i = 1; i < 4; i++) {
        if (orientation == 'X') {
          setPosition('0' + String(coordinate + i));
        } else if (orientation == 'Y') {
          setPosition(String(coordinate + i * 10));
        }
      }
    } else {
      for (let i = 0; i < 4; i++) {
        if (orientation == 'X') {
          setPosition(String(coordinate + i));
        } else if (orientation == 'Y') {
          setPosition(String(coordinate + i * 10));
        }
      }
    }
  }
  function createSubmarine(coordinate, orientation) {
    coordinate = Number(coordinate);
    if (coordinate.toString().length == 1) {
      setPosition('0' + String(coordinate));
      for (let i = 1; i < 3; i++) {
        if (orientation == 'X') {
          setPosition('0' + String(coordinate + i));
        } else if (orientation == 'Y') {
          setPosition(String(coordinate + i * 10));
        }
      }
    } else {
      for (let i = 0; i < 3; i++) {
        if (orientation == 'X') {
          setPosition(String(coordinate + i));
        } else if (orientation == 'Y') {
          setPosition(String(coordinate + i * 10));
        }
      }
    }
  }
  function createPatrol(coordinate, orientation) {
    coordinate = Number(coordinate);
    if (coordinate.toString().length == 1) {
      setPosition('0' + String(coordinate));
      for (let i = 1; i < 2; i++) {
        if (orientation == 'X') {
          setPosition('0' + String(coordinate + i));
        } else if (orientation == 'Y') {
          setPosition(String(coordinate + i * 10));
        }
      }
    } else {
      for (let i = 0; i < 2; i++) {
        if (orientation == 'X') {
          setPosition(String(coordinate + i));
        } else if (orientation == 'Y') {
          setPosition(String(coordinate + i * 10));
        }
      }
    }
  }
  return {
    getPosition,
    setPosition,
    createCarrier,
    createBattleship,
    createDestroyer,
    createSubmarine,
    createPatrol
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
    if (getOccupiedCells().length == 0) {
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
  playerOneGameboard.textContent = [];
  let attackCoordinate = _game_js__WEBPACK_IMPORTED_MODULE_1__.Game.getComputer().computerAttack();
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
          _game_js__WEBPACK_IMPORTED_MODULE_1__.Game.getPlayerGameboard().recieveAttack(attackCoordinate);
          displayPlayerTwoBoard();
        }
      }
      playerCellClick();
      playerOneGameboard.appendChild(boardCell);
    });
  });
}
function displayPlayerTwoBoard() {
  const playerTwoGameboard = document.querySelector('.player-two-gameboard');
  playerTwoGameboard.textContent = '';
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
      function disableAllButtons() {
        const boardCells = document.querySelectorAll('.player-two-cells');
        boardCells.forEach(cell => {
          cell.replaceWith(cell.cloneNode(true));
        });
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
          disableAllButtons();
        }
        if (boardCell.classList.contains('empty-cell')) {
          boardCell.classList.remove('empty-cell');
          boardCell.classList.add('missed-cell');
          disableAllButtons();
        }
        _game_js__WEBPACK_IMPORTED_MODULE_1__.Game.getComputerGameboard().recieveAttack(boardCell.textContent);
        displayPlayerOneBoard();
      }
      boardCell.addEventListener('click', computerCellClick);
      playerTwoGameboard.appendChild(boardCell);
    });
  });
}
let playerShips = [];
function setPlayerShips() {
  let carrier = (0,_objects_js__WEBPACK_IMPORTED_MODULE_2__.Ship)([]);
  let battleship = (0,_objects_js__WEBPACK_IMPORTED_MODULE_2__.Ship)([]);
  let destroyer = (0,_objects_js__WEBPACK_IMPORTED_MODULE_2__.Ship)([]);
  let submarine = (0,_objects_js__WEBPACK_IMPORTED_MODULE_2__.Ship)([]);
  let patrol = (0,_objects_js__WEBPACK_IMPORTED_MODULE_2__.Ship)([]);
  carrier.createCarrier('01', 'Y');
  battleship.createBattleship('13', 'X');
  destroyer.createDestroyer('71', 'X');
  submarine.createSubmarine('76', 'Y');
  patrol.createPatrol('53', 'X');
  playerShips.push(carrier);
  playerShips.push(battleship);
  playerShips.push(destroyer);
  playerShips.push(submarine);
  playerShips.push(patrol);
  _game_js__WEBPACK_IMPORTED_MODULE_1__.Game.getPlayerGameboard().placeShips(playerShips);
  _game_js__WEBPACK_IMPORTED_MODULE_1__.Game.getPlayerGameboard().placeEmptySpace();
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
  _game_js__WEBPACK_IMPORTED_MODULE_1__.Game.getComputerGameboard().placeShips(computerShips);
  _game_js__WEBPACK_IMPORTED_MODULE_1__.Game.getComputerGameboard().placeEmptySpace();
}
function gameController() {
  displayHeader();
  setPlayerShips();
  setComputerShips();
  displayPlayerOneBoard();
  displayPlayerTwoBoard();

  //console.log(Game.getPlayerGameboard().getOccupiedCells().length)

  //console.log((Game.getPlayerGameboard().checkGameOver()))

  //while (!(Game.getComputerGameboard().checkGameOver()) || !(Game.getPlayerGameboard().checkGameOver())) {

  //console.log(Game.getActivePlayer())

  //if (Game.getActivePlayer() == Game.getPlayer()) {
  //  displayPlayerTwoBoard()
  //} else if (Game.getActiveGameboard() == Game.getComputer()) {
  //  displayPlayerOneBoard()
  //}

  //Game.switchPlayerTurn()
}

gameController();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUUsSUFBSSxDQUFDLENBQUM7RUFDeEMsSUFBSW9ILFNBQVMsR0FBR3BILGlEQUFJLENBQUMsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO0VBQ3hDLElBQUlxSCxNQUFNLEdBQUdySCxpREFBSSxDQUFDLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO0VBRS9Cc0gsYUFBYSxDQUFDNUcsSUFBSSxDQUFDdUcsT0FBTyxDQUFDO0VBQzNCSyxhQUFhLENBQUM1RyxJQUFJLENBQUN3RyxVQUFVLENBQUM7RUFDOUJJLGFBQWEsQ0FBQzVHLElBQUksQ0FBQ3lHLFNBQVMsQ0FBQztFQUM3QkcsYUFBYSxDQUFDNUcsSUFBSSxDQUFDMEcsU0FBUyxDQUFDO0VBQzdCRSxhQUFhLENBQUM1RyxJQUFJLENBQUMyRyxNQUFNLENBQUM7RUFFMUJsSCwwQ0FBSSxDQUFDZSxvQkFBb0IsQ0FBQyxDQUFDLENBQUNxQyxVQUFVLENBQUMrRCxhQUFhLENBQUM7RUFDckRuSCwwQ0FBSSxDQUFDZSxvQkFBb0IsQ0FBQyxDQUFDLENBQUMwQyxlQUFlLENBQUMsQ0FBQztBQUNqRDtBQUVBLFNBQVM0RCxjQUFjQSxDQUFBLEVBQUc7RUFFdEJ4QyxhQUFhLENBQUMsQ0FBQztFQUNmZ0MsY0FBYyxDQUFDLENBQUM7RUFDaEJPLGdCQUFnQixDQUFDLENBQUM7RUFDbEJqQyxxQkFBcUIsQ0FBQyxDQUFDO0VBQ3ZCYyxxQkFBcUIsQ0FBQyxDQUFDOztFQUV2Qjs7RUFFQTs7RUFFQTs7RUFFSTs7RUFFQTtFQUNFO0VBQ0Y7RUFDRTtFQUNGOztFQUVBO0FBRVI7O0FBRUFvQixjQUFjLENBQUMsQ0FBQyxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9nYW1lLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvb2JqZWN0cy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU2hpcCwgR2FtZWJvYXJkLCBQbGF5ZXIgfSBmcm9tIFwiLi9vYmplY3RzLmpzXCI7XG5cbmNvbnN0IEdhbWUgPSAoKCkgPT4ge1xuXG4gICAgbGV0IHBsYXllcnMgPSBbXVxuICAgIGxldCBnYW1lYm9hcmRzID0gW11cblxuICAgIGxldCBwbGF5ZXIgPSBQbGF5ZXIoJ1BsYXllcicpXG4gICAgbGV0IHBsYXllckdhbWVib2FyZCA9IEdhbWVib2FyZCgpXG5cbiAgICBsZXQgY29tcHV0ZXIgPSBQbGF5ZXIoJ0NvbXB1dGVyJylcbiAgICBsZXQgY29tcHV0ZXJHYW1lYm9hcmQgPSBHYW1lYm9hcmQoKVxuXG4gICAgcGxheWVycy5wdXNoKHBsYXllcilcbiAgICBwbGF5ZXJzLnB1c2goY29tcHV0ZXIpXG5cbiAgICBnYW1lYm9hcmRzLnB1c2gocGxheWVyR2FtZWJvYXJkKVxuICAgIGdhbWVib2FyZHMucHVzaChjb21wdXRlckdhbWVib2FyZClcblxuICAgIGxldCBhY3RpdmVQbGF5ZXIgPSBwbGF5ZXJzWzBdXG4gICAgbGV0IGFjdGl2ZUJvYXJkID0gZ2FtZWJvYXJkc1swXVxuXG4gICAgY29uc3QgZ2V0QWN0aXZlUGxheWVyID0gKCkgPT4gYWN0aXZlUGxheWVyXG4gICAgY29uc3QgZ2V0QWN0aXZlR2FtZWJvYXJkID0gKCkgPT4gYWN0aXZlQm9hcmRcblxuICAgIGNvbnN0IGdldFBsYXllciA9ICgpID0+IHBsYXllclxuICAgIGNvbnN0IGdldENvbXB1dGVyID0gKCkgPT4gY29tcHV0ZXJcblxuICAgIGNvbnN0IGdldFBsYXllckdhbWVib2FyZCA9ICgpID0+IHBsYXllckdhbWVib2FyZFxuICAgIGNvbnN0IGdldENvbXB1dGVyR2FtZWJvYXJkID0gKCkgPT4gY29tcHV0ZXJHYW1lYm9hcmRcblxuICAgIGNvbnN0IHN3aXRjaFBsYXllclR1cm4gPSAoKSA9PiB7XG4gICAgICAgIGlmIChhY3RpdmVQbGF5ZXIgPT09IHBsYXllcnNbMF0pIHtcbiAgICAgICAgICAgIGFjdGl2ZVBsYXllciA9IHBsYXllcnNbMV1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGFjdGl2ZVBsYXllciA9IHBsYXllcnNbMF1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHN3aXRjaEFjdGl2ZUJvYXJkID0gKCkgPT4ge1xuICAgICAgICBpZiAoYWN0aXZlQm9hcmQgPT09IGdhbWVib2FyZHNbMF0pIHtcbiAgICAgICAgICAgIGFjdGl2ZUJvYXJkID0gZ2FtZWJvYXJkc1sxXVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYWN0aXZlQm9hcmQgPSBnYW1lYm9hcmRzWzBdXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBnZXRQbGF5ZXIsXG4gICAgICAgIGdldFBsYXllckdhbWVib2FyZCxcbiAgICAgICAgZ2V0Q29tcHV0ZXIsXG4gICAgICAgIGdldENvbXB1dGVyR2FtZWJvYXJkLFxuICAgICAgICBnZXRBY3RpdmVQbGF5ZXIsXG4gICAgICAgIGdldEFjdGl2ZUdhbWVib2FyZCxcbiAgICAgICAgc3dpdGNoUGxheWVyVHVybixcbiAgICAgICAgc3dpdGNoQWN0aXZlQm9hcmRcbiAgICB9XG5cbn0pKCk7XG5cbmV4cG9ydCB7IEdhbWUgfSAiLCJjb25zdCBTaGlwID0gKHBvc2l0aW9uKSA9PiB7XG5cbiAgICBjb25zdCBnZXRQb3NpdGlvbiA9ICgpID0+IHBvc2l0aW9uXG5cbiAgICBjb25zdCBzZXRQb3NpdGlvbiA9IChjb29yZHMpID0+IHtcbiAgICAgICAgZ2V0UG9zaXRpb24oKS5wdXNoKGNvb3JkcylcbiAgICB9XG5cbiAgICBjb25zdCBjcmVhdGVDYXJyaWVyID0gKGNvb3JkaW5hdGUsIG9yaWVudGF0aW9uKSA9PiB7XG4gICAgICAgIGNvb3JkaW5hdGUgPSBOdW1iZXIoY29vcmRpbmF0ZSlcblxuICAgICAgICBpZiAoY29vcmRpbmF0ZS50b1N0cmluZygpLmxlbmd0aCA9PSAxKSB7XG5cbiAgICAgICAgICAgIHNldFBvc2l0aW9uKCcwJyArIFN0cmluZyhjb29yZGluYXRlKSlcblxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCA1OyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAob3JpZW50YXRpb24gPT0gJ1gnKSB7XG4gICAgICAgICAgICAgICAgICAgIHNldFBvc2l0aW9uKCcwJyArIFN0cmluZyhjb29yZGluYXRlICsgaSkpXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChvcmllbnRhdGlvbiA9PSAnWScpIHtcbiAgICAgICAgICAgICAgICAgICAgc2V0UG9zaXRpb24oU3RyaW5nKGNvb3JkaW5hdGUgKyAoaSAqIDEwKSkpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNTsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKG9yaWVudGF0aW9uID09ICdYJykge1xuICAgICAgICAgICAgICAgICAgICBzZXRQb3NpdGlvbihTdHJpbmcoY29vcmRpbmF0ZSArIGkpKVxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAob3JpZW50YXRpb24gPT0gJ1knKSB7XG4gICAgICAgICAgICAgICAgICAgIHNldFBvc2l0aW9uKFN0cmluZyhjb29yZGluYXRlICsgKGkgKiAxMCkpKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNyZWF0ZUJhdHRsZXNoaXAoY29vcmRpbmF0ZSwgb3JpZW50YXRpb24pIHtcbiAgICAgICAgY29vcmRpbmF0ZSA9IE51bWJlcihjb29yZGluYXRlKVxuXG4gICAgICAgIGlmIChjb29yZGluYXRlLnRvU3RyaW5nKCkubGVuZ3RoID09IDEpIHtcblxuICAgICAgICAgICAgc2V0UG9zaXRpb24oJzAnICsgU3RyaW5nKGNvb3JkaW5hdGUpKVxuXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8IDQ7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmIChvcmllbnRhdGlvbiA9PSAnWCcpIHtcbiAgICAgICAgICAgICAgICAgICAgc2V0UG9zaXRpb24oJzAnICsgU3RyaW5nKGNvb3JkaW5hdGUgKyBpKSlcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKG9yaWVudGF0aW9uID09ICdZJykge1xuICAgICAgICAgICAgICAgICAgICBzZXRQb3NpdGlvbihTdHJpbmcoY29vcmRpbmF0ZSArIChpICogMTApKSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA0OyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAob3JpZW50YXRpb24gPT0gJ1gnKSB7XG4gICAgICAgICAgICAgICAgICAgIHNldFBvc2l0aW9uKFN0cmluZyhjb29yZGluYXRlICsgaSkpXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChvcmllbnRhdGlvbiA9PSAnWScpIHtcbiAgICAgICAgICAgICAgICAgICAgc2V0UG9zaXRpb24oU3RyaW5nKGNvb3JkaW5hdGUgKyAoaSAqIDEwKSkpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9ICAgIH1cblxuICAgIGZ1bmN0aW9uIGNyZWF0ZURlc3Ryb3llcihjb29yZGluYXRlLCBvcmllbnRhdGlvbikge1xuICAgICAgICBjb29yZGluYXRlID0gTnVtYmVyKGNvb3JkaW5hdGUpXG5cbiAgICAgICAgaWYgKGNvb3JkaW5hdGUudG9TdHJpbmcoKS5sZW5ndGggPT0gMSkge1xuXG4gICAgICAgICAgICBzZXRQb3NpdGlvbignMCcgKyBTdHJpbmcoY29vcmRpbmF0ZSkpXG5cbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgNDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKG9yaWVudGF0aW9uID09ICdYJykge1xuICAgICAgICAgICAgICAgICAgICBzZXRQb3NpdGlvbignMCcgKyBTdHJpbmcoY29vcmRpbmF0ZSArIGkpKVxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAob3JpZW50YXRpb24gPT0gJ1knKSB7XG4gICAgICAgICAgICAgICAgICAgIHNldFBvc2l0aW9uKFN0cmluZyhjb29yZGluYXRlICsgKGkgKiAxMCkpKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDQ7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmIChvcmllbnRhdGlvbiA9PSAnWCcpIHtcbiAgICAgICAgICAgICAgICAgICAgc2V0UG9zaXRpb24oU3RyaW5nKGNvb3JkaW5hdGUgKyBpKSlcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKG9yaWVudGF0aW9uID09ICdZJykge1xuICAgICAgICAgICAgICAgICAgICBzZXRQb3NpdGlvbihTdHJpbmcoY29vcmRpbmF0ZSArIChpICogMTApKSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gICAgfVxuXG4gICAgZnVuY3Rpb24gY3JlYXRlU3VibWFyaW5lKGNvb3JkaW5hdGUsIG9yaWVudGF0aW9uKSB7XG4gICAgICAgIGNvb3JkaW5hdGUgPSBOdW1iZXIoY29vcmRpbmF0ZSlcblxuICAgICAgICBpZiAoY29vcmRpbmF0ZS50b1N0cmluZygpLmxlbmd0aCA9PSAxKSB7XG5cbiAgICAgICAgICAgIHNldFBvc2l0aW9uKCcwJyArIFN0cmluZyhjb29yZGluYXRlKSlcblxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCAzOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAob3JpZW50YXRpb24gPT0gJ1gnKSB7XG4gICAgICAgICAgICAgICAgICAgIHNldFBvc2l0aW9uKCcwJyArIFN0cmluZyhjb29yZGluYXRlICsgaSkpXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChvcmllbnRhdGlvbiA9PSAnWScpIHtcbiAgICAgICAgICAgICAgICAgICAgc2V0UG9zaXRpb24oU3RyaW5nKGNvb3JkaW5hdGUgKyAoaSAqIDEwKSkpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMzsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKG9yaWVudGF0aW9uID09ICdYJykge1xuICAgICAgICAgICAgICAgICAgICBzZXRQb3NpdGlvbihTdHJpbmcoY29vcmRpbmF0ZSArIGkpKVxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAob3JpZW50YXRpb24gPT0gJ1knKSB7XG4gICAgICAgICAgICAgICAgICAgIHNldFBvc2l0aW9uKFN0cmluZyhjb29yZGluYXRlICsgKGkgKiAxMCkpKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSAgICB9XG5cbiAgICBmdW5jdGlvbiBjcmVhdGVQYXRyb2woY29vcmRpbmF0ZSwgb3JpZW50YXRpb24pIHtcbiAgICAgICAgY29vcmRpbmF0ZSA9IE51bWJlcihjb29yZGluYXRlKVxuXG4gICAgICAgIGlmIChjb29yZGluYXRlLnRvU3RyaW5nKCkubGVuZ3RoID09IDEpIHtcblxuICAgICAgICAgICAgc2V0UG9zaXRpb24oJzAnICsgU3RyaW5nKGNvb3JkaW5hdGUpKVxuXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8IDI7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmIChvcmllbnRhdGlvbiA9PSAnWCcpIHtcbiAgICAgICAgICAgICAgICAgICAgc2V0UG9zaXRpb24oJzAnICsgU3RyaW5nKGNvb3JkaW5hdGUgKyBpKSlcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKG9yaWVudGF0aW9uID09ICdZJykge1xuICAgICAgICAgICAgICAgICAgICBzZXRQb3NpdGlvbihTdHJpbmcoY29vcmRpbmF0ZSArIChpICogMTApKSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAyOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAob3JpZW50YXRpb24gPT0gJ1gnKSB7XG4gICAgICAgICAgICAgICAgICAgIHNldFBvc2l0aW9uKFN0cmluZyhjb29yZGluYXRlICsgaSkpXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChvcmllbnRhdGlvbiA9PSAnWScpIHtcbiAgICAgICAgICAgICAgICAgICAgc2V0UG9zaXRpb24oU3RyaW5nKGNvb3JkaW5hdGUgKyAoaSAqIDEwKSkpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9ICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIGdldFBvc2l0aW9uLFxuICAgICAgICBzZXRQb3NpdGlvbixcbiAgICAgICAgY3JlYXRlQ2FycmllcixcbiAgICAgICAgY3JlYXRlQmF0dGxlc2hpcCxcbiAgICAgICAgY3JlYXRlRGVzdHJveWVyLFxuICAgICAgICBjcmVhdGVTdWJtYXJpbmUsXG4gICAgICAgIGNyZWF0ZVBhdHJvbFxuICAgIH1cbn1cblxuY29uc3QgR2FtZWJvYXJkID0gKCkgPT4ge1xuICAgIGNvbnN0IHJvdyA9IDEwXG4gICAgY29uc3QgY29sdW1uID0gMTBcbiAgICBjb25zdCBib2FyZCA9IFtdXG4gICAgY29uc3QgbWlzc3NlZENlbGxzID0gW11cbiAgICBjb25zdCBoaXRDZWxscyA9IFtdXG4gICAgY29uc3QgZW1wdHlDZWxscyA9IFtdXG4gICAgY29uc3Qgb2NjdXBpZWRDZWxscyA9IFtdXG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJvdzsgaSsrKSB7XG4gICAgICAgIGJvYXJkW2ldID0gW11cbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBjb2x1bW47IGorKykge1xuICAgICAgICAgICAgYm9hcmRbaV0ucHVzaChpLnRvU3RyaW5nKCkgKyBqLnRvU3RyaW5nKCkpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBnZXRCb2FyZCA9ICgpID0+IGJvYXJkXG5cbiAgICBjb25zdCBnZXRNaXNzZWRDZWxscyA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIG1pc3NzZWRDZWxsc1xuICAgIH1cblxuICAgIGNvbnN0IHNldE1pc3NlZENlbGxzID0gbmV3Q2VsbCA9PiB7XG4gICAgICAgIG1pc3NzZWRDZWxscy5wdXNoKG5ld0NlbGwpXG4gICAgfVxuXG4gICAgY29uc3QgZ2V0SGl0Q2VsbHMgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBoaXRDZWxsc1xuICAgIH1cblxuICAgIGNvbnN0IHNldEhpdENlbGxzID0gbmV3Q2VsbCA9PiB7XG4gICAgICAgIGhpdENlbGxzLnB1c2gobmV3Q2VsbClcbiAgICB9XG5cbiAgICBjb25zdCBnZXRFbXB0eUNlbGxzID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gZW1wdHlDZWxsc1xuICAgIH1cblxuICAgIGNvbnN0IHNldEVtcHR5Q2VsbHMgPSBuZXdDZWxsID0+IHtcbiAgICAgICAgZW1wdHlDZWxscy5wdXNoKG5ld0NlbGwpXG4gICAgfVxuXG4gICAgY29uc3QgZ2V0T2NjdXBpZWRDZWxscyA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIG9jY3VwaWVkQ2VsbHNcbiAgICB9XG5cbiAgICBjb25zdCBzZXRPY2N1cGllZENlbGxzID0gbmV3Q2VsbCA9PiB7XG4gICAgICAgIG9jY3VwaWVkQ2VsbHMucHVzaChuZXdDZWxsKVxuICAgIH1cblxuICAgIGNvbnN0IHBsYWNlU2hpcHMgPSAoc2hpcHMpID0+IHtcbiAgICAgICAgc2hpcHMuZm9yRWFjaChzaGlwID0+IHtcbiAgICAgICAgICAgIHNoaXAuZ2V0UG9zaXRpb24oKS5mb3JFYWNoKHBvc2l0aW9uQ2VsbCA9PiB7XG4gICAgICAgICAgICAgICAgc2V0T2NjdXBpZWRDZWxscyhwb3NpdGlvbkNlbGwpXG4gICAgICAgICAgICB9KVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBjb25zdCBwbGFjZUVtcHR5U3BhY2UgPSAoKSA9PiB7XG4gICAgICAgIGdldEJvYXJkKCkuZm9yRWFjaChyb3dDZWxsID0+IHtcbiAgICAgICAgICAgIHJvd0NlbGwuZm9yRWFjaChjb2x1bW5DZWxsID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoIShnZXRPY2N1cGllZENlbGxzKCkuaW5jbHVkZXMoY29sdW1uQ2VsbCkpKSB7XG4gICAgICAgICAgICAgICAgICAgIHNldEVtcHR5Q2VsbHMoY29sdW1uQ2VsbClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIGNvbnN0IHJlY2lldmVBdHRhY2sgPSAoY29vcmRpbmF0ZSkgPT4ge1xuICAgICAgICBpZiAoZ2V0T2NjdXBpZWRDZWxscygpLmluY2x1ZGVzKGNvb3JkaW5hdGUpKSB7XG4gICAgICAgICAgICBzZXRIaXRDZWxscyhjb29yZGluYXRlKVxuXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzZXRNaXNzZWRDZWxscyhjb29yZGluYXRlKVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgb2NjdXBpZWRJbmRleCA9IGdldE9jY3VwaWVkQ2VsbHMoKS5pbmRleE9mKGNvb3JkaW5hdGUpXG4gICAgICAgIGlmIChvY2N1cGllZEluZGV4ID4gLTEpIHtcbiAgICAgICAgICAgIGdldE9jY3VwaWVkQ2VsbHMoKS5zcGxpY2Uob2NjdXBpZWRJbmRleCwgMSkgXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBlbXB0eUluZGV4ID0gZ2V0RW1wdHlDZWxscygpLmluZGV4T2YoY29vcmRpbmF0ZSlcbiAgICAgICAgaWYgKGVtcHR5SW5kZXggPiAtMSkge1xuICAgICAgICAgICAgZ2V0RW1wdHlDZWxscygpLnNwbGljZShlbXB0eUluZGV4LCAxKVxuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICBjb25zdCBjaGVja0dhbWVPdmVyID0gKCkgPT57XG4gICAgICAgIGlmIChnZXRPY2N1cGllZENlbGxzKCkubGVuZ3RoID09IDApIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIGdldE1pc3NlZENlbGxzLFxuICAgICAgICBzZXRNaXNzZWRDZWxscyxcbiAgICAgICAgZ2V0SGl0Q2VsbHMsXG4gICAgICAgIHNldEhpdENlbGxzLFxuICAgICAgICBnZXRFbXB0eUNlbGxzLFxuICAgICAgICBzZXRFbXB0eUNlbGxzLFxuICAgICAgICBnZXRPY2N1cGllZENlbGxzLFxuICAgICAgICBzZXRPY2N1cGllZENlbGxzLFxuICAgICAgICBnZXRCb2FyZCxcbiAgICAgICAgcGxhY2VTaGlwcyxcbiAgICAgICAgcGxhY2VFbXB0eVNwYWNlLFxuICAgICAgICByZWNpZXZlQXR0YWNrLFxuICAgICAgICBjaGVja0dhbWVPdmVyXG4gICAgfVxufVxuXG5jb25zdCBQbGF5ZXIgPSAobmFtZSkgPT4ge1xuICAgIGNvbnN0IGdldE5hbWUgPSAoKSA9PiBuYW1lXG5cbiAgICBjb25zdCByb3cgPSAxMFxuICAgIGNvbnN0IGNvbHVtbiA9IDEwXG4gICAgY29uc3QgcG9zc2libGVDaG9pY2VzID0gW11cblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcm93OyBpKyspIHtcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBjb2x1bW47IGorKykge1xuICAgICAgICAgICAgcG9zc2libGVDaG9pY2VzLnB1c2goaS50b1N0cmluZygpICsgai50b1N0cmluZygpKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgZ2V0UG9zc2libGVDaG9pY2VzID0gKCkgPT4gcG9zc2libGVDaG9pY2VzXG5cbiAgICBjb25zdCBjb21wdXRlckF0dGFjayA9ICgpID0+IHtcblxuICAgICAgICAgICAgbGV0IGF0dGFja0Nvb3JkaW5hdGUgPSBnZXRQb3NzaWJsZUNob2ljZXMoKVtNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBnZXRQb3NzaWJsZUNob2ljZXMoKS5sZW5ndGgpXVxuXG4gICAgICAgICAgICBjb25zdCBpbmRleCA9IGdldFBvc3NpYmxlQ2hvaWNlcygpLmluZGV4T2YoYXR0YWNrQ29vcmRpbmF0ZSlcbiAgICAgICAgICAgIGlmIChpbmRleCA+IC0xKSB7XG4gICAgICAgICAgICAgICAgcG9zc2libGVDaG9pY2VzLnNwbGljZShpbmRleCwgMSkgXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBhdHRhY2tDb29yZGluYXRlXG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgZ2V0TmFtZSxcbiAgICAgICAgY29tcHV0ZXJBdHRhY2tcbiAgICB9XG59XG5cbmV4cG9ydCB7IFNoaXAsIEdhbWVib2FyZCwgUGxheWVyIH0iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLmNvbnRhaW5lciB7XG4gICAgaGVpZ2h0OiAxMDB2aDtcblxuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xufVxuXG4ucGxheWVyLW9uZS1nYW1lYm9hcmQge1xuICAgIGhlaWdodDogNTAwcHg7XG4gICAgd2lkdGg6IDUwMHB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbn1cblxuLnBsYXllci1vbmUtZ2FtZWJvYXJkIGRpdiB7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbn1cblxuLnBsYXllci10d28tZ2FtZWJvYXJkIHtcbiAgICBoZWlnaHQ6IDUwMHB4O1xuICAgIHdpZHRoOiA1MDBweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcblxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG59XG5cbi5wbGF5ZXItdHdvLWdhbWVib2FyZCBkaXYge1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG59XG5cbi5vY2N1cGllZC1jZWxsIHtcbiAgICBiYWNrZ3JvdW5kOiBibGFjaztcbn1cblxuLmVtcHR5LWNlbGwge1xuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xufVxuXG4uaGl0LWNlbGwge1xuICAgIGJhY2tncm91bmQ6IHJlZDtcbn1cblxuLm1pc3NlZC1jZWxsIHtcbiAgICBiYWNrZ3JvdW5kOiBncmF5O1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLGFBQWE7O0lBRWIsYUFBYTtJQUNiLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLGFBQWE7SUFDYixZQUFZO0lBQ1osdUJBQXVCOztJQUV2QixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixZQUFZO0lBQ1osdUJBQXVCOztJQUV2QixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmNvbnRhaW5lciB7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG59XFxuXFxuLnBsYXllci1vbmUtZ2FtZWJvYXJkIHtcXG4gICAgaGVpZ2h0OiA1MDBweDtcXG4gICAgd2lkdGg6IDUwMHB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG59XFxuXFxuLnBsYXllci1vbmUtZ2FtZWJvYXJkIGRpdiB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG4ucGxheWVyLXR3by1nYW1lYm9hcmQge1xcbiAgICBoZWlnaHQ6IDUwMHB4O1xcbiAgICB3aWR0aDogNTAwcHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbn1cXG5cXG4ucGxheWVyLXR3by1nYW1lYm9hcmQgZGl2IHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxufVxcblxcbi5vY2N1cGllZC1jZWxsIHtcXG4gICAgYmFja2dyb3VuZDogYmxhY2s7XFxufVxcblxcbi5lbXB0eS1jZWxsIHtcXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XFxufVxcblxcbi5oaXQtY2VsbCB7XFxuICAgIGJhY2tncm91bmQ6IHJlZDtcXG59XFxuXFxuLm1pc3NlZC1jZWxsIHtcXG4gICAgYmFja2dyb3VuZDogZ3JheTtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBcIi4vc3R5bGUuY3NzXCJcblxuaW1wb3J0IHsgR2FtZSB9IGZyb20gXCIuL2dhbWUuanNcIjtcbmltcG9ydCB7IFNoaXAgfSBmcm9tIFwiLi9vYmplY3RzLmpzXCI7XG5cbkdhbWVcblxuZnVuY3Rpb24gZGlzcGxheUhlYWRlcigpIHtcbiAgICBjb25zdCBwbGF5ZXJPbmVIZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGxheWVyLW9uZS1oZWFkZXInKVxuICAgIGNvbnN0IHBsYXllclR3b0hlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wbGF5ZXItdHdvLWhlYWRlcicpXG5cbiAgICBwbGF5ZXJPbmVIZWFkZXIudGV4dENvbnRlbnQgPSBHYW1lLmdldEFjdGl2ZVBsYXllcigpLmdldE5hbWUoKVxuICAgIEdhbWUuc3dpdGNoUGxheWVyVHVybigpXG4gICAgcGxheWVyVHdvSGVhZGVyLnRleHRDb250ZW50ID0gR2FtZS5nZXRBY3RpdmVQbGF5ZXIoKS5nZXROYW1lKClcbiAgICBHYW1lLnN3aXRjaFBsYXllclR1cm4oKVxufVxuXG5mdW5jdGlvbiBkaXNwbGF5UGxheWVyT25lQm9hcmQoKSB7XG4gICAgY29uc3QgcGxheWVyT25lR2FtZWJvYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBsYXllci1vbmUtZ2FtZWJvYXJkJyk7XG4gICAgcGxheWVyT25lR2FtZWJvYXJkLnRleHRDb250ZW50ID0gW107XG5cbiAgICBsZXQgYXR0YWNrQ29vcmRpbmF0ZSA9IEdhbWUuZ2V0Q29tcHV0ZXIoKS5jb21wdXRlckF0dGFjaygpO1xuXG4gICAgKEdhbWUuZ2V0UGxheWVyR2FtZWJvYXJkKCkuZ2V0Qm9hcmQoKSkuZm9yRWFjaCgocm93Q2VsbCkgPT4ge1xuXG4gICAgICAgIHJvd0NlbGwuZm9yRWFjaCgoY29sdW1uQ2VsbCkgPT4ge1xuXG4gICAgICAgICAgICBjb25zdCBib2FyZENlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICAgICAgYm9hcmRDZWxsLnRleHRDb250ZW50ID0gY29sdW1uQ2VsbFxuICAgICAgICAgICAgYm9hcmRDZWxsLnNldEF0dHJpYnV0ZSgnaWQnLCBjb2x1bW5DZWxsKVxuICAgICAgICAgICAgYm9hcmRDZWxsLmNsYXNzTGlzdC5hZGQoJ3BsYXllci1vbmUtY2VsbHMnKVxuICAgICAgICAgICAgYm9hcmRDZWxsLnN0eWxlLndpZHRoID0gJzEwJSdcbiAgICAgICAgICAgIGJvYXJkQ2VsbC5zdHlsZS5oZWlnaHQgPSAnMTAlJ1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZiAoR2FtZS5nZXRQbGF5ZXJHYW1lYm9hcmQoKS5nZXRPY2N1cGllZENlbGxzKCkuaW5jbHVkZXMoYm9hcmRDZWxsLnRleHRDb250ZW50KSkge1xuICAgICAgICAgICAgICAgIGJvYXJkQ2VsbC5jbGFzc0xpc3QuYWRkKCdvY2N1cGllZC1jZWxsJylcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoR2FtZS5nZXRQbGF5ZXJHYW1lYm9hcmQoKS5nZXRFbXB0eUNlbGxzKCkuaW5jbHVkZXMoYm9hcmRDZWxsLnRleHRDb250ZW50KSkge1xuICAgICAgICAgICAgICAgIGJvYXJkQ2VsbC5jbGFzc0xpc3QuYWRkKCdlbXB0eS1jZWxsJylcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoR2FtZS5nZXRQbGF5ZXJHYW1lYm9hcmQoKS5nZXRIaXRDZWxscygpLmluY2x1ZGVzKGJvYXJkQ2VsbC50ZXh0Q29udGVudCkpIHtcbiAgICAgICAgICAgICAgICBib2FyZENlbGwuY2xhc3NMaXN0LmFkZCgnaGl0LWNlbGwnKVxuICAgICAgICAgICAgfSBlbHNlIGlmIChHYW1lLmdldFBsYXllckdhbWVib2FyZCgpLmdldE1pc3NlZENlbGxzKCkuaW5jbHVkZXMoYm9hcmRDZWxsLnRleHRDb250ZW50KSkge1xuICAgICAgICAgICAgICAgIGJvYXJkQ2VsbC5jbGFzc0xpc3QuYWRkKCdtaXNzZWQtY2VsbCcpXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZ1bmN0aW9uIHBsYXllckNlbGxDbGljaygpIHtcblxuICAgICAgICAgICAgICAgIGlmIChib2FyZENlbGwuZ2V0QXR0cmlidXRlKCdpZCcpID09IGF0dGFja0Nvb3JkaW5hdGUpIHtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBpZiAoYm9hcmRDZWxsLmNsYXNzTGlzdC5jb250YWlucygnb2NjdXBpZWQtY2VsbCcpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBib2FyZENlbGwuY2xhc3NMaXN0LnJlbW92ZSgnb2NjdXBpZWQtY2VsbCcpXG4gICAgICAgICAgICAgICAgICAgICAgICBib2FyZENlbGwuY2xhc3NMaXN0LmFkZCgnaGl0LWNlbGwnKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGlmIChib2FyZENlbGwuY2xhc3NMaXN0LmNvbnRhaW5zKCdlbXB0eS1jZWxsJykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvYXJkQ2VsbC5jbGFzc0xpc3QucmVtb3ZlKCdlbXB0eS1jZWxsJylcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvYXJkQ2VsbC5jbGFzc0xpc3QuYWRkKCdtaXNzZWQtY2VsbCcpXG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBHYW1lLmdldFBsYXllckdhbWVib2FyZCgpLnJlY2lldmVBdHRhY2soYXR0YWNrQ29vcmRpbmF0ZSlcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheVBsYXllclR3b0JvYXJkKClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHBsYXllckNlbGxDbGljaygpXG5cbiAgICAgICAgICAgIHBsYXllck9uZUdhbWVib2FyZC5hcHBlbmRDaGlsZChib2FyZENlbGwpXG5cbiAgICAgICAgfSlcbiAgICB9KVxufVxuXG5mdW5jdGlvbiBkaXNwbGF5UGxheWVyVHdvQm9hcmQoKSB7XG4gICAgY29uc3QgcGxheWVyVHdvR2FtZWJvYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBsYXllci10d28tZ2FtZWJvYXJkJyk7XG4gICAgcGxheWVyVHdvR2FtZWJvYXJkLnRleHRDb250ZW50ID0gJyc7XG5cbiAgICAoR2FtZS5nZXRDb21wdXRlckdhbWVib2FyZCgpLmdldEJvYXJkKCkpLmZvckVhY2goKHJvd0NlbGwpID0+IHtcblxuICAgICAgICByb3dDZWxsLmZvckVhY2goKGNvbHVtbkNlbGwpID0+IHtcblxuICAgICAgICAgICAgY29uc3QgYm9hcmRDZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgICAgIGJvYXJkQ2VsbC50ZXh0Q29udGVudCA9IGNvbHVtbkNlbGxcbiAgICAgICAgICAgIGJvYXJkQ2VsbC5zZXRBdHRyaWJ1dGUoJ2lkJywgY29sdW1uQ2VsbClcbiAgICAgICAgICAgIGJvYXJkQ2VsbC5jbGFzc0xpc3QuYWRkKCdwbGF5ZXItdHdvLWNlbGxzJylcbiAgICAgICAgICAgIGJvYXJkQ2VsbC5zdHlsZS53aWR0aCA9ICcxMCUnXG4gICAgICAgICAgICBib2FyZENlbGwuc3R5bGUuaGVpZ2h0ID0gJzEwJSdcblxuICAgICAgICAgICAgaWYgKEdhbWUuZ2V0Q29tcHV0ZXJHYW1lYm9hcmQoKS5nZXRPY2N1cGllZENlbGxzKCkuaW5jbHVkZXMoYm9hcmRDZWxsLnRleHRDb250ZW50KSkge1xuICAgICAgICAgICAgICAgIGJvYXJkQ2VsbC5jbGFzc0xpc3QuYWRkKCdvY2N1cGllZC1jb20tY2VsbCcpXG4gICAgICAgICAgICB9IGVsc2UgaWYgKEdhbWUuZ2V0Q29tcHV0ZXJHYW1lYm9hcmQoKS5nZXRFbXB0eUNlbGxzKCkuaW5jbHVkZXMoYm9hcmRDZWxsLnRleHRDb250ZW50KSkge1xuICAgICAgICAgICAgICAgIGJvYXJkQ2VsbC5jbGFzc0xpc3QuYWRkKCdlbXB0eS1jZWxsJylcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoR2FtZS5nZXRDb21wdXRlckdhbWVib2FyZCgpLmdldEhpdENlbGxzKCkuaW5jbHVkZXMoYm9hcmRDZWxsLnRleHRDb250ZW50KSkge1xuICAgICAgICAgICAgICAgIGJvYXJkQ2VsbC5jbGFzc0xpc3QuYWRkKCdoaXQtY2VsbCcpXG4gICAgICAgICAgICB9IGVsc2UgaWYgKEdhbWUuZ2V0Q29tcHV0ZXJHYW1lYm9hcmQoKS5nZXRNaXNzZWRDZWxscygpLmluY2x1ZGVzKGJvYXJkQ2VsbC50ZXh0Q29udGVudCkpIHtcbiAgICAgICAgICAgICAgICBib2FyZENlbGwuY2xhc3NMaXN0LmFkZCgnbWlzc2VkLWNlbGwnKVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmdW5jdGlvbiBkaXNhYmxlQWxsQnV0dG9ucygpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBib2FyZENlbGxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnBsYXllci10d28tY2VsbHMnKVxuXG4gICAgICAgICAgICAgICAgYm9hcmRDZWxscy5mb3JFYWNoKChjZWxsKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNlbGwucmVwbGFjZVdpdGgoY2VsbC5jbG9uZU5vZGUodHJ1ZSkpXG4gICAgICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmdW5jdGlvbiBjb21wdXRlckNlbGxDbGljaygpIHtcblxuICAgICAgICAgICAgICAgIGlmIChib2FyZENlbGwuY2xhc3NMaXN0LmNvbnRhaW5zKCdoaXQtY2VsbCcpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoYm9hcmRDZWxsLmNsYXNzTGlzdC5jb250YWlucygnbWlzc2VkLWNlbGwnKSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBpZiAoYm9hcmRDZWxsLmNsYXNzTGlzdC5jb250YWlucygnb2NjdXBpZWQtY29tLWNlbGwnKSkge1xuICAgICAgICAgICAgICAgICAgICBib2FyZENlbGwuY2xhc3NMaXN0LnJlbW92ZSgnb2NjdXBpZWQtY29tLWNlbGwnKVxuICAgICAgICAgICAgICAgICAgICBib2FyZENlbGwuY2xhc3NMaXN0LmFkZCgnaGl0LWNlbGwnKVxuICAgICAgICAgICAgICAgICAgICBkaXNhYmxlQWxsQnV0dG9ucygpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgaWYgKGJvYXJkQ2VsbC5jbGFzc0xpc3QuY29udGFpbnMoJ2VtcHR5LWNlbGwnKSkge1xuICAgICAgICAgICAgICAgICAgICBib2FyZENlbGwuY2xhc3NMaXN0LnJlbW92ZSgnZW1wdHktY2VsbCcpXG4gICAgICAgICAgICAgICAgICAgIGJvYXJkQ2VsbC5jbGFzc0xpc3QuYWRkKCdtaXNzZWQtY2VsbCcpXG4gICAgICAgICAgICAgICAgICAgIGRpc2FibGVBbGxCdXR0b25zKClcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBHYW1lLmdldENvbXB1dGVyR2FtZWJvYXJkKCkucmVjaWV2ZUF0dGFjayhib2FyZENlbGwudGV4dENvbnRlbnQpXG4gICAgICAgICAgICAgICAgZGlzcGxheVBsYXllck9uZUJvYXJkKClcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBib2FyZENlbGwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjb21wdXRlckNlbGxDbGljaylcbiAgICAgICAgICAgIHBsYXllclR3b0dhbWVib2FyZC5hcHBlbmRDaGlsZChib2FyZENlbGwpXG4gICAgICAgIH0pXG4gICAgfSlcbn1cblxuXG5sZXQgcGxheWVyU2hpcHMgPSBbXVxuXG5mdW5jdGlvbiBzZXRQbGF5ZXJTaGlwcygpIHtcbiAgICBsZXQgY2FycmllciA9IFNoaXAoW10pXG4gICAgbGV0IGJhdHRsZXNoaXAgPSBTaGlwKFtdKVxuICAgIGxldCBkZXN0cm95ZXIgPSBTaGlwKFtdKVxuICAgIGxldCBzdWJtYXJpbmUgPSBTaGlwKFtdKVxuICAgIGxldCBwYXRyb2wgPSBTaGlwKFtdKVxuXG4gICAgY2Fycmllci5jcmVhdGVDYXJyaWVyKCcwMScsICdZJylcbiAgICBiYXR0bGVzaGlwLmNyZWF0ZUJhdHRsZXNoaXAoJzEzJywgJ1gnKVxuICAgIGRlc3Ryb3llci5jcmVhdGVEZXN0cm95ZXIoJzcxJywgJ1gnKVxuICAgIHN1Ym1hcmluZS5jcmVhdGVTdWJtYXJpbmUoJzc2JywgJ1knKVxuICAgIHBhdHJvbC5jcmVhdGVQYXRyb2woJzUzJywgJ1gnKVxuXG4gICAgcGxheWVyU2hpcHMucHVzaChjYXJyaWVyKVxuICAgIHBsYXllclNoaXBzLnB1c2goYmF0dGxlc2hpcClcbiAgICBwbGF5ZXJTaGlwcy5wdXNoKGRlc3Ryb3llcilcbiAgICBwbGF5ZXJTaGlwcy5wdXNoKHN1Ym1hcmluZSlcbiAgICBwbGF5ZXJTaGlwcy5wdXNoKHBhdHJvbClcblxuXG4gICAgR2FtZS5nZXRQbGF5ZXJHYW1lYm9hcmQoKS5wbGFjZVNoaXBzKHBsYXllclNoaXBzKTtcbiAgICBHYW1lLmdldFBsYXllckdhbWVib2FyZCgpLnBsYWNlRW1wdHlTcGFjZSgpO1xufVxuXG5sZXQgY29tcHV0ZXJTaGlwcyA9IFtdXG5cbmZ1bmN0aW9uIHNldENvbXB1dGVyU2hpcHMoKSB7XG4gICAgbGV0IGNhcnJpZXIgPSBTaGlwKFsnNDInLCAnNDMnLCAnNDQnLCAnNDUnLCAnNDYnXSlcbiAgICBsZXQgYmF0dGxlc2hpcCA9IFNoaXAoWycwOScsICcxOScsICcyOScsICczOSddKVxuICAgIGxldCBkZXN0cm95ZXIgPSBTaGlwKFsnNzInLCAnNzMnLCAnNzQnXSlcbiAgICBsZXQgc3VibWFyaW5lID0gU2hpcChbJzY3JywgJzc3JywgJzg3J10pXG4gICAgbGV0IHBhdHJvbCA9IFNoaXAoWycxMScsICcxMiddKVxuXG4gICAgY29tcHV0ZXJTaGlwcy5wdXNoKGNhcnJpZXIpXG4gICAgY29tcHV0ZXJTaGlwcy5wdXNoKGJhdHRsZXNoaXApXG4gICAgY29tcHV0ZXJTaGlwcy5wdXNoKGRlc3Ryb3llcilcbiAgICBjb21wdXRlclNoaXBzLnB1c2goc3VibWFyaW5lKVxuICAgIGNvbXB1dGVyU2hpcHMucHVzaChwYXRyb2wpXG5cbiAgICBHYW1lLmdldENvbXB1dGVyR2FtZWJvYXJkKCkucGxhY2VTaGlwcyhjb21wdXRlclNoaXBzKTtcbiAgICBHYW1lLmdldENvbXB1dGVyR2FtZWJvYXJkKCkucGxhY2VFbXB0eVNwYWNlKCk7XG59XG5cbmZ1bmN0aW9uIGdhbWVDb250cm9sbGVyKCkge1xuXG4gICAgZGlzcGxheUhlYWRlcigpXG4gICAgc2V0UGxheWVyU2hpcHMoKTtcbiAgICBzZXRDb21wdXRlclNoaXBzKCk7XG4gICAgZGlzcGxheVBsYXllck9uZUJvYXJkKClcbiAgICBkaXNwbGF5UGxheWVyVHdvQm9hcmQoKVxuXG4gICAgLy9jb25zb2xlLmxvZyhHYW1lLmdldFBsYXllckdhbWVib2FyZCgpLmdldE9jY3VwaWVkQ2VsbHMoKS5sZW5ndGgpXG5cbiAgICAvL2NvbnNvbGUubG9nKChHYW1lLmdldFBsYXllckdhbWVib2FyZCgpLmNoZWNrR2FtZU92ZXIoKSkpXG5cbiAgICAvL3doaWxlICghKEdhbWUuZ2V0Q29tcHV0ZXJHYW1lYm9hcmQoKS5jaGVja0dhbWVPdmVyKCkpIHx8ICEoR2FtZS5nZXRQbGF5ZXJHYW1lYm9hcmQoKS5jaGVja0dhbWVPdmVyKCkpKSB7XG5cbiAgICAgICAgLy9jb25zb2xlLmxvZyhHYW1lLmdldEFjdGl2ZVBsYXllcigpKVxuXG4gICAgICAgIC8vaWYgKEdhbWUuZ2V0QWN0aXZlUGxheWVyKCkgPT0gR2FtZS5nZXRQbGF5ZXIoKSkge1xuICAgICAgICAgIC8vICBkaXNwbGF5UGxheWVyVHdvQm9hcmQoKVxuICAgICAgICAvL30gZWxzZSBpZiAoR2FtZS5nZXRBY3RpdmVHYW1lYm9hcmQoKSA9PSBHYW1lLmdldENvbXB1dGVyKCkpIHtcbiAgICAgICAgICAvLyAgZGlzcGxheVBsYXllck9uZUJvYXJkKClcbiAgICAgICAgLy99XG5cbiAgICAgICAgLy9HYW1lLnN3aXRjaFBsYXllclR1cm4oKVxuXG59XG5cbmdhbWVDb250cm9sbGVyKClcbiJdLCJuYW1lcyI6WyJTaGlwIiwiR2FtZWJvYXJkIiwiUGxheWVyIiwiR2FtZSIsInBsYXllcnMiLCJnYW1lYm9hcmRzIiwicGxheWVyIiwicGxheWVyR2FtZWJvYXJkIiwiY29tcHV0ZXIiLCJjb21wdXRlckdhbWVib2FyZCIsInB1c2giLCJhY3RpdmVQbGF5ZXIiLCJhY3RpdmVCb2FyZCIsImdldEFjdGl2ZVBsYXllciIsImdldEFjdGl2ZUdhbWVib2FyZCIsImdldFBsYXllciIsImdldENvbXB1dGVyIiwiZ2V0UGxheWVyR2FtZWJvYXJkIiwiZ2V0Q29tcHV0ZXJHYW1lYm9hcmQiLCJzd2l0Y2hQbGF5ZXJUdXJuIiwic3dpdGNoQWN0aXZlQm9hcmQiLCJwb3NpdGlvbiIsImdldFBvc2l0aW9uIiwic2V0UG9zaXRpb24iLCJjb29yZHMiLCJjcmVhdGVDYXJyaWVyIiwiY29vcmRpbmF0ZSIsIm9yaWVudGF0aW9uIiwiTnVtYmVyIiwidG9TdHJpbmciLCJsZW5ndGgiLCJTdHJpbmciLCJpIiwiY3JlYXRlQmF0dGxlc2hpcCIsImNyZWF0ZURlc3Ryb3llciIsImNyZWF0ZVN1Ym1hcmluZSIsImNyZWF0ZVBhdHJvbCIsInJvdyIsImNvbHVtbiIsImJvYXJkIiwibWlzc3NlZENlbGxzIiwiaGl0Q2VsbHMiLCJlbXB0eUNlbGxzIiwib2NjdXBpZWRDZWxscyIsImoiLCJnZXRCb2FyZCIsImdldE1pc3NlZENlbGxzIiwic2V0TWlzc2VkQ2VsbHMiLCJuZXdDZWxsIiwiZ2V0SGl0Q2VsbHMiLCJzZXRIaXRDZWxscyIsImdldEVtcHR5Q2VsbHMiLCJzZXRFbXB0eUNlbGxzIiwiZ2V0T2NjdXBpZWRDZWxscyIsInNldE9jY3VwaWVkQ2VsbHMiLCJwbGFjZVNoaXBzIiwic2hpcHMiLCJmb3JFYWNoIiwic2hpcCIsInBvc2l0aW9uQ2VsbCIsInBsYWNlRW1wdHlTcGFjZSIsInJvd0NlbGwiLCJjb2x1bW5DZWxsIiwiaW5jbHVkZXMiLCJyZWNpZXZlQXR0YWNrIiwib2NjdXBpZWRJbmRleCIsImluZGV4T2YiLCJzcGxpY2UiLCJlbXB0eUluZGV4IiwiY2hlY2tHYW1lT3ZlciIsIm5hbWUiLCJnZXROYW1lIiwicG9zc2libGVDaG9pY2VzIiwiZ2V0UG9zc2libGVDaG9pY2VzIiwiY29tcHV0ZXJBdHRhY2siLCJhdHRhY2tDb29yZGluYXRlIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwiaW5kZXgiLCJkaXNwbGF5SGVhZGVyIiwicGxheWVyT25lSGVhZGVyIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwicGxheWVyVHdvSGVhZGVyIiwidGV4dENvbnRlbnQiLCJkaXNwbGF5UGxheWVyT25lQm9hcmQiLCJwbGF5ZXJPbmVHYW1lYm9hcmQiLCJib2FyZENlbGwiLCJjcmVhdGVFbGVtZW50Iiwic2V0QXR0cmlidXRlIiwiY2xhc3NMaXN0IiwiYWRkIiwic3R5bGUiLCJ3aWR0aCIsImhlaWdodCIsInBsYXllckNlbGxDbGljayIsImdldEF0dHJpYnV0ZSIsImNvbnRhaW5zIiwicmVtb3ZlIiwiZGlzcGxheVBsYXllclR3b0JvYXJkIiwiYXBwZW5kQ2hpbGQiLCJwbGF5ZXJUd29HYW1lYm9hcmQiLCJkaXNhYmxlQWxsQnV0dG9ucyIsImJvYXJkQ2VsbHMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiY2VsbCIsInJlcGxhY2VXaXRoIiwiY2xvbmVOb2RlIiwiY29tcHV0ZXJDZWxsQ2xpY2siLCJhZGRFdmVudExpc3RlbmVyIiwicGxheWVyU2hpcHMiLCJzZXRQbGF5ZXJTaGlwcyIsImNhcnJpZXIiLCJiYXR0bGVzaGlwIiwiZGVzdHJveWVyIiwic3VibWFyaW5lIiwicGF0cm9sIiwiY29tcHV0ZXJTaGlwcyIsInNldENvbXB1dGVyU2hpcHMiLCJnYW1lQ29udHJvbGxlciJdLCJzb3VyY2VSb290IjoiIn0=