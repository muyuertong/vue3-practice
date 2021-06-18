const path = require('path')

modules.exports= {
    entry: path.resolve(__dirname, './main.js'),
    output: {
        filename: 'build.js',
        path: path.resolve(__dirname, './dist')
    }
}