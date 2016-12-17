require("!style-loader!css-loader!sass-loader!../scss/index.scss");
var State = require('./State.js'); 
let state = new State ();
console.log(state.toString());
