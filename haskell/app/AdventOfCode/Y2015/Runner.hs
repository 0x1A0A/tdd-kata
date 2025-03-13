module AdventOfCode.Y2015.Runner (runner) where

import AdventOfCode.Y2015.Day01Runner as Day01
import AdventOfCode.Y2015.Day02Runner as Day02
import AdventOfCode.Y2015.Day03Runner as Day03
import AdventOfCode.Y2015.Day04Runner as Day04
import AdventOfCode.Y2015.Day05Runner as Day05
import AdventOfCode.Y2015.Day06Runner as Day06
import AdventOfCode.Y2015.Day07Runner as Day07

runner :: [String] -> IO ()
runner ("1-1" : _) = Day01.run1
runner ("1-2" : _) = Day01.run2
runner ("2-1" : _) = Day02.run1
runner ("2-2" : _) = Day02.run2
runner ("3-1" : _) = Day03.run1
runner ("3-2" : _) = Day03.run2
runner ("4-1" : _) = Day04.run1
runner ("4-2" : _) = Day04.run2
runner ("5-1" : _) = Day05.run1
runner ("5-2" : _) = Day05.run2
runner ("6-1" : _) = Day06.run1
runner ("6-2" : _) = Day06.run2
runner ("7-1" : _) = Day07.run1
runner ("7-2" : _) = Day07.run2
runner _ = putStrLn "Solution not presented"
