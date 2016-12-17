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
                test: /\.less$/,
                loaders: ["style-loader", "css-loader", "less-loader"]
            },
            // the url-loader uses DataUrls. 
            // the file-loader emits files. 
            { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?limit=10000&minetype=application/font-woff" },
            { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader" }

        ]
    },
    sassLoader: {
        includePaths: [path.resolve(__dirname, "./src/scss")]
    }
};