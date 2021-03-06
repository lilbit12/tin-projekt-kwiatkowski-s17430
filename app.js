var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const authUtil = require('./util/authUtils');

const session = require('express-session');


const sequelizeInit = require('./config/sequelize/init');
sequelizeInit()
    .catch(err => {
      console.log(err);
    });


const playerApiRouter = require('./routes/api/PlayerApiRoute');
const raidApiRouter = require('./routes/api/RaidApiRoute');
var indexRouter = require('./routes/index');
const raidRouter = require('./routes/raid');
const playerRouter = require('./routes/player');
const signRouter = require('./routes/signup');
const loginRouter = require('./routes/login');


var app = express();

app.use(session({
    secret: 'my_secret_password',
    resave: false
}));
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
    const loggedUser = req.session.loggedUser;
    res.locals.loggedUser = loggedUser;
    if(!res.locals.loginError) {
        res.locals.loginError = undefined;
    }
    next();
});


app.use('/', indexRouter);
app.use('/raids', authUtil.permitAuthenticatedUser, raidRouter);
app.use('/players', authUtil.permitAuthenticatedUser, playerRouter);
app.use('/signups', authUtil.permitAuthenticatedUser, signRouter);
app.use('/login', loginRouter);


app.use('/api/players', playerApiRouter);
app.use('/api/raids', raidApiRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
