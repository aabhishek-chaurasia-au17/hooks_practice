import React, {useReducer} from 'react'

const initState = 0;

function reducer(state, action) {
    if(action.type === 'Increse'){
       return state +1
    }
    if(action.type === 'Decrese'){
       return state -1
    }
    return state
}

const Counter1 = () => {
    const [state, dispatch] = useReducer(reducer, initState)

  return (
    <div>
        <div>{state}</div>
        <button type="button" onClick={() => dispatch({type: "Increse"})}>increseConuter</button>
        <button type="button" onClick={() => dispatch({type: "Decrese"})}>decreseConuter</button>
    </div>
  )
}

export default Counter1