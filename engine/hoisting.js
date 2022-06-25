/*

BEFORE EXECUTION THE CODE IS SCANNED FOR VARIABLE DECLARATIONS AND FOR EACH VARIABLE, A NEW PROPERTY IS CREATED IN variable invironment object

This makes the feels like declarations are moved top, in the fact actually above happend



                                    Hoisted               Initial value                     Scope

  function declarations               Yes                 Actual function                   block

  var variables                       Yes                 undefined                         function

  let and const variables             No                  uninitialized, TDZ                block

  function expression and arroy f             Depends if using var or let/const


  TDZ tempororry dead zone

*/

console.log(me); // hoisted and value here is undefined
// console.log(age); // not hoisted and reference error
// console.log(year); // noe hoisted and referece error

var me = 'rajesh'; 
let age = 27;
const year = 1990;


// functions

console.log(add(2,3)) // hoisted with function defenition
console.log(addN(2,3)) // hoisted but with value undefined being var variable delaration
console.log(addA(1,2)) // not hoisted and throws reference error+

function add(a,b) {
  return a+b;
}

var addN = function(a,b) {
  return a+b;
}

let addA = (a,b) => a+b


var a =10;
let b =11;
const c =12;

console.log(a === window.a)  // true, as its set to window object
console.log(b === window.b)  // false, let variables are not set to window object
console.log(c === window.c)  // false, const variables are not set to window object

