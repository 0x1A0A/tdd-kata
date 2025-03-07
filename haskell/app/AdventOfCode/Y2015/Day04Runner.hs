module AdventOfCode.Y2015.Day04Runner (run1, run2) where

import AdventOfCode.Y2015.Day04 (part1, part2)

run1 :: IO ()
run1 = do
    line <- getLine
    putStrLn $ show $ part1 line

run2 :: IO ()
run2 = do
    line <- getLine
    putStrLn $ show $ part2 line
