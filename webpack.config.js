const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: {
        main: path.resolve(__dirname, './src/index.js'), // точка входа
    },
    output: {
        path: path.resolve(__dirname, './dist'),         // точка выхода
        filename: 'main.js',                    
    },
    module: {
        rules: [
            {
                test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
                type: 'asset/resource',     // изображения
            },
            {
                test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
                type: 'asset/inline',       // шрифты и SVG
            },
            {
                test: /\.s[ac]ss$/i,
                use: 
                [
                    //  'style-loader',        // Создает узлы `style` из строк JS
                    MiniCssExtractPlugin.loader, 
                    'css-loader',           // Переводит CSS в CommonJS 
                    'sass-loader'           // Компилирует Sass в CSS
                ],                  
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Webpack Boilerplate',
            template: path.resolve(__dirname, './src/index.html'),  // шаблон
            filename: 'index.html',                                 // название выходного файла
        }),
        new MiniCssExtractPlugin({ filename: 'styles.css' }),
        new CleanWebpackPlugin(),
    ],
    devServer: {
        port: 4444,
        open: true,  
    },
}