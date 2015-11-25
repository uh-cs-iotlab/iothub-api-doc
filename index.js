var doc = require('./lib/iothubapidoc');

var app = doc();

app.listen(3000, function() {
    console.log('IoT Hub API documentation server running on port 3000');
});
