function checker(key, value) {
  const arr = ["int", "float", "number"];
  let typ = key.split("_")[1];

  if (arr.includes(typ)) {
    if (typeof value !== "number") throw new Error("type mismatch");
  } else if (typ !== typeof value) {
    throw new Error("type mismatch");
  }
}

function typeCheck(object) {
  // Use console.log() for debugging

  for (let k in object) {
    checker(k, object[k]);
  }

  const handler = {
    set: function (t, p, v) {
      checker(p, v);
    },
  };

  return new Proxy(object, handler);
}

const newO = typeCheck({
  name_string: "sadf",
  age_number: 35,
  email_boolean: "true",
});
// newO.name_string = "rajesh";
// newO.adr_number = 1.0;

// const schemaObj = {
//   name: "string",
//   age: "number",
//   email: "string",
//   adress: {
//     street: "string",
//     plot: "number",
//   },
// };

// function checkValidity(inputObj, schema) {
//   for (let key in schema) {
//     if (schema.hasOwnProperty(key)) {
//       if (typeof schema[key] === "object") {
//         console.log(inputObj[key]);
//         console.log(schema[key]);
//         return checkValidity(inputObj[key], schema[key]);
//       } else if (typeof inputObj[key] !== schema[key]) {
//         return false;
//       }
//     }
//   }
//   return true;
// }

// const res = checkValidity(
//   {
//     name: "sadf",
//     age: 35,
//     email: "sdfds",
//     adress: {
//       street: "1",
//       plot: 1,
//     },
//   },
//   schemaObj
// );

// console.log(res);

// interface Person {
//     name: String;
//     age: Number;
//     greet: () =>
// }
