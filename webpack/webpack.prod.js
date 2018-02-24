const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const common = require('./webpack.common.js');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const paths = [
    'dist'
];
const cleanOptions = {
    root: path.resolve(__dirname, '../')
}

module.exports = merge(common, {
    plugins: [
        new UglifyJSPlugin({
            sourceMap: false,
            uglifyOptions: {
                compress: true,
            }
        }),
        new CleanWebpackPlugin(paths, cleanOptions),
        new webpack.DefinePlugin({ 'process.env': { 'NODE_ENV': JSON.stringify('production') } })
    ]
});