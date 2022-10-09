const path = require("path")

module.exports = {
    mode : "development",
    entry : {
        main : "./src/app.js",
    },
    output:{
        filename : "[name].js",
        path : path.resolve("./dist/main.js"),
    },
    module:{
        rules : [
            {
                test : /\.css$/,
                use : [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test : /\.png$/,
                loader : 'file-loader',
                option : {
                    publicPath : './dist',
                    name : '[name].[ext]?[hash]'
                }
            }
        ]
    }
}