interface IGoods {
  name: string;
  price: number;
}

export const biggerPrice = (n: number, goods: IGoods[]) => {
  return goods.sort((a, b) => b.price - a.price).slice(0, n);
};

export const betweenMarkers = (text: string, begin: string, end: string): string => {
  const expr = `(?:${begin || "^"})(?<target>.*)(?:${end || "$"})`;
  return (new RegExp(expr, "gi")).exec(text)?.[1] || "";
};
