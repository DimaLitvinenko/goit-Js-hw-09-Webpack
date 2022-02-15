const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    mode: 'none',
    entry: {
        main: path.resolve(__dirname, './src/index.js'), // точка входа
    },
    output: {
        path: path.resolve(__dirname, './dist/'), // точка выхода
        filename: 'main.js',
    },

    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                // test: /\.(sa|sc|c)ss$/i,
                use: [
                    //  'style-loader',        // Создает узлы `style` из строк JS
                    MiniCssExtractPlugin.loader,
                    'css-loader', // Переводит CSS в CommonJS
                    'sass-loader', // Компилирует Sass в CSS
                ],
            },
            {
                test: /\.js$/i,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },
            {
                test: /\.hbs$/i,
                exclude: /node_modules/,
                use: ['handlebars-loader'],
            },
            {
                test: /\.(png|jpg|jpe?g|gif|svg)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'images/[name][ext]',
                },
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Khutorok App',
            template: path.resolve(__dirname, './src/index.html'), // шаблон
            filename: 'index.html', // название выходного файла
        }),
        new MiniCssExtractPlugin({ filename: 'styles.css' }),
        new CleanWebpackPlugin(),
    ],
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'),
        },
        hotOnly: true,
        port: 5501,
    },
};
