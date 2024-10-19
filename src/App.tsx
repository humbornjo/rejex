import './App.css'

import { greet } from 'rejex-wasm'

function App() {
  let magic_num = greet()

  return (
    <>
      <h1>{magic_num}</h1>
    </>
  )
}

export default App
