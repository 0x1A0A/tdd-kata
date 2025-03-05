module AdventOfCode.Y2015.Test02Spec (spec) where

import Test.Hspec
import AdventOfCode.Y2015.Day02 (resolver)

spec :: Spec
spec = describe "Advent of code 2024 day 2" $ do
  it "should deal with empty String" $ do
     resolver "" `shouldBe` (0 :: Int)

  it "if there is no -1 level so return 0" $ do
     resolver "(((" `shouldBe` (0 :: Int)

  it "1 st level is -1 then return 1" $ do
     resolver "))" `shouldBe` (1 :: Int)

  it "should know which step bring him to -1" $ do
     resolver "(()))(" `shouldBe` (5 :: Int)
