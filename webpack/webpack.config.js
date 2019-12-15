const modoDev = process.env.NODE_ENV !== 'production'
const webpack = require('webpack')
const MiniCSS = require('mini-css-extract-plugin')
const uglyfyJsPlugin = require('uglifyjs-webpack-plugin')
const optimeCSS = require('optimize-css-assets-webpack-plugin')



module.exports = {
    mode: modoDev ? 'development' : 'production',
    entry: './src/principal.js',
    output: {
        filename: 'principal.js',
        path: __dirname + '/public'
    },
    optimization: {
        minimizer: [
            new uglyfyJsPlugin ({
                cache: true,
                parallel: true
            }),
            new optimeCSS({})
        ]
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