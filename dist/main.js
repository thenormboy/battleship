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
      let possibleChoices = shipChoices(orientation, 5);
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
  function createRotateBtn() {
    const rotateContainer = document.querySelector('.rotate-container');
    rotateContainer.textContent = '';
    const rotateBtn = document.createElement('button');
    rotateBtn.textContent = 'Rotate';
    rotateBtn.addEventListener('click', () => {
      if (globalCoordinate == 'X') {
        globalCoordinate = 'Y';
      } else {
        globalCoordinate = 'X';
      }
      displayPlaceCarrierBoard();
    });
    rotateContainer.appendChild(rotateBtn);
  }
  ;
  createRotateBtn();
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
  function createRotateBtn() {
    const rotateContainer = document.querySelector('.rotate-container');
    rotateContainer.textContent = '';
    const rotateBtn = document.createElement('button');
    rotateBtn.textContent = 'Rotate';
    rotateBtn.addEventListener('click', () => {
      if (globalCoordinate == 'X') {
        globalCoordinate = 'Y';
      } else {
        globalCoordinate = 'X';
      }
      displayPlaceBattleshipBoard();
    });
    rotateContainer.appendChild(rotateBtn);
  }
  ;
  createRotateBtn();
  _game_js__WEBPACK_IMPORTED_MODULE_1__.Game.getPlayerGameboard().getBoard().forEach(rowCell => {
    rowCell.forEach(columnCell => {
      const boardCell = document.createElement('div');
      boardCell.textContent = columnCell;
      boardCell.setAttribute('id', columnCell);
      boardCell.classList.add('player-one-cells-place');
      boardCell.style.width = '10%';
      boardCell.style.height = '10%';
      if (_game_js__WEBPACK_IMPORTED_MODULE_1__.Game.getPlayerGameboard().getOccupiedCells().includes(boardCell.textContent)) {
        boardCell.classList.add('occupied-cell');
      }
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
  function createRotateBtn() {
    const rotateContainer = document.querySelector('.rotate-container');
    rotateContainer.textContent = '';
    const rotateBtn = document.createElement('button');
    rotateBtn.textContent = 'Rotate';
    rotateBtn.addEventListener('click', () => {
      if (globalCoordinate == 'X') {
        globalCoordinate = 'Y';
      } else {
        globalCoordinate = 'X';
      }
      displayPlaceDestroyerBoard();
    });
    rotateContainer.appendChild(rotateBtn);
  }
  ;
  createRotateBtn();
  _game_js__WEBPACK_IMPORTED_MODULE_1__.Game.getPlayerGameboard().getBoard().forEach(rowCell => {
    rowCell.forEach(columnCell => {
      const boardCell = document.createElement('div');
      boardCell.textContent = columnCell;
      boardCell.setAttribute('id', columnCell);
      boardCell.classList.add('player-one-cells-place');
      boardCell.style.width = '10%';
      boardCell.style.height = '10%';
      if (_game_js__WEBPACK_IMPORTED_MODULE_1__.Game.getPlayerGameboard().getOccupiedCells().includes(boardCell.textContent)) {
        boardCell.classList.add('occupied-cell');
      }
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
  function createRotateBtn() {
    const rotateContainer = document.querySelector('.rotate-container');
    rotateContainer.textContent = '';
    const rotateBtn = document.createElement('button');
    rotateBtn.textContent = 'Rotate';
    rotateBtn.addEventListener('click', () => {
      if (globalCoordinate == 'X') {
        globalCoordinate = 'Y';
      } else {
        globalCoordinate = 'X';
      }
      displayPlaceSubmarineBoard();
    });
    rotateContainer.appendChild(rotateBtn);
  }
  ;
  createRotateBtn();
  _game_js__WEBPACK_IMPORTED_MODULE_1__.Game.getPlayerGameboard().getBoard().forEach(rowCell => {
    rowCell.forEach(columnCell => {
      const boardCell = document.createElement('div');
      boardCell.textContent = columnCell;
      boardCell.setAttribute('id', columnCell);
      boardCell.classList.add('player-one-cells-place');
      boardCell.style.width = '10%';
      boardCell.style.height = '10%';
      if (_game_js__WEBPACK_IMPORTED_MODULE_1__.Game.getPlayerGameboard().getOccupiedCells().includes(boardCell.textContent)) {
        boardCell.classList.add('occupied-cell');
      }
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
  function createRotateBtn() {
    const rotateContainer = document.querySelector('.rotate-container');
    rotateContainer.textContent = '';
    const rotateBtn = document.createElement('button');
    rotateBtn.textContent = 'Rotate';
    rotateBtn.addEventListener('click', () => {
      if (globalCoordinate == 'X') {
        globalCoordinate = 'Y';
      } else {
        globalCoordinate = 'X';
      }
      displayPlacePatrolBoard();
    });
    rotateContainer.appendChild(rotateBtn);
  }
  ;
  createRotateBtn();
  _game_js__WEBPACK_IMPORTED_MODULE_1__.Game.getPlayerGameboard().getBoard().forEach(rowCell => {
    rowCell.forEach(columnCell => {
      const boardCell = document.createElement('div');
      boardCell.textContent = columnCell;
      boardCell.setAttribute('id', columnCell);
      boardCell.classList.add('player-one-cells-place');
      boardCell.style.width = '10%';
      boardCell.style.height = '10%';
      if (_game_js__WEBPACK_IMPORTED_MODULE_1__.Game.getPlayerGameboard().getOccupiedCells().includes(boardCell.textContent)) {
        boardCell.classList.add('occupied-cell');
      }
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
          gameStart = true;
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
let playerShips = [];
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
  setComputerShips();
  displayPlayerTwoBoard();
  displayPlaceCarrierBoard();
}
gameController();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBdUQ7QUFFdkQsTUFBTUcsSUFBSSxHQUFHLENBQUMsTUFBTTtFQUVoQixJQUFJQyxPQUFPLEdBQUcsRUFBRTtFQUNoQixJQUFJQyxVQUFVLEdBQUcsRUFBRTtFQUVuQixJQUFJQyxNQUFNLEdBQUdKLG1EQUFNLENBQUMsUUFBUSxDQUFDO0VBQzdCLElBQUlLLGVBQWUsR0FBR04sc0RBQVMsQ0FBQyxDQUFDO0VBRWpDLElBQUlPLFFBQVEsR0FBR04sbURBQU0sQ0FBQyxVQUFVLENBQUM7RUFDakMsSUFBSU8saUJBQWlCLEdBQUdSLHNEQUFTLENBQUMsQ0FBQztFQUVuQ0csT0FBTyxDQUFDTSxJQUFJLENBQUNKLE1BQU0sQ0FBQztFQUNwQkYsT0FBTyxDQUFDTSxJQUFJLENBQUNGLFFBQVEsQ0FBQztFQUV0QkgsVUFBVSxDQUFDSyxJQUFJLENBQUNILGVBQWUsQ0FBQztFQUNoQ0YsVUFBVSxDQUFDSyxJQUFJLENBQUNELGlCQUFpQixDQUFDO0VBRWxDLElBQUlFLFlBQVksR0FBR1AsT0FBTyxDQUFDLENBQUMsQ0FBQztFQUM3QixJQUFJUSxXQUFXLEdBQUdQLFVBQVUsQ0FBQyxDQUFDLENBQUM7RUFFL0IsTUFBTVEsZUFBZSxHQUFHQSxDQUFBLEtBQU1GLFlBQVk7RUFDMUMsTUFBTUcsa0JBQWtCLEdBQUdBLENBQUEsS0FBTUYsV0FBVztFQUU1QyxNQUFNRyxTQUFTLEdBQUdBLENBQUEsS0FBTVQsTUFBTTtFQUM5QixNQUFNVSxXQUFXLEdBQUdBLENBQUEsS0FBTVIsUUFBUTtFQUVsQyxNQUFNUyxrQkFBa0IsR0FBR0EsQ0FBQSxLQUFNVixlQUFlO0VBQ2hELE1BQU1XLG9CQUFvQixHQUFHQSxDQUFBLEtBQU1ULGlCQUFpQjtFQUVwRCxNQUFNVSxnQkFBZ0IsR0FBR0EsQ0FBQSxLQUFNO0lBQzNCLElBQUlSLFlBQVksS0FBS1AsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFO01BQzdCTyxZQUFZLEdBQUdQLE9BQU8sQ0FBQyxDQUFDLENBQUM7SUFDN0IsQ0FBQyxNQUFNO01BQ0hPLFlBQVksR0FBR1AsT0FBTyxDQUFDLENBQUMsQ0FBQztJQUM3QjtFQUNKLENBQUM7RUFFRCxNQUFNZ0IsaUJBQWlCLEdBQUdBLENBQUEsS0FBTTtJQUM1QixJQUFJUixXQUFXLEtBQUtQLFVBQVUsQ0FBQyxDQUFDLENBQUMsRUFBRTtNQUMvQk8sV0FBVyxHQUFHUCxVQUFVLENBQUMsQ0FBQyxDQUFDO0lBQy9CLENBQUMsTUFBTTtNQUNITyxXQUFXLEdBQUdQLFVBQVUsQ0FBQyxDQUFDLENBQUM7SUFDL0I7RUFDSixDQUFDO0VBRUQsT0FBTztJQUNIVSxTQUFTO0lBQ1RFLGtCQUFrQjtJQUNsQkQsV0FBVztJQUNYRSxvQkFBb0I7SUFDcEJMLGVBQWU7SUFDZkMsa0JBQWtCO0lBQ2xCSyxnQkFBZ0I7SUFDaEJDO0VBQ0osQ0FBQztBQUVMLENBQUMsRUFBRSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7OztBQzFESixNQUFNcEIsSUFBSSxHQUFJcUIsUUFBUSxJQUFLO0VBRXZCLE1BQU1DLFdBQVcsR0FBR0EsQ0FBQSxLQUFNRCxRQUFRO0VBRWxDLE1BQU1FLFdBQVcsR0FBSUMsTUFBTSxJQUFLO0lBQzVCRixXQUFXLENBQUMsQ0FBQyxDQUFDWixJQUFJLENBQUNjLE1BQU0sQ0FBQztFQUM5QixDQUFDO0VBRUQsTUFBTUMsV0FBVyxHQUFHQSxDQUFDQyxXQUFXLEVBQUVDLE1BQU0sS0FBSztJQUV6QyxJQUFJQyxlQUFlLEdBQUcsRUFBRTtJQUV4QixJQUFJRixXQUFXLElBQUksR0FBRyxFQUFFO01BQ3BCLEtBQUssSUFBSUcsQ0FBQyxHQUFHLENBQUMsRUFBRUEsQ0FBQyxHQUFHLEVBQUUsRUFBRUEsQ0FBQyxFQUFFLEVBQUU7UUFDekIsS0FBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBQyxFQUFFQSxDQUFDLEdBQUksRUFBRSxHQUFHSCxNQUFPLEVBQUVHLENBQUMsRUFBRSxFQUFFO1VBQ3BDRixlQUFlLENBQUNsQixJQUFJLENBQUNtQixDQUFDLENBQUNFLFFBQVEsQ0FBQyxDQUFDLEdBQUdELENBQUMsQ0FBQ0MsUUFBUSxDQUFDLENBQUMsQ0FBQztRQUNyRDtNQUNKO0lBQ0osQ0FBQyxNQUFNLElBQUlMLFdBQVcsSUFBSSxHQUFHLEVBQUU7TUFDM0IsS0FBSyxJQUFJRyxDQUFDLEdBQUcsQ0FBQyxFQUFFQSxDQUFDLEdBQUksRUFBRSxHQUFHRixNQUFPLEVBQUVFLENBQUMsRUFBRSxFQUFFO1FBQ3BDLEtBQUssSUFBSUMsQ0FBQyxHQUFHLENBQUMsRUFBRUEsQ0FBQyxHQUFHLEVBQUUsRUFBRUEsQ0FBQyxFQUFFLEVBQUU7VUFDekJGLGVBQWUsQ0FBQ2xCLElBQUksQ0FBQ21CLENBQUMsQ0FBQ0UsUUFBUSxDQUFDLENBQUMsR0FBR0QsQ0FBQyxDQUFDQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1FBQ3JEO01BQ0o7SUFDSjtJQUVBLE9BQU9ILGVBQWU7RUFFMUIsQ0FBQztFQUVELE1BQU1JLGFBQWEsR0FBR0EsQ0FBQ0MsVUFBVSxFQUFFUCxXQUFXLEtBQUs7SUFFL0MsSUFBSU8sVUFBVSxJQUFJLEdBQUcsRUFBRTtNQUVuQixJQUFJTCxlQUFlLEdBQUdILFdBQVcsQ0FBQ0MsV0FBVyxFQUFFLENBQUMsQ0FBQztNQUVqRE8sVUFBVSxHQUFHTCxlQUFlLENBQUNNLElBQUksQ0FBQ0MsS0FBSyxDQUFDRCxJQUFJLENBQUNFLE1BQU0sQ0FBQyxDQUFDLEdBQUdSLGVBQWUsQ0FBQ0QsTUFBTSxDQUFDLENBQUM7SUFFcEY7SUFFQU0sVUFBVSxHQUFHSSxNQUFNLENBQUNKLFVBQVUsQ0FBQztJQUUvQixJQUFJQSxVQUFVLENBQUNGLFFBQVEsQ0FBQyxDQUFDLENBQUNKLE1BQU0sSUFBSSxDQUFDLEVBQUU7TUFFbkNKLFdBQVcsQ0FBQyxHQUFHLEdBQUdlLE1BQU0sQ0FBQ0wsVUFBVSxDQUFDLENBQUM7TUFFckMsS0FBSyxJQUFJSixDQUFDLEdBQUcsQ0FBQyxFQUFFQSxDQUFDLEdBQUcsQ0FBQyxFQUFFQSxDQUFDLEVBQUUsRUFBRTtRQUN4QixJQUFJSCxXQUFXLElBQUksR0FBRyxFQUFFO1VBQ3BCSCxXQUFXLENBQUMsR0FBRyxHQUFHZSxNQUFNLENBQUNMLFVBQVUsR0FBR0osQ0FBQyxDQUFDLENBQUM7UUFDN0MsQ0FBQyxNQUFNLElBQUlILFdBQVcsSUFBSSxHQUFHLEVBQUU7VUFDM0JILFdBQVcsQ0FBQ2UsTUFBTSxDQUFDTCxVQUFVLEdBQUlKLENBQUMsR0FBRyxFQUFHLENBQUMsQ0FBQztRQUM5QztNQUNKO0lBRUosQ0FBQyxNQUFNO01BRUgsS0FBSyxJQUFJQSxDQUFDLEdBQUcsQ0FBQyxFQUFFQSxDQUFDLEdBQUcsQ0FBQyxFQUFFQSxDQUFDLEVBQUUsRUFBRTtRQUN4QixJQUFJSCxXQUFXLElBQUksR0FBRyxFQUFFO1VBQ3BCSCxXQUFXLENBQUNlLE1BQU0sQ0FBQ0wsVUFBVSxHQUFHSixDQUFDLENBQUMsQ0FBQztRQUN2QyxDQUFDLE1BQU0sSUFBSUgsV0FBVyxJQUFJLEdBQUcsRUFBRTtVQUMzQkgsV0FBVyxDQUFDZSxNQUFNLENBQUNMLFVBQVUsR0FBSUosQ0FBQyxHQUFHLEVBQUcsQ0FBQyxDQUFDO1FBQzlDO01BQ0o7SUFDSjtFQUNKLENBQUM7RUFFRCxTQUFTVSxnQkFBZ0JBLENBQUNOLFVBQVUsRUFBRVAsV0FBVyxFQUFFO0lBQy9DLElBQUlFLGVBQWUsR0FBRyxFQUFFO0lBRXhCLElBQUlLLFVBQVUsSUFBSSxHQUFHLEVBQUU7TUFDbkIsSUFBSVAsV0FBVyxJQUFJLEdBQUcsRUFBRTtRQUNwQixLQUFLLElBQUlHLENBQUMsR0FBRyxDQUFDLEVBQUVBLENBQUMsR0FBRyxFQUFFLEVBQUVBLENBQUMsRUFBRSxFQUFFO1VBQ3pCLEtBQUssSUFBSUMsQ0FBQyxHQUFHLENBQUMsRUFBRUEsQ0FBQyxHQUFHLENBQUMsRUFBRUEsQ0FBQyxFQUFFLEVBQUU7WUFDeEJGLGVBQWUsQ0FBQ2xCLElBQUksQ0FBQ21CLENBQUMsQ0FBQ0UsUUFBUSxDQUFDLENBQUMsR0FBR0QsQ0FBQyxDQUFDQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1VBQ3JEO1FBQ0o7TUFDSixDQUFDLE1BQU0sSUFBSUwsV0FBVyxJQUFJLEdBQUcsRUFBRTtRQUMzQixLQUFLLElBQUlHLENBQUMsR0FBRyxDQUFDLEVBQUVBLENBQUMsR0FBRyxDQUFDLEVBQUVBLENBQUMsRUFBRSxFQUFFO1VBQ3hCLEtBQUssSUFBSUMsQ0FBQyxHQUFHLENBQUMsRUFBRUEsQ0FBQyxHQUFHLEVBQUUsRUFBRUEsQ0FBQyxFQUFFLEVBQUU7WUFDekJGLGVBQWUsQ0FBQ2xCLElBQUksQ0FBQ21CLENBQUMsQ0FBQ0UsUUFBUSxDQUFDLENBQUMsR0FBR0QsQ0FBQyxDQUFDQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1VBQ3JEO1FBQ0o7TUFDSjtNQUVBRSxVQUFVLEdBQUdMLGVBQWUsQ0FBQ00sSUFBSSxDQUFDQyxLQUFLLENBQUNELElBQUksQ0FBQ0UsTUFBTSxDQUFDLENBQUMsR0FBR1IsZUFBZSxDQUFDRCxNQUFNLENBQUMsQ0FBQztJQUVwRjtJQUVBTSxVQUFVLEdBQUdJLE1BQU0sQ0FBQ0osVUFBVSxDQUFDO0lBRS9CLElBQUlBLFVBQVUsQ0FBQ0YsUUFBUSxDQUFDLENBQUMsQ0FBQ0osTUFBTSxJQUFJLENBQUMsRUFBRTtNQUVuQ0osV0FBVyxDQUFDLEdBQUcsR0FBR2UsTUFBTSxDQUFDTCxVQUFVLENBQUMsQ0FBQztNQUVyQyxLQUFLLElBQUlKLENBQUMsR0FBRyxDQUFDLEVBQUVBLENBQUMsR0FBRyxDQUFDLEVBQUVBLENBQUMsRUFBRSxFQUFFO1FBQ3hCLElBQUlILFdBQVcsSUFBSSxHQUFHLEVBQUU7VUFDcEJILFdBQVcsQ0FBQyxHQUFHLEdBQUdlLE1BQU0sQ0FBQ0wsVUFBVSxHQUFHSixDQUFDLENBQUMsQ0FBQztRQUM3QyxDQUFDLE1BQU0sSUFBSUgsV0FBVyxJQUFJLEdBQUcsRUFBRTtVQUMzQkgsV0FBVyxDQUFDZSxNQUFNLENBQUNMLFVBQVUsR0FBSUosQ0FBQyxHQUFHLEVBQUcsQ0FBQyxDQUFDO1FBQzlDO01BQ0o7SUFFSixDQUFDLE1BQU07TUFFSCxLQUFLLElBQUlBLENBQUMsR0FBRyxDQUFDLEVBQUVBLENBQUMsR0FBRyxDQUFDLEVBQUVBLENBQUMsRUFBRSxFQUFFO1FBQ3hCLElBQUlILFdBQVcsSUFBSSxHQUFHLEVBQUU7VUFDcEJILFdBQVcsQ0FBQ2UsTUFBTSxDQUFDTCxVQUFVLEdBQUdKLENBQUMsQ0FBQyxDQUFDO1FBQ3ZDLENBQUMsTUFBTSxJQUFJSCxXQUFXLElBQUksR0FBRyxFQUFFO1VBQzNCSCxXQUFXLENBQUNlLE1BQU0sQ0FBQ0wsVUFBVSxHQUFJSixDQUFDLEdBQUcsRUFBRyxDQUFDLENBQUM7UUFDOUM7TUFDSjtJQUNKO0VBQUs7RUFFVCxTQUFTVyxlQUFlQSxDQUFDUCxVQUFVLEVBQUVQLFdBQVcsRUFBRTtJQUk5QyxJQUFJRSxlQUFlLEdBQUcsRUFBRTtJQUV4QixJQUFJSyxVQUFVLElBQUksR0FBRyxFQUFFO01BQ25CLElBQUlQLFdBQVcsSUFBSSxHQUFHLEVBQUU7UUFDcEIsS0FBSyxJQUFJRyxDQUFDLEdBQUcsQ0FBQyxFQUFFQSxDQUFDLEdBQUcsRUFBRSxFQUFFQSxDQUFDLEVBQUUsRUFBRTtVQUN6QixLQUFLLElBQUlDLENBQUMsR0FBRyxDQUFDLEVBQUVBLENBQUMsR0FBRyxDQUFDLEVBQUVBLENBQUMsRUFBRSxFQUFFO1lBQ3hCRixlQUFlLENBQUNsQixJQUFJLENBQUNtQixDQUFDLENBQUNFLFFBQVEsQ0FBQyxDQUFDLEdBQUdELENBQUMsQ0FBQ0MsUUFBUSxDQUFDLENBQUMsQ0FBQztVQUNyRDtRQUNKO01BQ0osQ0FBQyxNQUFNLElBQUlMLFdBQVcsSUFBSSxHQUFHLEVBQUU7UUFDM0IsS0FBSyxJQUFJRyxDQUFDLEdBQUcsQ0FBQyxFQUFFQSxDQUFDLEdBQUcsQ0FBQyxFQUFFQSxDQUFDLEVBQUUsRUFBRTtVQUN4QixLQUFLLElBQUlDLENBQUMsR0FBRyxDQUFDLEVBQUVBLENBQUMsR0FBRyxFQUFFLEVBQUVBLENBQUMsRUFBRSxFQUFFO1lBQ3pCRixlQUFlLENBQUNsQixJQUFJLENBQUNtQixDQUFDLENBQUNFLFFBQVEsQ0FBQyxDQUFDLEdBQUdELENBQUMsQ0FBQ0MsUUFBUSxDQUFDLENBQUMsQ0FBQztVQUNyRDtRQUNKO01BQ0o7TUFFQUUsVUFBVSxHQUFHTCxlQUFlLENBQUNNLElBQUksQ0FBQ0MsS0FBSyxDQUFDRCxJQUFJLENBQUNFLE1BQU0sQ0FBQyxDQUFDLEdBQUdSLGVBQWUsQ0FBQ0QsTUFBTSxDQUFDLENBQUM7SUFFcEY7SUFFQU0sVUFBVSxHQUFHSSxNQUFNLENBQUNKLFVBQVUsQ0FBQztJQUUvQixJQUFJQSxVQUFVLENBQUNGLFFBQVEsQ0FBQyxDQUFDLENBQUNKLE1BQU0sSUFBSSxDQUFDLEVBQUU7TUFFbkNKLFdBQVcsQ0FBQyxHQUFHLEdBQUdlLE1BQU0sQ0FBQ0wsVUFBVSxDQUFDLENBQUM7TUFFckMsS0FBSyxJQUFJSixDQUFDLEdBQUcsQ0FBQyxFQUFFQSxDQUFDLEdBQUcsQ0FBQyxFQUFFQSxDQUFDLEVBQUUsRUFBRTtRQUN4QixJQUFJSCxXQUFXLElBQUksR0FBRyxFQUFFO1VBQ3BCSCxXQUFXLENBQUMsR0FBRyxHQUFHZSxNQUFNLENBQUNMLFVBQVUsR0FBR0osQ0FBQyxDQUFDLENBQUM7UUFDN0MsQ0FBQyxNQUFNLElBQUlILFdBQVcsSUFBSSxHQUFHLEVBQUU7VUFDM0JILFdBQVcsQ0FBQ2UsTUFBTSxDQUFDTCxVQUFVLEdBQUlKLENBQUMsR0FBRyxFQUFHLENBQUMsQ0FBQztRQUM5QztNQUNKO0lBRUosQ0FBQyxNQUFNO01BRUgsS0FBSyxJQUFJQSxDQUFDLEdBQUcsQ0FBQyxFQUFFQSxDQUFDLEdBQUcsQ0FBQyxFQUFFQSxDQUFDLEVBQUUsRUFBRTtRQUN4QixJQUFJSCxXQUFXLElBQUksR0FBRyxFQUFFO1VBQ3BCSCxXQUFXLENBQUNlLE1BQU0sQ0FBQ0wsVUFBVSxHQUFHSixDQUFDLENBQUMsQ0FBQztRQUN2QyxDQUFDLE1BQU0sSUFBSUgsV0FBVyxJQUFJLEdBQUcsRUFBRTtVQUMzQkgsV0FBVyxDQUFDZSxNQUFNLENBQUNMLFVBQVUsR0FBSUosQ0FBQyxHQUFHLEVBQUcsQ0FBQyxDQUFDO1FBQzlDO01BQ0o7SUFDSjtFQUFLO0VBRVQsU0FBU1ksZUFBZUEsQ0FBQ1IsVUFBVSxFQUFFUCxXQUFXLEVBQUU7SUFHOUMsSUFBSUUsZUFBZSxHQUFHLEVBQUU7SUFFeEIsSUFBSUssVUFBVSxJQUFJLEdBQUcsRUFBRTtNQUNuQixJQUFJUCxXQUFXLElBQUksR0FBRyxFQUFFO1FBQ3BCLEtBQUssSUFBSUcsQ0FBQyxHQUFHLENBQUMsRUFBRUEsQ0FBQyxHQUFHLEVBQUUsRUFBRUEsQ0FBQyxFQUFFLEVBQUU7VUFDekIsS0FBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBQyxFQUFFQSxDQUFDLEdBQUcsQ0FBQyxFQUFFQSxDQUFDLEVBQUUsRUFBRTtZQUN4QkYsZUFBZSxDQUFDbEIsSUFBSSxDQUFDbUIsQ0FBQyxDQUFDRSxRQUFRLENBQUMsQ0FBQyxHQUFHRCxDQUFDLENBQUNDLFFBQVEsQ0FBQyxDQUFDLENBQUM7VUFDckQ7UUFDSjtNQUNKLENBQUMsTUFBTSxJQUFJTCxXQUFXLElBQUksR0FBRyxFQUFFO1FBQzNCLEtBQUssSUFBSUcsQ0FBQyxHQUFHLENBQUMsRUFBRUEsQ0FBQyxHQUFHLENBQUMsRUFBRUEsQ0FBQyxFQUFFLEVBQUU7VUFDeEIsS0FBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBQyxFQUFFQSxDQUFDLEdBQUcsRUFBRSxFQUFFQSxDQUFDLEVBQUUsRUFBRTtZQUN6QkYsZUFBZSxDQUFDbEIsSUFBSSxDQUFDbUIsQ0FBQyxDQUFDRSxRQUFRLENBQUMsQ0FBQyxHQUFHRCxDQUFDLENBQUNDLFFBQVEsQ0FBQyxDQUFDLENBQUM7VUFDckQ7UUFDSjtNQUNKO01BRUFFLFVBQVUsR0FBR0wsZUFBZSxDQUFDTSxJQUFJLENBQUNDLEtBQUssQ0FBQ0QsSUFBSSxDQUFDRSxNQUFNLENBQUMsQ0FBQyxHQUFHUixlQUFlLENBQUNELE1BQU0sQ0FBQyxDQUFDO0lBRXBGO0lBRUFNLFVBQVUsR0FBR0ksTUFBTSxDQUFDSixVQUFVLENBQUM7SUFFL0IsSUFBSUEsVUFBVSxDQUFDRixRQUFRLENBQUMsQ0FBQyxDQUFDSixNQUFNLElBQUksQ0FBQyxFQUFFO01BRW5DSixXQUFXLENBQUMsR0FBRyxHQUFHZSxNQUFNLENBQUNMLFVBQVUsQ0FBQyxDQUFDO01BRXJDLEtBQUssSUFBSUosQ0FBQyxHQUFHLENBQUMsRUFBRUEsQ0FBQyxHQUFHLENBQUMsRUFBRUEsQ0FBQyxFQUFFLEVBQUU7UUFDeEIsSUFBSUgsV0FBVyxJQUFJLEdBQUcsRUFBRTtVQUNwQkgsV0FBVyxDQUFDLEdBQUcsR0FBR2UsTUFBTSxDQUFDTCxVQUFVLEdBQUdKLENBQUMsQ0FBQyxDQUFDO1FBQzdDLENBQUMsTUFBTSxJQUFJSCxXQUFXLElBQUksR0FBRyxFQUFFO1VBQzNCSCxXQUFXLENBQUNlLE1BQU0sQ0FBQ0wsVUFBVSxHQUFJSixDQUFDLEdBQUcsRUFBRyxDQUFDLENBQUM7UUFDOUM7TUFDSjtJQUVKLENBQUMsTUFBTTtNQUVILEtBQUssSUFBSUEsQ0FBQyxHQUFHLENBQUMsRUFBRUEsQ0FBQyxHQUFHLENBQUMsRUFBRUEsQ0FBQyxFQUFFLEVBQUU7UUFDeEIsSUFBSUgsV0FBVyxJQUFJLEdBQUcsRUFBRTtVQUNwQkgsV0FBVyxDQUFDZSxNQUFNLENBQUNMLFVBQVUsR0FBR0osQ0FBQyxDQUFDLENBQUM7UUFDdkMsQ0FBQyxNQUFNLElBQUlILFdBQVcsSUFBSSxHQUFHLEVBQUU7VUFDM0JILFdBQVcsQ0FBQ2UsTUFBTSxDQUFDTCxVQUFVLEdBQUlKLENBQUMsR0FBRyxFQUFHLENBQUMsQ0FBQztRQUM5QztNQUNKO0lBQ0o7RUFBSztFQUVULFNBQVNhLFlBQVlBLENBQUNULFVBQVUsRUFBRVAsV0FBVyxFQUFFO0lBRzNDLElBQUlFLGVBQWUsR0FBRyxFQUFFO0lBRXhCLElBQUlLLFVBQVUsSUFBSSxHQUFHLEVBQUU7TUFDbkIsSUFBSVAsV0FBVyxJQUFJLEdBQUcsRUFBRTtRQUNwQixLQUFLLElBQUlHLENBQUMsR0FBRyxDQUFDLEVBQUVBLENBQUMsR0FBRyxFQUFFLEVBQUVBLENBQUMsRUFBRSxFQUFFO1VBQ3pCLEtBQUssSUFBSUMsQ0FBQyxHQUFHLENBQUMsRUFBRUEsQ0FBQyxHQUFHLENBQUMsRUFBRUEsQ0FBQyxFQUFFLEVBQUU7WUFDeEJGLGVBQWUsQ0FBQ2xCLElBQUksQ0FBQ21CLENBQUMsQ0FBQ0UsUUFBUSxDQUFDLENBQUMsR0FBR0QsQ0FBQyxDQUFDQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1VBQ3JEO1FBQ0o7TUFDSixDQUFDLE1BQU0sSUFBSUwsV0FBVyxJQUFJLEdBQUcsRUFBRTtRQUMzQixLQUFLLElBQUlHLENBQUMsR0FBRyxDQUFDLEVBQUVBLENBQUMsR0FBRyxDQUFDLEVBQUVBLENBQUMsRUFBRSxFQUFFO1VBQ3hCLEtBQUssSUFBSUMsQ0FBQyxHQUFHLENBQUMsRUFBRUEsQ0FBQyxHQUFHLEVBQUUsRUFBRUEsQ0FBQyxFQUFFLEVBQUU7WUFDekJGLGVBQWUsQ0FBQ2xCLElBQUksQ0FBQ21CLENBQUMsQ0FBQ0UsUUFBUSxDQUFDLENBQUMsR0FBR0QsQ0FBQyxDQUFDQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1VBQ3JEO1FBQ0o7TUFDSjtNQUVBRSxVQUFVLEdBQUdMLGVBQWUsQ0FBQ00sSUFBSSxDQUFDQyxLQUFLLENBQUNELElBQUksQ0FBQ0UsTUFBTSxDQUFDLENBQUMsR0FBR1IsZUFBZSxDQUFDRCxNQUFNLENBQUMsQ0FBQztJQUVwRjtJQUVBTSxVQUFVLEdBQUdJLE1BQU0sQ0FBQ0osVUFBVSxDQUFDO0lBRS9CLElBQUlBLFVBQVUsQ0FBQ0YsUUFBUSxDQUFDLENBQUMsQ0FBQ0osTUFBTSxJQUFJLENBQUMsRUFBRTtNQUVuQ0osV0FBVyxDQUFDLEdBQUcsR0FBR2UsTUFBTSxDQUFDTCxVQUFVLENBQUMsQ0FBQztNQUVyQyxLQUFLLElBQUlKLENBQUMsR0FBRyxDQUFDLEVBQUVBLENBQUMsR0FBRyxDQUFDLEVBQUVBLENBQUMsRUFBRSxFQUFFO1FBQ3hCLElBQUlILFdBQVcsSUFBSSxHQUFHLEVBQUU7VUFDcEJILFdBQVcsQ0FBQyxHQUFHLEdBQUdlLE1BQU0sQ0FBQ0wsVUFBVSxHQUFHSixDQUFDLENBQUMsQ0FBQztRQUM3QyxDQUFDLE1BQU0sSUFBSUgsV0FBVyxJQUFJLEdBQUcsRUFBRTtVQUMzQkgsV0FBVyxDQUFDZSxNQUFNLENBQUNMLFVBQVUsR0FBSUosQ0FBQyxHQUFHLEVBQUcsQ0FBQyxDQUFDO1FBQzlDO01BQ0o7SUFFSixDQUFDLE1BQU07TUFFSCxLQUFLLElBQUlBLENBQUMsR0FBRyxDQUFDLEVBQUVBLENBQUMsR0FBRyxDQUFDLEVBQUVBLENBQUMsRUFBRSxFQUFFO1FBQ3hCLElBQUlILFdBQVcsSUFBSSxHQUFHLEVBQUU7VUFDcEJILFdBQVcsQ0FBQ2UsTUFBTSxDQUFDTCxVQUFVLEdBQUdKLENBQUMsQ0FBQyxDQUFDO1FBQ3ZDLENBQUMsTUFBTSxJQUFJSCxXQUFXLElBQUksR0FBRyxFQUFFO1VBQzNCSCxXQUFXLENBQUNlLE1BQU0sQ0FBQ0wsVUFBVSxHQUFJSixDQUFDLEdBQUcsRUFBRyxDQUFDLENBQUM7UUFDOUM7TUFDSjtJQUNKO0VBQUs7RUFFVCxPQUFPO0lBQ0hQLFdBQVc7SUFDWEMsV0FBVztJQUNYRSxXQUFXO0lBQ1hPLGFBQWE7SUFDYk8sZ0JBQWdCO0lBQ2hCQyxlQUFlO0lBQ2ZDLGVBQWU7SUFDZkM7RUFDSixDQUFDO0FBQ0wsQ0FBQztBQUVELE1BQU16QyxTQUFTLEdBQUdBLENBQUEsS0FBTTtFQUNwQixNQUFNMEMsR0FBRyxHQUFHLEVBQUU7RUFDZCxNQUFNQyxNQUFNLEdBQUcsRUFBRTtFQUNqQixNQUFNQyxLQUFLLEdBQUcsRUFBRTtFQUNoQixNQUFNQyxZQUFZLEdBQUcsRUFBRTtFQUN2QixNQUFNQyxRQUFRLEdBQUcsRUFBRTtFQUNuQixNQUFNQyxVQUFVLEdBQUcsRUFBRTtFQUNyQixNQUFNQyxhQUFhLEdBQUcsRUFBRTtFQUV4QixLQUFLLElBQUlwQixDQUFDLEdBQUcsQ0FBQyxFQUFFQSxDQUFDLEdBQUdjLEdBQUcsRUFBRWQsQ0FBQyxFQUFFLEVBQUU7SUFDMUJnQixLQUFLLENBQUNoQixDQUFDLENBQUMsR0FBRyxFQUFFO0lBQ2IsS0FBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBQyxFQUFFQSxDQUFDLEdBQUdjLE1BQU0sRUFBRWQsQ0FBQyxFQUFFLEVBQUU7TUFDN0JlLEtBQUssQ0FBQ2hCLENBQUMsQ0FBQyxDQUFDbkIsSUFBSSxDQUFDbUIsQ0FBQyxDQUFDRSxRQUFRLENBQUMsQ0FBQyxHQUFHRCxDQUFDLENBQUNDLFFBQVEsQ0FBQyxDQUFDLENBQUM7SUFDOUM7RUFDSjtFQUVBLE1BQU1tQixRQUFRLEdBQUdBLENBQUEsS0FBTUwsS0FBSztFQUU1QixNQUFNTSxjQUFjLEdBQUdBLENBQUEsS0FBTTtJQUN6QixPQUFPTCxZQUFZO0VBQ3ZCLENBQUM7RUFFRCxNQUFNTSxjQUFjLEdBQUdDLE9BQU8sSUFBSTtJQUM5QlAsWUFBWSxDQUFDcEMsSUFBSSxDQUFDMkMsT0FBTyxDQUFDO0VBQzlCLENBQUM7RUFFRCxNQUFNQyxXQUFXLEdBQUdBLENBQUEsS0FBTTtJQUN0QixPQUFPUCxRQUFRO0VBQ25CLENBQUM7RUFFRCxNQUFNUSxXQUFXLEdBQUdGLE9BQU8sSUFBSTtJQUMzQk4sUUFBUSxDQUFDckMsSUFBSSxDQUFDMkMsT0FBTyxDQUFDO0VBQzFCLENBQUM7RUFFRCxNQUFNRyxhQUFhLEdBQUdBLENBQUEsS0FBTTtJQUN4QixPQUFPUixVQUFVO0VBQ3JCLENBQUM7RUFFRCxNQUFNUyxhQUFhLEdBQUdKLE9BQU8sSUFBSTtJQUM3QkwsVUFBVSxDQUFDdEMsSUFBSSxDQUFDMkMsT0FBTyxDQUFDO0VBQzVCLENBQUM7RUFFRCxNQUFNSyxlQUFlLEdBQUdBLENBQUEsS0FBTTtJQUMxQkYsYUFBYSxDQUFDLENBQUMsQ0FBQ0csTUFBTSxDQUFDLENBQUMsRUFBRUgsYUFBYSxDQUFDLENBQUMsQ0FBQzdCLE1BQU0sQ0FBQztFQUNyRCxDQUFDO0VBRUQsTUFBTWlDLGdCQUFnQixHQUFHQSxDQUFBLEtBQU07SUFDM0IsT0FBT1gsYUFBYTtFQUN4QixDQUFDO0VBRUQsTUFBTVksZ0JBQWdCLEdBQUdSLE9BQU8sSUFBSTtJQUNoQ0osYUFBYSxDQUFDdkMsSUFBSSxDQUFDMkMsT0FBTyxDQUFDO0VBQy9CLENBQUM7RUFFRCxNQUFNUyxrQkFBa0IsR0FBR0EsQ0FBQSxLQUFNO0lBQzdCRixnQkFBZ0IsQ0FBQyxDQUFDLENBQUNELE1BQU0sQ0FBQyxDQUFDLEVBQUVDLGdCQUFnQixDQUFDLENBQUMsQ0FBQ2pDLE1BQU0sQ0FBQztFQUMzRCxDQUFDO0VBRUQsTUFBTW9DLFVBQVUsR0FBSUMsS0FBSyxJQUFLO0lBQzFCRixrQkFBa0IsQ0FBQyxDQUFDO0lBQ3BCRSxLQUFLLENBQUNDLE9BQU8sQ0FBQ0MsSUFBSSxJQUFJO01BQ2xCQSxJQUFJLENBQUM1QyxXQUFXLENBQUMsQ0FBQyxDQUFDMkMsT0FBTyxDQUFDRSxZQUFZLElBQUk7UUFDdkNOLGdCQUFnQixDQUFDTSxZQUFZLENBQUM7TUFDbEMsQ0FBQyxDQUFDO0lBQ04sQ0FBQyxDQUFDO0VBQ04sQ0FBQztFQUVELE1BQU1DLGVBQWUsR0FBR0EsQ0FBQSxLQUFNO0lBQzFCVixlQUFlLENBQUMsQ0FBQztJQUNqQlIsUUFBUSxDQUFDLENBQUMsQ0FBQ2UsT0FBTyxDQUFDSSxPQUFPLElBQUk7TUFDMUJBLE9BQU8sQ0FBQ0osT0FBTyxDQUFDSyxVQUFVLElBQUk7UUFDMUIsSUFBSSxDQUFFVixnQkFBZ0IsQ0FBQyxDQUFDLENBQUNXLFFBQVEsQ0FBQ0QsVUFBVSxDQUFFLEVBQUU7VUFDNUNiLGFBQWEsQ0FBQ2EsVUFBVSxDQUFDO1FBQzdCO01BQ0osQ0FBQyxDQUFDO0lBQ04sQ0FBQyxDQUFDO0VBQ04sQ0FBQztFQUVELE1BQU1FLGFBQWEsR0FBSXZDLFVBQVUsSUFBSztJQUNsQyxJQUFJMkIsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDVyxRQUFRLENBQUN0QyxVQUFVLENBQUMsRUFBRTtNQUN6Q3NCLFdBQVcsQ0FBQ3RCLFVBQVUsQ0FBQztJQUUzQixDQUFDLE1BQU07TUFDSG1CLGNBQWMsQ0FBQ25CLFVBQVUsQ0FBQztJQUM5QjtJQUVBLE1BQU13QyxhQUFhLEdBQUdiLGdCQUFnQixDQUFDLENBQUMsQ0FBQ2MsT0FBTyxDQUFDekMsVUFBVSxDQUFDO0lBQzVELElBQUl3QyxhQUFhLEdBQUcsQ0FBQyxDQUFDLEVBQUU7TUFDcEJiLGdCQUFnQixDQUFDLENBQUMsQ0FBQ0QsTUFBTSxDQUFDYyxhQUFhLEVBQUUsQ0FBQyxDQUFDO0lBQy9DO0lBRUEsTUFBTUUsVUFBVSxHQUFHbkIsYUFBYSxDQUFDLENBQUMsQ0FBQ2tCLE9BQU8sQ0FBQ3pDLFVBQVUsQ0FBQztJQUN0RCxJQUFJMEMsVUFBVSxHQUFHLENBQUMsQ0FBQyxFQUFFO01BQ2pCbkIsYUFBYSxDQUFDLENBQUMsQ0FBQ0csTUFBTSxDQUFDZ0IsVUFBVSxFQUFFLENBQUMsQ0FBQztJQUN6QztFQUVKLENBQUM7RUFFRCxNQUFNQyxhQUFhLEdBQUdBLENBQUEsS0FBSztJQUN2QixJQUFJaEIsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDakMsTUFBTSxJQUFJLENBQUMsRUFBRTtNQUNoQyxPQUFPLElBQUk7SUFDZixDQUFDLE1BQU07TUFDSCxPQUFPLEtBQUs7SUFDaEI7RUFDSixDQUFDO0VBRUQsTUFBTWtELG1CQUFtQixHQUFHQSxDQUFBLEtBQU07SUFFOUIsSUFBSUMsWUFBWSxHQUFHLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztJQUU3QixPQUFPQSxZQUFZLENBQUM1QyxJQUFJLENBQUNDLEtBQUssQ0FBQ0QsSUFBSSxDQUFDRSxNQUFNLENBQUMsQ0FBQyxHQUFHMEMsWUFBWSxDQUFDbkQsTUFBTSxDQUFDLENBQUM7RUFFeEUsQ0FBQztFQUVELE1BQU1vRCxlQUFlLEdBQUlDLFNBQVMsSUFBSztJQUVuQyxJQUFJQSxTQUFTLENBQUNyRCxNQUFNLElBQUksQ0FBQyxFQUFFO01BQ3ZCLE9BQU8sSUFBSTtJQUNmO0lBRUEsS0FBSyxJQUFJRSxDQUFDLEdBQUcsQ0FBQyxFQUFFQSxDQUFDLEdBQUdtRCxTQUFTLENBQUNyRCxNQUFNLEVBQUVFLENBQUMsRUFBRSxFQUFFO01BQ3ZDLElBQUkrQixnQkFBZ0IsQ0FBQyxDQUFDLENBQUNXLFFBQVEsQ0FBQ1MsU0FBUyxDQUFDbkQsQ0FBQyxDQUFDLENBQUMsRUFBRTtRQUMzQyxPQUFPLElBQUk7TUFDZjtJQUNKO0VBQ0osQ0FBQztFQUVELE9BQU87SUFDSHNCLGNBQWM7SUFDZEMsY0FBYztJQUNkRSxXQUFXO0lBQ1hDLFdBQVc7SUFDWEMsYUFBYTtJQUNiQyxhQUFhO0lBQ2JHLGdCQUFnQjtJQUNoQkMsZ0JBQWdCO0lBQ2hCWCxRQUFRO0lBQ1JhLFVBQVU7SUFDVkssZUFBZTtJQUNmSSxhQUFhO0lBQ2JJLGFBQWE7SUFDYkMsbUJBQW1CO0lBQ25CRTtFQUNKLENBQUM7QUFDTCxDQUFDO0FBRUQsTUFBTTdFLE1BQU0sR0FBSStFLElBQUksSUFBSztFQUNyQixNQUFNQyxPQUFPLEdBQUdBLENBQUEsS0FBTUQsSUFBSTtFQUUxQixNQUFNdEMsR0FBRyxHQUFHLEVBQUU7RUFDZCxNQUFNQyxNQUFNLEdBQUcsRUFBRTtFQUNqQixNQUFNaEIsZUFBZSxHQUFHLEVBQUU7RUFFMUIsS0FBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBQyxFQUFFQSxDQUFDLEdBQUdjLEdBQUcsRUFBRWQsQ0FBQyxFQUFFLEVBQUU7SUFDMUIsS0FBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBQyxFQUFFQSxDQUFDLEdBQUdjLE1BQU0sRUFBRWQsQ0FBQyxFQUFFLEVBQUU7TUFDN0JGLGVBQWUsQ0FBQ2xCLElBQUksQ0FBQ21CLENBQUMsQ0FBQ0UsUUFBUSxDQUFDLENBQUMsR0FBR0QsQ0FBQyxDQUFDQyxRQUFRLENBQUMsQ0FBQyxDQUFDO0lBQ3JEO0VBQ0o7RUFFQSxNQUFNb0Qsa0JBQWtCLEdBQUdBLENBQUEsS0FBTXZELGVBQWU7RUFFaEQsTUFBTXdELGNBQWMsR0FBR0EsQ0FBQSxLQUFNO0lBRXJCLElBQUlDLGdCQUFnQixHQUFHRixrQkFBa0IsQ0FBQyxDQUFDLENBQUNqRCxJQUFJLENBQUNDLEtBQUssQ0FBQ0QsSUFBSSxDQUFDRSxNQUFNLENBQUMsQ0FBQyxHQUFHK0Msa0JBQWtCLENBQUMsQ0FBQyxDQUFDeEQsTUFBTSxDQUFDLENBQUM7SUFFcEcsTUFBTTJELEtBQUssR0FBR0gsa0JBQWtCLENBQUMsQ0FBQyxDQUFDVCxPQUFPLENBQUNXLGdCQUFnQixDQUFDO0lBQzVELElBQUlDLEtBQUssR0FBRyxDQUFDLENBQUMsRUFBRTtNQUNaMUQsZUFBZSxDQUFDK0IsTUFBTSxDQUFDMkIsS0FBSyxFQUFFLENBQUMsQ0FBQztJQUNwQztJQUVBLE9BQU9ELGdCQUFnQjtFQUMvQixDQUFDO0VBRUQsT0FBTztJQUNISCxPQUFPO0lBQ1BFO0VBQ0osQ0FBQztBQUNMLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsY0Q7QUFDMEc7QUFDakI7QUFDekYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUMsT0FBTyxnRkFBZ0YsV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLHNDQUFzQyxvQkFBb0Isc0JBQXNCLHFDQUFxQyxHQUFHLDJCQUEyQixvQkFBb0IsbUJBQW1CLDhCQUE4QixzQkFBc0IsOEJBQThCLDBCQUEwQixzQkFBc0IsR0FBRywrQkFBK0IsNkJBQTZCLDhCQUE4QixHQUFHLDJCQUEyQixvQkFBb0IsbUJBQW1CLDhCQUE4QixzQkFBc0IsOEJBQThCLDBCQUEwQixzQkFBc0IsR0FBRywrQkFBK0IsNkJBQTZCLDhCQUE4QixHQUFHLG9CQUFvQix3QkFBd0IsR0FBRyxpQkFBaUIsd0JBQXdCLEdBQUcsZUFBZSxzQkFBc0IsR0FBRyxrQkFBa0IsdUJBQXVCLEdBQUcsd0JBQXdCLHdCQUF3QixHQUFHLG1CQUFtQjtBQUN0NkM7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7QUNoRTFCOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxREFBcUQ7QUFDckQ7QUFDQTtBQUNBLGdEQUFnRDtBQUNoRDtBQUNBO0FBQ0EscUZBQXFGO0FBQ3JGO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixpQkFBaUI7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLHFCQUFxQjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzRkFBc0YscUJBQXFCO0FBQzNHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixpREFBaUQscUJBQXFCO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzREFBc0QscUJBQXFCO0FBQzNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNwRmE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVEQUF1RCxjQUFjO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNkQSxNQUErRjtBQUMvRixNQUFxRjtBQUNyRixNQUE0RjtBQUM1RixNQUErRztBQUMvRyxNQUF3RztBQUN4RyxNQUF3RztBQUN4RyxNQUFtRztBQUNuRztBQUNBOztBQUVBOztBQUVBLDRCQUE0QixxR0FBbUI7QUFDL0Msd0JBQXdCLGtIQUFhOztBQUVyQyx1QkFBdUIsdUdBQWE7QUFDcEM7QUFDQSxpQkFBaUIsK0ZBQU07QUFDdkIsNkJBQTZCLHNHQUFrQjs7QUFFL0MsYUFBYSwwR0FBRyxDQUFDLHNGQUFPOzs7O0FBSTZDO0FBQ3JFLE9BQU8saUVBQWUsc0ZBQU8sSUFBSSxzRkFBTyxVQUFVLHNGQUFPLG1CQUFtQixFQUFDOzs7Ozs7Ozs7OztBQzFCaEU7O0FBRWI7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixpQkFBaUI7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQiw0QkFBNEI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQiw2QkFBNkI7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNuRmE7O0FBRWI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDakNhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNUYTs7QUFFYjtBQUNBO0FBQ0EsY0FBYyxLQUF3QyxHQUFHLHNCQUFpQixHQUFHLENBQUk7QUFDakY7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ1RhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0RBQWtEO0FBQ2xEO0FBQ0E7QUFDQSwwQ0FBMEM7QUFDMUM7QUFDQTtBQUNBO0FBQ0EsaUZBQWlGO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EseURBQXlEO0FBQ3pEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDNURhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7VUNiQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7Ozs7QUNBb0I7QUFFYTtBQUNHO0FBRXBDLElBQUlHLFNBQVMsR0FBRyxLQUFLO0FBRXJCcEYsMENBQUk7QUFFSixTQUFTcUYsYUFBYUEsQ0FBQSxFQUFHO0VBQ3JCLE1BQU1DLGVBQWUsR0FBR0MsUUFBUSxDQUFDQyxhQUFhLENBQUMsb0JBQW9CLENBQUM7RUFDcEUsTUFBTUMsZUFBZSxHQUFHRixRQUFRLENBQUNDLGFBQWEsQ0FBQyxvQkFBb0IsQ0FBQztFQUVwRUYsZUFBZSxDQUFDSSxXQUFXLEdBQUcxRiwwQ0FBSSxDQUFDVSxlQUFlLENBQUMsQ0FBQyxDQUFDcUUsT0FBTyxDQUFDLENBQUM7RUFDOUQvRSwwQ0FBSSxDQUFDZ0IsZ0JBQWdCLENBQUMsQ0FBQztFQUN2QnlFLGVBQWUsQ0FBQ0MsV0FBVyxHQUFHMUYsMENBQUksQ0FBQ1UsZUFBZSxDQUFDLENBQUMsQ0FBQ3FFLE9BQU8sQ0FBQyxDQUFDO0VBQzlEL0UsMENBQUksQ0FBQ2dCLGdCQUFnQixDQUFDLENBQUM7QUFDM0I7QUFFQSxTQUFTMkUscUJBQXFCQSxDQUFBLEVBQUc7RUFDN0IsTUFBTUMsa0JBQWtCLEdBQUdMLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLHVCQUF1QixDQUFDO0VBQzFFSSxrQkFBa0IsQ0FBQ0YsV0FBVyxHQUFHLEVBQUU7RUFFbkMsSUFBSVIsZ0JBQWdCLEdBQUdsRiwwQ0FBSSxDQUFDYSxXQUFXLENBQUMsQ0FBQyxDQUFDb0UsY0FBYyxDQUFDLENBQUM7RUFFekRqRiwwQ0FBSSxDQUFDYyxrQkFBa0IsQ0FBQyxDQUFDLENBQUNpQyxRQUFRLENBQUMsQ0FBQyxDQUFFZSxPQUFPLENBQUVJLE9BQU8sSUFBSztJQUV4REEsT0FBTyxDQUFDSixPQUFPLENBQUVLLFVBQVUsSUFBSztNQUU1QixNQUFNMEIsU0FBUyxHQUFHTixRQUFRLENBQUNPLGFBQWEsQ0FBQyxLQUFLLENBQUM7TUFDL0NELFNBQVMsQ0FBQ0gsV0FBVyxHQUFHdkIsVUFBVTtNQUNsQzBCLFNBQVMsQ0FBQ0UsWUFBWSxDQUFDLElBQUksRUFBRTVCLFVBQVUsQ0FBQztNQUN4QzBCLFNBQVMsQ0FBQ0csU0FBUyxDQUFDQyxHQUFHLENBQUMsa0JBQWtCLENBQUM7TUFDM0NKLFNBQVMsQ0FBQ0ssS0FBSyxDQUFDQyxLQUFLLEdBQUcsS0FBSztNQUM3Qk4sU0FBUyxDQUFDSyxLQUFLLENBQUNFLE1BQU0sR0FBRyxLQUFLO01BRTlCLElBQUlwRywwQ0FBSSxDQUFDYyxrQkFBa0IsQ0FBQyxDQUFDLENBQUMyQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUNXLFFBQVEsQ0FBQ3lCLFNBQVMsQ0FBQ0gsV0FBVyxDQUFDLEVBQUU7UUFDOUVHLFNBQVMsQ0FBQ0csU0FBUyxDQUFDQyxHQUFHLENBQUMsZUFBZSxDQUFDO01BQzVDLENBQUMsTUFBTSxJQUFJakcsMENBQUksQ0FBQ2Msa0JBQWtCLENBQUMsQ0FBQyxDQUFDdUMsYUFBYSxDQUFDLENBQUMsQ0FBQ2UsUUFBUSxDQUFDeUIsU0FBUyxDQUFDSCxXQUFXLENBQUMsRUFBRTtRQUNsRkcsU0FBUyxDQUFDRyxTQUFTLENBQUNDLEdBQUcsQ0FBQyxZQUFZLENBQUM7TUFDekMsQ0FBQyxNQUFNLElBQUlqRywwQ0FBSSxDQUFDYyxrQkFBa0IsQ0FBQyxDQUFDLENBQUNxQyxXQUFXLENBQUMsQ0FBQyxDQUFDaUIsUUFBUSxDQUFDeUIsU0FBUyxDQUFDSCxXQUFXLENBQUMsRUFBRTtRQUNoRkcsU0FBUyxDQUFDRyxTQUFTLENBQUNDLEdBQUcsQ0FBQyxVQUFVLENBQUM7TUFDdkMsQ0FBQyxNQUFNLElBQUlqRywwQ0FBSSxDQUFDYyxrQkFBa0IsQ0FBQyxDQUFDLENBQUNrQyxjQUFjLENBQUMsQ0FBQyxDQUFDb0IsUUFBUSxDQUFDeUIsU0FBUyxDQUFDSCxXQUFXLENBQUMsRUFBRTtRQUNuRkcsU0FBUyxDQUFDRyxTQUFTLENBQUNDLEdBQUcsQ0FBQyxhQUFhLENBQUM7TUFDMUM7TUFFQSxTQUFTSSxlQUFlQSxDQUFBLEVBQUc7UUFFdkIsSUFBSVIsU0FBUyxDQUFDUyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUlwQixnQkFBZ0IsRUFBRTtVQUVsRCxJQUFJVyxTQUFTLENBQUNHLFNBQVMsQ0FBQ08sUUFBUSxDQUFDLGVBQWUsQ0FBQyxFQUFFO1lBQy9DVixTQUFTLENBQUNHLFNBQVMsQ0FBQ1EsTUFBTSxDQUFDLGVBQWUsQ0FBQztZQUMzQ1gsU0FBUyxDQUFDRyxTQUFTLENBQUNDLEdBQUcsQ0FBQyxVQUFVLENBQUM7VUFDdkM7VUFFQSxJQUFJSixTQUFTLENBQUNHLFNBQVMsQ0FBQ08sUUFBUSxDQUFDLFlBQVksQ0FBQyxFQUFFO1lBQzVDVixTQUFTLENBQUNHLFNBQVMsQ0FBQ1EsTUFBTSxDQUFDLFlBQVksQ0FBQztZQUN4Q1gsU0FBUyxDQUFDRyxTQUFTLENBQUNDLEdBQUcsQ0FBQyxhQUFhLENBQUM7VUFDMUM7VUFFQWpHLDBDQUFJLENBQUNjLGtCQUFrQixDQUFDLENBQUMsQ0FBQ3VELGFBQWEsQ0FBQ2EsZ0JBQWdCLENBQUM7VUFDekR1QixxQkFBcUIsQ0FBQyxDQUFDO1FBQzNCO01BQ0o7TUFFQSxJQUFJckIsU0FBUyxJQUFJLElBQUksRUFBRTtRQUNuQmlCLGVBQWUsQ0FBQyxDQUFDO01BQ3JCO01BRUFULGtCQUFrQixDQUFDYyxXQUFXLENBQUNiLFNBQVMsQ0FBQztJQUU3QyxDQUFDLENBQUM7RUFDTixDQUFDLENBQUM7QUFDTjtBQUVBLFNBQVNZLHFCQUFxQkEsQ0FBQSxFQUFHO0VBQzdCLE1BQU1FLGtCQUFrQixHQUFHcEIsUUFBUSxDQUFDQyxhQUFhLENBQUMsdUJBQXVCLENBQUM7RUFDMUVtQixrQkFBa0IsQ0FBQ2pCLFdBQVcsR0FBRyxFQUFFO0VBRWxDMUYsMENBQUksQ0FBQ2Usb0JBQW9CLENBQUMsQ0FBQyxDQUFDZ0MsUUFBUSxDQUFDLENBQUMsQ0FBRWUsT0FBTyxDQUFFSSxPQUFPLElBQUs7SUFFMURBLE9BQU8sQ0FBQ0osT0FBTyxDQUFFSyxVQUFVLElBQUs7TUFFNUIsTUFBTTBCLFNBQVMsR0FBR04sUUFBUSxDQUFDTyxhQUFhLENBQUMsS0FBSyxDQUFDO01BQy9DRCxTQUFTLENBQUNILFdBQVcsR0FBR3ZCLFVBQVU7TUFDbEMwQixTQUFTLENBQUNFLFlBQVksQ0FBQyxJQUFJLEVBQUU1QixVQUFVLENBQUM7TUFDeEMwQixTQUFTLENBQUNHLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLGtCQUFrQixDQUFDO01BQzNDSixTQUFTLENBQUNLLEtBQUssQ0FBQ0MsS0FBSyxHQUFHLEtBQUs7TUFDN0JOLFNBQVMsQ0FBQ0ssS0FBSyxDQUFDRSxNQUFNLEdBQUcsS0FBSztNQUU5QixJQUFJcEcsMENBQUksQ0FBQ2Usb0JBQW9CLENBQUMsQ0FBQyxDQUFDMEMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDVyxRQUFRLENBQUN5QixTQUFTLENBQUNILFdBQVcsQ0FBQyxFQUFFO1FBQ2hGRyxTQUFTLENBQUNHLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLG1CQUFtQixDQUFDO01BQ2hELENBQUMsTUFBTSxJQUFJakcsMENBQUksQ0FBQ2Usb0JBQW9CLENBQUMsQ0FBQyxDQUFDc0MsYUFBYSxDQUFDLENBQUMsQ0FBQ2UsUUFBUSxDQUFDeUIsU0FBUyxDQUFDSCxXQUFXLENBQUMsRUFBRTtRQUNwRkcsU0FBUyxDQUFDRyxTQUFTLENBQUNDLEdBQUcsQ0FBQyxZQUFZLENBQUM7TUFDekMsQ0FBQyxNQUFNLElBQUlqRywwQ0FBSSxDQUFDZSxvQkFBb0IsQ0FBQyxDQUFDLENBQUNvQyxXQUFXLENBQUMsQ0FBQyxDQUFDaUIsUUFBUSxDQUFDeUIsU0FBUyxDQUFDSCxXQUFXLENBQUMsRUFBRTtRQUNsRkcsU0FBUyxDQUFDRyxTQUFTLENBQUNDLEdBQUcsQ0FBQyxVQUFVLENBQUM7TUFDdkMsQ0FBQyxNQUFNLElBQUlqRywwQ0FBSSxDQUFDZSxvQkFBb0IsQ0FBQyxDQUFDLENBQUNpQyxjQUFjLENBQUMsQ0FBQyxDQUFDb0IsUUFBUSxDQUFDeUIsU0FBUyxDQUFDSCxXQUFXLENBQUMsRUFBRTtRQUNyRkcsU0FBUyxDQUFDRyxTQUFTLENBQUNDLEdBQUcsQ0FBQyxhQUFhLENBQUM7TUFDMUM7TUFFQSxTQUFTVyxpQkFBaUJBLENBQUEsRUFBRztRQUN6QixNQUFNQyxVQUFVLEdBQUd0QixRQUFRLENBQUN1QixnQkFBZ0IsQ0FBQyxtQkFBbUIsQ0FBQztRQUVqRUQsVUFBVSxDQUFDL0MsT0FBTyxDQUFFaUQsSUFBSSxJQUFLO1VBQ3pCQSxJQUFJLENBQUNDLFdBQVcsQ0FBQ0QsSUFBSSxDQUFDRSxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDMUMsQ0FBQyxDQUFDO01BRU47TUFFQSxTQUFTQyxpQkFBaUJBLENBQUEsRUFBRztRQUV6QixJQUFJckIsU0FBUyxDQUFDRyxTQUFTLENBQUNPLFFBQVEsQ0FBQyxVQUFVLENBQUMsRUFBRTtVQUMxQztRQUNKLENBQUMsTUFBTSxJQUFJVixTQUFTLENBQUNHLFNBQVMsQ0FBQ08sUUFBUSxDQUFDLGFBQWEsQ0FBQyxFQUFFO1VBQ3BEO1FBQ0o7UUFFQSxJQUFJVixTQUFTLENBQUNHLFNBQVMsQ0FBQ08sUUFBUSxDQUFDLG1CQUFtQixDQUFDLEVBQUU7VUFDbkRWLFNBQVMsQ0FBQ0csU0FBUyxDQUFDUSxNQUFNLENBQUMsbUJBQW1CLENBQUM7VUFDL0NYLFNBQVMsQ0FBQ0csU0FBUyxDQUFDQyxHQUFHLENBQUMsVUFBVSxDQUFDO1VBQ25DVyxpQkFBaUIsQ0FBQyxDQUFDO1FBQ3ZCO1FBRUEsSUFBSWYsU0FBUyxDQUFDRyxTQUFTLENBQUNPLFFBQVEsQ0FBQyxZQUFZLENBQUMsRUFBRTtVQUM1Q1YsU0FBUyxDQUFDRyxTQUFTLENBQUNRLE1BQU0sQ0FBQyxZQUFZLENBQUM7VUFDeENYLFNBQVMsQ0FBQ0csU0FBUyxDQUFDQyxHQUFHLENBQUMsYUFBYSxDQUFDO1VBQ3RDVyxpQkFBaUIsQ0FBQyxDQUFDO1FBQ3ZCO1FBRUEsSUFBSXhCLFNBQVMsSUFBSSxJQUFJLEVBQUU7VUFDbkJwRiwwQ0FBSSxDQUFDZSxvQkFBb0IsQ0FBQyxDQUFDLENBQUNzRCxhQUFhLENBQUN3QixTQUFTLENBQUNILFdBQVcsQ0FBQztVQUNoRUMscUJBQXFCLENBQUMsQ0FBQztRQUMzQjtNQUVKO01BRUFFLFNBQVMsQ0FBQ3NCLGdCQUFnQixDQUFDLE9BQU8sRUFBRUQsaUJBQWlCLENBQUM7TUFDdERQLGtCQUFrQixDQUFDRCxXQUFXLENBQUNiLFNBQVMsQ0FBQztJQUM3QyxDQUFDLENBQUM7RUFDTixDQUFDLENBQUM7QUFDTjtBQUVBLFNBQVN1Qix3QkFBd0JBLENBQUEsRUFBRztFQUNoQyxNQUFNeEIsa0JBQWtCLEdBQUdMLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLHVCQUF1QixDQUFDO0VBQzFFSSxrQkFBa0IsQ0FBQ0YsV0FBVyxHQUFHLEVBQUU7RUFFbkMsSUFBSTJCLE9BQU8sR0FBR3hILGlEQUFJLENBQUMsRUFBRSxDQUFDO0VBQ3RCLElBQUk0QixlQUFlLEdBQUc0RixPQUFPLENBQUMvRixXQUFXLENBQUNnRyxnQkFBZ0IsRUFBRSxDQUFDLENBQUM7RUFFOUQsU0FBU0MsZUFBZUEsQ0FBQSxFQUFHO0lBQ3ZCLE1BQU1DLGVBQWUsR0FBR2pDLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLG1CQUFtQixDQUFDO0lBQ25FZ0MsZUFBZSxDQUFDOUIsV0FBVyxHQUFHLEVBQUU7SUFDaEMsTUFBTStCLFNBQVMsR0FBR2xDLFFBQVEsQ0FBQ08sYUFBYSxDQUFDLFFBQVEsQ0FBQztJQUNsRDJCLFNBQVMsQ0FBQy9CLFdBQVcsR0FBRyxRQUFRO0lBRWhDK0IsU0FBUyxDQUFDTixnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsTUFBTTtNQUN0QyxJQUFJRyxnQkFBZ0IsSUFBSSxHQUFHLEVBQUU7UUFDekJBLGdCQUFnQixHQUFHLEdBQUc7TUFDMUIsQ0FBQyxNQUFNO1FBQ0hBLGdCQUFnQixHQUFHLEdBQUc7TUFDMUI7TUFFQUYsd0JBQXdCLENBQUMsQ0FBQztJQUM5QixDQUFDLENBQUM7SUFFRkksZUFBZSxDQUFDZCxXQUFXLENBQUNlLFNBQVMsQ0FBQztFQUMxQztFQUFDO0VBRURGLGVBQWUsQ0FBQyxDQUFDO0VBRWhCdkgsMENBQUksQ0FBQ2Msa0JBQWtCLENBQUMsQ0FBQyxDQUFDaUMsUUFBUSxDQUFDLENBQUMsQ0FBRWUsT0FBTyxDQUFFSSxPQUFPLElBQUs7SUFFeERBLE9BQU8sQ0FBQ0osT0FBTyxDQUFFSyxVQUFVLElBQUs7TUFFNUIsTUFBTTBCLFNBQVMsR0FBR04sUUFBUSxDQUFDTyxhQUFhLENBQUMsS0FBSyxDQUFDO01BQy9DRCxTQUFTLENBQUNILFdBQVcsR0FBR3ZCLFVBQVU7TUFDbEMwQixTQUFTLENBQUNFLFlBQVksQ0FBQyxJQUFJLEVBQUU1QixVQUFVLENBQUM7TUFDeEMwQixTQUFTLENBQUNHLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLHdCQUF3QixDQUFDO01BQ2pESixTQUFTLENBQUNLLEtBQUssQ0FBQ0MsS0FBSyxHQUFHLEtBQUs7TUFDN0JOLFNBQVMsQ0FBQ0ssS0FBSyxDQUFDRSxNQUFNLEdBQUcsS0FBSztNQUU5QixTQUFTc0IsaUJBQWlCQSxDQUFBLEVBQUc7UUFFekI3QixTQUFTLENBQUNzQixnQkFBZ0IsQ0FBQyxZQUFZLEVBQUUsTUFBTTtVQUMzQ3RCLFNBQVMsQ0FBQ0ssS0FBSyxDQUFDeUIsZUFBZSxHQUFHLFFBQVE7UUFDOUMsQ0FBQyxDQUFDO1FBRUY5QixTQUFTLENBQUNzQixnQkFBZ0IsQ0FBQyxZQUFZLEVBQUUsTUFBTTtVQUMzQ3RCLFNBQVMsQ0FBQ0ssS0FBSyxDQUFDeUIsZUFBZSxHQUFHLEVBQUU7UUFDeEMsQ0FBQyxDQUFDO01BRU47TUFFQSxTQUFTQyxrQkFBa0JBLENBQUEsRUFBRztRQUMxQi9CLFNBQVMsQ0FBQ3NCLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxNQUFNO1VBQ3RDRSxPQUFPLENBQUN4RixhQUFhLENBQUNnRSxTQUFTLENBQUNTLFlBQVksQ0FBQyxJQUFJLENBQUMsRUFBRWdCLGdCQUFnQixDQUFDO1VBQ3JFTyxXQUFXLENBQUN0SCxJQUFJLENBQUM4RyxPQUFPLENBQUM7VUFDekJySCwwQ0FBSSxDQUFDYyxrQkFBa0IsQ0FBQyxDQUFDLENBQUM4QyxVQUFVLENBQUNpRSxXQUFXLENBQUM7VUFDakQ3SCwwQ0FBSSxDQUFDYyxrQkFBa0IsQ0FBQyxDQUFDLENBQUNtRCxlQUFlLENBQUMsQ0FBQztVQUMzQzZELDJCQUEyQixDQUFDLENBQUM7VUFDN0I7UUFDSixDQUFDLENBQUM7TUFDTjtNQUVBLElBQUlyRyxlQUFlLENBQUMyQyxRQUFRLENBQUN5QixTQUFTLENBQUNTLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFO1FBQ3hEb0IsaUJBQWlCLENBQUMsQ0FBQztRQUNuQkUsa0JBQWtCLENBQUMsQ0FBQztNQUN4QjtNQUNBaEMsa0JBQWtCLENBQUNjLFdBQVcsQ0FBQ2IsU0FBUyxDQUFDO0lBQzdDLENBQUMsQ0FBQztFQUNOLENBQUMsQ0FBQztBQUNOO0FBRUEsU0FBU2lDLDJCQUEyQkEsQ0FBQSxFQUFFO0VBQ2xDLE1BQU1sQyxrQkFBa0IsR0FBR0wsUUFBUSxDQUFDQyxhQUFhLENBQUMsdUJBQXVCLENBQUM7RUFDMUVJLGtCQUFrQixDQUFDRixXQUFXLEdBQUcsRUFBRTtFQUVuQyxJQUFJcUMsVUFBVSxHQUFHbEksaURBQUksQ0FBQyxFQUFFLENBQUM7RUFDekIsSUFBSW1JLFNBQVMsR0FBR0QsVUFBVSxDQUFDekcsV0FBVyxDQUFDZ0csZ0JBQWdCLEVBQUUsQ0FBQyxDQUFDO0VBQzNELElBQUlXLGFBQWEsR0FBR2pJLDBDQUFJLENBQUNjLGtCQUFrQixDQUFDLENBQUMsQ0FBQzJDLGdCQUFnQixDQUFDLENBQUM7RUFDaEUsSUFBSWhDLGVBQWUsR0FBRyxFQUFFO0VBRXhCdUcsU0FBUyxDQUFDbEUsT0FBTyxDQUFDb0UsS0FBSyxJQUFJO0lBQ3ZCLElBQUksQ0FBRUQsYUFBYSxDQUFDN0QsUUFBUSxDQUFDOEQsS0FBSyxDQUFFLEVBQUU7TUFDbEN6RyxlQUFlLENBQUNsQixJQUFJLENBQUMySCxLQUFLLENBQUM7SUFDL0I7RUFDSixDQUFDLENBQUM7RUFFRixTQUFTWCxlQUFlQSxDQUFBLEVBQUc7SUFDdkIsTUFBTUMsZUFBZSxHQUFHakMsUUFBUSxDQUFDQyxhQUFhLENBQUMsbUJBQW1CLENBQUM7SUFDbkVnQyxlQUFlLENBQUM5QixXQUFXLEdBQUcsRUFBRTtJQUNoQyxNQUFNK0IsU0FBUyxHQUFHbEMsUUFBUSxDQUFDTyxhQUFhLENBQUMsUUFBUSxDQUFDO0lBQ2xEMkIsU0FBUyxDQUFDL0IsV0FBVyxHQUFHLFFBQVE7SUFFaEMrQixTQUFTLENBQUNOLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxNQUFNO01BQ3RDLElBQUlHLGdCQUFnQixJQUFJLEdBQUcsRUFBRTtRQUN6QkEsZ0JBQWdCLEdBQUcsR0FBRztNQUMxQixDQUFDLE1BQU07UUFDSEEsZ0JBQWdCLEdBQUcsR0FBRztNQUMxQjtNQUVBUSwyQkFBMkIsQ0FBQyxDQUFDO0lBQ2pDLENBQUMsQ0FBQztJQUVGTixlQUFlLENBQUNkLFdBQVcsQ0FBQ2UsU0FBUyxDQUFDO0VBQzFDO0VBQUM7RUFFREYsZUFBZSxDQUFDLENBQUM7RUFFaEJ2SCwwQ0FBSSxDQUFDYyxrQkFBa0IsQ0FBQyxDQUFDLENBQUNpQyxRQUFRLENBQUMsQ0FBQyxDQUFFZSxPQUFPLENBQUVJLE9BQU8sSUFBSztJQUV4REEsT0FBTyxDQUFDSixPQUFPLENBQUVLLFVBQVUsSUFBSztNQUU1QixNQUFNMEIsU0FBUyxHQUFHTixRQUFRLENBQUNPLGFBQWEsQ0FBQyxLQUFLLENBQUM7TUFDL0NELFNBQVMsQ0FBQ0gsV0FBVyxHQUFHdkIsVUFBVTtNQUNsQzBCLFNBQVMsQ0FBQ0UsWUFBWSxDQUFDLElBQUksRUFBRTVCLFVBQVUsQ0FBQztNQUN4QzBCLFNBQVMsQ0FBQ0csU0FBUyxDQUFDQyxHQUFHLENBQUMsd0JBQXdCLENBQUM7TUFDakRKLFNBQVMsQ0FBQ0ssS0FBSyxDQUFDQyxLQUFLLEdBQUcsS0FBSztNQUM3Qk4sU0FBUyxDQUFDSyxLQUFLLENBQUNFLE1BQU0sR0FBRyxLQUFLO01BRTlCLElBQUlwRywwQ0FBSSxDQUFDYyxrQkFBa0IsQ0FBQyxDQUFDLENBQUMyQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUNXLFFBQVEsQ0FBQ3lCLFNBQVMsQ0FBQ0gsV0FBVyxDQUFDLEVBQUU7UUFDOUVHLFNBQVMsQ0FBQ0csU0FBUyxDQUFDQyxHQUFHLENBQUMsZUFBZSxDQUFDO01BQzVDO01BRUEsU0FBU2tDLG9CQUFvQkEsQ0FBQSxFQUFHO1FBRTVCdEMsU0FBUyxDQUFDc0IsZ0JBQWdCLENBQUMsWUFBWSxFQUFFLE1BQU07VUFDM0N0QixTQUFTLENBQUNLLEtBQUssQ0FBQ3lCLGVBQWUsR0FBRyxRQUFRO1FBQzlDLENBQUMsQ0FBQztRQUVGOUIsU0FBUyxDQUFDc0IsZ0JBQWdCLENBQUMsWUFBWSxFQUFFLE1BQU07VUFDM0N0QixTQUFTLENBQUNLLEtBQUssQ0FBQ3lCLGVBQWUsR0FBRyxFQUFFO1FBQ3hDLENBQUMsQ0FBQztNQUVOO01BRUEsU0FBU1MscUJBQXFCQSxDQUFBLEVBQUc7UUFDN0J2QyxTQUFTLENBQUNzQixnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsTUFBTTtVQUN0Q1ksVUFBVSxDQUFDM0YsZ0JBQWdCLENBQUN5RCxTQUFTLENBQUNTLFlBQVksQ0FBQyxJQUFJLENBQUMsRUFBRWdCLGdCQUFnQixDQUFDO1VBQzNFTyxXQUFXLENBQUN0SCxJQUFJLENBQUN3SCxVQUFVLENBQUM7VUFDNUIvSCwwQ0FBSSxDQUFDYyxrQkFBa0IsQ0FBQyxDQUFDLENBQUM4QyxVQUFVLENBQUNpRSxXQUFXLENBQUM7VUFDakQ3SCwwQ0FBSSxDQUFDYyxrQkFBa0IsQ0FBQyxDQUFDLENBQUNtRCxlQUFlLENBQUMsQ0FBQztVQUMzQ29FLDBCQUEwQixDQUFDLENBQUM7VUFDNUI7UUFDSixDQUFDLENBQUM7TUFDTjtNQUVBLElBQUk1RyxlQUFlLENBQUMyQyxRQUFRLENBQUN5QixTQUFTLENBQUNTLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFO1FBQ3hENkIsb0JBQW9CLENBQUMsQ0FBQztRQUN0QkMscUJBQXFCLENBQUMsQ0FBQztNQUMzQjtNQUNBeEMsa0JBQWtCLENBQUNjLFdBQVcsQ0FBQ2IsU0FBUyxDQUFDO0lBQzdDLENBQUMsQ0FBQztFQUNOLENBQUMsQ0FBQztBQUNOO0FBRUEsU0FBU3dDLDBCQUEwQkEsQ0FBQSxFQUFHO0VBQ2xDLE1BQU16QyxrQkFBa0IsR0FBR0wsUUFBUSxDQUFDQyxhQUFhLENBQUMsdUJBQXVCLENBQUM7RUFDMUVJLGtCQUFrQixDQUFDRixXQUFXLEdBQUcsRUFBRTtFQUVuQyxJQUFJNEMsU0FBUyxHQUFHekksaURBQUksQ0FBQyxFQUFFLENBQUM7RUFDeEIsSUFBSW1JLFNBQVMsR0FBR00sU0FBUyxDQUFDaEgsV0FBVyxDQUFDZ0csZ0JBQWdCLEVBQUUsQ0FBQyxDQUFDO0VBQzFELElBQUlXLGFBQWEsR0FBR2pJLDBDQUFJLENBQUNjLGtCQUFrQixDQUFDLENBQUMsQ0FBQzJDLGdCQUFnQixDQUFDLENBQUM7RUFDaEUsSUFBSWhDLGVBQWUsR0FBRyxFQUFFO0VBRXhCdUcsU0FBUyxDQUFDbEUsT0FBTyxDQUFDb0UsS0FBSyxJQUFJO0lBQ3ZCLElBQUksQ0FBRUQsYUFBYSxDQUFDN0QsUUFBUSxDQUFDOEQsS0FBSyxDQUFFLEVBQUU7TUFDbEN6RyxlQUFlLENBQUNsQixJQUFJLENBQUMySCxLQUFLLENBQUM7SUFDL0I7RUFDSixDQUFDLENBQUM7RUFFRixTQUFTWCxlQUFlQSxDQUFBLEVBQUc7SUFDdkIsTUFBTUMsZUFBZSxHQUFHakMsUUFBUSxDQUFDQyxhQUFhLENBQUMsbUJBQW1CLENBQUM7SUFDbkVnQyxlQUFlLENBQUM5QixXQUFXLEdBQUcsRUFBRTtJQUNoQyxNQUFNK0IsU0FBUyxHQUFHbEMsUUFBUSxDQUFDTyxhQUFhLENBQUMsUUFBUSxDQUFDO0lBQ2xEMkIsU0FBUyxDQUFDL0IsV0FBVyxHQUFHLFFBQVE7SUFFaEMrQixTQUFTLENBQUNOLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxNQUFNO01BQ3RDLElBQUlHLGdCQUFnQixJQUFJLEdBQUcsRUFBRTtRQUN6QkEsZ0JBQWdCLEdBQUcsR0FBRztNQUMxQixDQUFDLE1BQU07UUFDSEEsZ0JBQWdCLEdBQUcsR0FBRztNQUMxQjtNQUVBZSwwQkFBMEIsQ0FBQyxDQUFDO0lBQ2hDLENBQUMsQ0FBQztJQUVGYixlQUFlLENBQUNkLFdBQVcsQ0FBQ2UsU0FBUyxDQUFDO0VBQzFDO0VBQUM7RUFFREYsZUFBZSxDQUFDLENBQUM7RUFFaEJ2SCwwQ0FBSSxDQUFDYyxrQkFBa0IsQ0FBQyxDQUFDLENBQUNpQyxRQUFRLENBQUMsQ0FBQyxDQUFFZSxPQUFPLENBQUVJLE9BQU8sSUFBSztJQUV4REEsT0FBTyxDQUFDSixPQUFPLENBQUVLLFVBQVUsSUFBSztNQUU1QixNQUFNMEIsU0FBUyxHQUFHTixRQUFRLENBQUNPLGFBQWEsQ0FBQyxLQUFLLENBQUM7TUFDL0NELFNBQVMsQ0FBQ0gsV0FBVyxHQUFHdkIsVUFBVTtNQUNsQzBCLFNBQVMsQ0FBQ0UsWUFBWSxDQUFDLElBQUksRUFBRTVCLFVBQVUsQ0FBQztNQUN4QzBCLFNBQVMsQ0FBQ0csU0FBUyxDQUFDQyxHQUFHLENBQUMsd0JBQXdCLENBQUM7TUFDakRKLFNBQVMsQ0FBQ0ssS0FBSyxDQUFDQyxLQUFLLEdBQUcsS0FBSztNQUM3Qk4sU0FBUyxDQUFDSyxLQUFLLENBQUNFLE1BQU0sR0FBRyxLQUFLO01BRTlCLElBQUlwRywwQ0FBSSxDQUFDYyxrQkFBa0IsQ0FBQyxDQUFDLENBQUMyQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUNXLFFBQVEsQ0FBQ3lCLFNBQVMsQ0FBQ0gsV0FBVyxDQUFDLEVBQUU7UUFDOUVHLFNBQVMsQ0FBQ0csU0FBUyxDQUFDQyxHQUFHLENBQUMsZUFBZSxDQUFDO01BQzVDO01BRUEsU0FBU3NDLG1CQUFtQkEsQ0FBQSxFQUFHO1FBRTNCMUMsU0FBUyxDQUFDc0IsZ0JBQWdCLENBQUMsWUFBWSxFQUFFLE1BQU07VUFDM0N0QixTQUFTLENBQUNLLEtBQUssQ0FBQ3lCLGVBQWUsR0FBRyxRQUFRO1FBQzlDLENBQUMsQ0FBQztRQUVGOUIsU0FBUyxDQUFDc0IsZ0JBQWdCLENBQUMsWUFBWSxFQUFFLE1BQU07VUFDM0N0QixTQUFTLENBQUNLLEtBQUssQ0FBQ3lCLGVBQWUsR0FBRyxFQUFFO1FBQ3hDLENBQUMsQ0FBQztNQUVOO01BRUEsU0FBU2Esb0JBQW9CQSxDQUFBLEVBQUc7UUFDNUIzQyxTQUFTLENBQUNzQixnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsTUFBTTtVQUN0Q21CLFNBQVMsQ0FBQ2pHLGVBQWUsQ0FBQ3dELFNBQVMsQ0FBQ1MsWUFBWSxDQUFDLElBQUksQ0FBQyxFQUFFZ0IsZ0JBQWdCLENBQUM7VUFDekVPLFdBQVcsQ0FBQ3RILElBQUksQ0FBQytILFNBQVMsQ0FBQztVQUMzQnRJLDBDQUFJLENBQUNjLGtCQUFrQixDQUFDLENBQUMsQ0FBQzhDLFVBQVUsQ0FBQ2lFLFdBQVcsQ0FBQztVQUNqRDdILDBDQUFJLENBQUNjLGtCQUFrQixDQUFDLENBQUMsQ0FBQ21ELGVBQWUsQ0FBQyxDQUFDO1VBQzNDd0UsMEJBQTBCLENBQUMsQ0FBQztVQUM1QjtRQUNKLENBQUMsQ0FBQztNQUNOO01BRUEsSUFBSWhILGVBQWUsQ0FBQzJDLFFBQVEsQ0FBQ3lCLFNBQVMsQ0FBQ1MsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUU7UUFDeERpQyxtQkFBbUIsQ0FBQyxDQUFDO1FBQ3JCQyxvQkFBb0IsQ0FBQyxDQUFDO01BQzFCO01BQ0E1QyxrQkFBa0IsQ0FBQ2MsV0FBVyxDQUFDYixTQUFTLENBQUM7SUFDN0MsQ0FBQyxDQUFDO0VBQ04sQ0FBQyxDQUFDO0FBQ047QUFFQSxTQUFTNEMsMEJBQTBCQSxDQUFBLEVBQUc7RUFDbEMsTUFBTTdDLGtCQUFrQixHQUFHTCxRQUFRLENBQUNDLGFBQWEsQ0FBQyx1QkFBdUIsQ0FBQztFQUMxRUksa0JBQWtCLENBQUNGLFdBQVcsR0FBRyxFQUFFO0VBRW5DLElBQUlnRCxTQUFTLEdBQUc3SSxpREFBSSxDQUFDLEVBQUUsQ0FBQztFQUN4QixJQUFJbUksU0FBUyxHQUFHVSxTQUFTLENBQUNwSCxXQUFXLENBQUNnRyxnQkFBZ0IsRUFBRSxDQUFDLENBQUM7RUFDMUQsSUFBSVcsYUFBYSxHQUFHakksMENBQUksQ0FBQ2Msa0JBQWtCLENBQUMsQ0FBQyxDQUFDMkMsZ0JBQWdCLENBQUMsQ0FBQztFQUNoRSxJQUFJaEMsZUFBZSxHQUFHLEVBQUU7RUFFeEJ1RyxTQUFTLENBQUNsRSxPQUFPLENBQUNvRSxLQUFLLElBQUk7SUFDdkIsSUFBSSxDQUFFRCxhQUFhLENBQUM3RCxRQUFRLENBQUM4RCxLQUFLLENBQUUsRUFBRTtNQUNsQ3pHLGVBQWUsQ0FBQ2xCLElBQUksQ0FBQzJILEtBQUssQ0FBQztJQUMvQjtFQUNKLENBQUMsQ0FBQztFQUVGLFNBQVNYLGVBQWVBLENBQUEsRUFBRztJQUN2QixNQUFNQyxlQUFlLEdBQUdqQyxRQUFRLENBQUNDLGFBQWEsQ0FBQyxtQkFBbUIsQ0FBQztJQUNuRWdDLGVBQWUsQ0FBQzlCLFdBQVcsR0FBRyxFQUFFO0lBQ2hDLE1BQU0rQixTQUFTLEdBQUdsQyxRQUFRLENBQUNPLGFBQWEsQ0FBQyxRQUFRLENBQUM7SUFDbEQyQixTQUFTLENBQUMvQixXQUFXLEdBQUcsUUFBUTtJQUVoQytCLFNBQVMsQ0FBQ04sZ0JBQWdCLENBQUMsT0FBTyxFQUFFLE1BQU07TUFDdEMsSUFBSUcsZ0JBQWdCLElBQUksR0FBRyxFQUFFO1FBQ3pCQSxnQkFBZ0IsR0FBRyxHQUFHO01BQzFCLENBQUMsTUFBTTtRQUNIQSxnQkFBZ0IsR0FBRyxHQUFHO01BQzFCO01BRUFtQiwwQkFBMEIsQ0FBQyxDQUFDO0lBQ2hDLENBQUMsQ0FBQztJQUVGakIsZUFBZSxDQUFDZCxXQUFXLENBQUNlLFNBQVMsQ0FBQztFQUMxQztFQUFDO0VBRURGLGVBQWUsQ0FBQyxDQUFDO0VBRWhCdkgsMENBQUksQ0FBQ2Msa0JBQWtCLENBQUMsQ0FBQyxDQUFDaUMsUUFBUSxDQUFDLENBQUMsQ0FBRWUsT0FBTyxDQUFFSSxPQUFPLElBQUs7SUFFeERBLE9BQU8sQ0FBQ0osT0FBTyxDQUFFSyxVQUFVLElBQUs7TUFFNUIsTUFBTTBCLFNBQVMsR0FBR04sUUFBUSxDQUFDTyxhQUFhLENBQUMsS0FBSyxDQUFDO01BQy9DRCxTQUFTLENBQUNILFdBQVcsR0FBR3ZCLFVBQVU7TUFDbEMwQixTQUFTLENBQUNFLFlBQVksQ0FBQyxJQUFJLEVBQUU1QixVQUFVLENBQUM7TUFDeEMwQixTQUFTLENBQUNHLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLHdCQUF3QixDQUFDO01BQ2pESixTQUFTLENBQUNLLEtBQUssQ0FBQ0MsS0FBSyxHQUFHLEtBQUs7TUFDN0JOLFNBQVMsQ0FBQ0ssS0FBSyxDQUFDRSxNQUFNLEdBQUcsS0FBSztNQUU5QixJQUFJcEcsMENBQUksQ0FBQ2Msa0JBQWtCLENBQUMsQ0FBQyxDQUFDMkMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDVyxRQUFRLENBQUN5QixTQUFTLENBQUNILFdBQVcsQ0FBQyxFQUFFO1FBQzlFRyxTQUFTLENBQUNHLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLGVBQWUsQ0FBQztNQUM1QztNQUVBLFNBQVMwQyxtQkFBbUJBLENBQUEsRUFBRztRQUUzQjlDLFNBQVMsQ0FBQ3NCLGdCQUFnQixDQUFDLFlBQVksRUFBRSxNQUFNO1VBQzNDdEIsU0FBUyxDQUFDSyxLQUFLLENBQUN5QixlQUFlLEdBQUcsUUFBUTtRQUM5QyxDQUFDLENBQUM7UUFFRjlCLFNBQVMsQ0FBQ3NCLGdCQUFnQixDQUFDLFlBQVksRUFBRSxNQUFNO1VBQzNDdEIsU0FBUyxDQUFDSyxLQUFLLENBQUN5QixlQUFlLEdBQUcsRUFBRTtRQUN4QyxDQUFDLENBQUM7TUFFTjtNQUVBLFNBQVNpQixvQkFBb0JBLENBQUEsRUFBRztRQUM1Qi9DLFNBQVMsQ0FBQ3NCLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxNQUFNO1VBQ3RDdUIsU0FBUyxDQUFDcEcsZUFBZSxDQUFDdUQsU0FBUyxDQUFDUyxZQUFZLENBQUMsSUFBSSxDQUFDLEVBQUVnQixnQkFBZ0IsQ0FBQztVQUN6RU8sV0FBVyxDQUFDdEgsSUFBSSxDQUFDbUksU0FBUyxDQUFDO1VBQzNCMUksMENBQUksQ0FBQ2Msa0JBQWtCLENBQUMsQ0FBQyxDQUFDOEMsVUFBVSxDQUFDaUUsV0FBVyxDQUFDO1VBQ2pEN0gsMENBQUksQ0FBQ2Msa0JBQWtCLENBQUMsQ0FBQyxDQUFDbUQsZUFBZSxDQUFDLENBQUM7VUFDM0M0RSx1QkFBdUIsQ0FBQyxDQUFDO1VBQ3pCO1FBQ0osQ0FBQyxDQUFDO01BQ047TUFFQSxJQUFJcEgsZUFBZSxDQUFDMkMsUUFBUSxDQUFDeUIsU0FBUyxDQUFDUyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRTtRQUN4RHFDLG1CQUFtQixDQUFDLENBQUM7UUFDckJDLG9CQUFvQixDQUFDLENBQUM7TUFDMUI7TUFDQWhELGtCQUFrQixDQUFDYyxXQUFXLENBQUNiLFNBQVMsQ0FBQztJQUM3QyxDQUFDLENBQUM7RUFDTixDQUFDLENBQUM7QUFDTjtBQUVBLFNBQVNnRCx1QkFBdUJBLENBQUEsRUFBRztFQUMvQixNQUFNakQsa0JBQWtCLEdBQUdMLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLHVCQUF1QixDQUFDO0VBQzFFSSxrQkFBa0IsQ0FBQ0YsV0FBVyxHQUFHLEVBQUU7RUFFbkMsSUFBSW9ELE1BQU0sR0FBR2pKLGlEQUFJLENBQUMsRUFBRSxDQUFDO0VBQ3JCLElBQUltSSxTQUFTLEdBQUdjLE1BQU0sQ0FBQ3hILFdBQVcsQ0FBQ2dHLGdCQUFnQixFQUFFLENBQUMsQ0FBQztFQUN2RCxJQUFJVyxhQUFhLEdBQUdqSSwwQ0FBSSxDQUFDYyxrQkFBa0IsQ0FBQyxDQUFDLENBQUMyQyxnQkFBZ0IsQ0FBQyxDQUFDO0VBQ2hFLElBQUloQyxlQUFlLEdBQUcsRUFBRTtFQUV4QnVHLFNBQVMsQ0FBQ2xFLE9BQU8sQ0FBQ29FLEtBQUssSUFBSTtJQUN2QixJQUFJLENBQUVELGFBQWEsQ0FBQzdELFFBQVEsQ0FBQzhELEtBQUssQ0FBRSxFQUFFO01BQ2xDekcsZUFBZSxDQUFDbEIsSUFBSSxDQUFDMkgsS0FBSyxDQUFDO0lBQy9CO0VBQ0osQ0FBQyxDQUFDO0VBRUYsU0FBU1gsZUFBZUEsQ0FBQSxFQUFHO0lBQ3ZCLE1BQU1DLGVBQWUsR0FBR2pDLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLG1CQUFtQixDQUFDO0lBQ25FZ0MsZUFBZSxDQUFDOUIsV0FBVyxHQUFHLEVBQUU7SUFDaEMsTUFBTStCLFNBQVMsR0FBR2xDLFFBQVEsQ0FBQ08sYUFBYSxDQUFDLFFBQVEsQ0FBQztJQUNsRDJCLFNBQVMsQ0FBQy9CLFdBQVcsR0FBRyxRQUFRO0lBRWhDK0IsU0FBUyxDQUFDTixnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsTUFBTTtNQUN0QyxJQUFJRyxnQkFBZ0IsSUFBSSxHQUFHLEVBQUU7UUFDekJBLGdCQUFnQixHQUFHLEdBQUc7TUFDMUIsQ0FBQyxNQUFNO1FBQ0hBLGdCQUFnQixHQUFHLEdBQUc7TUFDMUI7TUFFQXVCLHVCQUF1QixDQUFDLENBQUM7SUFDN0IsQ0FBQyxDQUFDO0lBRUZyQixlQUFlLENBQUNkLFdBQVcsQ0FBQ2UsU0FBUyxDQUFDO0VBQzFDO0VBQUM7RUFFREYsZUFBZSxDQUFDLENBQUM7RUFFaEJ2SCwwQ0FBSSxDQUFDYyxrQkFBa0IsQ0FBQyxDQUFDLENBQUNpQyxRQUFRLENBQUMsQ0FBQyxDQUFFZSxPQUFPLENBQUVJLE9BQU8sSUFBSztJQUV4REEsT0FBTyxDQUFDSixPQUFPLENBQUVLLFVBQVUsSUFBSztNQUU1QixNQUFNMEIsU0FBUyxHQUFHTixRQUFRLENBQUNPLGFBQWEsQ0FBQyxLQUFLLENBQUM7TUFDL0NELFNBQVMsQ0FBQ0gsV0FBVyxHQUFHdkIsVUFBVTtNQUNsQzBCLFNBQVMsQ0FBQ0UsWUFBWSxDQUFDLElBQUksRUFBRTVCLFVBQVUsQ0FBQztNQUN4QzBCLFNBQVMsQ0FBQ0csU0FBUyxDQUFDQyxHQUFHLENBQUMsd0JBQXdCLENBQUM7TUFDakRKLFNBQVMsQ0FBQ0ssS0FBSyxDQUFDQyxLQUFLLEdBQUcsS0FBSztNQUM3Qk4sU0FBUyxDQUFDSyxLQUFLLENBQUNFLE1BQU0sR0FBRyxLQUFLO01BRTlCLElBQUlwRywwQ0FBSSxDQUFDYyxrQkFBa0IsQ0FBQyxDQUFDLENBQUMyQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUNXLFFBQVEsQ0FBQ3lCLFNBQVMsQ0FBQ0gsV0FBVyxDQUFDLEVBQUU7UUFDOUVHLFNBQVMsQ0FBQ0csU0FBUyxDQUFDQyxHQUFHLENBQUMsZUFBZSxDQUFDO01BQzVDO01BRUEsU0FBUzhDLGdCQUFnQkEsQ0FBQSxFQUFHO1FBRXhCbEQsU0FBUyxDQUFDc0IsZ0JBQWdCLENBQUMsWUFBWSxFQUFFLE1BQU07VUFDM0N0QixTQUFTLENBQUNLLEtBQUssQ0FBQ3lCLGVBQWUsR0FBRyxRQUFRO1FBQzlDLENBQUMsQ0FBQztRQUVGOUIsU0FBUyxDQUFDc0IsZ0JBQWdCLENBQUMsWUFBWSxFQUFFLE1BQU07VUFDM0N0QixTQUFTLENBQUNLLEtBQUssQ0FBQ3lCLGVBQWUsR0FBRyxFQUFFO1FBQ3hDLENBQUMsQ0FBQztNQUVOO01BRUEsU0FBU3FCLGlCQUFpQkEsQ0FBQSxFQUFHO1FBQ3pCbkQsU0FBUyxDQUFDc0IsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLE1BQU07VUFDdEMyQixNQUFNLENBQUN2RyxZQUFZLENBQUNzRCxTQUFTLENBQUNTLFlBQVksQ0FBQyxJQUFJLENBQUMsRUFBRWdCLGdCQUFnQixDQUFDO1VBQ25FTyxXQUFXLENBQUN0SCxJQUFJLENBQUN1SSxNQUFNLENBQUM7VUFDeEI5SSwwQ0FBSSxDQUFDYyxrQkFBa0IsQ0FBQyxDQUFDLENBQUM4QyxVQUFVLENBQUNpRSxXQUFXLENBQUM7VUFDakQ3SCwwQ0FBSSxDQUFDYyxrQkFBa0IsQ0FBQyxDQUFDLENBQUNtRCxlQUFlLENBQUMsQ0FBQztVQUMzQ21CLFNBQVMsR0FBRyxJQUFJO1VBQ2hCTyxxQkFBcUIsQ0FBQyxDQUFDO1VBQ3ZCO1FBQ0osQ0FBQyxDQUFDO01BQ047TUFFQSxJQUFJbEUsZUFBZSxDQUFDMkMsUUFBUSxDQUFDeUIsU0FBUyxDQUFDUyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRTtRQUN4RHlDLGdCQUFnQixDQUFDLENBQUM7UUFDbEJDLGlCQUFpQixDQUFDLENBQUM7TUFDdkI7TUFDQXBELGtCQUFrQixDQUFDYyxXQUFXLENBQUNiLFNBQVMsQ0FBQztJQUM3QyxDQUFDLENBQUM7RUFDTixDQUFDLENBQUM7QUFDTjtBQUVBLElBQUl5QixnQkFBZ0IsR0FBRyxHQUFHO0FBRTFCLElBQUlPLFdBQVcsR0FBRyxFQUFFO0FBRXBCLElBQUlvQixhQUFhLEdBQUcsRUFBRTtBQUV0QixTQUFTQyxnQkFBZ0JBLENBQUEsRUFBRztFQUV4QmxKLDBDQUFJLENBQUNlLG9CQUFvQixDQUFDLENBQUMsQ0FBQ2tELGVBQWUsQ0FBQyxDQUFDO0VBRTdDLElBQUlvRCxPQUFPLEdBQUd4SCxpREFBSSxDQUFDLEVBQUUsQ0FBQztFQUN0QndILE9BQU8sQ0FBQ3hGLGFBQWEsQ0FBQ00sTUFBTSxDQUFDLEdBQUcsQ0FBQyxFQUFFbkMsMENBQUksQ0FBQ2Usb0JBQW9CLENBQUMsQ0FBQyxDQUFDMkQsbUJBQW1CLENBQUMsQ0FBQyxDQUFDO0VBQ3JGdUUsYUFBYSxDQUFDMUksSUFBSSxDQUFDOEcsT0FBTyxDQUFDO0VBRTNCckgsMENBQUksQ0FBQ2Usb0JBQW9CLENBQUMsQ0FBQyxDQUFDNkMsVUFBVSxDQUFDcUYsYUFBYSxDQUFDO0VBQ3JEakosMENBQUksQ0FBQ2Usb0JBQW9CLENBQUMsQ0FBQyxDQUFDa0QsZUFBZSxDQUFDLENBQUM7RUFHN0MsSUFBSThELFVBQVUsR0FBR2xJLGlEQUFJLENBQUMsRUFBRSxDQUFDO0VBRXpCLE9BQU9HLDBDQUFJLENBQUNlLG9CQUFvQixDQUFDLENBQUMsQ0FBQzZELGVBQWUsQ0FBQ21ELFVBQVUsQ0FBQzVHLFdBQVcsQ0FBQyxDQUFDLENBQUMsRUFBRTtJQUUxRTRHLFVBQVUsR0FBR2xJLGlEQUFJLENBQUMsRUFBRSxDQUFDO0lBQ3JCa0ksVUFBVSxDQUFDM0YsZ0JBQWdCLENBQUNELE1BQU0sQ0FBQyxHQUFHLENBQUMsRUFBRW5DLDBDQUFJLENBQUNlLG9CQUFvQixDQUFDLENBQUMsQ0FBQzJELG1CQUFtQixDQUFDLENBQUMsQ0FBQztFQUUvRjtFQUVBdUUsYUFBYSxDQUFDMUksSUFBSSxDQUFDd0gsVUFBVSxDQUFDO0VBQzlCL0gsMENBQUksQ0FBQ2Usb0JBQW9CLENBQUMsQ0FBQyxDQUFDNkMsVUFBVSxDQUFDcUYsYUFBYSxDQUFDO0VBQ3JEakosMENBQUksQ0FBQ2Usb0JBQW9CLENBQUMsQ0FBQyxDQUFDa0QsZUFBZSxDQUFDLENBQUM7RUFHN0MsSUFBSXFFLFNBQVMsR0FBR3pJLGlEQUFJLENBQUMsRUFBRSxDQUFDO0VBRXhCLE9BQU9HLDBDQUFJLENBQUNlLG9CQUFvQixDQUFDLENBQUMsQ0FBQzZELGVBQWUsQ0FBQzBELFNBQVMsQ0FBQ25ILFdBQVcsQ0FBQyxDQUFDLENBQUMsRUFBRTtJQUV6RW1ILFNBQVMsR0FBR3pJLGlEQUFJLENBQUMsRUFBRSxDQUFDO0lBQ3BCeUksU0FBUyxDQUFDakcsZUFBZSxDQUFDRixNQUFNLENBQUMsR0FBRyxDQUFDLEVBQUVuQywwQ0FBSSxDQUFDZSxvQkFBb0IsQ0FBQyxDQUFDLENBQUMyRCxtQkFBbUIsQ0FBQyxDQUFDLENBQUM7RUFFN0Y7RUFFQXVFLGFBQWEsQ0FBQzFJLElBQUksQ0FBQytILFNBQVMsQ0FBQztFQUM3QnRJLDBDQUFJLENBQUNlLG9CQUFvQixDQUFDLENBQUMsQ0FBQzZDLFVBQVUsQ0FBQ3FGLGFBQWEsQ0FBQztFQUNyRGpKLDBDQUFJLENBQUNlLG9CQUFvQixDQUFDLENBQUMsQ0FBQ2tELGVBQWUsQ0FBQyxDQUFDO0VBRTdDLElBQUl5RSxTQUFTLEdBQUc3SSxpREFBSSxDQUFDLEVBQUUsQ0FBQztFQUV4QixPQUFPRywwQ0FBSSxDQUFDZSxvQkFBb0IsQ0FBQyxDQUFDLENBQUM2RCxlQUFlLENBQUM4RCxTQUFTLENBQUN2SCxXQUFXLENBQUMsQ0FBQyxDQUFDLEVBQUU7SUFFekV1SCxTQUFTLEdBQUc3SSxpREFBSSxDQUFDLEVBQUUsQ0FBQztJQUNwQjZJLFNBQVMsQ0FBQ3BHLGVBQWUsQ0FBQ0gsTUFBTSxDQUFDLEdBQUcsQ0FBQyxFQUFFbkMsMENBQUksQ0FBQ2Usb0JBQW9CLENBQUMsQ0FBQyxDQUFDMkQsbUJBQW1CLENBQUMsQ0FBQyxDQUFDO0VBRTdGO0VBRUF1RSxhQUFhLENBQUMxSSxJQUFJLENBQUNtSSxTQUFTLENBQUM7RUFDN0IxSSwwQ0FBSSxDQUFDZSxvQkFBb0IsQ0FBQyxDQUFDLENBQUM2QyxVQUFVLENBQUNxRixhQUFhLENBQUM7RUFDckRqSiwwQ0FBSSxDQUFDZSxvQkFBb0IsQ0FBQyxDQUFDLENBQUNrRCxlQUFlLENBQUMsQ0FBQztFQUU3QyxJQUFJNkUsTUFBTSxHQUFHakosaURBQUksQ0FBQyxFQUFFLENBQUM7RUFFckIsT0FBT0csMENBQUksQ0FBQ2Usb0JBQW9CLENBQUMsQ0FBQyxDQUFDNkQsZUFBZSxDQUFDa0UsTUFBTSxDQUFDM0gsV0FBVyxDQUFDLENBQUMsQ0FBQyxFQUFFO0lBRXRFMkgsTUFBTSxHQUFHakosaURBQUksQ0FBQyxFQUFFLENBQUM7SUFDakJpSixNQUFNLENBQUN2RyxZQUFZLENBQUNKLE1BQU0sQ0FBQyxHQUFHLENBQUMsRUFBRW5DLDBDQUFJLENBQUNlLG9CQUFvQixDQUFDLENBQUMsQ0FBQzJELG1CQUFtQixDQUFDLENBQUMsQ0FBQztFQUV2RjtFQUVBdUUsYUFBYSxDQUFDMUksSUFBSSxDQUFDdUksTUFBTSxDQUFDO0VBQzFCOUksMENBQUksQ0FBQ2Usb0JBQW9CLENBQUMsQ0FBQyxDQUFDNkMsVUFBVSxDQUFDcUYsYUFBYSxDQUFDO0VBQ3JEakosMENBQUksQ0FBQ2Usb0JBQW9CLENBQUMsQ0FBQyxDQUFDa0QsZUFBZSxDQUFDLENBQUM7QUFFakQ7QUFFQSxTQUFTa0YsY0FBY0EsQ0FBQSxFQUFHO0VBQ3RCRCxnQkFBZ0IsQ0FBQyxDQUFDO0VBQ2xCekMscUJBQXFCLENBQUMsQ0FBQztFQUN2Qlcsd0JBQXdCLENBQUMsQ0FBQztBQUM5QjtBQUVBK0IsY0FBYyxDQUFDLENBQUMsQyIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZ2FtZS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL29iamVjdHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNoaXAsIEdhbWVib2FyZCwgUGxheWVyIH0gZnJvbSBcIi4vb2JqZWN0cy5qc1wiO1xuXG5jb25zdCBHYW1lID0gKCgpID0+IHtcblxuICAgIGxldCBwbGF5ZXJzID0gW11cbiAgICBsZXQgZ2FtZWJvYXJkcyA9IFtdXG5cbiAgICBsZXQgcGxheWVyID0gUGxheWVyKCdQbGF5ZXInKVxuICAgIGxldCBwbGF5ZXJHYW1lYm9hcmQgPSBHYW1lYm9hcmQoKVxuXG4gICAgbGV0IGNvbXB1dGVyID0gUGxheWVyKCdDb21wdXRlcicpXG4gICAgbGV0IGNvbXB1dGVyR2FtZWJvYXJkID0gR2FtZWJvYXJkKClcblxuICAgIHBsYXllcnMucHVzaChwbGF5ZXIpXG4gICAgcGxheWVycy5wdXNoKGNvbXB1dGVyKVxuXG4gICAgZ2FtZWJvYXJkcy5wdXNoKHBsYXllckdhbWVib2FyZClcbiAgICBnYW1lYm9hcmRzLnB1c2goY29tcHV0ZXJHYW1lYm9hcmQpXG5cbiAgICBsZXQgYWN0aXZlUGxheWVyID0gcGxheWVyc1swXVxuICAgIGxldCBhY3RpdmVCb2FyZCA9IGdhbWVib2FyZHNbMF1cblxuICAgIGNvbnN0IGdldEFjdGl2ZVBsYXllciA9ICgpID0+IGFjdGl2ZVBsYXllclxuICAgIGNvbnN0IGdldEFjdGl2ZUdhbWVib2FyZCA9ICgpID0+IGFjdGl2ZUJvYXJkXG5cbiAgICBjb25zdCBnZXRQbGF5ZXIgPSAoKSA9PiBwbGF5ZXJcbiAgICBjb25zdCBnZXRDb21wdXRlciA9ICgpID0+IGNvbXB1dGVyXG5cbiAgICBjb25zdCBnZXRQbGF5ZXJHYW1lYm9hcmQgPSAoKSA9PiBwbGF5ZXJHYW1lYm9hcmRcbiAgICBjb25zdCBnZXRDb21wdXRlckdhbWVib2FyZCA9ICgpID0+IGNvbXB1dGVyR2FtZWJvYXJkXG5cbiAgICBjb25zdCBzd2l0Y2hQbGF5ZXJUdXJuID0gKCkgPT4ge1xuICAgICAgICBpZiAoYWN0aXZlUGxheWVyID09PSBwbGF5ZXJzWzBdKSB7XG4gICAgICAgICAgICBhY3RpdmVQbGF5ZXIgPSBwbGF5ZXJzWzFdXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBhY3RpdmVQbGF5ZXIgPSBwbGF5ZXJzWzBdXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBzd2l0Y2hBY3RpdmVCb2FyZCA9ICgpID0+IHtcbiAgICAgICAgaWYgKGFjdGl2ZUJvYXJkID09PSBnYW1lYm9hcmRzWzBdKSB7XG4gICAgICAgICAgICBhY3RpdmVCb2FyZCA9IGdhbWVib2FyZHNbMV1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGFjdGl2ZUJvYXJkID0gZ2FtZWJvYXJkc1swXVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgZ2V0UGxheWVyLFxuICAgICAgICBnZXRQbGF5ZXJHYW1lYm9hcmQsXG4gICAgICAgIGdldENvbXB1dGVyLFxuICAgICAgICBnZXRDb21wdXRlckdhbWVib2FyZCxcbiAgICAgICAgZ2V0QWN0aXZlUGxheWVyLFxuICAgICAgICBnZXRBY3RpdmVHYW1lYm9hcmQsXG4gICAgICAgIHN3aXRjaFBsYXllclR1cm4sXG4gICAgICAgIHN3aXRjaEFjdGl2ZUJvYXJkXG4gICAgfVxuXG59KSgpO1xuXG5leHBvcnQgeyBHYW1lIH0gIiwiY29uc3QgU2hpcCA9IChwb3NpdGlvbikgPT4ge1xuXG4gICAgY29uc3QgZ2V0UG9zaXRpb24gPSAoKSA9PiBwb3NpdGlvblxuXG4gICAgY29uc3Qgc2V0UG9zaXRpb24gPSAoY29vcmRzKSA9PiB7XG4gICAgICAgIGdldFBvc2l0aW9uKCkucHVzaChjb29yZHMpXG4gICAgfVxuXG4gICAgY29uc3Qgc2hpcENob2ljZXMgPSAob3JpZW50YXRpb24sIGxlbmd0aCkgPT4ge1xuXG4gICAgICAgIGxldCBwb3NzaWJsZUNob2ljZXMgPSBbXVxuXG4gICAgICAgIGlmIChvcmllbnRhdGlvbiA9PSAnWCcpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgKDExIC0gbGVuZ3RoKTsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgIHBvc3NpYmxlQ2hvaWNlcy5wdXNoKGkudG9TdHJpbmcoKSArIGoudG9TdHJpbmcoKSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAob3JpZW50YXRpb24gPT0gJ1knKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8ICgxMSAtIGxlbmd0aCk7IGkrKykge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgMTA7IGorKykge1xuICAgICAgICAgICAgICAgICAgICBwb3NzaWJsZUNob2ljZXMucHVzaChpLnRvU3RyaW5nKCkgKyBqLnRvU3RyaW5nKCkpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHBvc3NpYmxlQ2hvaWNlc1xuXG4gICAgfVxuXG4gICAgY29uc3QgY3JlYXRlQ2FycmllciA9IChjb29yZGluYXRlLCBvcmllbnRhdGlvbikgPT4ge1xuXG4gICAgICAgIGlmIChjb29yZGluYXRlID09IDEwMCkge1xuXG4gICAgICAgICAgICBsZXQgcG9zc2libGVDaG9pY2VzID0gc2hpcENob2ljZXMob3JpZW50YXRpb24sIDUpXG5cbiAgICAgICAgICAgIGNvb3JkaW5hdGUgPSBwb3NzaWJsZUNob2ljZXNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogcG9zc2libGVDaG9pY2VzLmxlbmd0aCldXG5cbiAgICAgICAgfVxuXG4gICAgICAgIGNvb3JkaW5hdGUgPSBOdW1iZXIoY29vcmRpbmF0ZSlcblxuICAgICAgICBpZiAoY29vcmRpbmF0ZS50b1N0cmluZygpLmxlbmd0aCA9PSAxKSB7XG5cbiAgICAgICAgICAgIHNldFBvc2l0aW9uKCcwJyArIFN0cmluZyhjb29yZGluYXRlKSlcblxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCA1OyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAob3JpZW50YXRpb24gPT0gJ1gnKSB7XG4gICAgICAgICAgICAgICAgICAgIHNldFBvc2l0aW9uKCcwJyArIFN0cmluZyhjb29yZGluYXRlICsgaSkpXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChvcmllbnRhdGlvbiA9PSAnWScpIHtcbiAgICAgICAgICAgICAgICAgICAgc2V0UG9zaXRpb24oU3RyaW5nKGNvb3JkaW5hdGUgKyAoaSAqIDEwKSkpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNTsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKG9yaWVudGF0aW9uID09ICdYJykge1xuICAgICAgICAgICAgICAgICAgICBzZXRQb3NpdGlvbihTdHJpbmcoY29vcmRpbmF0ZSArIGkpKVxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAob3JpZW50YXRpb24gPT0gJ1knKSB7XG4gICAgICAgICAgICAgICAgICAgIHNldFBvc2l0aW9uKFN0cmluZyhjb29yZGluYXRlICsgKGkgKiAxMCkpKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNyZWF0ZUJhdHRsZXNoaXAoY29vcmRpbmF0ZSwgb3JpZW50YXRpb24pIHtcbiAgICAgICAgbGV0IHBvc3NpYmxlQ2hvaWNlcyA9IFtdXG5cbiAgICAgICAgaWYgKGNvb3JkaW5hdGUgPT0gMTAwKSB7XG4gICAgICAgICAgICBpZiAob3JpZW50YXRpb24gPT0gJ1gnKSB7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgNzsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NzaWJsZUNob2ljZXMucHVzaChpLnRvU3RyaW5nKCkgKyBqLnRvU3RyaW5nKCkpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKG9yaWVudGF0aW9uID09ICdZJykge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNzsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgMTA7IGorKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcG9zc2libGVDaG9pY2VzLnB1c2goaS50b1N0cmluZygpICsgai50b1N0cmluZygpKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb29yZGluYXRlID0gcG9zc2libGVDaG9pY2VzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHBvc3NpYmxlQ2hvaWNlcy5sZW5ndGgpXVxuXG4gICAgICAgIH1cblxuICAgICAgICBjb29yZGluYXRlID0gTnVtYmVyKGNvb3JkaW5hdGUpXG5cbiAgICAgICAgaWYgKGNvb3JkaW5hdGUudG9TdHJpbmcoKS5sZW5ndGggPT0gMSkge1xuXG4gICAgICAgICAgICBzZXRQb3NpdGlvbignMCcgKyBTdHJpbmcoY29vcmRpbmF0ZSkpXG5cbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgNDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKG9yaWVudGF0aW9uID09ICdYJykge1xuICAgICAgICAgICAgICAgICAgICBzZXRQb3NpdGlvbignMCcgKyBTdHJpbmcoY29vcmRpbmF0ZSArIGkpKVxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAob3JpZW50YXRpb24gPT0gJ1knKSB7XG4gICAgICAgICAgICAgICAgICAgIHNldFBvc2l0aW9uKFN0cmluZyhjb29yZGluYXRlICsgKGkgKiAxMCkpKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDQ7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmIChvcmllbnRhdGlvbiA9PSAnWCcpIHtcbiAgICAgICAgICAgICAgICAgICAgc2V0UG9zaXRpb24oU3RyaW5nKGNvb3JkaW5hdGUgKyBpKSlcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKG9yaWVudGF0aW9uID09ICdZJykge1xuICAgICAgICAgICAgICAgICAgICBzZXRQb3NpdGlvbihTdHJpbmcoY29vcmRpbmF0ZSArIChpICogMTApKSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gICAgfVxuXG4gICAgZnVuY3Rpb24gY3JlYXRlRGVzdHJveWVyKGNvb3JkaW5hdGUsIG9yaWVudGF0aW9uKSB7XG5cblxuXG4gICAgICAgIGxldCBwb3NzaWJsZUNob2ljZXMgPSBbXVxuXG4gICAgICAgIGlmIChjb29yZGluYXRlID09IDEwMCkge1xuICAgICAgICAgICAgaWYgKG9yaWVudGF0aW9uID09ICdYJykge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDc7IGorKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcG9zc2libGVDaG9pY2VzLnB1c2goaS50b1N0cmluZygpICsgai50b1N0cmluZygpKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmIChvcmllbnRhdGlvbiA9PSAnWScpIHtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDc7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDEwOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc3NpYmxlQ2hvaWNlcy5wdXNoKGkudG9TdHJpbmcoKSArIGoudG9TdHJpbmcoKSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29vcmRpbmF0ZSA9IHBvc3NpYmxlQ2hvaWNlc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBwb3NzaWJsZUNob2ljZXMubGVuZ3RoKV1cblxuICAgICAgICB9XG5cbiAgICAgICAgY29vcmRpbmF0ZSA9IE51bWJlcihjb29yZGluYXRlKVxuXG4gICAgICAgIGlmIChjb29yZGluYXRlLnRvU3RyaW5nKCkubGVuZ3RoID09IDEpIHtcblxuICAgICAgICAgICAgc2V0UG9zaXRpb24oJzAnICsgU3RyaW5nKGNvb3JkaW5hdGUpKVxuXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8IDQ7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmIChvcmllbnRhdGlvbiA9PSAnWCcpIHtcbiAgICAgICAgICAgICAgICAgICAgc2V0UG9zaXRpb24oJzAnICsgU3RyaW5nKGNvb3JkaW5hdGUgKyBpKSlcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKG9yaWVudGF0aW9uID09ICdZJykge1xuICAgICAgICAgICAgICAgICAgICBzZXRQb3NpdGlvbihTdHJpbmcoY29vcmRpbmF0ZSArIChpICogMTApKSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA0OyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAob3JpZW50YXRpb24gPT0gJ1gnKSB7XG4gICAgICAgICAgICAgICAgICAgIHNldFBvc2l0aW9uKFN0cmluZyhjb29yZGluYXRlICsgaSkpXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChvcmllbnRhdGlvbiA9PSAnWScpIHtcbiAgICAgICAgICAgICAgICAgICAgc2V0UG9zaXRpb24oU3RyaW5nKGNvb3JkaW5hdGUgKyAoaSAqIDEwKSkpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9ICAgIH1cblxuICAgIGZ1bmN0aW9uIGNyZWF0ZVN1Ym1hcmluZShjb29yZGluYXRlLCBvcmllbnRhdGlvbikge1xuXG5cbiAgICAgICAgbGV0IHBvc3NpYmxlQ2hvaWNlcyA9IFtdXG5cbiAgICAgICAgaWYgKGNvb3JkaW5hdGUgPT0gMTAwKSB7XG4gICAgICAgICAgICBpZiAob3JpZW50YXRpb24gPT0gJ1gnKSB7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgODsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NzaWJsZUNob2ljZXMucHVzaChpLnRvU3RyaW5nKCkgKyBqLnRvU3RyaW5nKCkpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKG9yaWVudGF0aW9uID09ICdZJykge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgODsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgMTA7IGorKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcG9zc2libGVDaG9pY2VzLnB1c2goaS50b1N0cmluZygpICsgai50b1N0cmluZygpKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb29yZGluYXRlID0gcG9zc2libGVDaG9pY2VzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHBvc3NpYmxlQ2hvaWNlcy5sZW5ndGgpXVxuXG4gICAgICAgIH1cblxuICAgICAgICBjb29yZGluYXRlID0gTnVtYmVyKGNvb3JkaW5hdGUpXG5cbiAgICAgICAgaWYgKGNvb3JkaW5hdGUudG9TdHJpbmcoKS5sZW5ndGggPT0gMSkge1xuXG4gICAgICAgICAgICBzZXRQb3NpdGlvbignMCcgKyBTdHJpbmcoY29vcmRpbmF0ZSkpXG5cbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgMzsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKG9yaWVudGF0aW9uID09ICdYJykge1xuICAgICAgICAgICAgICAgICAgICBzZXRQb3NpdGlvbignMCcgKyBTdHJpbmcoY29vcmRpbmF0ZSArIGkpKVxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAob3JpZW50YXRpb24gPT0gJ1knKSB7XG4gICAgICAgICAgICAgICAgICAgIHNldFBvc2l0aW9uKFN0cmluZyhjb29yZGluYXRlICsgKGkgKiAxMCkpKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDM7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmIChvcmllbnRhdGlvbiA9PSAnWCcpIHtcbiAgICAgICAgICAgICAgICAgICAgc2V0UG9zaXRpb24oU3RyaW5nKGNvb3JkaW5hdGUgKyBpKSlcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKG9yaWVudGF0aW9uID09ICdZJykge1xuICAgICAgICAgICAgICAgICAgICBzZXRQb3NpdGlvbihTdHJpbmcoY29vcmRpbmF0ZSArIChpICogMTApKSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gICAgfVxuXG4gICAgZnVuY3Rpb24gY3JlYXRlUGF0cm9sKGNvb3JkaW5hdGUsIG9yaWVudGF0aW9uKSB7XG5cblxuICAgICAgICBsZXQgcG9zc2libGVDaG9pY2VzID0gW11cblxuICAgICAgICBpZiAoY29vcmRpbmF0ZSA9PSAxMDApIHtcbiAgICAgICAgICAgIGlmIChvcmllbnRhdGlvbiA9PSAnWCcpIHtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCA5OyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc3NpYmxlQ2hvaWNlcy5wdXNoKGkudG9TdHJpbmcoKSArIGoudG9TdHJpbmcoKSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAob3JpZW50YXRpb24gPT0gJ1knKSB7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA5OyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCAxMDsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NzaWJsZUNob2ljZXMucHVzaChpLnRvU3RyaW5nKCkgKyBqLnRvU3RyaW5nKCkpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvb3JkaW5hdGUgPSBwb3NzaWJsZUNob2ljZXNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogcG9zc2libGVDaG9pY2VzLmxlbmd0aCldXG5cbiAgICAgICAgfVxuXG4gICAgICAgIGNvb3JkaW5hdGUgPSBOdW1iZXIoY29vcmRpbmF0ZSlcblxuICAgICAgICBpZiAoY29vcmRpbmF0ZS50b1N0cmluZygpLmxlbmd0aCA9PSAxKSB7XG5cbiAgICAgICAgICAgIHNldFBvc2l0aW9uKCcwJyArIFN0cmluZyhjb29yZGluYXRlKSlcblxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCAyOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAob3JpZW50YXRpb24gPT0gJ1gnKSB7XG4gICAgICAgICAgICAgICAgICAgIHNldFBvc2l0aW9uKCcwJyArIFN0cmluZyhjb29yZGluYXRlICsgaSkpXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChvcmllbnRhdGlvbiA9PSAnWScpIHtcbiAgICAgICAgICAgICAgICAgICAgc2V0UG9zaXRpb24oU3RyaW5nKGNvb3JkaW5hdGUgKyAoaSAqIDEwKSkpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMjsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKG9yaWVudGF0aW9uID09ICdYJykge1xuICAgICAgICAgICAgICAgICAgICBzZXRQb3NpdGlvbihTdHJpbmcoY29vcmRpbmF0ZSArIGkpKVxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAob3JpZW50YXRpb24gPT0gJ1knKSB7XG4gICAgICAgICAgICAgICAgICAgIHNldFBvc2l0aW9uKFN0cmluZyhjb29yZGluYXRlICsgKGkgKiAxMCkpKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBnZXRQb3NpdGlvbixcbiAgICAgICAgc2V0UG9zaXRpb24sXG4gICAgICAgIHNoaXBDaG9pY2VzLFxuICAgICAgICBjcmVhdGVDYXJyaWVyLFxuICAgICAgICBjcmVhdGVCYXR0bGVzaGlwLFxuICAgICAgICBjcmVhdGVEZXN0cm95ZXIsXG4gICAgICAgIGNyZWF0ZVN1Ym1hcmluZSxcbiAgICAgICAgY3JlYXRlUGF0cm9sXG4gICAgfVxufVxuXG5jb25zdCBHYW1lYm9hcmQgPSAoKSA9PiB7XG4gICAgY29uc3Qgcm93ID0gMTBcbiAgICBjb25zdCBjb2x1bW4gPSAxMFxuICAgIGNvbnN0IGJvYXJkID0gW11cbiAgICBjb25zdCBtaXNzc2VkQ2VsbHMgPSBbXVxuICAgIGNvbnN0IGhpdENlbGxzID0gW11cbiAgICBjb25zdCBlbXB0eUNlbGxzID0gW11cbiAgICBjb25zdCBvY2N1cGllZENlbGxzID0gW11cblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcm93OyBpKyspIHtcbiAgICAgICAgYm9hcmRbaV0gPSBbXVxuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGNvbHVtbjsgaisrKSB7XG4gICAgICAgICAgICBib2FyZFtpXS5wdXNoKGkudG9TdHJpbmcoKSArIGoudG9TdHJpbmcoKSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGdldEJvYXJkID0gKCkgPT4gYm9hcmRcblxuICAgIGNvbnN0IGdldE1pc3NlZENlbGxzID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gbWlzc3NlZENlbGxzXG4gICAgfVxuXG4gICAgY29uc3Qgc2V0TWlzc2VkQ2VsbHMgPSBuZXdDZWxsID0+IHtcbiAgICAgICAgbWlzc3NlZENlbGxzLnB1c2gobmV3Q2VsbClcbiAgICB9XG5cbiAgICBjb25zdCBnZXRIaXRDZWxscyA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIGhpdENlbGxzXG4gICAgfVxuXG4gICAgY29uc3Qgc2V0SGl0Q2VsbHMgPSBuZXdDZWxsID0+IHtcbiAgICAgICAgaGl0Q2VsbHMucHVzaChuZXdDZWxsKVxuICAgIH1cblxuICAgIGNvbnN0IGdldEVtcHR5Q2VsbHMgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBlbXB0eUNlbGxzXG4gICAgfVxuXG4gICAgY29uc3Qgc2V0RW1wdHlDZWxscyA9IG5ld0NlbGwgPT4ge1xuICAgICAgICBlbXB0eUNlbGxzLnB1c2gobmV3Q2VsbClcbiAgICB9XG5cbiAgICBjb25zdCBjbGVhckVtcHR5Q2VsbHMgPSAoKSA9PiB7XG4gICAgICAgIGdldEVtcHR5Q2VsbHMoKS5zcGxpY2UoMCwgZ2V0RW1wdHlDZWxscygpLmxlbmd0aClcbiAgICB9XG5cbiAgICBjb25zdCBnZXRPY2N1cGllZENlbGxzID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gb2NjdXBpZWRDZWxsc1xuICAgIH1cblxuICAgIGNvbnN0IHNldE9jY3VwaWVkQ2VsbHMgPSBuZXdDZWxsID0+IHtcbiAgICAgICAgb2NjdXBpZWRDZWxscy5wdXNoKG5ld0NlbGwpXG4gICAgfVxuXG4gICAgY29uc3QgY2xlYXJPY2N1cGllZENlbGxzID0gKCkgPT4ge1xuICAgICAgICBnZXRPY2N1cGllZENlbGxzKCkuc3BsaWNlKDAsIGdldE9jY3VwaWVkQ2VsbHMoKS5sZW5ndGgpXG4gICAgfVxuXG4gICAgY29uc3QgcGxhY2VTaGlwcyA9IChzaGlwcykgPT4ge1xuICAgICAgICBjbGVhck9jY3VwaWVkQ2VsbHMoKVxuICAgICAgICBzaGlwcy5mb3JFYWNoKHNoaXAgPT4ge1xuICAgICAgICAgICAgc2hpcC5nZXRQb3NpdGlvbigpLmZvckVhY2gocG9zaXRpb25DZWxsID0+IHtcbiAgICAgICAgICAgICAgICBzZXRPY2N1cGllZENlbGxzKHBvc2l0aW9uQ2VsbClcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGNvbnN0IHBsYWNlRW1wdHlTcGFjZSA9ICgpID0+IHtcbiAgICAgICAgY2xlYXJFbXB0eUNlbGxzKClcbiAgICAgICAgZ2V0Qm9hcmQoKS5mb3JFYWNoKHJvd0NlbGwgPT4ge1xuICAgICAgICAgICAgcm93Q2VsbC5mb3JFYWNoKGNvbHVtbkNlbGwgPT4ge1xuICAgICAgICAgICAgICAgIGlmICghKGdldE9jY3VwaWVkQ2VsbHMoKS5pbmNsdWRlcyhjb2x1bW5DZWxsKSkpIHtcbiAgICAgICAgICAgICAgICAgICAgc2V0RW1wdHlDZWxscyhjb2x1bW5DZWxsKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgY29uc3QgcmVjaWV2ZUF0dGFjayA9IChjb29yZGluYXRlKSA9PiB7XG4gICAgICAgIGlmIChnZXRPY2N1cGllZENlbGxzKCkuaW5jbHVkZXMoY29vcmRpbmF0ZSkpIHtcbiAgICAgICAgICAgIHNldEhpdENlbGxzKGNvb3JkaW5hdGUpXG5cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNldE1pc3NlZENlbGxzKGNvb3JkaW5hdGUpXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBvY2N1cGllZEluZGV4ID0gZ2V0T2NjdXBpZWRDZWxscygpLmluZGV4T2YoY29vcmRpbmF0ZSlcbiAgICAgICAgaWYgKG9jY3VwaWVkSW5kZXggPiAtMSkge1xuICAgICAgICAgICAgZ2V0T2NjdXBpZWRDZWxscygpLnNwbGljZShvY2N1cGllZEluZGV4LCAxKSBcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGVtcHR5SW5kZXggPSBnZXRFbXB0eUNlbGxzKCkuaW5kZXhPZihjb29yZGluYXRlKVxuICAgICAgICBpZiAoZW1wdHlJbmRleCA+IC0xKSB7XG4gICAgICAgICAgICBnZXRFbXB0eUNlbGxzKCkuc3BsaWNlKGVtcHR5SW5kZXgsIDEpXG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIGNvbnN0IGNoZWNrR2FtZU92ZXIgPSAoKSA9PntcbiAgICAgICAgaWYgKGdldE9jY3VwaWVkQ2VsbHMoKS5sZW5ndGggPT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgY29tcHV0ZXJPcmllbnRhdGlvbiA9ICgpID0+IHtcblxuICAgICAgICBsZXQgb3JpZW50YXRpb25zID0gWydYJywgJ1knXVxuXG4gICAgICAgIHJldHVybiBvcmllbnRhdGlvbnNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogb3JpZW50YXRpb25zLmxlbmd0aCldXG5cbiAgICB9XG5cbiAgICBjb25zdCBjaGVja09jY3VwYXRpb24gPSAodGVzdEFycmF5KSA9PiB7XG5cbiAgICAgICAgaWYgKHRlc3RBcnJheS5sZW5ndGggPT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGVzdEFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoZ2V0T2NjdXBpZWRDZWxscygpLmluY2x1ZGVzKHRlc3RBcnJheVtpXSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgZ2V0TWlzc2VkQ2VsbHMsXG4gICAgICAgIHNldE1pc3NlZENlbGxzLFxuICAgICAgICBnZXRIaXRDZWxscyxcbiAgICAgICAgc2V0SGl0Q2VsbHMsXG4gICAgICAgIGdldEVtcHR5Q2VsbHMsXG4gICAgICAgIHNldEVtcHR5Q2VsbHMsXG4gICAgICAgIGdldE9jY3VwaWVkQ2VsbHMsXG4gICAgICAgIHNldE9jY3VwaWVkQ2VsbHMsXG4gICAgICAgIGdldEJvYXJkLFxuICAgICAgICBwbGFjZVNoaXBzLFxuICAgICAgICBwbGFjZUVtcHR5U3BhY2UsXG4gICAgICAgIHJlY2lldmVBdHRhY2ssXG4gICAgICAgIGNoZWNrR2FtZU92ZXIsXG4gICAgICAgIGNvbXB1dGVyT3JpZW50YXRpb24sXG4gICAgICAgIGNoZWNrT2NjdXBhdGlvblxuICAgIH1cbn1cblxuY29uc3QgUGxheWVyID0gKG5hbWUpID0+IHtcbiAgICBjb25zdCBnZXROYW1lID0gKCkgPT4gbmFtZVxuXG4gICAgY29uc3Qgcm93ID0gMTBcbiAgICBjb25zdCBjb2x1bW4gPSAxMFxuICAgIGNvbnN0IHBvc3NpYmxlQ2hvaWNlcyA9IFtdXG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJvdzsgaSsrKSB7XG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgY29sdW1uOyBqKyspIHtcbiAgICAgICAgICAgIHBvc3NpYmxlQ2hvaWNlcy5wdXNoKGkudG9TdHJpbmcoKSArIGoudG9TdHJpbmcoKSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGdldFBvc3NpYmxlQ2hvaWNlcyA9ICgpID0+IHBvc3NpYmxlQ2hvaWNlc1xuXG4gICAgY29uc3QgY29tcHV0ZXJBdHRhY2sgPSAoKSA9PiB7XG5cbiAgICAgICAgICAgIGxldCBhdHRhY2tDb29yZGluYXRlID0gZ2V0UG9zc2libGVDaG9pY2VzKClbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogZ2V0UG9zc2libGVDaG9pY2VzKCkubGVuZ3RoKV1cblxuICAgICAgICAgICAgY29uc3QgaW5kZXggPSBnZXRQb3NzaWJsZUNob2ljZXMoKS5pbmRleE9mKGF0dGFja0Nvb3JkaW5hdGUpXG4gICAgICAgICAgICBpZiAoaW5kZXggPiAtMSkge1xuICAgICAgICAgICAgICAgIHBvc3NpYmxlQ2hvaWNlcy5zcGxpY2UoaW5kZXgsIDEpIFxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gYXR0YWNrQ29vcmRpbmF0ZVxuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIGdldE5hbWUsXG4gICAgICAgIGNvbXB1dGVyQXR0YWNrXG4gICAgfVxufVxuXG5leHBvcnQgeyBTaGlwLCBHYW1lYm9hcmQsIFBsYXllciB9IiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC5jb250YWluZXIge1xuICAgIGhlaWdodDogMTAwdmg7XG5cbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcbn1cblxuLnBsYXllci1vbmUtZ2FtZWJvYXJkIHtcbiAgICBoZWlnaHQ6IDUwMHB4O1xuICAgIHdpZHRoOiA1MDBweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcblxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG59XG5cbi5wbGF5ZXItb25lLWdhbWVib2FyZCBkaXYge1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG59XG5cbi5wbGF5ZXItdHdvLWdhbWVib2FyZCB7XG4gICAgaGVpZ2h0OiA1MDBweDtcbiAgICB3aWR0aDogNTAwcHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG5cbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZmxleC13cmFwOiB3cmFwO1xufVxuXG4ucGxheWVyLXR3by1nYW1lYm9hcmQgZGl2IHtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xufVxuXG4ub2NjdXBpZWQtY2VsbCB7XG4gICAgYmFja2dyb3VuZDogYmxhY2s7XG59XG5cbi5lbXB0eS1jZWxsIHtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbn1cblxuLmhpdC1jZWxsIHtcbiAgICBiYWNrZ3JvdW5kOiByZWQ7XG59XG5cbi5taXNzZWQtY2VsbCB7XG4gICAgYmFja2dyb3VuZDogZ3JheTtcbn1cblxuLm9jY3VwaWVkLWNvbS1jZWxsIHtcbiAgICBiYWNrZ3JvdW5kOiBncmVlbjtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxhQUFhOztJQUViLGFBQWE7SUFDYiw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsWUFBWTtJQUNaLHVCQUF1Qjs7SUFFdkIsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0Qix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsWUFBWTtJQUNaLHVCQUF1Qjs7SUFFdkIsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0Qix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5jb250YWluZXIge1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcblxcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxufVxcblxcbi5wbGF5ZXItb25lLWdhbWVib2FyZCB7XFxuICAgIGhlaWdodDogNTAwcHg7XFxuICAgIHdpZHRoOiA1MDBweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxufVxcblxcbi5wbGF5ZXItb25lLWdhbWVib2FyZCBkaXYge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG59XFxuXFxuLnBsYXllci10d28tZ2FtZWJvYXJkIHtcXG4gICAgaGVpZ2h0OiA1MDBweDtcXG4gICAgd2lkdGg6IDUwMHB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG59XFxuXFxuLnBsYXllci10d28tZ2FtZWJvYXJkIGRpdiB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG4ub2NjdXBpZWQtY2VsbCB7XFxuICAgIGJhY2tncm91bmQ6IGJsYWNrO1xcbn1cXG5cXG4uZW1wdHktY2VsbCB7XFxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xcbn1cXG5cXG4uaGl0LWNlbGwge1xcbiAgICBiYWNrZ3JvdW5kOiByZWQ7XFxufVxcblxcbi5taXNzZWQtY2VsbCB7XFxuICAgIGJhY2tncm91bmQ6IGdyYXk7XFxufVxcblxcbi5vY2N1cGllZC1jb20tY2VsbCB7XFxuICAgIGJhY2tncm91bmQ6IGdyZWVuO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IFwiLi9zdHlsZS5jc3NcIlxuXG5pbXBvcnQgeyBHYW1lIH0gZnJvbSBcIi4vZ2FtZS5qc1wiO1xuaW1wb3J0IHsgU2hpcCB9IGZyb20gXCIuL29iamVjdHMuanNcIjtcblxubGV0IGdhbWVTdGFydCA9IGZhbHNlXG5cbkdhbWVcblxuZnVuY3Rpb24gZGlzcGxheUhlYWRlcigpIHtcbiAgICBjb25zdCBwbGF5ZXJPbmVIZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGxheWVyLW9uZS1oZWFkZXInKVxuICAgIGNvbnN0IHBsYXllclR3b0hlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wbGF5ZXItdHdvLWhlYWRlcicpXG5cbiAgICBwbGF5ZXJPbmVIZWFkZXIudGV4dENvbnRlbnQgPSBHYW1lLmdldEFjdGl2ZVBsYXllcigpLmdldE5hbWUoKVxuICAgIEdhbWUuc3dpdGNoUGxheWVyVHVybigpXG4gICAgcGxheWVyVHdvSGVhZGVyLnRleHRDb250ZW50ID0gR2FtZS5nZXRBY3RpdmVQbGF5ZXIoKS5nZXROYW1lKClcbiAgICBHYW1lLnN3aXRjaFBsYXllclR1cm4oKVxufVxuXG5mdW5jdGlvbiBkaXNwbGF5UGxheWVyT25lQm9hcmQoKSB7XG4gICAgY29uc3QgcGxheWVyT25lR2FtZWJvYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBsYXllci1vbmUtZ2FtZWJvYXJkJyk7XG4gICAgcGxheWVyT25lR2FtZWJvYXJkLnRleHRDb250ZW50ID0gW107XG5cbiAgICBsZXQgYXR0YWNrQ29vcmRpbmF0ZSA9IEdhbWUuZ2V0Q29tcHV0ZXIoKS5jb21wdXRlckF0dGFjaygpO1xuXG4gICAgKEdhbWUuZ2V0UGxheWVyR2FtZWJvYXJkKCkuZ2V0Qm9hcmQoKSkuZm9yRWFjaCgocm93Q2VsbCkgPT4ge1xuXG4gICAgICAgIHJvd0NlbGwuZm9yRWFjaCgoY29sdW1uQ2VsbCkgPT4ge1xuXG4gICAgICAgICAgICBjb25zdCBib2FyZENlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICAgICAgYm9hcmRDZWxsLnRleHRDb250ZW50ID0gY29sdW1uQ2VsbFxuICAgICAgICAgICAgYm9hcmRDZWxsLnNldEF0dHJpYnV0ZSgnaWQnLCBjb2x1bW5DZWxsKVxuICAgICAgICAgICAgYm9hcmRDZWxsLmNsYXNzTGlzdC5hZGQoJ3BsYXllci1vbmUtY2VsbHMnKVxuICAgICAgICAgICAgYm9hcmRDZWxsLnN0eWxlLndpZHRoID0gJzEwJSdcbiAgICAgICAgICAgIGJvYXJkQ2VsbC5zdHlsZS5oZWlnaHQgPSAnMTAlJ1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZiAoR2FtZS5nZXRQbGF5ZXJHYW1lYm9hcmQoKS5nZXRPY2N1cGllZENlbGxzKCkuaW5jbHVkZXMoYm9hcmRDZWxsLnRleHRDb250ZW50KSkge1xuICAgICAgICAgICAgICAgIGJvYXJkQ2VsbC5jbGFzc0xpc3QuYWRkKCdvY2N1cGllZC1jZWxsJylcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoR2FtZS5nZXRQbGF5ZXJHYW1lYm9hcmQoKS5nZXRFbXB0eUNlbGxzKCkuaW5jbHVkZXMoYm9hcmRDZWxsLnRleHRDb250ZW50KSkge1xuICAgICAgICAgICAgICAgIGJvYXJkQ2VsbC5jbGFzc0xpc3QuYWRkKCdlbXB0eS1jZWxsJylcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoR2FtZS5nZXRQbGF5ZXJHYW1lYm9hcmQoKS5nZXRIaXRDZWxscygpLmluY2x1ZGVzKGJvYXJkQ2VsbC50ZXh0Q29udGVudCkpIHtcbiAgICAgICAgICAgICAgICBib2FyZENlbGwuY2xhc3NMaXN0LmFkZCgnaGl0LWNlbGwnKVxuICAgICAgICAgICAgfSBlbHNlIGlmIChHYW1lLmdldFBsYXllckdhbWVib2FyZCgpLmdldE1pc3NlZENlbGxzKCkuaW5jbHVkZXMoYm9hcmRDZWxsLnRleHRDb250ZW50KSkge1xuICAgICAgICAgICAgICAgIGJvYXJkQ2VsbC5jbGFzc0xpc3QuYWRkKCdtaXNzZWQtY2VsbCcpXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZ1bmN0aW9uIHBsYXllckNlbGxDbGljaygpIHtcblxuICAgICAgICAgICAgICAgIGlmIChib2FyZENlbGwuZ2V0QXR0cmlidXRlKCdpZCcpID09IGF0dGFja0Nvb3JkaW5hdGUpIHtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBpZiAoYm9hcmRDZWxsLmNsYXNzTGlzdC5jb250YWlucygnb2NjdXBpZWQtY2VsbCcpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBib2FyZENlbGwuY2xhc3NMaXN0LnJlbW92ZSgnb2NjdXBpZWQtY2VsbCcpXG4gICAgICAgICAgICAgICAgICAgICAgICBib2FyZENlbGwuY2xhc3NMaXN0LmFkZCgnaGl0LWNlbGwnKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGlmIChib2FyZENlbGwuY2xhc3NMaXN0LmNvbnRhaW5zKCdlbXB0eS1jZWxsJykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvYXJkQ2VsbC5jbGFzc0xpc3QucmVtb3ZlKCdlbXB0eS1jZWxsJylcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvYXJkQ2VsbC5jbGFzc0xpc3QuYWRkKCdtaXNzZWQtY2VsbCcpXG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBHYW1lLmdldFBsYXllckdhbWVib2FyZCgpLnJlY2lldmVBdHRhY2soYXR0YWNrQ29vcmRpbmF0ZSlcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheVBsYXllclR3b0JvYXJkKClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChnYW1lU3RhcnQgPT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIHBsYXllckNlbGxDbGljaygpXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHBsYXllck9uZUdhbWVib2FyZC5hcHBlbmRDaGlsZChib2FyZENlbGwpXG5cbiAgICAgICAgfSlcbiAgICB9KVxufVxuXG5mdW5jdGlvbiBkaXNwbGF5UGxheWVyVHdvQm9hcmQoKSB7XG4gICAgY29uc3QgcGxheWVyVHdvR2FtZWJvYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBsYXllci10d28tZ2FtZWJvYXJkJyk7XG4gICAgcGxheWVyVHdvR2FtZWJvYXJkLnRleHRDb250ZW50ID0gJyc7XG5cbiAgICAoR2FtZS5nZXRDb21wdXRlckdhbWVib2FyZCgpLmdldEJvYXJkKCkpLmZvckVhY2goKHJvd0NlbGwpID0+IHtcblxuICAgICAgICByb3dDZWxsLmZvckVhY2goKGNvbHVtbkNlbGwpID0+IHtcblxuICAgICAgICAgICAgY29uc3QgYm9hcmRDZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgICAgIGJvYXJkQ2VsbC50ZXh0Q29udGVudCA9IGNvbHVtbkNlbGxcbiAgICAgICAgICAgIGJvYXJkQ2VsbC5zZXRBdHRyaWJ1dGUoJ2lkJywgY29sdW1uQ2VsbClcbiAgICAgICAgICAgIGJvYXJkQ2VsbC5jbGFzc0xpc3QuYWRkKCdwbGF5ZXItdHdvLWNlbGxzJylcbiAgICAgICAgICAgIGJvYXJkQ2VsbC5zdHlsZS53aWR0aCA9ICcxMCUnXG4gICAgICAgICAgICBib2FyZENlbGwuc3R5bGUuaGVpZ2h0ID0gJzEwJSdcblxuICAgICAgICAgICAgaWYgKEdhbWUuZ2V0Q29tcHV0ZXJHYW1lYm9hcmQoKS5nZXRPY2N1cGllZENlbGxzKCkuaW5jbHVkZXMoYm9hcmRDZWxsLnRleHRDb250ZW50KSkge1xuICAgICAgICAgICAgICAgIGJvYXJkQ2VsbC5jbGFzc0xpc3QuYWRkKCdvY2N1cGllZC1jb20tY2VsbCcpXG4gICAgICAgICAgICB9IGVsc2UgaWYgKEdhbWUuZ2V0Q29tcHV0ZXJHYW1lYm9hcmQoKS5nZXRFbXB0eUNlbGxzKCkuaW5jbHVkZXMoYm9hcmRDZWxsLnRleHRDb250ZW50KSkge1xuICAgICAgICAgICAgICAgIGJvYXJkQ2VsbC5jbGFzc0xpc3QuYWRkKCdlbXB0eS1jZWxsJylcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoR2FtZS5nZXRDb21wdXRlckdhbWVib2FyZCgpLmdldEhpdENlbGxzKCkuaW5jbHVkZXMoYm9hcmRDZWxsLnRleHRDb250ZW50KSkge1xuICAgICAgICAgICAgICAgIGJvYXJkQ2VsbC5jbGFzc0xpc3QuYWRkKCdoaXQtY2VsbCcpXG4gICAgICAgICAgICB9IGVsc2UgaWYgKEdhbWUuZ2V0Q29tcHV0ZXJHYW1lYm9hcmQoKS5nZXRNaXNzZWRDZWxscygpLmluY2x1ZGVzKGJvYXJkQ2VsbC50ZXh0Q29udGVudCkpIHtcbiAgICAgICAgICAgICAgICBib2FyZENlbGwuY2xhc3NMaXN0LmFkZCgnbWlzc2VkLWNlbGwnKVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmdW5jdGlvbiBkaXNhYmxlQWxsQnV0dG9ucygpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBib2FyZENlbGxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnBsYXllci10d28tY2VsbHMnKVxuXG4gICAgICAgICAgICAgICAgYm9hcmRDZWxscy5mb3JFYWNoKChjZWxsKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNlbGwucmVwbGFjZVdpdGgoY2VsbC5jbG9uZU5vZGUodHJ1ZSkpXG4gICAgICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmdW5jdGlvbiBjb21wdXRlckNlbGxDbGljaygpIHtcblxuICAgICAgICAgICAgICAgIGlmIChib2FyZENlbGwuY2xhc3NMaXN0LmNvbnRhaW5zKCdoaXQtY2VsbCcpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoYm9hcmRDZWxsLmNsYXNzTGlzdC5jb250YWlucygnbWlzc2VkLWNlbGwnKSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBpZiAoYm9hcmRDZWxsLmNsYXNzTGlzdC5jb250YWlucygnb2NjdXBpZWQtY29tLWNlbGwnKSkge1xuICAgICAgICAgICAgICAgICAgICBib2FyZENlbGwuY2xhc3NMaXN0LnJlbW92ZSgnb2NjdXBpZWQtY29tLWNlbGwnKVxuICAgICAgICAgICAgICAgICAgICBib2FyZENlbGwuY2xhc3NMaXN0LmFkZCgnaGl0LWNlbGwnKVxuICAgICAgICAgICAgICAgICAgICBkaXNhYmxlQWxsQnV0dG9ucygpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgaWYgKGJvYXJkQ2VsbC5jbGFzc0xpc3QuY29udGFpbnMoJ2VtcHR5LWNlbGwnKSkge1xuICAgICAgICAgICAgICAgICAgICBib2FyZENlbGwuY2xhc3NMaXN0LnJlbW92ZSgnZW1wdHktY2VsbCcpXG4gICAgICAgICAgICAgICAgICAgIGJvYXJkQ2VsbC5jbGFzc0xpc3QuYWRkKCdtaXNzZWQtY2VsbCcpXG4gICAgICAgICAgICAgICAgICAgIGRpc2FibGVBbGxCdXR0b25zKClcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoZ2FtZVN0YXJ0ID09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgR2FtZS5nZXRDb21wdXRlckdhbWVib2FyZCgpLnJlY2lldmVBdHRhY2soYm9hcmRDZWxsLnRleHRDb250ZW50KVxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5UGxheWVyT25lQm9hcmQoKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBib2FyZENlbGwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjb21wdXRlckNlbGxDbGljaylcbiAgICAgICAgICAgIHBsYXllclR3b0dhbWVib2FyZC5hcHBlbmRDaGlsZChib2FyZENlbGwpXG4gICAgICAgIH0pXG4gICAgfSlcbn1cblxuZnVuY3Rpb24gZGlzcGxheVBsYWNlQ2FycmllckJvYXJkKCkge1xuICAgIGNvbnN0IHBsYXllck9uZUdhbWVib2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wbGF5ZXItb25lLWdhbWVib2FyZCcpO1xuICAgIHBsYXllck9uZUdhbWVib2FyZC50ZXh0Q29udGVudCA9IFtdO1xuXG4gICAgbGV0IGNhcnJpZXIgPSBTaGlwKFtdKTtcbiAgICBsZXQgcG9zc2libGVDaG9pY2VzID0gY2Fycmllci5zaGlwQ2hvaWNlcyhnbG9iYWxDb29yZGluYXRlLCA1KTtcblxuICAgIGZ1bmN0aW9uIGNyZWF0ZVJvdGF0ZUJ0bigpIHtcbiAgICAgICAgY29uc3Qgcm90YXRlQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJvdGF0ZS1jb250YWluZXInKVxuICAgICAgICByb3RhdGVDb250YWluZXIudGV4dENvbnRlbnQgPSAnJztcbiAgICAgICAgY29uc3Qgcm90YXRlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICAgICAgcm90YXRlQnRuLnRleHRDb250ZW50ID0gJ1JvdGF0ZSdcblxuICAgICAgICByb3RhdGVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBpZiAoZ2xvYmFsQ29vcmRpbmF0ZSA9PSAnWCcpIHtcbiAgICAgICAgICAgICAgICBnbG9iYWxDb29yZGluYXRlID0gJ1knXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGdsb2JhbENvb3JkaW5hdGUgPSAnWCdcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZGlzcGxheVBsYWNlQ2FycmllckJvYXJkKClcbiAgICAgICAgfSlcblxuICAgICAgICByb3RhdGVDb250YWluZXIuYXBwZW5kQ2hpbGQocm90YXRlQnRuKVxuICAgIH07XG5cbiAgICBjcmVhdGVSb3RhdGVCdG4oKTtcblxuICAgIChHYW1lLmdldFBsYXllckdhbWVib2FyZCgpLmdldEJvYXJkKCkpLmZvckVhY2goKHJvd0NlbGwpID0+IHtcblxuICAgICAgICByb3dDZWxsLmZvckVhY2goKGNvbHVtbkNlbGwpID0+IHtcblxuICAgICAgICAgICAgY29uc3QgYm9hcmRDZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgICAgIGJvYXJkQ2VsbC50ZXh0Q29udGVudCA9IGNvbHVtbkNlbGxcbiAgICAgICAgICAgIGJvYXJkQ2VsbC5zZXRBdHRyaWJ1dGUoJ2lkJywgY29sdW1uQ2VsbClcbiAgICAgICAgICAgIGJvYXJkQ2VsbC5jbGFzc0xpc3QuYWRkKCdwbGF5ZXItb25lLWNlbGxzLXBsYWNlJylcbiAgICAgICAgICAgIGJvYXJkQ2VsbC5zdHlsZS53aWR0aCA9ICcxMCUnXG4gICAgICAgICAgICBib2FyZENlbGwuc3R5bGUuaGVpZ2h0ID0gJzEwJSdcblxuICAgICAgICAgICAgZnVuY3Rpb24gcGxheWVyQ2FycmllckNlbGwoKSB7XG5cbiAgICAgICAgICAgICAgICBib2FyZENlbGwuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgYm9hcmRDZWxsLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICd5ZWxsb3cnXG4gICAgICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgICAgIGJvYXJkQ2VsbC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBib2FyZENlbGwuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJydcbiAgICAgICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZ1bmN0aW9uIHBsYXllckNhcnJpZXJDbGljaygpIHtcbiAgICAgICAgICAgICAgICBib2FyZENlbGwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNhcnJpZXIuY3JlYXRlQ2Fycmllcihib2FyZENlbGwuZ2V0QXR0cmlidXRlKCdpZCcpLCBnbG9iYWxDb29yZGluYXRlKVxuICAgICAgICAgICAgICAgICAgICBwbGF5ZXJTaGlwcy5wdXNoKGNhcnJpZXIpXG4gICAgICAgICAgICAgICAgICAgIEdhbWUuZ2V0UGxheWVyR2FtZWJvYXJkKCkucGxhY2VTaGlwcyhwbGF5ZXJTaGlwcyk7XG4gICAgICAgICAgICAgICAgICAgIEdhbWUuZ2V0UGxheWVyR2FtZWJvYXJkKCkucGxhY2VFbXB0eVNwYWNlKCk7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXlQbGFjZUJhdHRsZXNoaXBCb2FyZCgpXG4gICAgICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChwb3NzaWJsZUNob2ljZXMuaW5jbHVkZXMoYm9hcmRDZWxsLmdldEF0dHJpYnV0ZSgnaWQnKSkpIHtcbiAgICAgICAgICAgICAgICBwbGF5ZXJDYXJyaWVyQ2VsbCgpXG4gICAgICAgICAgICAgICAgcGxheWVyQ2FycmllckNsaWNrKClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHBsYXllck9uZUdhbWVib2FyZC5hcHBlbmRDaGlsZChib2FyZENlbGwpXG4gICAgICAgIH0pXG4gICAgfSlcbn1cblxuZnVuY3Rpb24gZGlzcGxheVBsYWNlQmF0dGxlc2hpcEJvYXJkKCl7XG4gICAgY29uc3QgcGxheWVyT25lR2FtZWJvYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBsYXllci1vbmUtZ2FtZWJvYXJkJyk7XG4gICAgcGxheWVyT25lR2FtZWJvYXJkLnRleHRDb250ZW50ID0gW107XG5cbiAgICBsZXQgYmF0dGxlc2hpcCA9IFNoaXAoW10pO1xuICAgIGxldCBvcGVuU3BhY2UgPSBiYXR0bGVzaGlwLnNoaXBDaG9pY2VzKGdsb2JhbENvb3JkaW5hdGUsIDQpO1xuICAgIGxldCBvY2N1cGllZFNwYWNlID0gR2FtZS5nZXRQbGF5ZXJHYW1lYm9hcmQoKS5nZXRPY2N1cGllZENlbGxzKCk7XG4gICAgbGV0IHBvc3NpYmxlQ2hvaWNlcyA9IFtdO1xuXG4gICAgb3BlblNwYWNlLmZvckVhY2godmFsdWUgPT4ge1xuICAgICAgICBpZiAoIShvY2N1cGllZFNwYWNlLmluY2x1ZGVzKHZhbHVlKSkpIHtcbiAgICAgICAgICAgIHBvc3NpYmxlQ2hvaWNlcy5wdXNoKHZhbHVlKVxuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICBmdW5jdGlvbiBjcmVhdGVSb3RhdGVCdG4oKSB7XG4gICAgICAgIGNvbnN0IHJvdGF0ZUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yb3RhdGUtY29udGFpbmVyJylcbiAgICAgICAgcm90YXRlQ29udGFpbmVyLnRleHRDb250ZW50ID0gJyc7XG4gICAgICAgIGNvbnN0IHJvdGF0ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgICAgIHJvdGF0ZUJ0bi50ZXh0Q29udGVudCA9ICdSb3RhdGUnXG5cbiAgICAgICAgcm90YXRlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgaWYgKGdsb2JhbENvb3JkaW5hdGUgPT0gJ1gnKSB7XG4gICAgICAgICAgICAgICAgZ2xvYmFsQ29vcmRpbmF0ZSA9ICdZJ1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBnbG9iYWxDb29yZGluYXRlID0gJ1gnXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGRpc3BsYXlQbGFjZUJhdHRsZXNoaXBCb2FyZCgpXG4gICAgICAgIH0pXG5cbiAgICAgICAgcm90YXRlQ29udGFpbmVyLmFwcGVuZENoaWxkKHJvdGF0ZUJ0bilcbiAgICB9O1xuXG4gICAgY3JlYXRlUm90YXRlQnRuKCk7XG5cbiAgICAoR2FtZS5nZXRQbGF5ZXJHYW1lYm9hcmQoKS5nZXRCb2FyZCgpKS5mb3JFYWNoKChyb3dDZWxsKSA9PiB7XG5cbiAgICAgICAgcm93Q2VsbC5mb3JFYWNoKChjb2x1bW5DZWxsKSA9PiB7XG5cbiAgICAgICAgICAgIGNvbnN0IGJvYXJkQ2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgICAgICBib2FyZENlbGwudGV4dENvbnRlbnQgPSBjb2x1bW5DZWxsXG4gICAgICAgICAgICBib2FyZENlbGwuc2V0QXR0cmlidXRlKCdpZCcsIGNvbHVtbkNlbGwpXG4gICAgICAgICAgICBib2FyZENlbGwuY2xhc3NMaXN0LmFkZCgncGxheWVyLW9uZS1jZWxscy1wbGFjZScpXG4gICAgICAgICAgICBib2FyZENlbGwuc3R5bGUud2lkdGggPSAnMTAlJ1xuICAgICAgICAgICAgYm9hcmRDZWxsLnN0eWxlLmhlaWdodCA9ICcxMCUnXG5cbiAgICAgICAgICAgIGlmIChHYW1lLmdldFBsYXllckdhbWVib2FyZCgpLmdldE9jY3VwaWVkQ2VsbHMoKS5pbmNsdWRlcyhib2FyZENlbGwudGV4dENvbnRlbnQpKSB7XG4gICAgICAgICAgICAgICAgYm9hcmRDZWxsLmNsYXNzTGlzdC5hZGQoJ29jY3VwaWVkLWNlbGwnKVxuICAgICAgICAgICAgfSBcblxuICAgICAgICAgICAgZnVuY3Rpb24gcGxheWVyQmF0dGxlc2hpcENlbGwoKSB7XG5cbiAgICAgICAgICAgICAgICBib2FyZENlbGwuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgYm9hcmRDZWxsLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICd5ZWxsb3cnXG4gICAgICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgICAgIGJvYXJkQ2VsbC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBib2FyZENlbGwuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJydcbiAgICAgICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZ1bmN0aW9uIHBsYXllckJhdHRsZXNoaXBDbGljaygpIHtcbiAgICAgICAgICAgICAgICBib2FyZENlbGwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGJhdHRsZXNoaXAuY3JlYXRlQmF0dGxlc2hpcChib2FyZENlbGwuZ2V0QXR0cmlidXRlKCdpZCcpLCBnbG9iYWxDb29yZGluYXRlKVxuICAgICAgICAgICAgICAgICAgICBwbGF5ZXJTaGlwcy5wdXNoKGJhdHRsZXNoaXApXG4gICAgICAgICAgICAgICAgICAgIEdhbWUuZ2V0UGxheWVyR2FtZWJvYXJkKCkucGxhY2VTaGlwcyhwbGF5ZXJTaGlwcyk7XG4gICAgICAgICAgICAgICAgICAgIEdhbWUuZ2V0UGxheWVyR2FtZWJvYXJkKCkucGxhY2VFbXB0eVNwYWNlKCk7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXlQbGFjZURlc3Ryb3llckJvYXJkKClcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHBvc3NpYmxlQ2hvaWNlcy5pbmNsdWRlcyhib2FyZENlbGwuZ2V0QXR0cmlidXRlKCdpZCcpKSkge1xuICAgICAgICAgICAgICAgIHBsYXllckJhdHRsZXNoaXBDZWxsKClcbiAgICAgICAgICAgICAgICBwbGF5ZXJCYXR0bGVzaGlwQ2xpY2soKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcGxheWVyT25lR2FtZWJvYXJkLmFwcGVuZENoaWxkKGJvYXJkQ2VsbClcbiAgICAgICAgfSlcbiAgICB9KVxufVxuXG5mdW5jdGlvbiBkaXNwbGF5UGxhY2VEZXN0cm95ZXJCb2FyZCgpIHtcbiAgICBjb25zdCBwbGF5ZXJPbmVHYW1lYm9hcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGxheWVyLW9uZS1nYW1lYm9hcmQnKTtcbiAgICBwbGF5ZXJPbmVHYW1lYm9hcmQudGV4dENvbnRlbnQgPSBbXTtcblxuICAgIGxldCBkZXN0cm95ZXIgPSBTaGlwKFtdKTtcbiAgICBsZXQgb3BlblNwYWNlID0gZGVzdHJveWVyLnNoaXBDaG9pY2VzKGdsb2JhbENvb3JkaW5hdGUsIDQpO1xuICAgIGxldCBvY2N1cGllZFNwYWNlID0gR2FtZS5nZXRQbGF5ZXJHYW1lYm9hcmQoKS5nZXRPY2N1cGllZENlbGxzKCk7XG4gICAgbGV0IHBvc3NpYmxlQ2hvaWNlcyA9IFtdO1xuXG4gICAgb3BlblNwYWNlLmZvckVhY2godmFsdWUgPT4ge1xuICAgICAgICBpZiAoIShvY2N1cGllZFNwYWNlLmluY2x1ZGVzKHZhbHVlKSkpIHtcbiAgICAgICAgICAgIHBvc3NpYmxlQ2hvaWNlcy5wdXNoKHZhbHVlKVxuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICBmdW5jdGlvbiBjcmVhdGVSb3RhdGVCdG4oKSB7XG4gICAgICAgIGNvbnN0IHJvdGF0ZUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yb3RhdGUtY29udGFpbmVyJylcbiAgICAgICAgcm90YXRlQ29udGFpbmVyLnRleHRDb250ZW50ID0gJyc7XG4gICAgICAgIGNvbnN0IHJvdGF0ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgICAgIHJvdGF0ZUJ0bi50ZXh0Q29udGVudCA9ICdSb3RhdGUnXG5cbiAgICAgICAgcm90YXRlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgaWYgKGdsb2JhbENvb3JkaW5hdGUgPT0gJ1gnKSB7XG4gICAgICAgICAgICAgICAgZ2xvYmFsQ29vcmRpbmF0ZSA9ICdZJ1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBnbG9iYWxDb29yZGluYXRlID0gJ1gnXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGRpc3BsYXlQbGFjZURlc3Ryb3llckJvYXJkKClcbiAgICAgICAgfSlcblxuICAgICAgICByb3RhdGVDb250YWluZXIuYXBwZW5kQ2hpbGQocm90YXRlQnRuKVxuICAgIH07XG5cbiAgICBjcmVhdGVSb3RhdGVCdG4oKTtcblxuICAgIChHYW1lLmdldFBsYXllckdhbWVib2FyZCgpLmdldEJvYXJkKCkpLmZvckVhY2goKHJvd0NlbGwpID0+IHtcblxuICAgICAgICByb3dDZWxsLmZvckVhY2goKGNvbHVtbkNlbGwpID0+IHtcblxuICAgICAgICAgICAgY29uc3QgYm9hcmRDZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgICAgIGJvYXJkQ2VsbC50ZXh0Q29udGVudCA9IGNvbHVtbkNlbGxcbiAgICAgICAgICAgIGJvYXJkQ2VsbC5zZXRBdHRyaWJ1dGUoJ2lkJywgY29sdW1uQ2VsbClcbiAgICAgICAgICAgIGJvYXJkQ2VsbC5jbGFzc0xpc3QuYWRkKCdwbGF5ZXItb25lLWNlbGxzLXBsYWNlJylcbiAgICAgICAgICAgIGJvYXJkQ2VsbC5zdHlsZS53aWR0aCA9ICcxMCUnXG4gICAgICAgICAgICBib2FyZENlbGwuc3R5bGUuaGVpZ2h0ID0gJzEwJSdcblxuICAgICAgICAgICAgaWYgKEdhbWUuZ2V0UGxheWVyR2FtZWJvYXJkKCkuZ2V0T2NjdXBpZWRDZWxscygpLmluY2x1ZGVzKGJvYXJkQ2VsbC50ZXh0Q29udGVudCkpIHtcbiAgICAgICAgICAgICAgICBib2FyZENlbGwuY2xhc3NMaXN0LmFkZCgnb2NjdXBpZWQtY2VsbCcpXG4gICAgICAgICAgICB9IFxuXG4gICAgICAgICAgICBmdW5jdGlvbiBwbGF5ZXJEZXN0cm95ZXJDZWxsKCkge1xuXG4gICAgICAgICAgICAgICAgYm9hcmRDZWxsLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGJvYXJkQ2VsbC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAneWVsbG93J1xuICAgICAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgICAgICBib2FyZENlbGwuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgYm9hcmRDZWxsLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcnXG4gICAgICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmdW5jdGlvbiBwbGF5ZXJEZXN0cm95ZXJDbGljaygpIHtcbiAgICAgICAgICAgICAgICBib2FyZENlbGwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGRlc3Ryb3llci5jcmVhdGVEZXN0cm95ZXIoYm9hcmRDZWxsLmdldEF0dHJpYnV0ZSgnaWQnKSwgZ2xvYmFsQ29vcmRpbmF0ZSlcbiAgICAgICAgICAgICAgICAgICAgcGxheWVyU2hpcHMucHVzaChkZXN0cm95ZXIpXG4gICAgICAgICAgICAgICAgICAgIEdhbWUuZ2V0UGxheWVyR2FtZWJvYXJkKCkucGxhY2VTaGlwcyhwbGF5ZXJTaGlwcyk7XG4gICAgICAgICAgICAgICAgICAgIEdhbWUuZ2V0UGxheWVyR2FtZWJvYXJkKCkucGxhY2VFbXB0eVNwYWNlKCk7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXlQbGFjZVN1Ym1hcmluZUJvYXJkKClcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHBvc3NpYmxlQ2hvaWNlcy5pbmNsdWRlcyhib2FyZENlbGwuZ2V0QXR0cmlidXRlKCdpZCcpKSkge1xuICAgICAgICAgICAgICAgIHBsYXllckRlc3Ryb3llckNlbGwoKVxuICAgICAgICAgICAgICAgIHBsYXllckRlc3Ryb3llckNsaWNrKClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHBsYXllck9uZUdhbWVib2FyZC5hcHBlbmRDaGlsZChib2FyZENlbGwpXG4gICAgICAgIH0pXG4gICAgfSlcbn1cblxuZnVuY3Rpb24gZGlzcGxheVBsYWNlU3VibWFyaW5lQm9hcmQoKSB7XG4gICAgY29uc3QgcGxheWVyT25lR2FtZWJvYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBsYXllci1vbmUtZ2FtZWJvYXJkJyk7XG4gICAgcGxheWVyT25lR2FtZWJvYXJkLnRleHRDb250ZW50ID0gW107XG5cbiAgICBsZXQgc3VibWFyaW5lID0gU2hpcChbXSk7XG4gICAgbGV0IG9wZW5TcGFjZSA9IHN1Ym1hcmluZS5zaGlwQ2hvaWNlcyhnbG9iYWxDb29yZGluYXRlLCAzKTtcbiAgICBsZXQgb2NjdXBpZWRTcGFjZSA9IEdhbWUuZ2V0UGxheWVyR2FtZWJvYXJkKCkuZ2V0T2NjdXBpZWRDZWxscygpO1xuICAgIGxldCBwb3NzaWJsZUNob2ljZXMgPSBbXTtcblxuICAgIG9wZW5TcGFjZS5mb3JFYWNoKHZhbHVlID0+IHtcbiAgICAgICAgaWYgKCEob2NjdXBpZWRTcGFjZS5pbmNsdWRlcyh2YWx1ZSkpKSB7XG4gICAgICAgICAgICBwb3NzaWJsZUNob2ljZXMucHVzaCh2YWx1ZSlcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgZnVuY3Rpb24gY3JlYXRlUm90YXRlQnRuKCkge1xuICAgICAgICBjb25zdCByb3RhdGVDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucm90YXRlLWNvbnRhaW5lcicpXG4gICAgICAgIHJvdGF0ZUNvbnRhaW5lci50ZXh0Q29udGVudCA9ICcnO1xuICAgICAgICBjb25zdCByb3RhdGVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgICAgICByb3RhdGVCdG4udGV4dENvbnRlbnQgPSAnUm90YXRlJ1xuXG4gICAgICAgIHJvdGF0ZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGlmIChnbG9iYWxDb29yZGluYXRlID09ICdYJykge1xuICAgICAgICAgICAgICAgIGdsb2JhbENvb3JkaW5hdGUgPSAnWSdcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZ2xvYmFsQ29vcmRpbmF0ZSA9ICdYJ1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBkaXNwbGF5UGxhY2VTdWJtYXJpbmVCb2FyZCgpXG4gICAgICAgIH0pXG5cbiAgICAgICAgcm90YXRlQ29udGFpbmVyLmFwcGVuZENoaWxkKHJvdGF0ZUJ0bilcbiAgICB9O1xuXG4gICAgY3JlYXRlUm90YXRlQnRuKCk7XG5cbiAgICAoR2FtZS5nZXRQbGF5ZXJHYW1lYm9hcmQoKS5nZXRCb2FyZCgpKS5mb3JFYWNoKChyb3dDZWxsKSA9PiB7XG5cbiAgICAgICAgcm93Q2VsbC5mb3JFYWNoKChjb2x1bW5DZWxsKSA9PiB7XG5cbiAgICAgICAgICAgIGNvbnN0IGJvYXJkQ2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgICAgICBib2FyZENlbGwudGV4dENvbnRlbnQgPSBjb2x1bW5DZWxsXG4gICAgICAgICAgICBib2FyZENlbGwuc2V0QXR0cmlidXRlKCdpZCcsIGNvbHVtbkNlbGwpXG4gICAgICAgICAgICBib2FyZENlbGwuY2xhc3NMaXN0LmFkZCgncGxheWVyLW9uZS1jZWxscy1wbGFjZScpXG4gICAgICAgICAgICBib2FyZENlbGwuc3R5bGUud2lkdGggPSAnMTAlJ1xuICAgICAgICAgICAgYm9hcmRDZWxsLnN0eWxlLmhlaWdodCA9ICcxMCUnXG5cbiAgICAgICAgICAgIGlmIChHYW1lLmdldFBsYXllckdhbWVib2FyZCgpLmdldE9jY3VwaWVkQ2VsbHMoKS5pbmNsdWRlcyhib2FyZENlbGwudGV4dENvbnRlbnQpKSB7XG4gICAgICAgICAgICAgICAgYm9hcmRDZWxsLmNsYXNzTGlzdC5hZGQoJ29jY3VwaWVkLWNlbGwnKVxuICAgICAgICAgICAgfSBcblxuICAgICAgICAgICAgZnVuY3Rpb24gcGxheWVyU3VibWFyaW5lQ2VsbCgpIHtcblxuICAgICAgICAgICAgICAgIGJvYXJkQ2VsbC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBib2FyZENlbGwuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3llbGxvdydcbiAgICAgICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICAgICAgYm9hcmRDZWxsLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGJvYXJkQ2VsbC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnJ1xuICAgICAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZnVuY3Rpb24gcGxheWVyU3VibWFyaW5lQ2xpY2soKSB7XG4gICAgICAgICAgICAgICAgYm9hcmRDZWxsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBzdWJtYXJpbmUuY3JlYXRlU3VibWFyaW5lKGJvYXJkQ2VsbC5nZXRBdHRyaWJ1dGUoJ2lkJyksIGdsb2JhbENvb3JkaW5hdGUpXG4gICAgICAgICAgICAgICAgICAgIHBsYXllclNoaXBzLnB1c2goc3VibWFyaW5lKVxuICAgICAgICAgICAgICAgICAgICBHYW1lLmdldFBsYXllckdhbWVib2FyZCgpLnBsYWNlU2hpcHMocGxheWVyU2hpcHMpO1xuICAgICAgICAgICAgICAgICAgICBHYW1lLmdldFBsYXllckdhbWVib2FyZCgpLnBsYWNlRW1wdHlTcGFjZSgpO1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5UGxhY2VQYXRyb2xCb2FyZCgpXG4gICAgICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChwb3NzaWJsZUNob2ljZXMuaW5jbHVkZXMoYm9hcmRDZWxsLmdldEF0dHJpYnV0ZSgnaWQnKSkpIHtcbiAgICAgICAgICAgICAgICBwbGF5ZXJTdWJtYXJpbmVDZWxsKClcbiAgICAgICAgICAgICAgICBwbGF5ZXJTdWJtYXJpbmVDbGljaygpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwbGF5ZXJPbmVHYW1lYm9hcmQuYXBwZW5kQ2hpbGQoYm9hcmRDZWxsKVxuICAgICAgICB9KVxuICAgIH0pXG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlQbGFjZVBhdHJvbEJvYXJkKCkge1xuICAgIGNvbnN0IHBsYXllck9uZUdhbWVib2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wbGF5ZXItb25lLWdhbWVib2FyZCcpO1xuICAgIHBsYXllck9uZUdhbWVib2FyZC50ZXh0Q29udGVudCA9IFtdO1xuXG4gICAgbGV0IHBhdHJvbCA9IFNoaXAoW10pO1xuICAgIGxldCBvcGVuU3BhY2UgPSBwYXRyb2wuc2hpcENob2ljZXMoZ2xvYmFsQ29vcmRpbmF0ZSwgMik7XG4gICAgbGV0IG9jY3VwaWVkU3BhY2UgPSBHYW1lLmdldFBsYXllckdhbWVib2FyZCgpLmdldE9jY3VwaWVkQ2VsbHMoKTtcbiAgICBsZXQgcG9zc2libGVDaG9pY2VzID0gW107XG5cbiAgICBvcGVuU3BhY2UuZm9yRWFjaCh2YWx1ZSA9PiB7XG4gICAgICAgIGlmICghKG9jY3VwaWVkU3BhY2UuaW5jbHVkZXModmFsdWUpKSkge1xuICAgICAgICAgICAgcG9zc2libGVDaG9pY2VzLnB1c2godmFsdWUpXG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIGZ1bmN0aW9uIGNyZWF0ZVJvdGF0ZUJ0bigpIHtcbiAgICAgICAgY29uc3Qgcm90YXRlQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJvdGF0ZS1jb250YWluZXInKVxuICAgICAgICByb3RhdGVDb250YWluZXIudGV4dENvbnRlbnQgPSAnJztcbiAgICAgICAgY29uc3Qgcm90YXRlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICAgICAgcm90YXRlQnRuLnRleHRDb250ZW50ID0gJ1JvdGF0ZSdcblxuICAgICAgICByb3RhdGVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBpZiAoZ2xvYmFsQ29vcmRpbmF0ZSA9PSAnWCcpIHtcbiAgICAgICAgICAgICAgICBnbG9iYWxDb29yZGluYXRlID0gJ1knXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGdsb2JhbENvb3JkaW5hdGUgPSAnWCdcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZGlzcGxheVBsYWNlUGF0cm9sQm9hcmQoKVxuICAgICAgICB9KVxuXG4gICAgICAgIHJvdGF0ZUNvbnRhaW5lci5hcHBlbmRDaGlsZChyb3RhdGVCdG4pXG4gICAgfTtcblxuICAgIGNyZWF0ZVJvdGF0ZUJ0bigpO1xuXG4gICAgKEdhbWUuZ2V0UGxheWVyR2FtZWJvYXJkKCkuZ2V0Qm9hcmQoKSkuZm9yRWFjaCgocm93Q2VsbCkgPT4ge1xuXG4gICAgICAgIHJvd0NlbGwuZm9yRWFjaCgoY29sdW1uQ2VsbCkgPT4ge1xuXG4gICAgICAgICAgICBjb25zdCBib2FyZENlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICAgICAgYm9hcmRDZWxsLnRleHRDb250ZW50ID0gY29sdW1uQ2VsbFxuICAgICAgICAgICAgYm9hcmRDZWxsLnNldEF0dHJpYnV0ZSgnaWQnLCBjb2x1bW5DZWxsKVxuICAgICAgICAgICAgYm9hcmRDZWxsLmNsYXNzTGlzdC5hZGQoJ3BsYXllci1vbmUtY2VsbHMtcGxhY2UnKVxuICAgICAgICAgICAgYm9hcmRDZWxsLnN0eWxlLndpZHRoID0gJzEwJSdcbiAgICAgICAgICAgIGJvYXJkQ2VsbC5zdHlsZS5oZWlnaHQgPSAnMTAlJ1xuXG4gICAgICAgICAgICBpZiAoR2FtZS5nZXRQbGF5ZXJHYW1lYm9hcmQoKS5nZXRPY2N1cGllZENlbGxzKCkuaW5jbHVkZXMoYm9hcmRDZWxsLnRleHRDb250ZW50KSkge1xuICAgICAgICAgICAgICAgIGJvYXJkQ2VsbC5jbGFzc0xpc3QuYWRkKCdvY2N1cGllZC1jZWxsJylcbiAgICAgICAgICAgIH0gXG5cbiAgICAgICAgICAgIGZ1bmN0aW9uIHBsYXllclBhdHJvbENlbGwoKSB7XG5cbiAgICAgICAgICAgICAgICBib2FyZENlbGwuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgYm9hcmRDZWxsLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICd5ZWxsb3cnXG4gICAgICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgICAgIGJvYXJkQ2VsbC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBib2FyZENlbGwuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJydcbiAgICAgICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZ1bmN0aW9uIHBsYXllclBhdHJvbENsaWNrKCkge1xuICAgICAgICAgICAgICAgIGJvYXJkQ2VsbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcGF0cm9sLmNyZWF0ZVBhdHJvbChib2FyZENlbGwuZ2V0QXR0cmlidXRlKCdpZCcpLCBnbG9iYWxDb29yZGluYXRlKVxuICAgICAgICAgICAgICAgICAgICBwbGF5ZXJTaGlwcy5wdXNoKHBhdHJvbClcbiAgICAgICAgICAgICAgICAgICAgR2FtZS5nZXRQbGF5ZXJHYW1lYm9hcmQoKS5wbGFjZVNoaXBzKHBsYXllclNoaXBzKTtcbiAgICAgICAgICAgICAgICAgICAgR2FtZS5nZXRQbGF5ZXJHYW1lYm9hcmQoKS5wbGFjZUVtcHR5U3BhY2UoKTtcbiAgICAgICAgICAgICAgICAgICAgZ2FtZVN0YXJ0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheVBsYXllck9uZUJvYXJkKClcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHBvc3NpYmxlQ2hvaWNlcy5pbmNsdWRlcyhib2FyZENlbGwuZ2V0QXR0cmlidXRlKCdpZCcpKSkge1xuICAgICAgICAgICAgICAgIHBsYXllclBhdHJvbENlbGwoKVxuICAgICAgICAgICAgICAgIHBsYXllclBhdHJvbENsaWNrKClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHBsYXllck9uZUdhbWVib2FyZC5hcHBlbmRDaGlsZChib2FyZENlbGwpXG4gICAgICAgIH0pXG4gICAgfSlcbn1cblxubGV0IGdsb2JhbENvb3JkaW5hdGUgPSBcIlhcIlxuXG5sZXQgcGxheWVyU2hpcHMgPSBbXVxuXG5sZXQgY29tcHV0ZXJTaGlwcyA9IFtdXG5cbmZ1bmN0aW9uIHNldENvbXB1dGVyU2hpcHMoKSB7XG5cbiAgICBHYW1lLmdldENvbXB1dGVyR2FtZWJvYXJkKCkucGxhY2VFbXB0eVNwYWNlKCk7XG5cbiAgICBsZXQgY2FycmllciA9IFNoaXAoW10pXG4gICAgY2Fycmllci5jcmVhdGVDYXJyaWVyKFN0cmluZygxMDApLCBHYW1lLmdldENvbXB1dGVyR2FtZWJvYXJkKCkuY29tcHV0ZXJPcmllbnRhdGlvbigpKVxuICAgIGNvbXB1dGVyU2hpcHMucHVzaChjYXJyaWVyKVxuXG4gICAgR2FtZS5nZXRDb21wdXRlckdhbWVib2FyZCgpLnBsYWNlU2hpcHMoY29tcHV0ZXJTaGlwcyk7XG4gICAgR2FtZS5nZXRDb21wdXRlckdhbWVib2FyZCgpLnBsYWNlRW1wdHlTcGFjZSgpO1xuXG5cbiAgICBsZXQgYmF0dGxlc2hpcCA9IFNoaXAoW10pXG5cbiAgICB3aGlsZSAoR2FtZS5nZXRDb21wdXRlckdhbWVib2FyZCgpLmNoZWNrT2NjdXBhdGlvbihiYXR0bGVzaGlwLmdldFBvc2l0aW9uKCkpKSB7XG5cbiAgICAgICAgYmF0dGxlc2hpcCA9IFNoaXAoW10pXG4gICAgICAgIGJhdHRsZXNoaXAuY3JlYXRlQmF0dGxlc2hpcChTdHJpbmcoMTAwKSwgR2FtZS5nZXRDb21wdXRlckdhbWVib2FyZCgpLmNvbXB1dGVyT3JpZW50YXRpb24oKSlcblxuICAgIH1cblxuICAgIGNvbXB1dGVyU2hpcHMucHVzaChiYXR0bGVzaGlwKVxuICAgIEdhbWUuZ2V0Q29tcHV0ZXJHYW1lYm9hcmQoKS5wbGFjZVNoaXBzKGNvbXB1dGVyU2hpcHMpO1xuICAgIEdhbWUuZ2V0Q29tcHV0ZXJHYW1lYm9hcmQoKS5wbGFjZUVtcHR5U3BhY2UoKTtcblxuXG4gICAgbGV0IGRlc3Ryb3llciA9IFNoaXAoW10pXG5cbiAgICB3aGlsZSAoR2FtZS5nZXRDb21wdXRlckdhbWVib2FyZCgpLmNoZWNrT2NjdXBhdGlvbihkZXN0cm95ZXIuZ2V0UG9zaXRpb24oKSkpIHtcblxuICAgICAgICBkZXN0cm95ZXIgPSBTaGlwKFtdKVxuICAgICAgICBkZXN0cm95ZXIuY3JlYXRlRGVzdHJveWVyKFN0cmluZygxMDApLCBHYW1lLmdldENvbXB1dGVyR2FtZWJvYXJkKCkuY29tcHV0ZXJPcmllbnRhdGlvbigpKVxuXG4gICAgfVxuXG4gICAgY29tcHV0ZXJTaGlwcy5wdXNoKGRlc3Ryb3llcilcbiAgICBHYW1lLmdldENvbXB1dGVyR2FtZWJvYXJkKCkucGxhY2VTaGlwcyhjb21wdXRlclNoaXBzKTtcbiAgICBHYW1lLmdldENvbXB1dGVyR2FtZWJvYXJkKCkucGxhY2VFbXB0eVNwYWNlKCk7XG5cbiAgICBsZXQgc3VibWFyaW5lID0gU2hpcChbXSlcblxuICAgIHdoaWxlIChHYW1lLmdldENvbXB1dGVyR2FtZWJvYXJkKCkuY2hlY2tPY2N1cGF0aW9uKHN1Ym1hcmluZS5nZXRQb3NpdGlvbigpKSkge1xuXG4gICAgICAgIHN1Ym1hcmluZSA9IFNoaXAoW10pXG4gICAgICAgIHN1Ym1hcmluZS5jcmVhdGVTdWJtYXJpbmUoU3RyaW5nKDEwMCksIEdhbWUuZ2V0Q29tcHV0ZXJHYW1lYm9hcmQoKS5jb21wdXRlck9yaWVudGF0aW9uKCkpXG5cbiAgICB9XG5cbiAgICBjb21wdXRlclNoaXBzLnB1c2goc3VibWFyaW5lKVxuICAgIEdhbWUuZ2V0Q29tcHV0ZXJHYW1lYm9hcmQoKS5wbGFjZVNoaXBzKGNvbXB1dGVyU2hpcHMpO1xuICAgIEdhbWUuZ2V0Q29tcHV0ZXJHYW1lYm9hcmQoKS5wbGFjZUVtcHR5U3BhY2UoKTtcblxuICAgIGxldCBwYXRyb2wgPSBTaGlwKFtdKVxuXG4gICAgd2hpbGUgKEdhbWUuZ2V0Q29tcHV0ZXJHYW1lYm9hcmQoKS5jaGVja09jY3VwYXRpb24ocGF0cm9sLmdldFBvc2l0aW9uKCkpKSB7XG5cbiAgICAgICAgcGF0cm9sID0gU2hpcChbXSlcbiAgICAgICAgcGF0cm9sLmNyZWF0ZVBhdHJvbChTdHJpbmcoMTAwKSwgR2FtZS5nZXRDb21wdXRlckdhbWVib2FyZCgpLmNvbXB1dGVyT3JpZW50YXRpb24oKSlcblxuICAgIH1cblxuICAgIGNvbXB1dGVyU2hpcHMucHVzaChwYXRyb2wpXG4gICAgR2FtZS5nZXRDb21wdXRlckdhbWVib2FyZCgpLnBsYWNlU2hpcHMoY29tcHV0ZXJTaGlwcyk7XG4gICAgR2FtZS5nZXRDb21wdXRlckdhbWVib2FyZCgpLnBsYWNlRW1wdHlTcGFjZSgpO1xuXG59XG5cbmZ1bmN0aW9uIGdhbWVDb250cm9sbGVyKCkge1xuICAgIHNldENvbXB1dGVyU2hpcHMoKVxuICAgIGRpc3BsYXlQbGF5ZXJUd29Cb2FyZCgpXG4gICAgZGlzcGxheVBsYWNlQ2FycmllckJvYXJkKClcbn1cblxuZ2FtZUNvbnRyb2xsZXIoKVxuIl0sIm5hbWVzIjpbIlNoaXAiLCJHYW1lYm9hcmQiLCJQbGF5ZXIiLCJHYW1lIiwicGxheWVycyIsImdhbWVib2FyZHMiLCJwbGF5ZXIiLCJwbGF5ZXJHYW1lYm9hcmQiLCJjb21wdXRlciIsImNvbXB1dGVyR2FtZWJvYXJkIiwicHVzaCIsImFjdGl2ZVBsYXllciIsImFjdGl2ZUJvYXJkIiwiZ2V0QWN0aXZlUGxheWVyIiwiZ2V0QWN0aXZlR2FtZWJvYXJkIiwiZ2V0UGxheWVyIiwiZ2V0Q29tcHV0ZXIiLCJnZXRQbGF5ZXJHYW1lYm9hcmQiLCJnZXRDb21wdXRlckdhbWVib2FyZCIsInN3aXRjaFBsYXllclR1cm4iLCJzd2l0Y2hBY3RpdmVCb2FyZCIsInBvc2l0aW9uIiwiZ2V0UG9zaXRpb24iLCJzZXRQb3NpdGlvbiIsImNvb3JkcyIsInNoaXBDaG9pY2VzIiwib3JpZW50YXRpb24iLCJsZW5ndGgiLCJwb3NzaWJsZUNob2ljZXMiLCJpIiwiaiIsInRvU3RyaW5nIiwiY3JlYXRlQ2FycmllciIsImNvb3JkaW5hdGUiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJOdW1iZXIiLCJTdHJpbmciLCJjcmVhdGVCYXR0bGVzaGlwIiwiY3JlYXRlRGVzdHJveWVyIiwiY3JlYXRlU3VibWFyaW5lIiwiY3JlYXRlUGF0cm9sIiwicm93IiwiY29sdW1uIiwiYm9hcmQiLCJtaXNzc2VkQ2VsbHMiLCJoaXRDZWxscyIsImVtcHR5Q2VsbHMiLCJvY2N1cGllZENlbGxzIiwiZ2V0Qm9hcmQiLCJnZXRNaXNzZWRDZWxscyIsInNldE1pc3NlZENlbGxzIiwibmV3Q2VsbCIsImdldEhpdENlbGxzIiwic2V0SGl0Q2VsbHMiLCJnZXRFbXB0eUNlbGxzIiwic2V0RW1wdHlDZWxscyIsImNsZWFyRW1wdHlDZWxscyIsInNwbGljZSIsImdldE9jY3VwaWVkQ2VsbHMiLCJzZXRPY2N1cGllZENlbGxzIiwiY2xlYXJPY2N1cGllZENlbGxzIiwicGxhY2VTaGlwcyIsInNoaXBzIiwiZm9yRWFjaCIsInNoaXAiLCJwb3NpdGlvbkNlbGwiLCJwbGFjZUVtcHR5U3BhY2UiLCJyb3dDZWxsIiwiY29sdW1uQ2VsbCIsImluY2x1ZGVzIiwicmVjaWV2ZUF0dGFjayIsIm9jY3VwaWVkSW5kZXgiLCJpbmRleE9mIiwiZW1wdHlJbmRleCIsImNoZWNrR2FtZU92ZXIiLCJjb21wdXRlck9yaWVudGF0aW9uIiwib3JpZW50YXRpb25zIiwiY2hlY2tPY2N1cGF0aW9uIiwidGVzdEFycmF5IiwibmFtZSIsImdldE5hbWUiLCJnZXRQb3NzaWJsZUNob2ljZXMiLCJjb21wdXRlckF0dGFjayIsImF0dGFja0Nvb3JkaW5hdGUiLCJpbmRleCIsImdhbWVTdGFydCIsImRpc3BsYXlIZWFkZXIiLCJwbGF5ZXJPbmVIZWFkZXIiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJwbGF5ZXJUd29IZWFkZXIiLCJ0ZXh0Q29udGVudCIsImRpc3BsYXlQbGF5ZXJPbmVCb2FyZCIsInBsYXllck9uZUdhbWVib2FyZCIsImJvYXJkQ2VsbCIsImNyZWF0ZUVsZW1lbnQiLCJzZXRBdHRyaWJ1dGUiLCJjbGFzc0xpc3QiLCJhZGQiLCJzdHlsZSIsIndpZHRoIiwiaGVpZ2h0IiwicGxheWVyQ2VsbENsaWNrIiwiZ2V0QXR0cmlidXRlIiwiY29udGFpbnMiLCJyZW1vdmUiLCJkaXNwbGF5UGxheWVyVHdvQm9hcmQiLCJhcHBlbmRDaGlsZCIsInBsYXllclR3b0dhbWVib2FyZCIsImRpc2FibGVBbGxCdXR0b25zIiwiYm9hcmRDZWxscyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJjZWxsIiwicmVwbGFjZVdpdGgiLCJjbG9uZU5vZGUiLCJjb21wdXRlckNlbGxDbGljayIsImFkZEV2ZW50TGlzdGVuZXIiLCJkaXNwbGF5UGxhY2VDYXJyaWVyQm9hcmQiLCJjYXJyaWVyIiwiZ2xvYmFsQ29vcmRpbmF0ZSIsImNyZWF0ZVJvdGF0ZUJ0biIsInJvdGF0ZUNvbnRhaW5lciIsInJvdGF0ZUJ0biIsInBsYXllckNhcnJpZXJDZWxsIiwiYmFja2dyb3VuZENvbG9yIiwicGxheWVyQ2FycmllckNsaWNrIiwicGxheWVyU2hpcHMiLCJkaXNwbGF5UGxhY2VCYXR0bGVzaGlwQm9hcmQiLCJiYXR0bGVzaGlwIiwib3BlblNwYWNlIiwib2NjdXBpZWRTcGFjZSIsInZhbHVlIiwicGxheWVyQmF0dGxlc2hpcENlbGwiLCJwbGF5ZXJCYXR0bGVzaGlwQ2xpY2siLCJkaXNwbGF5UGxhY2VEZXN0cm95ZXJCb2FyZCIsImRlc3Ryb3llciIsInBsYXllckRlc3Ryb3llckNlbGwiLCJwbGF5ZXJEZXN0cm95ZXJDbGljayIsImRpc3BsYXlQbGFjZVN1Ym1hcmluZUJvYXJkIiwic3VibWFyaW5lIiwicGxheWVyU3VibWFyaW5lQ2VsbCIsInBsYXllclN1Ym1hcmluZUNsaWNrIiwiZGlzcGxheVBsYWNlUGF0cm9sQm9hcmQiLCJwYXRyb2wiLCJwbGF5ZXJQYXRyb2xDZWxsIiwicGxheWVyUGF0cm9sQ2xpY2siLCJjb21wdXRlclNoaXBzIiwic2V0Q29tcHV0ZXJTaGlwcyIsImdhbWVDb250cm9sbGVyIl0sInNvdXJjZVJvb3QiOiIifQ==