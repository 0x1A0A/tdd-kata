import { assertEquals } from "https://deno.land/std/assert/mod.ts";
import { acceptablePasswordV } from "../../../src/checkio/initiation.ts";

Deno.test("it always fail when the text contain 'password' in any case", () => {
  assertEquals(acceptablePasswordV("abcdefghtijsdPassword"), false);
  assertEquals(acceptablePasswordV("a0----bcdefghtijsdPassWorD"), false);
});
