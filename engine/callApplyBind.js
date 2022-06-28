// Call and apply helps to call a function with given object context, first argument will be the context

const person = {
  name: 'rajesh',
  age: 20,
  printPerson: function(place) {
    console.log(this.name + " "+ this.age + " " + place)
  }
}

const printPerson = person.printPerson;

printPerson.call(person, 'etr')
printPerson.apply({name:'adi', age:5}, ['etr'])
const places = ['etr'];
printPerson.call({name:'adi', age:5}, ...places)

const p2 = {
  name: 'AAD',
  age: 5
}

const newFn = printPerson.bind(p2, 'ptra');

newFn('lets see');

// with event listners

const luftansa = {
  planes: 300,
  addPlanes: function() {
    this.planes++;
  }
}

// document.querySelector('.buy').addEventListener('click', luftansa.addPlanes.bind(luftansa));

// without BIND THIS keyword will point to the DOM element
// CALL and APPLY will immediatly call the addPlanes function but we need callback function here
// bind will return a function after binding context/this and any predefined parameters

// partial application with bind, preset the parameter

const addTax = (rate, value) => value+value*rate;
console.log(addTax(.1, 200))

const addVAT = addTax.bind(null, .23); // Not needed this/context reference because THIS  is not used in the addTax function
console.log(addVAT(200))