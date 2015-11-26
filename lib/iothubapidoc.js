var express = require('express'),
    logger = require('morgan'),
    favicon = require('serve-favicon')

module.exports = iothubapidoc;

function iothubapidoc() {
    var app = express();

    //setting up the view engine
    app.set('views', path.join(__dirname, 'views'));
    app.set('view engine', 'jade');

    // uncomment after placing your favicon in /public
    //app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
    app.use(logger('dev'));

    //setting up the css engine
    app.use(require('stylus').middleware(path.join(__dirname, 'public')));
    
    app.use(express.static(path.join(__dirname, 'public')));

    setApplicationRouters(app);
    setErrorHandlers(app);
    return app;
}


function setApplicationRouters(app) {
    //Setting up the index
    app.use('/', require('./routes/index'))
    
}


function setErrorHandlers(app) {
    // catch 404 and forward to error handler
    app.use(function(req, res, next) {
	var err = new Error('Not Found');
	err.status = 404;
	next(err);
    });

    // error handlers

    // development error handler
    // will print stacktrace
    if (app.get('env') === 'development') {
	app.use(function(err, req, res, next) {
	    res.status(err.status || 500);
	    res.render('error', {
		message: err.message,
		error: err
	    });
	});
    }
    
    // production error handler
    // no stacktraces leaked to user
    app.use(function(err, req, res, next) {
	res.status(err.status || 500);
	res.render('error', {
	    message: err.message,
	    error: {}
	});
    });
}
