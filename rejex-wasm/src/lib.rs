use std::ffi::c_char;

use test_sys::greet;
use wasm_bindgen::prelude::*;

struct Jnode {
  id: usize,
  kind: String,
  content: String,
  children: Vec<Jnode>,
}

#[wasm_bindgen]
pub fn greet_native() -> *mut [u8; 4] {
  &mut [8u8; 4] as *mut [u8; 4]
}

#[wasm_bindgen]
pub fn greet_ffi(name: *const c_char) -> *mut c_char {
  let buf = [0 as c_char; 64].as_mut_ptr();
  unsafe { greet(name, buf) }
}

#[cfg(test)]
mod test {
  use tree_sitter::{Node, Parser};

  fn traverse(root: Node, depth: i32) {
    for child in root.named_children(&mut root.walk()) {
      // if (child == None) {
      //   continue;
      // }
      let mut space = "".to_owned();
      for _ in 0..depth {
        space += "  ";
      }
      print!("{}", space);
      println!("id {} - {}", child.id(), child.kind());
      traverse(child, depth + 1);
    }
  }

  #[test]
  fn parse_json() {
    let mut parser = Parser::new();
    parser
      .set_language(&tree_sitter_json::LANGUAGE.into())
      .expect("Error loading Json");
    let source_code = "{\"we\": \"robot\", \"yesr\": 2024, \"1\": [3, 4, 5]}";
    let update_code = "{\"we\": \"robot\", \"yesr\": 2024, \"1\": [3, 4, 5, 6, 7]}";
    let tree = parser.parse(source_code, None).unwrap();
    let root_node = tree.root_node();
    let child_node = root_node.child(0).unwrap();

    traverse(root_node, 0);

    let new_tree = parser.parse(update_code, Some(&tree)).unwrap();

    traverse(new_tree.root_node(), 0);

    assert_eq!(root_node.kind(), "document");
    assert_eq!(child_node.kind(), "object");
    assert_eq!(child_node.named_child_count(), 4);

    // assert_eq!(root_node.start_position().column, 0);
    // assert_eq!(root_node.end_position().column, 12);
  }
}
