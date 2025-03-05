module AdventOfCode.Y2015.Runner (runner) where

import AdventOfCode.Y2015.Day01Runner as Day01
import AdventOfCode.Y2015.Day02 as Day02

runner :: [String] -> IO ()

runner ("1":_) = Day01.run 
runner ("2":_) = Day02.run 
runner _ = putStrLn "Solution not presented"
