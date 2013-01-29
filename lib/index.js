/*jslint node: true */
'use strict';

var pause = require('pause');

module.exports = function lag(options) {
  var min;
  var max;

  if (options === undefined || options.min === undefined) {
    min = 0;
  } else {
    min = options.min;
  }

  if (options === undefined || options.max === undefined) {
    max = min;
  } else {
    max = options.max;
  }

  return function (req, res, next) {
    var id = pause(req);
    setTimeout(function () {
      id.resume();
      next();
    }, Math.random() * (max - min) + min);
  };
};
