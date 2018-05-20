var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();

var PORT = process.env.PORT || 8000;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

require('./app/routing/app-route')(app);
require('./app/routing/html-route')(app);

app.listen(PORT,function () {
    console.log('http://localhost:'+PORT);
  });