#include <catch2/catch_test_macros.hpp>
#include "./dupe-count.h"

TEST_CASE("Counting duplicate", "[codewars]") {
  REQUIRE(duplicateCount("abc") == 0);
  REQUIRE(duplicateCount("abcaaaa") == 1);
  REQUIRE(duplicateCount("abcarab") == 2);
  REQUIRE(duplicateCount("abcarab111") == 3);
  REQUIRE(duplicateCount("abcara//;-b111") == 4);
  REQUIRE(duplicateCount("asdfghjkl;'\asdfghjkl;'\'") == 10);
  REQUIRE(duplicateCount("asdfghjkl;'\'") == 1);
}
