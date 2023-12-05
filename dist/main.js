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
  const shipChoices = (orientation, length) => {
    let possibleChoices = [];
    if (orientation == 'X') {
      for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 11 - length; j++) {
          possibleChoices.push(i.toString() + j.toString());
        }
      }
    } else if (orientation == 'Y') {
      for (let i = 0; i < 11 - length; i++) {
        for (let j = 0; j < 10; j++) {
          possibleChoices.push(i.toString() + j.toString());
        }
      }
    }
    return possibleChoices;
  };
  const createCarrier = (coordinate, orientation) => {
    if (coordinate == 100) {
      let possibleChoices = carrierChoices(orientation);
      coordinate = possibleChoices[Math.floor(Math.random() * possibleChoices.length)];
    }
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
    let possibleChoices = [];
    if (coordinate == 100) {
      if (orientation == 'X') {
        for (let i = 0; i < 10; i++) {
          for (let j = 0; j < 7; j++) {
            possibleChoices.push(i.toString() + j.toString());
          }
        }
      } else if (orientation == 'Y') {
        for (let i = 0; i < 7; i++) {
          for (let j = 0; j < 10; j++) {
            possibleChoices.push(i.toString() + j.toString());
          }
        }
      }
      coordinate = possibleChoices[Math.floor(Math.random() * possibleChoices.length)];
    }
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
    let possibleChoices = [];
    if (coordinate == 100) {
      if (orientation == 'X') {
        for (let i = 0; i < 10; i++) {
          for (let j = 0; j < 7; j++) {
            possibleChoices.push(i.toString() + j.toString());
          }
        }
      } else if (orientation == 'Y') {
        for (let i = 0; i < 7; i++) {
          for (let j = 0; j < 10; j++) {
            possibleChoices.push(i.toString() + j.toString());
          }
        }
      }
      coordinate = possibleChoices[Math.floor(Math.random() * possibleChoices.length)];
    }
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
    let possibleChoices = [];
    if (coordinate == 100) {
      if (orientation == 'X') {
        for (let i = 0; i < 10; i++) {
          for (let j = 0; j < 8; j++) {
            possibleChoices.push(i.toString() + j.toString());
          }
        }
      } else if (orientation == 'Y') {
        for (let i = 0; i < 8; i++) {
          for (let j = 0; j < 10; j++) {
            possibleChoices.push(i.toString() + j.toString());
          }
        }
      }
      coordinate = possibleChoices[Math.floor(Math.random() * possibleChoices.length)];
    }
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
    let possibleChoices = [];
    if (coordinate == 100) {
      if (orientation == 'X') {
        for (let i = 0; i < 10; i++) {
          for (let j = 0; j < 9; j++) {
            possibleChoices.push(i.toString() + j.toString());
          }
        }
      } else if (orientation == 'Y') {
        for (let i = 0; i < 9; i++) {
          for (let j = 0; j < 10; j++) {
            possibleChoices.push(i.toString() + j.toString());
          }
        }
      }
      coordinate = possibleChoices[Math.floor(Math.random() * possibleChoices.length)];
    }
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
    shipChoices,
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
  const clearEmptyCells = () => {
    getEmptyCells().splice(0, getEmptyCells().length);
  };
  const getOccupiedCells = () => {
    return occupiedCells;
  };
  const setOccupiedCells = newCell => {
    occupiedCells.push(newCell);
  };
  const clearOccupiedCells = () => {
    getOccupiedCells().splice(0, getOccupiedCells().length);
  };
  const placeShips = ships => {
    clearOccupiedCells();
    ships.forEach(ship => {
      ship.getPosition().forEach(positionCell => {
        setOccupiedCells(positionCell);
      });
    });
  };
  const placeEmptySpace = () => {
    clearEmptyCells();
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
  const computerOrientation = () => {
    let orientations = ['X', 'Y'];
    return orientations[Math.floor(Math.random() * orientations.length)];
  };
  const checkOccupation = testArray => {
    if (testArray.length == 0) {
      return true;
    }
    for (let i = 0; i < testArray.length; i++) {
      if (getOccupiedCells().includes(testArray[i])) {
        return true;
      }
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
    checkGameOver,
    computerOrientation,
    checkOccupation
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
}

.occupied-com-cell {
    background: green;
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,aAAa;;IAEb,aAAa;IACb,8BAA8B;AAClC;;AAEA;IACI,aAAa;IACb,YAAY;IACZ,uBAAuB;;IAEvB,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,eAAe;AACnB;;AAEA;IACI,sBAAsB;IACtB,uBAAuB;AAC3B;;AAEA;IACI,aAAa;IACb,YAAY;IACZ,uBAAuB;;IAEvB,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,eAAe;AACnB;;AAEA;IACI,sBAAsB;IACtB,uBAAuB;AAC3B;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,iBAAiB;AACrB","sourcesContent":[".container {\n    height: 100vh;\n\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n}\n\n.player-one-gameboard {\n    height: 500px;\n    width: 500px;\n    border: 1px solid black;\n\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-wrap: wrap;\n}\n\n.player-one-gameboard div {\n    box-sizing: border-box;\n    border: 1px solid black;\n}\n\n.player-two-gameboard {\n    height: 500px;\n    width: 500px;\n    border: 1px solid black;\n\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-wrap: wrap;\n}\n\n.player-two-gameboard div {\n    box-sizing: border-box;\n    border: 1px solid black;\n}\n\n.occupied-cell {\n    background: black;\n}\n\n.empty-cell {\n    background: white;\n}\n\n.hit-cell {\n    background: red;\n}\n\n.missed-cell {\n    background: gray;\n}\n\n.occupied-com-cell {\n    background: green;\n}"],"sourceRoot":""}]);
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



let gameStart = false;
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
      if (gameStart == true) {
        playerCellClick();
      }
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
        if (gameStart == true) {
          _game_js__WEBPACK_IMPORTED_MODULE_1__.Game.getComputerGameboard().recieveAttack(boardCell.textContent);
          displayPlayerOneBoard();
        }
      }
      boardCell.addEventListener('click', computerCellClick);
      playerTwoGameboard.appendChild(boardCell);
    });
  });
}
function displayPlaceCarrierBoard() {
  const playerOneGameboard = document.querySelector('.player-one-gameboard');
  playerOneGameboard.textContent = [];
  let carrier = (0,_objects_js__WEBPACK_IMPORTED_MODULE_2__.Ship)([]);
  let possibleChoices = carrier.shipChoices(globalCoordinate, 5);
  _game_js__WEBPACK_IMPORTED_MODULE_1__.Game.getPlayerGameboard().getBoard().forEach(rowCell => {
    rowCell.forEach(columnCell => {
      const boardCell = document.createElement('div');
      boardCell.textContent = columnCell;
      boardCell.setAttribute('id', columnCell);
      boardCell.classList.add('player-one-cells-place');
      boardCell.style.width = '10%';
      boardCell.style.height = '10%';
      function playerCarrierCell() {
        boardCell.addEventListener('mouseenter', () => {
          boardCell.style.backgroundColor = 'yellow';
        });
        boardCell.addEventListener('mouseleave', () => {
          boardCell.style.backgroundColor = '';
        });
      }
      function playerCarrierClick() {
        boardCell.addEventListener('click', () => {
          carrier.createCarrier(boardCell.getAttribute('id'), globalCoordinate);
          playerShips.push(carrier);
          _game_js__WEBPACK_IMPORTED_MODULE_1__.Game.getPlayerGameboard().placeShips(playerShips);
          _game_js__WEBPACK_IMPORTED_MODULE_1__.Game.getPlayerGameboard().placeEmptySpace();
          displayPlayerOneBoard();
          displayPlaceBattleshipBoard();
          return;
        });
      }
      if (possibleChoices.includes(boardCell.getAttribute('id'))) {
        playerCarrierCell();
        playerCarrierClick();
      }
      playerOneGameboard.appendChild(boardCell);
    });
  });
}
function displayPlaceBattleshipBoard() {
  const playerOneGameboard = document.querySelector('.player-one-gameboard');
  playerOneGameboard.textContent = [];
  let battleship = (0,_objects_js__WEBPACK_IMPORTED_MODULE_2__.Ship)([]);
  let openSpace = battleship.shipChoices(globalCoordinate, 4);
  let occupiedSpace = _game_js__WEBPACK_IMPORTED_MODULE_1__.Game.getPlayerGameboard().getOccupiedCells();
  let possibleChoices = [];
  openSpace.forEach(value => {
    if (!occupiedSpace.includes(value)) {
      possibleChoices.push(value);
    }
  });
  _game_js__WEBPACK_IMPORTED_MODULE_1__.Game.getPlayerGameboard().getBoard().forEach(rowCell => {
    rowCell.forEach(columnCell => {
      const boardCell = document.createElement('div');
      boardCell.textContent = columnCell;
      boardCell.setAttribute('id', columnCell);
      boardCell.classList.add('player-one-cells-place');
      boardCell.style.width = '10%';
      boardCell.style.height = '10%';
      function playerBattleshipCell() {
        boardCell.addEventListener('mouseenter', () => {
          boardCell.style.backgroundColor = 'yellow';
        });
        boardCell.addEventListener('mouseleave', () => {
          boardCell.style.backgroundColor = '';
        });
      }
      function playerBattleshipClick() {
        boardCell.addEventListener('click', () => {
          battleship.createBattleship(boardCell.getAttribute('id'), globalCoordinate);
          playerShips.push(battleship);
          _game_js__WEBPACK_IMPORTED_MODULE_1__.Game.getPlayerGameboard().placeShips(playerShips);
          _game_js__WEBPACK_IMPORTED_MODULE_1__.Game.getPlayerGameboard().placeEmptySpace();
          displayPlayerOneBoard();
          displayPlaceDestroyerBoard();
          return;
        });
      }
      if (possibleChoices.includes(boardCell.getAttribute('id'))) {
        playerBattleshipCell();
        playerBattleshipClick();
      }
      playerOneGameboard.appendChild(boardCell);
    });
  });
}
function displayPlaceDestroyerBoard() {
  const playerOneGameboard = document.querySelector('.player-one-gameboard');
  playerOneGameboard.textContent = [];
  let destroyer = (0,_objects_js__WEBPACK_IMPORTED_MODULE_2__.Ship)([]);
  let openSpace = destroyer.shipChoices(globalCoordinate, 4);
  let occupiedSpace = _game_js__WEBPACK_IMPORTED_MODULE_1__.Game.getPlayerGameboard().getOccupiedCells();
  let possibleChoices = [];
  openSpace.forEach(value => {
    if (!occupiedSpace.includes(value)) {
      possibleChoices.push(value);
    }
  });
  _game_js__WEBPACK_IMPORTED_MODULE_1__.Game.getPlayerGameboard().getBoard().forEach(rowCell => {
    rowCell.forEach(columnCell => {
      const boardCell = document.createElement('div');
      boardCell.textContent = columnCell;
      boardCell.setAttribute('id', columnCell);
      boardCell.classList.add('player-one-cells-place');
      boardCell.style.width = '10%';
      boardCell.style.height = '10%';
      function playerDestroyerCell() {
        boardCell.addEventListener('mouseenter', () => {
          boardCell.style.backgroundColor = 'yellow';
        });
        boardCell.addEventListener('mouseleave', () => {
          boardCell.style.backgroundColor = '';
        });
      }
      function playerDestroyerClick() {
        boardCell.addEventListener('click', () => {
          destroyer.createDestroyer(boardCell.getAttribute('id'), globalCoordinate);
          playerShips.push(destroyer);
          _game_js__WEBPACK_IMPORTED_MODULE_1__.Game.getPlayerGameboard().placeShips(playerShips);
          _game_js__WEBPACK_IMPORTED_MODULE_1__.Game.getPlayerGameboard().placeEmptySpace();
          displayPlayerOneBoard();
          displayPlaceSubmarineBoard();
          return;
        });
      }
      if (possibleChoices.includes(boardCell.getAttribute('id'))) {
        playerDestroyerCell();
        playerDestroyerClick();
      }
      playerOneGameboard.appendChild(boardCell);
    });
  });
}
function displayPlaceSubmarineBoard() {
  const playerOneGameboard = document.querySelector('.player-one-gameboard');
  playerOneGameboard.textContent = [];
  let submarine = (0,_objects_js__WEBPACK_IMPORTED_MODULE_2__.Ship)([]);
  let openSpace = submarine.shipChoices(globalCoordinate, 3);
  let occupiedSpace = _game_js__WEBPACK_IMPORTED_MODULE_1__.Game.getPlayerGameboard().getOccupiedCells();
  let possibleChoices = [];
  openSpace.forEach(value => {
    if (!occupiedSpace.includes(value)) {
      possibleChoices.push(value);
    }
  });
  _game_js__WEBPACK_IMPORTED_MODULE_1__.Game.getPlayerGameboard().getBoard().forEach(rowCell => {
    rowCell.forEach(columnCell => {
      const boardCell = document.createElement('div');
      boardCell.textContent = columnCell;
      boardCell.setAttribute('id', columnCell);
      boardCell.classList.add('player-one-cells-place');
      boardCell.style.width = '10%';
      boardCell.style.height = '10%';
      function playerSubmarineCell() {
        boardCell.addEventListener('mouseenter', () => {
          boardCell.style.backgroundColor = 'yellow';
        });
        boardCell.addEventListener('mouseleave', () => {
          boardCell.style.backgroundColor = '';
        });
      }
      function playerSubmarineClick() {
        boardCell.addEventListener('click', () => {
          submarine.createSubmarine(boardCell.getAttribute('id'), globalCoordinate);
          playerShips.push(submarine);
          _game_js__WEBPACK_IMPORTED_MODULE_1__.Game.getPlayerGameboard().placeShips(playerShips);
          _game_js__WEBPACK_IMPORTED_MODULE_1__.Game.getPlayerGameboard().placeEmptySpace();
          displayPlayerOneBoard();
          displayPlacePatrolBoard();
          return;
        });
      }
      if (possibleChoices.includes(boardCell.getAttribute('id'))) {
        playerSubmarineCell();
        playerSubmarineClick();
      }
      playerOneGameboard.appendChild(boardCell);
    });
  });
}
function displayPlacePatrolBoard() {
  const playerOneGameboard = document.querySelector('.player-one-gameboard');
  playerOneGameboard.textContent = [];
  let patrol = (0,_objects_js__WEBPACK_IMPORTED_MODULE_2__.Ship)([]);
  let openSpace = patrol.shipChoices(globalCoordinate, 2);
  let occupiedSpace = _game_js__WEBPACK_IMPORTED_MODULE_1__.Game.getPlayerGameboard().getOccupiedCells();
  let possibleChoices = [];
  openSpace.forEach(value => {
    if (!occupiedSpace.includes(value)) {
      possibleChoices.push(value);
    }
  });
  _game_js__WEBPACK_IMPORTED_MODULE_1__.Game.getPlayerGameboard().getBoard().forEach(rowCell => {
    rowCell.forEach(columnCell => {
      const boardCell = document.createElement('div');
      boardCell.textContent = columnCell;
      boardCell.setAttribute('id', columnCell);
      boardCell.classList.add('player-one-cells-place');
      boardCell.style.width = '10%';
      boardCell.style.height = '10%';
      function playerPatrolCell() {
        boardCell.addEventListener('mouseenter', () => {
          boardCell.style.backgroundColor = 'yellow';
        });
        boardCell.addEventListener('mouseleave', () => {
          boardCell.style.backgroundColor = '';
        });
      }
      function playerPatrolClick() {
        boardCell.addEventListener('click', () => {
          patrol.createPatrol(boardCell.getAttribute('id'), globalCoordinate);
          playerShips.push(patrol);
          _game_js__WEBPACK_IMPORTED_MODULE_1__.Game.getPlayerGameboard().placeShips(playerShips);
          _game_js__WEBPACK_IMPORTED_MODULE_1__.Game.getPlayerGameboard().placeEmptySpace();
          displayPlayerOneBoard();
          return;
        });
      }
      if (possibleChoices.includes(boardCell.getAttribute('id'))) {
        playerPatrolCell();
        playerPatrolClick();
      }
      playerOneGameboard.appendChild(boardCell);
    });
  });
}
let globalCoordinate = "X";
function setRotateButton() {
  const rotateButton = document.getElementById('rotate');
  rotateButton.addEventListener('click', () => {
    if (globalCoordinate == 'X') {
      globalCoordinate = 'Y';
    } else {
      globalCoordinate = 'X';
    }
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

  //Game.getPlayerGameboard().placeShips(playerShips);
  //Game.getPlayerGameboard().placeEmptySpace();
}

let computerShips = [];
function setComputerShips() {
  _game_js__WEBPACK_IMPORTED_MODULE_1__.Game.getComputerGameboard().placeEmptySpace();
  let carrier = (0,_objects_js__WEBPACK_IMPORTED_MODULE_2__.Ship)([]);
  carrier.createCarrier(String(100), _game_js__WEBPACK_IMPORTED_MODULE_1__.Game.getComputerGameboard().computerOrientation());
  computerShips.push(carrier);
  _game_js__WEBPACK_IMPORTED_MODULE_1__.Game.getComputerGameboard().placeShips(computerShips);
  _game_js__WEBPACK_IMPORTED_MODULE_1__.Game.getComputerGameboard().placeEmptySpace();
  let battleship = (0,_objects_js__WEBPACK_IMPORTED_MODULE_2__.Ship)([]);
  while (_game_js__WEBPACK_IMPORTED_MODULE_1__.Game.getComputerGameboard().checkOccupation(battleship.getPosition())) {
    battleship = (0,_objects_js__WEBPACK_IMPORTED_MODULE_2__.Ship)([]);
    battleship.createBattleship(String(100), _game_js__WEBPACK_IMPORTED_MODULE_1__.Game.getComputerGameboard().computerOrientation());
  }
  computerShips.push(battleship);
  _game_js__WEBPACK_IMPORTED_MODULE_1__.Game.getComputerGameboard().placeShips(computerShips);
  _game_js__WEBPACK_IMPORTED_MODULE_1__.Game.getComputerGameboard().placeEmptySpace();
  let destroyer = (0,_objects_js__WEBPACK_IMPORTED_MODULE_2__.Ship)([]);
  while (_game_js__WEBPACK_IMPORTED_MODULE_1__.Game.getComputerGameboard().checkOccupation(destroyer.getPosition())) {
    destroyer = (0,_objects_js__WEBPACK_IMPORTED_MODULE_2__.Ship)([]);
    destroyer.createDestroyer(String(100), _game_js__WEBPACK_IMPORTED_MODULE_1__.Game.getComputerGameboard().computerOrientation());
  }
  computerShips.push(destroyer);
  _game_js__WEBPACK_IMPORTED_MODULE_1__.Game.getComputerGameboard().placeShips(computerShips);
  _game_js__WEBPACK_IMPORTED_MODULE_1__.Game.getComputerGameboard().placeEmptySpace();
  let submarine = (0,_objects_js__WEBPACK_IMPORTED_MODULE_2__.Ship)([]);
  while (_game_js__WEBPACK_IMPORTED_MODULE_1__.Game.getComputerGameboard().checkOccupation(submarine.getPosition())) {
    submarine = (0,_objects_js__WEBPACK_IMPORTED_MODULE_2__.Ship)([]);
    submarine.createSubmarine(String(100), _game_js__WEBPACK_IMPORTED_MODULE_1__.Game.getComputerGameboard().computerOrientation());
  }
  computerShips.push(submarine);
  _game_js__WEBPACK_IMPORTED_MODULE_1__.Game.getComputerGameboard().placeShips(computerShips);
  _game_js__WEBPACK_IMPORTED_MODULE_1__.Game.getComputerGameboard().placeEmptySpace();
  let patrol = (0,_objects_js__WEBPACK_IMPORTED_MODULE_2__.Ship)([]);
  while (_game_js__WEBPACK_IMPORTED_MODULE_1__.Game.getComputerGameboard().checkOccupation(patrol.getPosition())) {
    patrol = (0,_objects_js__WEBPACK_IMPORTED_MODULE_2__.Ship)([]);
    patrol.createPatrol(String(100), _game_js__WEBPACK_IMPORTED_MODULE_1__.Game.getComputerGameboard().computerOrientation());
  }
  computerShips.push(patrol);
  _game_js__WEBPACK_IMPORTED_MODULE_1__.Game.getComputerGameboard().placeShips(computerShips);
  _game_js__WEBPACK_IMPORTED_MODULE_1__.Game.getComputerGameboard().placeEmptySpace();
}
function gameController() {
  setRotateButton();
  displayPlaceCarrierBoard();
}
gameController();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUMsRUFBRSxDQUFDO0VBRXJCLE9BQU9HLDBDQUFJLENBQUNlLG9CQUFvQixDQUFDLENBQUMsQ0FBQzhELGVBQWUsQ0FBQytELE1BQU0sQ0FBQ3pILFdBQVcsQ0FBQyxDQUFDLENBQUMsRUFBRTtJQUV0RXlILE1BQU0sR0FBRy9JLGlEQUFJLENBQUMsRUFBRSxDQUFDO0lBQ2pCK0ksTUFBTSxDQUFDcEcsWUFBWSxDQUFDSixNQUFNLENBQUMsR0FBRyxDQUFDLEVBQUVwQywwQ0FBSSxDQUFDZSxvQkFBb0IsQ0FBQyxDQUFDLENBQUM0RCxtQkFBbUIsQ0FBQyxDQUFDLENBQUM7RUFFdkY7RUFFQXdFLGFBQWEsQ0FBQzVJLElBQUksQ0FBQ3FJLE1BQU0sQ0FBQztFQUMxQjVJLDBDQUFJLENBQUNlLG9CQUFvQixDQUFDLENBQUMsQ0FBQzhDLFVBQVUsQ0FBQ3NGLGFBQWEsQ0FBQztFQUNyRG5KLDBDQUFJLENBQUNlLG9CQUFvQixDQUFDLENBQUMsQ0FBQ21ELGVBQWUsQ0FBQyxDQUFDO0FBRWpEO0FBRUEsU0FBU21GLGNBQWNBLENBQUEsRUFBRztFQUN0Qk4sZUFBZSxDQUFDLENBQUM7RUFDakIxQix3QkFBd0IsQ0FBQyxDQUFDO0FBRTlCO0FBRUFnQyxjQUFjLENBQUMsQ0FBQyxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9nYW1lLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvb2JqZWN0cy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU2hpcCwgR2FtZWJvYXJkLCBQbGF5ZXIgfSBmcm9tIFwiLi9vYmplY3RzLmpzXCI7XG5cbmNvbnN0IEdhbWUgPSAoKCkgPT4ge1xuXG4gICAgbGV0IHBsYXllcnMgPSBbXVxuICAgIGxldCBnYW1lYm9hcmRzID0gW11cblxuICAgIGxldCBwbGF5ZXIgPSBQbGF5ZXIoJ1BsYXllcicpXG4gICAgbGV0IHBsYXllckdhbWVib2FyZCA9IEdhbWVib2FyZCgpXG5cbiAgICBsZXQgY29tcHV0ZXIgPSBQbGF5ZXIoJ0NvbXB1dGVyJylcbiAgICBsZXQgY29tcHV0ZXJHYW1lYm9hcmQgPSBHYW1lYm9hcmQoKVxuXG4gICAgcGxheWVycy5wdXNoKHBsYXllcilcbiAgICBwbGF5ZXJzLnB1c2goY29tcHV0ZXIpXG5cbiAgICBnYW1lYm9hcmRzLnB1c2gocGxheWVyR2FtZWJvYXJkKVxuICAgIGdhbWVib2FyZHMucHVzaChjb21wdXRlckdhbWVib2FyZClcblxuICAgIGxldCBhY3RpdmVQbGF5ZXIgPSBwbGF5ZXJzWzBdXG4gICAgbGV0IGFjdGl2ZUJvYXJkID0gZ2FtZWJvYXJkc1swXVxuXG4gICAgY29uc3QgZ2V0QWN0aXZlUGxheWVyID0gKCkgPT4gYWN0aXZlUGxheWVyXG4gICAgY29uc3QgZ2V0QWN0aXZlR2FtZWJvYXJkID0gKCkgPT4gYWN0aXZlQm9hcmRcblxuICAgIGNvbnN0IGdldFBsYXllciA9ICgpID0+IHBsYXllclxuICAgIGNvbnN0IGdldENvbXB1dGVyID0gKCkgPT4gY29tcHV0ZXJcblxuICAgIGNvbnN0IGdldFBsYXllckdhbWVib2FyZCA9ICgpID0+IHBsYXllckdhbWVib2FyZFxuICAgIGNvbnN0IGdldENvbXB1dGVyR2FtZWJvYXJkID0gKCkgPT4gY29tcHV0ZXJHYW1lYm9hcmRcblxuICAgIGNvbnN0IHN3aXRjaFBsYXllclR1cm4gPSAoKSA9PiB7XG4gICAgICAgIGlmIChhY3RpdmVQbGF5ZXIgPT09IHBsYXllcnNbMF0pIHtcbiAgICAgICAgICAgIGFjdGl2ZVBsYXllciA9IHBsYXllcnNbMV1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGFjdGl2ZVBsYXllciA9IHBsYXllcnNbMF1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHN3aXRjaEFjdGl2ZUJvYXJkID0gKCkgPT4ge1xuICAgICAgICBpZiAoYWN0aXZlQm9hcmQgPT09IGdhbWVib2FyZHNbMF0pIHtcbiAgICAgICAgICAgIGFjdGl2ZUJvYXJkID0gZ2FtZWJvYXJkc1sxXVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYWN0aXZlQm9hcmQgPSBnYW1lYm9hcmRzWzBdXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBnZXRQbGF5ZXIsXG4gICAgICAgIGdldFBsYXllckdhbWVib2FyZCxcbiAgICAgICAgZ2V0Q29tcHV0ZXIsXG4gICAgICAgIGdldENvbXB1dGVyR2FtZWJvYXJkLFxuICAgICAgICBnZXRBY3RpdmVQbGF5ZXIsXG4gICAgICAgIGdldEFjdGl2ZUdhbWVib2FyZCxcbiAgICAgICAgc3dpdGNoUGxheWVyVHVybixcbiAgICAgICAgc3dpdGNoQWN0aXZlQm9hcmRcbiAgICB9XG5cbn0pKCk7XG5cbmV4cG9ydCB7IEdhbWUgfSAiLCJjb25zdCBTaGlwID0gKHBvc2l0aW9uKSA9PiB7XG5cbiAgICBjb25zdCBnZXRQb3NpdGlvbiA9ICgpID0+IHBvc2l0aW9uXG5cbiAgICBjb25zdCBzZXRQb3NpdGlvbiA9IChjb29yZHMpID0+IHtcbiAgICAgICAgZ2V0UG9zaXRpb24oKS5wdXNoKGNvb3JkcylcbiAgICB9XG5cbiAgICBjb25zdCBzaGlwQ2hvaWNlcyA9IChvcmllbnRhdGlvbiwgbGVuZ3RoKSA9PiB7XG5cbiAgICAgICAgbGV0IHBvc3NpYmxlQ2hvaWNlcyA9IFtdXG5cbiAgICAgICAgaWYgKG9yaWVudGF0aW9uID09ICdYJykge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCAoMTEgLSBsZW5ndGgpOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgcG9zc2libGVDaG9pY2VzLnB1c2goaS50b1N0cmluZygpICsgai50b1N0cmluZygpKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChvcmllbnRhdGlvbiA9PSAnWScpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgKDExIC0gbGVuZ3RoKTsgaSsrKSB7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCAxMDsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgIHBvc3NpYmxlQ2hvaWNlcy5wdXNoKGkudG9TdHJpbmcoKSArIGoudG9TdHJpbmcoKSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcG9zc2libGVDaG9pY2VzXG5cbiAgICB9XG5cbiAgICBjb25zdCBjcmVhdGVDYXJyaWVyID0gKGNvb3JkaW5hdGUsIG9yaWVudGF0aW9uKSA9PiB7XG5cbiAgICAgICAgaWYgKGNvb3JkaW5hdGUgPT0gMTAwKSB7XG5cbiAgICAgICAgICAgIGxldCBwb3NzaWJsZUNob2ljZXMgPSBjYXJyaWVyQ2hvaWNlcyhvcmllbnRhdGlvbilcblxuICAgICAgICAgICAgY29vcmRpbmF0ZSA9IHBvc3NpYmxlQ2hvaWNlc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBwb3NzaWJsZUNob2ljZXMubGVuZ3RoKV1cblxuICAgICAgICB9XG5cbiAgICAgICAgY29vcmRpbmF0ZSA9IE51bWJlcihjb29yZGluYXRlKVxuXG4gICAgICAgIGlmIChjb29yZGluYXRlLnRvU3RyaW5nKCkubGVuZ3RoID09IDEpIHtcblxuICAgICAgICAgICAgc2V0UG9zaXRpb24oJzAnICsgU3RyaW5nKGNvb3JkaW5hdGUpKVxuXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8IDU7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmIChvcmllbnRhdGlvbiA9PSAnWCcpIHtcbiAgICAgICAgICAgICAgICAgICAgc2V0UG9zaXRpb24oJzAnICsgU3RyaW5nKGNvb3JkaW5hdGUgKyBpKSlcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKG9yaWVudGF0aW9uID09ICdZJykge1xuICAgICAgICAgICAgICAgICAgICBzZXRQb3NpdGlvbihTdHJpbmcoY29vcmRpbmF0ZSArIChpICogMTApKSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA1OyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAob3JpZW50YXRpb24gPT0gJ1gnKSB7XG4gICAgICAgICAgICAgICAgICAgIHNldFBvc2l0aW9uKFN0cmluZyhjb29yZGluYXRlICsgaSkpXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChvcmllbnRhdGlvbiA9PSAnWScpIHtcbiAgICAgICAgICAgICAgICAgICAgc2V0UG9zaXRpb24oU3RyaW5nKGNvb3JkaW5hdGUgKyAoaSAqIDEwKSkpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY3JlYXRlQmF0dGxlc2hpcChjb29yZGluYXRlLCBvcmllbnRhdGlvbikge1xuICAgICAgICBsZXQgcG9zc2libGVDaG9pY2VzID0gW11cblxuICAgICAgICBpZiAoY29vcmRpbmF0ZSA9PSAxMDApIHtcbiAgICAgICAgICAgIGlmIChvcmllbnRhdGlvbiA9PSAnWCcpIHtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCA3OyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc3NpYmxlQ2hvaWNlcy5wdXNoKGkudG9TdHJpbmcoKSArIGoudG9TdHJpbmcoKSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAob3JpZW50YXRpb24gPT0gJ1knKSB7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA3OyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCAxMDsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NzaWJsZUNob2ljZXMucHVzaChpLnRvU3RyaW5nKCkgKyBqLnRvU3RyaW5nKCkpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvb3JkaW5hdGUgPSBwb3NzaWJsZUNob2ljZXNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogcG9zc2libGVDaG9pY2VzLmxlbmd0aCldXG5cbiAgICAgICAgfVxuXG4gICAgICAgIGNvb3JkaW5hdGUgPSBOdW1iZXIoY29vcmRpbmF0ZSlcblxuICAgICAgICBpZiAoY29vcmRpbmF0ZS50b1N0cmluZygpLmxlbmd0aCA9PSAxKSB7XG5cbiAgICAgICAgICAgIHNldFBvc2l0aW9uKCcwJyArIFN0cmluZyhjb29yZGluYXRlKSlcblxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCA0OyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAob3JpZW50YXRpb24gPT0gJ1gnKSB7XG4gICAgICAgICAgICAgICAgICAgIHNldFBvc2l0aW9uKCcwJyArIFN0cmluZyhjb29yZGluYXRlICsgaSkpXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChvcmllbnRhdGlvbiA9PSAnWScpIHtcbiAgICAgICAgICAgICAgICAgICAgc2V0UG9zaXRpb24oU3RyaW5nKGNvb3JkaW5hdGUgKyAoaSAqIDEwKSkpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKG9yaWVudGF0aW9uID09ICdYJykge1xuICAgICAgICAgICAgICAgICAgICBzZXRQb3NpdGlvbihTdHJpbmcoY29vcmRpbmF0ZSArIGkpKVxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAob3JpZW50YXRpb24gPT0gJ1knKSB7XG4gICAgICAgICAgICAgICAgICAgIHNldFBvc2l0aW9uKFN0cmluZyhjb29yZGluYXRlICsgKGkgKiAxMCkpKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSAgICB9XG5cbiAgICBmdW5jdGlvbiBjcmVhdGVEZXN0cm95ZXIoY29vcmRpbmF0ZSwgb3JpZW50YXRpb24pIHtcblxuXG5cbiAgICAgICAgbGV0IHBvc3NpYmxlQ2hvaWNlcyA9IFtdXG5cbiAgICAgICAgaWYgKGNvb3JkaW5hdGUgPT0gMTAwKSB7XG4gICAgICAgICAgICBpZiAob3JpZW50YXRpb24gPT0gJ1gnKSB7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgNzsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NzaWJsZUNob2ljZXMucHVzaChpLnRvU3RyaW5nKCkgKyBqLnRvU3RyaW5nKCkpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKG9yaWVudGF0aW9uID09ICdZJykge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNzsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgMTA7IGorKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcG9zc2libGVDaG9pY2VzLnB1c2goaS50b1N0cmluZygpICsgai50b1N0cmluZygpKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb29yZGluYXRlID0gcG9zc2libGVDaG9pY2VzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHBvc3NpYmxlQ2hvaWNlcy5sZW5ndGgpXVxuXG4gICAgICAgIH1cblxuICAgICAgICBjb29yZGluYXRlID0gTnVtYmVyKGNvb3JkaW5hdGUpXG5cbiAgICAgICAgaWYgKGNvb3JkaW5hdGUudG9TdHJpbmcoKS5sZW5ndGggPT0gMSkge1xuXG4gICAgICAgICAgICBzZXRQb3NpdGlvbignMCcgKyBTdHJpbmcoY29vcmRpbmF0ZSkpXG5cbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgNDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKG9yaWVudGF0aW9uID09ICdYJykge1xuICAgICAgICAgICAgICAgICAgICBzZXRQb3NpdGlvbignMCcgKyBTdHJpbmcoY29vcmRpbmF0ZSArIGkpKVxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAob3JpZW50YXRpb24gPT0gJ1knKSB7XG4gICAgICAgICAgICAgICAgICAgIHNldFBvc2l0aW9uKFN0cmluZyhjb29yZGluYXRlICsgKGkgKiAxMCkpKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDQ7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmIChvcmllbnRhdGlvbiA9PSAnWCcpIHtcbiAgICAgICAgICAgICAgICAgICAgc2V0UG9zaXRpb24oU3RyaW5nKGNvb3JkaW5hdGUgKyBpKSlcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKG9yaWVudGF0aW9uID09ICdZJykge1xuICAgICAgICAgICAgICAgICAgICBzZXRQb3NpdGlvbihTdHJpbmcoY29vcmRpbmF0ZSArIChpICogMTApKSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gICAgfVxuXG4gICAgZnVuY3Rpb24gY3JlYXRlU3VibWFyaW5lKGNvb3JkaW5hdGUsIG9yaWVudGF0aW9uKSB7XG5cblxuICAgICAgICBsZXQgcG9zc2libGVDaG9pY2VzID0gW11cblxuICAgICAgICBpZiAoY29vcmRpbmF0ZSA9PSAxMDApIHtcbiAgICAgICAgICAgIGlmIChvcmllbnRhdGlvbiA9PSAnWCcpIHtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCA4OyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc3NpYmxlQ2hvaWNlcy5wdXNoKGkudG9TdHJpbmcoKSArIGoudG9TdHJpbmcoKSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAob3JpZW50YXRpb24gPT0gJ1knKSB7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA4OyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCAxMDsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NzaWJsZUNob2ljZXMucHVzaChpLnRvU3RyaW5nKCkgKyBqLnRvU3RyaW5nKCkpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvb3JkaW5hdGUgPSBwb3NzaWJsZUNob2ljZXNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogcG9zc2libGVDaG9pY2VzLmxlbmd0aCldXG5cbiAgICAgICAgfVxuXG4gICAgICAgIGNvb3JkaW5hdGUgPSBOdW1iZXIoY29vcmRpbmF0ZSlcblxuICAgICAgICBpZiAoY29vcmRpbmF0ZS50b1N0cmluZygpLmxlbmd0aCA9PSAxKSB7XG5cbiAgICAgICAgICAgIHNldFBvc2l0aW9uKCcwJyArIFN0cmluZyhjb29yZGluYXRlKSlcblxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCAzOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAob3JpZW50YXRpb24gPT0gJ1gnKSB7XG4gICAgICAgICAgICAgICAgICAgIHNldFBvc2l0aW9uKCcwJyArIFN0cmluZyhjb29yZGluYXRlICsgaSkpXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChvcmllbnRhdGlvbiA9PSAnWScpIHtcbiAgICAgICAgICAgICAgICAgICAgc2V0UG9zaXRpb24oU3RyaW5nKGNvb3JkaW5hdGUgKyAoaSAqIDEwKSkpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMzsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKG9yaWVudGF0aW9uID09ICdYJykge1xuICAgICAgICAgICAgICAgICAgICBzZXRQb3NpdGlvbihTdHJpbmcoY29vcmRpbmF0ZSArIGkpKVxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAob3JpZW50YXRpb24gPT0gJ1knKSB7XG4gICAgICAgICAgICAgICAgICAgIHNldFBvc2l0aW9uKFN0cmluZyhjb29yZGluYXRlICsgKGkgKiAxMCkpKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSAgICB9XG5cbiAgICBmdW5jdGlvbiBjcmVhdGVQYXRyb2woY29vcmRpbmF0ZSwgb3JpZW50YXRpb24pIHtcblxuXG4gICAgICAgIGxldCBwb3NzaWJsZUNob2ljZXMgPSBbXVxuXG4gICAgICAgIGlmIChjb29yZGluYXRlID09IDEwMCkge1xuICAgICAgICAgICAgaWYgKG9yaWVudGF0aW9uID09ICdYJykge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDk7IGorKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcG9zc2libGVDaG9pY2VzLnB1c2goaS50b1N0cmluZygpICsgai50b1N0cmluZygpKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmIChvcmllbnRhdGlvbiA9PSAnWScpIHtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDk7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDEwOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc3NpYmxlQ2hvaWNlcy5wdXNoKGkudG9TdHJpbmcoKSArIGoudG9TdHJpbmcoKSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29vcmRpbmF0ZSA9IHBvc3NpYmxlQ2hvaWNlc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBwb3NzaWJsZUNob2ljZXMubGVuZ3RoKV1cblxuICAgICAgICB9XG5cbiAgICAgICAgY29vcmRpbmF0ZSA9IE51bWJlcihjb29yZGluYXRlKVxuXG4gICAgICAgIGlmIChjb29yZGluYXRlLnRvU3RyaW5nKCkubGVuZ3RoID09IDEpIHtcblxuICAgICAgICAgICAgc2V0UG9zaXRpb24oJzAnICsgU3RyaW5nKGNvb3JkaW5hdGUpKVxuXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8IDI7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmIChvcmllbnRhdGlvbiA9PSAnWCcpIHtcbiAgICAgICAgICAgICAgICAgICAgc2V0UG9zaXRpb24oJzAnICsgU3RyaW5nKGNvb3JkaW5hdGUgKyBpKSlcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKG9yaWVudGF0aW9uID09ICdZJykge1xuICAgICAgICAgICAgICAgICAgICBzZXRQb3NpdGlvbihTdHJpbmcoY29vcmRpbmF0ZSArIChpICogMTApKSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAyOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAob3JpZW50YXRpb24gPT0gJ1gnKSB7XG4gICAgICAgICAgICAgICAgICAgIHNldFBvc2l0aW9uKFN0cmluZyhjb29yZGluYXRlICsgaSkpXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChvcmllbnRhdGlvbiA9PSAnWScpIHtcbiAgICAgICAgICAgICAgICAgICAgc2V0UG9zaXRpb24oU3RyaW5nKGNvb3JkaW5hdGUgKyAoaSAqIDEwKSkpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9ICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIGdldFBvc2l0aW9uLFxuICAgICAgICBzZXRQb3NpdGlvbixcbiAgICAgICAgc2hpcENob2ljZXMsXG4gICAgICAgIGNyZWF0ZUNhcnJpZXIsXG4gICAgICAgIGNyZWF0ZUJhdHRsZXNoaXAsXG4gICAgICAgIGNyZWF0ZURlc3Ryb3llcixcbiAgICAgICAgY3JlYXRlU3VibWFyaW5lLFxuICAgICAgICBjcmVhdGVQYXRyb2xcbiAgICB9XG59XG5cbmNvbnN0IEdhbWVib2FyZCA9ICgpID0+IHtcbiAgICBjb25zdCByb3cgPSAxMFxuICAgIGNvbnN0IGNvbHVtbiA9IDEwXG4gICAgY29uc3QgYm9hcmQgPSBbXVxuICAgIGNvbnN0IG1pc3NzZWRDZWxscyA9IFtdXG4gICAgY29uc3QgaGl0Q2VsbHMgPSBbXVxuICAgIGNvbnN0IGVtcHR5Q2VsbHMgPSBbXVxuICAgIGNvbnN0IG9jY3VwaWVkQ2VsbHMgPSBbXVxuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCByb3c7IGkrKykge1xuICAgICAgICBib2FyZFtpXSA9IFtdXG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgY29sdW1uOyBqKyspIHtcbiAgICAgICAgICAgIGJvYXJkW2ldLnB1c2goaS50b1N0cmluZygpICsgai50b1N0cmluZygpKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgZ2V0Qm9hcmQgPSAoKSA9PiBib2FyZFxuXG4gICAgY29uc3QgZ2V0TWlzc2VkQ2VsbHMgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBtaXNzc2VkQ2VsbHNcbiAgICB9XG5cbiAgICBjb25zdCBzZXRNaXNzZWRDZWxscyA9IG5ld0NlbGwgPT4ge1xuICAgICAgICBtaXNzc2VkQ2VsbHMucHVzaChuZXdDZWxsKVxuICAgIH1cblxuICAgIGNvbnN0IGdldEhpdENlbGxzID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gaGl0Q2VsbHNcbiAgICB9XG5cbiAgICBjb25zdCBzZXRIaXRDZWxscyA9IG5ld0NlbGwgPT4ge1xuICAgICAgICBoaXRDZWxscy5wdXNoKG5ld0NlbGwpXG4gICAgfVxuXG4gICAgY29uc3QgZ2V0RW1wdHlDZWxscyA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIGVtcHR5Q2VsbHNcbiAgICB9XG5cbiAgICBjb25zdCBzZXRFbXB0eUNlbGxzID0gbmV3Q2VsbCA9PiB7XG4gICAgICAgIGVtcHR5Q2VsbHMucHVzaChuZXdDZWxsKVxuICAgIH1cblxuICAgIGNvbnN0IGNsZWFyRW1wdHlDZWxscyA9ICgpID0+IHtcbiAgICAgICAgZ2V0RW1wdHlDZWxscygpLnNwbGljZSgwLCBnZXRFbXB0eUNlbGxzKCkubGVuZ3RoKVxuICAgIH1cblxuICAgIGNvbnN0IGdldE9jY3VwaWVkQ2VsbHMgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBvY2N1cGllZENlbGxzXG4gICAgfVxuXG4gICAgY29uc3Qgc2V0T2NjdXBpZWRDZWxscyA9IG5ld0NlbGwgPT4ge1xuICAgICAgICBvY2N1cGllZENlbGxzLnB1c2gobmV3Q2VsbClcbiAgICB9XG5cbiAgICBjb25zdCBjbGVhck9jY3VwaWVkQ2VsbHMgPSAoKSA9PiB7XG4gICAgICAgIGdldE9jY3VwaWVkQ2VsbHMoKS5zcGxpY2UoMCwgZ2V0T2NjdXBpZWRDZWxscygpLmxlbmd0aClcbiAgICB9XG5cbiAgICBjb25zdCBwbGFjZVNoaXBzID0gKHNoaXBzKSA9PiB7XG4gICAgICAgIGNsZWFyT2NjdXBpZWRDZWxscygpXG4gICAgICAgIHNoaXBzLmZvckVhY2goc2hpcCA9PiB7XG4gICAgICAgICAgICBzaGlwLmdldFBvc2l0aW9uKCkuZm9yRWFjaChwb3NpdGlvbkNlbGwgPT4ge1xuICAgICAgICAgICAgICAgIHNldE9jY3VwaWVkQ2VsbHMocG9zaXRpb25DZWxsKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgY29uc3QgcGxhY2VFbXB0eVNwYWNlID0gKCkgPT4ge1xuICAgICAgICBjbGVhckVtcHR5Q2VsbHMoKVxuICAgICAgICBnZXRCb2FyZCgpLmZvckVhY2gocm93Q2VsbCA9PiB7XG4gICAgICAgICAgICByb3dDZWxsLmZvckVhY2goY29sdW1uQ2VsbCA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKCEoZ2V0T2NjdXBpZWRDZWxscygpLmluY2x1ZGVzKGNvbHVtbkNlbGwpKSkge1xuICAgICAgICAgICAgICAgICAgICBzZXRFbXB0eUNlbGxzKGNvbHVtbkNlbGwpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBjb25zdCByZWNpZXZlQXR0YWNrID0gKGNvb3JkaW5hdGUpID0+IHtcbiAgICAgICAgaWYgKGdldE9jY3VwaWVkQ2VsbHMoKS5pbmNsdWRlcyhjb29yZGluYXRlKSkge1xuICAgICAgICAgICAgc2V0SGl0Q2VsbHMoY29vcmRpbmF0ZSlcblxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2V0TWlzc2VkQ2VsbHMoY29vcmRpbmF0ZSlcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IG9jY3VwaWVkSW5kZXggPSBnZXRPY2N1cGllZENlbGxzKCkuaW5kZXhPZihjb29yZGluYXRlKVxuICAgICAgICBpZiAob2NjdXBpZWRJbmRleCA+IC0xKSB7XG4gICAgICAgICAgICBnZXRPY2N1cGllZENlbGxzKCkuc3BsaWNlKG9jY3VwaWVkSW5kZXgsIDEpIFxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgZW1wdHlJbmRleCA9IGdldEVtcHR5Q2VsbHMoKS5pbmRleE9mKGNvb3JkaW5hdGUpXG4gICAgICAgIGlmIChlbXB0eUluZGV4ID4gLTEpIHtcbiAgICAgICAgICAgIGdldEVtcHR5Q2VsbHMoKS5zcGxpY2UoZW1wdHlJbmRleCwgMSlcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgY29uc3QgY2hlY2tHYW1lT3ZlciA9ICgpID0+e1xuICAgICAgICBpZiAoZ2V0T2NjdXBpZWRDZWxscygpLmxlbmd0aCA9PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBjb21wdXRlck9yaWVudGF0aW9uID0gKCkgPT4ge1xuXG4gICAgICAgIGxldCBvcmllbnRhdGlvbnMgPSBbJ1gnLCAnWSddXG5cbiAgICAgICAgcmV0dXJuIG9yaWVudGF0aW9uc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBvcmllbnRhdGlvbnMubGVuZ3RoKV1cblxuICAgIH1cblxuICAgIGNvbnN0IGNoZWNrT2NjdXBhdGlvbiA9ICh0ZXN0QXJyYXkpID0+IHtcblxuICAgICAgICBpZiAodGVzdEFycmF5Lmxlbmd0aCA9PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0ZXN0QXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChnZXRPY2N1cGllZENlbGxzKCkuaW5jbHVkZXModGVzdEFycmF5W2ldKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBnZXRNaXNzZWRDZWxscyxcbiAgICAgICAgc2V0TWlzc2VkQ2VsbHMsXG4gICAgICAgIGdldEhpdENlbGxzLFxuICAgICAgICBzZXRIaXRDZWxscyxcbiAgICAgICAgZ2V0RW1wdHlDZWxscyxcbiAgICAgICAgc2V0RW1wdHlDZWxscyxcbiAgICAgICAgZ2V0T2NjdXBpZWRDZWxscyxcbiAgICAgICAgc2V0T2NjdXBpZWRDZWxscyxcbiAgICAgICAgZ2V0Qm9hcmQsXG4gICAgICAgIHBsYWNlU2hpcHMsXG4gICAgICAgIHBsYWNlRW1wdHlTcGFjZSxcbiAgICAgICAgcmVjaWV2ZUF0dGFjayxcbiAgICAgICAgY2hlY2tHYW1lT3ZlcixcbiAgICAgICAgY29tcHV0ZXJPcmllbnRhdGlvbixcbiAgICAgICAgY2hlY2tPY2N1cGF0aW9uXG4gICAgfVxufVxuXG5jb25zdCBQbGF5ZXIgPSAobmFtZSkgPT4ge1xuICAgIGNvbnN0IGdldE5hbWUgPSAoKSA9PiBuYW1lXG5cbiAgICBjb25zdCByb3cgPSAxMFxuICAgIGNvbnN0IGNvbHVtbiA9IDEwXG4gICAgY29uc3QgcG9zc2libGVDaG9pY2VzID0gW11cblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcm93OyBpKyspIHtcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBjb2x1bW47IGorKykge1xuICAgICAgICAgICAgcG9zc2libGVDaG9pY2VzLnB1c2goaS50b1N0cmluZygpICsgai50b1N0cmluZygpKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgZ2V0UG9zc2libGVDaG9pY2VzID0gKCkgPT4gcG9zc2libGVDaG9pY2VzXG5cbiAgICBjb25zdCBjb21wdXRlckF0dGFjayA9ICgpID0+IHtcblxuICAgICAgICAgICAgbGV0IGF0dGFja0Nvb3JkaW5hdGUgPSBnZXRQb3NzaWJsZUNob2ljZXMoKVtNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBnZXRQb3NzaWJsZUNob2ljZXMoKS5sZW5ndGgpXVxuXG4gICAgICAgICAgICBjb25zdCBpbmRleCA9IGdldFBvc3NpYmxlQ2hvaWNlcygpLmluZGV4T2YoYXR0YWNrQ29vcmRpbmF0ZSlcbiAgICAgICAgICAgIGlmIChpbmRleCA+IC0xKSB7XG4gICAgICAgICAgICAgICAgcG9zc2libGVDaG9pY2VzLnNwbGljZShpbmRleCwgMSkgXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBhdHRhY2tDb29yZGluYXRlXG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgZ2V0TmFtZSxcbiAgICAgICAgY29tcHV0ZXJBdHRhY2tcbiAgICB9XG59XG5cbmV4cG9ydCB7IFNoaXAsIEdhbWVib2FyZCwgUGxheWVyIH0iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLmNvbnRhaW5lciB7XG4gICAgaGVpZ2h0OiAxMDB2aDtcblxuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xufVxuXG4ucGxheWVyLW9uZS1nYW1lYm9hcmQge1xuICAgIGhlaWdodDogNTAwcHg7XG4gICAgd2lkdGg6IDUwMHB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbn1cblxuLnBsYXllci1vbmUtZ2FtZWJvYXJkIGRpdiB7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbn1cblxuLnBsYXllci10d28tZ2FtZWJvYXJkIHtcbiAgICBoZWlnaHQ6IDUwMHB4O1xuICAgIHdpZHRoOiA1MDBweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcblxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG59XG5cbi5wbGF5ZXItdHdvLWdhbWVib2FyZCBkaXYge1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG59XG5cbi5vY2N1cGllZC1jZWxsIHtcbiAgICBiYWNrZ3JvdW5kOiBibGFjaztcbn1cblxuLmVtcHR5LWNlbGwge1xuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xufVxuXG4uaGl0LWNlbGwge1xuICAgIGJhY2tncm91bmQ6IHJlZDtcbn1cblxuLm1pc3NlZC1jZWxsIHtcbiAgICBiYWNrZ3JvdW5kOiBncmF5O1xufVxuXG4ub2NjdXBpZWQtY29tLWNlbGwge1xuICAgIGJhY2tncm91bmQ6IGdyZWVuO1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLGFBQWE7O0lBRWIsYUFBYTtJQUNiLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLGFBQWE7SUFDYixZQUFZO0lBQ1osdUJBQXVCOztJQUV2QixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixZQUFZO0lBQ1osdUJBQXVCOztJQUV2QixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmNvbnRhaW5lciB7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG59XFxuXFxuLnBsYXllci1vbmUtZ2FtZWJvYXJkIHtcXG4gICAgaGVpZ2h0OiA1MDBweDtcXG4gICAgd2lkdGg6IDUwMHB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG59XFxuXFxuLnBsYXllci1vbmUtZ2FtZWJvYXJkIGRpdiB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG4ucGxheWVyLXR3by1nYW1lYm9hcmQge1xcbiAgICBoZWlnaHQ6IDUwMHB4O1xcbiAgICB3aWR0aDogNTAwcHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbn1cXG5cXG4ucGxheWVyLXR3by1nYW1lYm9hcmQgZGl2IHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxufVxcblxcbi5vY2N1cGllZC1jZWxsIHtcXG4gICAgYmFja2dyb3VuZDogYmxhY2s7XFxufVxcblxcbi5lbXB0eS1jZWxsIHtcXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XFxufVxcblxcbi5oaXQtY2VsbCB7XFxuICAgIGJhY2tncm91bmQ6IHJlZDtcXG59XFxuXFxuLm1pc3NlZC1jZWxsIHtcXG4gICAgYmFja2dyb3VuZDogZ3JheTtcXG59XFxuXFxuLm9jY3VwaWVkLWNvbS1jZWxsIHtcXG4gICAgYmFja2dyb3VuZDogZ3JlZW47XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiXG5cbmltcG9ydCB7IEdhbWUgfSBmcm9tIFwiLi9nYW1lLmpzXCI7XG5pbXBvcnQgeyBTaGlwIH0gZnJvbSBcIi4vb2JqZWN0cy5qc1wiO1xuXG5sZXQgZ2FtZVN0YXJ0ID0gZmFsc2VcblxuR2FtZVxuXG5mdW5jdGlvbiBkaXNwbGF5SGVhZGVyKCkge1xuICAgIGNvbnN0IHBsYXllck9uZUhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wbGF5ZXItb25lLWhlYWRlcicpXG4gICAgY29uc3QgcGxheWVyVHdvSGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBsYXllci10d28taGVhZGVyJylcblxuICAgIHBsYXllck9uZUhlYWRlci50ZXh0Q29udGVudCA9IEdhbWUuZ2V0QWN0aXZlUGxheWVyKCkuZ2V0TmFtZSgpXG4gICAgR2FtZS5zd2l0Y2hQbGF5ZXJUdXJuKClcbiAgICBwbGF5ZXJUd29IZWFkZXIudGV4dENvbnRlbnQgPSBHYW1lLmdldEFjdGl2ZVBsYXllcigpLmdldE5hbWUoKVxuICAgIEdhbWUuc3dpdGNoUGxheWVyVHVybigpXG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlQbGF5ZXJPbmVCb2FyZCgpIHtcbiAgICBjb25zdCBwbGF5ZXJPbmVHYW1lYm9hcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGxheWVyLW9uZS1nYW1lYm9hcmQnKTtcbiAgICBwbGF5ZXJPbmVHYW1lYm9hcmQudGV4dENvbnRlbnQgPSBbXTtcblxuICAgIGxldCBhdHRhY2tDb29yZGluYXRlID0gR2FtZS5nZXRDb21wdXRlcigpLmNvbXB1dGVyQXR0YWNrKCk7XG5cbiAgICAoR2FtZS5nZXRQbGF5ZXJHYW1lYm9hcmQoKS5nZXRCb2FyZCgpKS5mb3JFYWNoKChyb3dDZWxsKSA9PiB7XG5cbiAgICAgICAgcm93Q2VsbC5mb3JFYWNoKChjb2x1bW5DZWxsKSA9PiB7XG5cbiAgICAgICAgICAgIGNvbnN0IGJvYXJkQ2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgICAgICBib2FyZENlbGwudGV4dENvbnRlbnQgPSBjb2x1bW5DZWxsXG4gICAgICAgICAgICBib2FyZENlbGwuc2V0QXR0cmlidXRlKCdpZCcsIGNvbHVtbkNlbGwpXG4gICAgICAgICAgICBib2FyZENlbGwuY2xhc3NMaXN0LmFkZCgncGxheWVyLW9uZS1jZWxscycpXG4gICAgICAgICAgICBib2FyZENlbGwuc3R5bGUud2lkdGggPSAnMTAlJ1xuICAgICAgICAgICAgYm9hcmRDZWxsLnN0eWxlLmhlaWdodCA9ICcxMCUnXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmIChHYW1lLmdldFBsYXllckdhbWVib2FyZCgpLmdldE9jY3VwaWVkQ2VsbHMoKS5pbmNsdWRlcyhib2FyZENlbGwudGV4dENvbnRlbnQpKSB7XG4gICAgICAgICAgICAgICAgYm9hcmRDZWxsLmNsYXNzTGlzdC5hZGQoJ29jY3VwaWVkLWNlbGwnKVxuICAgICAgICAgICAgfSBlbHNlIGlmIChHYW1lLmdldFBsYXllckdhbWVib2FyZCgpLmdldEVtcHR5Q2VsbHMoKS5pbmNsdWRlcyhib2FyZENlbGwudGV4dENvbnRlbnQpKSB7XG4gICAgICAgICAgICAgICAgYm9hcmRDZWxsLmNsYXNzTGlzdC5hZGQoJ2VtcHR5LWNlbGwnKVxuICAgICAgICAgICAgfSBlbHNlIGlmIChHYW1lLmdldFBsYXllckdhbWVib2FyZCgpLmdldEhpdENlbGxzKCkuaW5jbHVkZXMoYm9hcmRDZWxsLnRleHRDb250ZW50KSkge1xuICAgICAgICAgICAgICAgIGJvYXJkQ2VsbC5jbGFzc0xpc3QuYWRkKCdoaXQtY2VsbCcpXG4gICAgICAgICAgICB9IGVsc2UgaWYgKEdhbWUuZ2V0UGxheWVyR2FtZWJvYXJkKCkuZ2V0TWlzc2VkQ2VsbHMoKS5pbmNsdWRlcyhib2FyZENlbGwudGV4dENvbnRlbnQpKSB7XG4gICAgICAgICAgICAgICAgYm9hcmRDZWxsLmNsYXNzTGlzdC5hZGQoJ21pc3NlZC1jZWxsJylcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZnVuY3Rpb24gcGxheWVyQ2VsbENsaWNrKCkge1xuXG4gICAgICAgICAgICAgICAgaWYgKGJvYXJkQ2VsbC5nZXRBdHRyaWJ1dGUoJ2lkJykgPT0gYXR0YWNrQ29vcmRpbmF0ZSkge1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGlmIChib2FyZENlbGwuY2xhc3NMaXN0LmNvbnRhaW5zKCdvY2N1cGllZC1jZWxsJykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvYXJkQ2VsbC5jbGFzc0xpc3QucmVtb3ZlKCdvY2N1cGllZC1jZWxsJylcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvYXJkQ2VsbC5jbGFzc0xpc3QuYWRkKCdoaXQtY2VsbCcpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgaWYgKGJvYXJkQ2VsbC5jbGFzc0xpc3QuY29udGFpbnMoJ2VtcHR5LWNlbGwnKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9hcmRDZWxsLmNsYXNzTGlzdC5yZW1vdmUoJ2VtcHR5LWNlbGwnKVxuICAgICAgICAgICAgICAgICAgICAgICAgYm9hcmRDZWxsLmNsYXNzTGlzdC5hZGQoJ21pc3NlZC1jZWxsJylcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIEdhbWUuZ2V0UGxheWVyR2FtZWJvYXJkKCkucmVjaWV2ZUF0dGFjayhhdHRhY2tDb29yZGluYXRlKVxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5UGxheWVyVHdvQm9hcmQoKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGdhbWVTdGFydCA9PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgcGxheWVyQ2VsbENsaWNrKClcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcGxheWVyT25lR2FtZWJvYXJkLmFwcGVuZENoaWxkKGJvYXJkQ2VsbClcblxuICAgICAgICB9KVxuICAgIH0pXG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlQbGF5ZXJUd29Cb2FyZCgpIHtcbiAgICBjb25zdCBwbGF5ZXJUd29HYW1lYm9hcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGxheWVyLXR3by1nYW1lYm9hcmQnKTtcbiAgICBwbGF5ZXJUd29HYW1lYm9hcmQudGV4dENvbnRlbnQgPSAnJztcblxuICAgIChHYW1lLmdldENvbXB1dGVyR2FtZWJvYXJkKCkuZ2V0Qm9hcmQoKSkuZm9yRWFjaCgocm93Q2VsbCkgPT4ge1xuXG4gICAgICAgIHJvd0NlbGwuZm9yRWFjaCgoY29sdW1uQ2VsbCkgPT4ge1xuXG4gICAgICAgICAgICBjb25zdCBib2FyZENlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICAgICAgYm9hcmRDZWxsLnRleHRDb250ZW50ID0gY29sdW1uQ2VsbFxuICAgICAgICAgICAgYm9hcmRDZWxsLnNldEF0dHJpYnV0ZSgnaWQnLCBjb2x1bW5DZWxsKVxuICAgICAgICAgICAgYm9hcmRDZWxsLmNsYXNzTGlzdC5hZGQoJ3BsYXllci10d28tY2VsbHMnKVxuICAgICAgICAgICAgYm9hcmRDZWxsLnN0eWxlLndpZHRoID0gJzEwJSdcbiAgICAgICAgICAgIGJvYXJkQ2VsbC5zdHlsZS5oZWlnaHQgPSAnMTAlJ1xuXG4gICAgICAgICAgICBpZiAoR2FtZS5nZXRDb21wdXRlckdhbWVib2FyZCgpLmdldE9jY3VwaWVkQ2VsbHMoKS5pbmNsdWRlcyhib2FyZENlbGwudGV4dENvbnRlbnQpKSB7XG4gICAgICAgICAgICAgICAgYm9hcmRDZWxsLmNsYXNzTGlzdC5hZGQoJ29jY3VwaWVkLWNvbS1jZWxsJylcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoR2FtZS5nZXRDb21wdXRlckdhbWVib2FyZCgpLmdldEVtcHR5Q2VsbHMoKS5pbmNsdWRlcyhib2FyZENlbGwudGV4dENvbnRlbnQpKSB7XG4gICAgICAgICAgICAgICAgYm9hcmRDZWxsLmNsYXNzTGlzdC5hZGQoJ2VtcHR5LWNlbGwnKVxuICAgICAgICAgICAgfSBlbHNlIGlmIChHYW1lLmdldENvbXB1dGVyR2FtZWJvYXJkKCkuZ2V0SGl0Q2VsbHMoKS5pbmNsdWRlcyhib2FyZENlbGwudGV4dENvbnRlbnQpKSB7XG4gICAgICAgICAgICAgICAgYm9hcmRDZWxsLmNsYXNzTGlzdC5hZGQoJ2hpdC1jZWxsJylcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoR2FtZS5nZXRDb21wdXRlckdhbWVib2FyZCgpLmdldE1pc3NlZENlbGxzKCkuaW5jbHVkZXMoYm9hcmRDZWxsLnRleHRDb250ZW50KSkge1xuICAgICAgICAgICAgICAgIGJvYXJkQ2VsbC5jbGFzc0xpc3QuYWRkKCdtaXNzZWQtY2VsbCcpXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZ1bmN0aW9uIGRpc2FibGVBbGxCdXR0b25zKCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGJvYXJkQ2VsbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucGxheWVyLXR3by1jZWxscycpXG5cbiAgICAgICAgICAgICAgICBib2FyZENlbGxzLmZvckVhY2goKGNlbGwpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY2VsbC5yZXBsYWNlV2l0aChjZWxsLmNsb25lTm9kZSh0cnVlKSlcbiAgICAgICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZ1bmN0aW9uIGNvbXB1dGVyQ2VsbENsaWNrKCkge1xuXG4gICAgICAgICAgICAgICAgaWYgKGJvYXJkQ2VsbC5jbGFzc0xpc3QuY29udGFpbnMoJ2hpdC1jZWxsJykpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChib2FyZENlbGwuY2xhc3NMaXN0LmNvbnRhaW5zKCdtaXNzZWQtY2VsbCcpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGlmIChib2FyZENlbGwuY2xhc3NMaXN0LmNvbnRhaW5zKCdvY2N1cGllZC1jb20tY2VsbCcpKSB7XG4gICAgICAgICAgICAgICAgICAgIGJvYXJkQ2VsbC5jbGFzc0xpc3QucmVtb3ZlKCdvY2N1cGllZC1jb20tY2VsbCcpXG4gICAgICAgICAgICAgICAgICAgIGJvYXJkQ2VsbC5jbGFzc0xpc3QuYWRkKCdoaXQtY2VsbCcpXG4gICAgICAgICAgICAgICAgICAgIGRpc2FibGVBbGxCdXR0b25zKClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBpZiAoYm9hcmRDZWxsLmNsYXNzTGlzdC5jb250YWlucygnZW1wdHktY2VsbCcpKSB7XG4gICAgICAgICAgICAgICAgICAgIGJvYXJkQ2VsbC5jbGFzc0xpc3QucmVtb3ZlKCdlbXB0eS1jZWxsJylcbiAgICAgICAgICAgICAgICAgICAgYm9hcmRDZWxsLmNsYXNzTGlzdC5hZGQoJ21pc3NlZC1jZWxsJylcbiAgICAgICAgICAgICAgICAgICAgZGlzYWJsZUFsbEJ1dHRvbnMoKVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChnYW1lU3RhcnQgPT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICBHYW1lLmdldENvbXB1dGVyR2FtZWJvYXJkKCkucmVjaWV2ZUF0dGFjayhib2FyZENlbGwudGV4dENvbnRlbnQpXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXlQbGF5ZXJPbmVCb2FyZCgpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGJvYXJkQ2VsbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNvbXB1dGVyQ2VsbENsaWNrKVxuICAgICAgICAgICAgcGxheWVyVHdvR2FtZWJvYXJkLmFwcGVuZENoaWxkKGJvYXJkQ2VsbClcbiAgICAgICAgfSlcbiAgICB9KVxufVxuXG5mdW5jdGlvbiBkaXNwbGF5UGxhY2VDYXJyaWVyQm9hcmQoKSB7XG4gICAgY29uc3QgcGxheWVyT25lR2FtZWJvYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBsYXllci1vbmUtZ2FtZWJvYXJkJyk7XG4gICAgcGxheWVyT25lR2FtZWJvYXJkLnRleHRDb250ZW50ID0gW107XG5cbiAgICBsZXQgY2FycmllciA9IFNoaXAoW10pO1xuICAgIGxldCBwb3NzaWJsZUNob2ljZXMgPSBjYXJyaWVyLnNoaXBDaG9pY2VzKGdsb2JhbENvb3JkaW5hdGUsIDUpO1xuXG4gICAgKEdhbWUuZ2V0UGxheWVyR2FtZWJvYXJkKCkuZ2V0Qm9hcmQoKSkuZm9yRWFjaCgocm93Q2VsbCkgPT4ge1xuXG4gICAgICAgIHJvd0NlbGwuZm9yRWFjaCgoY29sdW1uQ2VsbCkgPT4ge1xuXG4gICAgICAgICAgICBjb25zdCBib2FyZENlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICAgICAgYm9hcmRDZWxsLnRleHRDb250ZW50ID0gY29sdW1uQ2VsbFxuICAgICAgICAgICAgYm9hcmRDZWxsLnNldEF0dHJpYnV0ZSgnaWQnLCBjb2x1bW5DZWxsKVxuICAgICAgICAgICAgYm9hcmRDZWxsLmNsYXNzTGlzdC5hZGQoJ3BsYXllci1vbmUtY2VsbHMtcGxhY2UnKVxuICAgICAgICAgICAgYm9hcmRDZWxsLnN0eWxlLndpZHRoID0gJzEwJSdcbiAgICAgICAgICAgIGJvYXJkQ2VsbC5zdHlsZS5oZWlnaHQgPSAnMTAlJ1xuXG4gICAgICAgICAgICBmdW5jdGlvbiBwbGF5ZXJDYXJyaWVyQ2VsbCgpIHtcblxuICAgICAgICAgICAgICAgIGJvYXJkQ2VsbC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBib2FyZENlbGwuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3llbGxvdydcbiAgICAgICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICAgICAgYm9hcmRDZWxsLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGJvYXJkQ2VsbC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnJ1xuICAgICAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZnVuY3Rpb24gcGxheWVyQ2FycmllckNsaWNrKCkge1xuICAgICAgICAgICAgICAgIGJvYXJkQ2VsbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY2Fycmllci5jcmVhdGVDYXJyaWVyKGJvYXJkQ2VsbC5nZXRBdHRyaWJ1dGUoJ2lkJyksIGdsb2JhbENvb3JkaW5hdGUpXG4gICAgICAgICAgICAgICAgICAgIHBsYXllclNoaXBzLnB1c2goY2FycmllcilcbiAgICAgICAgICAgICAgICAgICAgR2FtZS5nZXRQbGF5ZXJHYW1lYm9hcmQoKS5wbGFjZVNoaXBzKHBsYXllclNoaXBzKTtcbiAgICAgICAgICAgICAgICAgICAgR2FtZS5nZXRQbGF5ZXJHYW1lYm9hcmQoKS5wbGFjZUVtcHR5U3BhY2UoKTtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheVBsYXllck9uZUJvYXJkKClcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheVBsYWNlQmF0dGxlc2hpcEJvYXJkKClcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHBvc3NpYmxlQ2hvaWNlcy5pbmNsdWRlcyhib2FyZENlbGwuZ2V0QXR0cmlidXRlKCdpZCcpKSkge1xuICAgICAgICAgICAgICAgIHBsYXllckNhcnJpZXJDZWxsKClcbiAgICAgICAgICAgICAgICBwbGF5ZXJDYXJyaWVyQ2xpY2soKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcGxheWVyT25lR2FtZWJvYXJkLmFwcGVuZENoaWxkKGJvYXJkQ2VsbClcbiAgICAgICAgfSlcbiAgICB9KVxufVxuXG5mdW5jdGlvbiBkaXNwbGF5UGxhY2VCYXR0bGVzaGlwQm9hcmQoKXtcbiAgICBjb25zdCBwbGF5ZXJPbmVHYW1lYm9hcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGxheWVyLW9uZS1nYW1lYm9hcmQnKTtcbiAgICBwbGF5ZXJPbmVHYW1lYm9hcmQudGV4dENvbnRlbnQgPSBbXTtcblxuICAgIGxldCBiYXR0bGVzaGlwID0gU2hpcChbXSk7XG4gICAgbGV0IG9wZW5TcGFjZSA9IGJhdHRsZXNoaXAuc2hpcENob2ljZXMoZ2xvYmFsQ29vcmRpbmF0ZSwgNCk7XG4gICAgbGV0IG9jY3VwaWVkU3BhY2UgPSBHYW1lLmdldFBsYXllckdhbWVib2FyZCgpLmdldE9jY3VwaWVkQ2VsbHMoKTtcbiAgICBsZXQgcG9zc2libGVDaG9pY2VzID0gW107XG5cbiAgICBvcGVuU3BhY2UuZm9yRWFjaCh2YWx1ZSA9PiB7XG4gICAgICAgIGlmICghKG9jY3VwaWVkU3BhY2UuaW5jbHVkZXModmFsdWUpKSkge1xuICAgICAgICAgICAgcG9zc2libGVDaG9pY2VzLnB1c2godmFsdWUpXG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIChHYW1lLmdldFBsYXllckdhbWVib2FyZCgpLmdldEJvYXJkKCkpLmZvckVhY2goKHJvd0NlbGwpID0+IHtcblxuICAgICAgICByb3dDZWxsLmZvckVhY2goKGNvbHVtbkNlbGwpID0+IHtcblxuICAgICAgICAgICAgY29uc3QgYm9hcmRDZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgICAgIGJvYXJkQ2VsbC50ZXh0Q29udGVudCA9IGNvbHVtbkNlbGxcbiAgICAgICAgICAgIGJvYXJkQ2VsbC5zZXRBdHRyaWJ1dGUoJ2lkJywgY29sdW1uQ2VsbClcbiAgICAgICAgICAgIGJvYXJkQ2VsbC5jbGFzc0xpc3QuYWRkKCdwbGF5ZXItb25lLWNlbGxzLXBsYWNlJylcbiAgICAgICAgICAgIGJvYXJkQ2VsbC5zdHlsZS53aWR0aCA9ICcxMCUnXG4gICAgICAgICAgICBib2FyZENlbGwuc3R5bGUuaGVpZ2h0ID0gJzEwJSdcblxuICAgICAgICAgICAgZnVuY3Rpb24gcGxheWVyQmF0dGxlc2hpcENlbGwoKSB7XG5cbiAgICAgICAgICAgICAgICBib2FyZENlbGwuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgYm9hcmRDZWxsLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICd5ZWxsb3cnXG4gICAgICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgICAgIGJvYXJkQ2VsbC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBib2FyZENlbGwuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJydcbiAgICAgICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZ1bmN0aW9uIHBsYXllckJhdHRsZXNoaXBDbGljaygpIHtcbiAgICAgICAgICAgICAgICBib2FyZENlbGwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGJhdHRsZXNoaXAuY3JlYXRlQmF0dGxlc2hpcChib2FyZENlbGwuZ2V0QXR0cmlidXRlKCdpZCcpLCBnbG9iYWxDb29yZGluYXRlKVxuICAgICAgICAgICAgICAgICAgICBwbGF5ZXJTaGlwcy5wdXNoKGJhdHRsZXNoaXApXG4gICAgICAgICAgICAgICAgICAgIEdhbWUuZ2V0UGxheWVyR2FtZWJvYXJkKCkucGxhY2VTaGlwcyhwbGF5ZXJTaGlwcyk7XG4gICAgICAgICAgICAgICAgICAgIEdhbWUuZ2V0UGxheWVyR2FtZWJvYXJkKCkucGxhY2VFbXB0eVNwYWNlKCk7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXlQbGF5ZXJPbmVCb2FyZCgpXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXlQbGFjZURlc3Ryb3llckJvYXJkKClcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHBvc3NpYmxlQ2hvaWNlcy5pbmNsdWRlcyhib2FyZENlbGwuZ2V0QXR0cmlidXRlKCdpZCcpKSkge1xuICAgICAgICAgICAgICAgIHBsYXllckJhdHRsZXNoaXBDZWxsKClcbiAgICAgICAgICAgICAgICBwbGF5ZXJCYXR0bGVzaGlwQ2xpY2soKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcGxheWVyT25lR2FtZWJvYXJkLmFwcGVuZENoaWxkKGJvYXJkQ2VsbClcbiAgICAgICAgfSlcbiAgICB9KVxufVxuXG5mdW5jdGlvbiBkaXNwbGF5UGxhY2VEZXN0cm95ZXJCb2FyZCgpIHtcbiAgICBjb25zdCBwbGF5ZXJPbmVHYW1lYm9hcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGxheWVyLW9uZS1nYW1lYm9hcmQnKTtcbiAgICBwbGF5ZXJPbmVHYW1lYm9hcmQudGV4dENvbnRlbnQgPSBbXTtcblxuICAgIGxldCBkZXN0cm95ZXIgPSBTaGlwKFtdKTtcbiAgICBsZXQgb3BlblNwYWNlID0gZGVzdHJveWVyLnNoaXBDaG9pY2VzKGdsb2JhbENvb3JkaW5hdGUsIDQpO1xuICAgIGxldCBvY2N1cGllZFNwYWNlID0gR2FtZS5nZXRQbGF5ZXJHYW1lYm9hcmQoKS5nZXRPY2N1cGllZENlbGxzKCk7XG4gICAgbGV0IHBvc3NpYmxlQ2hvaWNlcyA9IFtdO1xuXG4gICAgb3BlblNwYWNlLmZvckVhY2godmFsdWUgPT4ge1xuICAgICAgICBpZiAoIShvY2N1cGllZFNwYWNlLmluY2x1ZGVzKHZhbHVlKSkpIHtcbiAgICAgICAgICAgIHBvc3NpYmxlQ2hvaWNlcy5wdXNoKHZhbHVlKVxuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICAoR2FtZS5nZXRQbGF5ZXJHYW1lYm9hcmQoKS5nZXRCb2FyZCgpKS5mb3JFYWNoKChyb3dDZWxsKSA9PiB7XG5cbiAgICAgICAgcm93Q2VsbC5mb3JFYWNoKChjb2x1bW5DZWxsKSA9PiB7XG5cbiAgICAgICAgICAgIGNvbnN0IGJvYXJkQ2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgICAgICBib2FyZENlbGwudGV4dENvbnRlbnQgPSBjb2x1bW5DZWxsXG4gICAgICAgICAgICBib2FyZENlbGwuc2V0QXR0cmlidXRlKCdpZCcsIGNvbHVtbkNlbGwpXG4gICAgICAgICAgICBib2FyZENlbGwuY2xhc3NMaXN0LmFkZCgncGxheWVyLW9uZS1jZWxscy1wbGFjZScpXG4gICAgICAgICAgICBib2FyZENlbGwuc3R5bGUud2lkdGggPSAnMTAlJ1xuICAgICAgICAgICAgYm9hcmRDZWxsLnN0eWxlLmhlaWdodCA9ICcxMCUnXG5cbiAgICAgICAgICAgIGZ1bmN0aW9uIHBsYXllckRlc3Ryb3llckNlbGwoKSB7XG5cbiAgICAgICAgICAgICAgICBib2FyZENlbGwuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgYm9hcmRDZWxsLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICd5ZWxsb3cnXG4gICAgICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgICAgIGJvYXJkQ2VsbC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBib2FyZENlbGwuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJydcbiAgICAgICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZ1bmN0aW9uIHBsYXllckRlc3Ryb3llckNsaWNrKCkge1xuICAgICAgICAgICAgICAgIGJvYXJkQ2VsbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgZGVzdHJveWVyLmNyZWF0ZURlc3Ryb3llcihib2FyZENlbGwuZ2V0QXR0cmlidXRlKCdpZCcpLCBnbG9iYWxDb29yZGluYXRlKVxuICAgICAgICAgICAgICAgICAgICBwbGF5ZXJTaGlwcy5wdXNoKGRlc3Ryb3llcilcbiAgICAgICAgICAgICAgICAgICAgR2FtZS5nZXRQbGF5ZXJHYW1lYm9hcmQoKS5wbGFjZVNoaXBzKHBsYXllclNoaXBzKTtcbiAgICAgICAgICAgICAgICAgICAgR2FtZS5nZXRQbGF5ZXJHYW1lYm9hcmQoKS5wbGFjZUVtcHR5U3BhY2UoKTtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheVBsYXllck9uZUJvYXJkKClcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheVBsYWNlU3VibWFyaW5lQm9hcmQoKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAocG9zc2libGVDaG9pY2VzLmluY2x1ZGVzKGJvYXJkQ2VsbC5nZXRBdHRyaWJ1dGUoJ2lkJykpKSB7XG4gICAgICAgICAgICAgICAgcGxheWVyRGVzdHJveWVyQ2VsbCgpXG4gICAgICAgICAgICAgICAgcGxheWVyRGVzdHJveWVyQ2xpY2soKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcGxheWVyT25lR2FtZWJvYXJkLmFwcGVuZENoaWxkKGJvYXJkQ2VsbClcbiAgICAgICAgfSlcbiAgICB9KVxufVxuXG5mdW5jdGlvbiBkaXNwbGF5UGxhY2VTdWJtYXJpbmVCb2FyZCgpIHtcbiAgICBjb25zdCBwbGF5ZXJPbmVHYW1lYm9hcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGxheWVyLW9uZS1nYW1lYm9hcmQnKTtcbiAgICBwbGF5ZXJPbmVHYW1lYm9hcmQudGV4dENvbnRlbnQgPSBbXTtcblxuICAgIGxldCBzdWJtYXJpbmUgPSBTaGlwKFtdKTtcbiAgICBsZXQgb3BlblNwYWNlID0gc3VibWFyaW5lLnNoaXBDaG9pY2VzKGdsb2JhbENvb3JkaW5hdGUsIDMpO1xuICAgIGxldCBvY2N1cGllZFNwYWNlID0gR2FtZS5nZXRQbGF5ZXJHYW1lYm9hcmQoKS5nZXRPY2N1cGllZENlbGxzKCk7XG4gICAgbGV0IHBvc3NpYmxlQ2hvaWNlcyA9IFtdO1xuXG4gICAgb3BlblNwYWNlLmZvckVhY2godmFsdWUgPT4ge1xuICAgICAgICBpZiAoIShvY2N1cGllZFNwYWNlLmluY2x1ZGVzKHZhbHVlKSkpIHtcbiAgICAgICAgICAgIHBvc3NpYmxlQ2hvaWNlcy5wdXNoKHZhbHVlKVxuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICAoR2FtZS5nZXRQbGF5ZXJHYW1lYm9hcmQoKS5nZXRCb2FyZCgpKS5mb3JFYWNoKChyb3dDZWxsKSA9PiB7XG5cbiAgICAgICAgcm93Q2VsbC5mb3JFYWNoKChjb2x1bW5DZWxsKSA9PiB7XG5cbiAgICAgICAgICAgIGNvbnN0IGJvYXJkQ2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgICAgICBib2FyZENlbGwudGV4dENvbnRlbnQgPSBjb2x1bW5DZWxsXG4gICAgICAgICAgICBib2FyZENlbGwuc2V0QXR0cmlidXRlKCdpZCcsIGNvbHVtbkNlbGwpXG4gICAgICAgICAgICBib2FyZENlbGwuY2xhc3NMaXN0LmFkZCgncGxheWVyLW9uZS1jZWxscy1wbGFjZScpXG4gICAgICAgICAgICBib2FyZENlbGwuc3R5bGUud2lkdGggPSAnMTAlJ1xuICAgICAgICAgICAgYm9hcmRDZWxsLnN0eWxlLmhlaWdodCA9ICcxMCUnXG5cbiAgICAgICAgICAgIGZ1bmN0aW9uIHBsYXllclN1Ym1hcmluZUNlbGwoKSB7XG5cbiAgICAgICAgICAgICAgICBib2FyZENlbGwuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgYm9hcmRDZWxsLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICd5ZWxsb3cnXG4gICAgICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgICAgIGJvYXJkQ2VsbC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBib2FyZENlbGwuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJydcbiAgICAgICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZ1bmN0aW9uIHBsYXllclN1Ym1hcmluZUNsaWNrKCkge1xuICAgICAgICAgICAgICAgIGJvYXJkQ2VsbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgc3VibWFyaW5lLmNyZWF0ZVN1Ym1hcmluZShib2FyZENlbGwuZ2V0QXR0cmlidXRlKCdpZCcpLCBnbG9iYWxDb29yZGluYXRlKVxuICAgICAgICAgICAgICAgICAgICBwbGF5ZXJTaGlwcy5wdXNoKHN1Ym1hcmluZSlcbiAgICAgICAgICAgICAgICAgICAgR2FtZS5nZXRQbGF5ZXJHYW1lYm9hcmQoKS5wbGFjZVNoaXBzKHBsYXllclNoaXBzKTtcbiAgICAgICAgICAgICAgICAgICAgR2FtZS5nZXRQbGF5ZXJHYW1lYm9hcmQoKS5wbGFjZUVtcHR5U3BhY2UoKTtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheVBsYXllck9uZUJvYXJkKClcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheVBsYWNlUGF0cm9sQm9hcmQoKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAocG9zc2libGVDaG9pY2VzLmluY2x1ZGVzKGJvYXJkQ2VsbC5nZXRBdHRyaWJ1dGUoJ2lkJykpKSB7XG4gICAgICAgICAgICAgICAgcGxheWVyU3VibWFyaW5lQ2VsbCgpXG4gICAgICAgICAgICAgICAgcGxheWVyU3VibWFyaW5lQ2xpY2soKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcGxheWVyT25lR2FtZWJvYXJkLmFwcGVuZENoaWxkKGJvYXJkQ2VsbClcbiAgICAgICAgfSlcbiAgICB9KVxufVxuXG5mdW5jdGlvbiBkaXNwbGF5UGxhY2VQYXRyb2xCb2FyZCgpIHtcbiAgICBjb25zdCBwbGF5ZXJPbmVHYW1lYm9hcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGxheWVyLW9uZS1nYW1lYm9hcmQnKTtcbiAgICBwbGF5ZXJPbmVHYW1lYm9hcmQudGV4dENvbnRlbnQgPSBbXTtcblxuICAgIGxldCBwYXRyb2wgPSBTaGlwKFtdKTtcbiAgICBsZXQgb3BlblNwYWNlID0gcGF0cm9sLnNoaXBDaG9pY2VzKGdsb2JhbENvb3JkaW5hdGUsIDIpO1xuICAgIGxldCBvY2N1cGllZFNwYWNlID0gR2FtZS5nZXRQbGF5ZXJHYW1lYm9hcmQoKS5nZXRPY2N1cGllZENlbGxzKCk7XG4gICAgbGV0IHBvc3NpYmxlQ2hvaWNlcyA9IFtdO1xuXG4gICAgb3BlblNwYWNlLmZvckVhY2godmFsdWUgPT4ge1xuICAgICAgICBpZiAoIShvY2N1cGllZFNwYWNlLmluY2x1ZGVzKHZhbHVlKSkpIHtcbiAgICAgICAgICAgIHBvc3NpYmxlQ2hvaWNlcy5wdXNoKHZhbHVlKVxuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICAoR2FtZS5nZXRQbGF5ZXJHYW1lYm9hcmQoKS5nZXRCb2FyZCgpKS5mb3JFYWNoKChyb3dDZWxsKSA9PiB7XG5cbiAgICAgICAgcm93Q2VsbC5mb3JFYWNoKChjb2x1bW5DZWxsKSA9PiB7XG5cbiAgICAgICAgICAgIGNvbnN0IGJvYXJkQ2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgICAgICBib2FyZENlbGwudGV4dENvbnRlbnQgPSBjb2x1bW5DZWxsXG4gICAgICAgICAgICBib2FyZENlbGwuc2V0QXR0cmlidXRlKCdpZCcsIGNvbHVtbkNlbGwpXG4gICAgICAgICAgICBib2FyZENlbGwuY2xhc3NMaXN0LmFkZCgncGxheWVyLW9uZS1jZWxscy1wbGFjZScpXG4gICAgICAgICAgICBib2FyZENlbGwuc3R5bGUud2lkdGggPSAnMTAlJ1xuICAgICAgICAgICAgYm9hcmRDZWxsLnN0eWxlLmhlaWdodCA9ICcxMCUnXG5cbiAgICAgICAgICAgIGZ1bmN0aW9uIHBsYXllclBhdHJvbENlbGwoKSB7XG5cbiAgICAgICAgICAgICAgICBib2FyZENlbGwuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgYm9hcmRDZWxsLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICd5ZWxsb3cnXG4gICAgICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgICAgIGJvYXJkQ2VsbC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBib2FyZENlbGwuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJydcbiAgICAgICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZ1bmN0aW9uIHBsYXllclBhdHJvbENsaWNrKCkge1xuICAgICAgICAgICAgICAgIGJvYXJkQ2VsbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcGF0cm9sLmNyZWF0ZVBhdHJvbChib2FyZENlbGwuZ2V0QXR0cmlidXRlKCdpZCcpLCBnbG9iYWxDb29yZGluYXRlKVxuICAgICAgICAgICAgICAgICAgICBwbGF5ZXJTaGlwcy5wdXNoKHBhdHJvbClcbiAgICAgICAgICAgICAgICAgICAgR2FtZS5nZXRQbGF5ZXJHYW1lYm9hcmQoKS5wbGFjZVNoaXBzKHBsYXllclNoaXBzKTtcbiAgICAgICAgICAgICAgICAgICAgR2FtZS5nZXRQbGF5ZXJHYW1lYm9hcmQoKS5wbGFjZUVtcHR5U3BhY2UoKTtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheVBsYXllck9uZUJvYXJkKClcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHBvc3NpYmxlQ2hvaWNlcy5pbmNsdWRlcyhib2FyZENlbGwuZ2V0QXR0cmlidXRlKCdpZCcpKSkge1xuICAgICAgICAgICAgICAgIHBsYXllclBhdHJvbENlbGwoKVxuICAgICAgICAgICAgICAgIHBsYXllclBhdHJvbENsaWNrKClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHBsYXllck9uZUdhbWVib2FyZC5hcHBlbmRDaGlsZChib2FyZENlbGwpXG4gICAgICAgIH0pXG4gICAgfSlcbn1cblxubGV0IGdsb2JhbENvb3JkaW5hdGUgPSBcIlhcIlxuXG5mdW5jdGlvbiBzZXRSb3RhdGVCdXR0b24oKSB7XG4gICAgXG4gICAgY29uc3Qgcm90YXRlQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JvdGF0ZScpXG5cbiAgICByb3RhdGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGlmIChnbG9iYWxDb29yZGluYXRlID09ICdYJykge1xuICAgICAgICAgICAgZ2xvYmFsQ29vcmRpbmF0ZSA9ICdZJ1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZ2xvYmFsQ29vcmRpbmF0ZSA9ICdYJ1xuICAgICAgICB9XG4gICAgfSlcbn1cblxuXG5sZXQgcGxheWVyU2hpcHMgPSBbXVxuXG5mdW5jdGlvbiBzZXRQbGF5ZXJTaGlwcygpIHtcbiAgICBsZXQgY2FycmllciA9IFNoaXAoW10pXG4gICAgbGV0IGJhdHRsZXNoaXAgPSBTaGlwKFtdKVxuICAgIGxldCBkZXN0cm95ZXIgPSBTaGlwKFtdKVxuICAgIGxldCBzdWJtYXJpbmUgPSBTaGlwKFtdKVxuICAgIGxldCBwYXRyb2wgPSBTaGlwKFtdKVxuXG4gICAgY2Fycmllci5jcmVhdGVDYXJyaWVyKCcwMScsICdZJylcbiAgICBiYXR0bGVzaGlwLmNyZWF0ZUJhdHRsZXNoaXAoJzEzJywgJ1gnKVxuICAgIGRlc3Ryb3llci5jcmVhdGVEZXN0cm95ZXIoJzcxJywgJ1gnKVxuICAgIHN1Ym1hcmluZS5jcmVhdGVTdWJtYXJpbmUoJzc2JywgJ1knKVxuICAgIHBhdHJvbC5jcmVhdGVQYXRyb2woJzUzJywgJ1gnKVxuXG4gICAgcGxheWVyU2hpcHMucHVzaChjYXJyaWVyKVxuICAgIHBsYXllclNoaXBzLnB1c2goYmF0dGxlc2hpcClcbiAgICBwbGF5ZXJTaGlwcy5wdXNoKGRlc3Ryb3llcilcbiAgICBwbGF5ZXJTaGlwcy5wdXNoKHN1Ym1hcmluZSlcbiAgICBwbGF5ZXJTaGlwcy5wdXNoKHBhdHJvbClcblxuICAgIC8vR2FtZS5nZXRQbGF5ZXJHYW1lYm9hcmQoKS5wbGFjZVNoaXBzKHBsYXllclNoaXBzKTtcbiAgICAvL0dhbWUuZ2V0UGxheWVyR2FtZWJvYXJkKCkucGxhY2VFbXB0eVNwYWNlKCk7XG59XG5cbmxldCBjb21wdXRlclNoaXBzID0gW11cblxuZnVuY3Rpb24gc2V0Q29tcHV0ZXJTaGlwcygpIHtcblxuICAgIEdhbWUuZ2V0Q29tcHV0ZXJHYW1lYm9hcmQoKS5wbGFjZUVtcHR5U3BhY2UoKTtcblxuICAgIGxldCBjYXJyaWVyID0gU2hpcChbXSlcbiAgICBjYXJyaWVyLmNyZWF0ZUNhcnJpZXIoU3RyaW5nKDEwMCksIEdhbWUuZ2V0Q29tcHV0ZXJHYW1lYm9hcmQoKS5jb21wdXRlck9yaWVudGF0aW9uKCkpXG4gICAgY29tcHV0ZXJTaGlwcy5wdXNoKGNhcnJpZXIpXG5cbiAgICBHYW1lLmdldENvbXB1dGVyR2FtZWJvYXJkKCkucGxhY2VTaGlwcyhjb21wdXRlclNoaXBzKTtcbiAgICBHYW1lLmdldENvbXB1dGVyR2FtZWJvYXJkKCkucGxhY2VFbXB0eVNwYWNlKCk7XG5cblxuICAgIGxldCBiYXR0bGVzaGlwID0gU2hpcChbXSlcblxuICAgIHdoaWxlIChHYW1lLmdldENvbXB1dGVyR2FtZWJvYXJkKCkuY2hlY2tPY2N1cGF0aW9uKGJhdHRsZXNoaXAuZ2V0UG9zaXRpb24oKSkpIHtcblxuICAgICAgICBiYXR0bGVzaGlwID0gU2hpcChbXSlcbiAgICAgICAgYmF0dGxlc2hpcC5jcmVhdGVCYXR0bGVzaGlwKFN0cmluZygxMDApLCBHYW1lLmdldENvbXB1dGVyR2FtZWJvYXJkKCkuY29tcHV0ZXJPcmllbnRhdGlvbigpKVxuXG4gICAgfVxuXG4gICAgY29tcHV0ZXJTaGlwcy5wdXNoKGJhdHRsZXNoaXApXG4gICAgR2FtZS5nZXRDb21wdXRlckdhbWVib2FyZCgpLnBsYWNlU2hpcHMoY29tcHV0ZXJTaGlwcyk7XG4gICAgR2FtZS5nZXRDb21wdXRlckdhbWVib2FyZCgpLnBsYWNlRW1wdHlTcGFjZSgpO1xuXG5cbiAgICBsZXQgZGVzdHJveWVyID0gU2hpcChbXSlcblxuICAgIHdoaWxlIChHYW1lLmdldENvbXB1dGVyR2FtZWJvYXJkKCkuY2hlY2tPY2N1cGF0aW9uKGRlc3Ryb3llci5nZXRQb3NpdGlvbigpKSkge1xuXG4gICAgICAgIGRlc3Ryb3llciA9IFNoaXAoW10pXG4gICAgICAgIGRlc3Ryb3llci5jcmVhdGVEZXN0cm95ZXIoU3RyaW5nKDEwMCksIEdhbWUuZ2V0Q29tcHV0ZXJHYW1lYm9hcmQoKS5jb21wdXRlck9yaWVudGF0aW9uKCkpXG5cbiAgICB9XG5cbiAgICBjb21wdXRlclNoaXBzLnB1c2goZGVzdHJveWVyKVxuICAgIEdhbWUuZ2V0Q29tcHV0ZXJHYW1lYm9hcmQoKS5wbGFjZVNoaXBzKGNvbXB1dGVyU2hpcHMpO1xuICAgIEdhbWUuZ2V0Q29tcHV0ZXJHYW1lYm9hcmQoKS5wbGFjZUVtcHR5U3BhY2UoKTtcblxuICAgIGxldCBzdWJtYXJpbmUgPSBTaGlwKFtdKVxuXG4gICAgd2hpbGUgKEdhbWUuZ2V0Q29tcHV0ZXJHYW1lYm9hcmQoKS5jaGVja09jY3VwYXRpb24oc3VibWFyaW5lLmdldFBvc2l0aW9uKCkpKSB7XG5cbiAgICAgICAgc3VibWFyaW5lID0gU2hpcChbXSlcbiAgICAgICAgc3VibWFyaW5lLmNyZWF0ZVN1Ym1hcmluZShTdHJpbmcoMTAwKSwgR2FtZS5nZXRDb21wdXRlckdhbWVib2FyZCgpLmNvbXB1dGVyT3JpZW50YXRpb24oKSlcblxuICAgIH1cblxuICAgIGNvbXB1dGVyU2hpcHMucHVzaChzdWJtYXJpbmUpXG4gICAgR2FtZS5nZXRDb21wdXRlckdhbWVib2FyZCgpLnBsYWNlU2hpcHMoY29tcHV0ZXJTaGlwcyk7XG4gICAgR2FtZS5nZXRDb21wdXRlckdhbWVib2FyZCgpLnBsYWNlRW1wdHlTcGFjZSgpO1xuXG4gICAgbGV0IHBhdHJvbCA9IFNoaXAoW10pXG5cbiAgICB3aGlsZSAoR2FtZS5nZXRDb21wdXRlckdhbWVib2FyZCgpLmNoZWNrT2NjdXBhdGlvbihwYXRyb2wuZ2V0UG9zaXRpb24oKSkpIHtcblxuICAgICAgICBwYXRyb2wgPSBTaGlwKFtdKVxuICAgICAgICBwYXRyb2wuY3JlYXRlUGF0cm9sKFN0cmluZygxMDApLCBHYW1lLmdldENvbXB1dGVyR2FtZWJvYXJkKCkuY29tcHV0ZXJPcmllbnRhdGlvbigpKVxuXG4gICAgfVxuXG4gICAgY29tcHV0ZXJTaGlwcy5wdXNoKHBhdHJvbClcbiAgICBHYW1lLmdldENvbXB1dGVyR2FtZWJvYXJkKCkucGxhY2VTaGlwcyhjb21wdXRlclNoaXBzKTtcbiAgICBHYW1lLmdldENvbXB1dGVyR2FtZWJvYXJkKCkucGxhY2VFbXB0eVNwYWNlKCk7XG5cbn1cblxuZnVuY3Rpb24gZ2FtZUNvbnRyb2xsZXIoKSB7XG4gICAgc2V0Um90YXRlQnV0dG9uKClcbiAgICBkaXNwbGF5UGxhY2VDYXJyaWVyQm9hcmQoKVxuXG59XG5cbmdhbWVDb250cm9sbGVyKClcbiJdLCJuYW1lcyI6WyJTaGlwIiwiR2FtZWJvYXJkIiwiUGxheWVyIiwiR2FtZSIsInBsYXllcnMiLCJnYW1lYm9hcmRzIiwicGxheWVyIiwicGxheWVyR2FtZWJvYXJkIiwiY29tcHV0ZXIiLCJjb21wdXRlckdhbWVib2FyZCIsInB1c2giLCJhY3RpdmVQbGF5ZXIiLCJhY3RpdmVCb2FyZCIsImdldEFjdGl2ZVBsYXllciIsImdldEFjdGl2ZUdhbWVib2FyZCIsImdldFBsYXllciIsImdldENvbXB1dGVyIiwiZ2V0UGxheWVyR2FtZWJvYXJkIiwiZ2V0Q29tcHV0ZXJHYW1lYm9hcmQiLCJzd2l0Y2hQbGF5ZXJUdXJuIiwic3dpdGNoQWN0aXZlQm9hcmQiLCJwb3NpdGlvbiIsImdldFBvc2l0aW9uIiwic2V0UG9zaXRpb24iLCJjb29yZHMiLCJzaGlwQ2hvaWNlcyIsIm9yaWVudGF0aW9uIiwibGVuZ3RoIiwicG9zc2libGVDaG9pY2VzIiwiaSIsImoiLCJ0b1N0cmluZyIsImNyZWF0ZUNhcnJpZXIiLCJjb29yZGluYXRlIiwiY2FycmllckNob2ljZXMiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJOdW1iZXIiLCJTdHJpbmciLCJjcmVhdGVCYXR0bGVzaGlwIiwiY3JlYXRlRGVzdHJveWVyIiwiY3JlYXRlU3VibWFyaW5lIiwiY3JlYXRlUGF0cm9sIiwicm93IiwiY29sdW1uIiwiYm9hcmQiLCJtaXNzc2VkQ2VsbHMiLCJoaXRDZWxscyIsImVtcHR5Q2VsbHMiLCJvY2N1cGllZENlbGxzIiwiZ2V0Qm9hcmQiLCJnZXRNaXNzZWRDZWxscyIsInNldE1pc3NlZENlbGxzIiwibmV3Q2VsbCIsImdldEhpdENlbGxzIiwic2V0SGl0Q2VsbHMiLCJnZXRFbXB0eUNlbGxzIiwic2V0RW1wdHlDZWxscyIsImNsZWFyRW1wdHlDZWxscyIsInNwbGljZSIsImdldE9jY3VwaWVkQ2VsbHMiLCJzZXRPY2N1cGllZENlbGxzIiwiY2xlYXJPY2N1cGllZENlbGxzIiwicGxhY2VTaGlwcyIsInNoaXBzIiwiZm9yRWFjaCIsInNoaXAiLCJwb3NpdGlvbkNlbGwiLCJwbGFjZUVtcHR5U3BhY2UiLCJyb3dDZWxsIiwiY29sdW1uQ2VsbCIsImluY2x1ZGVzIiwicmVjaWV2ZUF0dGFjayIsIm9jY3VwaWVkSW5kZXgiLCJpbmRleE9mIiwiZW1wdHlJbmRleCIsImNoZWNrR2FtZU92ZXIiLCJjb21wdXRlck9yaWVudGF0aW9uIiwib3JpZW50YXRpb25zIiwiY2hlY2tPY2N1cGF0aW9uIiwidGVzdEFycmF5IiwibmFtZSIsImdldE5hbWUiLCJnZXRQb3NzaWJsZUNob2ljZXMiLCJjb21wdXRlckF0dGFjayIsImF0dGFja0Nvb3JkaW5hdGUiLCJpbmRleCIsImdhbWVTdGFydCIsImRpc3BsYXlIZWFkZXIiLCJwbGF5ZXJPbmVIZWFkZXIiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJwbGF5ZXJUd29IZWFkZXIiLCJ0ZXh0Q29udGVudCIsImRpc3BsYXlQbGF5ZXJPbmVCb2FyZCIsInBsYXllck9uZUdhbWVib2FyZCIsImJvYXJkQ2VsbCIsImNyZWF0ZUVsZW1lbnQiLCJzZXRBdHRyaWJ1dGUiLCJjbGFzc0xpc3QiLCJhZGQiLCJzdHlsZSIsIndpZHRoIiwiaGVpZ2h0IiwicGxheWVyQ2VsbENsaWNrIiwiZ2V0QXR0cmlidXRlIiwiY29udGFpbnMiLCJyZW1vdmUiLCJkaXNwbGF5UGxheWVyVHdvQm9hcmQiLCJhcHBlbmRDaGlsZCIsInBsYXllclR3b0dhbWVib2FyZCIsImRpc2FibGVBbGxCdXR0b25zIiwiYm9hcmRDZWxscyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJjZWxsIiwicmVwbGFjZVdpdGgiLCJjbG9uZU5vZGUiLCJjb21wdXRlckNlbGxDbGljayIsImFkZEV2ZW50TGlzdGVuZXIiLCJkaXNwbGF5UGxhY2VDYXJyaWVyQm9hcmQiLCJjYXJyaWVyIiwiZ2xvYmFsQ29vcmRpbmF0ZSIsInBsYXllckNhcnJpZXJDZWxsIiwiYmFja2dyb3VuZENvbG9yIiwicGxheWVyQ2FycmllckNsaWNrIiwicGxheWVyU2hpcHMiLCJkaXNwbGF5UGxhY2VCYXR0bGVzaGlwQm9hcmQiLCJiYXR0bGVzaGlwIiwib3BlblNwYWNlIiwib2NjdXBpZWRTcGFjZSIsInZhbHVlIiwicGxheWVyQmF0dGxlc2hpcENlbGwiLCJwbGF5ZXJCYXR0bGVzaGlwQ2xpY2siLCJkaXNwbGF5UGxhY2VEZXN0cm95ZXJCb2FyZCIsImRlc3Ryb3llciIsInBsYXllckRlc3Ryb3llckNlbGwiLCJwbGF5ZXJEZXN0cm95ZXJDbGljayIsImRpc3BsYXlQbGFjZVN1Ym1hcmluZUJvYXJkIiwic3VibWFyaW5lIiwicGxheWVyU3VibWFyaW5lQ2VsbCIsInBsYXllclN1Ym1hcmluZUNsaWNrIiwiZGlzcGxheVBsYWNlUGF0cm9sQm9hcmQiLCJwYXRyb2wiLCJwbGF5ZXJQYXRyb2xDZWxsIiwicGxheWVyUGF0cm9sQ2xpY2siLCJzZXRSb3RhdGVCdXR0b24iLCJyb3RhdGVCdXR0b24iLCJnZXRFbGVtZW50QnlJZCIsInNldFBsYXllclNoaXBzIiwiY29tcHV0ZXJTaGlwcyIsInNldENvbXB1dGVyU2hpcHMiLCJnYW1lQ29udHJvbGxlciJdLCJzb3VyY2VSb290IjoiIn0=