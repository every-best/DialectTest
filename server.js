require('babel-register');
require('babel-polyfill');

var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var mongoose = require('mongoose');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var comporession = require('compression');
var swig = require("swig");
var React = require("react");
var ReactDOM = require("react-dom/server");
var Router = require("react-router");

var config = require('./config');
var routes = require('./app/router');
var categoryService = require('./contorller/categoryService');
//var userService = require('./contorller/userService');
var questionService = require('./contorller/questionService');

mongoose.connect(config.database);
mongoose.connection.on('error',function(){
  console.log('Error:Could not connect to MongoDB.Did you forget to run mongodb?');
});

var app = express();
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');
app.engine('html', swig.renderFile);

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.set('port',process.env.PORT || 3000);
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(comporession())


// catch 404 and forward to error handler
//app.use(function(req, res, next) {
//  var err = new Error('Not Found');
//  err.status = 404;
//  next(err);
//});

// error handlers

// development error handler
// will print stacktrace
//if (app.get('env') === 'development') {
//  app.use(function(err, req, res, next) {
//    res.status(err.status || 500);
//    res.render('error', {
//      message: err.message,
//      error: err
//    });
//  });
//}

// production error handler
// no stacktraces leaked to user
//app.use(function(err, req, res, next) {
//  res.status(err.status || 500);
//  res.render('error', {
//    message: err.message,
//    error: {}
//  });
//});

//api service
app.use('/api/category',categoryService);
app.use('/api/question',questionService);
//app.use('/api/user',userService);

//render html
app.use(function(req,res){
    Router.match({routes:routes.default,location:req.url},function(err,redirectLocation,renderProps){
        if(err){
            res.status(500).send(err.message);
        }else if(redirectLocation){
            res.status(302).redirect(redirectLocation.pathname + redirectLocation.search)
        }else if(renderProps){
            //server render
            var html = ReactDOM.renderToString(React.createElement(Router.RoutingContext, renderProps));
            var page = swig.renderFile('views/index.html', { html: html });
            res.status(200).send(page);
        } else {
            res.status(404).send('Page Not Found')
        }
    });
});

//listen port
app.listen(app.get('port'),function(){
    console.log("start server...")
});

module.exports = app;
