var express = require('express');
var bodyParser = require('body-parser');
const cors = require('cors');
var db = require('./db/db');

var index = require('./routes/index');
var user = require('./routes/user');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

app.use('/', index);
app.use('/user',user);

module.exports = app;