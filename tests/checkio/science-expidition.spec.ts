import { describe, expect, test } from "vitest";
import {
  commonWords,
  findMessage,
  sumByType,
  translate,
} from "../../src/checkio/science-expidition";

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

describe("Secret Message", () => {
  test("filter only Capital letter", () => {
    expect(findMessage("Hello I am")).toEqual("HI");
    expect(findMessage("How are you? Eh, ok. Low or Lower? ")).toEqual("HELL");
  });
});

describe("Bird Language", () => {
  test("after consonant is a ramdom vowel", () => {
    expect(translate("Ha")).toEqual("H");
    expect(translate("Ha Ko")).toEqual("H K");
    expect(translate(" Ha Ko")).toEqual(" H K");
  });
  test("after vowel is two random vowel", () => {
    expect(translate("aio")).toEqual("a");
    expect(translate("aiouoo")).toEqual("au");
    expect(translate("aio uoo")).toEqual("a u");
  });
  test("translate bird language", () => {
    expect(translate("Heeiolilooai")).toEqual("Hello");
    expect(translate("hoooowe yyyooouuu duoooiiine")).toEqual("how you doin");

  });
});
