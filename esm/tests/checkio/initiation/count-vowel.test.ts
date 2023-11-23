import { assertEquals } from "https://deno.land/std/assert/mod.ts";
import { countVowels } from "../../../src/checkio/initiation.ts";

Deno.test("it can count vowel", () => {
  assertEquals(countVowels("aeiou"), 5);
  assertEquals(countVowels("aaeiou"), 6);
});
