#include "./string-end-with.h"
#include <catch2/catch_test_macros.hpp>

TEST_CASE("Check if string endwith", "[codewars]") {
  REQUIRE(string_endwith("abc", "bc") == true);
  REQUIRE(string_endwith("abc", "a") == false);
  REQUIRE(string_endwith("abc", "aabc") == false);
}
