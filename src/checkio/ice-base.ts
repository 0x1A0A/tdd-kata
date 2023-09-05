export function mostNumber(...args: number[]): number {
  if (args.length == 0) return 0;
  const [min, max] = Array.from(args).reduce(
    (acc: [number, number], v) => [Math.min(acc[0], v), Math.max(acc[1], v)],
    [args[0], args[0]],
  );
  return +(max - min).toFixed(3);
}

export function findQuotes(str: string): string[] {
  const arr = str.matchAll(/"([^"]*)"/g);
  const res: string[] = [];
  for (let a of arr) res.push(a[1]);
  return res;
}

export function moveZeros(arr: number[]): number[] {
  return arr.sort((a, b) => {
    if (!a || !b)
      if (!a) return 1;
      else if (!b) return -1;
    return 0;
  });
}
