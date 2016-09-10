let loader = {
	node: null,
	get_pattern: function(){
		let cont = document.createElement('div');
		cont.classList.add('loader__cont');
		let text = document.createElement('div');
		text.classList.add('loader__text');
		text.innerHTML = 'Loading';
		cont.appendChild(text);
		return cont;
	},
	show: function(){
		if(!loader.node){
			loader.node = loader.get_pattern();
		}

		document.body.appendChild(loader.node);

		let fadeIn = setTimeout(function(){
			loader.node.style.opacity = 0.6;	
			clearTimeout(fadeIn);
		},100);
		
		return loader.node;
	},
	hide: function(){

		loader.node.style.opacity = 0;
		let remove = setTimeout(function(){
			loader.node.remove();	
			clearTimeout(remove);
		},300);

		return loader.node;
	}
};

let notify = function(msg,type,time) {	
	if(!type){
		type = 'danger';
	}
	if(!time){
		time = 4;
	}

	let cont = document.createElement('div');
	cont.classList.add('notify__cont');
	cont.classList.add(type+'-bg');
	cont.innerHTML = msg;
	document.body.appendChild(cont);

	let fadeIn = setTimeout(function(){
		cont.style.opacity = 1;	
		clearTimeout(fadeIn);
	},100);	

	let fadeOut = setTimeout(function(){
		cont.style.opacity = 0;
		clearTimeout(fadeOut);
		let remove = setTimeout(function(){
			cont.remove();	
			clearTimeout(remove);
		},300);
	},time*1000);
};