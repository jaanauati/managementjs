
module.exports = {
  _counter:0,
  enter:function(args) {
    this._counter+=1;
  },
  execute:function(args) {
    this._counter+=1;
  },
  exit:function(args) {
    this._counter+=1;
  }
};
