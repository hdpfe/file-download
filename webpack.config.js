var PROD = process.argv.indexOf('-p') >= 0;
var path = require('path')

module.exports = {
    entry: {
        'file-download': path.resolve(__dirname, './index.js')
    },
    output: {
        libraryTarget: 'umd',
        path: path.resolve(__dirname, './dist'),
        filename: PROD ? '[name].min.js' : '[name].js'
    }
};
