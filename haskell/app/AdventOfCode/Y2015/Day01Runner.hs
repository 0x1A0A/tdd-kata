module AdventOfCode.Y2015.Day01Runner (run1, run2) where

import AdventOfCode.Y2015.Day01 (part1, part2)
import Text.Printf (printf)

run1 :: IO ()
run1 = do
    line <- readFile "input.csv"
    putStrLn (printf "total %d" (part1 line))

run2 :: IO ()
run2 = do
    line <- readFile "input.csv"
    putStrLn (printf "total %d" (part2 line))
