import { assertEquals } from "https://deno.land/std/assert/mod.ts";
import { beginningZeros } from "../../../src/checkio/initiation.ts";

Deno.test("it return number of leading zero", () => {
  assertEquals(beginningZeros("0001"), 3);
  assertEquals(beginningZeros("1000"), 0);
});
