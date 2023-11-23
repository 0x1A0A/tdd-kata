import { assertEquals } from "https://deno.land/std/assert/mod.ts";
import { notOrder } from "../../../src/checkio/ice-base.ts";

Deno.test("count the number of element that not in their place", () => {
  assertEquals(notOrder([1, 2, 3]), 0);
  assertEquals(notOrder([1, 3, 2]), 2);
  assertEquals(notOrder([1, 1, 1]), 0);
  assertEquals(notOrder([1, 3, 1, 2, 4]), 3);
});
