const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/main.ts',
    resolve: {
        extensions: ['.ts', '.js']
    },
    module: {
        rules: [
            { test: /\.ts$/, use: ['ts-loader', 'angular2-template-loader'] },
            { test: /\.(html|css)$/, use: 'raw-loader' },

            // workaround for warning: System.import() is deprecated and will be removed soon. Use import() instead.
            { test: /[\/\\]@angular[\/\\].+\.js$/, parser: { system: true } }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({ template: './src/index.html' }),

        // workaround for warning: Critical dependency: the request of a dependency is an expression
        new webpack.ContextReplacementPlugin( /\@angular(\\|\/)core(\\|\/)fesm5/, path.resolve(__dirname, 'src'))
    ],
    devServer: {
        historyApiFallback: true
    }
}