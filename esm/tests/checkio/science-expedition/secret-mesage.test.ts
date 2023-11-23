import { assertEquals } from "https://deno.land/std/assert/mod.ts";
import { findMessage } from "../../../src/checkio/science-expidition.ts";

Deno.test("filter only Capital letter", () => {
  assertEquals(findMessage("Hello I am"), "HI");
  assertEquals(findMessage("How are you? Eh, ok. Low or Lower? "), "HELL");
});
