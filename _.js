/*
 some silly functions to work with
*/

let addHash = x => '#' + x

let args = function(args) {
  return Array.prototype.slice.call(args)
}

var find = (k, v, os) => os.filter(o => o[k] === v)

let first = xs => xs[0]

var propEq = (k, o) => o[k]

let rest = xs => xs.slice(1)

let upp = x => x.toUpperCase()


module.exports = {
  addHash,
  args,
  find,
  first,
  propEq,
  rest,
  upp
}
