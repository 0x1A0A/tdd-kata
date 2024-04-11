import { assertEquals } from "https://deno.land/std@0.211.0/assert/assert_equals.ts";
import { pigIt } from "../../src/codewars/pigIt.ts";

Deno.test("Simple pig latin", () => {
  assertEquals(pigIt("test"), "esttay");
  assertEquals(pigIt("Pig latin is cool"), "igPay atinlay siay oolcay");
  assertEquals(pigIt("Hello world !"), "elloHay orldway !");
  assertEquals(pigIt("O tempora o mores !"), "Oay emporatay oay oresmay !");
});
