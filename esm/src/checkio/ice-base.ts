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
  for (const a of arr) res.push(a[1]);
  return res;
}

export function moveZeros(arr: number[]): number[] {
  return arr.sort((a, b) => {
    if (!a || !b) {
      if (!a) return 1;
      else if (!b) return -1;
    }
    return 0;
  });
}

export function notOrder(arr: number[]): number {
  const sorted = Array.from(arr).sort((a: number, b: number) => a - b);
  return arr.reduce((acc, v) => acc + (v != sorted.shift() ? 1 : 0), 0);
}

export function longRepeat(line: string): number {
  let i = 0,
    c = 0,
    prev = undefined,
    max = 0;
  while (line[i]) {
    if (prev != line[i]) {
      max = Math.max(c, max);
      c = 0;
    }
    prev = line[i];
    ++c;
    ++i;
  }
  return Math.max(c, max);
}
