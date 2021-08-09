const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

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
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            // Donde se ubica
            template: './public/index.html',
            // El nombre de nuestro html
            filename: './index.html',
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