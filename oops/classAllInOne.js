class Person {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }  
}

class Student extends Person {

  university = 'MIT';
  #studyHours = 0;
  #course;
  static numSubjects = 10;

  constructor(fullName, birthYear, startYear, course) {
    super(fullName, birthYear);
    this.startYear = startYear;
    this.#course = course;
  }

  introduce() {
    console.log(`My name is ${this.fullName} and I study at ${this.university} for the course ${this.#course}`);
  }

  study(hrs) {
    this.#makeCoffee();
    this.#studyHours += hrs;
    console.log(`${this.fullName} is now studying for ${this.#studyHours} hours`);
    console.log(this.university)
  }

  #makeCoffee = () => {
    console.log('Making coffee...');
  }

  get testScore() {
    return this._testScore;
  }

  set testScore(score) {
    this._testScore = score < 0 ? 0 : score;
  }

  static printCurriculum() {
    console.log('Curriculum:');
    console.log(this.numSubjects);
    // console.log(this.university);
    // console.log(this.#studyHours);
  }

}

const s1 = new Student('Advik', 1990, 2000, 'CS');

s1.testScore = 100;
console.log(s1.testScore); // SETTER AND GETTER

Student.printCurriculum(); // STATIC METHOD

s1.study(2);