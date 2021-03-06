'use strict';

var _leap = require('./leap');

describe('A leap year', function () {

  it('is not very common', function () {
    expect((0, _leap.isLeapYear)(2015)).toBeFalsy();
  });

  it('is introduced every 4 years to adjust about a day', function () {
    expect((0, _leap.isLeapYear)(2016)).toBeTruthy();
  });

  it('is skipped every 100 years to remove an extra day', function () {
    expect((0, _leap.isLeapYear)(1900)).toBeFalsy();
  });

  it('is reintroduced every 400 years to adjust another day', function () {
    expect((0, _leap.isLeapYear)(2000)).toBeTruthy();
  });

  // Feel free to enable the following tests to check some more examples
  describe('Additional example of a leap year that', function () {

    it('is not a leap year', function () {
      expect((0, _leap.isLeapYear)(1978)).toBeFalsy();
    });

    it('is a common leap year', function () {
      expect((0, _leap.isLeapYear)(1992)).toBeTruthy();
    });

    it('is skipped every 100 years', function () {
      expect((0, _leap.isLeapYear)(2100)).toBeFalsy();
    });

    it('is reintroduced every 400 years', function () {
      expect((0, _leap.isLeapYear)(2400)).toBeTruthy();
    });
  });
});