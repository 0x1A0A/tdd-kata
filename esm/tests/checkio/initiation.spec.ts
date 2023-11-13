import { test, describe, expect } from "vitest";
import {
  acceptablePassword,
  acceptablePasswordIV,
  acceptablePasswordIm,
  acceptablePasswordV,
  acceptablePasswordVI,
  backwardString,
  beginningZeros,
  correctSentence,
  countVowels,
  endingZeros,
  firstWord,
  longestCommonPrefix,
  longestSubstr,
  longestWord,
  maxDigit,
  replaceFirst,
  reverseDigits,
  sortExceptZero,
  splitPair,
} from "../../src/checkio/initiation";

describe("Password", () => {
  test("it pass when has more than 6 length and atleast 1 number", () => {
    expect(acceptablePassword("longerpassword3")).toEqual(true);
    expect(acceptablePassword("longerpasswordnonumber")).toEqual(false);
  });

  test("it failed when password is not longer than 6", () => {
    expect(acceptablePassword("1234")).toEqual(false);
  });
});

describe("Password not only number", () => {
  test("it pass when has more than 6 length and atleast 1 number", () => {
    expect(acceptablePasswordIm("longerpassword3")).toEqual(true);
    expect(acceptablePasswordIm("longerpasswordnonumber")).toEqual(false);
  });

  test("it failed when password is not longer than 6", () => {
    expect(acceptablePasswordIm("1234")).toEqual(false);
  });

  test("it failed when consist only number", () => {
    expect(acceptablePasswordIm("01235885")).toEqual(false);
  });
});

describe("Backward String", () => {
  test("it should reverse a string", () => {
    expect(backwardString("hello")).toEqual("olleh");
  });
});

describe("Correct Sentencse", () => {
  test("it should make first letter an uppercase", () => {
    expect(correctSentence("greeting, hi")[0]).toEqual("G");
  });
  test("end with period (.)", () => {
    expect(correctSentence("greeting, hi").endsWith(".")).toBeTruthy();
  });
  test("should correct sentence", () => {
    expect(correctSentence("greeting, New York.")).toEqual(
      "Greeting, New York.",
    );
  });
});

describe("First Word", () => {
  test("Example", () => {
    expect(firstWord("Hello world")).toEqual("Hello");
    expect(firstWord("a word")).toEqual("a");
    expect(firstWord("greeting from CheckiO Planet")).toEqual("greeting");
    expect(firstWord("hi")).toEqual("hi");
  });
});

describe("Longest Word", () => {
  test("it can find longest word", () => {
    expect(longestWord("word longer")).toEqual("longer");
    expect(longestWord("w longer")).toEqual("longer");
    expect(longestWord("w longer longest")).toEqual("longest");
    expect(longestWord("longest longer long")).toEqual("longest");
    expect(longestWord("long word hi")).toEqual("long");
  });
});

describe("Replace First", () => {
  test("it shift number to the left", () => {
    expect(replaceFirst([1, 2, 3, 4])).toEqual([2, 3, 4, 1]);
  });
});

describe("Max digit", () => {
  test("it return max digit from number", () => {
    expect(maxDigit(6235)).toEqual(6);
    expect(maxDigit(1000)).toEqual(1);
  });
});

describe("Split Pair", () => {
  test("it split string into pairs", () => {
    expect(splitPair("abcd")).toEqual(["ab", "cd"]);
  });

  test("it split string into pairs and at _ to last pair if is single", () => {
    expect(splitPair("abcde")).toEqual(["ab", "cd", "e_"]);
  });

  test("it should return empty array when text is empty", () => {
    expect(splitPair("")).toEqual([]);
  });
});

describe("Beginning Zeros", () => {
  test("it return number of leading zero", () => {
    expect(beginningZeros("0001")).toEqual(3);
    expect(beginningZeros("1000")).toEqual(0);
  });
});

