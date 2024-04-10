import { assertEquals } from "https://deno.land/std/assert/mod.ts";
import { acceptablePassword } from "../../../src/checkio/initiation.ts";

Deno.test("Password", async (t) => {
  await t.step(
    "it pass when has more than 6 length and atleast 1 number",
    () => {
      assertEquals(acceptablePassword("longerpassword3"), true);
      assertEquals(acceptablePassword("longerpasswordnonumber"), false);
    },
  );

  await t.step("it failed when password is not longer than 6", () => {
    assertEquals(acceptablePassword("1234"), false);
  });
});
