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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scss_Utils_variables_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scss/Utils/variables.scss */ \"./src/scss/Utils/variables.scss\");\n/* harmony import */ var _scss_Utils_visually_hidden_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scss/Utils/visually-hidden.scss */ \"./src/scss/Utils/visually-hidden.scss\");\n/* harmony import */ var _scss_Utils_media_queries_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scss/Utils/media-queries.scss */ \"./src/scss/Utils/media-queries.scss\");\n/* harmony import */ var _scss_Base_common_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scss/Base/common.scss */ \"./src/scss/Base/common.scss\");\n/* harmony import */ var _scss_Base_container_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./scss/Base/container.scss */ \"./src/scss/Base/container.scss\");\n/* harmony import */ var _scss_Components_header_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./scss/Components/header.scss */ \"./src/scss/Components/header.scss\");\n/* harmony import */ var _scss_Components_main_content_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./scss/Components/main-content.scss */ \"./src/scss/Components/main-content.scss\");\n/* harmony import */ var _scss_Components_backdrop_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./scss/Components/backdrop.scss */ \"./src/scss/Components/backdrop.scss\");\n/* harmony import */ var _scss_Components_modal_window_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./scss/Components/modal-window.scss */ \"./src/scss/Components/modal-window.scss\");\n// ============== STYLES ================\n// ------------- UTILS --------------\n\n // ------------- BASE ---------------\n\n\n\n // ---------- COMPONENTS ------------\n\n\n\n\n // import './scss/Components/sidebar.scss';\n// ============== IMAGES ================\n// import './images/modules.png'\n// ============ JavaScript ==============\n// import './js/filter.js';\n// import './js/modal';\n\nvar refs = {\n  closeModalButton: document.querySelector(\"button[data-action=\\\"modal-close\\\"]\"),\n  backdrop: document.querySelector('.js-backdrop'),\n  container: document.querySelector('.js-container'),\n  list: document.getElementById('filter') // idNumbers: [],\n  // MAX_PILLS: 70,\n\n};\nvar closeModalButton = refs.closeModalButton,\n    backdrop = refs.backdrop,\n    container = refs.container,\n    list = refs.list;\nvar idNumbers = [];\nvar MAX_PILLS = 70; // MAX_PILLS.forEach(item => {\n//     idNumbers = [item.index];\n//     return createItemsMarkup(idNumbers, idNumbers.length);\n// });\n// ПОДСЧЁТ ЕЛЕМЕНТОВ СПИСКА maxPills\n\nfunction countItems() {\n  for (var i = 1; i <= MAX_PILLS.length; i += 1) {\n    console.log(i); // renderItemMarkup(i);\n\n    return idNumbers.push(i);\n  }\n} // Рендерит разметку списка таблеток от первого до maxPills\n\n\nfunction createItemsMarkup(items) {\n  return list.insertAdjacentHTML('beforeend', items.map(function (index) {\n    // console.log(item);\n    return \"<li class=\\\"filter_list--item\\\">\\n                    \\n                        <button \\n                        class=\\\"filter_list--button\\\" \\n                        data-action=\\\"open-modal\\\" \\n                        type=\\\"button\\\" \\n                        >\\n                            \".concat(index, \"\\n                        </button>\\n                \\n                </li>\");\n  }));\n}\n\nvar markp = createItemsMarkup(idNumbers, idNumbers.length); // const murkap = createItemsMarkup(numbers, numbers.length);\n// list.addEventListener('click', toggleModal);\n// closeModalButton.addEventListener('click', toggleModal);\n// function toggleModal() {\n//     // if (!refs.modal.classList.contains)\n//     container.classList.toggle('is-open');\n//     // backdrop.classList.toggle('is-hidden');\n// }\n// - Закрытие модального окна по нажатию клавиши `ESC`.\n\nvar modalCloseByEscHandler = function modalCloseByEscHandler(_ref) {\n  var key = _ref.key;\n\n  if (key === 'Escape') {\n    modalCloseHandler();\n  }\n};\n/*\r\nconst scrollGalleryHandler = ({ key }) => {\r\n    let currentIndex = galleryItems.findIndex(\r\n        item => item.description === image.alt || item.original === image.src,\r\n    );\r\n    if (key === 'ArrowLeft') {\r\n        // - Пролистывание изображений галереи в открытом модальном окне стрелками \"влево\".\r\n        if (currentIndex !== 0) {\r\n            currentIndex -= 1;\r\n        } else {\r\n            currentIndex = 0;\r\n        }\r\n    }\r\n    if (key === 'ArrowRight') {\r\n        // - Пролистывание изображений галереи в открытом модальном окне стрелками \"вправо\".\r\n        if (currentIndex !== galleryItems.length - 1) {\r\n            currentIndex += 1;\r\n        } else {\r\n            currentIndex = galleryItems.length - 1;\r\n        }\r\n    }\r\n\r\n    image.alt = galleryItems[currentIndex].description;\r\n    image.src = galleryItems[currentIndex].original;\r\n};\r\n*/\n\n\nvar modalOpenHandler = function modalOpenHandler(_ref2) {\n  var target = _ref2.target,\n      currentTarget = _ref2.currentTarget;\n\n  if (target.nodeName !== 'BUTTON') {\n    console.log(target.nodeName);\n    return;\n  }\n\n  console.log(target);\n  console.log(currentTarget);\n  event.preventDefault();\n  window.addEventListener('keydown', modalCloseByEscHandler); // window.addEventListener('keydown', scrollGalleryHandler);\n\n  container.classList.add('is-open'); // - Открытие модального окна по клику на элементе галереи.\n  // image.src = target.dataset.source; // - Подмена значения атрибута `src` элемента `img.lightbox__image`.\n  // image.alt = target.alt;\n  // console.log(image.alt);\n};\n\nvar modalCloseHandler = function modalCloseHandler() {\n  window.removeEventListener('keydown', modalCloseByEscHandler);\n  container.classList.remove('is-open'); // - Закрытие модального окна по клику на кнопку `button[data-action=\"close-lightbox\"]`.\n};\n\nlist.addEventListener('click', modalOpenHandler);\ncloseModalButton.addEventListener('click', modalCloseHandler);\nbackdrop.addEventListener('click', modalCloseHandler);\n\n//# sourceURL=webpack://goit-js-hw-09-webpack/./src/index.js?");

