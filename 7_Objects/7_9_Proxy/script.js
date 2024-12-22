const product = { name: "banana" };

const propertyChecker = {
  set: function (target, property, value) {
    if (property === "price") {
      if (typeof value !== "number") {
        throw new TypeError("Price must be a number");
      } else if (value < 0) {
        throw new RangeError("Price must be a positive number");
      }
    } else if (property !== "name") {
      throw new ReferenceError(`Property ${property} is not allowed`);
    }
    target[property] = value;
  },
};

const productProxy = new Proxy(product, propertyChecker);

productProxy.price = 10;

console.log(productProxy.price); // 10

try {
  productProxy.price = "10"; // TypeError: Price must be a number
} catch (error) {
  console.log(error.name + ": " + error.message);
}


try {
  productProxy.price = -13 ; // TypeError: Price must be a number
} catch (error) {
  console.log(error.name + ": " + error.message);
}


try {
  productProxy.fruit = "apple"; // TypeError: Price must be a number
} catch (error) {
  console.log(error.name + ": " + error.message);
}
