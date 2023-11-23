import { assertEquals } from "https://deno.land/std/assert/mod.ts";
import { compress } from "../../../src/checkio/blizzard.ts";

Deno.test("reduce all element in list to no dupe after", () => {
  assertEquals(compress([1, 1, 1, 1, 1]), [1]);
  assertEquals(compress([1, 1, 2, 5, 6]), [1, 2, 5, 6]);
});
