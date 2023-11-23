import { assertEquals } from "https://deno.land/std/assert/mod.ts";
import { longestSubstr } from "../../../src/checkio/initiation.ts";

Deno.test("abc return 3", () => {
  assertEquals(longestSubstr("abc"), 3);
});

Deno.test("empty return 0", () => {
  assertEquals(longestSubstr(""), 0);
});

Deno.test("only count for consicutive", () => {
  assertEquals(longestSubstr("aaaaab"), 2);
  assertEquals(longestSubstr("abccbaxxx"), 4);
  assertEquals(longestSubstr("dvdf"), 3);
});
