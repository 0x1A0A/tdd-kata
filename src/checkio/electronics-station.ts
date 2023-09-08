type Mapped = { [key: string]: number };

function create_number_map(acc: Mapped, n: number): Mapped {
  if (!(n in acc)) acc[n] = 0;
  acc[n]++;
  return acc;
}

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

export function sortByExt(arr: string[]): string[] {
  const extract_file_name = (filename: string) => [
    filename.substring(0, filename.lastIndexOf(".")),
    filename.substring(filename.lastIndexOf(".") + 1),
  ];
  return arr.sort((a, b) => {
    const [aname, aex] = extract_file_name(a);
    const [bname, bex] = extract_file_name(b);

    if (!aname || !bname) {
      if (aname) return 1;
      if (bname) return -1;
    }

    if (aex > bex) return 1;
    if (aex < bex) return -1;

    if (aname > bname) return 1;
    if (aname < bname) return -1;

    return 0;
  });
}

export function removeAfterK(arr: number[], k: number): number[] {
  const map = arr.reduce(create_number_map, {});
  Object.keys(map).forEach((key) => (map[key] = Math.min(map[key], k)));

  return arr.filter((v) => {
    if (map[v]-- > 0) return 1;
    return 0;
  });
}

export function wordsOrder(str: string, arr: string[]): boolean {
  const words = str.split(" ");
  while (words.length && arr.length) {
    const word = words.shift();
    const target = arr.shift();
    if (target && arr.includes(target)) return false;
    if (target && word != target) arr.unshift(target);
  }
  return arr.length == 0;
}

export function isMajority(arr: boolean[]): boolean {
  return arr.reduce((acc, v) => acc + +v, 0) > arr.length / 2;
}

export function chunkingBy(arr: number[], size: number): number[][] {
  let chunk: number[][] = [];
  let i = 0;

  while (i < arr.length) {
    chunk.push(arr.slice(i, i + size));
    i += size;
  }

  return chunk;
}

export function mostWanted(str: string): string {
  const char = (s: string) => s.charCodeAt(0);
  const isLetter = (s: string) => char(s) >= char("a") && char(s) <= char("z");
  const map: { [key: string]: number } = str
    .split("")
    .reduce((acc: { [key: string]: number }, s) => {
      const lower = s.toLowerCase();
      if (isLetter(lower)) {
        if (!(lower in acc)) acc[lower] = 0;
        acc[lower]++;
      }
      return acc;
    }, {});

  const [c, v] = Object.entries(map).reduce(
    (acc: [string, number], v) => {
      if (v[1] > acc[1]) acc = [v[0], v[1]];
      if (v[1] == acc[1] && v[0] < acc[0]) acc = [v[0], v[1]];

      return acc;
    },
    ["", 0],
  );

  return !v ? "" : c;
}

export function isometricStrings(a: string, b: string): boolean {
  let map: { [k: string]: string } = {};
  const arr_a = a.split("");
  const arr_b = b.split("");
  return arr_a.every((c, index) => {
    if (!(c in map)) map[c] = arr_b[index];
    return map[c] == arr_b[index];
  });
}
