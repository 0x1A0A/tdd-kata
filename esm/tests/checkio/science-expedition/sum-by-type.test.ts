import { assertEquals } from "https://deno.land/std/assert/mod.ts";
import { sumByType } from "../../../src/checkio/science-expidition.ts";

Deno.test("return empty string and 0", () => {
  assertEquals(sumByType([]), ["", 0]);
});

Deno.test("sum all the string", () => {
  assertEquals(sumByType(["test", "sum"]), ["testsum", 0]);
});

Deno.test("sum all the number", () => {
  assertEquals(sumByType([9, 10]), ["", 19]);
});

Deno.test("sum all the number and string", () => {
  assertEquals(sumByType([9, 10, "a", 1, "b"]), ["ab", 20]);
});
