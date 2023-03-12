// Promises are objects representing eventual completion of failure of an asychronous operation

// Promise object has three states - pending, fullfilled, rejected - this is inside PromiseState

// PromiseResult holds the data from the async operation once its done - serializible, which converted with JSON to readable format.

// Chaining promises also help to return a promise from a then block, which will resolved in the next then :- bcos then trigger when the promise resolved.

// Chaining error scenario can be induvidually handled if we attach catch block to every then block, then bloack basically looks above to the chain