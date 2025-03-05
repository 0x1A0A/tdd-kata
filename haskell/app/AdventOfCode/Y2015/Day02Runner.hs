module AdventOfCode.Y2015.Day02Runner (run1, run2) where

import AdventOfCode.Y2015.Day02 (parse_input, part1, part2)
import Text.Printf (printf)

run1 :: IO ()
run1 = do
    line <- readFile "input.csv"
    putStrLn (printf "total %d" $ sum (map part1 $ (map parse_input $ words line)))

run2 :: IO ()
run2 = do
    line <- readFile "input.csv"
    putStrLn (printf "total %d" $ sum (map part2 $ (map parse_input $ words line)))
