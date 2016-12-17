let Component = require('./Component');
let React = require('React');

class Table extends Component{

	constructor (elId, cols) {
		super(elId);
		this.render(cols);
	}

	render (cols) {
		let reactTable = <div class="grid" />
		for(let col in cols){
			let reactEl = 	<div className="col">
							 ${col}
							</div>;
			reactTable.appendChild(reactEl);
		}
		return reactTable;
	}
}
module.exports = Table;