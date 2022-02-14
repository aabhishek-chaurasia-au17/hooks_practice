import React, {useState} from 'react'

const initState = 0

const Counterapp = () => {
    const [count, setCount] = useState(initState)

  return (
    <div>
        <h1 className="text-dark">{count}</h1>
        <button type="button" onClick={() => count < 10 ? setCount(count+1) : count}>Increment</button>
        <button type="button" onClick={() => count > 0 ? setCount(count-1) : count}>Decrement</button>
    </div>
  )
}

export default Counterapp