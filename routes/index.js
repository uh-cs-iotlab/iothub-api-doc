var express = require('express'),
    router = express.Router();


var indexCb = function(req, res, next) {
    res.render('index', {
	title: 'My title'
    });
}

//Setup the router
router.get('/', indexCb);

//Export the router
module.exports = router;


