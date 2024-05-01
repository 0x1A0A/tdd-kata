#include <gtest/gtest.h>

#include "last_digit_5k.h"

TEST(codewars_last_digit, last_digit_is_0) {
  ASSERT_EQ(last_digit("10", "10000"), 0);
  ASSERT_EQ(last_digit("123213010", "5"), 0);
}

TEST(codewars_last_digit, last_digit_is_1) {
  ASSERT_EQ(last_digit("11", "10000"), 1);
  ASSERT_EQ(last_digit("123213011", "5"), 1);
  ASSERT_EQ(last_digit("9911", "5"), 1);
}

TEST(codewars_last_digit, raise_by_0) {
  ASSERT_EQ(last_digit("10", "0"), 1);
  ASSERT_EQ(last_digit("123213010", "0"), 1);
}

TEST(codewars_last_digit, raise_by_1) {
  ASSERT_EQ(last_digit("2", "1"), 2);
  ASSERT_EQ(last_digit("12346", "1"), 6);
}

TEST(codewars_last_digit, test_case_5) {
  ASSERT_EQ(last_digit("5", "1"), 5);
  ASSERT_EQ(last_digit("13455", "8892"), 5);
  ASSERT_EQ(last_digit("5", "3"), 5);
}

TEST(codewars_last_digit, test_case_6) {
  ASSERT_EQ(last_digit("6", "1"), 6);
  ASSERT_EQ(last_digit("13456", "8892"), 6);
  ASSERT_EQ(last_digit("6", "9"), 6);
}

TEST(codewars_last_digit, test_case_4) {
  ASSERT_EQ(last_digit("13454", "2"), 6);
  ASSERT_EQ(last_digit("13454", "1321321"), 4);
  ASSERT_EQ(last_digit("13454", "1321328"), 6);
}

TEST(codewars_last_digit, test_case_9) {
  ASSERT_EQ(last_digit("13459", "2"), 1);
  ASSERT_EQ(last_digit("13459", "1321321"), 9);
  ASSERT_EQ(last_digit("13459", "1321328"), 1);
}

TEST(codewars_last_digit, test_case_2) {
  ASSERT_EQ(last_digit("13452", "2"), 4);
  ASSERT_EQ(last_digit("13452", "12"), 6);
  ASSERT_EQ(last_digit("13452", "14"), 4);
  ASSERT_EQ(last_digit("13452", "15"), 8);
}
