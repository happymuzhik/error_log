import nodes from './js_modules/nodes.js';
import app from './js_modules/app.js';

nodes.save_error_button.addEventListener('click', function(){
	app.save_error();
});

nodes.statuses_cont.addEventListener('click', function(e){
	if(e.target.classList.contains('statuses__button')){
		if(e.target.getAttribute('value')!='1'&&app.status_id!='4'){
			nodes.comment_textarea.value = '';
			nodes.comment_container.classList.remove('hidden');
			app.buf_status_id = e.target.getAttribute('value');			
		}
	}
});

nodes.comment_background.addEventListener('click', function(){
	app.hide_comment();
});

nodes.comment_cancel_button.addEventListener('click', function(){
	app.hide_comment();
});

nodes.comment_save_button.addEventListener('click', function(){
	if(nodes.comment_textarea.value.trim().length > 0){
		app.set_status(app.buf_status_id);
		app.hide_comment();
	}else{
		alert('Comment is required!');
	}
});

if (app.error_id!='null'){
	app.get_error(app.error_id);
	app.edit_mode();
}