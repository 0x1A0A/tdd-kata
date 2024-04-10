import { assert, assertFalse } from "https://deno.land/std/assert/mod.ts";
import { verifyAnagram } from "../../../src/checkio/electronics-station.ts";

Deno.test("Anagram", async (t) => {
  await t.step("verify anagram", () => {
    assert(verifyAnagram("a", "a"));
    assert(verifyAnagram("aa b", "a ba"));
    assertFalse(verifyAnagram("a", " ba"));
    assertFalse(verifyAnagram("aa b", " ba"));
  });

  await t.step("it should be case-insensitive", () => {
    assert(verifyAnagram("a", "A"));
    assertFalse(verifyAnagram("aAA", "A"));
    assert(verifyAnagram("aAA", "Aaa"));
  });
});
