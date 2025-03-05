module Main (main) where
import AdventOfCode.Year (selector)

main :: IO ()
main = do
  line <- getLine
  let w = words line
  print w
  selector w
