const error_table = document.querySelectorAll('.error-list__table')[0];
const error_table_header = document.querySelectorAll('.error-list__table thead')[0];
const error_table_body = document.querySelectorAll('.error-list__table tbody')[0];
const error_table_th_arr = document.querySelectorAll('.error-list__table thead th[data-type]');

let table_sort = function(colNum, type, direction){
	var rowsArray = [].slice.call(error_table_body.rows);
	var compare;

	switch (type) {
		case 'number':
			compare = function(rowA, rowB) {
				if(direction=='asc'){
					return rowA.cells[colNum].innerHTML - rowB.cells[colNum].innerHTML;
				}else{
					return rowB.cells[colNum].innerHTML - rowA.cells[colNum].innerHTML;
				}
		    };
			break;
		case 'string':
			compare = function(rowA, rowB) {
				if(direction=='asc'){
					return rowA.cells[colNum].innerHTML > rowB.cells[colNum].innerHTML ? 1 : -1;
				}else{
					return rowB.cells[colNum].innerHTML > rowA.cells[colNum].innerHTML ? 1 : -1;
				}
			};
			break;
	};

	rowsArray.sort(compare);
	error_table.removeChild(error_table_body);

	for (let i = 0; i < rowsArray.length; i++) {
	  error_table_body.appendChild(rowsArray[i]);
	};

	error_table.appendChild(error_table_body);
};

error_table_header.addEventListener('click', function(e){
	if (e.target.tagName == 'TH' && e.target.hasAttribute('data-type')){
		if(e.target.getAttribute('data-direction')=='asc'){
			e.target.setAttribute('data-direction', 'desc')
		}else{
			e.target.setAttribute('data-direction', 'asc')
		}
		for (var i = 0; i < error_table_th_arr.length; i++) {
			error_table_th_arr[i].classList.remove('sort');
		};
		e.target.classList.add('sort');
		table_sort(e.target.cellIndex, e.target.getAttribute('data-type'), e.target.getAttribute('data-direction'));
	}	
});