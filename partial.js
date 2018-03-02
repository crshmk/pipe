/*

  takes a function and arguments to be applied to that function
  partially apply arguments until all are received; then return application
  here, create unary functions to be composed with pipe()

  let addThreeVals = (x, y, z) => x + y + z
  let add3 = partial(_.addThreeVals, 3);
  let add5 = add3(2);

  add5(7);
  // -> 12

  add5(37);
  // -> 42

*/

let args = function(args) {
  return Array.prototype.slice.call(args)
};


module.exports = function() {
  let a = args(arguments);
  let f = a.splice(0, 1)[0];
  if (typeof f !== 'function') {
    throw new TypeError('first argument to partial must be a function');
  }
  function again(oldArgs) {
    return function() {
      let ags = oldArgs.concat(args(arguments));
      return ags.length >= f.length ? f.apply(this, ags) : again(ags);
    };
  };
  return a.length >= f.length ? f.apply(this, a) : again(a);
}
