module AdventOfCode.Y2015.Day01Runner (run) where

import AdventOfCode.Y2024.Day01 (resolver)
import Text.Printf (printf)

run :: IO ()
run = do
  line <- readFile "input.csv"
  putStrLn (printf "total %d" (resolver line))
