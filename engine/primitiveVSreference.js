/*

Primitive veriables stored in execution context ie in call stack
  When a variable is copied to another here also address of that varible copied actually
  But if we change any of them, a new memory address is created and chaged value of the particular variable which is changed.

Reference types stored in HEAP
  Address in the execution context/call stack stores the referece to the value in the HEAP

*/

// Copying object

const me = {
  name: "rajesh",
  age: 22
}

const meCopy = me; // referece copied ie changes to the meCopy changes me as well


// this copies only first level object not deep object
const anotherCpy = Object.assign({}, me); // New object created by combining both the objects passed to ASSIGN method


