import { assertEquals } from "https://deno.land/std@0.211.0/assert/mod.ts";
import { interpreter } from "../../src/codewars/painfuck.ts";

Deno.test("Painfuck", async (t) => {
  await t.step("return initial state", () => {
    assertEquals(interpreter("", 0, 3, 3), "000\r\n000\r\n000");
    assertEquals(interpreter("news", 0, 3, 3), "000\r\n000\r\n000");
  });
  await t.step("iterate and flip bit", () => {
    assertEquals(interpreter("*", 1, 3, 3), "100\r\n000\r\n000");
    assertEquals(interpreter("**", 1, 3, 3), "100\r\n000\r\n000");
    assertEquals(interpreter("**", 2, 3, 3), "000\r\n000\r\n000");
  });
  await t.step("wraping move", () => {
    assertEquals(interpreter("n*", 2, 3, 3), "000\r\n000\r\n100");
    assertEquals(interpreter("ne*", 3, 3, 3), "000\r\n000\r\n010");
  });
  await t.step("jump", () => {
    assertEquals(interpreter("*[n*]", 4, 3, 3), "100\r\n000\r\n100");
    assertEquals(
      interpreter("*[s[e]*]", 5, 5, 5),
      "10000\r\n10000\r\n00000\r\n00000\r\n00000",
    );
  });
  await t.step("loop", () => {
    assertEquals(
      interpreter("*[s[e]*]", 9, 5, 5),
      "10000\r\n10000\r\n10000\r\n00000\r\n00000",
    );
  });
});
