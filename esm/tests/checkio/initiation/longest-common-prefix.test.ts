import { assertEquals } from "https://deno.land/std/assert/mod.ts";
import { longestCommonPrefix } from "../../../src/checkio/initiation.ts";

Deno.test("return whole string if only one string provided", () => {
  assertEquals(longestCommonPrefix(["hello"]), "hello");
});
Deno.test("return empty string when no string provided", () => {
  assertEquals(longestCommonPrefix([""]), "");
  assertEquals(longestCommonPrefix([]), "");
});
Deno.test("find common prefix", () => {
  assertEquals(longestCommonPrefix(["hello", "hell"]), "hell");
  assertEquals(longestCommonPrefix(["hello", "hell", "home"]), "h");
});
Deno.test("return empty string if no common prefix at all", () => {
  assertEquals(longestCommonPrefix(["hello", "hell", "world", "angel"]), "");
});
