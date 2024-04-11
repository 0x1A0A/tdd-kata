import {
  assert,
  assertEquals,
  assertFalse,
} from "https://deno.land/std@0.211.0/assert/mod.ts";
import { isPrime, gap } from "../../src/codewars/gap_inprimes.ts";

Deno.test("Gap in primes", async (t) => {
  await t.step("is prime", async (t) => {
    await t.step("0 and 1 is not prime", () => {
      assertFalse(isPrime(0));
      assertFalse(isPrime(1));
    });
    await t.step("even is not prime", () => {
      assertFalse(isPrime(2));
      assertFalse(isPrime(42));
    });

    await t.step("prime number", () => {
      assert(isPrime(3));
      assert(isPrime(5));
      assert(isPrime(131));
      assert(isPrime(727));
      assert(isPrime(7727));
    });

    await t.step("not prime number", () => {
      assertFalse(isPrime(33));
      assertFalse(isPrime(7903));
    });
  });

  await t.step("gab in prime", () => {
    assertEquals(gap(6, 100, 120), null);
    assertEquals(gap(2, 100, 120), [101, 103]);
    assertEquals(gap(4, 100, 120), [103, 107]);
    assertEquals(gap(10, 300, 400), [337, 347]);
  });
});
