import { assertEquals } from "https://deno.land/std/assert/mod.ts";
import { reverseDigits } from "../../../src/checkio/initiation.ts";

Deno.test("return 0 if anumber is 0", () => {
  assertEquals(reverseDigits(0), 0);
});

Deno.test("return same number if it less than 10", () => {
  assertEquals(reverseDigits(6), 6);
});

Deno.test("return reverse number if it more than or equal 10", () => {
  assertEquals(reverseDigits(123), 321);
});

Deno.test("reverse negative number", () => {
  assertEquals(reverseDigits(-1), -1);
  assertEquals(reverseDigits(-1345), -5431);
  assertEquals(reverseDigits(987654321), 123456789);
});
