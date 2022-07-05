// ES6 classes are just syntatical sugar over the constructor function

// expression class

const PersonExpression = class {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  calAge() {
    console.log('Age is: ' + this.age);
  }
}

const advik = new PersonExpression('Advik', 30);
console.log(advik);

console.log(advik.__proto__ === PersonExpression.prototype); // calAge is in the __Proto__ same like in the constructor function


// declaration class

class PersonDeclaration {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  // Methods will automatically be added to the .prototype
  calAge() {
    console.log('Age is: ' + this.age);
  }
}

const aadav = new PersonDeclaration('Aadav', 30);  // new keyword works as same as in the constructor function
console.log(aadav);
aadav.calAge();

PersonDeclaration.prototype.greet = function() {  // this again proves its works as same as in the constructor function
  console.log('Hello '+this.name);
}

aadav.greet()

// class declarations not hoisted, but function declaration are hoisted[function can be called before it is declared]
// classes are first class citizens, meaning they be passed and returned as arguments - behind the scenes they are just functions
// Inside the class strict mode is enabled always
