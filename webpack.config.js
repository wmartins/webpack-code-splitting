module.exports = {
    context: __dirname + '/src',

    entry: './index.jsx.js',

    output: {
        path: __dirname + '/dist',
        filename: 'index.js'
    },

    module: {
        loaders: [{
            test: /\.jsx\.js$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            query: {
                presets: ['es2015', 'react']
            }
        }, {
            test: /\.css$/,
            loaders: ['style', 'css']
        }]
    }
}
