module AdventOfCode.Y2015.Day07 (buildCircuit, readWire) where

import Data.Bits (complement, shiftL, shiftR, (.&.), (.|.))
import Data.Map (Map)
import qualified Data.Map as Map
import Data.Word (Word16)
import Text.Read (readMaybe)

type Wire = String

type Signal = Word16

type Circuit = Map Wire Expr

type Store = Map Wire Signal

data Expr
  = Val Signal
  | Identifier Wire
  | And Expr Expr
  | Or Expr Expr
  | LShift Expr Int
  | RShift Expr Int
  | Not Expr
  | Invalid
  deriving (Show, Eq)

parseInstruction :: String -> (Wire, Expr)
parseInstruction line = case words line of
  [x, "->", w] -> (w, idenOrVal x)
  [x, "AND", y, "->", w] -> (w, And (idenOrVal x) (idenOrVal y))
  [x, "OR", y, "->", w] -> (w, Or (idenOrVal x) (idenOrVal y))
  [x, "LSHIFT", n, "->", w] -> (w, LShift (idenOrVal x) (read n))
  [x, "RSHIFT", n, "->", w] -> (w, RShift (idenOrVal x) (read n))
  ["NOT", x, "->", w] -> (w, Not (idenOrVal x))
  _ -> ("", Invalid)
  where
    idenOrVal s = case readMaybe s of
      Just n -> Val n
      Nothing -> Identifier s

evaluate :: Circuit -> Store -> Wire -> (Signal, Store)
evaluate circuit store wire = case Map.lookup wire store of
  Just val -> (val, store)
  Nothing ->
    let (val, updated) = eval (circuit Map.! wire) store
     in (val, Map.insert wire val updated)
  where
    eval (Val v) cache = (v, cache)
    eval (Identifier w) cache = evaluate circuit cache w
    eval (Not v) cache =
      let (nv, updated) = eval v cache
       in (complement nv, updated)
    eval (Or a b) cache =
      let (v1, s1) = eval a cache
          (v2, s2) = eval b s1
       in (v1 .|. v2, s2)
    eval (And a b) cache =
      let (v1, s1) = eval a cache
          (v2, s2) = eval b s1
       in (v1 .&. v2, s2)
    eval (LShift a b) cache =
      let (v, updated) = eval a cache
       in (shiftL v b, updated)
    eval (RShift a b) cache =
      let (v, updated) = eval a cache
       in (shiftR v b, updated)
    eval _ cache = (0, cache)

buildCircuit :: [String] -> Circuit
buildCircuit = Map.fromList . map parseInstruction

readWire :: Circuit -> Wire -> Signal
readWire circuit wire = fst $ evaluate circuit Map.empty wire
