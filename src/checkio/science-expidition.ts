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
