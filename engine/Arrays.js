const a1 = [1,2,3,4,5,6,7,8,9,10];
console.log(a1.at(-1));

console.log('abcd'.at(-1));

for (const [i, v] of a1.entries()) {
  console.log(i, v);
}


const a2 = [1,2,3,4,5,6,7,8,9,10];
a2.forEach(function(v, i) {
  console.log(i, v);
});

console.log('----------------map and set----------------');

const maps = new Map([
  ['a', 1],
  ['b', 2],
  ['c', 3],
]);

maps.forEach(function(v, i) {
  console.log(i, v);
})


const sets = new Set(['a', 'b', 'c', 'd', 'a']);
console.log(sets);
sets.forEach(function(v, i) {
  console.log(i, v);
});

const sum = a2.reduce(function(acc, v) {
  // return acc;
  return acc + v;
},0);

console.log(sum)