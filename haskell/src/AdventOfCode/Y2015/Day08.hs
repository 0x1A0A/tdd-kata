module AdventOfCode.Y2015.Day08 (countEscaped, diffMem, escapeAndCount) where

countEscaped :: String -> Int
countEscaped (a : b : c : d : xs)
  | a == '\\' && b == 'x' = 1 + countEscaped xs
  | a == '\\' = 1 + countEscaped (c : d : xs)
  | otherwise = 1 + countEscaped (b : c : d : xs)
countEscaped (a : b : xs)
  | a == '\\' = 1 + countEscaped xs
  | otherwise = 1 + countEscaped (b : xs)
countEscaped s = length s

escapeAndCount :: String -> Int
escapeAndCount "" = 0
escapeAndCount (x : xs)
  | x == '"' || x == '\\' = 2 + escapeAndCount xs
  | otherwise = 1 + escapeAndCount xs

diffMem :: String -> Int
diffMem "" = 0
diffMem s = subtract actualString allString
  where
    allString = length s
    actualString = subtract 2 $ countEscaped s
