import { assertEquals } from "https://deno.land/std/assert/mod.ts";
import { chunkingBy } from "../../../src/checkio/electronics-station.ts";

Deno.test("break array into chunk", () => {
  assertEquals(chunkingBy([], 3), []);
  assertEquals(chunkingBy([1, 2, 3], 2), [[1, 2], [3]]);
  assertEquals(chunkingBy([1, 2, 3, 4, 5], 3), [
    [1, 2, 3],
    [4, 5],
  ]);
});
