import { assertEquals } from "https://deno.land/std/assert/mod.ts";
import { longestCommonPrefix } from "../../../src/checkio/initiation.ts";

Deno.test("LCP", async (t) => {
  await t.step("return whole string if only one string provided", () => {
    assertEquals(longestCommonPrefix(["hello"]), "hello");
  });
  await t.step("return empty string when no string provided", () => {
    assertEquals(longestCommonPrefix([""]), "");
    assertEquals(longestCommonPrefix([]), "");
  });
  await t.step("find common prefix", () => {
    assertEquals(longestCommonPrefix(["hello", "hell"]), "hell");
    assertEquals(longestCommonPrefix(["hello", "hell", "home"]), "h");
  });
  await t.step("return empty string if no common prefix at all", () => {
    assertEquals(longestCommonPrefix(["hello", "hell", "world", "angel"]), "");
  });
});
