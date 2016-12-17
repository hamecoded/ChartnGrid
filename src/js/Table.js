let Component = require('./Component');

class Table extends Component{

	constructor (elId, cols) {
		super(elId);
		this.render(cols);
	}

	render (cols) {
		for(let col in cols){

		}
	}
}
module.exports = Table;