import { assertEquals } from "https://deno.land/std/assert/mod.ts";
import { allPermutation } from "../../../src/checkio/home.ts";

Deno.test("return same string if it only has one character", () => {
  assertEquals(allPermutation("a"), ["a"]);
});

Deno.test("return all string permutation", () => {
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

Deno.test("can handle string with the same element", () => {
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
