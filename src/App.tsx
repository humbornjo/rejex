// import { greet } from 'rejex-wasm'

import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Rejexer from './components/Rejexer/Rejexer'

function App() {
  return (
    <div
      className="h-screen w-screen min-w-256
        flex flex-col justify-between bg-stone-100"
    >
      <Header />
      <Rejexer />
      <Footer />
    </div >
  )
}

export default App
