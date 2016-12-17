# Chart n Grid

### Stack
* [webpack] 
* [sass-loader] webpack module for compiling scss
* [Normalize css] makes browsers render all elements more consistently and in line with modern standards. 
* [NVD3.js] Chart frameword based on d3.js
* [Google Fonts] WebFonts Roboto Condensed

### Dev Run
- `npm install`
- `npm install webpack-dev-server -g`
- `npm start` which will now listen on localhost:8080. 
*in the background it is set to execute `webpack-dev-server --progress --colors --inline`*

### Dev Workflows
Mark each milestone in development in a tagged version
```bash
git tag 1.1 -m "- state and tabset"
git push origin --tags
```

### Build
- `webpack` will generate `bundle.js`


[webpack]: <https://webpack.github.io/>
[sass-loader]: <https://github.com/jtangelder/sass-loader>
[Normalize css]: <https://necolas.github.io/normalize.css>
[NVD3.js]: <http://nvd3.org/>
[Google Fonts]: <https://fonts.google.com/?selection.family=Roboto+Condensed:400,700>
   
