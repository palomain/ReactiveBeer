const webpack = require('webpack');
const combineLoaders = require('webpack-combine-loaders');
const cssnext = require('postcss-cssnext');
const dotenv = require('dotenv');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const nodeEnv = process.env.NODE_ENV || 'production';

module.exports = {
    devtool: 'source-map',
    entry: {
        filename: './app.jsx'
    },
    output: {
        filename: '_build/bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015-native-modules', 'react']
                }
            },  {
                test : /\.css$/,
                loader: 'style-loader!css-loader?sourceMap&modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss!sass-loader'
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loaders: [ {
                            loader : "file-loader",
                            query : {
                                hash : "sha512",
                                digest : "hex",
                                name : "/public/images/imports/[hash].[ext]"
                            }
                        }, {
                            loader : "image-webpack-loader",
                            query : {
                                bypassOnDebug: true,
                                optipng : {
                                    optimizationLevel: 7,
                                },
                                gifsicle: {
                                    interlaced: false
                                }
                            }
                         }
                    //'file-loader?hash=sha512&digest=hex&name=',
                    //'image-webpack-loader?bypassOnDebug&optimizationLevel=7&interlaced=false'
                ]
            }
        ]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            },
            output: {
                comments: false
            },
            sourceMap: true
        }),
        new webpack.DefinePlugin({
            'process.env': { NODE_ENV: JSON.stringify(nodeEnv) }
        })
    ]
};

