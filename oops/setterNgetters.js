// Getters and setters properties, not methods, they are accessed with our paranthasis like in methods
// Below are the setter and getter methods with Object literal

// OBJECT LITERAL
const person = {
  name: 'Advik',
  age: 30,
  hobbies: ['Sports', 'Cooking'],
  get getname() {
    return this.name;
  },

  set getname(name) {
    this.name = name;
  }
}

person.hey = function() {
  console.log('Hey');
}



console.log(person.name);
person.getname = 'Aadav';
console.log(person.getname);


// GETTER AND SETTER WITH CLASS

class Person {
  constructor(name, age, hobbies) {
    this.name = name;
    this.age = age;
    this.hobbies = hobbies;
  }

  get name() {
    return this._name;
  }

  set name(name) {
    this._name = name;
  }

  // Static methods are not in the prototype, so its only accessible with class name
  // Person.hey() // works
  // raj.hey() is not available
  static hey()  {
    console.log('Hey');
  }
}

console.log(Person.hey());

const raj = new Person('Raj', 30, ['Sports', 'Cooking']);
console.log(raj.name);
raj.name = 'Aad';
console.log(raj.name);

// Statci method with constructor function

const PersonCM = function (name, age, hobbies)  {
  this.name = name;
  this.age = age;
  this.hobbies = hobbies;
}

const newP = new PersonCM('Aad', 30, ['Sports', 'Cooking']);

console.log(newP.name)

PersonCM.staticMethod = function () {
  console.log('Static method', this.age);
}

console.log(PersonCM.staticMethod());