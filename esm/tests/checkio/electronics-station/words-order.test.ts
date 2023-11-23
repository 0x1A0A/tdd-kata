import { assert, assertFalse } from "https://deno.land/std/assert/mod.ts";
import { wordsOrder } from "../../../src/checkio/electronics-station.ts";

Deno.test("words appear in order", () => {
  assert(wordsOrder("a b c d", ["a", "b"]));
  assertFalse(wordsOrder("a b c d", ["b", "a"]));
  assert(wordsOrder("hi world am here", ["world", "here"]));
});

Deno.test("return false if sequence contain the same word", () => {
  assertFalse(wordsOrder("hi world am here", ["world", "world"]));
});
