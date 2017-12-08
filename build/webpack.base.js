const webpack = require('webpack');
const path = require('path');

module.exports = {
    entry: './src/index.js',
    externals: {
        jquery: 'window.$'
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, '../dist')
    },
    resolve: {
        extensions: ['.js', '.jsx', '.css', '.scss']
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loaders: ["babel-loader", "eslint-loader"],
                exclude: /node_modules/
            },
            {
                test: /\.scss$/,
                use: [{
                    loader: "style-loader"
                }, {
                    loader: "css-loader",
                    options: {
                        sourceMap: false
                    }
                }, {
                    loader: "sass-loader",
                    options: {
                        sourceMap: false,
                        includePaths: ["node_modules"]
                    }
                }]
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                enforce: 'pre',
                test: /\.jsx$/,
                exclude: /node_modules/,
                use: [{
                    loader: 'eslint-loader',
                    query: {
                        configFile: './.eslintrc'
                    },
                }],
            }
        ]
    }
}