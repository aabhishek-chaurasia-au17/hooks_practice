import React, {useState, useEffect} from 'react'

const UseEffectcleanUp = () => {
    const [widthCount, setWidthCount] = useState(window.screen.width)

    function actualSize() {
        setWidthCount(window.innerWidth)
    }

    useEffect(() => {
        window.addEventListener('resize', actualSize)
        console.log('add');
        //cleanUp
        return (window.removeEventListener('resize', actualSize),
        console.log("remove")
        )
    })

  return (
    <div>
        <p>The actual size of the window:</p>
        <h1>{widthCount}</h1>
    </div>
  )
}

export default UseEffectcleanUp