describe("Ending Zeros", () => {
  test("it return number of trailing zero", () => {
    expect(endingZeros(1)).toEqual(0);
    expect(endingZeros(1000)).toEqual(3);
  });
});

describe("Acceptable password IV", () => {
  test("it pass when has more than 6 length and atleast 1 number", () => {
    expect(acceptablePasswordIV("longerpassword3")).toEqual(true);
  });

  test("it failed when password is not longer than 6", () => {
    expect(acceptablePasswordIV("1234")).toEqual(false);
  });

  test("it failed when consist only number", () => {
    expect(acceptablePasswordIV("01235885")).toEqual(false);
  });

  test("it always pass when the length is more than 9", () => {
    expect(acceptablePasswordIV("abcdefghtijsd")).toEqual(true);
    expect(acceptablePasswordIV("a0----bcdefghtijsd")).toEqual(true);
  });
});

describe("Acceptable password V", () => {
  test("it always fail when the text contain 'password' in any case", () => {
    expect(acceptablePasswordV("abcdefghtijsdPassword")).toEqual(false);
    expect(acceptablePasswordV("a0----bcdefghtijsdPassWorD")).toEqual(false);
  });
});

describe("Acceptable password VI", () => {
  test("it always fail when the text contain 'password' in any case", () => {
    expect(acceptablePasswordVI("aaaaaaaaaaaaaaaaaaaa")).toEqual(false);
    expect(acceptablePasswordVI("aaaaaaaaaaaaaa1234")).toEqual(true);
  });
});

describe("Count vowel", () => {
  test("it can count vowel", () => {
    expect(countVowels("aeiou")).toEqual(5);
    expect(countVowels("aaeiou")).toEqual(6);
  });
});

describe("Sort", () => {
  test("can sort in ascending order", () => {
    expect(sortExceptZero([5, 4, 3, 1])).toEqual([1, 3, 4, 5]);
    expect(sortExceptZero([5, 0, 3, 1])).toEqual([1, 0, 3, 5]);
    expect(sortExceptZero([5, 6, 0, 7, 10])).toEqual([5, 6, 0, 7, 10]);
  });
});

describe("Longest substring of unique character", () => {
  test("abc return 3", () => {
    expect(longestSubstr("abc")).toBe(3);
  });
  test("empty return 0", () => {
    expect(longestSubstr("")).toBe(0);
  });
  test("only count for consicutive", () => {
    expect(longestSubstr("aaaaab")).toBe(2);
    expect(longestSubstr("abccbaxxx")).toBe(4);
    expect(longestSubstr("dvdf")).toBe(3);
  });
});

describe("Longest common prefix", () => {
  test("return whole string if only one string provided", () => {
    expect(longestCommonPrefix(["hello"])).toEqual("hello");
  });
  test("return empty string when no string provided", () => {
    expect(longestCommonPrefix([""])).toEqual("");
    expect(longestCommonPrefix([])).toEqual("");
  });
  test("find common prefix", () => {
    expect(longestCommonPrefix(["hello", "hell"])).toEqual("hell");
    expect(longestCommonPrefix(["hello", "hell", "home"])).toEqual("h");
  });
  test("return empty string if no common prefix at all", () => {
    expect(longestCommonPrefix(["hello", "hell", "world", "angel"])).toEqual(
      "",
    );
  });
});

describe("Reverse Integer", () => {
  test("return 0 if anumber is 0", () => {
    expect(reverseDigits(0)).toEqual(0);
  });

  test("return same number if it less than 10", () => {
    expect(reverseDigits(6)).toEqual(6);
  });

  test("return reverse number if it more than or equal 10", () => {
    expect(reverseDigits(123)).toEqual(321);
  });

  test("reverse negative number", () => {
    expect(reverseDigits(-1)).toEqual(-1);
    expect(reverseDigits(-1345)).toEqual(-5431);
    expect(reverseDigits(987654321)).toEqual(123456789);
  });
});
