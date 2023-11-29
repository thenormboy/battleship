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
  const computerPosition = () => {
    return getEmptyCells()[Math.floor(Math.random() * getEmptyCells().length)];
  };
  const computerOrientation = () => {
    let orientations = ['X', 'Y'];
    return orientations[Math.floor(Math.random() * orientations.length)];
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
    checkGameOver,
    computerPosition,
    computerOrientation
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
        boardCell.classList.add('occupied-cell');
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
        if (boardCell.classList.contains('occupied-cell')) {
          boardCell.classList.remove('occupied-cell');
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
  _game_js__WEBPACK_IMPORTED_MODULE_1__.Game.getComputerGameboard().placeEmptySpace();
  let carrier = (0,_objects_js__WEBPACK_IMPORTED_MODULE_2__.Ship)([]);
  carrier.createCarrier(String(_game_js__WEBPACK_IMPORTED_MODULE_1__.Game.getComputerGameboard().computerPosition()), _game_js__WEBPACK_IMPORTED_MODULE_1__.Game.getComputerGameboard().computerOrientation());
  computerShips.push(carrier);
  _game_js__WEBPACK_IMPORTED_MODULE_1__.Game.getComputerGameboard().placeShips(computerShips);
  _game_js__WEBPACK_IMPORTED_MODULE_1__.Game.getComputerGameboard().placeEmptySpace();

  //let battleship = Ship([])
  //let destroyer = Ship([])
  //let submarine = Ship([])
  //let patrol = Ship([])

  //battleship.createBattleship('13', 'X')
  //destroyer.createDestroyer('71', 'X')
  //submarine.createSubmarine('76', 'Y')
  //patrol.createPatrol('53', 'X')

  //computerShips.push(battleship)
  //computerShips.push(destroyer)
  //computerShips.push(submarine)
  //computerShips.push(patrol)

  //    for (let i = 0; i < 5; i++) {

  //      Game.getComputerGameboard().placeShips(computerShips);
  //    Game.getComputerGameboard().placeEmptySpace();

  //}
}

function gameController() {
  displayHeader();
  setPlayerShips();
  setComputerShips();
  displayPlayerOneBoard();
  displayPlayerTwoBoard();
}
gameController();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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bWUuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9vYmplY3RzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTaGlwLCBHYW1lYm9hcmQsIFBsYXllciB9IGZyb20gXCIuL29iamVjdHMuanNcIjtcblxuY29uc3QgR2FtZSA9ICgoKSA9PiB7XG5cbiAgICBsZXQgcGxheWVycyA9IFtdXG4gICAgbGV0IGdhbWVib2FyZHMgPSBbXVxuXG4gICAgbGV0IHBsYXllciA9IFBsYXllcignUGxheWVyJylcbiAgICBsZXQgcGxheWVyR2FtZWJvYXJkID0gR2FtZWJvYXJkKClcblxuICAgIGxldCBjb21wdXRlciA9IFBsYXllcignQ29tcHV0ZXInKVxuICAgIGxldCBjb21wdXRlckdhbWVib2FyZCA9IEdhbWVib2FyZCgpXG5cbiAgICBwbGF5ZXJzLnB1c2gocGxheWVyKVxuICAgIHBsYXllcnMucHVzaChjb21wdXRlcilcblxuICAgIGdhbWVib2FyZHMucHVzaChwbGF5ZXJHYW1lYm9hcmQpXG4gICAgZ2FtZWJvYXJkcy5wdXNoKGNvbXB1dGVyR2FtZWJvYXJkKVxuXG4gICAgbGV0IGFjdGl2ZVBsYXllciA9IHBsYXllcnNbMF1cbiAgICBsZXQgYWN0aXZlQm9hcmQgPSBnYW1lYm9hcmRzWzBdXG5cbiAgICBjb25zdCBnZXRBY3RpdmVQbGF5ZXIgPSAoKSA9PiBhY3RpdmVQbGF5ZXJcbiAgICBjb25zdCBnZXRBY3RpdmVHYW1lYm9hcmQgPSAoKSA9PiBhY3RpdmVCb2FyZFxuXG4gICAgY29uc3QgZ2V0UGxheWVyID0gKCkgPT4gcGxheWVyXG4gICAgY29uc3QgZ2V0Q29tcHV0ZXIgPSAoKSA9PiBjb21wdXRlclxuXG4gICAgY29uc3QgZ2V0UGxheWVyR2FtZWJvYXJkID0gKCkgPT4gcGxheWVyR2FtZWJvYXJkXG4gICAgY29uc3QgZ2V0Q29tcHV0ZXJHYW1lYm9hcmQgPSAoKSA9PiBjb21wdXRlckdhbWVib2FyZFxuXG4gICAgY29uc3Qgc3dpdGNoUGxheWVyVHVybiA9ICgpID0+IHtcbiAgICAgICAgaWYgKGFjdGl2ZVBsYXllciA9PT0gcGxheWVyc1swXSkge1xuICAgICAgICAgICAgYWN0aXZlUGxheWVyID0gcGxheWVyc1sxXVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYWN0aXZlUGxheWVyID0gcGxheWVyc1swXVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3Qgc3dpdGNoQWN0aXZlQm9hcmQgPSAoKSA9PiB7XG4gICAgICAgIGlmIChhY3RpdmVCb2FyZCA9PT0gZ2FtZWJvYXJkc1swXSkge1xuICAgICAgICAgICAgYWN0aXZlQm9hcmQgPSBnYW1lYm9hcmRzWzFdXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBhY3RpdmVCb2FyZCA9IGdhbWVib2FyZHNbMF1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIGdldFBsYXllcixcbiAgICAgICAgZ2V0UGxheWVyR2FtZWJvYXJkLFxuICAgICAgICBnZXRDb21wdXRlcixcbiAgICAgICAgZ2V0Q29tcHV0ZXJHYW1lYm9hcmQsXG4gICAgICAgIGdldEFjdGl2ZVBsYXllcixcbiAgICAgICAgZ2V0QWN0aXZlR2FtZWJvYXJkLFxuICAgICAgICBzd2l0Y2hQbGF5ZXJUdXJuLFxuICAgICAgICBzd2l0Y2hBY3RpdmVCb2FyZFxuICAgIH1cblxufSkoKTtcblxuZXhwb3J0IHsgR2FtZSB9ICIsImNvbnN0IFNoaXAgPSAocG9zaXRpb24pID0+IHtcblxuICAgIGNvbnN0IGdldFBvc2l0aW9uID0gKCkgPT4gcG9zaXRpb25cblxuICAgIGNvbnN0IHNldFBvc2l0aW9uID0gKGNvb3JkcykgPT4ge1xuICAgICAgICBnZXRQb3NpdGlvbigpLnB1c2goY29vcmRzKVxuICAgIH1cblxuICAgIGNvbnN0IGNyZWF0ZUNhcnJpZXIgPSAoY29vcmRpbmF0ZSwgb3JpZW50YXRpb24pID0+IHtcbiAgICAgICAgY29vcmRpbmF0ZSA9IE51bWJlcihjb29yZGluYXRlKVxuXG4gICAgICAgIGlmIChjb29yZGluYXRlLnRvU3RyaW5nKCkubGVuZ3RoID09IDEpIHtcblxuICAgICAgICAgICAgc2V0UG9zaXRpb24oJzAnICsgU3RyaW5nKGNvb3JkaW5hdGUpKVxuXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8IDU7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmIChvcmllbnRhdGlvbiA9PSAnWCcpIHtcbiAgICAgICAgICAgICAgICAgICAgc2V0UG9zaXRpb24oJzAnICsgU3RyaW5nKGNvb3JkaW5hdGUgKyBpKSlcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKG9yaWVudGF0aW9uID09ICdZJykge1xuICAgICAgICAgICAgICAgICAgICBzZXRQb3NpdGlvbihTdHJpbmcoY29vcmRpbmF0ZSArIChpICogMTApKSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA1OyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAob3JpZW50YXRpb24gPT0gJ1gnKSB7XG4gICAgICAgICAgICAgICAgICAgIHNldFBvc2l0aW9uKFN0cmluZyhjb29yZGluYXRlICsgaSkpXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChvcmllbnRhdGlvbiA9PSAnWScpIHtcbiAgICAgICAgICAgICAgICAgICAgc2V0UG9zaXRpb24oU3RyaW5nKGNvb3JkaW5hdGUgKyAoaSAqIDEwKSkpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY3JlYXRlQmF0dGxlc2hpcChjb29yZGluYXRlLCBvcmllbnRhdGlvbikge1xuICAgICAgICBjb29yZGluYXRlID0gTnVtYmVyKGNvb3JkaW5hdGUpXG5cbiAgICAgICAgaWYgKGNvb3JkaW5hdGUudG9TdHJpbmcoKS5sZW5ndGggPT0gMSkge1xuXG4gICAgICAgICAgICBzZXRQb3NpdGlvbignMCcgKyBTdHJpbmcoY29vcmRpbmF0ZSkpXG5cbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgNDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKG9yaWVudGF0aW9uID09ICdYJykge1xuICAgICAgICAgICAgICAgICAgICBzZXRQb3NpdGlvbignMCcgKyBTdHJpbmcoY29vcmRpbmF0ZSArIGkpKVxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAob3JpZW50YXRpb24gPT0gJ1knKSB7XG4gICAgICAgICAgICAgICAgICAgIHNldFBvc2l0aW9uKFN0cmluZyhjb29yZGluYXRlICsgKGkgKiAxMCkpKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDQ7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmIChvcmllbnRhdGlvbiA9PSAnWCcpIHtcbiAgICAgICAgICAgICAgICAgICAgc2V0UG9zaXRpb24oU3RyaW5nKGNvb3JkaW5hdGUgKyBpKSlcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKG9yaWVudGF0aW9uID09ICdZJykge1xuICAgICAgICAgICAgICAgICAgICBzZXRQb3NpdGlvbihTdHJpbmcoY29vcmRpbmF0ZSArIChpICogMTApKSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gICAgfVxuXG4gICAgZnVuY3Rpb24gY3JlYXRlRGVzdHJveWVyKGNvb3JkaW5hdGUsIG9yaWVudGF0aW9uKSB7XG4gICAgICAgIGNvb3JkaW5hdGUgPSBOdW1iZXIoY29vcmRpbmF0ZSlcblxuICAgICAgICBpZiAoY29vcmRpbmF0ZS50b1N0cmluZygpLmxlbmd0aCA9PSAxKSB7XG5cbiAgICAgICAgICAgIHNldFBvc2l0aW9uKCcwJyArIFN0cmluZyhjb29yZGluYXRlKSlcblxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCA0OyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAob3JpZW50YXRpb24gPT0gJ1gnKSB7XG4gICAgICAgICAgICAgICAgICAgIHNldFBvc2l0aW9uKCcwJyArIFN0cmluZyhjb29yZGluYXRlICsgaSkpXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChvcmllbnRhdGlvbiA9PSAnWScpIHtcbiAgICAgICAgICAgICAgICAgICAgc2V0UG9zaXRpb24oU3RyaW5nKGNvb3JkaW5hdGUgKyAoaSAqIDEwKSkpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKG9yaWVudGF0aW9uID09ICdYJykge1xuICAgICAgICAgICAgICAgICAgICBzZXRQb3NpdGlvbihTdHJpbmcoY29vcmRpbmF0ZSArIGkpKVxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAob3JpZW50YXRpb24gPT0gJ1knKSB7XG4gICAgICAgICAgICAgICAgICAgIHNldFBvc2l0aW9uKFN0cmluZyhjb29yZGluYXRlICsgKGkgKiAxMCkpKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSAgICB9XG5cbiAgICBmdW5jdGlvbiBjcmVhdGVTdWJtYXJpbmUoY29vcmRpbmF0ZSwgb3JpZW50YXRpb24pIHtcbiAgICAgICAgY29vcmRpbmF0ZSA9IE51bWJlcihjb29yZGluYXRlKVxuXG4gICAgICAgIGlmIChjb29yZGluYXRlLnRvU3RyaW5nKCkubGVuZ3RoID09IDEpIHtcblxuICAgICAgICAgICAgc2V0UG9zaXRpb24oJzAnICsgU3RyaW5nKGNvb3JkaW5hdGUpKVxuXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8IDM7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmIChvcmllbnRhdGlvbiA9PSAnWCcpIHtcbiAgICAgICAgICAgICAgICAgICAgc2V0UG9zaXRpb24oJzAnICsgU3RyaW5nKGNvb3JkaW5hdGUgKyBpKSlcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKG9yaWVudGF0aW9uID09ICdZJykge1xuICAgICAgICAgICAgICAgICAgICBzZXRQb3NpdGlvbihTdHJpbmcoY29vcmRpbmF0ZSArIChpICogMTApKSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAzOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAob3JpZW50YXRpb24gPT0gJ1gnKSB7XG4gICAgICAgICAgICAgICAgICAgIHNldFBvc2l0aW9uKFN0cmluZyhjb29yZGluYXRlICsgaSkpXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChvcmllbnRhdGlvbiA9PSAnWScpIHtcbiAgICAgICAgICAgICAgICAgICAgc2V0UG9zaXRpb24oU3RyaW5nKGNvb3JkaW5hdGUgKyAoaSAqIDEwKSkpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9ICAgIH1cblxuICAgIGZ1bmN0aW9uIGNyZWF0ZVBhdHJvbChjb29yZGluYXRlLCBvcmllbnRhdGlvbikge1xuICAgICAgICBjb29yZGluYXRlID0gTnVtYmVyKGNvb3JkaW5hdGUpXG5cbiAgICAgICAgaWYgKGNvb3JkaW5hdGUudG9TdHJpbmcoKS5sZW5ndGggPT0gMSkge1xuXG4gICAgICAgICAgICBzZXRQb3NpdGlvbignMCcgKyBTdHJpbmcoY29vcmRpbmF0ZSkpXG5cbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgMjsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKG9yaWVudGF0aW9uID09ICdYJykge1xuICAgICAgICAgICAgICAgICAgICBzZXRQb3NpdGlvbignMCcgKyBTdHJpbmcoY29vcmRpbmF0ZSArIGkpKVxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAob3JpZW50YXRpb24gPT0gJ1knKSB7XG4gICAgICAgICAgICAgICAgICAgIHNldFBvc2l0aW9uKFN0cmluZyhjb29yZGluYXRlICsgKGkgKiAxMCkpKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDI7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmIChvcmllbnRhdGlvbiA9PSAnWCcpIHtcbiAgICAgICAgICAgICAgICAgICAgc2V0UG9zaXRpb24oU3RyaW5nKGNvb3JkaW5hdGUgKyBpKSlcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKG9yaWVudGF0aW9uID09ICdZJykge1xuICAgICAgICAgICAgICAgICAgICBzZXRQb3NpdGlvbihTdHJpbmcoY29vcmRpbmF0ZSArIChpICogMTApKSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgZ2V0UG9zaXRpb24sXG4gICAgICAgIHNldFBvc2l0aW9uLFxuICAgICAgICBjcmVhdGVDYXJyaWVyLFxuICAgICAgICBjcmVhdGVCYXR0bGVzaGlwLFxuICAgICAgICBjcmVhdGVEZXN0cm95ZXIsXG4gICAgICAgIGNyZWF0ZVN1Ym1hcmluZSxcbiAgICAgICAgY3JlYXRlUGF0cm9sXG4gICAgfVxufVxuXG5jb25zdCBHYW1lYm9hcmQgPSAoKSA9PiB7XG4gICAgY29uc3Qgcm93ID0gMTBcbiAgICBjb25zdCBjb2x1bW4gPSAxMFxuICAgIGNvbnN0IGJvYXJkID0gW11cbiAgICBjb25zdCBtaXNzc2VkQ2VsbHMgPSBbXVxuICAgIGNvbnN0IGhpdENlbGxzID0gW11cbiAgICBjb25zdCBlbXB0eUNlbGxzID0gW11cbiAgICBjb25zdCBvY2N1cGllZENlbGxzID0gW11cblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcm93OyBpKyspIHtcbiAgICAgICAgYm9hcmRbaV0gPSBbXVxuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGNvbHVtbjsgaisrKSB7XG4gICAgICAgICAgICBib2FyZFtpXS5wdXNoKGkudG9TdHJpbmcoKSArIGoudG9TdHJpbmcoKSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGdldEJvYXJkID0gKCkgPT4gYm9hcmRcblxuICAgIGNvbnN0IGdldE1pc3NlZENlbGxzID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gbWlzc3NlZENlbGxzXG4gICAgfVxuXG4gICAgY29uc3Qgc2V0TWlzc2VkQ2VsbHMgPSBuZXdDZWxsID0+IHtcbiAgICAgICAgbWlzc3NlZENlbGxzLnB1c2gobmV3Q2VsbClcbiAgICB9XG5cbiAgICBjb25zdCBnZXRIaXRDZWxscyA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIGhpdENlbGxzXG4gICAgfVxuXG4gICAgY29uc3Qgc2V0SGl0Q2VsbHMgPSBuZXdDZWxsID0+IHtcbiAgICAgICAgaGl0Q2VsbHMucHVzaChuZXdDZWxsKVxuICAgIH1cblxuICAgIGNvbnN0IGdldEVtcHR5Q2VsbHMgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBlbXB0eUNlbGxzXG4gICAgfVxuXG4gICAgY29uc3Qgc2V0RW1wdHlDZWxscyA9IG5ld0NlbGwgPT4ge1xuICAgICAgICBlbXB0eUNlbGxzLnB1c2gobmV3Q2VsbClcbiAgICB9XG5cbiAgICBjb25zdCBnZXRPY2N1cGllZENlbGxzID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gb2NjdXBpZWRDZWxsc1xuICAgIH1cblxuICAgIGNvbnN0IHNldE9jY3VwaWVkQ2VsbHMgPSBuZXdDZWxsID0+IHtcbiAgICAgICAgb2NjdXBpZWRDZWxscy5wdXNoKG5ld0NlbGwpXG4gICAgfVxuXG4gICAgY29uc3QgcGxhY2VTaGlwcyA9IChzaGlwcykgPT4ge1xuICAgICAgICBzaGlwcy5mb3JFYWNoKHNoaXAgPT4ge1xuICAgICAgICAgICAgc2hpcC5nZXRQb3NpdGlvbigpLmZvckVhY2gocG9zaXRpb25DZWxsID0+IHtcbiAgICAgICAgICAgICAgICBzZXRPY2N1cGllZENlbGxzKHBvc2l0aW9uQ2VsbClcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGNvbnN0IHBsYWNlRW1wdHlTcGFjZSA9ICgpID0+IHtcbiAgICAgICAgZ2V0Qm9hcmQoKS5mb3JFYWNoKHJvd0NlbGwgPT4ge1xuICAgICAgICAgICAgcm93Q2VsbC5mb3JFYWNoKGNvbHVtbkNlbGwgPT4ge1xuICAgICAgICAgICAgICAgIGlmICghKGdldE9jY3VwaWVkQ2VsbHMoKS5pbmNsdWRlcyhjb2x1bW5DZWxsKSkpIHtcbiAgICAgICAgICAgICAgICAgICAgc2V0RW1wdHlDZWxscyhjb2x1bW5DZWxsKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgY29uc3QgcmVjaWV2ZUF0dGFjayA9IChjb29yZGluYXRlKSA9PiB7XG4gICAgICAgIGlmIChnZXRPY2N1cGllZENlbGxzKCkuaW5jbHVkZXMoY29vcmRpbmF0ZSkpIHtcbiAgICAgICAgICAgIHNldEhpdENlbGxzKGNvb3JkaW5hdGUpXG5cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNldE1pc3NlZENlbGxzKGNvb3JkaW5hdGUpXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBvY2N1cGllZEluZGV4ID0gZ2V0T2NjdXBpZWRDZWxscygpLmluZGV4T2YoY29vcmRpbmF0ZSlcbiAgICAgICAgaWYgKG9jY3VwaWVkSW5kZXggPiAtMSkge1xuICAgICAgICAgICAgZ2V0T2NjdXBpZWRDZWxscygpLnNwbGljZShvY2N1cGllZEluZGV4LCAxKSBcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGVtcHR5SW5kZXggPSBnZXRFbXB0eUNlbGxzKCkuaW5kZXhPZihjb29yZGluYXRlKVxuICAgICAgICBpZiAoZW1wdHlJbmRleCA+IC0xKSB7XG4gICAgICAgICAgICBnZXRFbXB0eUNlbGxzKCkuc3BsaWNlKGVtcHR5SW5kZXgsIDEpXG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIGNvbnN0IGNoZWNrR2FtZU92ZXIgPSAoKSA9PntcbiAgICAgICAgaWYgKGdldE9jY3VwaWVkQ2VsbHMoKS5sZW5ndGggPT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgY29tcHV0ZXJQb3NpdGlvbiA9ICgpID0+IHtcblxuICAgICAgICByZXR1cm4gZ2V0RW1wdHlDZWxscygpW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGdldEVtcHR5Q2VsbHMoKS5sZW5ndGgpXVxuICAgIH1cblxuICAgIGNvbnN0IGNvbXB1dGVyT3JpZW50YXRpb24gPSAoKSA9PiB7XG5cbiAgICAgICAgbGV0IG9yaWVudGF0aW9ucyA9IFsnWCcsICdZJ11cblxuICAgICAgICByZXR1cm4gb3JpZW50YXRpb25zW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIG9yaWVudGF0aW9ucy5sZW5ndGgpXVxuXG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgZ2V0TWlzc2VkQ2VsbHMsXG4gICAgICAgIHNldE1pc3NlZENlbGxzLFxuICAgICAgICBnZXRIaXRDZWxscyxcbiAgICAgICAgc2V0SGl0Q2VsbHMsXG4gICAgICAgIGdldEVtcHR5Q2VsbHMsXG4gICAgICAgIHNldEVtcHR5Q2VsbHMsXG4gICAgICAgIGdldE9jY3VwaWVkQ2VsbHMsXG4gICAgICAgIHNldE9jY3VwaWVkQ2VsbHMsXG4gICAgICAgIGdldEJvYXJkLFxuICAgICAgICBwbGFjZVNoaXBzLFxuICAgICAgICBwbGFjZUVtcHR5U3BhY2UsXG4gICAgICAgIHJlY2lldmVBdHRhY2ssXG4gICAgICAgIGNoZWNrR2FtZU92ZXIsXG4gICAgICAgIGNvbXB1dGVyUG9zaXRpb24sXG4gICAgICAgIGNvbXB1dGVyT3JpZW50YXRpb25cbiAgICB9XG59XG5cbmNvbnN0IFBsYXllciA9IChuYW1lKSA9PiB7XG4gICAgY29uc3QgZ2V0TmFtZSA9ICgpID0+IG5hbWVcblxuICAgIGNvbnN0IHJvdyA9IDEwXG4gICAgY29uc3QgY29sdW1uID0gMTBcbiAgICBjb25zdCBwb3NzaWJsZUNob2ljZXMgPSBbXVxuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCByb3c7IGkrKykge1xuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGNvbHVtbjsgaisrKSB7XG4gICAgICAgICAgICBwb3NzaWJsZUNob2ljZXMucHVzaChpLnRvU3RyaW5nKCkgKyBqLnRvU3RyaW5nKCkpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBnZXRQb3NzaWJsZUNob2ljZXMgPSAoKSA9PiBwb3NzaWJsZUNob2ljZXNcblxuICAgIGNvbnN0IGNvbXB1dGVyQXR0YWNrID0gKCkgPT4ge1xuXG4gICAgICAgICAgICBsZXQgYXR0YWNrQ29vcmRpbmF0ZSA9IGdldFBvc3NpYmxlQ2hvaWNlcygpW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGdldFBvc3NpYmxlQ2hvaWNlcygpLmxlbmd0aCldXG5cbiAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gZ2V0UG9zc2libGVDaG9pY2VzKCkuaW5kZXhPZihhdHRhY2tDb29yZGluYXRlKVxuICAgICAgICAgICAgaWYgKGluZGV4ID4gLTEpIHtcbiAgICAgICAgICAgICAgICBwb3NzaWJsZUNob2ljZXMuc3BsaWNlKGluZGV4LCAxKSBcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIGF0dGFja0Nvb3JkaW5hdGVcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBnZXROYW1lLFxuICAgICAgICBjb21wdXRlckF0dGFja1xuICAgIH1cbn1cblxuZXhwb3J0IHsgU2hpcCwgR2FtZWJvYXJkLCBQbGF5ZXIgfSIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAuY29udGFpbmVyIHtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuXG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XG59XG5cbi5wbGF5ZXItb25lLWdhbWVib2FyZCB7XG4gICAgaGVpZ2h0OiA1MDBweDtcbiAgICB3aWR0aDogNTAwcHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG5cbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZmxleC13cmFwOiB3cmFwO1xufVxuXG4ucGxheWVyLW9uZS1nYW1lYm9hcmQgZGl2IHtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xufVxuXG4ucGxheWVyLXR3by1nYW1lYm9hcmQge1xuICAgIGhlaWdodDogNTAwcHg7XG4gICAgd2lkdGg6IDUwMHB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbn1cblxuLnBsYXllci10d28tZ2FtZWJvYXJkIGRpdiB7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbn1cblxuLm9jY3VwaWVkLWNlbGwge1xuICAgIGJhY2tncm91bmQ6IGJsYWNrO1xufVxuXG4uZW1wdHktY2VsbCB7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG59XG5cbi5oaXQtY2VsbCB7XG4gICAgYmFja2dyb3VuZDogcmVkO1xufVxuXG4ubWlzc2VkLWNlbGwge1xuICAgIGJhY2tncm91bmQ6IGdyYXk7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksYUFBYTs7SUFFYixhQUFhO0lBQ2IsOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFlBQVk7SUFDWix1QkFBdUI7O0lBRXZCLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFlBQVk7SUFDWix1QkFBdUI7O0lBRXZCLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuY29udGFpbmVyIHtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG5cXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbn1cXG5cXG4ucGxheWVyLW9uZS1nYW1lYm9hcmQge1xcbiAgICBoZWlnaHQ6IDUwMHB4O1xcbiAgICB3aWR0aDogNTAwcHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbn1cXG5cXG4ucGxheWVyLW9uZS1nYW1lYm9hcmQgZGl2IHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxufVxcblxcbi5wbGF5ZXItdHdvLWdhbWVib2FyZCB7XFxuICAgIGhlaWdodDogNTAwcHg7XFxuICAgIHdpZHRoOiA1MDBweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxufVxcblxcbi5wbGF5ZXItdHdvLWdhbWVib2FyZCBkaXYge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG59XFxuXFxuLm9jY3VwaWVkLWNlbGwge1xcbiAgICBiYWNrZ3JvdW5kOiBibGFjaztcXG59XFxuXFxuLmVtcHR5LWNlbGwge1xcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXG59XFxuXFxuLmhpdC1jZWxsIHtcXG4gICAgYmFja2dyb3VuZDogcmVkO1xcbn1cXG5cXG4ubWlzc2VkLWNlbGwge1xcbiAgICBiYWNrZ3JvdW5kOiBncmF5O1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IFwiLi9zdHlsZS5jc3NcIlxuXG5pbXBvcnQgeyBHYW1lIH0gZnJvbSBcIi4vZ2FtZS5qc1wiO1xuaW1wb3J0IHsgU2hpcCB9IGZyb20gXCIuL29iamVjdHMuanNcIjtcblxuR2FtZVxuXG5mdW5jdGlvbiBkaXNwbGF5SGVhZGVyKCkge1xuICAgIGNvbnN0IHBsYXllck9uZUhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wbGF5ZXItb25lLWhlYWRlcicpXG4gICAgY29uc3QgcGxheWVyVHdvSGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBsYXllci10d28taGVhZGVyJylcblxuICAgIHBsYXllck9uZUhlYWRlci50ZXh0Q29udGVudCA9IEdhbWUuZ2V0QWN0aXZlUGxheWVyKCkuZ2V0TmFtZSgpXG4gICAgR2FtZS5zd2l0Y2hQbGF5ZXJUdXJuKClcbiAgICBwbGF5ZXJUd29IZWFkZXIudGV4dENvbnRlbnQgPSBHYW1lLmdldEFjdGl2ZVBsYXllcigpLmdldE5hbWUoKVxuICAgIEdhbWUuc3dpdGNoUGxheWVyVHVybigpXG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlQbGF5ZXJPbmVCb2FyZCgpIHtcbiAgICBjb25zdCBwbGF5ZXJPbmVHYW1lYm9hcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGxheWVyLW9uZS1nYW1lYm9hcmQnKTtcbiAgICBwbGF5ZXJPbmVHYW1lYm9hcmQudGV4dENvbnRlbnQgPSBbXTtcblxuICAgIGxldCBhdHRhY2tDb29yZGluYXRlID0gR2FtZS5nZXRDb21wdXRlcigpLmNvbXB1dGVyQXR0YWNrKCk7XG5cbiAgICAoR2FtZS5nZXRQbGF5ZXJHYW1lYm9hcmQoKS5nZXRCb2FyZCgpKS5mb3JFYWNoKChyb3dDZWxsKSA9PiB7XG5cbiAgICAgICAgcm93Q2VsbC5mb3JFYWNoKChjb2x1bW5DZWxsKSA9PiB7XG5cbiAgICAgICAgICAgIGNvbnN0IGJvYXJkQ2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgICAgICBib2FyZENlbGwudGV4dENvbnRlbnQgPSBjb2x1bW5DZWxsXG4gICAgICAgICAgICBib2FyZENlbGwuc2V0QXR0cmlidXRlKCdpZCcsIGNvbHVtbkNlbGwpXG4gICAgICAgICAgICBib2FyZENlbGwuY2xhc3NMaXN0LmFkZCgncGxheWVyLW9uZS1jZWxscycpXG4gICAgICAgICAgICBib2FyZENlbGwuc3R5bGUud2lkdGggPSAnMTAlJ1xuICAgICAgICAgICAgYm9hcmRDZWxsLnN0eWxlLmhlaWdodCA9ICcxMCUnXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmIChHYW1lLmdldFBsYXllckdhbWVib2FyZCgpLmdldE9jY3VwaWVkQ2VsbHMoKS5pbmNsdWRlcyhib2FyZENlbGwudGV4dENvbnRlbnQpKSB7XG4gICAgICAgICAgICAgICAgYm9hcmRDZWxsLmNsYXNzTGlzdC5hZGQoJ29jY3VwaWVkLWNlbGwnKVxuICAgICAgICAgICAgfSBlbHNlIGlmIChHYW1lLmdldFBsYXllckdhbWVib2FyZCgpLmdldEVtcHR5Q2VsbHMoKS5pbmNsdWRlcyhib2FyZENlbGwudGV4dENvbnRlbnQpKSB7XG4gICAgICAgICAgICAgICAgYm9hcmRDZWxsLmNsYXNzTGlzdC5hZGQoJ2VtcHR5LWNlbGwnKVxuICAgICAgICAgICAgfSBlbHNlIGlmIChHYW1lLmdldFBsYXllckdhbWVib2FyZCgpLmdldEhpdENlbGxzKCkuaW5jbHVkZXMoYm9hcmRDZWxsLnRleHRDb250ZW50KSkge1xuICAgICAgICAgICAgICAgIGJvYXJkQ2VsbC5jbGFzc0xpc3QuYWRkKCdoaXQtY2VsbCcpXG4gICAgICAgICAgICB9IGVsc2UgaWYgKEdhbWUuZ2V0UGxheWVyR2FtZWJvYXJkKCkuZ2V0TWlzc2VkQ2VsbHMoKS5pbmNsdWRlcyhib2FyZENlbGwudGV4dENvbnRlbnQpKSB7XG4gICAgICAgICAgICAgICAgYm9hcmRDZWxsLmNsYXNzTGlzdC5hZGQoJ21pc3NlZC1jZWxsJylcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZnVuY3Rpb24gcGxheWVyQ2VsbENsaWNrKCkge1xuXG4gICAgICAgICAgICAgICAgaWYgKGJvYXJkQ2VsbC5nZXRBdHRyaWJ1dGUoJ2lkJykgPT0gYXR0YWNrQ29vcmRpbmF0ZSkge1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGlmIChib2FyZENlbGwuY2xhc3NMaXN0LmNvbnRhaW5zKCdvY2N1cGllZC1jZWxsJykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvYXJkQ2VsbC5jbGFzc0xpc3QucmVtb3ZlKCdvY2N1cGllZC1jZWxsJylcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvYXJkQ2VsbC5jbGFzc0xpc3QuYWRkKCdoaXQtY2VsbCcpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgaWYgKGJvYXJkQ2VsbC5jbGFzc0xpc3QuY29udGFpbnMoJ2VtcHR5LWNlbGwnKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9hcmRDZWxsLmNsYXNzTGlzdC5yZW1vdmUoJ2VtcHR5LWNlbGwnKVxuICAgICAgICAgICAgICAgICAgICAgICAgYm9hcmRDZWxsLmNsYXNzTGlzdC5hZGQoJ21pc3NlZC1jZWxsJylcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIEdhbWUuZ2V0UGxheWVyR2FtZWJvYXJkKCkucmVjaWV2ZUF0dGFjayhhdHRhY2tDb29yZGluYXRlKVxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5UGxheWVyVHdvQm9hcmQoKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcGxheWVyQ2VsbENsaWNrKClcblxuICAgICAgICAgICAgcGxheWVyT25lR2FtZWJvYXJkLmFwcGVuZENoaWxkKGJvYXJkQ2VsbClcblxuICAgICAgICB9KVxuICAgIH0pXG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlQbGF5ZXJUd29Cb2FyZCgpIHtcbiAgICBjb25zdCBwbGF5ZXJUd29HYW1lYm9hcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGxheWVyLXR3by1nYW1lYm9hcmQnKTtcbiAgICBwbGF5ZXJUd29HYW1lYm9hcmQudGV4dENvbnRlbnQgPSAnJztcblxuICAgIChHYW1lLmdldENvbXB1dGVyR2FtZWJvYXJkKCkuZ2V0Qm9hcmQoKSkuZm9yRWFjaCgocm93Q2VsbCkgPT4ge1xuXG4gICAgICAgIHJvd0NlbGwuZm9yRWFjaCgoY29sdW1uQ2VsbCkgPT4ge1xuXG4gICAgICAgICAgICBjb25zdCBib2FyZENlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICAgICAgYm9hcmRDZWxsLnRleHRDb250ZW50ID0gY29sdW1uQ2VsbFxuICAgICAgICAgICAgYm9hcmRDZWxsLnNldEF0dHJpYnV0ZSgnaWQnLCBjb2x1bW5DZWxsKVxuICAgICAgICAgICAgYm9hcmRDZWxsLmNsYXNzTGlzdC5hZGQoJ3BsYXllci10d28tY2VsbHMnKVxuICAgICAgICAgICAgYm9hcmRDZWxsLnN0eWxlLndpZHRoID0gJzEwJSdcbiAgICAgICAgICAgIGJvYXJkQ2VsbC5zdHlsZS5oZWlnaHQgPSAnMTAlJ1xuXG4gICAgICAgICAgICBpZiAoR2FtZS5nZXRDb21wdXRlckdhbWVib2FyZCgpLmdldE9jY3VwaWVkQ2VsbHMoKS5pbmNsdWRlcyhib2FyZENlbGwudGV4dENvbnRlbnQpKSB7XG4gICAgICAgICAgICAgICAgYm9hcmRDZWxsLmNsYXNzTGlzdC5hZGQoJ29jY3VwaWVkLWNlbGwnKVxuICAgICAgICAgICAgfSBlbHNlIGlmIChHYW1lLmdldENvbXB1dGVyR2FtZWJvYXJkKCkuZ2V0RW1wdHlDZWxscygpLmluY2x1ZGVzKGJvYXJkQ2VsbC50ZXh0Q29udGVudCkpIHtcbiAgICAgICAgICAgICAgICBib2FyZENlbGwuY2xhc3NMaXN0LmFkZCgnZW1wdHktY2VsbCcpXG4gICAgICAgICAgICB9IGVsc2UgaWYgKEdhbWUuZ2V0Q29tcHV0ZXJHYW1lYm9hcmQoKS5nZXRIaXRDZWxscygpLmluY2x1ZGVzKGJvYXJkQ2VsbC50ZXh0Q29udGVudCkpIHtcbiAgICAgICAgICAgICAgICBib2FyZENlbGwuY2xhc3NMaXN0LmFkZCgnaGl0LWNlbGwnKVxuICAgICAgICAgICAgfSBlbHNlIGlmIChHYW1lLmdldENvbXB1dGVyR2FtZWJvYXJkKCkuZ2V0TWlzc2VkQ2VsbHMoKS5pbmNsdWRlcyhib2FyZENlbGwudGV4dENvbnRlbnQpKSB7XG4gICAgICAgICAgICAgICAgYm9hcmRDZWxsLmNsYXNzTGlzdC5hZGQoJ21pc3NlZC1jZWxsJylcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZnVuY3Rpb24gZGlzYWJsZUFsbEJ1dHRvbnMoKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgYm9hcmRDZWxscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wbGF5ZXItdHdvLWNlbGxzJylcblxuICAgICAgICAgICAgICAgIGJvYXJkQ2VsbHMuZm9yRWFjaCgoY2VsbCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjZWxsLnJlcGxhY2VXaXRoKGNlbGwuY2xvbmVOb2RlKHRydWUpKVxuICAgICAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZnVuY3Rpb24gY29tcHV0ZXJDZWxsQ2xpY2soKSB7XG5cbiAgICAgICAgICAgICAgICBpZiAoYm9hcmRDZWxsLmNsYXNzTGlzdC5jb250YWlucygnaGl0LWNlbGwnKSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGJvYXJkQ2VsbC5jbGFzc0xpc3QuY29udGFpbnMoJ21pc3NlZC1jZWxsJykpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgaWYgKGJvYXJkQ2VsbC5jbGFzc0xpc3QuY29udGFpbnMoJ29jY3VwaWVkLWNlbGwnKSkge1xuICAgICAgICAgICAgICAgICAgICBib2FyZENlbGwuY2xhc3NMaXN0LnJlbW92ZSgnb2NjdXBpZWQtY2VsbCcpXG4gICAgICAgICAgICAgICAgICAgIGJvYXJkQ2VsbC5jbGFzc0xpc3QuYWRkKCdoaXQtY2VsbCcpXG4gICAgICAgICAgICAgICAgICAgIGRpc2FibGVBbGxCdXR0b25zKClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBpZiAoYm9hcmRDZWxsLmNsYXNzTGlzdC5jb250YWlucygnZW1wdHktY2VsbCcpKSB7XG4gICAgICAgICAgICAgICAgICAgIGJvYXJkQ2VsbC5jbGFzc0xpc3QucmVtb3ZlKCdlbXB0eS1jZWxsJylcbiAgICAgICAgICAgICAgICAgICAgYm9hcmRDZWxsLmNsYXNzTGlzdC5hZGQoJ21pc3NlZC1jZWxsJylcbiAgICAgICAgICAgICAgICAgICAgZGlzYWJsZUFsbEJ1dHRvbnMoKVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIEdhbWUuZ2V0Q29tcHV0ZXJHYW1lYm9hcmQoKS5yZWNpZXZlQXR0YWNrKGJvYXJkQ2VsbC50ZXh0Q29udGVudClcbiAgICAgICAgICAgICAgICBkaXNwbGF5UGxheWVyT25lQm9hcmQoKVxuICAgICAgICAgICAgXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGJvYXJkQ2VsbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNvbXB1dGVyQ2VsbENsaWNrKVxuICAgICAgICAgICAgcGxheWVyVHdvR2FtZWJvYXJkLmFwcGVuZENoaWxkKGJvYXJkQ2VsbClcbiAgICAgICAgfSlcbiAgICB9KVxufVxuXG5cbmxldCBwbGF5ZXJTaGlwcyA9IFtdXG5cbmZ1bmN0aW9uIHNldFBsYXllclNoaXBzKCkge1xuICAgIGxldCBjYXJyaWVyID0gU2hpcChbXSlcbiAgICBsZXQgYmF0dGxlc2hpcCA9IFNoaXAoW10pXG4gICAgbGV0IGRlc3Ryb3llciA9IFNoaXAoW10pXG4gICAgbGV0IHN1Ym1hcmluZSA9IFNoaXAoW10pXG4gICAgbGV0IHBhdHJvbCA9IFNoaXAoW10pXG5cbiAgICBjYXJyaWVyLmNyZWF0ZUNhcnJpZXIoJzAxJywgJ1knKVxuICAgIGJhdHRsZXNoaXAuY3JlYXRlQmF0dGxlc2hpcCgnMTMnLCAnWCcpXG4gICAgZGVzdHJveWVyLmNyZWF0ZURlc3Ryb3llcignNzEnLCAnWCcpXG4gICAgc3VibWFyaW5lLmNyZWF0ZVN1Ym1hcmluZSgnNzYnLCAnWScpXG4gICAgcGF0cm9sLmNyZWF0ZVBhdHJvbCgnNTMnLCAnWCcpXG5cbiAgICBwbGF5ZXJTaGlwcy5wdXNoKGNhcnJpZXIpXG4gICAgcGxheWVyU2hpcHMucHVzaChiYXR0bGVzaGlwKVxuICAgIHBsYXllclNoaXBzLnB1c2goZGVzdHJveWVyKVxuICAgIHBsYXllclNoaXBzLnB1c2goc3VibWFyaW5lKVxuICAgIHBsYXllclNoaXBzLnB1c2gocGF0cm9sKVxuXG4gICAgR2FtZS5nZXRQbGF5ZXJHYW1lYm9hcmQoKS5wbGFjZVNoaXBzKHBsYXllclNoaXBzKTtcbiAgICBHYW1lLmdldFBsYXllckdhbWVib2FyZCgpLnBsYWNlRW1wdHlTcGFjZSgpO1xufVxuXG5sZXQgY29tcHV0ZXJTaGlwcyA9IFtdXG5cbmZ1bmN0aW9uIHNldENvbXB1dGVyU2hpcHMoKSB7XG5cbiAgICBHYW1lLmdldENvbXB1dGVyR2FtZWJvYXJkKCkucGxhY2VFbXB0eVNwYWNlKCk7XG5cbiAgICBsZXQgY2FycmllciA9IFNoaXAoW10pXG4gICAgY2Fycmllci5jcmVhdGVDYXJyaWVyKFN0cmluZyhHYW1lLmdldENvbXB1dGVyR2FtZWJvYXJkKCkuY29tcHV0ZXJQb3NpdGlvbigpKSwgR2FtZS5nZXRDb21wdXRlckdhbWVib2FyZCgpLmNvbXB1dGVyT3JpZW50YXRpb24oKSlcbiAgICBjb21wdXRlclNoaXBzLnB1c2goY2FycmllcilcblxuICAgIEdhbWUuZ2V0Q29tcHV0ZXJHYW1lYm9hcmQoKS5wbGFjZVNoaXBzKGNvbXB1dGVyU2hpcHMpO1xuICAgIEdhbWUuZ2V0Q29tcHV0ZXJHYW1lYm9hcmQoKS5wbGFjZUVtcHR5U3BhY2UoKTtcblxuICAgIC8vbGV0IGJhdHRsZXNoaXAgPSBTaGlwKFtdKVxuICAgIC8vbGV0IGRlc3Ryb3llciA9IFNoaXAoW10pXG4gICAgLy9sZXQgc3VibWFyaW5lID0gU2hpcChbXSlcbiAgICAvL2xldCBwYXRyb2wgPSBTaGlwKFtdKVxuXG4gICAgLy9iYXR0bGVzaGlwLmNyZWF0ZUJhdHRsZXNoaXAoJzEzJywgJ1gnKVxuICAgIC8vZGVzdHJveWVyLmNyZWF0ZURlc3Ryb3llcignNzEnLCAnWCcpXG4gICAgLy9zdWJtYXJpbmUuY3JlYXRlU3VibWFyaW5lKCc3NicsICdZJylcbiAgICAvL3BhdHJvbC5jcmVhdGVQYXRyb2woJzUzJywgJ1gnKVxuXG4gICAgLy9jb21wdXRlclNoaXBzLnB1c2goYmF0dGxlc2hpcClcbiAgICAvL2NvbXB1dGVyU2hpcHMucHVzaChkZXN0cm95ZXIpXG4gICAgLy9jb21wdXRlclNoaXBzLnB1c2goc3VibWFyaW5lKVxuICAgIC8vY29tcHV0ZXJTaGlwcy5wdXNoKHBhdHJvbClcblxuLy8gICAgZm9yIChsZXQgaSA9IDA7IGkgPCA1OyBpKyspIHtcblxuICAvLyAgICAgIEdhbWUuZ2V0Q29tcHV0ZXJHYW1lYm9hcmQoKS5wbGFjZVNoaXBzKGNvbXB1dGVyU2hpcHMpO1xuICAgIC8vICAgIEdhbWUuZ2V0Q29tcHV0ZXJHYW1lYm9hcmQoKS5wbGFjZUVtcHR5U3BhY2UoKTtcblxuICAgIC8vfVxuXG59XG5cbmZ1bmN0aW9uIGdhbWVDb250cm9sbGVyKCkge1xuXG4gICAgZGlzcGxheUhlYWRlcigpXG4gICAgc2V0UGxheWVyU2hpcHMoKTtcbiAgICBzZXRDb21wdXRlclNoaXBzKCk7XG4gICAgZGlzcGxheVBsYXllck9uZUJvYXJkKClcbiAgICBkaXNwbGF5UGxheWVyVHdvQm9hcmQoKVxufVxuXG5nYW1lQ29udHJvbGxlcigpXG4iXSwibmFtZXMiOlsiU2hpcCIsIkdhbWVib2FyZCIsIlBsYXllciIsIkdhbWUiLCJwbGF5ZXJzIiwiZ2FtZWJvYXJkcyIsInBsYXllciIsInBsYXllckdhbWVib2FyZCIsImNvbXB1dGVyIiwiY29tcHV0ZXJHYW1lYm9hcmQiLCJwdXNoIiwiYWN0aXZlUGxheWVyIiwiYWN0aXZlQm9hcmQiLCJnZXRBY3RpdmVQbGF5ZXIiLCJnZXRBY3RpdmVHYW1lYm9hcmQiLCJnZXRQbGF5ZXIiLCJnZXRDb21wdXRlciIsImdldFBsYXllckdhbWVib2FyZCIsImdldENvbXB1dGVyR2FtZWJvYXJkIiwic3dpdGNoUGxheWVyVHVybiIsInN3aXRjaEFjdGl2ZUJvYXJkIiwicG9zaXRpb24iLCJnZXRQb3NpdGlvbiIsInNldFBvc2l0aW9uIiwiY29vcmRzIiwiY3JlYXRlQ2FycmllciIsImNvb3JkaW5hdGUiLCJvcmllbnRhdGlvbiIsIk51bWJlciIsInRvU3RyaW5nIiwibGVuZ3RoIiwiU3RyaW5nIiwiaSIsImNyZWF0ZUJhdHRsZXNoaXAiLCJjcmVhdGVEZXN0cm95ZXIiLCJjcmVhdGVTdWJtYXJpbmUiLCJjcmVhdGVQYXRyb2wiLCJyb3ciLCJjb2x1bW4iLCJib2FyZCIsIm1pc3NzZWRDZWxscyIsImhpdENlbGxzIiwiZW1wdHlDZWxscyIsIm9jY3VwaWVkQ2VsbHMiLCJqIiwiZ2V0Qm9hcmQiLCJnZXRNaXNzZWRDZWxscyIsInNldE1pc3NlZENlbGxzIiwibmV3Q2VsbCIsImdldEhpdENlbGxzIiwic2V0SGl0Q2VsbHMiLCJnZXRFbXB0eUNlbGxzIiwic2V0RW1wdHlDZWxscyIsImdldE9jY3VwaWVkQ2VsbHMiLCJzZXRPY2N1cGllZENlbGxzIiwicGxhY2VTaGlwcyIsInNoaXBzIiwiZm9yRWFjaCIsInNoaXAiLCJwb3NpdGlvbkNlbGwiLCJwbGFjZUVtcHR5U3BhY2UiLCJyb3dDZWxsIiwiY29sdW1uQ2VsbCIsImluY2x1ZGVzIiwicmVjaWV2ZUF0dGFjayIsIm9jY3VwaWVkSW5kZXgiLCJpbmRleE9mIiwic3BsaWNlIiwiZW1wdHlJbmRleCIsImNoZWNrR2FtZU92ZXIiLCJjb21wdXRlclBvc2l0aW9uIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwiY29tcHV0ZXJPcmllbnRhdGlvbiIsIm9yaWVudGF0aW9ucyIsIm5hbWUiLCJnZXROYW1lIiwicG9zc2libGVDaG9pY2VzIiwiZ2V0UG9zc2libGVDaG9pY2VzIiwiY29tcHV0ZXJBdHRhY2siLCJhdHRhY2tDb29yZGluYXRlIiwiaW5kZXgiLCJkaXNwbGF5SGVhZGVyIiwicGxheWVyT25lSGVhZGVyIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwicGxheWVyVHdvSGVhZGVyIiwidGV4dENvbnRlbnQiLCJkaXNwbGF5UGxheWVyT25lQm9hcmQiLCJwbGF5ZXJPbmVHYW1lYm9hcmQiLCJib2FyZENlbGwiLCJjcmVhdGVFbGVtZW50Iiwic2V0QXR0cmlidXRlIiwiY2xhc3NMaXN0IiwiYWRkIiwic3R5bGUiLCJ3aWR0aCIsImhlaWdodCIsInBsYXllckNlbGxDbGljayIsImdldEF0dHJpYnV0ZSIsImNvbnRhaW5zIiwicmVtb3ZlIiwiZGlzcGxheVBsYXllclR3b0JvYXJkIiwiYXBwZW5kQ2hpbGQiLCJwbGF5ZXJUd29HYW1lYm9hcmQiLCJkaXNhYmxlQWxsQnV0dG9ucyIsImJvYXJkQ2VsbHMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiY2VsbCIsInJlcGxhY2VXaXRoIiwiY2xvbmVOb2RlIiwiY29tcHV0ZXJDZWxsQ2xpY2siLCJhZGRFdmVudExpc3RlbmVyIiwicGxheWVyU2hpcHMiLCJzZXRQbGF5ZXJTaGlwcyIsImNhcnJpZXIiLCJiYXR0bGVzaGlwIiwiZGVzdHJveWVyIiwic3VibWFyaW5lIiwicGF0cm9sIiwiY29tcHV0ZXJTaGlwcyIsInNldENvbXB1dGVyU2hpcHMiLCJnYW1lQ29udHJvbGxlciJdLCJzb3VyY2VSb290IjoiIn0=