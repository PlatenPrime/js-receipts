const data = {
  name: "John",
};

Object.defineProperty(data, "type", {
  value: "primary",

  enumerable: true,
  configurable: true,
  writable: true,
});

console.log(data.type);

data.type = "secondary";

console.log(data.type);

console.log(Object.keys(data));

Object.defineProperty(data, "age", {
  enumerable: true,
  configurable: false,
  get: function () {
    return "А что ты хотел?";
  },
});

console.log(data.age);

console.log(Object.keys(data));

data.grace = "grace";

console.log(Object.keys(data));
console.log(data);


