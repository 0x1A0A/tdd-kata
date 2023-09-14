#include <cstddef>
#include <iostream>
#include <vector>

struct Same {
  static inline bool comp(const std::vector<int> &a,
                          const std::vector<int> &b) {
    if (a.size() != b.size())
      return false;
    std::vector<bool> check;
    check.resize(a.size(), 0);

    for (int i : a) {
      for (std::size_t j = 0; j < b.size(); ++j) {
        if (i * i == b[j] && !check[j]) {
          check[j] = 1;
          break;
        }
      }
    }

    for (bool p : check)
      if (!p)
        return false;

    return true;
  }
};
