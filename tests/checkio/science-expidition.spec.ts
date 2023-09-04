import { describe, expect, test } from "vitest";
import { commonWords, sumByType } from "../../src/checkio/science-expidition";

describe("Sum by type", () => {
  test("return empty string and 0", () => {
    expect(sumByType([])).toEqual(["", 0]);
  });
  test("sum all the string", () => {
    expect(sumByType(["test", "sum"])).toEqual(["testsum", 0]);
  });
  test("sum all the number", () => {
    expect(sumByType([9, 10])).toEqual(["", 19]);
  });
  test("sum all the number and string", () => {
    expect(sumByType([9, 10, "a", 1, "b"])).toEqual(["ab", 20]);
  });
});

describe("common word", () => {
  test("find common word", () => {
    expect(commonWords("a", "a")).toEqual("a");
    expect(commonWords("", "a,b")).toEqual("");
    expect(commonWords("hello,world,tnt", "tnt,world")).toEqual("tnt,world");
    expect(commonWords("a,b,c,d,f", "b,f,d")).toEqual("b,d,f");
  });
});
