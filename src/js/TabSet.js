let Component = require('./Component');
let StateBuilder = require('./StateBuilder');

class TabSet extends Component{
	/**
	 * make the neccessary interaction bindings and apply the initial state
	 * @param  {[type]} elId  the tabset parent element id attribute
	 * @param  {[type]} state an object reference passed to update the state through the component
	 *                        later on can be expanded to 2 way binding
	 * @return {[type]}       [description]
	 */
	constructor(elId, state, stateType){
		super(elId, state, stateType);
	}

	render() {
		// set the tab selection state
		let tabs = this.el.getElementsByTagName('div');
		for(let tab of tabs){
			let tabValue = tab.innerText.toLowerCase();
			if( tabValue === this.state[this.stateType].value) {
				tab.classList.add('selected');
				return;
			}
		}
	}

	_bind(){
		this.el.addEventListener('click', (event) => {
			let tabs = this.el.getElementsByTagName('div');
			for(let tab of tabs){
				tab.classList.remove('selected');
			}
			let tab = event.srcElement;
			let tabValue = tab.innerText.toLowerCase();
			let item = StateBuilder.State.getEnum(StateBuilder[this.stateType.toUpperCase()], tabValue);
			this.state[this.stateType] = item;
			tab.classList.add('selected');
		});
	}

}
module.exports = TabSet;