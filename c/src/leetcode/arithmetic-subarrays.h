#include <algorithm>
#include <cstdio>
#include <stddef.h>
#include <vector>

class Solution {
public:
  static inline std::vector<bool>
  checkArithmeticSubarrays(const std::vector<int> &nums,
                           const std::vector<int> &l,
                           const std::vector<int> &r) {
    std::vector<bool> result = std::vector<bool>(l.size());

    size_t i = 0;
    while (i < l.size()) {
      std::vector<int> copy =
          std::vector<int>{nums.begin() + l[i], nums.begin() + r[i] + 1};
      result[i] = isArithMetic(copy);
      ++i;
    }

    return result;
  }

private:
  static inline bool isArithMetic(std::vector<int> &vec) {
    std::sort(vec.begin(), vec.end());
    size_t diff = vec[1] - vec[0];
    for (size_t i = 2; i < vec.size(); ++i) {
      if (diff != vec[i] - vec[i - 1])
        return false;
    }
    return true;
  }
};
