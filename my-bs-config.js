var proxy = require('http-proxy-middleware');
var reserveProxy = proxy('/spring', {
    target: 'http://localhost:9000',
    changeOrigin: true,             // for vhosted sites, changes host header to match to target's host
    logLevel: 'debug',
    ws: true,
    proxyTable: {
        'localhost:9000' : 'http://localhost:8080'
    }
});
module.exports = {
    "port": 9000,
    middleware: [reserveProxy]
};