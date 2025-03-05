module AdventOfCode.Y2015.Day02 (part1) where

import Data.List (sort, subsequences)

part1 :: Int -> Int -> Int -> Int
part1 l w h = (sum (map (2 *) $ faces_area l w h)) + (sum (take 1 (sort $ faces_area l w h)))

faces_area :: Int -> Int -> Int -> [Int]
faces_area l w h = map area $ combine 2 [l, w, h]

area :: [Int] -> Int
area (w : h : _) = w * h
area _ = 0

combine :: Int -> [a] -> [[a]]
combine n a = filter ((n ==) . length) $ subsequences a
