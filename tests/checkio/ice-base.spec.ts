import { describe, expect, test } from "vitest";
import { mostNumber } from "../../src/checkio/ice-base";

describe("The most number", () => {
  test("find the highest diffence", () => {
    expect(mostNumber()).toEqual(0);
    expect(mostNumber(1, 2, 3, 4)).toEqual(3);
    expect(mostNumber(1, -2, -3, 4)).toEqual(7);
    expect(mostNumber(1, -2, -3, 4)).toEqual(7);
    expect(mostNumber(10.2, -2.2, 0, 1.1, 0.5)).toEqual(12.4);
    expect(mostNumber(-0.036, -0.11, -0.55, -64)).toEqual(63.964);
  });
});
