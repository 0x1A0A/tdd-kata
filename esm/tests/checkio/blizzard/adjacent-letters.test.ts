import { assertEquals } from "https://deno.land/std/assert/mod.ts";
import { adjacentLetters } from "../../../src/checkio/blizzard.ts";

Deno.test("remove same adjacent letters", () => {
  assertEquals(adjacentLetters("abb"), "a");
  assertEquals(adjacentLetters("aab"), "b");
});

Deno.test("remove same adjacent letters until no more", () => {
  assertEquals(adjacentLetters("abba"), "");
  assertEquals(adjacentLetters("hello world"), "heo world");
});
