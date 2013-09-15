
module.exports = {
  options: function(argsBuilder){
    return argsBuilder
      .version('0.0.1')
      .option('-p, --port <port>', 'specify the port [3000]', Number, 3000)
      .option('-H, --hidden', 'enable hidden file serving')
      .option('-I, --no-icons', 'disable file icons')
      .option('-L, --no-logs', 'disable request logging');
  }
};
