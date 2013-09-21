/* This example shows how to parse command line arguments.
 * The 'options' method receives a Commander's Command instance that must be
 * used to build your arguments parser.
 */

/* This example shows how to parse command line arguments. 
 * The 'options' method receives a Commander's Command instance that must be 
 * used to build the arguments parser.
 */

exports.options = function(commander) {
  return commander.option('-p, --port <p>', 'Port number', Number, 3000);
};

/* All the three methods: ('enter', 'execute' and 'exit') will receive the
 * arguments parsed via commander.
 */
exports.enter = function(args) { console.log('Entering...');};
exports.execute = function(args) { 
  console.log('Executing...');
  console.log('Port Number: '+args.port);
};

exports.exit = function(args) { console.log('Exiting...');};

