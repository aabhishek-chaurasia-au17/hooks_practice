import React, {useState} from 'react'
import CustomHook from './customHook'

const CountApp = () => {
    const [count, setCount] = useState(0)
    
    //CustomHook
    CustomHook(count)
    
  return (
    <div>
        <h2>{count}</h2>
        <button type="button" onClick={() => setCount(count+1)}>INCRESE</button>
        <button type="button" onClick={() => setCount(count-1)}>DECREASE</button>
    </div>
  )
}

export default CountApp