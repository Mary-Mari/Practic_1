/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar users_1 = __webpack_require__(/*! ./users */ \"./src/users.ts\");\n// Функция для преобразования массива пользователей\nfunction getUsersJobPositions(users) {\n    return users.map(function (user) { return ({\n        name: user.name,\n        position: user.position,\n        age: user.age,\n        gender: user.gender,\n    }); });\n}\n// Создание переменной usersPositions и присвоение ей результатов вызова функции\nvar usersPositions = getUsersJobPositions(users_1.default);\nconsole.log('userPositions', usersPositions);\n\n\n//# sourceURL=webpack://your-project-name/./src/index.ts?");

/***/ }),

/***/ "./src/users.ts":
/*!**********************!*\
  !*** ./src/users.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\n// создание массива пользователя\nvar usersArray = [\n    {\n        userid: ' 127e4567-e89b-12d3-a458-426614174000',\n        name: 'John',\n        gender: 'man'\n    },\n    {\n        userid: '127e4567-e89a-12f3-a458-327395154000',\n        name: 'Anna',\n        gender: 'woman'\n    }\n];\nexports[\"default\"] = usersArray; //строка экспортирует массив usersArray из модуля\n\n\n//# sourceURL=webpack://your-project-name/./src/users.ts?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;