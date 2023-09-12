import { describe, expect, test } from "vitest";
import { longPressed, sumLight } from "../../src/checkio/mine";

describe("Long press", () => {
  test("detect long press", () => {
    expect(longPressed("test", "test")).toBeFalsy();
    expect(longPressed("test", "teest")).toBeTruthy();
    expect(
      longPressed("welcome to checkio", "weeeelcome to cccheckio"),
    ).toBeTruthy();
    expect(longPressed("welcome boss!", "welcooome bos!!")).toBeFalsy();
    expect(longPressed("welcome boss!", "welcooome bos!! yay!")).toBeFalsy();
  });
});

describe("Lightbulb watch", () => {
  test("start the timer when we start watching", () => {
    expect(
      sumLight(
        [new Date(2015, 0, 0, 0, 0, 0), new Date(2015, 0, 0, 0, 0, 0)],
        new Date(2015, 0, 0, 0, 0, 5),
      ),
    ).toEqual(0);
    expect(
      sumLight(
        [new Date(2015, 0, 0, 0, 0, 0), new Date(2015, 0, 0, 0, 0, 10)],
        new Date(2015, 0, 0, 0, 0, 5),
      ),
    ).toEqual(5);
  });
});
