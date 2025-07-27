module AdventOfCode.Y2015.Test02Spec (spec) where

import AdventOfCode.Y2015.Day02 (parse_input, part1, part2)
import Test.Hspec

spec :: Spec
spec = describe "Advent of code 2024 day 1" $ do
  describe "get wraping paper size" $ do
    it "should get needed size of wrapper" $ do
      part1 (2, 3, 4) `shouldBe` (58 :: Int)

    it "should get needed size for ribbon and bow" $ do
      part2 (1, 1, 10) `shouldBe` (14 :: Int)

    it "it should calculate based on lowest value" $ do
      part2 (4, 2, 3) `shouldBe` (34 :: Int)

    it "should parse input" $ do
      parse_input "1x2x3" `shouldBe` (1, 2, 3)
