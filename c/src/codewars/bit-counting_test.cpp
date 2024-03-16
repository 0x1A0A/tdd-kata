#include "./bit-counting.h"
#include <gtest/gtest.h>

TEST(BitCounting, codewars) {
  ASSERT_TRUE(countBits(8) == 1);
  ASSERT_TRUE(countBits(3) == 2);
  ASSERT_TRUE(countBits(0) == 0);
  ASSERT_TRUE(countBits(255) == 8);
  ASSERT_TRUE(countBits((~0) ^ 3) == 62);
}
