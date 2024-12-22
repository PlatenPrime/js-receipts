const product = { name: banana };

const propertyChecker = {
  set: function (target, property, value) {
    if (property === "price") {
      if (typeof value !== "number") {
        throw new TypeError("Price must be a number");
      } else if (value < 0) {
        throw new RangeError("Price must be a positive number");
      }
    }
    
  },
};
