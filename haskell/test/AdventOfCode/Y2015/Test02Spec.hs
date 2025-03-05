module AdventOfCode.Y2015.Test02Spec (spec) where

import Test.Hspec

import AdventOfCode.Y2015.Day02 (part1)

spec :: Spec
spec = describe "Advent of code 2024 day 1" $ do
    describe "get wraping paper size" $ do
        it "should get needed size" $ do
            part1 2 3 4 `shouldBe` (58 :: Int)
