const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    // El archivo que va a compilar
    entry: './src/index.js',
    output: {
        // Es donde estamos ubicados, donde saldrá todo la compilación
        path: path.resolve(__dirname, 'dist'),
        // Resultado lo que viene siendo nuestro output
        filename: 'bundle.js',
    },
    // Resolver diferentes extensiones con los que trabajaremos
    resolve: {
        // Extensión de JavaScript y React
        extensions: ['.js', '.jsx']
    },
    module: {
        // Reglas
        rules: [
            {
                test: /\.(js|jsx)$/,
                // excluimos todo lo de node_modules
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                }
            },
            {
                test: /\.html$/,
                use: [
                    { loader: 'html-loader' }
                ]
            },
            {
                // identificar si es un archivo de css o de sass
                test: /\.s[ac]ss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            // Donde se ubica
            template: './public/index.html',
            // El nombre de nuestro html
            filename: './index.html',
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css',
        })
    ],
    devServer: {
        // La dirección que abrirá el server
        contentBase: path.join(__dirname, 'dist'),
        // Que esté comprimido
        compress: true,
        port: 3006,
    }
}