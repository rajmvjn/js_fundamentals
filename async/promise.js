// PROMISE: A promise is a placeholder for a value that will be available in the future, from and asychronous operation.
// Real world example: Lottery ticket, buy the ticket now and wait for the result.

// Promise Life Cycle
// Pending -> settled -> fulfilled
//                    -> rejected

// Promises are settled only once, there after it wont change

// Fetch and image loading are asynchronous operations, which are basically wating in web api space
// once they are done with th operation, they will moved to microtask queue and call back queue respectivly,
// micro task queue has precedence over call back queue.

console.log("test start");
setTimeout(() => {
  console.log("timer");
}, 0); // callback queue
Promise.resolve("promise done").then((data) => {
  console.log(data);
}); // microtask queue, event loop consider microtask with higher prriority
Promise.resolve("promise2 done").then((data) => {
  for (let i = 0; i < 100000000; i++) {}
  console.log(data);
}); // microtask queue, event loop consider microtask with higher prriority
console.log("test end");

const lotteryPromise = new Promise((resolve, reject) => {
  console.log("lottery dray happening");
  setTimeout(() => {
    if (Math.random() > 0.5) {
      resolve("win");
    } else {
      reject(new Error("lose"));
    }
  }, 1000);
});

lotteryPromise
  .then((data) => console.log(data))
  .catch((err) => console.log(err.message));

// Chaining Promises, with out call back hell
const wait = function (seconds) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(seconds);
    }, seconds * 1000);
  });
};

wait(2)
  .then((data) => {
    console.log(data);
    return wait(1);
  }) // Return prmoise has to be there for chaining
  .then((data) => console.log(data))
  .catch((err) => console.log(err.message));

// Promisify geolocation

const getGeoLocation = () => {
  return new Promise((resolve, reject) => {
    // navigator.geolocation.getCurrentPosition(position=> resolve(position), err=> reject(err)); // below code is same as above
    //  navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

// promise mutliple

// ( async function() {
//     console.log('starting');
//     const geo = await getGeoLocation();
//     console.log(geo);
// })()

// Promise.all - will short circuit if any of the promises fails
(async function () {
  console.log("starting");
  const res = await Promise.all([
    fetch("https://jsonplaceholder.typicode.com/users"),
    fetch("https://jsonplaceholder.typicode.com/posts"),
    fetch("https://profile-app-mw.herokuapp.com/user/comment"),
  ]);
  const data = await res[0].json();
  console.log(data);
})()(
  // race, will win the first one
  async function () {
    console.log("starting");
    const res = await Promise.race([
      // FIRST RESPONSE WINS
      fetch("https://jsonplaceholder.typicode.com/users"),
      fetch("https://jsonplaceholder.typicode.com/posts"),
      fetch("https://profile-app-mw.herokuapp.com/user/comment"),
    ]);
    let data = await res.json();
    console.log(data);
  }
)();

// Promise.allSettled - will return an array of promises, with all the settled promises
// ES2020

Promise.allSettled([
  Promise.resolve("success"),
  Promise.reject("error"),
  Promise.resolve("success2"),
])
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });

// Promise.any - return the first settled promise[first success promise]
// ES2021

Promise.any([
  Promise.resolve("success"),
  Promise.reject("error"),
  Promise.resolve("success2"),
])
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });
