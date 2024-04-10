import { assertEquals } from "https://deno.land/std/assert/mod.ts";
import { splitPair } from "../../../src/checkio/initiation.ts";

Deno.test("LCP", async (t) => {
  await t.step("it split string into pairs", () => {
    assertEquals(splitPair("abcd"), ["ab", "cd"]);
  });

  await t.step(
    "it split string into pairs and at _ to last pair if is single",
    () => {
      assertEquals(splitPair("abcde"), ["ab", "cd", "e_"]);
    },
  );

  await t.step("it should return empty array when text is empty", () => {
    assertEquals(splitPair(""), []);
  });
});
