let login_input = document.getElementById('login__login-input');
let password_input = document.getElementById('login__password-input');
let submit_button = document.getElementById('login__submit-button');

let signin = function () {
	loader.show();
	$.ajax({ 
		type: "POST", 
		url: '/my_apps/error_log/index.cfm/request/signin?format=json',
		dataType: "json",
		data: {
			login: login_input.value,
			password: password_input.value,
		},
		success: function(response) {
			loader.hide();
			if(response.RESULT){
				window.location = '/my_apps/error_log/';
			}else{
				notify(response.DATA);
				console.error('Login error!');	
			}
		},
		error: function(){
			console.error('Login error!');
		}
	});
};

submit_button.addEventListener('click', function(){
	signin();
});

password_input.addEventListener('keyup', function(e){
	if(e.keyCode == 13){
		signin();
	}
});