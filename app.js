var express = require('express');
var bodyParser = require('body-parser');
const cors = require('cors');
var db = require('./db/db');
var cookieParser = require('cookie-parser')
const jwt = require('./helpers/jwt');


var index = require('./routes/index');
var user = require('./routes/user');

var app = express();
app.use(cookieParser())
app.use(jwt());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

app.use('/', index);
app.use('/user',user);

module.exports = app;