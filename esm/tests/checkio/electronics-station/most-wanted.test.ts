import { assertEquals } from "https://deno.land/std/assert/mod.ts";
import { mostWanted } from "../../../src/checkio/electronics-station.ts";

Deno.test("find most freqence word", () => {
  assertEquals(mostWanted("hello world"), "l");
  assertEquals(mostWanted("One"), "e");
  assertEquals(mostWanted(""), "");
});
