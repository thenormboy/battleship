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
    let possibleChoices = [];
    if (coordinate == 100) {
      if (orientation == 'X') {
        for (let i = 0; i < 10; i++) {
          for (let j = 0; j < 6; j++) {
            possibleChoices.push(i.toString() + j.toString());
          }
        }
      } else if (orientation == 'Y') {
        for (let i = 0; i < 6; i++) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDLENBQUMsQ0FBQ3lDLFVBQVUsQ0FBQytELGFBQWEsQ0FBQztFQUNyRHZILDBDQUFJLENBQUNlLG9CQUFvQixDQUFDLENBQUMsQ0FBQzhDLGVBQWUsQ0FBQyxDQUFDO0FBRWpEO0FBRUEsU0FBUzRELGNBQWNBLENBQUEsRUFBRztFQUV0QnhDLGFBQWEsQ0FBQyxDQUFDO0VBQ2ZnQyxjQUFjLENBQUMsQ0FBQztFQUNoQk8sZ0JBQWdCLENBQUMsQ0FBQztFQUNsQmpDLHFCQUFxQixDQUFDLENBQUM7RUFDdkJjLHFCQUFxQixDQUFDLENBQUM7QUFDM0I7QUFFQW9CLGNBQWMsQ0FBQyxDQUFDLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2dhbWUuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9vYmplY3RzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTaGlwLCBHYW1lYm9hcmQsIFBsYXllciB9IGZyb20gXCIuL29iamVjdHMuanNcIjtcblxuY29uc3QgR2FtZSA9ICgoKSA9PiB7XG5cbiAgICBsZXQgcGxheWVycyA9IFtdXG4gICAgbGV0IGdhbWVib2FyZHMgPSBbXVxuXG4gICAgbGV0IHBsYXllciA9IFBsYXllcignUGxheWVyJylcbiAgICBsZXQgcGxheWVyR2FtZWJvYXJkID0gR2FtZWJvYXJkKClcblxuICAgIGxldCBjb21wdXRlciA9IFBsYXllcignQ29tcHV0ZXInKVxuICAgIGxldCBjb21wdXRlckdhbWVib2FyZCA9IEdhbWVib2FyZCgpXG5cbiAgICBwbGF5ZXJzLnB1c2gocGxheWVyKVxuICAgIHBsYXllcnMucHVzaChjb21wdXRlcilcblxuICAgIGdhbWVib2FyZHMucHVzaChwbGF5ZXJHYW1lYm9hcmQpXG4gICAgZ2FtZWJvYXJkcy5wdXNoKGNvbXB1dGVyR2FtZWJvYXJkKVxuXG4gICAgbGV0IGFjdGl2ZVBsYXllciA9IHBsYXllcnNbMF1cbiAgICBsZXQgYWN0aXZlQm9hcmQgPSBnYW1lYm9hcmRzWzBdXG5cbiAgICBjb25zdCBnZXRBY3RpdmVQbGF5ZXIgPSAoKSA9PiBhY3RpdmVQbGF5ZXJcbiAgICBjb25zdCBnZXRBY3RpdmVHYW1lYm9hcmQgPSAoKSA9PiBhY3RpdmVCb2FyZFxuXG4gICAgY29uc3QgZ2V0UGxheWVyID0gKCkgPT4gcGxheWVyXG4gICAgY29uc3QgZ2V0Q29tcHV0ZXIgPSAoKSA9PiBjb21wdXRlclxuXG4gICAgY29uc3QgZ2V0UGxheWVyR2FtZWJvYXJkID0gKCkgPT4gcGxheWVyR2FtZWJvYXJkXG4gICAgY29uc3QgZ2V0Q29tcHV0ZXJHYW1lYm9hcmQgPSAoKSA9PiBjb21wdXRlckdhbWVib2FyZFxuXG4gICAgY29uc3Qgc3dpdGNoUGxheWVyVHVybiA9ICgpID0+IHtcbiAgICAgICAgaWYgKGFjdGl2ZVBsYXllciA9PT0gcGxheWVyc1swXSkge1xuICAgICAgICAgICAgYWN0aXZlUGxheWVyID0gcGxheWVyc1sxXVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYWN0aXZlUGxheWVyID0gcGxheWVyc1swXVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3Qgc3dpdGNoQWN0aXZlQm9hcmQgPSAoKSA9PiB7XG4gICAgICAgIGlmIChhY3RpdmVCb2FyZCA9PT0gZ2FtZWJvYXJkc1swXSkge1xuICAgICAgICAgICAgYWN0aXZlQm9hcmQgPSBnYW1lYm9hcmRzWzFdXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBhY3RpdmVCb2FyZCA9IGdhbWVib2FyZHNbMF1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIGdldFBsYXllcixcbiAgICAgICAgZ2V0UGxheWVyR2FtZWJvYXJkLFxuICAgICAgICBnZXRDb21wdXRlcixcbiAgICAgICAgZ2V0Q29tcHV0ZXJHYW1lYm9hcmQsXG4gICAgICAgIGdldEFjdGl2ZVBsYXllcixcbiAgICAgICAgZ2V0QWN0aXZlR2FtZWJvYXJkLFxuICAgICAgICBzd2l0Y2hQbGF5ZXJUdXJuLFxuICAgICAgICBzd2l0Y2hBY3RpdmVCb2FyZFxuICAgIH1cblxufSkoKTtcblxuZXhwb3J0IHsgR2FtZSB9ICIsImNvbnN0IFNoaXAgPSAocG9zaXRpb24pID0+IHtcblxuICAgIGNvbnN0IGdldFBvc2l0aW9uID0gKCkgPT4gcG9zaXRpb25cblxuICAgIGNvbnN0IHNldFBvc2l0aW9uID0gKGNvb3JkcykgPT4ge1xuICAgICAgICBnZXRQb3NpdGlvbigpLnB1c2goY29vcmRzKVxuICAgIH1cblxuICAgIGNvbnN0IGNyZWF0ZUNhcnJpZXIgPSAoY29vcmRpbmF0ZSwgb3JpZW50YXRpb24pID0+IHtcblxuICAgICAgICBsZXQgcG9zc2libGVDaG9pY2VzID0gW11cblxuICAgICAgICBpZiAoY29vcmRpbmF0ZSA9PSAxMDApIHtcbiAgICAgICAgICAgIGlmIChvcmllbnRhdGlvbiA9PSAnWCcpIHtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCA2OyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc3NpYmxlQ2hvaWNlcy5wdXNoKGkudG9TdHJpbmcoKSArIGoudG9TdHJpbmcoKSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAob3JpZW50YXRpb24gPT0gJ1knKSB7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA2OyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCAxMDsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NzaWJsZUNob2ljZXMucHVzaChpLnRvU3RyaW5nKCkgKyBqLnRvU3RyaW5nKCkpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvb3JkaW5hdGUgPSBwb3NzaWJsZUNob2ljZXNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogcG9zc2libGVDaG9pY2VzLmxlbmd0aCldXG5cbiAgICAgICAgfVxuXG4gICAgICAgIGNvb3JkaW5hdGUgPSBOdW1iZXIoY29vcmRpbmF0ZSlcblxuICAgICAgICBpZiAoY29vcmRpbmF0ZS50b1N0cmluZygpLmxlbmd0aCA9PSAxKSB7XG5cbiAgICAgICAgICAgIHNldFBvc2l0aW9uKCcwJyArIFN0cmluZyhjb29yZGluYXRlKSlcblxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCA1OyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAob3JpZW50YXRpb24gPT0gJ1gnKSB7XG4gICAgICAgICAgICAgICAgICAgIHNldFBvc2l0aW9uKCcwJyArIFN0cmluZyhjb29yZGluYXRlICsgaSkpXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChvcmllbnRhdGlvbiA9PSAnWScpIHtcbiAgICAgICAgICAgICAgICAgICAgc2V0UG9zaXRpb24oU3RyaW5nKGNvb3JkaW5hdGUgKyAoaSAqIDEwKSkpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNTsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKG9yaWVudGF0aW9uID09ICdYJykge1xuICAgICAgICAgICAgICAgICAgICBzZXRQb3NpdGlvbihTdHJpbmcoY29vcmRpbmF0ZSArIGkpKVxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAob3JpZW50YXRpb24gPT0gJ1knKSB7XG4gICAgICAgICAgICAgICAgICAgIHNldFBvc2l0aW9uKFN0cmluZyhjb29yZGluYXRlICsgKGkgKiAxMCkpKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNyZWF0ZUJhdHRsZXNoaXAoY29vcmRpbmF0ZSwgb3JpZW50YXRpb24pIHtcblxuXG4gICAgICAgIGxldCBwb3NzaWJsZUNob2ljZXMgPSBbXVxuXG4gICAgICAgIGlmIChjb29yZGluYXRlID09IDEwMCkge1xuICAgICAgICAgICAgaWYgKG9yaWVudGF0aW9uID09ICdYJykge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDc7IGorKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcG9zc2libGVDaG9pY2VzLnB1c2goaS50b1N0cmluZygpICsgai50b1N0cmluZygpKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmIChvcmllbnRhdGlvbiA9PSAnWScpIHtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDc7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDEwOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc3NpYmxlQ2hvaWNlcy5wdXNoKGkudG9TdHJpbmcoKSArIGoudG9TdHJpbmcoKSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29vcmRpbmF0ZSA9IHBvc3NpYmxlQ2hvaWNlc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBwb3NzaWJsZUNob2ljZXMubGVuZ3RoKV1cblxuICAgICAgICB9XG5cbiAgICAgICAgY29vcmRpbmF0ZSA9IE51bWJlcihjb29yZGluYXRlKVxuXG4gICAgICAgIGlmIChjb29yZGluYXRlLnRvU3RyaW5nKCkubGVuZ3RoID09IDEpIHtcblxuICAgICAgICAgICAgc2V0UG9zaXRpb24oJzAnICsgU3RyaW5nKGNvb3JkaW5hdGUpKVxuXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8IDQ7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmIChvcmllbnRhdGlvbiA9PSAnWCcpIHtcbiAgICAgICAgICAgICAgICAgICAgc2V0UG9zaXRpb24oJzAnICsgU3RyaW5nKGNvb3JkaW5hdGUgKyBpKSlcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKG9yaWVudGF0aW9uID09ICdZJykge1xuICAgICAgICAgICAgICAgICAgICBzZXRQb3NpdGlvbihTdHJpbmcoY29vcmRpbmF0ZSArIChpICogMTApKSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA0OyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAob3JpZW50YXRpb24gPT0gJ1gnKSB7XG4gICAgICAgICAgICAgICAgICAgIHNldFBvc2l0aW9uKFN0cmluZyhjb29yZGluYXRlICsgaSkpXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChvcmllbnRhdGlvbiA9PSAnWScpIHtcbiAgICAgICAgICAgICAgICAgICAgc2V0UG9zaXRpb24oU3RyaW5nKGNvb3JkaW5hdGUgKyAoaSAqIDEwKSkpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9ICAgIH1cblxuICAgIGZ1bmN0aW9uIGNyZWF0ZURlc3Ryb3llcihjb29yZGluYXRlLCBvcmllbnRhdGlvbikge1xuXG5cblxuICAgICAgICBsZXQgcG9zc2libGVDaG9pY2VzID0gW11cblxuICAgICAgICBpZiAoY29vcmRpbmF0ZSA9PSAxMDApIHtcbiAgICAgICAgICAgIGlmIChvcmllbnRhdGlvbiA9PSAnWCcpIHtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCA3OyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc3NpYmxlQ2hvaWNlcy5wdXNoKGkudG9TdHJpbmcoKSArIGoudG9TdHJpbmcoKSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAob3JpZW50YXRpb24gPT0gJ1knKSB7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA3OyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCAxMDsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NzaWJsZUNob2ljZXMucHVzaChpLnRvU3RyaW5nKCkgKyBqLnRvU3RyaW5nKCkpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvb3JkaW5hdGUgPSBwb3NzaWJsZUNob2ljZXNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogcG9zc2libGVDaG9pY2VzLmxlbmd0aCldXG5cbiAgICAgICAgfVxuXG4gICAgICAgIGNvb3JkaW5hdGUgPSBOdW1iZXIoY29vcmRpbmF0ZSlcblxuICAgICAgICBpZiAoY29vcmRpbmF0ZS50b1N0cmluZygpLmxlbmd0aCA9PSAxKSB7XG5cbiAgICAgICAgICAgIHNldFBvc2l0aW9uKCcwJyArIFN0cmluZyhjb29yZGluYXRlKSlcblxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCA0OyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAob3JpZW50YXRpb24gPT0gJ1gnKSB7XG4gICAgICAgICAgICAgICAgICAgIHNldFBvc2l0aW9uKCcwJyArIFN0cmluZyhjb29yZGluYXRlICsgaSkpXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChvcmllbnRhdGlvbiA9PSAnWScpIHtcbiAgICAgICAgICAgICAgICAgICAgc2V0UG9zaXRpb24oU3RyaW5nKGNvb3JkaW5hdGUgKyAoaSAqIDEwKSkpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKG9yaWVudGF0aW9uID09ICdYJykge1xuICAgICAgICAgICAgICAgICAgICBzZXRQb3NpdGlvbihTdHJpbmcoY29vcmRpbmF0ZSArIGkpKVxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAob3JpZW50YXRpb24gPT0gJ1knKSB7XG4gICAgICAgICAgICAgICAgICAgIHNldFBvc2l0aW9uKFN0cmluZyhjb29yZGluYXRlICsgKGkgKiAxMCkpKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSAgICB9XG5cbiAgICBmdW5jdGlvbiBjcmVhdGVTdWJtYXJpbmUoY29vcmRpbmF0ZSwgb3JpZW50YXRpb24pIHtcblxuXG4gICAgICAgIGxldCBwb3NzaWJsZUNob2ljZXMgPSBbXVxuXG4gICAgICAgIGlmIChjb29yZGluYXRlID09IDEwMCkge1xuICAgICAgICAgICAgaWYgKG9yaWVudGF0aW9uID09ICdYJykge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDg7IGorKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcG9zc2libGVDaG9pY2VzLnB1c2goaS50b1N0cmluZygpICsgai50b1N0cmluZygpKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmIChvcmllbnRhdGlvbiA9PSAnWScpIHtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDEwOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc3NpYmxlQ2hvaWNlcy5wdXNoKGkudG9TdHJpbmcoKSArIGoudG9TdHJpbmcoKSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29vcmRpbmF0ZSA9IHBvc3NpYmxlQ2hvaWNlc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBwb3NzaWJsZUNob2ljZXMubGVuZ3RoKV1cblxuICAgICAgICB9XG5cbiAgICAgICAgY29vcmRpbmF0ZSA9IE51bWJlcihjb29yZGluYXRlKVxuXG4gICAgICAgIGlmIChjb29yZGluYXRlLnRvU3RyaW5nKCkubGVuZ3RoID09IDEpIHtcblxuICAgICAgICAgICAgc2V0UG9zaXRpb24oJzAnICsgU3RyaW5nKGNvb3JkaW5hdGUpKVxuXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8IDM7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmIChvcmllbnRhdGlvbiA9PSAnWCcpIHtcbiAgICAgICAgICAgICAgICAgICAgc2V0UG9zaXRpb24oJzAnICsgU3RyaW5nKGNvb3JkaW5hdGUgKyBpKSlcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKG9yaWVudGF0aW9uID09ICdZJykge1xuICAgICAgICAgICAgICAgICAgICBzZXRQb3NpdGlvbihTdHJpbmcoY29vcmRpbmF0ZSArIChpICogMTApKSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAzOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAob3JpZW50YXRpb24gPT0gJ1gnKSB7XG4gICAgICAgICAgICAgICAgICAgIHNldFBvc2l0aW9uKFN0cmluZyhjb29yZGluYXRlICsgaSkpXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChvcmllbnRhdGlvbiA9PSAnWScpIHtcbiAgICAgICAgICAgICAgICAgICAgc2V0UG9zaXRpb24oU3RyaW5nKGNvb3JkaW5hdGUgKyAoaSAqIDEwKSkpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9ICAgIH1cblxuICAgIGZ1bmN0aW9uIGNyZWF0ZVBhdHJvbChjb29yZGluYXRlLCBvcmllbnRhdGlvbikge1xuXG5cbiAgICAgICAgbGV0IHBvc3NpYmxlQ2hvaWNlcyA9IFtdXG5cbiAgICAgICAgaWYgKGNvb3JkaW5hdGUgPT0gMTAwKSB7XG4gICAgICAgICAgICBpZiAob3JpZW50YXRpb24gPT0gJ1gnKSB7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgOTsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NzaWJsZUNob2ljZXMucHVzaChpLnRvU3RyaW5nKCkgKyBqLnRvU3RyaW5nKCkpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKG9yaWVudGF0aW9uID09ICdZJykge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgOTsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgMTA7IGorKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcG9zc2libGVDaG9pY2VzLnB1c2goaS50b1N0cmluZygpICsgai50b1N0cmluZygpKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb29yZGluYXRlID0gcG9zc2libGVDaG9pY2VzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHBvc3NpYmxlQ2hvaWNlcy5sZW5ndGgpXVxuXG4gICAgICAgIH1cblxuICAgICAgICBjb29yZGluYXRlID0gTnVtYmVyKGNvb3JkaW5hdGUpXG5cbiAgICAgICAgaWYgKGNvb3JkaW5hdGUudG9TdHJpbmcoKS5sZW5ndGggPT0gMSkge1xuXG4gICAgICAgICAgICBzZXRQb3NpdGlvbignMCcgKyBTdHJpbmcoY29vcmRpbmF0ZSkpXG5cbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgMjsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKG9yaWVudGF0aW9uID09ICdYJykge1xuICAgICAgICAgICAgICAgICAgICBzZXRQb3NpdGlvbignMCcgKyBTdHJpbmcoY29vcmRpbmF0ZSArIGkpKVxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAob3JpZW50YXRpb24gPT0gJ1knKSB7XG4gICAgICAgICAgICAgICAgICAgIHNldFBvc2l0aW9uKFN0cmluZyhjb29yZGluYXRlICsgKGkgKiAxMCkpKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDI7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmIChvcmllbnRhdGlvbiA9PSAnWCcpIHtcbiAgICAgICAgICAgICAgICAgICAgc2V0UG9zaXRpb24oU3RyaW5nKGNvb3JkaW5hdGUgKyBpKSlcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKG9yaWVudGF0aW9uID09ICdZJykge1xuICAgICAgICAgICAgICAgICAgICBzZXRQb3NpdGlvbihTdHJpbmcoY29vcmRpbmF0ZSArIChpICogMTApKSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgZ2V0UG9zaXRpb24sXG4gICAgICAgIHNldFBvc2l0aW9uLFxuICAgICAgICBjcmVhdGVDYXJyaWVyLFxuICAgICAgICBjcmVhdGVCYXR0bGVzaGlwLFxuICAgICAgICBjcmVhdGVEZXN0cm95ZXIsXG4gICAgICAgIGNyZWF0ZVN1Ym1hcmluZSxcbiAgICAgICAgY3JlYXRlUGF0cm9sXG4gICAgfVxufVxuXG5jb25zdCBHYW1lYm9hcmQgPSAoKSA9PiB7XG4gICAgY29uc3Qgcm93ID0gMTBcbiAgICBjb25zdCBjb2x1bW4gPSAxMFxuICAgIGNvbnN0IGJvYXJkID0gW11cbiAgICBjb25zdCBtaXNzc2VkQ2VsbHMgPSBbXVxuICAgIGNvbnN0IGhpdENlbGxzID0gW11cbiAgICBjb25zdCBlbXB0eUNlbGxzID0gW11cbiAgICBjb25zdCBvY2N1cGllZENlbGxzID0gW11cblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcm93OyBpKyspIHtcbiAgICAgICAgYm9hcmRbaV0gPSBbXVxuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGNvbHVtbjsgaisrKSB7XG4gICAgICAgICAgICBib2FyZFtpXS5wdXNoKGkudG9TdHJpbmcoKSArIGoudG9TdHJpbmcoKSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGdldEJvYXJkID0gKCkgPT4gYm9hcmRcblxuICAgIGNvbnN0IGdldE1pc3NlZENlbGxzID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gbWlzc3NlZENlbGxzXG4gICAgfVxuXG4gICAgY29uc3Qgc2V0TWlzc2VkQ2VsbHMgPSBuZXdDZWxsID0+IHtcbiAgICAgICAgbWlzc3NlZENlbGxzLnB1c2gobmV3Q2VsbClcbiAgICB9XG5cbiAgICBjb25zdCBnZXRIaXRDZWxscyA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIGhpdENlbGxzXG4gICAgfVxuXG4gICAgY29uc3Qgc2V0SGl0Q2VsbHMgPSBuZXdDZWxsID0+IHtcbiAgICAgICAgaGl0Q2VsbHMucHVzaChuZXdDZWxsKVxuICAgIH1cblxuICAgIGNvbnN0IGdldEVtcHR5Q2VsbHMgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBlbXB0eUNlbGxzXG4gICAgfVxuXG4gICAgY29uc3Qgc2V0RW1wdHlDZWxscyA9IG5ld0NlbGwgPT4ge1xuICAgICAgICBlbXB0eUNlbGxzLnB1c2gobmV3Q2VsbClcbiAgICB9XG5cbiAgICBjb25zdCBnZXRPY2N1cGllZENlbGxzID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gb2NjdXBpZWRDZWxsc1xuICAgIH1cblxuICAgIGNvbnN0IHNldE9jY3VwaWVkQ2VsbHMgPSBuZXdDZWxsID0+IHtcbiAgICAgICAgb2NjdXBpZWRDZWxscy5wdXNoKG5ld0NlbGwpXG4gICAgfVxuXG4gICAgY29uc3QgcGxhY2VTaGlwcyA9IChzaGlwcykgPT4ge1xuICAgICAgICBzaGlwcy5mb3JFYWNoKHNoaXAgPT4ge1xuICAgICAgICAgICAgc2hpcC5nZXRQb3NpdGlvbigpLmZvckVhY2gocG9zaXRpb25DZWxsID0+IHtcbiAgICAgICAgICAgICAgICBzZXRPY2N1cGllZENlbGxzKHBvc2l0aW9uQ2VsbClcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGNvbnN0IHBsYWNlRW1wdHlTcGFjZSA9ICgpID0+IHtcbiAgICAgICAgZ2V0Qm9hcmQoKS5mb3JFYWNoKHJvd0NlbGwgPT4ge1xuICAgICAgICAgICAgcm93Q2VsbC5mb3JFYWNoKGNvbHVtbkNlbGwgPT4ge1xuICAgICAgICAgICAgICAgIGlmICghKGdldE9jY3VwaWVkQ2VsbHMoKS5pbmNsdWRlcyhjb2x1bW5DZWxsKSkpIHtcbiAgICAgICAgICAgICAgICAgICAgc2V0RW1wdHlDZWxscyhjb2x1bW5DZWxsKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgY29uc3QgcmVjaWV2ZUF0dGFjayA9IChjb29yZGluYXRlKSA9PiB7XG4gICAgICAgIGlmIChnZXRPY2N1cGllZENlbGxzKCkuaW5jbHVkZXMoY29vcmRpbmF0ZSkpIHtcbiAgICAgICAgICAgIHNldEhpdENlbGxzKGNvb3JkaW5hdGUpXG5cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNldE1pc3NlZENlbGxzKGNvb3JkaW5hdGUpXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBvY2N1cGllZEluZGV4ID0gZ2V0T2NjdXBpZWRDZWxscygpLmluZGV4T2YoY29vcmRpbmF0ZSlcbiAgICAgICAgaWYgKG9jY3VwaWVkSW5kZXggPiAtMSkge1xuICAgICAgICAgICAgZ2V0T2NjdXBpZWRDZWxscygpLnNwbGljZShvY2N1cGllZEluZGV4LCAxKSBcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGVtcHR5SW5kZXggPSBnZXRFbXB0eUNlbGxzKCkuaW5kZXhPZihjb29yZGluYXRlKVxuICAgICAgICBpZiAoZW1wdHlJbmRleCA+IC0xKSB7XG4gICAgICAgICAgICBnZXRFbXB0eUNlbGxzKCkuc3BsaWNlKGVtcHR5SW5kZXgsIDEpXG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIGNvbnN0IGNoZWNrR2FtZU92ZXIgPSAoKSA9PntcbiAgICAgICAgaWYgKGdldE9jY3VwaWVkQ2VsbHMoKS5sZW5ndGggPT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgY29tcHV0ZXJPcmllbnRhdGlvbiA9ICgpID0+IHtcblxuICAgICAgICBsZXQgb3JpZW50YXRpb25zID0gWydYJywgJ1knXVxuXG4gICAgICAgIHJldHVybiBvcmllbnRhdGlvbnNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogb3JpZW50YXRpb25zLmxlbmd0aCldXG5cbiAgICB9XG5cbiAgICBjb25zdCBjaGVja09jY3VwYXRpb24gPSAodGVzdEFycmF5KSA9PiB7XG5cbiAgICAgICAgaWYgKHRlc3RBcnJheS5sZW5ndGggPT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGVzdEFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoZ2V0T2NjdXBpZWRDZWxscygpLmluY2x1ZGVzKHRlc3RBcnJheVtpXSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgZ2V0TWlzc2VkQ2VsbHMsXG4gICAgICAgIHNldE1pc3NlZENlbGxzLFxuICAgICAgICBnZXRIaXRDZWxscyxcbiAgICAgICAgc2V0SGl0Q2VsbHMsXG4gICAgICAgIGdldEVtcHR5Q2VsbHMsXG4gICAgICAgIHNldEVtcHR5Q2VsbHMsXG4gICAgICAgIGdldE9jY3VwaWVkQ2VsbHMsXG4gICAgICAgIHNldE9jY3VwaWVkQ2VsbHMsXG4gICAgICAgIGdldEJvYXJkLFxuICAgICAgICBwbGFjZVNoaXBzLFxuICAgICAgICBwbGFjZUVtcHR5U3BhY2UsXG4gICAgICAgIHJlY2lldmVBdHRhY2ssXG4gICAgICAgIGNoZWNrR2FtZU92ZXIsXG4gICAgICAgIGNvbXB1dGVyT3JpZW50YXRpb24sXG4gICAgICAgIGNoZWNrT2NjdXBhdGlvblxuICAgIH1cbn1cblxuY29uc3QgUGxheWVyID0gKG5hbWUpID0+IHtcbiAgICBjb25zdCBnZXROYW1lID0gKCkgPT4gbmFtZVxuXG4gICAgY29uc3Qgcm93ID0gMTBcbiAgICBjb25zdCBjb2x1bW4gPSAxMFxuICAgIGNvbnN0IHBvc3NpYmxlQ2hvaWNlcyA9IFtdXG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJvdzsgaSsrKSB7XG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgY29sdW1uOyBqKyspIHtcbiAgICAgICAgICAgIHBvc3NpYmxlQ2hvaWNlcy5wdXNoKGkudG9TdHJpbmcoKSArIGoudG9TdHJpbmcoKSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGdldFBvc3NpYmxlQ2hvaWNlcyA9ICgpID0+IHBvc3NpYmxlQ2hvaWNlc1xuXG4gICAgY29uc3QgY29tcHV0ZXJBdHRhY2sgPSAoKSA9PiB7XG5cbiAgICAgICAgICAgIGxldCBhdHRhY2tDb29yZGluYXRlID0gZ2V0UG9zc2libGVDaG9pY2VzKClbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogZ2V0UG9zc2libGVDaG9pY2VzKCkubGVuZ3RoKV1cblxuICAgICAgICAgICAgY29uc3QgaW5kZXggPSBnZXRQb3NzaWJsZUNob2ljZXMoKS5pbmRleE9mKGF0dGFja0Nvb3JkaW5hdGUpXG4gICAgICAgICAgICBpZiAoaW5kZXggPiAtMSkge1xuICAgICAgICAgICAgICAgIHBvc3NpYmxlQ2hvaWNlcy5zcGxpY2UoaW5kZXgsIDEpIFxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gYXR0YWNrQ29vcmRpbmF0ZVxuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIGdldE5hbWUsXG4gICAgICAgIGNvbXB1dGVyQXR0YWNrXG4gICAgfVxufVxuXG5leHBvcnQgeyBTaGlwLCBHYW1lYm9hcmQsIFBsYXllciB9IiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC5jb250YWluZXIge1xuICAgIGhlaWdodDogMTAwdmg7XG5cbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcbn1cblxuLnBsYXllci1vbmUtZ2FtZWJvYXJkIHtcbiAgICBoZWlnaHQ6IDUwMHB4O1xuICAgIHdpZHRoOiA1MDBweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcblxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG59XG5cbi5wbGF5ZXItb25lLWdhbWVib2FyZCBkaXYge1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG59XG5cbi5wbGF5ZXItdHdvLWdhbWVib2FyZCB7XG4gICAgaGVpZ2h0OiA1MDBweDtcbiAgICB3aWR0aDogNTAwcHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG5cbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZmxleC13cmFwOiB3cmFwO1xufVxuXG4ucGxheWVyLXR3by1nYW1lYm9hcmQgZGl2IHtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xufVxuXG4ub2NjdXBpZWQtY2VsbCB7XG4gICAgYmFja2dyb3VuZDogYmxhY2s7XG59XG5cbi5lbXB0eS1jZWxsIHtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbn1cblxuLmhpdC1jZWxsIHtcbiAgICBiYWNrZ3JvdW5kOiByZWQ7XG59XG5cbi5taXNzZWQtY2VsbCB7XG4gICAgYmFja2dyb3VuZDogZ3JheTtcbn1cblxuLm9jY3VwaWVkLWNvbS1jZWxsIHtcbiAgICBiYWNrZ3JvdW5kOiBncmVlbjtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxhQUFhOztJQUViLGFBQWE7SUFDYiw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsWUFBWTtJQUNaLHVCQUF1Qjs7SUFFdkIsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0Qix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsWUFBWTtJQUNaLHVCQUF1Qjs7SUFFdkIsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0Qix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5jb250YWluZXIge1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcblxcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxufVxcblxcbi5wbGF5ZXItb25lLWdhbWVib2FyZCB7XFxuICAgIGhlaWdodDogNTAwcHg7XFxuICAgIHdpZHRoOiA1MDBweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxufVxcblxcbi5wbGF5ZXItb25lLWdhbWVib2FyZCBkaXYge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG59XFxuXFxuLnBsYXllci10d28tZ2FtZWJvYXJkIHtcXG4gICAgaGVpZ2h0OiA1MDBweDtcXG4gICAgd2lkdGg6IDUwMHB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG59XFxuXFxuLnBsYXllci10d28tZ2FtZWJvYXJkIGRpdiB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG4ub2NjdXBpZWQtY2VsbCB7XFxuICAgIGJhY2tncm91bmQ6IGJsYWNrO1xcbn1cXG5cXG4uZW1wdHktY2VsbCB7XFxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xcbn1cXG5cXG4uaGl0LWNlbGwge1xcbiAgICBiYWNrZ3JvdW5kOiByZWQ7XFxufVxcblxcbi5taXNzZWQtY2VsbCB7XFxuICAgIGJhY2tncm91bmQ6IGdyYXk7XFxufVxcblxcbi5vY2N1cGllZC1jb20tY2VsbCB7XFxuICAgIGJhY2tncm91bmQ6IGdyZWVuO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IFwiLi9zdHlsZS5jc3NcIlxuXG5pbXBvcnQgeyBHYW1lIH0gZnJvbSBcIi4vZ2FtZS5qc1wiO1xuaW1wb3J0IHsgU2hpcCB9IGZyb20gXCIuL29iamVjdHMuanNcIjtcblxuR2FtZVxuXG5mdW5jdGlvbiBkaXNwbGF5SGVhZGVyKCkge1xuICAgIGNvbnN0IHBsYXllck9uZUhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wbGF5ZXItb25lLWhlYWRlcicpXG4gICAgY29uc3QgcGxheWVyVHdvSGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBsYXllci10d28taGVhZGVyJylcblxuICAgIHBsYXllck9uZUhlYWRlci50ZXh0Q29udGVudCA9IEdhbWUuZ2V0QWN0aXZlUGxheWVyKCkuZ2V0TmFtZSgpXG4gICAgR2FtZS5zd2l0Y2hQbGF5ZXJUdXJuKClcbiAgICBwbGF5ZXJUd29IZWFkZXIudGV4dENvbnRlbnQgPSBHYW1lLmdldEFjdGl2ZVBsYXllcigpLmdldE5hbWUoKVxuICAgIEdhbWUuc3dpdGNoUGxheWVyVHVybigpXG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlQbGF5ZXJPbmVCb2FyZCgpIHtcbiAgICBjb25zdCBwbGF5ZXJPbmVHYW1lYm9hcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGxheWVyLW9uZS1nYW1lYm9hcmQnKTtcbiAgICBwbGF5ZXJPbmVHYW1lYm9hcmQudGV4dENvbnRlbnQgPSBbXTtcblxuICAgIGxldCBhdHRhY2tDb29yZGluYXRlID0gR2FtZS5nZXRDb21wdXRlcigpLmNvbXB1dGVyQXR0YWNrKCk7XG5cbiAgICAoR2FtZS5nZXRQbGF5ZXJHYW1lYm9hcmQoKS5nZXRCb2FyZCgpKS5mb3JFYWNoKChyb3dDZWxsKSA9PiB7XG5cbiAgICAgICAgcm93Q2VsbC5mb3JFYWNoKChjb2x1bW5DZWxsKSA9PiB7XG5cbiAgICAgICAgICAgIGNvbnN0IGJvYXJkQ2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgICAgICBib2FyZENlbGwudGV4dENvbnRlbnQgPSBjb2x1bW5DZWxsXG4gICAgICAgICAgICBib2FyZENlbGwuc2V0QXR0cmlidXRlKCdpZCcsIGNvbHVtbkNlbGwpXG4gICAgICAgICAgICBib2FyZENlbGwuY2xhc3NMaXN0LmFkZCgncGxheWVyLW9uZS1jZWxscycpXG4gICAgICAgICAgICBib2FyZENlbGwuc3R5bGUud2lkdGggPSAnMTAlJ1xuICAgICAgICAgICAgYm9hcmRDZWxsLnN0eWxlLmhlaWdodCA9ICcxMCUnXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmIChHYW1lLmdldFBsYXllckdhbWVib2FyZCgpLmdldE9jY3VwaWVkQ2VsbHMoKS5pbmNsdWRlcyhib2FyZENlbGwudGV4dENvbnRlbnQpKSB7XG4gICAgICAgICAgICAgICAgYm9hcmRDZWxsLmNsYXNzTGlzdC5hZGQoJ29jY3VwaWVkLWNlbGwnKVxuICAgICAgICAgICAgfSBlbHNlIGlmIChHYW1lLmdldFBsYXllckdhbWVib2FyZCgpLmdldEVtcHR5Q2VsbHMoKS5pbmNsdWRlcyhib2FyZENlbGwudGV4dENvbnRlbnQpKSB7XG4gICAgICAgICAgICAgICAgYm9hcmRDZWxsLmNsYXNzTGlzdC5hZGQoJ2VtcHR5LWNlbGwnKVxuICAgICAgICAgICAgfSBlbHNlIGlmIChHYW1lLmdldFBsYXllckdhbWVib2FyZCgpLmdldEhpdENlbGxzKCkuaW5jbHVkZXMoYm9hcmRDZWxsLnRleHRDb250ZW50KSkge1xuICAgICAgICAgICAgICAgIGJvYXJkQ2VsbC5jbGFzc0xpc3QuYWRkKCdoaXQtY2VsbCcpXG4gICAgICAgICAgICB9IGVsc2UgaWYgKEdhbWUuZ2V0UGxheWVyR2FtZWJvYXJkKCkuZ2V0TWlzc2VkQ2VsbHMoKS5pbmNsdWRlcyhib2FyZENlbGwudGV4dENvbnRlbnQpKSB7XG4gICAgICAgICAgICAgICAgYm9hcmRDZWxsLmNsYXNzTGlzdC5hZGQoJ21pc3NlZC1jZWxsJylcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZnVuY3Rpb24gcGxheWVyQ2VsbENsaWNrKCkge1xuXG4gICAgICAgICAgICAgICAgaWYgKGJvYXJkQ2VsbC5nZXRBdHRyaWJ1dGUoJ2lkJykgPT0gYXR0YWNrQ29vcmRpbmF0ZSkge1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGlmIChib2FyZENlbGwuY2xhc3NMaXN0LmNvbnRhaW5zKCdvY2N1cGllZC1jZWxsJykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvYXJkQ2VsbC5jbGFzc0xpc3QucmVtb3ZlKCdvY2N1cGllZC1jZWxsJylcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvYXJkQ2VsbC5jbGFzc0xpc3QuYWRkKCdoaXQtY2VsbCcpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgaWYgKGJvYXJkQ2VsbC5jbGFzc0xpc3QuY29udGFpbnMoJ2VtcHR5LWNlbGwnKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9hcmRDZWxsLmNsYXNzTGlzdC5yZW1vdmUoJ2VtcHR5LWNlbGwnKVxuICAgICAgICAgICAgICAgICAgICAgICAgYm9hcmRDZWxsLmNsYXNzTGlzdC5hZGQoJ21pc3NlZC1jZWxsJylcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIEdhbWUuZ2V0UGxheWVyR2FtZWJvYXJkKCkucmVjaWV2ZUF0dGFjayhhdHRhY2tDb29yZGluYXRlKVxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5UGxheWVyVHdvQm9hcmQoKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcGxheWVyQ2VsbENsaWNrKClcblxuICAgICAgICAgICAgcGxheWVyT25lR2FtZWJvYXJkLmFwcGVuZENoaWxkKGJvYXJkQ2VsbClcblxuICAgICAgICB9KVxuICAgIH0pXG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlQbGF5ZXJUd29Cb2FyZCgpIHtcbiAgICBjb25zdCBwbGF5ZXJUd29HYW1lYm9hcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGxheWVyLXR3by1nYW1lYm9hcmQnKTtcbiAgICBwbGF5ZXJUd29HYW1lYm9hcmQudGV4dENvbnRlbnQgPSAnJztcblxuICAgIChHYW1lLmdldENvbXB1dGVyR2FtZWJvYXJkKCkuZ2V0Qm9hcmQoKSkuZm9yRWFjaCgocm93Q2VsbCkgPT4ge1xuXG4gICAgICAgIHJvd0NlbGwuZm9yRWFjaCgoY29sdW1uQ2VsbCkgPT4ge1xuXG4gICAgICAgICAgICBjb25zdCBib2FyZENlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICAgICAgYm9hcmRDZWxsLnRleHRDb250ZW50ID0gY29sdW1uQ2VsbFxuICAgICAgICAgICAgYm9hcmRDZWxsLnNldEF0dHJpYnV0ZSgnaWQnLCBjb2x1bW5DZWxsKVxuICAgICAgICAgICAgYm9hcmRDZWxsLmNsYXNzTGlzdC5hZGQoJ3BsYXllci10d28tY2VsbHMnKVxuICAgICAgICAgICAgYm9hcmRDZWxsLnN0eWxlLndpZHRoID0gJzEwJSdcbiAgICAgICAgICAgIGJvYXJkQ2VsbC5zdHlsZS5oZWlnaHQgPSAnMTAlJ1xuXG4gICAgICAgICAgICBpZiAoR2FtZS5nZXRDb21wdXRlckdhbWVib2FyZCgpLmdldE9jY3VwaWVkQ2VsbHMoKS5pbmNsdWRlcyhib2FyZENlbGwudGV4dENvbnRlbnQpKSB7XG4gICAgICAgICAgICAgICAgYm9hcmRDZWxsLmNsYXNzTGlzdC5hZGQoJ29jY3VwaWVkLWNvbS1jZWxsJylcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoR2FtZS5nZXRDb21wdXRlckdhbWVib2FyZCgpLmdldEVtcHR5Q2VsbHMoKS5pbmNsdWRlcyhib2FyZENlbGwudGV4dENvbnRlbnQpKSB7XG4gICAgICAgICAgICAgICAgYm9hcmRDZWxsLmNsYXNzTGlzdC5hZGQoJ2VtcHR5LWNlbGwnKVxuICAgICAgICAgICAgfSBlbHNlIGlmIChHYW1lLmdldENvbXB1dGVyR2FtZWJvYXJkKCkuZ2V0SGl0Q2VsbHMoKS5pbmNsdWRlcyhib2FyZENlbGwudGV4dENvbnRlbnQpKSB7XG4gICAgICAgICAgICAgICAgYm9hcmRDZWxsLmNsYXNzTGlzdC5hZGQoJ2hpdC1jZWxsJylcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoR2FtZS5nZXRDb21wdXRlckdhbWVib2FyZCgpLmdldE1pc3NlZENlbGxzKCkuaW5jbHVkZXMoYm9hcmRDZWxsLnRleHRDb250ZW50KSkge1xuICAgICAgICAgICAgICAgIGJvYXJkQ2VsbC5jbGFzc0xpc3QuYWRkKCdtaXNzZWQtY2VsbCcpXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZ1bmN0aW9uIGRpc2FibGVBbGxCdXR0b25zKCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGJvYXJkQ2VsbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucGxheWVyLXR3by1jZWxscycpXG5cbiAgICAgICAgICAgICAgICBib2FyZENlbGxzLmZvckVhY2goKGNlbGwpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY2VsbC5yZXBsYWNlV2l0aChjZWxsLmNsb25lTm9kZSh0cnVlKSlcbiAgICAgICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZ1bmN0aW9uIGNvbXB1dGVyQ2VsbENsaWNrKCkge1xuXG4gICAgICAgICAgICAgICAgaWYgKGJvYXJkQ2VsbC5jbGFzc0xpc3QuY29udGFpbnMoJ2hpdC1jZWxsJykpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChib2FyZENlbGwuY2xhc3NMaXN0LmNvbnRhaW5zKCdtaXNzZWQtY2VsbCcpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGlmIChib2FyZENlbGwuY2xhc3NMaXN0LmNvbnRhaW5zKCdvY2N1cGllZC1jb20tY2VsbCcpKSB7XG4gICAgICAgICAgICAgICAgICAgIGJvYXJkQ2VsbC5jbGFzc0xpc3QucmVtb3ZlKCdvY2N1cGllZC1jb20tY2VsbCcpXG4gICAgICAgICAgICAgICAgICAgIGJvYXJkQ2VsbC5jbGFzc0xpc3QuYWRkKCdoaXQtY2VsbCcpXG4gICAgICAgICAgICAgICAgICAgIGRpc2FibGVBbGxCdXR0b25zKClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBpZiAoYm9hcmRDZWxsLmNsYXNzTGlzdC5jb250YWlucygnZW1wdHktY2VsbCcpKSB7XG4gICAgICAgICAgICAgICAgICAgIGJvYXJkQ2VsbC5jbGFzc0xpc3QucmVtb3ZlKCdlbXB0eS1jZWxsJylcbiAgICAgICAgICAgICAgICAgICAgYm9hcmRDZWxsLmNsYXNzTGlzdC5hZGQoJ21pc3NlZC1jZWxsJylcbiAgICAgICAgICAgICAgICAgICAgZGlzYWJsZUFsbEJ1dHRvbnMoKVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIEdhbWUuZ2V0Q29tcHV0ZXJHYW1lYm9hcmQoKS5yZWNpZXZlQXR0YWNrKGJvYXJkQ2VsbC50ZXh0Q29udGVudClcbiAgICAgICAgICAgICAgICBkaXNwbGF5UGxheWVyT25lQm9hcmQoKVxuICAgICAgICAgICAgXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGJvYXJkQ2VsbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNvbXB1dGVyQ2VsbENsaWNrKVxuICAgICAgICAgICAgcGxheWVyVHdvR2FtZWJvYXJkLmFwcGVuZENoaWxkKGJvYXJkQ2VsbClcbiAgICAgICAgfSlcbiAgICB9KVxufVxuXG5cbmxldCBwbGF5ZXJTaGlwcyA9IFtdXG5cbmZ1bmN0aW9uIHNldFBsYXllclNoaXBzKCkge1xuICAgIGxldCBjYXJyaWVyID0gU2hpcChbXSlcbiAgICBsZXQgYmF0dGxlc2hpcCA9IFNoaXAoW10pXG4gICAgbGV0IGRlc3Ryb3llciA9IFNoaXAoW10pXG4gICAgbGV0IHN1Ym1hcmluZSA9IFNoaXAoW10pXG4gICAgbGV0IHBhdHJvbCA9IFNoaXAoW10pXG5cbiAgICBjYXJyaWVyLmNyZWF0ZUNhcnJpZXIoJzAxJywgJ1knKVxuICAgIGJhdHRsZXNoaXAuY3JlYXRlQmF0dGxlc2hpcCgnMTMnLCAnWCcpXG4gICAgZGVzdHJveWVyLmNyZWF0ZURlc3Ryb3llcignNzEnLCAnWCcpXG4gICAgc3VibWFyaW5lLmNyZWF0ZVN1Ym1hcmluZSgnNzYnLCAnWScpXG4gICAgcGF0cm9sLmNyZWF0ZVBhdHJvbCgnNTMnLCAnWCcpXG5cbiAgICBwbGF5ZXJTaGlwcy5wdXNoKGNhcnJpZXIpXG4gICAgcGxheWVyU2hpcHMucHVzaChiYXR0bGVzaGlwKVxuICAgIHBsYXllclNoaXBzLnB1c2goZGVzdHJveWVyKVxuICAgIHBsYXllclNoaXBzLnB1c2goc3VibWFyaW5lKVxuICAgIHBsYXllclNoaXBzLnB1c2gocGF0cm9sKVxuXG4gICAgR2FtZS5nZXRQbGF5ZXJHYW1lYm9hcmQoKS5wbGFjZVNoaXBzKHBsYXllclNoaXBzKTtcbiAgICBHYW1lLmdldFBsYXllckdhbWVib2FyZCgpLnBsYWNlRW1wdHlTcGFjZSgpO1xufVxuXG5sZXQgY29tcHV0ZXJTaGlwcyA9IFtdXG5cbmZ1bmN0aW9uIHNldENvbXB1dGVyU2hpcHMoKSB7XG5cbiAgICBHYW1lLmdldENvbXB1dGVyR2FtZWJvYXJkKCkucGxhY2VFbXB0eVNwYWNlKCk7XG5cbiAgICBsZXQgY2FycmllciA9IFNoaXAoW10pXG4gICAgY2Fycmllci5jcmVhdGVDYXJyaWVyKFN0cmluZygxMDApLCBHYW1lLmdldENvbXB1dGVyR2FtZWJvYXJkKCkuY29tcHV0ZXJPcmllbnRhdGlvbigpKVxuICAgIGNvbXB1dGVyU2hpcHMucHVzaChjYXJyaWVyKVxuXG4gICAgR2FtZS5nZXRDb21wdXRlckdhbWVib2FyZCgpLnBsYWNlU2hpcHMoY29tcHV0ZXJTaGlwcyk7XG4gICAgR2FtZS5nZXRDb21wdXRlckdhbWVib2FyZCgpLnBsYWNlRW1wdHlTcGFjZSgpO1xuXG5cbiAgICBsZXQgYmF0dGxlc2hpcCA9IFNoaXAoW10pXG5cbiAgICB3aGlsZSAoR2FtZS5nZXRDb21wdXRlckdhbWVib2FyZCgpLmNoZWNrT2NjdXBhdGlvbihiYXR0bGVzaGlwLmdldFBvc2l0aW9uKCkpKSB7XG5cbiAgICAgICAgYmF0dGxlc2hpcCA9IFNoaXAoW10pXG4gICAgICAgIGJhdHRsZXNoaXAuY3JlYXRlQmF0dGxlc2hpcChTdHJpbmcoMTAwKSwgR2FtZS5nZXRDb21wdXRlckdhbWVib2FyZCgpLmNvbXB1dGVyT3JpZW50YXRpb24oKSlcblxuICAgIH1cblxuICAgIGNvbXB1dGVyU2hpcHMucHVzaChiYXR0bGVzaGlwKVxuICAgIEdhbWUuZ2V0Q29tcHV0ZXJHYW1lYm9hcmQoKS5wbGFjZVNoaXBzKGNvbXB1dGVyU2hpcHMpO1xuICAgIEdhbWUuZ2V0Q29tcHV0ZXJHYW1lYm9hcmQoKS5wbGFjZUVtcHR5U3BhY2UoKTtcblxuXG4gICAgbGV0IGRlc3Ryb3llciA9IFNoaXAoW10pXG5cbiAgICB3aGlsZSAoR2FtZS5nZXRDb21wdXRlckdhbWVib2FyZCgpLmNoZWNrT2NjdXBhdGlvbihkZXN0cm95ZXIuZ2V0UG9zaXRpb24oKSkpIHtcblxuICAgICAgICBkZXN0cm95ZXIgPSBTaGlwKFtdKVxuICAgICAgICBkZXN0cm95ZXIuY3JlYXRlRGVzdHJveWVyKFN0cmluZygxMDApLCBHYW1lLmdldENvbXB1dGVyR2FtZWJvYXJkKCkuY29tcHV0ZXJPcmllbnRhdGlvbigpKVxuXG4gICAgfVxuXG4gICAgY29tcHV0ZXJTaGlwcy5wdXNoKGRlc3Ryb3llcilcbiAgICBHYW1lLmdldENvbXB1dGVyR2FtZWJvYXJkKCkucGxhY2VTaGlwcyhjb21wdXRlclNoaXBzKTtcbiAgICBHYW1lLmdldENvbXB1dGVyR2FtZWJvYXJkKCkucGxhY2VFbXB0eVNwYWNlKCk7XG5cbiAgICBsZXQgc3VibWFyaW5lID0gU2hpcChbXSlcblxuICAgIHdoaWxlIChHYW1lLmdldENvbXB1dGVyR2FtZWJvYXJkKCkuY2hlY2tPY2N1cGF0aW9uKHN1Ym1hcmluZS5nZXRQb3NpdGlvbigpKSkge1xuXG4gICAgICAgIHN1Ym1hcmluZSA9IFNoaXAoW10pXG4gICAgICAgIHN1Ym1hcmluZS5jcmVhdGVTdWJtYXJpbmUoU3RyaW5nKDEwMCksIEdhbWUuZ2V0Q29tcHV0ZXJHYW1lYm9hcmQoKS5jb21wdXRlck9yaWVudGF0aW9uKCkpXG5cbiAgICB9XG5cbiAgICBjb21wdXRlclNoaXBzLnB1c2goc3VibWFyaW5lKVxuICAgIEdhbWUuZ2V0Q29tcHV0ZXJHYW1lYm9hcmQoKS5wbGFjZVNoaXBzKGNvbXB1dGVyU2hpcHMpO1xuICAgIEdhbWUuZ2V0Q29tcHV0ZXJHYW1lYm9hcmQoKS5wbGFjZUVtcHR5U3BhY2UoKTtcblxuICAgIGxldCBwYXRyb2wgPSBTaGlwKFtdKVxuXG4gICAgd2hpbGUgKEdhbWUuZ2V0Q29tcHV0ZXJHYW1lYm9hcmQoKS5jaGVja09jY3VwYXRpb24ocGF0cm9sLmdldFBvc2l0aW9uKCkpKSB7XG5cbiAgICAgICAgcGF0cm9sID0gU2hpcChbXSlcbiAgICAgICAgcGF0cm9sLmNyZWF0ZVBhdHJvbChTdHJpbmcoMTAwKSwgR2FtZS5nZXRDb21wdXRlckdhbWVib2FyZCgpLmNvbXB1dGVyT3JpZW50YXRpb24oKSlcblxuICAgIH1cblxuICAgIGNvbXB1dGVyU2hpcHMucHVzaChwYXRyb2wpXG4gICAgR2FtZS5nZXRDb21wdXRlckdhbWVib2FyZCgpLnBsYWNlU2hpcHMoY29tcHV0ZXJTaGlwcyk7XG4gICAgR2FtZS5nZXRDb21wdXRlckdhbWVib2FyZCgpLnBsYWNlRW1wdHlTcGFjZSgpO1xuXG59XG5cbmZ1bmN0aW9uIGdhbWVDb250cm9sbGVyKCkge1xuXG4gICAgZGlzcGxheUhlYWRlcigpXG4gICAgc2V0UGxheWVyU2hpcHMoKTtcbiAgICBzZXRDb21wdXRlclNoaXBzKCk7XG4gICAgZGlzcGxheVBsYXllck9uZUJvYXJkKClcbiAgICBkaXNwbGF5UGxheWVyVHdvQm9hcmQoKVxufVxuXG5nYW1lQ29udHJvbGxlcigpXG4iXSwibmFtZXMiOlsiU2hpcCIsIkdhbWVib2FyZCIsIlBsYXllciIsIkdhbWUiLCJwbGF5ZXJzIiwiZ2FtZWJvYXJkcyIsInBsYXllciIsInBsYXllckdhbWVib2FyZCIsImNvbXB1dGVyIiwiY29tcHV0ZXJHYW1lYm9hcmQiLCJwdXNoIiwiYWN0aXZlUGxheWVyIiwiYWN0aXZlQm9hcmQiLCJnZXRBY3RpdmVQbGF5ZXIiLCJnZXRBY3RpdmVHYW1lYm9hcmQiLCJnZXRQbGF5ZXIiLCJnZXRDb21wdXRlciIsImdldFBsYXllckdhbWVib2FyZCIsImdldENvbXB1dGVyR2FtZWJvYXJkIiwic3dpdGNoUGxheWVyVHVybiIsInN3aXRjaEFjdGl2ZUJvYXJkIiwicG9zaXRpb24iLCJnZXRQb3NpdGlvbiIsInNldFBvc2l0aW9uIiwiY29vcmRzIiwiY3JlYXRlQ2FycmllciIsImNvb3JkaW5hdGUiLCJvcmllbnRhdGlvbiIsInBvc3NpYmxlQ2hvaWNlcyIsImkiLCJqIiwidG9TdHJpbmciLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJsZW5ndGgiLCJOdW1iZXIiLCJTdHJpbmciLCJjcmVhdGVCYXR0bGVzaGlwIiwiY3JlYXRlRGVzdHJveWVyIiwiY3JlYXRlU3VibWFyaW5lIiwiY3JlYXRlUGF0cm9sIiwicm93IiwiY29sdW1uIiwiYm9hcmQiLCJtaXNzc2VkQ2VsbHMiLCJoaXRDZWxscyIsImVtcHR5Q2VsbHMiLCJvY2N1cGllZENlbGxzIiwiZ2V0Qm9hcmQiLCJnZXRNaXNzZWRDZWxscyIsInNldE1pc3NlZENlbGxzIiwibmV3Q2VsbCIsImdldEhpdENlbGxzIiwic2V0SGl0Q2VsbHMiLCJnZXRFbXB0eUNlbGxzIiwic2V0RW1wdHlDZWxscyIsImdldE9jY3VwaWVkQ2VsbHMiLCJzZXRPY2N1cGllZENlbGxzIiwicGxhY2VTaGlwcyIsInNoaXBzIiwiZm9yRWFjaCIsInNoaXAiLCJwb3NpdGlvbkNlbGwiLCJwbGFjZUVtcHR5U3BhY2UiLCJyb3dDZWxsIiwiY29sdW1uQ2VsbCIsImluY2x1ZGVzIiwicmVjaWV2ZUF0dGFjayIsIm9jY3VwaWVkSW5kZXgiLCJpbmRleE9mIiwic3BsaWNlIiwiZW1wdHlJbmRleCIsImNoZWNrR2FtZU92ZXIiLCJjb21wdXRlck9yaWVudGF0aW9uIiwib3JpZW50YXRpb25zIiwiY2hlY2tPY2N1cGF0aW9uIiwidGVzdEFycmF5IiwibmFtZSIsImdldE5hbWUiLCJnZXRQb3NzaWJsZUNob2ljZXMiLCJjb21wdXRlckF0dGFjayIsImF0dGFja0Nvb3JkaW5hdGUiLCJpbmRleCIsImRpc3BsYXlIZWFkZXIiLCJwbGF5ZXJPbmVIZWFkZXIiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJwbGF5ZXJUd29IZWFkZXIiLCJ0ZXh0Q29udGVudCIsImRpc3BsYXlQbGF5ZXJPbmVCb2FyZCIsInBsYXllck9uZUdhbWVib2FyZCIsImJvYXJkQ2VsbCIsImNyZWF0ZUVsZW1lbnQiLCJzZXRBdHRyaWJ1dGUiLCJjbGFzc0xpc3QiLCJhZGQiLCJzdHlsZSIsIndpZHRoIiwiaGVpZ2h0IiwicGxheWVyQ2VsbENsaWNrIiwiZ2V0QXR0cmlidXRlIiwiY29udGFpbnMiLCJyZW1vdmUiLCJkaXNwbGF5UGxheWVyVHdvQm9hcmQiLCJhcHBlbmRDaGlsZCIsInBsYXllclR3b0dhbWVib2FyZCIsImRpc2FibGVBbGxCdXR0b25zIiwiYm9hcmRDZWxscyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJjZWxsIiwicmVwbGFjZVdpdGgiLCJjbG9uZU5vZGUiLCJjb21wdXRlckNlbGxDbGljayIsImFkZEV2ZW50TGlzdGVuZXIiLCJwbGF5ZXJTaGlwcyIsInNldFBsYXllclNoaXBzIiwiY2FycmllciIsImJhdHRsZXNoaXAiLCJkZXN0cm95ZXIiLCJzdWJtYXJpbmUiLCJwYXRyb2wiLCJjb21wdXRlclNoaXBzIiwic2V0Q29tcHV0ZXJTaGlwcyIsImdhbWVDb250cm9sbGVyIl0sInNvdXJjZVJvb3QiOiIifQ==