import { describe, expect, test } from "vitest";
import { verifyAnagram } from "../../src/checkio/electronics-station";

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
