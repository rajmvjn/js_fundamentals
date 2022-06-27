const a = [1,2,4];
const newArr = [12,11, ...a];
console.log(newArr);
const newArr1 = [...a, 5,6];
console.log(newArr1);

// iterables -> arrays, strings, maps, sets not objects..
let str = 'oh manh';
const newStr = [...str];
console.log(newStr)

