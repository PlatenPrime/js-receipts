function greeting(greeting) {
  let countOfCreations = 0;

  

  return function (name) {
    console.log(++countOfCreations);
    console.log(`${greeting}, ${name}`);
  };
}

const hello = greeting("Hello");
hello("Platen");

const hi = greeting("Hi");
hi("Platen");
hi("Platen");
hi("Platen");
hi("Platen");
hi("Platen");
hi("Platen");
