import { assertEquals } from "https://deno.land/std/assert/mod.ts";
import { allPermutation } from "../../../src/checkio/home.ts";

Deno.test("Premutation", async (t) => {
  await t.step("return same string if it only has one character", () => {
    assertEquals(allPermutation("a"), ["a"]);
  });

  await t.step("return all string permutation", () => {
    assertEquals(allPermutation("ab"), ["ab", "ba"]);
    assertEquals(allPermutation("abc"), [
      "abc",
      "acb",
      "bac",
      "bca",
      "cab",
      "cba",
    ]);
  });

  await t.step("can handle string with the same element", () => {
    assertEquals(allPermutation("aa"), ["aa", "aa"]);
    assertEquals(allPermutation("aab"), [
      "aab",
      "aab",
      "aba",
      "aba",
      "baa",
      "baa",
    ]);
  });
});
