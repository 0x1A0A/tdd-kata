#include "./string-end-with.h"

bool string_endwith(const std::string &str, const std::string &end) {
  return str.length() >= end.length() &&
         str.compare(str.length() - end.length(), end.length(), end) == 0;
}
