import { describe, expect, test } from "vitest";
import {
  removeAfterK,
  sortByExt,
  verifyAnagram,
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
