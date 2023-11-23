import { assertEquals } from "https://deno.land/std/assert/mod.ts";
import { removeAfterK } from "../../../src/checkio/electronics-station.ts";

Deno.test("only allow for k occcurence of each element", () => {
  assertEquals(removeAfterK([1, 1, 1, 1, 1], 2), [1, 1]);
  assertEquals(removeAfterK([1, 1, 1, 1, 1], 4), [1, 1, 1, 1]);
  assertEquals(removeAfterK([1, 2, 2, 3, 4], 1), [1, 2, 3, 4]);
});
