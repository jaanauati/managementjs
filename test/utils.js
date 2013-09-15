
var assert = require("assert");
var path = require("path");

describe('utils', function(){
  var utils = require('../utils');

  describe('#resolveCommandName()', function() {
    it('should return undefined', function() {
      assert.equal(undefined, utils.resolveCommandName());
      assert.equal(undefined, utils.resolveCommandName([]));
    });

    it('should return "commandName"', function() {
      assert.equal('commandName', utils.resolveCommandName(['commandName','ignored']));
    });
  });

  describe("#stripCommandLineArguments()", function() {
    it('should return "[]"', function() {
      assert.deepEqual([], utils.stripCommandLineArguments());
      assert.deepEqual([], utils.stripCommandLineArguments([]));
      assert.deepEqual([], utils.stripCommandLineArguments(['p']));
    });

    it('should return the list of arguments', function() {
      assert.deepEqual(['h'], utils.stripCommandLineArguments(['0','h']));
      assert.deepEqual(['h','i'], utils.stripCommandLineArguments(['0','h','i']));
      assert.deepEqual(['h','i','j'], utils.stripCommandLineArguments(['0','h','i','j']));
    });
  });


  describe('#resolveCommandModule()', function() {

    it('should return undefined', function() {
      assert.equal(undefined, utils.resolveCommandModule());
    });
    
    it('should return the path for "testForResolve1" command', function() {
      var cmdPath = path.resolve(process.cwd(),'./test/management/','testForResolve1.js');
      assert.equal(cmdPath, utils.resolveCommandModule('testForResolve1',{commandsDir:'./test/management/'}));
    });
  });

  describe('#loadCommand()', function() {
    it('should return undefined', function() {
      assert.equal(undefined, utils.loadCommand('./blah.js'));
    });

    it('should return a module', function() {
      var cmdPath = path.resolve(process.cwd(),'./test/management/','testForLoad1.js');
      assert.ok(utils.loadCommand(cmdPath));
    });
  });

  describe('#resolveArguments()', function() {
    it('should return undefined', function() {
      assert.equal(undefined, utils.resolveArguments());
      assert.equal(undefined, utils.resolveArguments({}));
      assert.equal(undefined, utils.resolveArguments({},[]));
    });

    it('should return options', function() {
      var cmdPath = path.resolve(process.cwd(),'./test/management/','testForResolveArguments1.js');
      var cmd = utils.loadCommand(cmdPath);
      assert.ok(utils.resolveArguments(cmd, []));
    });
  });

  describe('#runCommand()', function() {
    it('should return false', function() {
      assert.equal(false, utils.runCommand());
    });

    it('should return true', function() {
      var cmdPath = path.resolve(process.cwd(),'./test/management/','testForExecution1.js');
      var cmd = utils.loadCommand(cmdPath);
      assert.equal(true, utils.runCommand(cmd));
    });

    it('should run all steps', function() {
      var cmdPath = path.resolve(process.cwd(),'./test/management/','testForExecution2.js');
      var cmd = utils.loadCommand(cmdPath);
      utils.runCommand(cmd);
      assert.equal(3, cmd._counter);
    });

  });
});
