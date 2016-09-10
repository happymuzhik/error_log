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

	var nodes = {
		submit_button: document.getElementById('signup__submit-button'),
		login_input: document.getElementById('signup__login-input'),
		name_input: document.getElementById('signup__name-input'),
		surname_input: document.getElementById('signup__surname-input'),
		password_input: document.getElementById('signup__password-input'),
		confirm_password_input: document.getElementById('signup__confirm-password-input')
	};

	var sign_in = function sign_in() {
		if (nodes.login_input.value.trim() == 0 || nodes.name_input.value.trim() == 0 || nodes.surname_input.value.trim() == 0 || nodes.password_input.value.trim() == 0 || nodes.confirm_password_input.value.trim() == 0) {
			notify('ERROR: Please fill in all fields.');
			return false;
		}
		if (nodes.password_input.value != nodes.confirm_password_input.value) {
			notify('ERROR: Password and confirm password mismatch!');
			return false;
		}
		loader.show();
		$.ajax({
			type: "POST",
			url: '/my_apps/error_log/index.cfm/request/signup?format=json',
			dataType: "json",
			data: {
				login: nodes.login_input.value,
				name: nodes.name_input.value,
				surname: nodes.surname_input.value,
				password: nodes.password_input.value
			},
			success: function success(response) {
				loader.hide();
				if (response.RESULT) {
					(function () {
						notify('SUCCESS: Successful registration!', 'success', 2);
						var t = setTimeout(function () {
							window.location = '/my_apps/error_log/index.cfm/auth/login';
							clearTimeout(t);
						}, 2000);
					})();
				} else {
					notify(response.DATA);
					console.error('Error while saving error!');
				}
			},
			error: function error() {
				console.error('Error while saving error!');
			}
		});
	};

	nodes.submit_button.addEventListener('click', function () {
		sign_in();
	});

/***/ }
/******/ ]);