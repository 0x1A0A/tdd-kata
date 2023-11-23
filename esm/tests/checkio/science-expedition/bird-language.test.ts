import { assertEquals } from "https://deno.land/std/assert/mod.ts";
import { translate } from "../../../src/checkio/science-expidition.ts";

Deno.test("after consonant is a ramdom vowel", () => {
  assertEquals(translate("Ha"), "H");
  assertEquals(translate("Ha Ko"), "H K");
  assertEquals(translate(" Ha Ko"), " H K");
});

Deno.test("after vowel is two random vowel", () => {
  assertEquals(translate("aio"), "a");
  assertEquals(translate("aiouoo"), "au");
  assertEquals(translate("aio uoo"), "a u");
});

Deno.test("translate bird language", () => {
  assertEquals(translate("Heeiolilooai"), "Hello");
  assertEquals(translate("hoooowe yyyooouuu duoooiiine"), "how you doin");
});
