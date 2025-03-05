module AdventOfCode.Y2015.Day02Runner (run) where

import AdventOfCode.Y2015.Day02 (parse_input, part1)
import Text.Printf (printf)

run :: IO ()
run = do
    line <- readFile "input.csv"
    putStrLn (printf "total %d" $ sum (map part1 $ (map parse_input $ words line)))
