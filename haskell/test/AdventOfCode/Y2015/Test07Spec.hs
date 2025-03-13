module AdventOfCode.Y2015.Test07Spec (spec) where

import AdventOfCode.Y2015.Day07 (buildCircuit, readWire)
import Data.Word (Word16)
import Test.Hspec

spec :: Spec
spec = describe "Advent of code day 7" $ do
    describe "part 1" $ do
        it "can store value" $ do
            let circuit = buildCircuit ["10 -> x"]
            readWire circuit "x" `shouldBe` (10 :: Word16)
        it "can read from other identifier" $ do
            let circuit = buildCircuit ["10 -> x", "x -> y"]
            readWire circuit "y" `shouldBe` (10 :: Word16)
        it "can do OR ops" $ do
            let circuit = buildCircuit ["4 -> x", "x OR 3 -> z"]
            readWire circuit "z" `shouldBe` (7 :: Word16)
        it "can do AND ops" $ do
            let circuit = buildCircuit ["4 -> x", "x AND 3 -> z"]
            readWire circuit "z" `shouldBe` (0 :: Word16)
        it "can do Not ops" $ do
            let circuit = buildCircuit ["4 -> x", "x AND 3 -> z", "NOT z -> n"]
            readWire circuit "n" `shouldBe` (0xffff :: Word16)
        it "can do left shift ops" $ do
            let circuit = buildCircuit ["4 -> x", "x LSHIFT 1 -> z"]
            readWire circuit "z" `shouldBe` (0x08 :: Word16)
        it "can do right shift ops" $ do
            let circuit = buildCircuit ["4 -> x", "x RSHIFT 2 -> z"]
            readWire circuit "z" `shouldBe` (0x1 :: Word16)
