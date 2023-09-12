import { describe, expect, test } from "vitest";
import { adjacentLetters, birthdayParty, compress } from "../../src/checkio/blizzard";

describe("Adjacent letters", () => {
  test("remove same adjacent letters", () => {
    expect(adjacentLetters("abb")).toEqual("a");
    expect(adjacentLetters("aab")).toEqual("b");
  });
  test("remove same adjacent letters until no more", () => {
    expect(adjacentLetters("abba")).toEqual("");
    expect(adjacentLetters("hello world")).toEqual("heo world");
  });
});

describe("Birth day party", () => {
  test("if it weekend I can organize party that day", () => {
    expect(birthdayParty(new Date(2022, 0, 8))).toEqual(new Date(2022, 0, 8));
    expect(birthdayParty(new Date(2022, 0, 9))).toEqual(new Date(2022, 0, 9));
  });
  test("I should move to closest week end but not before my birth day", () => {
    expect(birthdayParty(new Date(2022, 0, 5))).toEqual(new Date(2022, 0, 8));
    expect(birthdayParty(new Date(2022, 2, 30))).toEqual(new Date(2022, 3, 2));
  });
});

describe("Compress list", () => {
  test("reduce all element in list to no dupe after", () => {
    expect(compress([1, 1, 1, 1, 1])).toEqual([1]);
    expect(compress([1, 1, 2, 5, 6])).toEqual([1,2,5,6]);
  });
});
