export function longPressed(target: string, input: string): boolean {
  const compress = (s: string) => {
    const pattern: [string, number][] = [];
    let i = 0;
    let now: [string, number] = ["", 0];
    while (i < s.length) {
      if (!now[0]) now = [s[i], 0];
      if (now[0] != s[i]) {
        pattern.push(now);
        now = [s[i], 0];
      }
      if (now[0] == s[i]) now[1]++;
      i++;
    }
    pattern.push(now);
    return pattern;
  };
  const target_comp = compress(target);
  const input_comp = compress(input);

  if (target_comp.length != input_comp.length) return false;

  const wrong = target_comp.some((v, index) => v[1] > input_comp[index][1]);
  const repeat = target_comp.some((v, index) => v[1] != input_comp[index][1]);

  return wrong ? false : repeat;
}

export function sumLight(els: Date[], start?: Date): number {
  let diff = 0,
    i = 1;
  if (start) {
    while (els.length) {
      if (+start >= +els[0] && +start <= +els[1]) {
        els[0] = start;
        break;
      }
      els.splice(0, 2);
    }
  }

  while (i < els.length) {
    diff += +els[i] - +els[i - 1];
    i += 2;
  }
  return diff / 1000;
}
