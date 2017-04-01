"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var isLeapYear = function isLeapYear(year) {

  var results = false;
  if (year % 100 === 0 && year % 400) {
    results = false;
  } else if (year % 4 === 0) {
    results = true;
  }
  return results;
};
exports.isLeapYear = isLeapYear;