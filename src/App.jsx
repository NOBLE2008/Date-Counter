import { useState } from 'react'
import './App.css'

function App() {

  const [count, setCount] = useState(Date.now())

  return (
    <div>
      <button>-</button>
      <p>Steps</p>
      <button>+</button>
      <button onClick={() => {
        setCount((c) => {
          return count - 86400000;
        })
      }}>-</button>
      <p>Count</p>
      <button onClick={() => {
        setCount((c) => {
          return count + 86400000;
        })
      }}>+</button>
      <p>{count}</p>
    </div>
  )
}

export default App
