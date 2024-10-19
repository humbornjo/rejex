#include <stdio.h>

char *greet(const char *name, char *const buf) {
  int ok = sprintf(buf, "hello, %s\n", name);

  /* char *tmp = buf; */
  /* for (int i = 0; i < 32; i++) { */
  /*   printf("{%c%x - %d}\n", *tmp, *tmp, i); */
  /*   tmp++; */
  /* } */

  return buf;
}
