function factorial(n) {
  return n <= 1 ? 1 : n * factorial(n - 1);
}

console.log(factorial(5));

console.log(factorial(5) === 5 * factorial(4));

function fib(n) {
  return n <= 2 ? 1 : fib(n - 1) + fib(n - 2);
}

console.log(fib(10));
