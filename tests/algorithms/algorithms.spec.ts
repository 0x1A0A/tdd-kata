import { describe, expect, test } from "bun:test";
import { LIS } from "../../src/algorithms/algorithms";

describe("Longest Increasing Subsequenec", () => {
  test("LIS", () => {
    expect(LIS([3, 1, 8, 2, 5])).toEqual(3);
    expect(LIS([1, 2, 4, 3])).toEqual(3);
  });
});
