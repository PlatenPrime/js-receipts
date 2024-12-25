class Person {
  constructor(firstName, lastName) {
    (this.firstName = firstName), (this.lastName = lastName);
  }

  toString() {
    return `${this.firstName} ${this.lastName}`;
  }

  // swapNames() {
  //   [this.firstName, this.lastName] = [this.lastName, this.firstName];
  // }
}

const person = new Person("John", "Doe");

console.log(person.toString());

Person.prototype.swapNames = function () {
  [this.firstName, this.lastName] = [this.lastName, this.firstName];
};

person.swapNames();
console.log(person.toString());

console.log(person);

console.log(person.__proto__);

person.__proto__.swapNames = function () {
  return "This is new implementation";
};

console.log(person.swapNames());

try {
  console.log(person.__proto__.__proto__);
} catch (error) {
console.log(error);

}


