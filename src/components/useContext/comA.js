import React, {createContext} from 'react'
import ComB from './comB'

const BioData = createContext()

const ComA = () => {
  return (
    <div>
      <BioData.Provider value={"Abhishek"}>
      <ComB />
      </BioData.Provider>
    </div>
  )
}

export { ComA, BioData }