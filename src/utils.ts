function isPrime(n: number) {
  if (n <= 1) {
    return false;
  }
  for (let i = 2; i < Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

export default function primeFactorize(n: number) {
  const start = performance.now()
  const numbers = Array.from({ length: n }, (_, index) => index);
  const primes = numbers.filter(num => isPrime(num))
  const end = performance.now()
  console.log(`calc for Important number took ${end - start}ms to run`)
  return primes;
}