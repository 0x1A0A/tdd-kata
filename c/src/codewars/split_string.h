#include <string>
#include <vector>

inline std::vector<std::string> solution(const std::string &s) {
  std::vector<std::string> result = {};
  std::string str = "";
  for (char i : s) {
    str.push_back(i);
    if (str.length() == 2) {
      result.push_back(str);
      str.clear();
    }
  }

  if (str.length()) {
    if (str.length() == 1)
      str.append("_");
    result.push_back(str);
  }

  return result;
}
