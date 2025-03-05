module AdventOfCode.Y2015.Day03Runner (run1) where

import AdventOfCode.Y2015.Day03 (part1)
import Text.Printf (printf)

run1 :: IO ()
run1 = do
    line <- readFile "input.csv"
    printf "visited house %d\n" $ part1 line
