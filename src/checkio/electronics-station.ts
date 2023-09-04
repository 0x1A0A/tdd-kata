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
