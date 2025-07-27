module Main (main) where

import AdventOfCode.Year (selector)

main :: IO ()
main = do
    putStrLn "------------------------"
    putStrLn "ready to take command"
    putStrLn "input: <year> <day>-<part>"
    line <- getLine
    let w = words line
    print w
    selector w
