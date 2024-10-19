use core::fmt;
use std::ffi::{CStr, CString};
use std::os::raw::c_char;

use sqrt_sys::square;
use std::str;
use test_sys::greet;

fn print_c_string_as_ascii(c_string: *mut c_char) {
  // Convert the *mut c_char to a CStr
  let c_str = unsafe {
    // Ensure the pointer is not null
    assert!(!c_string.is_null());

    // Convert the raw pointer to a CStr
    CStr::from_ptr(c_string)
  };

  // Convert the CStr to a Rust string slice (String)
  match c_str.to_str() {
    Ok(string) => println!("{}", string), // Print the ASCII string
    Err(e) => eprintln!("Error converting to string: {}", e), // Handle conversion error
  }
}

fn main() {
  let sqrt = square(15);
  println!("{}", sqrt);

  let mut buf = [0 as c_char; 64];
  let world_u8 = c"world";

  let cptr = unsafe { greet(world_u8.as_ptr() as *const c_char, buf.as_mut_ptr()) };
  // println!("3 - {:?}", buf);

  let cstr = unsafe { CStr::from_ptr(cptr) };
  assert_eq!(c"hello, world\n", cstr);
  let rstr = cstr.to_str().unwrap().to_string();
  println!("1 - {:?}", cstr);
  println!("2 - {}", rstr);
  // println!("5 - {:?}", cstr);
  // println!("5 - {:?}", buf);
  // print!("ret: {}\n", cstr.to_str().unwrap().to_string());
  // print_c_string_as_ascii(cptr);

  for b in buf.as_ref() {
    print!("{:#02x} ", b);
  }
}
