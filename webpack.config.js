var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry: {
        vendor:[
            'bower_components/jquery/dist/jquery.js',
            'bower_components/bootstrap/dist/js/bootstrap.js',
            'bower_components/magnific-popup/dist/jquery.magnific-popup.js',
             'bower_components/toastr/toastr.js'// Your appʼs entry point
        ],
        bundle:[
            'app/main.js'
        ]/*,
         login:[
         'es5-shim/es5-shim',
         'es5-shim/es5-sham',
         './js/src/login.js'
         ]*/
    },
    devtool: process.env.WEBPACK_DEVTOOL || 'source-map',
    output: {
        path: path.join(__dirname, 'build'),
        filename: '[name].js'
    },
    resolve: {
        extensions: ['', '.js']
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel"
            },

            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
            {
                test: /\.gif/,
                loader: "url-loader?limit=10000&mimetype=image/gif"
            },
            {
                test: /\.less$/,
                loader: "style!css!less"
            },
            {
                test: /\.jpg/,
                loader: "url-loader?limit=10000&mimetype=image/jpg"
            },
            {
                test: /\.png/,
                loader: "url-loader?limit=10000&mimetype=image/png"
            }
        ]
    },
    /*devServer: {
     contentBase: "./build",
     noInfo: true, //  --no-info option
     hot: true,
     inline: true
     },*/
    plugins: [
        new webpack.NoErrorsPlugin()
    ]
};
