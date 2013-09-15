exports.resolveCommandName = function(rawArgs) {
  if (rawArgs && rawArgs instanceof Array) {
   return rawArgs[0];
  }
};

exports.stripCommandLineArguments = function(rawArgs) {
  var ret = [];
  if (rawArgs && rawArgs instanceof Array) {
    ret = rawArgs.splice(1);
  }
  return ret;
};

exports.resolveCommandModule = function(cmdName, settings) {
  if (cmdName) {
    var path = require('path');
    var fs = require('fs');
    var commandsDir = settings.commandsDir || "management";
    commandsDir = path.resolve(process.cwd(), commandsDir);
    var module = path.resolve(commandsDir, cmdName+".js");
    if (fs.existsSync(module)) {
      return module;
    }
  }
};

exports.loadCommand = function(commandPath) {
  try {
    return require(commandPath);
  } catch(e) { 
    if (e.code == 'MODULE_NOT_FOUND')
      return undefined;
    throw e;
  }
};


exports.resolveArguments = function(module, rawArgs) {
  if (module && module.options) {
    var parser = require('commander');
    parser = module.options(parser);
    return parser.parse(rawArgs);
  }
};

exports.runCommand = function(cmd, args) {
  if (cmd){
    if (cmd.enter && typeof(cmd.enter) == 'function')
      cmd.enter(args);
    if (cmd.execute && typeof(cmd.execute) == 'function')
      cmd.execute(args);
    if (cmd.exit && typeof(cmd.exit) == 'function')
      cmd.exit(args);
    return true;
  }
  return false;
};


