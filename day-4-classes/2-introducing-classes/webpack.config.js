const path = require('path');

module.exports = {
    entry: path.resolve(__dirname, 'main.js'),
    output: {
        path: __dirname,
        filename: 'bundle.js'
    }
};