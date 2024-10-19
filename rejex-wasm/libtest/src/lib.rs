extern "C" {
  pub fn greet(
    name: *const ::std::os::raw::c_char,
    buf: *mut ::std::os::raw::c_char,
  ) -> *mut ::std::os::raw::c_char;
}
