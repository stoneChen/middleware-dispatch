var express = require('express');
var proxy = require('proxy-middleware');
var debug = require('debug')('dispatcher');

var app = express();
var port = 3000;

var dispatcher = proxy('https://www.baidu.com');
app.use('/', function (req, res, next) {
    debug('request url: %s', req.url);
    return dispatcher(req, res, next);
});

app.listen(port, function () {
    debug('dispatcher server started at port %s', port);
});