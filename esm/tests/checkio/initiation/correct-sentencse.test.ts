import { correctSentence } from "../../../src/checkio/initiation.ts";
import { assert, assertEquals } from "https://deno.land/std/assert/mod.ts";

Deno.test("it should make first letter an uppercase", () => {
  assertEquals(correctSentence("greeting, hi")[0], "G");
});

Deno.test("end with period (.)", () => {
  assert(correctSentence("greeting, hi").endsWith("."));
});

Deno.test("should correct sentence", () => {
  assertEquals(correctSentence("greeting, New York."), "Greeting, New York.");
});
