// use std::ffi::c_char;
//
// use test_sys::greet;
// use wasm_bindgen::prelude::*;
//
// #[wasm_bindgen]
// pub fn greet_native() -> *mut [u8; 4] {
//   &mut [8u8; 4] as *mut [u8; 4]
// }
//
// #[wasm_bindgen]
// pub fn greet_ffi(name: *const c_char) -> *mut c_char {
//   let buf = [0 as c_char; 64].as_mut_ptr();
//   unsafe { greet(name, buf) }
// }
