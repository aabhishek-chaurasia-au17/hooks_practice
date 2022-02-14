import React,{useEffect} from 'react'

const CustomHook = (count) => {

    useEffect(() =>{
        if(count > 1){
            document.title = `count is ${count}`
        }else{
            document.title = `Abhishek Project`
        }
    }, [count])
}

export default CustomHook