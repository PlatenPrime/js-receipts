class GSPerson {
  constructor(firstName, lastName, date) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dateOfBirth = date;
  }

  get age() {
    if (this.dateOfBirth instanceof Date) {
      const today = new Date();
      let age = today.getFullYear() - this.dateOfBirth.getFullYear();

      const monthDiff = today.getMonth() - this.dateOfBirth.getMonth();
      const daysDiff = today.getDate() - this.dateOfBirth.getDate();

      if (monthDiff < 0 || (monthDiff === 0 && daysDiff < 0)) {
        age--;
      }

      return age;
    }
  }

  get dateOfBirth() {
    return this._wefeedateOfBirth;
  }

  set dateOfBirth(date) {
    if (!(date instanceof Date)) {
      throw new Error("Date of birth must be an instance of Date");
    }

    if (date > new Date()) {
      throw new Error("Date of birth must be in the past");
    }

    this._wefeedateOfBirth = date;
  }
}

const person = new GSPerson("John", "Doe", new Date(1990, 5, 15));

console.log(person.age);

console.log(person.dateOfBirth);

person.dateOfBirth = new Date(1993, 1, 16);

console.log(person.dateOfBirth);

class MPerson {
  constructor(firstName, lastName, date) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.setDateOfBirth(date);
  }

  getDateOfBirth() {
    return this._wefeedateOfBirth;
  }

  setDateOfBirth(date) {
    if (!(date instanceof Date)) {
      throw new Error("Date of birth must be an instance of Date");
    }

    if (date > new Date()) {
      throw new Error("Date of birth must be in the past");
    }

    this._wefeedateOfBirth = date;
  }
}

const personM = new MPerson("John", "Doe", new Date(1990, 5, 15));

console.log(personM.getDateOfBirth());

personM.setDateOfBirth(new Date(1993, 1, 16));

console.log(personM.getDateOfBirth());

class MyClass {
  #privateVariable; // Приватное поле

  constructor(value) {
    this.#privateVariable = value; // Установка значения
  }

  getPrivateVariable() {
    return this.#privateVariable; // Метод для получения значения
  }

  setPrivateVariable(value) {
    this.#privateVariable = value; // Метод для изменения значения
  }
}

const obj = new MyClass("secret");
console.log(obj.getPrivateVariable()); // 'secret'
// console.log(obj.#privateVariable); // Ошибка: поле не доступно снаружи
