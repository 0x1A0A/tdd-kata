import { describe, expect, test } from "vitest";
import { adjacentLetters } from "../../src/checkio/blizzard";

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
