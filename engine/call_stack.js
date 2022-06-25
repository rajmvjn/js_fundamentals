/*

Post combilation

  Execution
    Creation of global execution context [top level code - code which is not inside function]
      Only one global context for the js program, no matter how big it is.
    Execution of top level code, ie code in the global context -> in the computer processor -> cpu

    Then execution of functions and callbacks - for each function there will be a seperate execution context

    EXECUTION CONTEXT
      1. Variable Environment
          let, const and var variables
          functions
          argument object
      2. scope chain -> access to the variable outside context
      3. THIS keyword

        ARROW FUNCTIONS DOESNT HAVE this KEYWORD AND argument object -> BUT IT CAN USE BOTH FROM ITS PARENT SCOPE


*/

const name = 'rajesh';                            // Global context [name=rajesh, first=<function>, second=<function>, x=<unknown>]

const first = () => {                             // function context [a =1, b=<unknown>]
  let a = 1;
  const b = second(2,3);
  a = a+b;
  return a;
}

const second = (x, y) => {                       // function context [c=2, arguments=[2,3]]

  var c = 2;
  return c;

}

const x = first();


/*

call stack 
[
  execution context -> top one executes currently
  execution context
  execution context
]

above example with call stack

[
  second function -> after second function execution[with return] this been poped out from stack and execution moves to FIRST FUNCTION
  first function -> calls second function
  global -> poped out only env closed[eg when browser closed]
]

*/