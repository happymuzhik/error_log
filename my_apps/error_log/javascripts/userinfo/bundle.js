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

	var login_input = document.getElementById('userinfo__login-input');
	var name_input = document.getElementById('userinfo__name-input');
	var surname_input = document.getElementById('userinfo__surname-input');
	var password_input = document.getElementById('userinfo__password-input');
	var save_button = document.getElementById('userinfo__save-button');

	var save_user = function save_user() {
		if (login_input.value.trim() == 0 || name_input.value.trim() == 0 || surname_input.value.trim() == 0 || password_input.value.trim() == 0) {
			notify('ERROR: Please fill in all fields.');
			return false;
		}
		loader.show();
		$.ajax({
			type: "POST",
			url: '/my_apps/error_log/index.cfm/request/saveuserinfo?format=json',
			dataType: "json",
			data: {
				login: login_input.value,
				name: name_input.value,
				surname: surname_input.value,
				password: password_input.value
			},
			success: function success(response) {
				loader.hide();
				if (response.RESULT) {
					notify('SUCCESS: User saved!', 'success', 2);
				} else {
					notify(response.DATA);
					console.error('Error while saving user!');
				}
			},
			error: function error() {
				console.error('Error while saving user!');
			}
		});
	};

	save_button.addEventListener('click', function () {
		save_user();
	});

/***/ }
/******/ ]);