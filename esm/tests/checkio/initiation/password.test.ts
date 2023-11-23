import { assertEquals } from "https://deno.land/std/assert/mod.ts";
import { acceptablePassword } from "../../../src/checkio/initiation.ts";

Deno.test("it pass when has more than 6 length and atleast 1 number", () => {
  assertEquals(acceptablePassword("longerpassword3"), true);
  assertEquals(acceptablePassword("longerpasswordnonumber"), false);
});

Deno.test("it failed when password is not longer than 6", () => {
  assertEquals(acceptablePassword("1234"), false);
});
