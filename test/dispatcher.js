var assert = require("assert");

describe('dispatcher', function(){
  var dispatcher = require('../dispatcher');

  describe('#dispatch()', function() {
    it('should return true', function() {
      assert.equal(true, dispatcher.dispatch(['testForDispatch1'],
                            {commandsDir:'./test/management/'}));
    });
  });

});
