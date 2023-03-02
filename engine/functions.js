'use strict';

// defualt parameters and using the same in next parameters

function flight(price, numOfPass =1, total= numOfPass*price) {
  console.log(price, numOfPass, total);
}

flight(10);
flight(10, 10);
flight(10,10,10);

console.log(typeof flight)

// JS treats functions as first-class citizens, this means functions are just values
// STORE FUNCTIONS IN VARIABLE OR PROPERTIES OF OBJECT
// PASS FUNCTIONS AS ARGUMENTS
// RETURN FUNCTION FROM A FUNCTION
// HIGHER ORDER FUNCTIONS -> FUNCTIONS THAT RECEIVES OR RETURNS A FUNCTION OR BOTH -> THIS IS BECAUSE FIRST CLASS FUNCTIONS MEANING FUNCTIONS ARE VALUES

const greet = function (greet) {
  return function(name) {
    console.log(greet + " " + name)
  }
}

greet('hello')('raj')

const reFun = greet('hey');
reFun('AAdi')

const greetA = (greet) => {
  return (name) => {
    console.log(greet +"  "+ name)
  }
}

greetA('hi', 'raju')('raj')


a() // this will work since the memory phase its allocated with function code;
b() // this wont work since the memory phase will not assign function instead undefined

// Function statement aka Function declaration

function a() {
  console.log('a called')     /// difference between f statement and expersion is on hoisting 
}
a() // this will work

// Function expression

var b = function() {
  console.log('b called')
}
b() // this will work





// Function declaration

// Anonymous function - function with out name and used to assign function to vairble
// function () {

// }




 
// Named function experssion
var b = function fun() {
  console.log('b called')
}
b();
fun(); // will be errored as its not create in the global scope




// Difference between parameters and arguments
function fk(p1, p2) {  // p1 and p2 are parameters

}

fk(11, 22); // 11 and 22 are arguments..




// First class functions - ability to pass function as arguments is called first class functions, also the ability to return a function from another function
// aka first class citizens
function a(p1) {
  console.log(p1)
}

a(function(){})




// Arrow functions
 
