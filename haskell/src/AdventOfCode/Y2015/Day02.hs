module AdventOfCode.Y2015.Day02 (resolver) where
import AdventOfCode.Y2015.Day01 (value)

resolver :: String -> Int
resolver s = solution 0 0 (map value s)

solution :: Int -> Int -> [Int] -> Int
solution n (-1) _ = n
solution _ _ [] = 0
solution n f (x:xs) = solution (n+1) (f+x) xs
