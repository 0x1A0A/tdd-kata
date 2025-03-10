module AdventOfCode.Y2015.Test05Spec (spec) where

import AdventOfCode.Y2015.Day05 (niceString)
import Test.Hspec

spec :: Spec
spec = describe "Advent of code 2015 day 5" $ do
    describe "part1" $ do
        it "should has 3 vowel, double letter and no fobidden word" $ do
            niceString "ugknbfddgicrmopn" `shouldBe` (Just True)
            niceString "aaaa" `shouldBe` (Just True)
        it "has 2 vowel" $ do
            niceString "ugknbfddgcrmopn" `shouldBe` (Nothing)
        it "has 1 vowel" $ do
            niceString "dvszwmarrgswjxmb" `shouldBe` (Nothing)
        it "has forbidden word" $ do
            niceString "haegwjzuvuyypxyu" `shouldBe` (Nothing)
        it "has no double letter" $ do
            niceString "jchzalrnumimnmhp" `shouldBe` (Nothing)
