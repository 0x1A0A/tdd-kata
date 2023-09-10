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

  if (target_comp.length != input_comp.length ) return false;

  const wrong = target_comp.some((v,index)=> v[1] > input_comp[index][1]);
  const repeat = target_comp.some((v,index)=> v[1] != input_comp[index][1]);

  return wrong ? false : repeat;
}
