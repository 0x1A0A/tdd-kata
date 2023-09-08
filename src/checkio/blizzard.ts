export function adjacentLetters(line: string): string {
  const adjacent = (arr: string[]): number => {
    let i = 1;
    while (i < arr.length) {
      if (arr[i] == arr[i - 1]) return i;
      ++i;
    }
    return 0;
  };
  let result = line.split("");
  let adj = adjacent(result);
  while (adj) {
    result.splice(adj, 1);
    result.splice(adj - 1, 1);
    adj = adjacent(result);
  }
  return result.join("");
}
