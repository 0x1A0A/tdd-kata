module AdventOfCode.Y2015.Test08Spec (spec) where

import AdventOfCode.Y2015.Day08 (countEscaped, diffMem, escapeAndCount)
import Test.Hspec

spec :: Spec
spec = describe "Advent of code day 8" $ do
  describe "count escaped" $ do
    it "can count hex " $ do
      countEscaped "" `shouldBe` 0
      countEscaped "\\x22" `shouldBe` 1
      countEscaped "\\x221234\\x111" `shouldBe` 7
    it "can count escaped char" $ do
      countEscaped "\\\"" `shouldBe` 1
      countEscaped "\\\\HI" `shouldBe` 3
  describe "day 08 solution part 1" $ do
    it "can calculated different length in string and memory" $ do
      diffMem "\"\"" `shouldBe` 2
      diffMem "\"aaa\\\"aaa\"" `shouldBe` 3
      diffMem "\"\\x27\"" `shouldBe` 5
      diffMem "" `shouldBe` 0
  describe "count with escape" $ do
    it "can count '\" and '\\''" $ do
      escapeAndCount "\"\"" `shouldBe` 4
      escapeAndCount "\"aaa\\\"aaa\"" `shouldBe` 14
      escapeAndCount "\"\\x27\"" `shouldBe` 9
