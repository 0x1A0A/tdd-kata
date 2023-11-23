import { assert, assertFalse } from "https://deno.land/std/assert/mod.ts";
import { verifyAnagram } from "../../../src/checkio/electronics-station.ts";

Deno.test("verify anagram", () => {
  assert(verifyAnagram("a", "a"));
  assert(verifyAnagram("aa b", "a ba"));
  assertFalse(verifyAnagram("a", " ba"));
  assertFalse(verifyAnagram("aa b", " ba"));
});

Deno.test("it should be case-insensitive", () => {
  assert(verifyAnagram("a", "A"));
  assertFalse(verifyAnagram("aAA", "A"));
  assert(verifyAnagram("aAA", "Aaa"));
});
