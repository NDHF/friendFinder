// SERVER.JS

var bodyParser = require("body-parser");

var express = require('express')
var app = express()
 
app.get('/', function (req, res) {
  res.send('Hello World')
})
 
app.listen(3000);

var path = require("path");

