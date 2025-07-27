module AdventOfCode.Y2015.Test06Spec (spec) where

import AdventOfCode.Y2015.Day06 (Operation (..), applyInst, applyInsts, parseInst)
import Data.Array (listArray, (!))
import Test.Hspec

spec :: Spec
spec = describe "Advent of code 2015 day 6" $ do
  describe "parse instruction" $ do
    it "turn on" $ do
      parseInst "turn on 0,0 through 123,919" `shouldBe` (ON ((0, 0), (123, 919)))
    it "turn off" $ do
      parseInst "turn off 6,90 through 23,19" `shouldBe` (OFF ((6, 90), (23, 19)))
    it "toggle" $ do
      parseInst "toggle 1,2 through 3,1" `shouldBe` (TOGGLE ((1, 2), (3, 1)))
  describe "part1" $ do
    it "should toggle grid" $ do
      let grid = listArray ((0, 0), (1, 1)) (repeat 0)
      let newgrid = applyInst grid (parseInst "toggle 0,0 through 0,0")
      (newgrid ! (0, 0)) `shouldBe` 1

    it "should return the same grid if instrcution is invalid" $ do
      let grid = listArray ((0, 0), (1, 1)) (repeat 0)
      let newgrid = applyInst grid (parseInst "what 0,0 through 0,0")
      newgrid `shouldBe` grid

    it "should be able to apply multiple instruction" $ do
      let grid = listArray ((0, 0), (1, 1)) (repeat 0)
      let insts = map parseInst ["toggle 0,0 throught 1,0", "turn off 0,0 through 0,1", "turn on 0,1 through 0,1"]
      let result = applyInsts grid insts
      (result ! (0, 0)) `shouldBe` 0
      (result ! (1, 0)) `shouldBe` 1
      (result ! (0, 1)) `shouldBe` 1
