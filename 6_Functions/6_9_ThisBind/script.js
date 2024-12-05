window.onload = function () {
  window.name = "window";

  const newObject = {
    name: "New Object",

    sayGreeting: function () {
      console.log(`Now this is easy, ${this.name}`);

      const nestedGreeting = function (greeting) {
        console.log(`${greeting}, ${this.name}, I am a nested function`);
      }
        // .bind(newObject) - привязать this к newObject
        .bind(this); // Привязать this, это будет динамическое привязывание к тому объекту, что вызывает метод

      nestedGreeting("Hello");
    },
  };

  newObject.sayGreeting();

  const superObject = {
    name: "superObject",
    greet: newObject.sayGreeting,
  };

  superObject.greet();
};


