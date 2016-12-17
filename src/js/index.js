require("!style-loader!css-loader!sass-loader!../scss/index.scss");
var StateBuilder = require('./StateBuilder.js'); 
var TabSet = require('./TabSet.js'); 

state = new StateBuilder.State ();
console.log(state.toString());

let intervalTS = new TabSet ('intervalTS_js', state.interval);
let trafficTS  = new TabSet ('trafficTS_js', state.traffic);
