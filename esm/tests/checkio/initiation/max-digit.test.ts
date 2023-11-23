import { assertEquals } from "https://deno.land/std/assert/mod.ts";
import { maxDigit } from "../../../src/checkio/initiation.ts";

Deno.test("it return max digit from number", () => {
  assertEquals(maxDigit(6235), 6);
  assertEquals(maxDigit(1000), 1);
});
