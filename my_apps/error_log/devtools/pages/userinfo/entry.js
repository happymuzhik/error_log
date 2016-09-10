let login_input = document.getElementById('userinfo__login-input');
let name_input = document.getElementById('userinfo__name-input');
let surname_input = document.getElementById('userinfo__surname-input');
let password_input = document.getElementById('userinfo__password-input');
let save_button = document.getElementById('userinfo__save-button');

let save_user = function(){
	if (
		login_input.value.trim()==0||
		name_input.value.trim()==0||
		surname_input.value.trim()==0||
		password_input.value.trim()==0
	){
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
			password: password_input.value,
		},
		success: function(response) {
			loader.hide();
			if(response.RESULT){
				notify('SUCCESS: User saved!', 'success', 2);
			}else{
				notify(response.DATA);
				console.error('Error while saving user!');	
			}
		},
		error: function(){
			console.error('Error while saving user!');
		}
	});
};

save_button.addEventListener('click', function(){
	save_user();
});