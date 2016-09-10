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
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _nodes = __webpack_require__(1);

	var _nodes2 = _interopRequireDefault(_nodes);

	var _app = __webpack_require__(2);

	var _app2 = _interopRequireDefault(_app);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	_nodes2.default.save_error_button.addEventListener('click', function () {
		_app2.default.save_error();
	});

	_nodes2.default.statuses_cont.addEventListener('click', function (e) {
		if (e.target.classList.contains('statuses__button')) {
			if (e.target.getAttribute('value') != '1' && _app2.default.status_id != '4') {
				_nodes2.default.comment_textarea.value = '';
				_nodes2.default.comment_container.classList.remove('hidden');
				_app2.default.buf_status_id = e.target.getAttribute('value');
			}
		}
	});

	_nodes2.default.comment_background.addEventListener('click', function () {
		_app2.default.hide_comment();
	});

	_nodes2.default.comment_cancel_button.addEventListener('click', function () {
		_app2.default.hide_comment();
	});

	_nodes2.default.comment_save_button.addEventListener('click', function () {
		if (_nodes2.default.comment_textarea.value.trim().length > 0) {
			_app2.default.set_status(_app2.default.buf_status_id);
			_app2.default.hide_comment();
		} else {
			alert('Comment is required!');
		}
	});

	if (_app2.default.error_id != 'null') {
		_app2.default.get_error(_app2.default.error_id);
		_app2.default.edit_mode();
	}

/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';

	var nodes = {
		'history_elements_container': document.getElementById('history__elements-cintainer'),
		'save_error_button': document.getElementById('error-form__button-save'),
		'comment_container': document.getElementById('comment__container'),
		'comment_background': document.getElementById('comment__background'),
		'comment_textarea': document.getElementById('comment__textarea'),
		'comment_save_button': document.getElementById('comment__button-save'),
		'comment_cancel_button': document.getElementById('comment__button-cancel'),
		'form_short_description': document.getElementById('error-form__short_description'),
		'form_description': document.getElementById('error-form__description'),
		'form_urgency': document.getElementById('error-form__urgency'),
		'form_criticalness': document.getElementById('error-form__criticalness'),
		'statuses_cont': document.getElementById('statuses__cont'),
		'statuses_buttons': document.querySelectorAll('.statuses__button')
	};

	module.exports = nodes;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _nodes = __webpack_require__(1);

	var _nodes2 = _interopRequireDefault(_nodes);

	var _history = __webpack_require__(3);

	var _history2 = _interopRequireDefault(_history);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var app = {
		'error_id': document.getElementById('error-form').getAttribute('data-error-id'),
		'status_id': null,
		'buf_status_id': null,
		get_error: function get_error() {
			loader.show();
			$.ajax({
				type: "POST",
				url: '/my_apps/error_log/index.cfm/request/geterror?format=json',
				dataType: "json",
				data: {
					id: app.error_id
				},
				success: function success(response) {
					loader.hide();
					if (response.RESULT) {
						_nodes2.default.form_short_description.value = response.DATA.ERROR.SHORT_DESCRIPTION;
						_nodes2.default.form_description.value = response.DATA.ERROR.DESCRIPTION;
						_nodes2.default.form_criticalness.value = response.DATA.ERROR.CRITICALNESS_ID;
						_nodes2.default.form_urgency.value = response.DATA.ERROR.URGENCY_ID;
						app.set_status(response.DATA.ERROR.STATUS_ID, true);
						_history2.default.recreate(response.DATA.ERROR_HISTORY.DATA);
					} else {
						console.error('Error while getting error!');
					}
				},
				error: function error() {
					console.error('Error while getting error!');
				}
			});
		},
		save_error: function save_error() {
			loader.show();
			$.ajax({
				type: "POST",
				url: '/my_apps/error_log/index.cfm/request/saveerror?format=json',
				dataType: "json",
				data: {
					short_description: _nodes2.default.form_short_description.value,
					description: _nodes2.default.form_description.value,
					criticalness_id: _nodes2.default.form_criticalness.value == 'null' ? 1 : _nodes2.default.form_criticalness.value,
					urgency_id: _nodes2.default.form_urgency.value == 'null' ? 1 : _nodes2.default.form_urgency.value
				},
				success: function success(response) {
					loader.hide();
					if (response.RESULT) {
						window.location = '/my_apps/error_log/index.cfm/main/errorlist';
					} else {
						console.error('Error while saving error!');
					}
				},
				error: function error() {
					console.error('Error while saving error!');
				}
			});
		},
		edit_mode: function edit_mode() {
			_nodes2.default.form_short_description.setAttribute('disabled', 'disabled');
			_nodes2.default.form_description.setAttribute('disabled', 'disabled');
			_nodes2.default.form_criticalness.setAttribute('disabled', 'disabled');
			_nodes2.default.form_urgency.setAttribute('disabled', 'disabled');
			_nodes2.default.save_error_button.classList.add('hidden');
			_nodes2.default.statuses_cont.classList.remove('hidden');
		},
		set_status: function set_status(status_id, dont_save_to_db) {
			for (var i = 0; i < _nodes2.default.statuses_buttons.length; i++) {
				_nodes2.default.statuses_buttons[i].classList.remove('info');
			};
			for (var _i = 0; _i < _nodes2.default.statuses_buttons.length; _i++) {
				if (_nodes2.default.statuses_buttons[_i].getAttribute('value') == status_id) {
					_nodes2.default.statuses_buttons[_i].classList.add('info');
				}
			};
			app.status_id = status_id;

			if (dont_save_to_db) {
				return true;
			}
			loader.show();
			$.ajax({
				type: "POST",
				url: '/my_apps/error_log/index.cfm/request/setstatus?format=json',
				dataType: "json",
				data: {
					error_id: app.error_id,
					status_id: status_id,
					comment: _nodes2.default.comment_textarea.value
				},
				success: function success(response) {
					loader.hide();
					if (response.RESULT) {
						_history2.default.add_row(response.DATA.DATA[0]);
						return true;
					} else {
						console.error('Error while saving error!');
					}
				},
				error: function error() {
					console.error('Error while saving error!');
				}
			});
		},
		hide_comment: function hide_comment() {
			_nodes2.default.comment_container.classList.add('hidden');
		}
	};

	module.exports = app;

/***/ },
/* 3 */
/***/ function(module, exports) {

	'use strict';

	var element = function element(e, t) {
		var n = document.createElement(e);if (t) {
			n.innerHTML = t;
		}return n;
	};
	var container = document.getElementById('history__elements-cintainer');
	var history = {
		get_pattern: function get_pattern(data) {
			var tr = element('tr');
			tr.appendChild(element('td', data[0]));
			tr.appendChild(element('td', data[1]));
			tr.appendChild(element('td', data[3]));
			tr.appendChild(element('td', data[2]));
			return tr;
		},
		recreate: function recreate(data) {
			container.innerHTML = '';
			for (var i = 0; i < data.length; i++) {
				container.appendChild(history.get_pattern(data[i]));
			};
			return container;
		},
		add_row: function add_row(data) {
			var tr = history.get_pattern(data);
			container.appendChild(tr);
			return tr;
		}
	};

	module.exports = history;

/***/ }
/******/ ]);