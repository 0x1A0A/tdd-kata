export function isPrime(n: number) {
  if (!n || n === 1 || !(n & 1)) return false;

  for (let i = 3; i * i <= n; ++i) {
    if (n % i === 0) return false;
  }

  return true;
}

export function gap(g: number, m: number, n: number): number[] | null {
  if (g === 1) return null;

  const primes = [
    ...new Array(n - m + 1)
      .fill(m)
      .map((v, i) => v + i)
      .filter((v) => isPrime(v)),
  ];

  for (let i = 0; i < primes.length - 1; ++i) {
    if (primes[i + 1] - primes[i] === g) return [primes[i], primes[i + 1]];
  }

  return null;
}
