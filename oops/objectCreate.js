const PersonProto = {
  calAge: function() {
    console.log(2020 - this.yearOfBirth);
  },

  init: function(name, yearOfBirth) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
  }
}

const adav = Object.create(PersonProto)
adav.init('Advik', 1990);
adav.calAge();

console.log(adav.__proto__ === PersonProto);

// Object.create will take the parameter and set that to the prototype of the object created