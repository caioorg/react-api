var HtmlWebpackPlugin = require('html-webpack-plugin')
var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({ template: './public/index.html' });

var config =  {
    entry: './src/index.js',
    output: {
        path: __dirname + '/public',
        filename: 'bundle.js'
    },

    module: {
        rules: [
            {
                test: /\.js|jsx$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['@babel/react'],
                    plugins: ['@babel/proposal-class-properties']
                }
            },
            {
                test: /\.scss$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ]
            }
        ]
    },
    
    resolve: {
        extensions: ['*', '.js', '.jsx']
    },

    plugins: [HTMLWebpackPluginConfig],

    devServer: {
        inline: true,
        contentBase: './public',
        port: 3333
    }
}

module.exports = config