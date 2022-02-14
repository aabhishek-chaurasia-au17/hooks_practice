import React,{useContext} from 'react'
import { BioData } from './comA'

const ComC = () => {
  const first = useContext(BioData)
  return (
    <>
    <h2>This is compC {first}</h2>
    </>
  )
}

export default ComC