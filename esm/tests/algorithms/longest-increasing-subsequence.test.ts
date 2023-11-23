import { assertEquals } from "https://deno.land/std/assert/mod.ts";
import { LIS } from "../../src/algorithms/algorithms.ts";

Deno.test("Longest Increasing Subsequenec", () => {
  assertEquals(LIS([3, 1, 8, 2, 5]), 3);
  assertEquals(LIS([1, 2, 4, 3]), 3);
});
