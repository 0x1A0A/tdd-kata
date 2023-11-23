interface IGoods {
  name: string;
  price: number;
}

export const biggerPrice = (n: number, goods: IGoods[]) => {
  return goods.sort((a, b) => b.price - a.price).slice(0, n);
};

export const betweenMarkers = (
  text: string,
  begin: string,
  end: string,
): string => {
  const expr = `(?:${begin || "^"})(?<target>.*)(?:${end || "$"})`;
  return new RegExp(expr, "gi").exec(text)?.[1] || "";
};

export function allPermutation(str: string): string[] {
  if (str.length == 1) return [str];
  if (str.length == 2) return [str, `${str[1]}${str[0]}`];
  const arr: string[] = [];
  let i = 0;
  while (i < str.length) {
    arr.push(
      ...allPermutation(str.replace(str[i], "")).map(
        (s) => `${str[i]}${s}`,
      ),
    );
    ++i;
  }
  return arr.sort();
}
