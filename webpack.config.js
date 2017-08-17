var webpack = require("webpack");
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var port = 8080;
var config = {
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".json"]
    },
    entry: [

        // Activate HMR for React
        "react-hot-loader/patch",

        // bundle the client for webpack-dev-server
        // and connect to the provided endpoint
        "webpack-dev-server/client?http://localhost:" + port,

        // bundle the client for hot reloading
        // only- means to only hot reload for successful updates
        "webpack/hot/only-dev-server",

        "./src/index.tsx"
    ],
    // Enable source-map for debugging webpack's output.
    devtool: "source-map",
    module: {
        loaders: [
            {
                test: /\.tsx?$/,
                loaders: ["awesome-typescript-loader"]
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract({
                    fallback:'style-loader',
                    use: ['css-loader', 'sass-loader'],
                    publicPath: '/assets/'
                })
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: 'css-loader',
                    publicPath: '/assets/'
                })
            },
            {
                test: /\.png$/,
                loader: "url-loader?limit=100000"
            },
            {
                test: /\.jpg$/,
                loader: "file-loader"
            },
            {
                test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url-loader?limit=10000&mimetype=application/font-woff'
            },
            {
                test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url-loader?limit=10000&mimetype=application/octet-stream'
            },
            {
                test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'file-loader'
            },
            {
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url-loader?limit=10000&mimetype=image/svg+xml'
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

        new ExtractTextPlugin({
            filename: 'style.css',
            allChunks: true
        })
    ],
    devServer: {
        port: port,
        // enable HMR on the server
        hot: true
    },
};
module.exports = config;