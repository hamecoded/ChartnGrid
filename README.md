# Chart n Grid

### Functionality
Browse to [site](https://hamecoded.github.io/ChartnGrid/), and start playing with:
- change the interval from hour to day to week to month.
- change whether you'd like to see inbound or outbound traffic.
- click on the columns header to filter the chart's data against the shown attribute.
- click on any row to switch service and see how it performed over time.

### Stack
* [webpack] 
* [sass-loader] webpack module for compiling scss
* `json/file/url/less-loader`s for webpack
* [d3.js] for the line chart
* [Normalize css] makes browsers render all elements more consistently and in line with modern standards. 
* [Google Fonts] WebFonts Roboto Condensed
* [fontawesome] for rendering the filter icon

### Approach
- A vanilla approach for demonstrating a state management and custom componentization through using ES6 class inheritance.
- Not using any helper libraries, no jQuery;loDash;Underscore or the such.
- Utilizing webpack for both dev and prod environments.
- Writing css using sass transpiler.
- Demonstrating central state management through a shared model which numerous components act upon.
- Implementing a Table from scratch.
- Implmenting a TabSet and a Chart.
- Structuring mock json data which was planned to be served through a Cachier Object that inturn calls a graphQl endpoint.
- Mobile ready

### Software Architecture
The following 3 Flow Diagrams demonstrates the initialization flow; the hot syncing flow as data has been modified on the server; and finally the ui interaction flow, where upon interacting with one component another responds to state change.

#### Init Flow Sequence Diagram☟
![Init Flow](https://github.com/hamecoded/ChartnGrid/blob/master/doc/Init%20Flow.jpg)


#### HotSync Flow Sequence Diagram☟
![HotSync Flow](https://github.com/hamecoded/ChartnGrid/blob/master/doc/HotSync%20Flow.jpg)


#### User Interaction Flow Sequence Diagram☟
![UI Flow](https://github.com/hamecoded/ChartnGrid/blob/master/doc/Component%20Interaction%20Flow.jpg)


### Dev Run
- `npm install`
*(optionally you can have webpack-dev-server installed globally `npm install webpack-dev-server -g`)*
- `npm start` which will now listen on localhost:8080. 
*(in the background it is set to execute `webpack-dev-server --progress --colors --inline`)*

### Dev Workflows
Mark each milestone in development in a tagged version.
Make sure you first execute `webpack` to generate `bundle.js` for it to work on gh-pages

Create New Tag
```bash
git tag 1.1 -m "- state and tabset"
git push origin --tags
```

Delete tag
```bash
git tag -d 1.1
git push origin :refs/tags/1.1
```


[webpack]: <https://webpack.github.io/>
[sass-loader]: <https://github.com/jtangelder/sass-loader>
[Normalize css]: <https://necolas.github.io/normalize.css>
[NVD3.js]: <http://nvd3.org/>
[Google Fonts]: <https://fonts.google.com/?selection.family=Roboto+Condensed:400,700>
[fontawesome]: <http://fontawesome.io/>
[d3.js]: <https://d3js.org/>
   
