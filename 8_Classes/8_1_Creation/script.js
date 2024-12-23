class Person {
  constructor(firstName, lastName, fruit) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.fruit = fruit;
  }

  getFullName() {
    return `${this.firstName} ${this.lastName} `;
  }
}

const person = new Person("Platen", "Prime");

console.log(person);
console.log(person.getFullName());


class User extends Person {
  constructor(firstName, lastName, email) {
    super(firstName, lastName);
    this.email = email;
  }
}


const sasha = new User("Asha", "Prime", "qfQp7@example.com");

console.log(sasha);
console.log(sasha.getFullName());
console.log(sasha.email);
console.log(sasha.fruit);

