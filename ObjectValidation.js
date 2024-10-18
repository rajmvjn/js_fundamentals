function validateObject(signatureObj, valueObj) {
  if (typeof valueObj !== "object" || Array.isArray(valueObj)) {
    // input data is not a valid object
    return false;
  }

  for (const prop in signatureObj) {
    if (valueObj.hasOwnProperty(prop)) {
      if (typeof valueObj[prop] !== signatureObj[prop]) return false;
    } else {
      return false;
    }
  }

  return true;
}

// Define the expected types for each property
const expectedTypes = {
  name: "string",
  age: "number",
  email: "string",
};

// Example usage
const person1 = {
  name: "John",
  age: "30",
  email: "john@example.com",
};

console.log(validateObject(expectedTypes, person1)); // Output: true

//   const person2 = {
//     name: 'Jane',
//     age: '25', // Invalid type
//     email: 'jane@example.com',
//   };

//   console.log(validateObject(person2)); // Output: false

//   const person3 = {
//     name: 'Mike',
//     age: 40,
//     email: 'mike@example.com',
//     address: '123 Main St', // Extra property
//   };

//   console.log(validateObject(person3)); // Output: false
// console.
