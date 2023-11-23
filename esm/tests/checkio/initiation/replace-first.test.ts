import { assertEquals } from "https://deno.land/std/assert/mod.ts";
import { replaceFirst } from "../../../src/checkio/initiation.ts";

Deno.test("it shift number to the left", () => {
  assertEquals(replaceFirst([1, 2, 3, 4]), [2, 3, 4, 1]);
});
