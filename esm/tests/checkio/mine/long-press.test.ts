import { assert, assertFalse } from "https://deno.land/std/assert/mod.ts";
import { longPressed } from "../../../src/checkio/mine.ts";

Deno.test("detect long press", () => {
  assertFalse(longPressed("test", "test"));
  assert(longPressed("test", "teest"));
  assert(
    longPressed("welcome to checkio", "weeeelcome to cccheckio"),
  );
  assertFalse(longPressed("welcome boss!", "welcooome bos!!"));
  assertFalse(longPressed("welcome boss!", "welcooome bos!! yay!"));
});
