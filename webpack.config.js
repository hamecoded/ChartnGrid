var path = require("path");

module.exports = {
    entry: "./src/js/index.js",
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
            }
        ]
    },
    sassLoader: {
        includePaths: [path.resolve(__dirname, "./src/scss")]
    }
};