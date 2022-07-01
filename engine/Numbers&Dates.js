console.log(2 === 2.0);

console.log(.1+.2);

console.log(.1+.2 === .3);

console.log(Number('1') === 1);

console.log(Number(true) === 2);

console.log(Number.parseInt('30px', 10)); // second argument is the radix base (10) 0-9, 0-1, will have the base as 2;
console.log(Number.parseInt('30px', 2));

console.log(Number.parseInt('30.5', 10));
console.log(Number.parseFloat('30.5', 10));
console.log(parseFloat('30.5', 10)); // calls without Number object

//check value is number
console.log(Number.isNaN(NaN));
console.log(Number.isNaN(23));
console.log(Number.isNaN(+'23x'));
console.log(Number.isNaN(Infinity));
console.log(Number.isNaN('Infinity'));
console.log(Number.isNaN(23));

console.log(Number.isFinite(Infinity));
console.log(Number.isFinite(NaN));
console.log(Number.isFinite(23));
console.log(Number.isFinite('23'));
console.log(Number.isFinite(-1));
console.log(Number.isFinite(0));