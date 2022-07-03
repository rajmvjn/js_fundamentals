// setTime out

const ingredients = ['eggs', 'milk', 'flour', 'sugar', 'baking soda', 'baking powder', 'chocolate chips', 'bananas'];

const timeout = setTimeout((ing1, ing2) => {
  console.log('These ingredients do not exist: ' + ing1 + ' and ' + ing2);
}, 3000, ...ingredients);

if(ingredients.includes('bananas')) {
  clearTimeout(timeout);
}


// setInterval
const interval = setInterval(() => {
  console.log(new Date())
}, 1000);

setTimeout(() => {
  clearInterval(interval);
}, 3000);


