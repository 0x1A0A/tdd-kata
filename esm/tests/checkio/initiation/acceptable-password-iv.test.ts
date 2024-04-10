import { assertEquals } from "https://deno.land/std/assert/mod.ts";
import { acceptablePasswordIV } from "../../../src/checkio/initiation.ts";

Deno.test("Password IV", async (t) => {
  await t.step(
    "it pass when has more than 6 length and atleast 1 number",
    () => {
      assertEquals(acceptablePasswordIV("longerpassword3"), true);
    },
  );

  await t.step("it failed when password is not longer than 6", () => {
    assertEquals(acceptablePasswordIV("1234"), false);
  });

  await t.step("it failed when consist only number", () => {
    assertEquals(acceptablePasswordIV("01235885"), false);
  });

  await t.step("it always pass when the length is more than 9", () => {
    assertEquals(acceptablePasswordIV("abcdefghtijsd"), true);
    assertEquals(acceptablePasswordIV("a0----bcdefghtijsd"), true);
  });
});
