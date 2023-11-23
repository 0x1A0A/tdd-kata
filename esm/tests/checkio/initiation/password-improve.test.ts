import { assertEquals } from "https://deno.land/std/assert/mod.ts";
import { acceptablePasswordIm } from "../../../src/checkio/initiation.ts";

Deno.test("it pass when has more than 6 length and atleast 1 number", () => {
  assertEquals(acceptablePasswordIm("longerpassword3"), true);
  assertEquals(acceptablePasswordIm("longerpasswordnonumber"), false);
});

Deno.test("it failed when password is not longer than 6", () => {
  assertEquals(acceptablePasswordIm("1234"), false);
});

Deno.test("it failed when consist only number", () => {
  assertEquals(acceptablePasswordIm("01235885"), false);
});
