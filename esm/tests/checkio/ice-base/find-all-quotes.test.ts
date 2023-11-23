import { assertEquals } from "https://deno.land/std/assert/mod.ts";
import { findQuotes } from "../../../src/checkio/ice-base.ts";

Deno.test('find string inside of "', () => {
  assertEquals(findQuotes("Hi"), []);
  assertEquals(findQuotes('"Hi" not interest "me"'), ["Hi", "me"]);
});
