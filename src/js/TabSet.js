class TabSet {
	/**
	 * make the neccessary interaction bindings and apply the initial state
	 * @param  {[type]} elId  the tabset parent element id attribute
	 * @param  {[type]} state an object reference passed to update the state through the component
	 *                        later on can be expanded to 2 way binding
	 * @return {[type]}       [description]
	 */
	constructor(elId, state){
		this.elId = elId;
		this.el = document.getElementById(elId);
		this._init(state);
		this._bind();
	}

	_init(state) {
		// set the tab selection state
		let tabs = this.el.getElementsByTagName('div');
		for(let tab of tabs){
			let tabValue = tab.innerText.toLowerCase();
			if( tabValue === state.value) {
				this.state = state;
				if(this.state){
					tab.classList.add('selected');
				}
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
			this.state = tabValue;
			if(this.state){
				tab.classList.add('selected');
			}
		});
	}

	get state () {
		return this._state;
	}

	set state (state) {
		if( typeof(state) === 'string' && typeof(this._state) === 'object' ) {
			// we'll get here when component updates model
			this._state.value = state;

		}else if( typeof(state) === 'object' && Reflect.has(state, 'value') ){
			// we'll get here when model updates component
			this._state = state;
		}else{
			console.error(`Tabset ${this.elId} state changed FAILED for input:`, state);
			return;
		}
		console.log(`Tabset ${this.elId} state changed to ${this._state && this._state.value}`);
	}

	//TODO: expand to have a render function
	render () {

	}
}
module.exports = TabSet;