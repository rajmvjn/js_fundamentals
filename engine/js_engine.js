/*

JS Engine
  Call Stack  -> execution context
  Heap -> where objects stored


JS - No more a interpreted language insted combination of interpretation and combilation
Just in Time combilation -> sorce code[portable code] -> combiled right before exection -> execution in JS engine[v8, chakra etc.]


JS execution
  JS code enters engine
  Parse into AST - abstract syntax tree
  Combilation - JIT - AST combiled to machine code[0s and 1s]
  Execution - right after execution -> happens in call stack

  Then the code again go for opimization and replace the previous code without interupting the current execution flow

JS Engine for Browser
  JS Engine - call stack + heap
  Web APIs - DOM, timers, fetch etc.
  Callback queue - call back functions

  Event Loop - Picks call back functions from queue and puts into call stack for execution

JS engine for nodejs
  Instead of web api, it holds c++ bindings -> Libuv library

*/