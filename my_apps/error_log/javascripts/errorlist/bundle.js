/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	'use strict';

	var error_table = document.querySelectorAll('.error-list__table')[0];
	var error_table_header = document.querySelectorAll('.error-list__table thead')[0];
	var error_table_body = document.querySelectorAll('.error-list__table tbody')[0];
	var error_table_th_arr = document.querySelectorAll('.error-list__table thead th[data-type]');

	var table_sort = function table_sort(colNum, type, direction) {
		var rowsArray = [].slice.call(error_table_body.rows);
		var compare;

		switch (type) {
			case 'number':
				compare = function compare(rowA, rowB) {
					if (direction == 'asc') {
						return rowA.cells[colNum].innerHTML - rowB.cells[colNum].innerHTML;
					} else {
						return rowB.cells[colNum].innerHTML - rowA.cells[colNum].innerHTML;
					}
				};
				break;
			case 'string':
				compare = function compare(rowA, rowB) {
					if (direction == 'asc') {
						return rowA.cells[colNum].innerHTML > rowB.cells[colNum].innerHTML ? 1 : -1;
					} else {
						return rowB.cells[colNum].innerHTML > rowA.cells[colNum].innerHTML ? 1 : -1;
					}
				};
				break;
		};

		rowsArray.sort(compare);
		error_table.removeChild(error_table_body);

		for (var i = 0; i < rowsArray.length; i++) {
			error_table_body.appendChild(rowsArray[i]);
		};

		error_table.appendChild(error_table_body);
	};

	error_table_header.addEventListener('click', function (e) {
		if (e.target.tagName == 'TH' && e.target.hasAttribute('data-type')) {
			if (e.target.getAttribute('data-direction') == 'asc') {
				e.target.setAttribute('data-direction', 'desc');
			} else {
				e.target.setAttribute('data-direction', 'asc');
			}
			for (var i = 0; i < error_table_th_arr.length; i++) {
				error_table_th_arr[i].classList.remove('sort');
			};
			e.target.classList.add('sort');
			table_sort(e.target.cellIndex, e.target.getAttribute('data-type'), e.target.getAttribute('data-direction'));
		}
	});

/***/ }
/******/ ]);