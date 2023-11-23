import { assert, assertFalse } from "https://deno.land/std/assert/mod.ts";
import { isometricStrings } from "../../../src/checkio/electronics-station.ts";

Deno.test("check if char in string a is unique to char in string b", () => {
  assert(isometricStrings("add", "foo"));
  assertFalse(isometricStrings("add", "foa"));
});
