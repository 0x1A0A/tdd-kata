import { assertEquals } from "https://deno.land/std/assert/mod.ts";
import { commonWords } from "../../../src/checkio/science-expidition.ts";

Deno.test("find common word", () => {
  assertEquals(commonWords("a", "a"), "a");
  assertEquals(commonWords("", "a,b"), "");
  assertEquals(commonWords("hello,world,tnt", "tnt,world"), "tnt,world");
  assertEquals(commonWords("a,b,c,d,f", "b,f,d"), "b,d,f");
});
