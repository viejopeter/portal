import {useState} from 'react'

function CounterApp() {
  
  const [count, setCount] = useState(0);

  const increaseCount = () => setCount(count + 1)
  const decreaseCount = () => setCount(count - 1)

  return (
    <>
    <h1>Counter App Component</h1>
    <h2>Count:{count}</h2>
    <button onClick={increaseCount}>Increase count</button>
    <button onClick={decreaseCount}>Decrease count</button> 
    <button onClick={() => setCount(0)}>Reset count</button>
    </>
  )
}

export default CounterApp