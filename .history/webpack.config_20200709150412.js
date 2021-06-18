const path = require('path')

module.exports= {
    entry: path.resolve(__dirname, './main.js'),
    output: {
        filename: 'build.js',
        path: path.resolve(__dirname, './dist')
    },
    // 为了开发体验友好
    devServer: {
        contentBase: path.resolve(__dirname, './dist')
    },
}
