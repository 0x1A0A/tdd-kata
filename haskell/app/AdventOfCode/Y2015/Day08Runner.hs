module AdventOfCode.Y2015.Day08Runner (run1) where

import AdventOfCode.Y2015.Day08 (diffMem)

run1 :: IO ()
run1 = do
  line <- lines <$> readFile "input.csv"
  putStrLn $ show $ foldl (+) 0 (map diffMem line)
