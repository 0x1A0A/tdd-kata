export function sumByType(arr: (string | number)[]) {
  return arr.reduce(
    (acc: [string, number], v: string | number) => {
      switch (typeof v) {
        case "string":
          acc[0] += v;
          break;
        case "number":
          acc[1] += Number(v);
      }
      return acc;
    },
    ["", 0],
  );
}

export function commonWords(line1: string, line2: string): string {
  const arr = [line1.split(","), line2.split(",")];
  return arr[0]
    .filter((a) => arr[1].includes(a))
    .sort()
    .join(",");
}

function char(s: string) {
  return s.charCodeAt(0);
}

function isUpper(c: string) {
  return char(c) >= char("A") && char(c) <= char("Z");
}

export function findMessage(message: string): string {
  return message.split("").filter(isUpper).join("");
}
