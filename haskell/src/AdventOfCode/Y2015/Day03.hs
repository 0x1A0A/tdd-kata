module AdventOfCode.Y2015.Day03 (part1) where

import Data.Set (Set)
import qualified Data.Set as Set

type Position = (Int, Int)
type VisitedHouse = Set Position
type MovedPair = (Position, VisitedHouse)

part1 :: String -> Int
part1 s = Set.size $ visited s

visited :: String -> VisitedHouse
visited = snd . foldl move_santa ((0, 0), Set.singleton (0, 0))

move_santa :: MovedPair -> Char -> MovedPair
move_santa ((x, y), visited_house) dir =
    let new_pos = case dir of
            '^' -> (x, y + 1)
            'v' -> (x, y - 1)
            '>' -> (x + 1, y)
            '<' -> (x - 1, y)
            _ -> (x, y)
     in (new_pos, Set.insert new_pos visited_house)
