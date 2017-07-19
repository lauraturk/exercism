'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var Hamming = (function () {
  function Hamming() {
    _classCallCheck(this, Hamming);
  }

  _createClass(Hamming, [{
    key: 'compute',
    value: function compute(string1, string2) {
      var stringArray1 = string1.split('');
      var stringArray2 = string2.split('');
      var count = 0;

      if (stringArray1.length !== stringArray2.length) {
        throw new Error('DNA strands must be of equal length.');
      } else {
        for (var i = 0; i <= stringArray1.length; i++) {
          stringArray1[i] !== stringArray2[i] ? count++ : count;
        }
        return count;
      }
    }
  }]);

  return Hamming;
})();

exports['default'] = Hamming;
module.exports = exports['default'];