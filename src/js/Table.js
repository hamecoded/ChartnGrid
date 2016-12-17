let Component = require('./Component');
let StateBuilder = require('./StateBuilder');

class Table extends Component{

	constructor (elId, state, stateType, data) {
		super(elId, state, stateType, data);
	}

	/**
	 * This method receives data for rendering the DOM Table
	 * it builds the table and writes it to the DOM tree.
	 * 
	 * TODOs: prevent table header from scrolling by:
	 * - either use a 3rd part component
	 * - or split the header to a seperate table
	 * - use DIV instead of TABLE element
	 * @param  {[type]} data [description]
	 * @return {[type]}      [description]
	 */
	render (data) {
		this.el.innerHTML = '';

		let tableEl = document.createElement('Table');
		
		// build table header row
		let headerEl = document.createElement('tr');
		let cols = StateBuilder[this.stateType.toUpperCase()];
		for(let col in cols){
			if(this.state[this.stateType].value === cols[col].value){
				headerEl.insertAdjacentHTML( 'beforeend', '<th class=selected>' + cols[col].value + '</th>');  
			}else{
				headerEl.insertAdjacentHTML( 'beforeend', '<th>' + cols[col].value + '</th>');  
			}
		}
		let thead = document.createElement('thead');
		thead.appendChild(headerEl);
		tableEl.appendChild(thead);

		// build table body
		let tbody = document.createElement('tbody');
		let hasSelected = false;
		for(let row of data){
			let rowEl = document.createElement('tr');
			if(row.service === this.state.service) {
				hasSelected = true;
				rowEl.classList.add('selected');
			}
			for(let aspect in row){
				if(aspect !== 'timestamp'){
					rowEl.insertAdjacentHTML( 'beforeend', '<td>' + row[aspect] + '</td>');  					
				}
			}
			tbody.appendChild(rowEl);
		}
		//handle choosing a default service using the first item strategy
		if(!hasSelected){
			var firstRow = tbody.querySelector('tr:first-child');
			if(firstRow) {
				firstRow.classList.add('selected');
				this.state.service = firstRow.querySelector('td:first-child').innerHTML;
			}
		}

		tableEl.appendChild(tbody);
		this.el.appendChild(tableEl);
	}

	_bind () {
		// bind to column filtering - by aspect
		this.el.querySelector('thead').addEventListener('click', (event) => {
			// unselect all
			let tabs = event.currentTarget.querySelectorAll('th');
			for(let tab of tabs){
				tab.classList.remove('selected');
			}

			let tab = event.srcElement;
			let tabValue = tab.innerText.toLowerCase();
			let aspect = StateBuilder.State.getEnum(StateBuilder.ASPECT, tabValue);
			this.state.aspect = aspect;
			if(this.state.aspect){
				tab.classList.add('selected');
			}
		});

		// bind to row filtering - by service
		let rows = this.el.querySelectorAll('tbody tr');
		for (let row of rows) {
			row.addEventListener('click', (event) => {
				// unselect all
				for(let row of rows){
					row.classList.remove('selected');
				}

				let service = row.querySelector('td:first-child');
				this.state.service = service.innerText;
				if(this.state.service){
					row.classList.add('selected');
				}
			});
		}
	}
}
module.exports = Table;