let React = require('React');

class Component extends React.Component {
	constructor (elId) {
		super();
		this.elId = elId;
		this.el = document.getElementById(elId);
	}

	render() {
		return <h1>Hello, {this.elId}</h1>;
	}
}
module.exports = Component;