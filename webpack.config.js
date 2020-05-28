const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'dist'),
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: 'babel-loader',
            },
        ],
    },
    resolve: {
        extensions: ['.js', '.jsx', '.json'],
    },
    devServer: {
        port: 3000,
        historyApiFallback: true,
        disableHostCheck: true,
        contentBase: path.join(__dirname, 'dist')
    },
    plugins: [new HtmlWebpackPlugin({
        template: path.join(process.cwd(), 'src', 'index.html'),
    })]
};