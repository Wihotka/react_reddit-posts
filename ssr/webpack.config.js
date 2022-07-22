const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const {DefinePlugin} = require('webpack');

const NODE_ENV = process.env.NODE_ENV;
const IS_DEV = NODE_ENV === 'development';
const IS_PROD = NODE_ENV === 'production';
const DEV_PLUGINS = [
    new CleanWebpackPlugin(),
    new HTMLWebpackPlugin({template: path.resolve(__dirname, 'index.html')})
];
const COMMON_PLUGINS = [
    new DefinePlugin({'process.env.CLIENT_ID': `'${process.env.CLIENT_ID}'`})];

function setupDevtool() {
    if (IS_DEV) {
        return 'eval';
    }
    if (IS_PROD) {
        return false;
    }
}

module.exports = {
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.json']
    },
    mode: NODE_ENV ? NODE_ENV : 'development',
    entry: path.resolve(__dirname, 'src/index.jsx'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.js'
    },
    module: {
        rules: [
            {
                test: /\.([tj]sx|[tj]s)$/,
                use: ['ts-loader']
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            modules: {
                                mode: 'local',
                                localIdentName: '[name]__[local]--[hash:base64:5]'
                            }
                        }
                    }
                ]
            }
        ]
    },
    plugins: IS_DEV ? DEV_PLUGINS.concat(COMMON_PLUGINS) : COMMON_PLUGINS,
    devServer: {
        port: process.env.PORT || 3000,
        open: true,
        historyApiFallback: true,
        hot: IS_DEV
    },
    devtool: setupDevtool()
};
