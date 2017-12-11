const webpack = require('webpack');
const server = require('webpack-dev-server');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: __dirname + '/src/index.js',
    output: {
        path: __dirname + '/dist',
        filename: 'app.js'
    },

    devtool: 'eval-source-map',

    devServer: {
        contentBase: './dist',
        inline: true,
        historyApiFallback: true
    },

    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [
                            "es2015", "react", "stage-0"
                        ]
                    }
                },
                exclude: /node_modules/
            },
            // {
            //     test: /\.(less|css)$/,
            //     use: [
            //         {
            //             loader: "style-loader"
            //         },
            //         {
            //             loader: "css-loader",
            //             options: {
            //                 modules: false, // true：css或less文件中的 className 将会被编译然后转换成一个 map 对象
            //                 sourceMap: true
            //             }
            //         },
            //         {
            //             loader: "less-loader"
            //         },
            //         {
            //             loader: 'autoprefixer-loader',
            //             options: {
            //                 browsers: 'last 10 versions'
            //             }
            //         }
            //     ]
            // },
            {
                test: /\.(less|css)$/,
                loader: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: ["css-loader?modules=false&sourceMap=true&minimize=true", "less-loader", "autoprefixer-loader?browsers=last 10 versions"]
                })
            },
            {
                test: /\.(jpe?g|png|gif)$/,
                loader: 'url-loader?limit=8192&name=images/[name].[ext]'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new ExtractTextPlugin('styles.css'),
        new webpack.optimize.UglifyJsPlugin()
    ]
};