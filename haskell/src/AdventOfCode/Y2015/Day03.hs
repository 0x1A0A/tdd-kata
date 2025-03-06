module AdventOfCode.Y2015.Day03 (part1, part2) where

import Data.Set (Set)
import qualified Data.Set as Set

type Position = (Int, Int)
type VisitedHouse = Set Position
type MovedPair = (Position, VisitedHouse)

part1 :: String -> Int
part1 s = Set.size $ visited s $ Set.singleton (0, 0)

visited :: String -> VisitedHouse -> VisitedHouse
visited s v = snd $ foldl move_santa ((0, 0), v) s

move_santa :: MovedPair -> Char -> MovedPair
move_santa ((x, y), visited_house) dir =
    let new_pos = case dir of
            '^' -> (x, y + 1)
            'v' -> (x, y - 1)
            '>' -> (x + 1, y)
            '<' -> (x - 1, y)
            _ -> (x, y)
     in (new_pos, Set.insert new_pos visited_house)

part2 :: String -> Int
part2 s = Set.size set
  where
    e = zip [(0 :: Integer) ..] s
    santa_tanscript = map snd $ filter (even . fst) e
    robo_tanscript = map snd $ filter (odd . fst) e
    set = visited robo_tanscript $ visited santa_tanscript $ Set.singleton (0, 0)
