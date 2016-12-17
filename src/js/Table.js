let Component = require('./Component');

class Table extends Component{

	constructor (elId, cols, data) {
		super(elId);
		this.render(cols, data);
	}

	/**
	 * TODOs: prevent table header from scrolling by:
	 * - either use a 3rd part component
	 * - or split the header to a seperate table
	 * - use DIV instead of TABLE element
	 * @param  {[type]} cols [description]
	 * @param  {[type]} data [description]
	 * @return {[type]}      [description]
	 */
	render (cols, data) {
		this.el.innerHTML = '';

		let tableEl = document.createElement('Table');
		
		//header parts
		let headerEl = document.createElement('tr');
		for(let col in cols){
			headerEl.insertAdjacentHTML( 'beforeend', '<th>' + cols[col].value + '</th>');  
		}
		let thead = document.createElement('thead');
		thead.appendChild(headerEl);
		tableEl.appendChild(thead);

		let tbody = document.createElement('tbody');
		for(let row of data){
			let rowEl = document.createElement('tr');
			for(let aspect in row){
				if(aspect !== 'timestamp'){
					rowEl.insertAdjacentHTML( 'beforeend', '<td>' + row[aspect] + '</td>');  
				}
			}
			tbody.appendChild(rowEl);
		}

		tableEl.appendChild(tbody);
		this.el.appendChild(tableEl);
	}
}
module.exports = Table;