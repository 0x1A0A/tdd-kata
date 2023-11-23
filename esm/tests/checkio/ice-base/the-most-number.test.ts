import { assertEquals } from "https://deno.land/std/assert/mod.ts";
import { mostNumber } from "../../../src/checkio/ice-base.ts";

Deno.test("find the highest diffence", () => {
  assertEquals(mostNumber(), 0);
  assertEquals(mostNumber(1, 2, 3, 4), 3);
  assertEquals(mostNumber(1, -2, -3, 4), 7);
  assertEquals(mostNumber(1, -2, -3, 4), 7);
  assertEquals(mostNumber(10.2, -2.2, 0, 1.1, 0.5), 12.4);
  assertEquals(mostNumber(-0.036, -0.11, -0.55, -64), 63.964);
});
