
module.exports = function(opts) {
    opts = opts || {};
    var dispatch = require('./dispatcher').dispatch;
    if (opts.dispatch !== false) {
      var args = opts.argv || process.argv.splice(2);
      return dispatch(args, opts.settings);
    } else {
        return {
            dispatcher: dispatch
        };
    }
};
