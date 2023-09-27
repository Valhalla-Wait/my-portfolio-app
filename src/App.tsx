import { Hero, Navbar } from 'components'
import { useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <div>
      <div>
        <Navbar />
        <Hero />
      </div>
      <About />
      <Experience />
      <Tech />
      <Works />
      <Feedbacks />
      <div>
        <Contact />
      </div>
    </div>
    </BrowserRouter>
  )
}

export default App
