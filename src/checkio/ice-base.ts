export function mostNumber(...args: number[]): number {
  if (args.length == 0) return 0;
  const [min, max] = Array.from(args).reduce(
    (acc: [number, number], v) => [Math.min(acc[0], v), Math.max(acc[1], v)],
    [args[0], args[0]],
  );
  return +(max - min).toFixed(3);
}
