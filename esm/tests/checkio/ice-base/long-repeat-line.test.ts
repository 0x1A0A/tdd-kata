import { assertEquals } from "https://deno.land/std/assert/mod.ts";
import { longRepeat } from "../../../src/checkio/ice-base.ts";

Deno.test("find longest repeat character", () => {
  assertEquals(longRepeat(""), 0);
  assertEquals(longRepeat("a"), 1);
  assertEquals(longRepeat("aaiaaaa"), 4);
});
