import { assertEquals } from "https://deno.land/std/assert/mod.ts";
import { sortExceptZero } from "../../../src/checkio/initiation.ts";

Deno.test("can sort in ascending order", () => {
  assertEquals(sortExceptZero([5, 4, 3, 1]), [1, 3, 4, 5]);
  assertEquals(sortExceptZero([5, 0, 3, 1]), [1, 0, 3, 5]);
  assertEquals(sortExceptZero([5, 6, 0, 7, 10]), [5, 6, 0, 7, 10]);
});
