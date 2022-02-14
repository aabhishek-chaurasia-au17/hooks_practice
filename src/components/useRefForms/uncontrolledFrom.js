import React, {useRef, useState} from 'react'

const UncontrolledFrom = () => {
  
  const yourName = useRef(null)
  const [show, setShow] = useState(false)

  function submitData(e) {
    e.preventDefault()
    const name = yourName.current.value
    name === "" ? alert("Please enter your name") : setShow(true)
  }

  return (
    <div>
      <form action="" className="col-3" style={{margin: "250px 0 0 550px"}} onSubmit={submitData}>
        <div>
          <label htmlFor="luckyName">enter your luckyName</label>
          <input type="text" id="luckyName" ref={yourName}/>
        </div>
        <button type="submit">Submit</button>
      </form>
      <p>
        {show ? `your name is ${yourName.current.value}` : ""}
      </p>
    </div>
  )
}

export default UncontrolledFrom