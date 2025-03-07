module AdventOfCode.Y2015.Day04Runner (run1) where

import AdventOfCode.Y2015.Day04 (part1)

run1 :: IO ()
run1 = do
    line <- getLine
    putStrLn $ show $ part1 line
