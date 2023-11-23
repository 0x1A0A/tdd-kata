import { assertEquals } from "https://deno.land/std/assert/mod.ts";
import { sumLight } from "../../../src/checkio/mine.ts";

Deno.test("start the timer when we start watching", () => {
  assertEquals(
    sumLight(
      [new Date(2015, 0, 0, 0, 0, 0), new Date(2015, 0, 0, 0, 0, 0)],
      new Date(2015, 0, 0, 0, 0, 5),
    ),
    0,
  );

  assertEquals(
    sumLight(
      [new Date(2015, 0, 0, 0, 0, 0), new Date(2015, 0, 0, 0, 0, 10)],
      new Date(2015, 0, 0, 0, 0, 5),
    ),
    5,
  );
});
