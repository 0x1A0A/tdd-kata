import { correctSentence } from "../../../src/checkio/initiation.ts";
import { assert, assertEquals } from "https://deno.land/std/assert/mod.ts";

Deno.test("Correct sentence", async (t) => {
  await t.step("it should make first letter an uppercase", () => {
    assertEquals(correctSentence("greeting, hi")[0], "G");
  });

  await t.step("end with period (.)", () => {
    assert(correctSentence("greeting, hi").endsWith("."));
  });

  await t.step("should correct sentence", () => {
    assertEquals(correctSentence("greeting, New York."), "Greeting, New York.");
  });
});
