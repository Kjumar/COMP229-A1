process.env.Node_ENV = process.env.NODE_ENV || 'production';

var express = require('./config/env/express');

var app = express();
app.listen(3000);
module.exports = app;

console.log('Server is running at http://localhost:3000');