import { assertEquals } from "https://deno.land/std/assert/mod.ts";
import { birthdayParty } from "../../../src/checkio/blizzard.ts";

Deno.test("if it weekend I can organize party that day", () => {
  assertEquals(birthdayParty(new Date(2022, 0, 8)), new Date(2022, 0, 8));
  assertEquals(birthdayParty(new Date(2022, 0, 9)), new Date(2022, 0, 9));
});

Deno.test("I should move to closest week end but not before my birth day", () => {
  assertEquals(birthdayParty(new Date(2022, 0, 5)), new Date(2022, 0, 8));
  assertEquals(birthdayParty(new Date(2022, 2, 30)), new Date(2022, 3, 2));
});
