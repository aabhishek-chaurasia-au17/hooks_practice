import React,{useReducer} from 'react'

const initState = 0

const reducer = (state, action) =>{
    console.log(action, state);
    if(action.type === 'INCRESE'){
        return state +1
    }else if(action.type === 'DECREASE'){
        return state -1
    }
    return state
}

const CounterApp = () => {
    const [state, dispatch] = useReducer(reducer, initState)

  return (
    <div>
        <h1 className="text-dark">{state}</h1>
        <button type="submit" onClick={()=>dispatch({type: 'INCRESE'})}>IncreseConut</button>
        <button type="submit" onClick={()=>dispatch({type: 'DECREASE'})}>DecreaseConut</button>
    </div>
  )
}

export default CounterApp