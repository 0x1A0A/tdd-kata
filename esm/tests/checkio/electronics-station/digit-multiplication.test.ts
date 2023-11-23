import { assertEquals } from "https://deno.land/std/assert/mod.ts";
import { digitMultip } from "../../../src/checkio/electronics-station.ts";

Deno.test("multiply all digit in number", () => {
  assertEquals(digitMultip(1211), 2);
  assertEquals(digitMultip(1234), 24);
});

Deno.test("multiply all digit exclude '0'", () => {
  assertEquals(digitMultip(1201), 2);
  assertEquals(digitMultip(0), 0);
});
