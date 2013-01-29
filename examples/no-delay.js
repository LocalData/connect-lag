/*jslint node: true */
'use strict';

var connect = require('connect');
var lag = require('../lib/index.js');

var port = process.env.PORT || 3000;

var app = connect()
.use(lag({
  min: 0,
  max: 0
}))
.use(function (req, res) {
  res.statusCode = 200;
  res.write('Hello!');
  res.end();
})
.listen(port, function () {
  console.log('Listening on ' + port);
});
