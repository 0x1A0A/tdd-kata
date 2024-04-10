import { assertEquals } from "https://deno.land/std/assert/mod.ts";
import { translate } from "../../../src/checkio/science-expidition.ts";

Deno.test("Translate", async (t) => {
  await t.step("after consonant is a ramdom vowel", () => {
    assertEquals(translate("Ha"), "H");
    assertEquals(translate("Ha Ko"), "H K");
    assertEquals(translate(" Ha Ko"), " H K");
  });

  await t.step("after vowel is two random vowel", () => {
    assertEquals(translate("aio"), "a");
    assertEquals(translate("aiouoo"), "au");
    assertEquals(translate("aio uoo"), "a u");
  });

  await t.step("translate bird language", () => {
    assertEquals(translate("Heeiolilooai"), "Hello");
    assertEquals(translate("hoooowe yyyooouuu duoooiiine"), "how you doin");
  });
});
