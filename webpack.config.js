const path = require("path");
const webpack = require("webpack");
const BundlleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

module.exports = {
    entry: {
        app: "./assets/js/script.js",
        events: "./assets/js/events.js",
        schedule: "./assets/js/schedule.js",
        tickets: "./assets/js/tickets.js"
    }, 
    output: {
        path: __dirname + "/dist",
        filename: "[name].bundle.js"
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        }),
        new BundlleAnalyzerPlugin({
            analyzerMode: "static", // the report ouputs to an HTML file in the dist folder
        })
    ],
    mode: 'development'
};