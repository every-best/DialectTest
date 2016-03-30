require('babel-register');

var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var mongoose = require('mongoose');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var comporession = require('compression');

var config = require('./config');
var categoryService = require('./contorller/categoryService');
//var userService = require('./contorller/userService');
var questionService = require('./contorller/questionService');

mongoose.connect(config.database);
mongoose.connection.on('error',function(){
  console.log('Error:Could not connect to MongoDB.Did you forget to run mongodb?');
});

var app = express();
// view engine setup
//app.set('views', path.join(__dirname, 'views'));
//app.set('view engine', 'jade');

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

app.use('/api/category',categoryService);
app.use('/api/question',questionService);
//app.use('/api/user',userService);
app.get('/',function(req,res){
  res.send('hello world');
});

app.listen(3000,function(){
    console.log("start server...")
});

module.exports = app;