/***/ }),

/***/ "./src/scss/Base/common.scss":
/*!***********************************!*\
  !*** ./src/scss/Base/common.scss ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://goit-js-hw-09-webpack/./src/scss/Base/common.scss?");

/***/ }),

/***/ "./src/scss/Base/container.scss":
/*!**************************************!*\
  !*** ./src/scss/Base/container.scss ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://goit-js-hw-09-webpack/./src/scss/Base/container.scss?");

/***/ }),

/***/ "./src/scss/Components/backdrop.scss":
/*!*******************************************!*\
  !*** ./src/scss/Components/backdrop.scss ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://goit-js-hw-09-webpack/./src/scss/Components/backdrop.scss?");

/***/ }),

/***/ "./src/scss/Components/header.scss":
/*!*****************************************!*\
  !*** ./src/scss/Components/header.scss ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://goit-js-hw-09-webpack/./src/scss/Components/header.scss?");

/***/ }),

/***/ "./src/scss/Components/main-content.scss":
/*!***********************************************!*\
  !*** ./src/scss/Components/main-content.scss ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://goit-js-hw-09-webpack/./src/scss/Components/main-content.scss?");

/***/ }),

/***/ "./src/scss/Components/modal-window.scss":
/*!***********************************************!*\
  !*** ./src/scss/Components/modal-window.scss ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://goit-js-hw-09-webpack/./src/scss/Components/modal-window.scss?");

/***/ }),

/***/ "./src/scss/Utils/media-queries.scss":
/*!*******************************************!*\
  !*** ./src/scss/Utils/media-queries.scss ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://goit-js-hw-09-webpack/./src/scss/Utils/media-queries.scss?");

/***/ }),

/***/ "./src/scss/Utils/variables.scss":
/*!***************************************!*\
  !*** ./src/scss/Utils/variables.scss ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://goit-js-hw-09-webpack/./src/scss/Utils/variables.scss?");

/***/ }),

/***/ "./src/scss/Utils/visually-hidden.scss":
/*!*********************************************!*\
  !*** ./src/scss/Utils/visually-hidden.scss ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://goit-js-hw-09-webpack/./src/scss/Utils/visually-hidden.scss?");

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