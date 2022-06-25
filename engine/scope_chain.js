/*

EXECUTION CONTEXT
      1. Variable Environment
          let, const and var variables
          functions
          argument object
      2. scope chain -> access to the variable outside context
      3. THIS keyword

*/


/*

Scope chain -- If a variable not found in current scope js engine will look for the same in the parent scope ie in the scope chain
                This process is called variable lookup -> and there is no look down chain.

  Lexical Scoping -> Scoping controlled by PLACEMENT of functions and variables in the scope
  Scope ->  [GLOBAL, FUNCTION, BLOCK]

  GLOBAL
    Outside of any function or block
    Accessible everywhere

  FUNCTION
    Vriables declared inside function
    Only accessible inside function
    Local Scope
  
  BLOCK - ES6
    Only with let and const
    Variable declared in the block
    Accessible only inside the block

*/

const myName = 'advik';

function first() {
  const age = 30;

  if(age >= 30) {
    const decade = 3;
    var mil = true
  }

  function second() {

    const job = 'teacher';
    console.log(myName + "  " + age + "       "+ job);
    console.log(mil) // DECLARATION OF mil variable IS HOISTED TO FUNCTION SCOPE HERE, AND ASSIGNMENT HAPPENS BEFORE CONSOLE.LOG

  }
  second();
}

first()