const a = [1,2,4];
const newArr = [12,11, ...a];
console.log(newArr);
const newArr1 = [...a, 5,6];
console.log(newArr1);

// iterables -> arrays, strings, maps, sets not objects..
let str = 'oh manh';
const newStr = [...str];
console.log(newStr)

// SPRED OPERATORS COMES IN THE RIGHT PART OF THE ASSIGNMENT
// REST OPERATORS COMES IN THE LEFT PART OF THE ASSIGNMENT

// Rest with arrays
const [a1,b, ...others] = [12, 123, 1,3,4];
console.log(a1, b, others)

// Rest with objects
const {day, ...weekdays} = {
  day: 'saturday', day1: 'monday', day2: 'tuesday'
}

console.log(day, weekdays)

// Function parameters..
function add(...numbers) {
  console.log(numbers);
};

add(1);
add(1,2);
add(1,2,3);

// Nullish value -> null or undefined

const a2 = 0 || 2;
console.log(a2);

const a3 = 0 ?? 2;
console.log(a3);

const a4 = null ?? undefined ?? '' ?? 0?? 1;
console.log(a4)