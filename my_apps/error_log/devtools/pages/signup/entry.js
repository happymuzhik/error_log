let nodes = {
	submit_button: document.getElementById('signup__submit-button'),
	login_input: document.getElementById('signup__login-input'),
	name_input: document.getElementById('signup__name-input'),
	surname_input: document.getElementById('signup__surname-input'),
	password_input: document.getElementById('signup__password-input'),
	confirm_password_input: document.getElementById('signup__confirm-password-input'),
};

let sign_in = function(){
	if (
		nodes.login_input.value.trim()==0||
		nodes.name_input.value.trim()==0||
		nodes.surname_input.value.trim()==0||
		nodes.password_input.value.trim()==0||
		nodes.confirm_password_input.value.trim()==0
	){
		notify('ERROR: Please fill in all fields.');
		return false;
	}
	if (nodes.password_input.value!=nodes.confirm_password_input.value){
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
			password: nodes.password_input.value,
		},
		success: function(response) {
			loader.hide();
			if(response.RESULT){
				notify('SUCCESS: Successful registration!', 'success', 2);
				let t = setTimeout(function() {
					window.location = '/my_apps/error_log/index.cfm/auth/login';
					clearTimeout(t);
				}, 2000);				
			}else{
				notify(response.DATA);
				console.error('Error while saving error!');	
			}
		},
		error: function(){
			console.error('Error while saving error!');
		}
	});
};

nodes.submit_button.addEventListener('click', function(){
	sign_in();
});