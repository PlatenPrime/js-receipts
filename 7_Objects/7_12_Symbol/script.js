// Create a unique symbol
const uniqueKey = Symbol('uniqueKey');

// Create an object with a symbol as a key
const myObject = {
  [uniqueKey]: 'This is a unique value'
};

// Access the value using the symbol
console.log(myObject[uniqueKey]); // Output: This is a unique value

// Create another symbol
const anotherKey = Symbol('anotherKey');

// Add another key-value pair to the object using a symbol
myObject[anotherKey] = 'Another unique value';

// Access the new value using the new symbol
console.log(myObject[anotherKey]); // Output: Another unique value



let symba =   myObject[uniqueKey];
console.log(symba); // Output: This is a unique value 