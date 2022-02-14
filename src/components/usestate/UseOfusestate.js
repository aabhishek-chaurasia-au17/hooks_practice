import React,{useState} from 'react';

const UseOfusestate = () => {
  const [count, setCount] = useState(0);

  function getIncrement() {
    if( count < 10){
        setCount(count + 1)
    }
  }

  return <div>
    <h1>{count}</h1>
    <button onClick={getIncrement}>click me</button>
  </div>;
};

export default UseOfusestate;
