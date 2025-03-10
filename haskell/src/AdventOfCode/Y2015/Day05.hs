module AdventOfCode.Y2015.Day05 (niceString) where

import Data.List (subsequences)

niceString :: String -> Maybe Bool
niceString s = do
    _ <- hasNVowel 3 s
    _ <- hasDoubleLetter s
    _ <- hasForBidden s ["aa", "ab", "pq", "xy"]
    Just True

hasNVowel :: Int -> String -> Maybe Bool
hasNVowel n s
    | n == (length $ filter (`elem` "aeiou") s) = Just True
    | otherwise = Nothing

hasDoubleLetter :: String -> Maybe Bool
hasDoubleLetter (x : y : xs)
    | x == y = Just True
    | otherwise = hasDoubleLetter (y : xs)
hasDoubleLetter _ = Nothing

hasForBidden :: String -> [String] -> Maybe Bool
hasForBidden s ws
    | or $ map (\x -> elem x $ subsequences s) ws = Nothing
    | otherwise = Just True
