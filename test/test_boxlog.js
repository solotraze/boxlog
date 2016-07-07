var assert = require('chai').assert;
var boxlog = require('../boxlog');

describe('boxlog.js', function () {
  it('should print message without error', function() {
    boxlog.logCircle('Hello there');
  });
});
