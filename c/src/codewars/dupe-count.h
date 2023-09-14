#include <string.h>

inline int duplicateCount(const char *str) {
  int ascii[256];

  memset(ascii, 0, sizeof(int) * 256);

  int i = 0;
  while (str[i])
    ascii[str[i++]]++;

  i = 0;
  int count = 0;
  while (i < 256)
    count += ascii[i++] > 1;

  return count;
}
