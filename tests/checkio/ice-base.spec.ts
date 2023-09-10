import { describe, expect, test } from "bun:test";
import {
  findQuotes,
  longRepeat,
  mostNumber,
  moveZeros,
  notOrder,
} from "../../src/checkio/ice-base";

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

describe("Find all quotes", () => {
  test('find string inside of "', () => {
    expect(findQuotes("Hi")).toEqual([]);
    expect(findQuotes('"Hi" not interest "me"')).toEqual(["Hi", "me"]);
  });
});

describe("Move Zeros", () => {
  test("if no zero then result is the same as input", () => {
    expect(moveZeros([1, 2, 3])).toEqual([1, 2, 3]);
  });
  test("has zero then move it to the end", () => {
    expect(moveZeros([1, 0, 2, 3])).toEqual([1, 2, 3, 0]);
    expect(moveZeros([0, 0, 2, 3])).toEqual([2, 3, 0, 0]);
  });
});

describe("Not order", () => {
  test("count the number of element that not in their place", () => {
    expect(notOrder([1, 2, 3])).toEqual(0);
    expect(notOrder([1, 3, 2])).toEqual(2);
    expect(notOrder([1, 1, 1])).toEqual(0);
    expect(notOrder([1, 3, 1, 2, 4])).toEqual(3);
  });
});

describe("Long repeat line", () => {
  test("find longest repeat character", () => {
    expect(longRepeat("")).toEqual(0);
    expect(longRepeat("a")).toEqual(1);
    expect(longRepeat("aaiaaaa")).toEqual(4);
  });
});
