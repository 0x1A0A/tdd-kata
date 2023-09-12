#include "./bit-counting.h"

uint16_t countBits(uint64_t n) {
  uint16_t count = 0;
  while (n) {
    count += n & 1;
    n >>= 1;
  }
  return count;
}
