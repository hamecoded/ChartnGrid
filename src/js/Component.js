class Component {
	constructor (elId, state, stateType, data) {
		this.elId = elId;
		this.el = document.getElementById(elId);
		this.state = state;
		this.stateType = stateType;

		this.render(data);
		this._bind();
	}

	_bind () {

	}

	render (data) {

	}
}
module.exports = Component;