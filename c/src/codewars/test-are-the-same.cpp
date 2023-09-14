#include "./are-the-same.h"
#include <catch2/catch_test_macros.hpp>

TEST_CASE("Are they the 'same'", "[codewars]") {
  REQUIRE(Same::comp({1, 2, 3}, {4, 9, 1}) == true);
  REQUIRE(Same::comp({5, 2, 3}, {4, 9, 1}) == false);
  REQUIRE(Same::comp({121, 144, 19, 161, 19, 144, 19, 11},
                     {14641, 20736, 361, 25921, 361, 20736, 361, 121}) ==
          true);
  REQUIRE(Same::comp({}, {4, 9, 1}) == false);
}
