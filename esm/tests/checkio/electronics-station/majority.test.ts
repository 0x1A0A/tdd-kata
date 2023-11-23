import { assert, assertFalse } from "https://deno.land/std/assert/mod.ts";
import { isMajority } from "../../../src/checkio/electronics-station.ts";

Deno.test("return true if have more true element than false", () => {
  assert(isMajority([true, true, false]));
  assert(isMajority([true, true, false, true, true, false]));
});

Deno.test("return false if have more false or equal element than true", () => {
  assertFalse(isMajority([false, true, false]));
  assertFalse(isMajority([true, true, false, true, false, false]));
});
