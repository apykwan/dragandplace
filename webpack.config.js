const CleanPlugin = require('clean-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/app.js',
    output: {
        filename: 'app.js',
        path: `${__dirname}/assets/scripts`,
        publicPath: 'assets/scripts/'
    },
    devtool: 'eval-cheap-module-source-map'
}