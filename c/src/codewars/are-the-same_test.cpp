#include "./are-the-same.h"
#include "gtest/gtest.h"

TEST(test, hello) {
  ASSERT_TRUE(Same::comp({1, 2, 3}, {4, 9, 1}) == true);
  ASSERT_TRUE(Same::comp({5, 2, 3}, {4, 9, 1}) == false);
  ASSERT_TRUE(Same::comp({121, 144, 19, 161, 19, 144, 19, 11},
                         {14641, 20736, 361, 25921, 361, 20736, 361, 121}) ==
              true);
  ASSERT_TRUE(Same::comp({}, {4, 9, 1}) == false);
}
