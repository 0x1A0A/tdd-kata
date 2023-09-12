#include "./bit-counting.h"
#include <catch2/catch_test_macros.hpp>

TEST_CASE("Bit Counting", "[codewars]") {
  REQUIRE(countBits(8) == 1);
  REQUIRE(countBits(3) == 2);
  REQUIRE(countBits(0) == 0);
  REQUIRE(countBits(255) == 8);
  REQUIRE(countBits((~0) ^ 3) == 62);
}
