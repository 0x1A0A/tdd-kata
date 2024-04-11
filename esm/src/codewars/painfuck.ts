export function interpreter(
  code: string,
  iterations: number,
  width: number,
  height: number,
): string {
  const table = [
    ...new Array(height).fill([]).map(() => new Array(width).fill(0)),
  ];

  const move: { [k: string]: number[] } = {
    n: [-1, 0],
    e: [0, 1],
    s: [1, 0],
    w: [0, -1],
  };

  const position = [0, 0];
  let current = -1;
  let iter = 0;
  for (let i = 0; i < code.length; ++i, ++iter) {
    if (iter >= iterations) break;
    switch (code[i]) {
      case "*": {
        table[position[0]][position[1]] ^= 1;
        current = table[position[0]][position[1]];
        break;
      }
      case "[": {
        let skip = 1;
        while (!current && skip) {
          ++i;
          skip -= code[i] === "]" ? 1 : 0;
          skip += code[i] === "[" ? 1 : 0;
        }
        break;
      }
      case "]": {
        let skip = 1;
        while (current && skip) {
          --i;
          skip -= code[i] === "]" ? -1 : 0;
          skip += code[i] === "[" ? -1 : 0;
        }
        break;
      }
      default: {
        if (!Object.keys(move).includes(code[i])) {
          iter--;
          break;
        }
        position[0] = (position[0] + move[code[i]][0] + height) % height;
        position[1] = (position[1] + move[code[i]][1] + width) % width;
        current = table[position[0]][position[1]];
        break;
      }
    }
  }

  return table.map((e) => e.join("")).join("\r\n");
}
