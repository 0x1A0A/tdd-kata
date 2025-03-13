module AdventOfCode.Y2015.Day07Runner (run1, run2) where

import AdventOfCode.Y2015.Day07 (buildCircuit, readWire)

run1 :: IO ()
run1 = do
    line <- lines <$> readFile "input.csv"
    let circuit = buildCircuit line
    putStrLn (show $ readWire circuit "a")

run2 :: IO ()
run2 = do
    line <- lines <$> readFile "input.csv"
    let circuit = buildCircuit (line ++ ["3176 -> b"])
    putStrLn (show $ readWire circuit "a")
