import { assertEquals } from "https://deno.land/std/assert/mod.ts";
import { longestSubstr } from "../../../src/checkio/initiation.ts";

Deno.test("LCP", async (t) => {
  await t.step("abc return 3", () => {
    assertEquals(longestSubstr("abc"), 3);
  });

  await t.step("empty return 0", () => {
    assertEquals(longestSubstr(""), 0);
  });

  await t.step("only count for consicutive", () => {
    assertEquals(longestSubstr("aaaaab"), 2);
    assertEquals(longestSubstr("abccbaxxx"), 4);
    assertEquals(longestSubstr("dvdf"), 3);
  });
});
