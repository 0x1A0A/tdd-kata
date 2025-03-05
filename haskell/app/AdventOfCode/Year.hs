module AdventOfCode.Year (selector) where

import AdventOfCode.Y2015.Runner as Y2015

selector :: [String] -> IO ()
selector ("2015" : xs) = Y2015.runner xs
selector _ = putStrLn "Unknow year"
