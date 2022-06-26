/*

this keyword/variable -> special variable created inside every execution context[every function]

takes the value or points to the owner of the function

this is not constant, it depends on how the function is called, and its value is assigned only when the function is called


Method -> object that is calling the method

simple function call -> this is undefined in strct mode otherwise point to window object

arrow function -> this of the surronding function <lexical this>

event listnes -> this = DOM element to which the handler is attached

new, call, bind, apply -> 


*/

// ARROW FUNCTION INHERITS THE this FROM PARENT SCOPE
// arguments doent exist in arrow functions but in regular function its available, its an array

const rajesh = {
  firstName: 'rajesh',
  year:1999,
  greet: () => {console.log(this);console.log(this.firstName)}, // this method wont get THIS keyword
  greetNormal : function() {console.log(this)} // this normal function gets THIS keyword refering to object
}

console.log(rajesh.greet())
rajesh.greetNormal()

