const webpack = require('webpack')
const MiniCSS = require('mini-css-extract-plugin')

module.exports = {
    mode: 'development',
    entry: './src/principal.js',
    output: {
        filename: 'principal.js',
        path: __dirname + '/public'
    },
    plugins: [
            new MiniCSS({
                filename: "estilos.css"
            })
    ],
    module: {
        rules: [{
            test: /\.s?[ac]ss$/,
            use: [
                MiniCSS.loader,
                // 'style-loader', // Adiciona o CSS a DOM injetando a tag <style>
                'css-loader', // interpreta @import, url()...
                'sass-loader'
            ]
        }]

    }
}