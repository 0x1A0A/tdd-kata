import { assertEquals } from "https://deno.land/std/assert/mod.ts";
import { endingZeros } from "../../../src/checkio/initiation.ts";

Deno.test("it return number of trailing zero", () => {
  assertEquals(endingZeros(1), 0);
  assertEquals(endingZeros(1000), 3);
});
