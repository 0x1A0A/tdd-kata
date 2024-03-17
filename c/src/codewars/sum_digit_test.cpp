#include "sum_digit.h"
#include <gtest/gtest.h>

TEST(codewars, sumDigit) {
  EXPECT_EQ(digit_root(0), 0);
  EXPECT_EQ(digit_root(10), 1);
  EXPECT_EQ(digit_root(19), 1);
  EXPECT_EQ(digit_root(992), 2);
  EXPECT_EQ(digit_root(167346), 9);
}
