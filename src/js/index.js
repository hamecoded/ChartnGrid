require("!style-loader!css-loader!sass-loader!../scss/index.scss");
require("font-awesome-webpack");

let StateBuilder = require('./StateBuilder'); 
state = new StateBuilder.State ();

let TabSet = require('./TabSet'); 
let intervalTS = new TabSet ('intervalTS_js', state, 'interval');
let trafficTS  = new TabSet ('trafficTS_js', state, 'traffic');

let Table = require('./Table');
let data = require('json-loader!../../mock_data/overview.json');
let grid = new Table ('table_js', state, 'aspect', data);