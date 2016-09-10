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

	var login_input = document.getElementById('login__login-input');
	var password_input = document.getElementById('login__password-input');
	var submit_button = document.getElementById('login__submit-button');

	var signin = function signin() {
		loader.show();
		$.ajax({
			type: "POST",
			url: '/my_apps/error_log/index.cfm/request/signin?format=json',
			dataType: "json",
			data: {
				login: login_input.value,
				password: password_input.value
			},
			success: function success(response) {
				loader.hide();
				if (response.RESULT) {
					window.location = '/my_apps/error_log/';
				} else {
					notify(response.DATA);
					console.error('Login error!');
				}
			},
			error: function error() {
				console.error('Login error!');
			}
		});
	};

	submit_button.addEventListener('click', function () {
		signin();
	});

	password_input.addEventListener('keyup', function (e) {
		if (e.keyCode == 13) {
			signin();
		}
	});

/***/ }
/******/ ]);