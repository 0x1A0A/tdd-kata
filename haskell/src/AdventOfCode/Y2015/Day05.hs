module AdventOfCode.Y2015.Day05 (niceString, notNaughtyString) where

import Data.List (isInfixOf)

niceString :: String -> Maybe Bool
niceString s = do
    _ <- hasNVowel 3 s
    _ <- hasDoubleLetter s
    _ <- hasForBidden s ["ab", "cd", "pq", "xy"]
    Just True

notNaughtyString :: String -> Maybe Bool
notNaughtyString s = do
    _ <- hasDoublePair s
    _ <- hasRepeatLetterBetween s
    Just True

hasNVowel :: Int -> String -> Maybe Bool
hasNVowel n s
    | n <= (length $ filter (`elem` "aeiou") s) = Just True
    | otherwise = Nothing

hasDoubleLetter :: String -> Maybe Bool
hasDoubleLetter (x : y : xs)
    | x == y = Just True
    | otherwise = hasDoubleLetter (y : xs)
hasDoubleLetter _ = Nothing

hasForBidden :: String -> [String] -> Maybe Bool
hasForBidden s ws
    | any (`isInfixOf` s) ws = Nothing
    | otherwise = Just True

hasDoublePair :: String -> Maybe Bool
hasDoublePair (a : b : xs)
    | isInfixOf (a : b : []) xs = Just True
    | otherwise = hasDoublePair (b : xs)
hasDoublePair _ = Nothing

hasRepeatLetterBetween :: String -> Maybe Bool
hasRepeatLetterBetween (a : b : c : xs)
    | a == c = Just True
    | otherwise = hasRepeatLetterBetween (b : c : xs)
hasRepeatLetterBetween _ = Nothing
