const Person =  {
  init (name, age, hobbies) {    
    this.name = name;
    this.age = age;
    this.hobbies = hobbies;
  },

  calcAge () {
    console.log(2020 - this.age);
  }
}

const Student =  Object.create(Person);

Student.init = function(name, age, hobbies, school) {
  Person.init.call(this, name, age, hobbies);
  this.school = school;
}

Student.introduce = function() {
  console.log(`My name is ${this.name} and I study at ${this.school}`);
}

const jay = Object.create(Student);

jay.init('Jay', 1990, ['Sports', 'Cooking'], 'MIT');
jay.calcAge()
jay.introduce();