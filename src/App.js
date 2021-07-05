import React, { useState } from 'react'

const App = () => {
  const [count, setCount] = useState(0)
  const increment = () => setCount(count + 1)
  const decrement = () => setCount(count - 1)
  const increment2 = () => setCount(prviousCount => prviousCount + 1)
  const decrement2 = () => setCount(prviousCount => prviousCount - 1)
  const reset = () => setCount(0)
  const double = () => setCount(prviousCount => prviousCount * 2)
  const three = () => {
    if(count % 3 === 0){
      setCount(prviousCount => prviousCount / 3)
    }
  }

  return (
    <React.Fragment>
      <div>count: {count}</div>
      <div>
        <button onClick={increment} >+1</button>
        <button onClick={decrement}>-1</button>
      </div>
      <div>
        <button onClick={increment2} >+1</button>
        <button onClick={decrement2}>-1</button>
      </div>
      <div>
        <button onClick={reset} >reset</button>
        <button onClick={double} >double</button>
        <button onClick={three} >3 special</button>
      </div>
    </React.Fragment>
  )
}

export default App
