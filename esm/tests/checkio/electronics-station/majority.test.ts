import { assert, assertFalse } from "https://deno.land/std/assert/mod.ts";
import { isMajority } from "../../../src/checkio/electronics-station.ts";

Deno.test("Is Majority", async (t) => {
  await t.step("return true if have more true element than false", () => {
    assert(isMajority([true, true, false]));
    assert(isMajority([true, true, false, true, true, false]));
  });

  await t.step(
    "return false if have more false or equal element than true",
    () => {
      assertFalse(isMajority([false, true, false]));
      assertFalse(isMajority([true, true, false, true, false, false]));
    },
  );
});
