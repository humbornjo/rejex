fn main() {
  println!("cargo:rustc-link-lib=test"); // Assuming your C dynamic library is named "libtest.dylib"
  println!("cargo:rustc-link-search=/Users/humborn/Repository/rejex/rejex-wasm/cout");
}
