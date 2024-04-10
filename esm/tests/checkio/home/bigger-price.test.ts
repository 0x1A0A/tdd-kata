import { assertEquals } from "https://deno.land/std/assert/mod.ts";
import { biggerPrice } from "../../../src/checkio/home.ts";

Deno.test("Bigger price", async (t) => {
  await t.step("found the bigest price", () => {
    assertEquals(
      biggerPrice(1, [
        { name: "bread", price: 100 },
        { name: "wine", price: 138 },
        { name: "meat", price: 15 },
        { name: "water", price: 1 },
      ]),
      [{ name: "wine", price: 138 }],
    );
  });

  await t.step("found the 2 bigest price", () => {
    assertEquals(
      biggerPrice(2, [
        { name: "bread", price: 100 },
        { name: "wine", price: 138 },
        { name: "meat", price: 15 },
        { name: "water", price: 1 },
      ]),
      [
        { name: "wine", price: 138 },
        { name: "bread", price: 100 },
      ],
    );
  });
});
