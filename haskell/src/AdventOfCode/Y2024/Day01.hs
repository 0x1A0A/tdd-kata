module AdventOfCode.Y2024.Day01 (resolver, value) where

value :: Char -> Int
value c = if c == '(' then 1 else -1

resolver :: String -> Int
resolver s = sum(map value s)

