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
    if (position == []) {
      sunk = true;
    }
    return sunk;
  };
  return {
    position,
    getLength,
    hit,
    isSunk
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

let testCarrier = (0,_objects_js__WEBPACK_IMPORTED_MODULE_0__.Ship)(['00'], false);
testCarrier.hit('00');
console.log(testCarrier.isSunk());
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLE1BQU1BLElBQUksR0FBR0EsQ0FBQ0MsYUFBYSxFQUFFQyxVQUFVLEtBQUs7RUFFeEMsSUFBSUMsUUFBUSxHQUFHRixhQUFhO0VBQzVCLElBQUlHLElBQUksR0FBR0YsVUFBVTtFQUVyQixNQUFNRyxTQUFTLEdBQUlGLFFBQVEsSUFBSztJQUM1QixPQUFPQSxRQUFRLENBQUNHLE1BQU07RUFDMUIsQ0FBQztFQUVELE1BQU1DLEdBQUcsR0FBSUMsUUFBUSxJQUFLO0lBRXRCLE1BQU1DLEtBQUssR0FBR04sUUFBUSxDQUFDTyxPQUFPLENBQUNGLFFBQVEsQ0FBQztJQUN4QyxJQUFJQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLEVBQUU7TUFDWk4sUUFBUSxDQUFDUSxNQUFNLENBQUNGLEtBQUssRUFBRSxDQUFDLENBQUM7SUFDN0I7RUFDSixDQUFDO0VBRUQsTUFBTUcsTUFBTSxHQUFHQSxDQUFBLEtBQU07SUFDakIsSUFBSVQsUUFBUSxJQUFJLEVBQUUsRUFBRTtNQUNoQkMsSUFBSSxHQUFHLElBQUk7SUFDZjtJQUVBLE9BQU9BLElBQUk7RUFDZixDQUFDO0VBRUQsT0FBTztJQUNIRCxRQUFRO0lBQ1JFLFNBQVM7SUFDVEUsR0FBRztJQUNISztFQUNKLENBQUM7QUFDTCxDQUFDOzs7Ozs7O1VDL0JEO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOb0M7QUFFcEMsSUFBSUMsV0FBVyxHQUFHYixpREFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsS0FBSyxDQUFDO0FBRXJDYSxXQUFXLENBQUNOLEdBQUcsQ0FBQyxJQUFJLENBQUM7QUFFckJPLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixXQUFXLENBQUNELE1BQU0sQ0FBQyxDQUFDLENBQUMsQyIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvb2JqZWN0cy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBTaGlwID0gKHBvc2l0aW9uQXJyYXksIHN1bmtTdGF0dXMpID0+IHtcblxuICAgIGxldCBwb3NpdGlvbiA9IHBvc2l0aW9uQXJyYXlcbiAgICBsZXQgc3VuayA9IHN1bmtTdGF0dXNcbiAgICBcbiAgICBjb25zdCBnZXRMZW5ndGggPSAocG9zaXRpb24pID0+IHtcbiAgICAgICAgcmV0dXJuIHBvc2l0aW9uLmxlbmd0aFxuICAgIH1cblxuICAgIGNvbnN0IGhpdCA9IChoaXRWYWx1ZSkgPT4ge1xuXG4gICAgICAgIGNvbnN0IGluZGV4ID0gcG9zaXRpb24uaW5kZXhPZihoaXRWYWx1ZSlcbiAgICAgICAgaWYgKGluZGV4ID4gLTEpIHtcbiAgICAgICAgICAgIHBvc2l0aW9uLnNwbGljZShpbmRleCwgMSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGlzU3VuayA9ICgpID0+IHtcbiAgICAgICAgaWYgKHBvc2l0aW9uID09IFtdKSB7XG4gICAgICAgICAgICBzdW5rID0gdHJ1ZVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHN1bmtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBwb3NpdGlvbixcbiAgICAgICAgZ2V0TGVuZ3RoLFxuICAgICAgICBoaXQsXG4gICAgICAgIGlzU3Vua1xuICAgIH1cbn1cblxuZXhwb3J0IHsgU2hpcCB9IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBTaGlwIH0gZnJvbSBcIi4vb2JqZWN0cy5qc1wiO1xuXG5sZXQgdGVzdENhcnJpZXIgPSBTaGlwKFsnMDAnXSwgZmFsc2UpXG5cbnRlc3RDYXJyaWVyLmhpdCgnMDAnKVxuXG5jb25zb2xlLmxvZyh0ZXN0Q2Fycmllci5pc1N1bmsoKSkiXSwibmFtZXMiOlsiU2hpcCIsInBvc2l0aW9uQXJyYXkiLCJzdW5rU3RhdHVzIiwicG9zaXRpb24iLCJzdW5rIiwiZ2V0TGVuZ3RoIiwibGVuZ3RoIiwiaGl0IiwiaGl0VmFsdWUiLCJpbmRleCIsImluZGV4T2YiLCJzcGxpY2UiLCJpc1N1bmsiLCJ0ZXN0Q2FycmllciIsImNvbnNvbGUiLCJsb2ciXSwic291cmNlUm9vdCI6IiJ9