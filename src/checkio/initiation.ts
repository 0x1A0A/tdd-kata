const char = (c: string) => c.charCodeAt(0);
const isNumber = (c: string) => char(c) >= char("0") && char(c) <= char("9");

const passwordRule = [
  (s: string) => s.length > 6,
  (s: string) => s.split("").some(isNumber),
  (s: string) => s.split("").every(isNumber),
  (s: string) => s.length > 9,
  (s: string) => s.match(/password/gi) != null,
  (s: string) =>
    Object.keys(
      s.split("").reduce((acc: { [key: string]: boolean }, c) => {
        acc[c] = true;
        return acc;
      }, {}),
    ).length >= 3,
];

export function acceptablePassword(text: string) {
  return passwordRule[0](text) && passwordRule[1](text);
}

export function acceptablePasswordIm(text: string) {
  if (passwordRule[2](text)) return false;
  return passwordRule[0](text) && passwordRule[1](text);
}

export function backwardString(str: string) {
  return str.split("").reverse().join("");
}

export function correctSentence(text: string): string {
  return `${text[0].toUpperCase()}${text.substring(1)}${
    text.endsWith(".") ? "" : "."
  }`;
}

export function firstWord(text: string) {
  return text.split(" ").shift();
}

export function longestWord(text: string) {
  return text
    .split(" ")
    .reduce(
      (acc: string, word: string) => (acc.length >= word.length ? acc : word),
      "",
    );
}

export function replaceFirst(numbers: number[]) {
  const array = Array.from(numbers);
  const first = array.shift();
  if (first) array.push(first);
  return array;
}

export function maxDigit(num: number) {
  let max = 0;
  while (num) {
    max = num % 10 > max ? num % 10 : max;
    num = Math.floor(num / 10);
  }
  return max;
}

export function splitPair(text: string) {
  const pair = text.split("").reduce((acc: string[], c: string) => {
    const last = acc.pop();
    if (!last) acc.push(c);
    else {
      if (last.length == 2) {
        acc.push(last);
        acc.push(c);
      } else {
        acc.push(last + c);
      }
    }
    return acc;
  }, []);
  if (pair.length > 0)
    pair[pair.length - 1] += pair[pair.length - 1].length == 1 ? "_" : "";
  return pair;
}

export function beginningZeros(a: string) {
  let count = 0;
  a.split("").every((n) => {
    if (n === "0") {
      ++count;
      return true;
    }
    return false;
  });
  return count;
}

export function endingZeros(a: number) {
  let count = 0;
  while (a) {
    if (a % 10 == 0) ++count;
    else break;
    a = Math.floor(a / 10);
  }
  return count;
}

export function acceptablePasswordIV(text: string) {
  if (passwordRule[3](text)) return true;
  if (passwordRule[2](text)) return false;
  return passwordRule[0](text) && passwordRule[1](text);
}

export function acceptablePasswordV(text: string) {
  if (passwordRule[4](text)) return false;
  if (passwordRule[3](text)) return true;
  if (passwordRule[2](text)) return false;
  return passwordRule[0](text) && passwordRule[1](text);
}

export function acceptablePasswordVI(text: string) {
  if (!passwordRule[5](text)) return false;
  if (passwordRule[4](text)) return false;
  if (passwordRule[3](text)) return true;
  if (passwordRule[2](text)) return false;
  return passwordRule[0](text) && passwordRule[1](text);
}

export function countVowels(s: string) {
  const VOWELS = "aeiou".split("");
  return s
    .toLowerCase()
    .split("")
    .reduce((acc, v) => acc + +VOWELS.some((s) => s === v), 0);
}

export function sortExceptZero(array: number[]) {
  const sorted = array.filter((v) => v).sort((a, b) => +a - +b);
  return array.map((v) => (v ? sorted.shift() : v));
}

export function longestSubstr(str: string): number {
  let queue: string[] = [];
  let max = 0;
  str.split("").forEach((s) => {
    while (queue.includes(s)) queue.shift();
    queue.push(s);
    max = Math.max(max, queue.length);
  });
  return Math.max(max, queue.length);
}

export function longestCommonPrefix(texts: string[]): string {
  let prefix = texts[0];
  let i = 1;
  while (texts[i]) {
    let c = 0;
    while (texts[i][c]) {
      if (texts[i][c] != prefix[c]) break;
      c++;
    }
    prefix = prefix.substring(0, c);
    i++;
  }
  return prefix || "";
}
