import React, { useState } from 'react'
import './App.css'
import HandTrack from './pages/index'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <HandTrack />
    </div>
  )
}

export default App
