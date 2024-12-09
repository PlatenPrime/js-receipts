const address = {
  city: "New York",
  state: "New York",
  country: "United States",
};

for (const key in address) {
  if (address.hasOwnProperty(key)) {
    console.log(`${key}: ${address[key]}`);
  }
}

console.log(address.hasOwnProperty("country"));
console.log(address.hasOwnProperty("size"));
console.log(address.hasOwnProperty("toString"));

