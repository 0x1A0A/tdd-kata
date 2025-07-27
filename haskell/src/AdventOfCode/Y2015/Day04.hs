module AdventOfCode.Y2015.Day04 (part1, part2) where

import qualified Crypto.Hash.MD5 as MD5
import qualified Data.ByteString.Base16 as B16
import qualified Data.ByteString.Char8 as B

part1 :: String -> Int
part1 s = mining s 0 (("00000" ==) . take 5)

part2 :: String -> Int
part2 s = mining s 0 (("000000" ==) . take 6)

mining :: String -> Int -> (String -> Bool) -> Int
mining s i f
  | f hash_result = i
  | otherwise = mining s (i + 1) f
  where
    hash_result = hash (s ++ show i)

hash :: String -> String
hash s = B.unpack $ B16.encode $ MD5.hash $ B.pack s
