var webpack = require("webpack");
var config = {
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".json"]
    },
    entry: [

        // Activate HMR for React
        "react-hot-loader/patch",

        // bundle the client for webpack-dev-server
        // and connect to the provided endpoint
        "webpack-dev-server/client?http://localhost:8080",

        // bundle the client for hot reloading
        // only- means to only hot reload for successful updates
        "webpack/hot/only-dev-server",

        "./src/index.tsx"
    ],
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loaders: ["awesome-typescript-loader"]
            }
        ]
    },
    output: {
        path: __dirname + "/dist",
        filename: "bundle.js",
        publicPath: "public"
    },
    plugins:[

        // new webpack.optimize.UglifyJsPlugin({mangle: false, sourcemap: false})

        // enable HMR globally
        new webpack.HotModuleReplacementPlugin(),

        // prints more readable module names in the browser console on HMR updates
        new webpack.NamedModulesPlugin(),

        // do not emit compiled assets that include errors
        new webpack.NoEmitOnErrorsPlugin(),
    ],
    devServer: {

        // enable HMR on the server
        hot: true
    },
};
module.exports = config;