import {
  assert,
  assertFalse,
} from "https://deno.land/std@0.211.0/assert/mod.ts";
import { Vector } from "../../src/codewars/vector.ts";

Deno.test("Vector class", async (t) => {
  await t.step("Equality test", async (t) => {
    const a = new Vector([1, 2, 3]);
    const b = new Vector([3, 4, 5]);
    const c = new Vector([3, 4, 5]);

    await t.step("Not Equal", () => {
      assertFalse(a.equals(b));
    });

    await t.step("Equal", () => {
      assert(c.equals(b));
    });
  });

  await t.step("Add", () => {
    const a = new Vector([1, 2, 3]);
    const b = new Vector([3, 4, 5]);

    assert(a.add(b).equals(new Vector([4, 6, 8])));
  });

  await t.step("Substract", () => {
    const a = new Vector([1, 2, 3]);
    const b = new Vector([3, 4, 5]);

    assert(a.substract(b).equals(new Vector([-2, -2, -2])));
  });

  await t.step("Dot", () => {
    const a = new Vector([1, 2, 3]);
    const b = new Vector([3, 4, 5]);

    assert(a.dot(b).equals(new Vector([3, 8, 15])));
  });
});
