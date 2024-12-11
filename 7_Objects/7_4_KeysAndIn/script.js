const address = {
  country: "United States",
  state: "New York",
  city: "New York",
  street: "Wall Street",
  streenNum: "452",
};

for (const key in address) {
  console.log(`${key}: ${address[key]}`);
}

for (const key in address) {
  console.log(key);
}

console.log(Object.keys(address));

const upper = Object.keys(address).map((key) => key.toUpperCase());

console.log(upper);

console.log(Object.values(address));

console.log(Object.entries(address));

console.log(Object.getOwnPropertyNames(address));

console.log(Object.getOwnPropertySymbols(address));

console.log(Object.getOwnPropertyDescriptors(address));

console.log(Object.isExtensible(address));

console.log(Reflect.ownKeys(address));



console.log("Address", address);