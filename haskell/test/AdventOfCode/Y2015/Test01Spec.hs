module AdventOfCode.Y2015.Test01Spec (spec) where

import AdventOfCode.Y2015.Day01 (part1, part2)
import Test.Hspec

spec :: Spec
spec = describe "Advent of code 2024 day 1" $ do
    describe "part 1" $ do
        it "should deal with empty String" $ do
            part1 "" `shouldBe` (0 :: Int)

        it "should count '(' value as 1" $ do
            part1 "(((" `shouldBe` (3 :: Int)

        it "should count ')' value as -1" $ do
            part1 "))" `shouldBe` (-2 :: Int)

        it "should map input to value and sum all of them" $ do
            part1 "))(()((" `shouldBe` (1 :: Int)

    describe "part 2" $ do
        it "should deal with empty String" $ do
            part2 "" `shouldBe` (0 :: Int)

        it "if there is no -1 level so return 0" $ do
            part2 "(((" `shouldBe` (0 :: Int)

        it "1 st level is -1 then return 1" $ do
            part2 "))" `shouldBe` (1 :: Int)

        it "should know which step bring him to -1" $ do
            part2 "(()))(" `shouldBe` (5 :: Int)
