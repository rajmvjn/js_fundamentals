function add(a, b) {
  return a + b;
}

function curryAdd(a) {
  return function (b) {
    return a + b;
  };
}

const addFive = curryAdd(5); // returns a new function that adds 5 to a number
console.log(addFive(2)); // Output: 7
console.log(addFive(5)); // Output: 10
