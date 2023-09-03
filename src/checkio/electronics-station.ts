export function verifyAnagram(a: string, b: string): boolean {
  let map: { [key: string]: number } = a
    .replaceAll(" ", "")
    .toLowerCase()
    .split("")
    .reduce((acc: { [key: string]: number }, v) => {
      if (!(v in acc)) acc[v] = 0;
      acc[v]++;
      return acc;
    }, {});
  b.replaceAll(" ", "")
    .toLowerCase()
    .split("")
    .forEach((v) => {
      if (!(v in map)) map[v] = 0;
      map[v]--;
    });
  return Object.values(map).every((v) => v == 0);
}
