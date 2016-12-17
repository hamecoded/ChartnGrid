var Component = require('./Component');

require('d3');

class Chart extends Component{
	
	_bind () {
		document.addEventListener("state-change", (e) => {
		  this.render(e.detail);
		});
	}
	
	/**
	 * based on http://jsfiddle.net/fiatjaf/aK6DP/
	 * @param  {[type]} data [description]
	 * @return {[type]}      [description]
	 */
	render (data) {
		if(data === undefined) return;

		this.el.innerHTML = "";

		let selector = `#${this.elId}`;
		let aspect = this.state.aspect.value;
		let aspectKey = this.state.aspect.key;
		let service = this.state.service;


		var margin = {
		    top: 30,
		    right: 20,
		    bottom: 30,
		    left: 50
		};
		var width = 600 - margin.left - margin.right;
		var height = 200 - margin.top - margin.bottom;

		var x = d3.time.scale().range([0, width]);
		var y = d3.scale.linear().range([height, 0]);

		var xAxis = d3.svg.axis()
			.scale(x)
		    .orient("bottom")
		    .ticks(d3.time.days, 1)
		    .tickFormat(d3.time.format('%a %d'))
		    .tickSize(0)
		    .tickPadding(8);

		var yAxis = d3.svg.axis().scale(y)
		    .orient("left").ticks(5);

		var valueline = d3.svg.line()
		    .x(function (d) {
		      return x(d.timestamp);
		    })
		    .y(function (d) {
		      return y(d[aspectKey]);
		    });

		var svg = d3.select(selector)
		    .append("svg")
		    .attr("width", width + margin.left + margin.right)
		    .attr("height", height + margin.top + margin.bottom)
		    .append("g")
		    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");


		data.forEach(function (d) {
		    d.timestamp = new Date(d.timestamp);
		});

		// Scale the range of the data
		x.domain(d3.extent(data, function (d) {
		    return d.timestamp;
		    }));
		y.domain([0, d3.max(data, function (d) {
		    return d[aspectKey];
		    })]);

		svg.append("path") // Add the valueline path.
		.attr("d", valueline(data));

		svg.append("svg:text")
            .attr("x", width/4)
            .attr("y", 20)
            .attr("style", "font-size: 12; font-family: Helvetica, sans-serif")
            .text(this.state.toString());

		svg.append("g") // Add the X Axis
			.attr("class", "x axis")
		    .attr("transform", "translate(0," + height + ")")
		    .text("Date")
		    .call(xAxis);

		svg.append("g") // Add the Y Axis
			.attr("class", "y axis")
		    .text(aspect)
		    .call(yAxis);

	}


		


}
module.exports = Chart;