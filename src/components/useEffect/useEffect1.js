import React,{useState, useEffect} from 'react'

const UseEffect1 = () => {
    
    const [conut, setConut] = useState(0)

    function increseConuter() {
        setConut(conut +1)
    }

    useEffect(() =>{
        if(conut){
            document.title = `count (${conut})`
        }else{
            document.title = `count`
        }
    },)

    useEffect(() => {
      console.log("Hello i am abhishek");
    }, [])
    


  return (
    <div>
        <div>{conut}</div>
        <button type="button" onClick={increseConuter}>click me</button>
    </div>
  )
}

export default UseEffect1