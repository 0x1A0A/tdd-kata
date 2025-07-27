module AdventOfCode.Y2015.Day05Runner (run1, run2) where

import AdventOfCode.Y2015.Day05 (niceString, notNaughtyString)
import Data.Maybe (isJust)

run1 :: IO ()
run1 = do
  line <- readFile "input.csv"
  putStrLn (show $ length $ filter isJust (map niceString $ words line))

run2 :: IO ()
run2 = do
  line <- readFile "input.csv"
  putStrLn (show $ length $ filter isJust (map notNaughtyString $ words line))
