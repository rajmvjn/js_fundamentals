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

console.log('----------------------------------------------------');

// Biggest number in JS
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER + 10);

// Bigint can represtent numbers bigger than Number.MAX_SAFE_INTEGER
console.log(123432432432278907324n);

console.log(BigInt(32489));

console.log(123 === BigInt(123)); // false ie typeof 123 is number

console.log(123 == BigInt(123)); // true ie typeof 123 is bigint


console.log('----------------------------------------------------');

// DATE 
// FOUR WAYS TO CREATE A DATE IN JS

const date = new Date();
console.log(date)

console.log(new Date('December 25, 2019'));

console.log(new Date(2019, 11, 25, 3, 0, 0));

console.log(new Date(0)); // 1970-01-01T00:00:00.000Z epoch time
console.log(new Date(3*24*60*60*1000)); // 3 days in milliseconds


console.log('----------------------------------------------------');

const future = new Date(2037, 10, 25, 3, 0, 0);
console.log(future);

console.log(future.getFullYear());
console.log(future.getMonth()+1);
console.log(future.getDate());
console.log(future.getHours());
console.log(future.getMinutes());
console.log(future.getSeconds());
console.log(future.getMilliseconds());
console.log(future.getTime());
console.log(future.getTimezoneOffset());
console.log(future.toISOString());
console.log(future.toDateString());

future.setFullYear(2040); // all the set methods will also do the auto correction of the date, meaning will set the date to the next day if the date is invalid

console.log(future)

console.log(Math.abs(new Date(2022, 10 ,11) - new Date(2022, 10, 12)) / (1000*60*60*24)); // returns the number of days between two dates

// internationalization
console.log(new Date(2022, 10, 11).toLocaleDateString('en-US'));
console.log(new Intl.DateTimeFormat('en-US').format(new Date()));
console.log(new Intl.DateTimeFormat('en-GB').format(new Date()));
console.log(new Intl.DateTimeFormat('ky-KG').format(new Date()));
console.log(new Intl.DateTimeFormat('ta-IN').format(new Date()));
console.log(new Intl.DateTimeFormat('ta').format(new Date()));



const options = {
  hour: 'numeric',
  minute: 'numeric',
  day: 'numeric',
  month: 'long',
  year: 'numeric',
  weekday: 'long',
}
console.log(new Intl.DateTimeFormat('en-US', options).format(new Date()));


console.log('----------------------------------------------------');

const num = 98723423874.43;

// Three options - unit, currency, percent
const moreOptions = {
  style: 'unit',
  unit: 'celsius',
}

const options2 = {
  style: 'currency',
  currency: 'USD',
}

const options3 = {
  style: 'percent',
}

console.log('US', new Intl.NumberFormat('en-US', moreOptions).format(num));
console.log('UK', new Intl.NumberFormat('en-GB').format(num));
console.log('UK', new Intl.NumberFormat('en-GB', options3).format(num));
console.log('KG', new Intl.NumberFormat('ky-KG', options2).format(num));
console.log('IN', new Intl.NumberFormat('ta-IN', moreOptions).format(num)); // tamil india
console.log('ar-SY', new Intl.NumberFormat('ar-SY').format(num));
// console.log(navigator.language, new Intl.NumberFormat(navigator.language).format(num)); // navigator.language is the browser language
































