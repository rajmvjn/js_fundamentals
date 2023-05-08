// Destructuring...
// in Array destructuring the ORDER matters

const nested = [1, 2, [3, 5]];

const [x, , [a, b]] = nested;

console.log(x, a, b); // 1 3 5 -> nested destructuring..

// Default values..

const [p = 1, q = 2, r = 3] = [8, 9];

console.log(p, q, r); // default value considered as like default function arguments

// object destructuring..
// order doesnt matter but the NAME

const restrant = {
  name: "arayas",
  openingHours: "1-2",
  catergories: [1, 2, 3],
  year: 123,
  month: {
    jan: 0,
    feb: 2,
  },
};

const { name, year } = restrant;
console.log(name, year);

const { name: hotel, year: sYear } = restrant; // named destructuring...
console.log(hotel, sYear);

const { menu = [], yearS = 2000 } = restrant; // destructuring with default value
console.log(menu, yearS);

let aa = 100;
let bb = 200;
const obj = { aa: 1, bb: 2, cc: 3 };

//const {aa,bb} = obj; will not work as variable are already declared -

console.log(obj);

// ({aa,bb}=obj)

// nested destructuring

const {
  month: { jan, feb },
} = restrant;
console.log(jan, feb);

const {
  month: { jan: j, feb: f },
} = restrant;
console.log(j, f);
