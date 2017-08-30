var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var session = require('client-sessions');
var bodyParser = require('body-parser');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session(
{
  cookieName : 'session',
  secret : '6789kjhv567b2uvh34',
  duration : (10 * 60 * 1000),
  activeDuration : (10 * 60 * 1000)
}
  ));








var routes = require('./routes/index');
var form = require('./routes/form');
var registration = require('./routes/registration');
var login = require('./routes/login');
var profile = require('./routes/profile');
var wronglogin = require('./routes/wronglogin');
var submitted = require('./routes/submitted');
var addJob = require('./routes/addJob');
var testimonials = require('./routes/testimonials');
var admin = require('./routes/admin');



app.use('/', routes);
app.use('/form', form);
app.use('/testimonials', testimonials);
app.use('/addJob', addJob);
app.use('/submitted', submitted);
app.use('/wronglogin', wronglogin);
app.use('/profile', profile);
app.use('/login', login);
app.use('/registration', registration);
app.use('/admin', admin);










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


module.exports = app;
