var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

//  Bring in the routes for the API (delete the default routes)
var routesApi = require('./api/routes/index');

var app = express();

app.use(bodyParser.urlencoded({ extended: false }));

//  Set the app_client folder to serve static resources
app.use(express.static(path.join(__dirname, 'app')));

//  Use the API routes when path starts with /api
app.use('/api', routesApi);

var config = {
    httpPort: 3000,
    mongoPort: 27017
};

//database connection
mongoose.connect('mongodb://localhost:' + config.mongoPort + '/abschlussaufgabe');
var database = mongoose.connection;

database.on('error', console.error.bind(console, 'connection error:'));
database.once('open', function (callback) {
    console.log('connection to database established on port ' + config.mongoPort);
});

//  Otherwise render the index.html page for the Angular SPA
//  This means we don't have to map all of the SPA routes in Express
app.use(function(req, res) {
    res.sendFile(path.join(__dirname, 'app_client', 'index.html'));
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

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

app.use(function(req, res, next) {
    console.log(req.method + ' ' + req.url + ' was requested by ' + req.connection.remoteAddress);

    res.header('Access-Control-Allow-Origin', '*');    // allow CORS
    next();
});

app.listen(config.httpPort, function(){
    console.log('http server now running on port ' + config.httpPort);
});

module.exports = app;