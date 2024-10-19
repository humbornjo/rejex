#include <stdio.h>

int main() {
  char buf[64];
  sprintf(buf, "hello, %s\n", "world");

  char *tmp = buf;
  for (int i = 0; i < 32; i++) {
    printf("{%c%x - %d}\n", *tmp, *tmp, i);
    tmp++;
  }

  printf("%s", buf);
  return 0;
}
