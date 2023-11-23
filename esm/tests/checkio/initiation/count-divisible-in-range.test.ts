import { assertEquals } from "https://deno.land/std/assert/mod.ts";
import { countDivisible } from "../../../src/checkio/initiation.ts";

Deno.test("find how many number is divisible in the given range", () => {
  assertEquals(countDivisible(4, 2), 2);
  assertEquals(countDivisible(3, 2), 1);
  assertEquals(countDivisible(15, 4), 3);
});
