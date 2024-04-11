import { assertEquals } from "https://deno.land/std@0.211.0/assert/mod.ts";
import { makeLooper } from "../../src/codewars/loopers.ts";

Deno.test("Lazy repeater", async (t) => {
  const abc = makeLooper("abc");
  await t.step("looper", () => {
    assertEquals(abc(), "a");
    assertEquals(abc(), "b");
    assertEquals(abc(), "c");
    assertEquals(abc(), "a");
  });
});
