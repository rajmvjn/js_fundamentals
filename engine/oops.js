// FOUR FUNDAMENTAL PRICIPLES OF OBJECT ORIENTED PROGRAMMING

// 1. Abstraction  // hide the details of the implementation     // example - addEventListner - we dont know how its works behind the scene, also we dont really have to know

// 2. Encapsulation // hide the details of the implementation    // example - having private variables   // preventing outside world from manipulation of the variables

// 3. Inheritance // Child has extends parent class // example - Person class extends Being class

// 4. Polymorphism  // Overloading // example - Admin class extends the user class and modifies implementation of login method


// OBJECT ARE LINKED TO PROTOTYPES
// THE PROTOTYPE CONTAINS METHODS THAT ARE ACCESSIBLE TO ALL THE OBJECTS THAT ARE LINKED TO THAT PROTOTYPE
// THE ABOVE IS CALLED PROTOTYPICAL INHERITANCE, WHICH IS IN FACT DIFFERENT THAN CLASS INHERITANCE

// JS HOW DO WE DO PROTOTYPICAL INHERITANCE

// 1. Object.create()
        // Easiest and straight forward way to create an object that linked to prototype object

// 2. CONSTRUCTOR FUNCTION
        // Technique to create Objects from function
        // This is how build in Objects like array, map or set are created

// 3. ES6 CLASSES
        // Syntatical sugar over the constructor function
        // Not behave like classic classes in OOP


const Person = function(name, age) {
    this.name = name;
    this.age = age;
}

const person1 = new Person('John', 30);

// what does new keyword do here
// 1. Creates a new empty object {}
// 2. Funtion Person is called and this = {}
// 3. {} linked to prototype  // this step create the __proto__ property
// 4. function automatically returns {}

console.log(person1);
console.log(person1.__proto__);
console.log(person1.prototype);
console.log(person1 instanceof Person);


// PROTOTYPES
Person.prototype.calAge = function() {
  console.log('Age is: ' + this.age);
}

person1.calAge();

// .protoype is basically linked objects prototype
console.log(person1.__proto__ === Person.prototype);
console.log(Person.prototype.isPrototypeOf(person1));
console.log(Person.prototype.isPrototypeOf(Person));

console.log(person1.hasOwnProperty('name'));
console.log(person1.hasOwnProperty('calAge'));
console.log(person1.hasOwnProperty('prototype'));
console.log(person1.hasOwnProperty('__proto__'));
console.log(Person.hasOwnProperty('prototype'));
console.log(Person.hasOwnProperty('calAge'));
console.log(Person.hasOwnProperty('name'));



/// Object.prototype the last prototype in the chain
console.log(Object.prototype);

console.log(person1.__proto__); // this is the Person.prototype
console.log(person1.__proto__.__proto__); // this is the Object.prototype which is the prototype of Person in this case and true for all the objects in JS

console.log(person1.__proto__.__proto__.__proto__); // this is the Object.prototype which is the prototype of Person in this case and true for all the objects in JS

console.log(Person.prototype.constructor);
console.dir(Person.prototype.constructor);

// Example with arrays
const arr = [1, 2, 3,3, 4, 5];  // this is equal to new Array(1, 2, 3, 4, 5) // New with Array constructor function

console.log(arr.__proto__ === Array.prototype);
console.log(Array.prototype.isPrototypeOf(arr));

console.log(arr.prototype); // this is not there -> its been refered to as __proto__
console.log(arr.__proto__); // this is the Array.prototype

// / Array specific built in methods will live in Array.prototype, example filter method, but Object.prototype will have common to all Object methods example hasOwnProperty

// Extend Array prototype

Array.prototype.unique = function() {
  console.log(this);
  return [...new Set(this)];
}

console.log(arr.unique());




