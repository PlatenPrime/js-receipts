function factorial(n) {
  return n <= 1 ? 1 : n * factorial(n - 1);
}

// 1 1 2 6 24 120 720 5040

console.log(factorial(5));

console.log(factorial(5) === 5 * factorial(4));

function fib(n) {
  return n <= 2 ? 1 : fib(n - 1) + fib(n - 2);
}

// 1 1 2 3 5 8 13 21 34 55

console.log(fib(10));

console.log(fib(0));
