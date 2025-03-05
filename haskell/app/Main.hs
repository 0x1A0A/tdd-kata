module Main (main) where
import AdventOfCode.Y2024.Day01 (resolver)
import Text.Printf (printf)

main :: IO ()
main = do
  line <- getLine
  putStrLn (printf "total %d" (resolver line))
