var Webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

var DefinePlugin = new Webpack.DefinePlugin({
  'process.env': {
    NODE_ENV: JSON.stringify('production'),
  }
})

var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({ template: './public/index.html' });

var config = {
    entry: "./app.js",
    output: {
        filename: "bundle.js"
    },
    
    optimization: {
        minimizer: [
          new UglifyJsPlugin({
            cache: true,
            parallel: true,
            uglifyOptions: {
              compress: false,
              ecma: 6,
              mangle: true
            },
            sourceMap: true
          })
        ]
    },

    module: {
        rules: [{
            test: /\.js$/,
            enforce: "pre",
            exclude: /node_modules/,
            use: [{
                loader: "jshint-loader",
                options: {
                    camelcase: true,
                    emitErrors: false,
                    failOnHint: false
                }
            }]
        }]
    },  
    
    plugins: [DefinePlugin, HTMLWebpackPluginConfig, UglifyJsPlugin]
}

module.exports = config