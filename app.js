var express = require('express');
var bodyParser = require('body-parser');
var db = require('./db/db');
var index = require('./routes/index');
var user = require('./routes/user');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

var app = express();
app.use('/', index);
app.use('/user',user);

module.exports = app;