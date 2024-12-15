# BREAKING NEWs

rewrite the web and steal regex 101's design

# rejex

sometimes I was told to extract some data from a json style log, and I spend quite some time on learning bash regex. Which I keep forgeting every time.

So I decide to start this project to save my future ass.

# road map

SPA = wasm(rust) + react

- dev web ui and mock a wasm interface
- dev wasm and sub the mocked interface
- dev the additional features using ts

# milestone

- parse a json scheme and get a treesitter like obj
- provide (multi) range/single selection
- allow customize regex and preview
- other features like add support for loop, sort and duplicate removing

# treesitter

incremental modify will retain the node id, so fe should have some mechanism like mode, once toggle mode and modify the json, we can relay on the id to improve our parse process.

- My laptop has a small screen, so adding a mode toggling on fe would save a lot of screen space. Would user with larger screen want to modify json on the fly? Even the purpose of this project is generating according bash script.
- Each node should contain its kind, id, content, and children. Where should the script generating code be? In wasm rust? Or in fe.

# reference

- [treesitter](https://tree-sitter.github.io/tree-sitter/)
