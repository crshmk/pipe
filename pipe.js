// library mixins listed here for clarity
let args = function(args) {
  return Array.prototype.slice.call(args)
};
let first = xs => xs[0];
let rest = xs => xs.slice(1);


/**
* create a pipeline of unary functions
*/
module.exports = function() {
  var fs = args(arguments);
  function caller(fs, acc) {
    return fs.length === 0 ? acc
      : caller(rest(fs), first(fs)(acc));
  };
  return data => caller(rest(fs), first(fs)(data));
}
