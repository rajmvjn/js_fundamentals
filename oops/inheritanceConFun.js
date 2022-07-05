const Person = function(name, age, hobbies) {
  this.name = name;
  this.age = age;
  this.hobbies = hobbies;
}

Person.prototype.calAge = function() {
  console.log(2020 - this.age);
}

const Student = function (name, age, hobbies, school) {
  Person.call(this, name, age, hobbies);  // call the parent constructor.
  this.school = school;
}

Student.prototype = Object.create(Person.prototype); // set the prototype of Student to Person.prototype
// Student.prototype = Person.prototype; will not work because it will not create a new object and set it to the prototype of Student
Student.prototype.constructor = Student;
Student.prototype.introduce = function() {
  console.log(`My name is ${this.name} and I study at ${this.school}`);
}

const adav = new Student('Advik', 1990, ['Sports', 'Cooking'], 'MIT');
adav.calAge();
adav.introduce();

// PERSON BASE CONSTUCTOR FUNCTION IS CREATED AND THEN THE STUDENT CONSTRUCTOR FUNCTION IS CREATED
// AND THEN THE STUDENT CONSTRUCTOR FUNCTION IS SET TO THE PROTOTYPE OF THE PERSON BASE CONSTRUCTOR FUNCTION
// AND THEN STUDENT.PROTOTYPE IS SET TO THE PROTOTYPE OF THE PERSON BASE CONSTRUCTOR FUNCTION