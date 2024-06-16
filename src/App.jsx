import { useState } from 'react'
import './App.css'

function App() {

  const [count, setCount] = useState(Date.now())

  const [steps, setSteps] = useState(1)

  return (
    <div>
      <button onClick={() => {
        setSteps((s) => {
          return s - 1;
        })
      }}>-</button>
      <p>Steps: {steps}</p>
      <button onClick={() => {
        setSteps((s) => {
          return s + 1;
        })
      }}>+</button>
      <button onClick={() => {
        setCount((c) => {
          return count - (86400000 * steps);
        })
      }}>-</button>
      <p>Count</p>
      <button onClick={() => {
        setCount((c) => {
          return count + (86400000 * steps);
        })
      }}>+</button>
      <p>{count}</p>
    </div>
  )
}

export default App
