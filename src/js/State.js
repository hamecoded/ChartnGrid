//TODO: ENUM the right way: http://www.2ality.com/2016/01/enumify.html
const INTERVAL = {
	HOUR: 'hour', 
	DAY: 'day',
	WEEK: 'week',
	MONTH: 'month' 
};
const TRAFFIC = {
	INBOUND: 'inbound',
	OUTBOUND: 'outbound'
};
const ASPECT = {
	BYTES: 'bytes',
	PACKETS: 'packets',
	FLOWS: 'flows',
	FAILED_FLOWS: 'failed flows'
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
module.exports = State;