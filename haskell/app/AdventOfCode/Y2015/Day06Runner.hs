module AdventOfCode.Y2015.Day06Runner (run1, run2) where

import AdventOfCode.Y2015.Day06 (applyInsts, parseInst)
import qualified Data.Array as Array

run1 :: IO ()
run1 = do
    line <- readFile "input.csv"
    let insts = map parseInst $ lines line
    let emptyGrid = Array.listArray ((0, 0), (999, 999)) $ repeat 0
    putStrLn (show $ length $ filter (1 ==) (Array.elems $ applyInsts emptyGrid insts))

run2 :: IO ()
run2 = do
    line <- readFile "input.csv"
    putStrLn "part 2"
