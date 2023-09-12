import { describe, expect, test } from "vitest";
import {
  chunkingBy,
  digitMultip,
  isMajority,
  isometricStrings,
  mostWanted,
  removeAfterK,
  sortByExt,
  verifyAnagram,
  wordsOrder,
} from "../../src/checkio/electronics-station";

describe("Verify anagram", () => {
  test("verify anagram", () => {
    expect(verifyAnagram("a", "a")).toBeTruthy();
    expect(verifyAnagram("aa b", "a ba")).toBeTruthy();
    expect(verifyAnagram("a", " ba")).toBeFalsy();
    expect(verifyAnagram("aa b", " ba")).toBeFalsy();
  });
  test("it should be case-insensitive", () => {
    expect(verifyAnagram("a", "A")).toBeTruthy();
    expect(verifyAnagram("aAA", "A")).toBeFalsy();
    expect(verifyAnagram("aAA", "Aaa")).toBeTruthy();
  });
});

describe("Sort by file extension", () => {
  test("can sort string by file extension", () => {
    expect(sortByExt(["1.cad", "1.bat", "1.aa"])).toEqual([
      "1.aa",
      "1.bat",
      "1.cad",
    ]);
    expect(sortByExt(["1.cad", "1.bat", "1.aa", ".bat"])).toEqual([
      ".bat",
      "1.aa",
      "1.bat",
      "1.cad",
    ]);
    expect(sortByExt(["1.cad", "1.bat", "1.aa", ".aa.doc"])).toEqual([
      "1.aa",
      "1.bat",
      "1.cad",
      ".aa.doc",
    ]);
    expect(sortByExt([".a", ".a", ".a"])).toEqual([".a", ".a", ".a"]);
  });
  test("if extension is the same sort by name", () => {
    expect(sortByExt(["b.a", "c.a", "a.a"])).toEqual(["a.a", "b.a", "c.a"]);
  });
  test("sort file with no name first", () => {
    expect(sortByExt([".a", "c.a", "a.a"])).toEqual([".a", "a.a", "c.a"]);
    expect(sortByExt(["c.a", ".a", "a.a"])).toEqual([".a", "a.a", "c.a"]);
  });
});

describe("When K is enough", () => {
  test("only allow for k occcurence of each element", () => {
    expect(removeAfterK([1, 1, 1, 1, 1], 2)).toEqual([1, 1]);
    expect(removeAfterK([1, 1, 1, 1, 1], 4)).toEqual([1, 1, 1, 1]);
    expect(removeAfterK([1, 2, 2, 3, 4], 1)).toEqual([1, 2, 3, 4]);
  });
});

describe("Words order", () => {
  test("words appear in order", () => {
    expect(wordsOrder("a b c d", ["a", "b"])).toBeTruthy();
    expect(wordsOrder("a b c d", ["b", "a"])).toBeFalsy();
    expect(wordsOrder("hi world am here", ["world", "here"])).toBeTruthy();
  });
  test("return false if sequence contain the same word", () => {
    expect(wordsOrder("hi world am here", ["world", "world"])).toBeFalsy();
  });
});

describe("Majority", () => {
  test("return true if have more true element than false", () => {
    expect(isMajority([true, true, false])).toBeTruthy();
    expect(isMajority([true, true, false, true, true, false])).toBeTruthy();
  });
  test("return false if have more false or equal element than true", () => {
    expect(isMajority([false, true, false])).toBeFalsy();
    expect(isMajority([true, true, false, true, false, false])).toBeFalsy();
  });
});

describe("Chunk", () => {
  test("break array into chunk", () => {
    expect(chunkingBy([], 3)).toEqual([]);
    expect(chunkingBy([1, 2, 3], 2)).toEqual([[1, 2], [3]]);
    expect(chunkingBy([1, 2, 3, 4, 5], 3)).toEqual([
      [1, 2, 3],
      [4, 5],
    ]);
  });
});

describe("Most wanted", () => {
  test("find most freqence word", () => {
    expect(mostWanted("hello world")).toEqual("l");
    expect(mostWanted("One")).toEqual("e");
    expect(mostWanted("")).toEqual("");
  });
});

describe("Isometric Strings", () => {
  test("check if char in string a is unique to char in string b", () => {
    expect(isometricStrings("add", "foo")).toBeTruthy();
    expect(isometricStrings("add", "foa")).toBeFalsy();
  });
});

describe("Digit multiplication", () => {
  test("multiply all digit in number", () => {
    expect(digitMultip(1211)).toEqual(2);
    expect(digitMultip(1234)).toEqual(24);
  });
  test("multiply all digit exclude '0'", () => {
    expect(digitMultip(1201)).toEqual(2);
    expect(digitMultip(0)).toEqual(0);
  });
});
