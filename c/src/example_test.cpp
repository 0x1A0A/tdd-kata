#include <gtest/gtest.h>

int add(int a, int b) { return a + b; }

long reverse_i(long a) {
  long result = 0;
  while (a) {
    result *= 10;
    result += a % 10;
    a /= 10;
  }
  return result;
}

TEST(AddNumber, gtesttestadd) { ASSERT_TRUE(add(1, 2) == 3); }

TEST(ReverseNumber, gtesttestreverse) {
  ASSERT_TRUE(reverse_i(10) == 1);
  ASSERT_TRUE(reverse_i(12) == 21);
  ASSERT_TRUE(reverse_i(100009) == 900001);
}
