const webpack = require('webpack');
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
            },
            {
                test: /\.css$/,
                use: [
                    "style-loader",
                    {
                        loader: "css-loader",
                        options: {
                            modules: true,
                            sourceMap: true,
                            importLoaders: 1,
                            localIdentName: "[name]--[local]--[hash:base64:8]"
                        }
                    },
                    "postcss-loader" // has separate config, see postcss.config.js nearby
                ]
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
        }), new webpack.DefinePlugin({
            postcss: () => {
                return [
                    /* eslint-disable global-require */
                    require('postcss-cssnext'),
                    /* eslint-enable global-require */
                ];
            }
        })

    ]
};

