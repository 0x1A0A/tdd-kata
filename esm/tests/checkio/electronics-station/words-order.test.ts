import { assert, assertFalse } from "https://deno.land/std/assert/mod.ts";
import { wordsOrder } from "../../../src/checkio/electronics-station.ts";

Deno.test("Words Order", async (t) => {
  await t.step("words appear in order", () => {
    assert(wordsOrder("a b c d", ["a", "b"]));
    assertFalse(wordsOrder("a b c d", ["b", "a"]));
    assert(wordsOrder("hi world am here", ["world", "here"]));
  });

  await t.step("return false if sequence contain the same word", () => {
    assertFalse(wordsOrder("hi world am here", ["world", "world"]));
  });
});
