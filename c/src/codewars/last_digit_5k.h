#include <stddef.h>
#include <string.h>

static int last_digit(const char *a, const char *b) {
  size_t len_a = strlen(a), len_b = strlen(b);

  char n_digit = a[len_a - 1];
  int n_value = n_digit - '0';
  int b_last = b[len_b - 1] - '0';
  int odd = b_last & 1;
  int last_two = 0;

  if (len_b == 1 && b[0] == '0')
    return 1;

  if (len_b == 1 && b[0] == '1')
    return n_value;

  if (len_b == 1)
    last_two = b_last;

  if (len_b >= 2)
    last_two = (b[len_b - 2] - '0') * 10 + b[len_b - 1] - '0';

  switch (n_digit) {
  case '1': // posible 1
  case '5': // possible 5
  case '6': // possible 6
    return n_value;
  case '4': // possible 4 6
    return odd ? 4 : 6;
  case '9': // possible 9 1
    return odd ? 9 : 1;
  case '2': // possible 2 4 8 6
  {
    int val[] = {6, 2, 4, 8};
    return val[last_two % 4];
  }
  case '3': // possible 3 9 7 1
  {
    int val[] = {1, 3, 9, 7};
    return val[last_two % 4];
  }
  case '7': // possible 7 9 3 1
  {
    int val[] = {1, 7, 9, 3};
    return val[last_two % 4];
  }
  case '8': // possible 8 4 2 6
  {
    int val[] = {6, 8, 4, 2};
    return val[last_two % 4];
  }
  default:
    return 0;
  }
}
