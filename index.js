let partial = require('./partial');
let pipe = require('./pipe');
let _ = require('./_');
let products = require('./products.json');


/*
  compose in point free style with pipe
*/

let getChar = pipe(_.first, _.upp);
getChar('things')
// -> 'T'


/*
  use currying or partial application to create unary functions for pipe
*/

let getColor = partial(_.propEq, 'color');

let getFormattedColor = pipe(getColor, _.upp, _.addHash);

getFormattedColor(products[0]);
// -> "#238B45"

let getColorByIndex = (index, products) => getFormattedColor(products[index]);

getColorByIndex(1, products);
// -> "#006D2C"


// find the 'type' for product with id 2:

// keep these unary functions in your instance
let findById = partial(_.find, 'id');
let getType = partial(_.propEq, 'type');

// handle this as the user interacts
pipe(findById(2), _.first, getType)(products)
// -> "table"
