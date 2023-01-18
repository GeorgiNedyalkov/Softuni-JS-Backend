// Importing and exporting local modules to split code can be done with
// common and es6 modules.
const sum = require("./calculator.js");
const path = require("path");
const queryString = require("node:querystring");
// Importing third party modules with NPM
// Is is a module that checks if something is of particular type.
const is = require("is");
/*
  The following functions are use to describe stack calls.
  When we get to bar(8) the function is added to the stack.
  Then when we return foo(y + 2) the foo function is added on top of the stack.
  First foo is executed then bar.
*/
function foo(x) {
  return x * x;
}

function bar(y) {
  return foo(y + 2);
}

let result = bar(8);

const numbers = [1, 2, 3, 4, 5];

console.log(result);
console.log(sum(7, 3));
console.log(is.function(sum));
console.log(is.array(numbers));

// core modules
// path
const currentDirPath = path.resolve("./");
console.log(currentDirPath); // D:\code\softuni\source_code

// url
const myURL = new URL("https://softuni.bg/");
console.log(myURL);

// query string

const queryStr = queryString.parse("foo=bar&abc=xyz&abc=123");
console.log(queryStr);
