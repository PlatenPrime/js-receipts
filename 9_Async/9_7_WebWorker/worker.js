function findPrimes(from, to) {
  if (to < 2 || from > to) return []; // Нет простых чисел в диапазоне

  const isPrime = Array(to + 1).fill(true);
  isPrime[0] = isPrime[1] = false; // 0 и 1 не являются простыми числами

  for (let i = 2; i * i <= to; i++) {
    if (isPrime[i]) {
      for (let j = i * i; j <= to; j += i) {
        isPrime[j] = false; // Отмечаем кратные числа как составные
      }
    }
  }

  // Возвращаем простые числа только из заданного диапазона
  return isPrime
    .map((prime, index) => (prime ? index : null))
    .filter((num) => num !== null && num >= from);
}

onmessage = (event) => {
  const { from, to } = event.data;
  const primes = findPrimes(from, to);
  postMessage(primes);
};


