module AdventOfCode.Y2015.Test04Spec (spec) where

import Test.Hspec

import AdventOfCode.Y2015.Day04 (part1)

spec :: Spec
spec = describe "Advent of code 2015 day 4" $ do
    describe "part 1" $ do
        it "stock mining" $ do
            (part1 "abcdef") `shouldBe` (609043 :: Int)
