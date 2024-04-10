import { assertEquals } from "https://deno.land/std/assert/mod.ts";
import { adjacentLetters } from "../../../src/checkio/blizzard.ts";

Deno.test("adjacent letters", async (t) => {
  await t.step("remove same adjacent letters", () => {
    assertEquals(adjacentLetters("abb"), "a");
    assertEquals(adjacentLetters("aab"), "b");
  });

  await t.step("remove same adjacent letters until no more", () => {
    assertEquals(adjacentLetters("abba"), "");
    assertEquals(adjacentLetters("hello world"), "heo world");
  });
});
