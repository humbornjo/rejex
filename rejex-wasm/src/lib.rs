use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn greet() -> *mut [u8; 4] {
  &mut [8u8; 4] as *mut [u8; 4]
}
