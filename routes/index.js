var express = require('express'),
    router = express.Router();


var indexCb = function(req, res, next) {
    res.render('index', {
	title: 'IoT Hub API documentation',
	subtitle: 'A middleware extension for interoperable IoT systems'
    });
}

//Setup the router
router.get('/', indexCb);

//Export the router
module.exports = router;


