/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/objects.js":
/*!************************!*\
  !*** ./src/objects.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Gameboard: () => (/* binding */ Gameboard),
/* harmony export */   Ship: () => (/* binding */ Ship)
/* harmony export */ });
const Ship = (positionArray, sunkStatus) => {
  let position = positionArray;
  let sunk = sunkStatus;
  const getLength = position => {
    return position.length;
  };
  const hit = hitValue => {
    const index = position.indexOf(hitValue);
    if (index > -1) {
      position.splice(index, 1);
    }
  };
  const isSunk = () => {
    if (getLength(position) == 0) {
      sunk = true;
    }
    return sunk;
  };
  return {
    position,
    hit,
    isSunk
  };
};
const Gameboard = () => {
  const row = 10;
  const column = 10;
  const board = [];
  for (let i = 0; i < row; i++) {
    board[i] = [];
    for (let j = 0; j < column; j++) {
      board[i].push(i.toString() + j.toString());
    }
  }
  const getBoard = () => board;
  const placeShip = ship => {};
  return {
    getBoard
  };
};


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
/******/ 			// no module.id needed
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _objects_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./objects.js */ "./src/objects.js");

let game = (0,_objects_js__WEBPACK_IMPORTED_MODULE_0__.Gameboard)();
console.log(game.getBoard()[4][2]);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQSxNQUFNQSxJQUFJLEdBQUdBLENBQUNDLGFBQWEsRUFBRUMsVUFBVSxLQUFLO0VBRXhDLElBQUlDLFFBQVEsR0FBR0YsYUFBYTtFQUM1QixJQUFJRyxJQUFJLEdBQUdGLFVBQVU7RUFFckIsTUFBTUcsU0FBUyxHQUFJRixRQUFRLElBQUs7SUFDNUIsT0FBT0EsUUFBUSxDQUFDRyxNQUFNO0VBQzFCLENBQUM7RUFFRCxNQUFNQyxHQUFHLEdBQUlDLFFBQVEsSUFBSztJQUV0QixNQUFNQyxLQUFLLEdBQUdOLFFBQVEsQ0FBQ08sT0FBTyxDQUFDRixRQUFRLENBQUM7SUFDeEMsSUFBSUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxFQUFFO01BQ1pOLFFBQVEsQ0FBQ1EsTUFBTSxDQUFDRixLQUFLLEVBQUUsQ0FBQyxDQUFDO0lBQzdCO0VBQ0osQ0FBQztFQUVELE1BQU1HLE1BQU0sR0FBR0EsQ0FBQSxLQUFNO0lBQ2pCLElBQUlQLFNBQVMsQ0FBQ0YsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFO01BQzFCQyxJQUFJLEdBQUcsSUFBSTtJQUNmO0lBRUEsT0FBT0EsSUFBSTtFQUNmLENBQUM7RUFFRCxPQUFPO0lBQ0hELFFBQVE7SUFDUkksR0FBRztJQUNISztFQUNKLENBQUM7QUFDTCxDQUFDO0FBRUQsTUFBTUMsU0FBUyxHQUFHQSxDQUFBLEtBQU07RUFDcEIsTUFBTUMsR0FBRyxHQUFHLEVBQUU7RUFDZCxNQUFNQyxNQUFNLEdBQUcsRUFBRTtFQUNqQixNQUFNQyxLQUFLLEdBQUcsRUFBRTtFQUVoQixLQUFLLElBQUlDLENBQUMsR0FBRyxDQUFDLEVBQUVBLENBQUMsR0FBR0gsR0FBRyxFQUFFRyxDQUFDLEVBQUUsRUFBRTtJQUMxQkQsS0FBSyxDQUFDQyxDQUFDLENBQUMsR0FBRyxFQUFFO0lBQ2IsS0FBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBQyxFQUFFQSxDQUFDLEdBQUdILE1BQU0sRUFBRUcsQ0FBQyxFQUFFLEVBQUU7TUFDN0JGLEtBQUssQ0FBQ0MsQ0FBQyxDQUFDLENBQUNFLElBQUksQ0FBQ0YsQ0FBQyxDQUFDRyxRQUFRLENBQUMsQ0FBQyxHQUFHRixDQUFDLENBQUNFLFFBQVEsQ0FBQyxDQUFDLENBQUM7SUFDOUM7RUFFSjtFQUVBLE1BQU1DLFFBQVEsR0FBR0EsQ0FBQSxLQUFNTCxLQUFLO0VBRTVCLE1BQU1NLFNBQVMsR0FBSUMsSUFBSSxJQUFLLENBRTVCLENBQUM7RUFFRCxPQUFPO0lBQ0hGO0VBQ0osQ0FBQztBQUNMLENBQUM7Ozs7Ozs7VUN0REQ7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ04rQztBQUUvQyxJQUFJRyxJQUFJLEdBQUdYLHNEQUFTLENBQUMsQ0FBQztBQUV0QlksT0FBTyxDQUFDQyxHQUFHLENBQUNGLElBQUksQ0FBQ0gsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9vYmplY3RzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IFNoaXAgPSAocG9zaXRpb25BcnJheSwgc3Vua1N0YXR1cykgPT4ge1xuXG4gICAgbGV0IHBvc2l0aW9uID0gcG9zaXRpb25BcnJheVxuICAgIGxldCBzdW5rID0gc3Vua1N0YXR1c1xuICAgIFxuICAgIGNvbnN0IGdldExlbmd0aCA9IChwb3NpdGlvbikgPT4ge1xuICAgICAgICByZXR1cm4gcG9zaXRpb24ubGVuZ3RoXG4gICAgfVxuXG4gICAgY29uc3QgaGl0ID0gKGhpdFZhbHVlKSA9PiB7XG5cbiAgICAgICAgY29uc3QgaW5kZXggPSBwb3NpdGlvbi5pbmRleE9mKGhpdFZhbHVlKVxuICAgICAgICBpZiAoaW5kZXggPiAtMSkge1xuICAgICAgICAgICAgcG9zaXRpb24uc3BsaWNlKGluZGV4LCAxKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgaXNTdW5rID0gKCkgPT4ge1xuICAgICAgICBpZiAoZ2V0TGVuZ3RoKHBvc2l0aW9uKSA9PSAwKSB7XG4gICAgICAgICAgICBzdW5rID0gdHJ1ZVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHN1bmtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBwb3NpdGlvbixcbiAgICAgICAgaGl0LFxuICAgICAgICBpc1N1bmtcbiAgICB9XG59XG5cbmNvbnN0IEdhbWVib2FyZCA9ICgpID0+IHtcbiAgICBjb25zdCByb3cgPSAxMFxuICAgIGNvbnN0IGNvbHVtbiA9IDEwXG4gICAgY29uc3QgYm9hcmQgPSBbXVxuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCByb3c7IGkrKykge1xuICAgICAgICBib2FyZFtpXSA9IFtdXG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgY29sdW1uOyBqKyspIHtcbiAgICAgICAgICAgIGJvYXJkW2ldLnB1c2goaS50b1N0cmluZygpICsgai50b1N0cmluZygpKVxuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICBjb25zdCBnZXRCb2FyZCA9ICgpID0+IGJvYXJkXG5cbiAgICBjb25zdCBwbGFjZVNoaXAgPSAoc2hpcCkgPT4ge1xuXG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgZ2V0Qm9hcmRcbiAgICB9XG59XG5cbmV4cG9ydCB7IFNoaXAsIEdhbWVib2FyZCB9IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBTaGlwLCBHYW1lYm9hcmQgfSBmcm9tIFwiLi9vYmplY3RzLmpzXCI7XG5cbmxldCBnYW1lID0gR2FtZWJvYXJkKClcblxuY29uc29sZS5sb2coZ2FtZS5nZXRCb2FyZCgpWzRdWzJdKSJdLCJuYW1lcyI6WyJTaGlwIiwicG9zaXRpb25BcnJheSIsInN1bmtTdGF0dXMiLCJwb3NpdGlvbiIsInN1bmsiLCJnZXRMZW5ndGgiLCJsZW5ndGgiLCJoaXQiLCJoaXRWYWx1ZSIsImluZGV4IiwiaW5kZXhPZiIsInNwbGljZSIsImlzU3VuayIsIkdhbWVib2FyZCIsInJvdyIsImNvbHVtbiIsImJvYXJkIiwiaSIsImoiLCJwdXNoIiwidG9TdHJpbmciLCJnZXRCb2FyZCIsInBsYWNlU2hpcCIsInNoaXAiLCJnYW1lIiwiY29uc29sZSIsImxvZyJdLCJzb3VyY2VSb290IjoiIn0=