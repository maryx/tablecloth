// Can't use ES6 for the config file
var getConfig = require('hjs-webpack');

module.exports = getConfig({
    in: 'src/app.js',
    out: 'public',
    isDev: process.env.NODE_ENV !== 'production'
});
