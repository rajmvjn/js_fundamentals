class Person {
  constructor(name, age, hobbies) {
    this.name = name;
    this.age = age;
    this.hobbies = hobbies;
  }
  
}

class Student extends Person {
  constructor(name, age, hobbies, school) {
    super(name, age, hobbies); // This will inovke the parent constructor // THIS IS NOT NEEDED IN CASE THERE IS NO ADDITIONAL PARAMETERS THAN THE PARENT CONSTRUCTOR
    this.school = school;
  }
  
  introduce() {
    console.log(`My name is ${this.name} and I study at ${this.school}`);
  }
}

const adav = new Student('Advik', 1990, ['Sports', 'Cooking'], 'MIT');
const advik = new Student('Advik', 1990, ['Sports', 'Cooking']);
advik.introduce();
adav.introduce();