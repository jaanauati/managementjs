
var assert = require("assert");

describe('#node_management', function(){
  it('should return true', function() {
    assert.equal(true, require('../index')({
      argv: ['testForDispatch1'],
      settings: {commandsDir:'./test/management/'}
    }));
  });
});
