module AdventOfCode.Y2024.Test01Spec (spec) where

import Test.Hspec
import AdventOfCode.Y2024.Day01 (resolver)
import System.IO (readFile)

spec :: Spec
spec = describe "Advent of code 2024 day 1" $ do
  it "should deal with empty String" $ do
     resolver "" `shouldBe` (0 :: Int)

  it "should count '(' value as 1" $ do
     resolver "(((" `shouldBe` (3 :: Int)

  it "should count ')' value as -1" $ do
     resolver "))" `shouldBe` (-2 :: Int)

  it "should map input to value and sum all of them" $ do
     resolver "))(()((" `shouldBe` (1 :: Int)
