var express = require('express');

module.exports = iothubapidoc;

function iothubapidoc() {
    var app = express();
    app.use(express.static('public'));
    return app;
}
