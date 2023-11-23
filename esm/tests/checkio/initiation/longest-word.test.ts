import { assertEquals } from "https://deno.land/std/assert/mod.ts";
import { longestWord } from "../../../src/checkio/initiation.ts";

Deno.test("it can find longest word", () => {
  assertEquals(longestWord("word longer"), "longer");
  assertEquals(longestWord("w longer"), "longer");
  assertEquals(longestWord("w longer longest"), "longest");
  assertEquals(longestWord("longest longer long"), "longest");
  assertEquals(longestWord("long word hi"), "long");
});
