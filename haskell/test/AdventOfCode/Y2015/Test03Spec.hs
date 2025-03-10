module AdventOfCode.Y2015.Test03Spec (spec) where

import Test.Hspec

import AdventOfCode.Y2015.Day03 (part1, part2)

spec :: Spec
spec = describe "Advent of code 2015 day 3" $ do
    describe "part 1" $ do
        it "if santa don't need to walk" $ do
            part1 "" `shouldBe` (1 :: Int)

        it "should count all unique house" $ do
            part1 "^>>>" `shouldBe` (5 :: Int)

        it "should not count the same house" $ do
            part1 "^v^v^v^v^v" `shouldBe` (2 :: Int)

    describe "part 2" $ do
        it "split work to santa and robo-santa" $ do
            part2 "^v^v^v^v^v" `shouldBe` (11 :: Int)
