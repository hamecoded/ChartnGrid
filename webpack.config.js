var path = require("path");

module.exports = {
    entry: "./src/js/index.js",
    debug: true,
    output: {
        path: __dirname,
        filename: "./bundle.js"
    },
    devtool: 'inline-source-map',
    module: {
        loaders: [
            {
                test: /\.scss$/,
                loaders: ["style-loader", "css-loader", "sass-loader"]
            },
            {
              test: /\.jsx?$/,
              // Enable caching for improved performance during development
              // It uses default OS directory by default. If you need
              // something more custom, pass a path to it.
              // I.e., babel?cacheDirectory=<path>
              loaders: ['babel?cacheDirectory'],
              // Parse only app files! Without this it will go through
              // the entire project. In addition to being slow,
              // that will most likely result in an error.
              include: path.resolve(__dirname, "./src/js")
            },
            {
              test: require.resolve('react'),
              loader: 'expose?React'
            }
        ]
    },
    sassLoader: {
        includePaths: [path.resolve(__dirname, "./src/scss")]
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    }
};