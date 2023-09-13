import { describe, test, expect } from "vitest";
import {
  allPermutation,
  betweenMarkers,
  biggerPrice,
} from "../../src/checkio/home";

describe("Bigger price", () => {
  test("found the bigest price", () => {
    expect(
      biggerPrice(1, [
        { name: "bread", price: 100 },
        { name: "wine", price: 138 },
        { name: "meat", price: 15 },
        { name: "water", price: 1 },
      ]),
    ).toEqual([{ name: "wine", price: 138 }]);
  });
  test("found the 2 bigest price", () => {
    expect(
      biggerPrice(2, [
        { name: "bread", price: 100 },
        { name: "wine", price: 138 },
        { name: "meat", price: 15 },
        { name: "water", price: 1 },
      ]),
    ).toEqual([
      { name: "wine", price: 138 },
      { name: "bread", price: 100 },
    ]);
  });
});

describe("Between markers", () => {
  test("find between markers", () => {
    expect(betweenMarkers("What is >apple<", ">", "<")).toEqual("apple");
    expect(
      betweenMarkers(
        "<head><title>My new site</title></head>",
        "<title>",
        "</title>",
      ),
    ).toEqual("My new site");
  });

  test("return same text when no markers", () => {
    expect(betweenMarkers("What is >apple<", "", "")).toEqual(
      "What is >apple<",
    );
  });

  test("return empty when end markers", () => {
    expect(betweenMarkers("What is >apple<", "<", ">")).toEqual("");
  });

  test("return from start to end markers when no start markers", () => {
    expect(betweenMarkers("What is >apple<", "", "<")).toEqual(
      "What is >apple",
    );
  });

  test("return from start markers to the end when no end markers", () => {
    expect(betweenMarkers("What is >apple<", ">", "")).toEqual("apple<");
  });
});

describe("all permutation", () => {
  test("return same string if it only has one character", () => {
    expect(allPermutation("a")).toEqual(["a"]);
  });
  test("return all string permutation", () => {
    expect(allPermutation("ab")).toEqual(["ab", "ba"]);
    expect(allPermutation("abc")).toEqual([
      "abc",
      "acb",
      "bac",
      "bca",
      "cab",
      "cba",
    ]);
  });
  test("can handle string with the same element", () => {
    expect(allPermutation("aa")).toEqual(["aa", "aa"]);
    expect(allPermutation("aab")).toEqual([
      "aab",
      "aab",
      "aba",
      "aba",
      "baa",
      "baa",
    ]);
  });
});