export function pigIt(str: string) {
  return str.replace(/(\w)(\w*)/g, "$2$1ay");
}
