export function makeLooper(str: string) {
  let i = 0;
  return () => str[i++ % str.length];
}
