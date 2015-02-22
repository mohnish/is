
var should = require('should');
var is = require('../');

describe('when no argument is passed', function() {
  it('throws an error', function() {
    (is()).should.throw('"is" needs a value to be passed in.');
  });
});

describe('when the argument is a Number', function() {
  it('returns the type as Number', function() {
    (is(1).type).should.eql('Number');
    (is(1).isNumber()).should.be.ok;
  });
});

describe('when the argument is a String', function() {
  it('returns the type as String', function() {
    (is('MT').type).should.eql('String');
    (is('MT').isString()).should.be.ok;
  });
});

describe('when the argument is a Object', function() {
  it('returns the type as Object', function() {
    (is({ name: 'MT' }).type).should.eql('Object');
    (is({ name: 'MT' }).isObject()).should.be.ok;
  });
});

describe('when the argument is an Array', function() {
  it('returns the type as Array', function() {
    (is([0, 1]).type).should.eql('Array');
    (is([0, 1]).isArray()).should.be.ok;
  });
});

describe('when the argument is Undefined', function() {
  it('returns the type as Undefined', function() {
    (is(void 0).type).should.eql('Undefined');
    (is(void 0).isUndefined()).should.be.ok;
    (is(void 0).isString()).should.not.be.ok;
  });
});

describe('when the argument is Null', function() {
  it('returns the type as Null', function() {
    (is(null).type).should.eql('Null');
    (is(null).isNull()).should.be.ok;
  });
});

describe('when the argument is a Function', function() {
  it('returns the type as Function', function() {
    (is(function() {}).type).should.eql('Function');
    (is(function() {}).isFunction()).should.be.ok;
  });
});

describe('when the argument is a Boolean', function() {
  it('returns the type as Boolean', function() {
    (is(false).type).should.eql('Boolean');
    (is(true).isBoolean()).should.be.ok;
  });
});

describe('when the argument is a Date', function() {
  it('returns the type as Date', function() {
    (is(new Date()).type).should.eql('Date');
    (is(new Date()).isDate()).should.be.ok;
  });
});

describe('when the argument is a RegExp', function() {
  it('returns the type as RegExp', function() {
    (is(/a/).type).should.eql('RegExp');
    (is(/1/).isRegExp()).should.be.ok;
  });
});
