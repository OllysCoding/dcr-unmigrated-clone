// @flow
const path = require('path');
const webpack = require('webpack');

module.exports = {
    browser: {
        name: 'browser',
        devtool: 'cheap-module-eval-source-map',
        entry: {
            app: ['webpack-hot-middleware/client', './src/browser'],
            demo: './__tools__/demo/demo.browser.js',
            src: './__tools__/demo/src.browser.js',
        },
        output: {
            path: path.resolve(__dirname, '../../', 'dist'),
            publicPath: '/assets/javascript/',
        },
        plugins: [
            new webpack.HotModuleReplacementPlugin(),
            new webpack.NamedModulesPlugin(),
        ],
    },
    server: {
        name: 'server',
        target: "node",
        entry: {
            app: './src/server',
            demo: './__tools__/demo/demo.browser.js',
            src: './__tools__/demo/src.browser.js',
        },
        output: {
            path: path.resolve(__dirname, '../../', 'dist'),
            publicPath: '/assets/javascript/',
            libraryTarget: "commonjs2"
        }
    },
};
