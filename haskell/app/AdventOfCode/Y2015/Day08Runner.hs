module AdventOfCode.Y2015.Day08Runner (run1, run2) where

import AdventOfCode.Y2015.Day08 (diffMem, escapeAndCount)

run1 :: IO ()
run1 = do
  line <- lines <$> readFile "input.csv"
  putStrLn $ show $ foldl (+) 0 (map diffMem line)

run2 :: IO ()
run2 = do
  line <- lines <$> readFile "input.csv"
  putStrLn $ show $ foldl (+) 0 (map solution2 line)

solution2 :: String -> Int
solution2 "" = 0
solution2 s = subtract allString escaped
  where
    allString = length s
    escaped = (+) 2 $ escapeAndCount s
