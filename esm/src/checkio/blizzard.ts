export function adjacentLetters(line: string): string {
  const adjacent = (arr: string[]): number => {
    let i = 1;
    while (i < arr.length) {
      if (arr[i] == arr[i - 1]) return i;
      ++i;
    }
    return 0;
  };
  const result = line.split("");
  let adj = adjacent(result);
  while (adj) {
    result.splice(adj, 1);
    result.splice(adj - 1, 1);
    adj = adjacent(result);
  }
  return result.join("");
}

export function birthdayParty(date: Date): Date {
  const day = date.getDay();
  if (day == 6 || day == 0) return date;
  return new Date(+date + (6 - day) * 3600 * 24 * 1000);
}

export function compress(arr: number[]): number[] {
  return arr.reduce((acc: number[], e) => {
    if (acc[acc.length - 1] != e) acc.push(e);
    return acc;
  }, []);
}
