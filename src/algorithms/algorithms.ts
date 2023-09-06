export function LIS(numbers: number[]): number {
  const lis = Array(numbers.length).fill(1);
  let i = lis.length - 1;
  lis[lis.length - 1] = 1;
  while (i >= 0) {
    let k = i + 1;
    while (k < lis.length) {
      if (numbers[i] <= numbers[k]) {
        lis[i] = Math.max(lis[i], 1 + lis[k]);
      }
      k++;
    }
    --i;
  }

  return lis.reduce((acc, v) => (v > acc ? v : acc), 0);
}
