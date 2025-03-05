module AdventOfCode.Y2015.Day01 (part1, part2) where

value :: Char -> Int
value c = if c == '(' then 1 else -1

part1 :: String -> Int
part1 s = sum (map value s)

part2 :: String -> Int
part2 s = solution 0 0 (map value s)

solution :: Int -> Int -> [Int] -> Int
solution n (-1) _ = n
solution _ _ [] = 0
solution n f (x : xs) = solution (n + 1) (f + x) xs
