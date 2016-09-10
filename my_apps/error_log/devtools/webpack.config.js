const webpack = require('webpack');
const dev_js_directory = './pages/userinfo/';
const js_directory = './../javascripts/userinfo/';

module.exports = {
    entry: "./"+dev_js_directory+"entry.js",
    output: {
        filename: js_directory+"bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            },
        ]
    }
};