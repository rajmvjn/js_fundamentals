// in the blow scenarion GLOBAL SCOPE WILL START secure function call
// which will have execution context with passengerCount varaible 
// then that execution context will be poped out of the call stack and then call stack will have new BOOKER function
// which will have access to the poped out execution context variable passengerCount via CLOSURE

// ANY FUNCTION GETS ACCESS TO ITS EXECUTION CONTEXT ITS BORN
// JAVASCRIPT LOOKS INTO CLOURE EVEN BEFORE ITS LOOKS INTO SCOPE CHAIN
// IE CLOSURE HAS PRIORITY OVER SCOPE CHAIN

// CLOSURE: VARIABLE ENVIRONMENT ATTACHED TO THE FUNCTION EXACTLY AT THE TIME AND PLACE THE FUNCTION WAS CREATED

const secureBooking = function() {
  let passengerCount = 0;

  return function () {
    console.log(`
    the passenger count ${++passengerCount}`)
  }
}

const booker = secureBooking();

booker();
booker();

console.dir(booker); // in the scope we will be able to see the variables in the closure


// example one

let f;

const g = function() {
  const a = 23;
  f = function() {
    console.log(a*2)
  }
}


const h = function() {
  const b = 100;
  f = function() {
    // console.log(a*2) a is undefined
    console.log(b*2)
  }
}

g();
f();
console.log(f);

h();
f();
console.log(f);


//example 2


const exmpleTimer = function(num, wait) {
  let grp = num/3;

  setTimeout(function() {console.log(`num: ${num}, grp: ${grp}`)}, wait*1000);

  console.log('lets see')
}


exmpleTimer(180, 3)




// Connter with constructor function

function Counter() {
  var count = 0;

  this.inc = function() {
    count++;
    console.log(count);
  }

  this.dec = function() {
    count--; 
    console.log(count)
  }
}

var cnt1 = new Counter();

cnt1.inc();
cnt1.inc();
cnt1.dec();

// class counter

class CounterCls {
  constructor() {
    this.count = 10
  }

  inc() {
    this.count++;
    console.log(this.count);
  }

  dec() {
    this.count--;
    console.log(this.count);
  }

}

const cntObj = new CounterCls();
cntObj.inc()
cntObj.inc()
cntObj.inc()
cntObj.dec()



