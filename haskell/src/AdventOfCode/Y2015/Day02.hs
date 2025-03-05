module AdventOfCode.Y2015.Day02 (part1, parse_input) where

import Data.List (sort, subsequences)

part1 :: (Int, Int, Int) -> Int
part1 d = surface + slack
  where
    areas = faces_area d
    surface = 2 * sum areas
    slack = sum (take 1 (sort areas))

faces_area :: (Int, Int, Int) -> [Int]
faces_area (l, w, h) = map area $ combine 2 [l, w, h]

area :: [Int] -> Int
area (w : h : _) = w * h
area _ = 0

combine :: Int -> [a] -> [[a]]
combine n a = filter ((n ==) . length) $ subsequences a

parse_input :: String -> (Int, Int, Int)
parse_input s = case map read $ words [if c == 'x' then ' ' else c | c <- s] of
    [l, w, h] -> (l, w, h)
    _ -> (0, 0, 0)
