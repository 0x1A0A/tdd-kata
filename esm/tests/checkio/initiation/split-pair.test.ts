import { assertEquals } from "https://deno.land/std/assert/mod.ts";
import { splitPair } from "../../../src/checkio/initiation.ts";

Deno.test("it split string into pairs", () => {
  assertEquals(splitPair("abcd"), ["ab", "cd"]);
});

Deno.test("it split string into pairs and at _ to last pair if is single", () => {
  assertEquals(splitPair("abcde"), ["ab", "cd", "e_"]);
});

Deno.test("it should return empty array when text is empty", () => {
  assertEquals(splitPair(""), []);
});
