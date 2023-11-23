import { assertEquals } from "https://deno.land/std/assert/mod.ts";
import { moveZeros } from "../../../src/checkio/ice-base.ts";

Deno.test("if no zero then result is the same as input", () => {
  assertEquals(moveZeros([1, 2, 3]), [1, 2, 3]);
});

Deno.test("has zero then move it to the end", () => {
  assertEquals(moveZeros([1, 0, 2, 3]), [1, 2, 3, 0]);
  assertEquals(moveZeros([0, 0, 2, 3]), [2, 3, 0, 0]);
});
