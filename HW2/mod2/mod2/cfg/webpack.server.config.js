const path = require('path');
const nodeExternals = require('webpack-node-externals');

const NODE_ENV = process.env.NODE_ENV

module.exports = {
    resolve: {
        extensions: ['.js', '.jsx', '.json']
    },
    mode: NODE_ENV ? NODE_ENV : 'development',
    target: 'node',
    entry: path.resolve(__dirname, '../src/server/server.js'),
    output: {
        path: path.resolve(__dirname, '../dist/server'),
        filename: 'server.js'
    },
    externals: [nodeExternals()],
    module: {
        rules: [
        {
            test: /\.[tj]sx?$/,
            use: ['ts-loader']
        },
        {
            test: /\.css$/,
            use: [
            {
                loader: 'css-loader',
                options: {
                    modules: {
                        mode: 'local',
                        localIdentName: '[name]__[local]--[hash:base64:5]'
                    },
                    onlyLocals: true
                }
            }]
        }
    ]
    },
    optimization: {
        minimize: false
    }
}