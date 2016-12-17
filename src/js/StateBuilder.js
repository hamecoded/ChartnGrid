//TODO: ENUM the right way: http://www.2ality.com/2016/01/enumify.html
const INTERVAL = {
	HOUR: { value: 'hour' }, 
	DAY: { value: 'day' }, 
	WEEK: { value: 'week' }, 
	MONTH: { value: 'month' } 
};
const TRAFFIC = {
	INBOUND: { value: 'inbound' },
	OUTBOUND: { value: 'outbound' }
};
const ASPECT = {
	BYTES: { value: 'bytes' },
	PACKETS: { value: 'packets' },
	FLOWS: { value: 'flows' },
	FAILED_FLOWS: { value: 'failed flows' }
};

class State {
	constructor(service, traffic, interval, aspect){
		this.service = service;
		this.traffic = traffic;
		this.interval = interval;
		this.aspect = aspect;
	}

	// will be used by the cachier as the primary identifier
	toString() {
		if(this.service){
        	return `${this.service}_${this.traffic}_${this.interval}`;
		}else {
			return 'State\'s manadatory property, service, is yet to be initialized.';
		}
    }

	// fetch the data from a cachier which if needed makes the network call
	fetch () {

	}

	//Getters
	get service () {
		return this._service;
	}
	get traffic () {
		return this._traffic;
	}
	get interval () {
		return this._interval;
	}
	get aspect () {
		return this._aspect;
	}

	//Setters
	set service ( value ) {
		this._service = value;
		this.fetch();
	}

	set interval ( value = INTERVAL.HOUR ) {
		this._interval = value;
		this.fetch();
	}

	set traffic ( value = TRAFFIC.INBOUND ) {
		this._traffic = value;
		this.fetch();
	}

	set aspect ( value = ASPECT.BYTES ) {
		this._aspect = value;
		this.fetch();
	}
}
module.exports.State = State;
// Though const ensure the variable holds the same obj ref, 
// Object.freeze will prevent changing that Object
module.exports.TRAFFIC = Object.freeze(TRAFFIC);
module.exports.INTERVAL = Object.freeze(INTERVAL);
module.exports.ASPECT = Object.freeze(ASPECT);