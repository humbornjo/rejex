import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
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
