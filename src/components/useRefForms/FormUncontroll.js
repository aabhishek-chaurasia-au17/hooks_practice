import React, {useRef, useState } from 'react'

const FormUncontroll = () => {
  const [store, setStore] = useState(false)
  const name = useRef(null)

  function getdata(e){
    e.preventDefault()
    const yourName = name.current.value
    yourName === "" ? alert("Please enter your name") : setStore(true) 
  }

  return (
    <>
      <h3 className="text-dark">FormUncontroll</h3>
      <form style={{width: "450px"}} onSubmit={getdata}>
      <input type="text" ref={name} />
      <button type="button">submit</button>
      </form>
      <p>
        { store ? name.current.value : ""}
      </p>
    </>
  )
}

export default FormUncontroll