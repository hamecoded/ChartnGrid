require('!style-loader!css-loader!sass-loader!../scss/index.scss');
require('font-awesome-webpack');

let StateBuilder = require('./StateBuilder'); 
let state = new StateBuilder.State ();

let TabSet = require('./TabSet'); 
let intervalTS = new TabSet ('interval_js', state, 'interval');
let trafficTS  = new TabSet ('traffic_js', state, 'traffic');

let Table = require('./Table');
let tableData = require('json-loader!../../mock_data/overview.json');
let grid = new Table ('table_js', state, 'aspect', tableData);

let chartData = require('json-loader!../../mock_data/service.json');
let Chart = require('./Chart');
let chart = new Chart ('chart_js', state, 'aspect', chartData);

