class Component {
	constructor (elId) {
		this.elId = elId;
		this.el = document.getElementById(elId);
	}
}
module.exports = Component;