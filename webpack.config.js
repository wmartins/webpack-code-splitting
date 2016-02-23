const ExtractTextPlugin = require('extract-text-webpack-plugin');
const PORT = 8081;

module.exports = {
    context: __dirname + '/src',

    entry: {
        main: './scripts',
        about: './stylesheets/about/index.css'
    },

    output: {
        path: __dirname + '/dist',
        filename: 'index.js'
    },

    module: {
        loaders: [{
            test: /.js$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            query: {
                presets: ['es2015', 'react']
            }
        }, {
            test: /\.css$/,
            loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
        }]
    },

    postcss: () => {
        return [
            require('postcss-import')
        ];
    },

    plugins: [
        new ExtractTextPlugin('[name].css', {
            allChunks: false
        })
    ],

    devServer: {
        port: PORT
    }
}
