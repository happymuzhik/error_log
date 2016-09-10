let nodes = {
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
	'statuses_buttons': document.querySelectorAll('.statuses__button'),
};

module.exports = nodes;