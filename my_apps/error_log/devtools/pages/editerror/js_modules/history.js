let element = function(e,t){ let n = document.createElement(e); if(t){n.innerHTML = t;} return n; }
let container = document.getElementById('history__elements-cintainer');
let history = {
	get_pattern: function(data){
		let tr = element('tr');		
		tr.appendChild(element('td', data[0]));
		tr.appendChild(element('td', data[1]));
		tr.appendChild(element('td', data[3]));
		tr.appendChild(element('td', data[2]));
		return  tr;
	},
	recreate: function(data){
		container.innerHTML = '';
		for (var i = 0; i < data.length; i++) {
			container.appendChild(history.get_pattern(data[i]));
		};
		return container;	
	},
	add_row: function(data){
		let tr = history.get_pattern(data);
		container.appendChild(tr);
		return tr;
	}
};

module.exports = history;