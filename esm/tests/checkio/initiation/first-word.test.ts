import { assertEquals } from "https://deno.land/std/assert/mod.ts";
import { firstWord } from "../../../src/checkio/initiation.ts";

Deno.test("Example", () => {
  assertEquals(firstWord("Hello world"), "Hello");
  assertEquals(firstWord("a word"), "a");
  assertEquals(firstWord("greeting from CheckiO Planet"), "greeting");
  assertEquals(firstWord("hi"), "hi");
});
