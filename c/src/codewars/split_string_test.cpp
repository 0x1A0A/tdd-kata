#include "split_string.h"
#include <gmock/gmock.h>
#include <gtest/gtest.h>

namespace testing {

TEST(codewars, splitString) {
  ASSERT_THAT(solution("a"), ElementsAreArray<std::string>({"a_"}));
  ASSERT_THAT(solution("abcde"), ElementsAreArray<std::string>({"ab","cd","e_"}));
}

} // namespace testing
