module AdventOfCode.Y2015.Day06 (applyInst, applyInsts, parseInst, Operation (..), applyInstsPart2, applyInstPart2) where

import Data.Array (Array, (!), (//))
import Data.List (isPrefixOf)
import Data.List.Split (splitOn)

type Grid = Array (Int, Int) Int

type Pair = (Int, Int)

type FromTo = (Pair, Pair)

data Operation
  = ON FromTo
  | OFF FromTo
  | TOGGLE FromTo
  | INVALID
  deriving
    (Show, Eq)

applyInst :: Grid -> Operation -> Grid
applyInst g (ON d) = updateGrid g d (const 1)
applyInst g (OFF d) = updateGrid g d (const 0)
applyInst g (TOGGLE d) = updateGrid g d (\x -> if x == 0 then 1 else 0)
applyInst g INVALID = g

applyInstPart2 :: Grid -> Operation -> Grid
applyInstPart2 g (ON d) = updateGrid g d (1 +)
applyInstPart2 g (OFF d) = updateGrid g d (\x -> if x == 0 then 0 else x - 1)
applyInstPart2 g (TOGGLE d) = updateGrid g d (2 +)
applyInstPart2 g INVALID = g

applyInsts :: Grid -> [Operation] -> Grid
applyInsts g [] = g
applyInsts g (x : xs) = applyInsts (applyInst g x) xs

applyInstsPart2 :: Grid -> [Operation] -> Grid
applyInstsPart2 g [] = g
applyInstsPart2 g (x : xs) = applyInstsPart2 (applyInstPart2 g x) xs

updateGrid :: Grid -> FromTo -> (Int -> Int) -> Grid
updateGrid g ((x1, y1), (x2, y2)) f = g // [((x, y), (f (g ! (x, y)))) | x <- [x1 .. x2], y <- [y1 .. y2]]

parseInst :: String -> Operation
parseInst s
  | isPrefixOf "turn on" s = ON (parse (insts !! 2) (insts !! 4))
  | isPrefixOf "turn off" s = OFF (parse (insts !! 2) (insts !! 4))
  | isPrefixOf "toggle" s = TOGGLE (parse (insts !! 1) (insts !! 3))
  | otherwise = INVALID
  where
    insts = words s
    parse a b = (parseCoords a, parseCoords b)

parseCoords :: String -> Pair
parseCoords s = toCoord $ map read $ splitOn "," s
  where
    toCoord [a, b] = (a, b)
    toCoord _ = (0, 0)
