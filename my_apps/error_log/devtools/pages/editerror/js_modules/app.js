import nodes from './nodes.js';
import history from './history.js';

let app = {
	'error_id': document.getElementById('error-form').getAttribute('data-error-id'),
	'status_id': null,
	'buf_status_id': null,
	get_error: function(){
		loader.show();
		$.ajax({ 
			type: "POST", 
			url: '/my_apps/error_log/index.cfm/request/geterror?format=json',
			dataType: "json",
			data: {
				id: app.error_id
			},
			success: function(response) { 
				loader.hide();
				if(response.RESULT){
					nodes.form_short_description.value = response.DATA.ERROR.SHORT_DESCRIPTION;
					nodes.form_description.value = response.DATA.ERROR.DESCRIPTION;
					nodes.form_criticalness.value = response.DATA.ERROR.CRITICALNESS_ID;
					nodes.form_urgency.value = response.DATA.ERROR.URGENCY_ID;
					app.set_status(response.DATA.ERROR.STATUS_ID, true);
					history.recreate(response.DATA.ERROR_HISTORY.DATA);
				}else{
					console.error('Error while getting error!');	
				}
			},
			error: function(){
				console.error('Error while getting error!');
			}
		});
	},
	save_error: function(){
		loader.show();
		$.ajax({ 
			type: "POST", 
			url: '/my_apps/error_log/index.cfm/request/saveerror?format=json',
			dataType: "json",
			data: {
				short_description: nodes.form_short_description.value,
				description: nodes.form_description.value,
				criticalness_id: (nodes.form_criticalness.value=='null')?1:nodes.form_criticalness.value,
				urgency_id: (nodes.form_urgency.value=='null')?1:nodes.form_urgency.value,
			},
			success: function(response) {
				loader.hide();
				if(response.RESULT){
					window.location = '/my_apps/error_log/index.cfm/main/errorlist';
				}else{
					console.error('Error while saving error!');	
				}
			},
			error: function(){
				console.error('Error while saving error!');
			}
		});
	},
	edit_mode: function(){
		nodes.form_short_description.setAttribute('disabled','disabled');
		nodes.form_description.setAttribute('disabled','disabled');
		nodes.form_criticalness.setAttribute('disabled','disabled');
		nodes.form_urgency.setAttribute('disabled','disabled');
		nodes.save_error_button.classList.add('hidden');
		nodes.statuses_cont.classList.remove('hidden');
	},
	set_status: function(status_id, dont_save_to_db){
		for (let i = 0; i < nodes.statuses_buttons.length; i++) {
			nodes.statuses_buttons[i].classList.remove('info');
		};
		for (let i = 0; i < nodes.statuses_buttons.length; i++) {
			if(nodes.statuses_buttons[i].getAttribute('value')==status_id){
				nodes.statuses_buttons[i].classList.add('info');		
			}
		};
		app.status_id = status_id;

		if(dont_save_to_db){
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
				comment: nodes.comment_textarea.value,
			},
			success: function(response) {
				loader.hide();
				if(response.RESULT){
					history.add_row(response.DATA.DATA[0]);
					return true;
				}else{
					console.error('Error while saving error!');	
				}
			},
			error: function(){
				console.error('Error while saving error!');
			}
		});

	},
	hide_comment: function(){
		nodes.comment_container.classList.add('hidden');
	}
};

module.exports = app;