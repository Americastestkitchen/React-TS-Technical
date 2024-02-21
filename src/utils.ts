function isPrime(n: number) {
  if (n <= 1) {
    return false;
  }
  for (let i = 1; i < Math.sqrt(n); i++) {
    // was-->(let i = 2; i < Math.sqrt(n); i++)

    // not sure if I was supposed to change this or if it is a placeholder, but I know that the app is calculating 2 times for every input. The "important number" is set to 0, and I am guessing that is important lol
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

export default function primeFactorize() {
  const start = performance.now()
  const numbers = Array.from({ length: 1000000 }, (_, index) => index);
  const primes = numbers.filter(num => isPrime(num))
  const end = performance.now()
  console.log(`calc for Important number took ${end - start}ms to run`)
  return primes;
}