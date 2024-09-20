const path = require("path");
const { fileURLToPath } = require("url");
const htmlWebpackPlugin=require("html-webpack-plugin");

module.exports = {
    mode: 'development',
    entry:{
        filename: path.resolve(__dirname, "src/main.js")
    },
    output:{
        path: path.resolve(__dirname, "dist"),
        filename: '[name][contenthash].js',
        assetModuleFilename: '[name][ext]',
    },
    devServer:{
        port:80,
        compress: true,
        hot: true,
        static:{
            directory: path.join(__dirname, "dist"),
        }
    },
    plugins:[
        new htmlWebpackPlugin({
            title: "My Web Page",
            filename: "index.html",
            template: "src/index.html"
        })
    ],
};