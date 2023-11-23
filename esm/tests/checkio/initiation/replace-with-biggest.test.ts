import { assertEquals } from "https://deno.land/std/assert/mod.ts";
import { replaceWithBiggest } from "../../../src/checkio/initiation.ts";

Deno.test("it replace itself with biggest number on the right", () => {
  assertEquals(replaceWithBiggest([1, 18, 4, 3, 6, 1]), [
    18,
    6,
    6,
    6,
    1,
    -1,
  ]);
});
