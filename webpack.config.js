var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');    
module.exports = {
    entry: './src/js/app.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'js/interaction-checker.bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react']
                }
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                  fallback: 'style-loader',
                  //resolve-url-loader may be chained before sass-loader if necessary
                  use: ['css-loader', 'sass-loader']
                })
            }
        
        ]
    },
    plugins: [
        new ExtractTextPlugin({
            filename:  (getPath) => {
              return getPath('css/interaction-checker.css').replace('css/js', 'css');
            },
            allChunks: true
          })
    ],
    stats: {
        colors: true
    },
    devtool: 'source-map'
};
