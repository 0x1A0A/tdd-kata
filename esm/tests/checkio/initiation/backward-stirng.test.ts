import { assertEquals } from "https://deno.land/std/assert/mod.ts";
import { backwardString } from "../../../src/checkio/initiation.ts";

Deno.test("it should reverse a string", () => {
  assertEquals(backwardString("hello"), "olleh");
});
