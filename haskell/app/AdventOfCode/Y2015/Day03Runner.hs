module AdventOfCode.Y2015.Day03Runner (run1, run2) where

import AdventOfCode.Y2015.Day03 (part1, part2)
import Text.Printf (printf)

run1 :: IO ()
run1 = do
    line <- readFile "input.csv"
    printf "visited house %d\n" $ part1 line

run2 :: IO ()
run2 = do
    line <- readFile "input.csv"
    printf "visited house %d\n" $ part2 line
