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

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst createContactPage = () => {\r\n    const content = document.querySelector(\"#content\");\r\n    const pageContent = document.createElement('div');\r\n    pageContent.classList.add('page-content');\r\n\r\n    const form = document.createElement('form');\r\n    form.classList.add('contact-form');\r\n\r\n    const headingInput = document.createElement('input');\r\n    headingInput.type = 'text';\r\n    headingInput.placeholder = 'Enter';\r\n    form.appendChild(headingInput);\r\n\r\n    const addressInput = document.createElement('input');\r\n    addressInput.type = 'text';\r\n    addressInput.placeholder = 'Enter address';\r\n    form.appendChild(addressInput);\r\n\r\n    const phoneInput = document.createElement('input');\r\n    phoneInput.type = 'text';\r\n    phoneInput.placeholder = 'Enter phone number';\r\n    form.appendChild(phoneInput);\r\n\r\n    const submitButton = document.createElement('input');\r\n    submitButton.type = 'submit';\r\n    submitButton.value = 'Submit';\r\n    form.appendChild(submitButton);\r\n\r\n    pageContent.appendChild(form);\r\n    content.appendChild(pageContent);\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createContactPage);\n\n//# sourceURL=webpack://restaurent/./src/contact.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _loadpage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loadpage */ \"./src/loadpage.js\");\n\r\n\r\n\r\n(0,_loadpage__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\n//# sourceURL=webpack://restaurent/./src/index.js?");

/***/ }),

/***/ "./src/loadpage.js":
/*!*************************!*\
  !*** ./src/loadpage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _restaurant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./restaurant */ \"./src/restaurant.js\");\n/* harmony import */ var _tabs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabs */ \"./src/tabs.js\");\n\r\n\r\n\r\nfunction intializeLoad(){\r\n    (0,_tabs__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n    (0,_restaurant__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (intializeLoad);\n\n//# sourceURL=webpack://restaurent/./src/loadpage.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst createMenuPage = () => {\r\n    const content = document.querySelector('#content');\r\n    const pageContent = document.createElement('div');\r\n    pageContent.classList.add('page-content');\r\n\r\n    const heading = document.createElement('h1');\r\n    heading.textContent = \"Our Menu Dishes\";\r\n\r\n    const menuList = document.createElement('ul');\r\n    const menuListItem1 = document.createElement('li')\r\n    menuListItem1.textContent = 'Pizza';\r\n    const menuListItem2 = document.createElement('li');\r\n    menuListItem2.textContent = 'Noodles';\r\n    const menuListItem3 = document.createElement('li');\r\n    menuListItem3.textContent = 'Spaghatti'\r\n    menuList.appendChild(menuListItem1);\r\n    menuList.appendChild(menuListItem2);\r\n    menuList.appendChild(menuListItem3);\r\n\r\n    pageContent.appendChild(heading);\r\n    pageContent.appendChild(menuList);\r\n    content.appendChild(pageContent);\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createMenuPage);\r\n\r\n\n\n//# sourceURL=webpack://restaurent/./src/menu.js?");

/***/ }),

/***/ "./src/restaurant.js":
/*!***************************!*\
  !*** ./src/restaurant.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst createRestaurantPage = () => {\r\n    const content = document.querySelector(\"#content\");\r\n    const pageContent = document.createElement('div');\r\n    pageContent.classList.add('page-content');\r\n\r\n    //Create and append img element\r\n    const image = document.createElement('img');\r\n    image.src = 'https://images.pexels.com/photos/776538/pexels-photo-776538.jpeg';\r\n    image.height = '300';\r\n    pageContent.appendChild(image);\r\n\r\n    //Create and append h1 element\r\n    const headline = document.createElement('h1');\r\n    headline.textContent = 'Welcome to Chung-FA';\r\n    pageContent.appendChild(headline);\r\n\r\n    //Create and append paragraph element\r\n    const copy = document.createElement('p');\r\n    copy.textContent = 'Fulfill Your Deepest Crave For Your Favorite Food';\r\n    pageContent.appendChild(copy);\r\n    content.appendChild(pageContent);\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createRestaurantPage);\n\n//# sourceURL=webpack://restaurent/./src/restaurant.js?");

/***/ }),

/***/ "./src/tabs.js":
/*!*********************!*\
  !*** ./src/tabs.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _restaurant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./restaurant */ \"./src/restaurant.js\");\n\r\n\r\n\r\n\r\nconst createTabs = () => {\r\n    const content = document.querySelector('#content');\r\n    \r\n    const div1 = document.createElement('div');\r\n    const div2 = document.createElement('div');\r\n    const div3 = document.createElement('div');\r\n\r\n    div1.setAttribute('id', 'home-btn');\r\n    div2.setAttribute('id', 'menu-btn');\r\n    div3.setAttribute('id', 'contact-btn');\r\n\r\n    div1.classList.add('tab');\r\n    div2.classList.add('tab');\r\n    div3.classList.add('tab');\r\n\r\n    div1.textContent = 'Home';\r\n    div2.textContent = 'Menu';\r\n    div3.textContent = 'Contact';\r\n\r\n    content.appendChild(div1);\r\n    content.appendChild(div2);\r\n    content.appendChild(div3);\r\n\r\n    div1.addEventListener('click', ()=>{\r\n        clearContent();\r\n        (0,_restaurant__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n    })\r\n    div2.addEventListener('click', ()=>{\r\n        clearContent();\r\n        (0,_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n    })\r\n    div3.addEventListener('click', ()=>{\r\n        clearContent();\r\n        (0,_contact__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n    })\r\n}\r\n\r\nfunction clearContent(){\r\n    const content = document.querySelector('#content');\r\n    const pageContent = document.querySelector(\".page-content\");\r\n    if(pageContent){\r\n        content.removeChild(pageContent);\r\n    }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createTabs);\n\n//# sourceURL=webpack://restaurent/./src/tabs.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;