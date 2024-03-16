#include "./string-end-with.h"
#include "gtest/gtest.h"

TEST(Checkifstringendwith, codewars) {
  ASSERT_TRUE(string_endwith("abc", "bc") == true);
  ASSERT_TRUE(string_endwith("abc", "a") == false);
  ASSERT_TRUE(string_endwith("abc", "aabc") == false);
}
