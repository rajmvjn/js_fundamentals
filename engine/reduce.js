const users = [
  {firstName: 'raj', age: 2},
  {firstName: 'raju', age: 12},
  {firstName: 'ray', age: 123},
  {firstName: 'rayem', age: 32},
]

const output = users.filter(user=> user.age>30).map(user=>user.firstName);
console.log(output);

const outputReduce = users.reduce((acc, curr, index)=>{if(curr.age > 30)acc.push(curr.firstName); return acc}, []);
console.log(outputReduce)

// 
