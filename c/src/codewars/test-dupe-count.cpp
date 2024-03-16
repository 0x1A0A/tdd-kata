#include "./dupe-count.h"
#include "gtest/gtest.h"

TEST(Countingduplicate, codewars) {
  ASSERT_TRUE(duplicateCount("abc") == 0);
  ASSERT_TRUE(duplicateCount("abcaaaa") == 1);
  ASSERT_TRUE(duplicateCount("abcarab") == 2);
  ASSERT_TRUE(duplicateCount("abcarab111") == 3);
  ASSERT_TRUE(duplicateCount("abcara//;-b111") == 4);
  ASSERT_TRUE(duplicateCount("asdfghjkl;'\asdfghjkl;'\'") == 10);
  ASSERT_TRUE(duplicateCount("asdfghjkl;'\'") == 1);
}
