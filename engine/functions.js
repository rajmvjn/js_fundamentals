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
 
