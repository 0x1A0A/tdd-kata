import {
  assert,
  assertEquals,
  assertFalse,
  assertThrows,
} from "https://deno.land/std@0.211.0/assert/mod.ts";
import { Vector } from "../../src/codewars/vector.ts";

Deno.test("Vector class", async (t) => {
  await t.step("Equality test", async (t) => {
    const a = new Vector([1, 2, 3]);
    const b = new Vector([3, 4, 5]);
    const c = new Vector([3, 4, 5]);
    const d = new Vector([3, 4, 5, 6]);

    await t.step("Not Equal", () => {
      assertFalse(a.equals(b));
    });

    await t.step("Different length", () => {
      assertFalse(b.equals(d));
      assertFalse(d.equals(b));
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

    assert(a.subtract(b).equals(new Vector([-2, -2, -2])));
  });

  await t.step("Dot", () => {
    const a = new Vector([1, 2, 3]);
    const b = new Vector([3, 4, 5]);

    assertEquals(a.dot(b), 26);
  });

  await t.step("Normalize", () => {
    const a = new Vector([1, 2, 3]);

    assertEquals(a.norm(), Math.sqrt(14));
  });

  await t.step("Should throw error", () => {
    const a = new Vector([1, 2, 3]);
    const b = new Vector([3, 4, 5, 6]);
    assertThrows(() => a.add(b));
    assertThrows(() => a.subtract(b));
    assertThrows(() => a.dot(b));
  });

  await t.step("toString", () => {
    const a = new Vector([1, 2, 3]);
    assertEquals(a.toString(), "(1,2,3)");
  });
});
