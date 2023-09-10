import { describe, expect, test } from "vitest";
import { longPressed } from "../../src/checkio/mine";

describe("Long press", () => {
  test("detect long press", () => {
    expect(longPressed("test", "test")).toBeFalsy();
    expect(longPressed("test", "teest")).toBeTruthy();
    expect(
      longPressed("welcome to checkio", "weeeelcome to cccheckio"),
    ).toBeTruthy();
    expect(longPressed("welcome boss!", "welcooome bos!!")).toBeFalsy();
  });
});
