import React, {useRef, useState} from 'react'

const Uncontrolled = () => {
    const myName = useRef(null)
    const [show, setShow] = useState(false)

    function submitData(e) {
        e.preventDefault()
        const name = myName.current.value
        name === "" ? alert("Please enter your name") : setShow(true)
    }

  return (
    <div>
        <form action="" onSubmit={submitData}>
            <input type="text" id="" ref={myName} />
            <button type="submit">Submit</button>
        </form>
        <p>
            {show ? myName.current.value : ""}
        </p>
    </div>
  )
}

export default Uncontrolled