
exports.dispatch = function(argv, settings) {
  settings = settings || {};
  var utils = require('./utils');
  var commandName = utils.resolveCommandName(argv);
  var modulePath = utils.resolveCommandModule(commandName, settings); 
  var command = utils.loadCommand(modulePath);
  if (command) {
    var cmdRawArgs = utils.stripCommandLineArguments(argv);
    var cmdArgs = utils.resolveArguments(command, cmdRawArgs);
    return utils.runCommand(command, cmdArgs);
  }
  return false;
};

