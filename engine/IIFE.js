// Function that runs only once
// Create a privite variable but with ES6 we can use let/const to create private variable in a block

(function(){console.log('this will log only once'); var a = 10})();

(()=>console.log('this will also log only once'))();

console.log(a) // a is not defined, private variable with VAR
