import { assertEquals } from "https://deno.land/std/assert/mod.ts";
import { acceptablePasswordVI } from "../../../src/checkio/initiation.ts";

Deno.test("it always fail when the text contain 'password' in any case", () => {
  assertEquals(acceptablePasswordVI("aaaaaaaaaaaaaaaaaaaa"), false);
  assertEquals(acceptablePasswordVI("aaaaaaaaaaaaaa1234"), true);
});
