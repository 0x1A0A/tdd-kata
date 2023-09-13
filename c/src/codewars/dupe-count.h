#include <string.h>

inline bool isNumerics(int c) { return c >= '0' && c <= '9'; }

inline int duplicateCount(const char *str) {
  int c[26] = {0};
  int n[10] = {0};

  memset(c, 0, sizeof(int) * 26);
  memset(n, 0, sizeof(int) * 10);

  int i = 0;
  while (str[i]) {
    if (isNumerics(str[i]))
      c[str[i] - '0']++;
    else
      c[(str[i] | ' ') - 'a']++;
    ++i;
  }

  i = 0;
  int count = 0;
  while (i < 26) {
    count += c[i] > 1;
    ++i;
  }
  while (i < 10) {
    count += n[i] > 1;
    ++i;
  }

  return count;
}
