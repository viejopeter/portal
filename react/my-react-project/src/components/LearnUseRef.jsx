import React from 'react'
import { useState,useRef } from 'react'

const LearnUseRef = () => {
  
  const [name,SetName] = useState('')

  const inputRef = useRef('')
  const previousNameRef = useRef('')
  console.log(inputRef)


 const handleChange =(e) => {
    previousNameRef.current = name;
    SetName(e.target.value);
 }

  return (
    <>
      <input 
         ref={inputRef}
         type="text" 
         value={name}
         onChange={handleChange} 
      />   
      <button onClick={() => {SetName(""); inputRef.current.focus();} }>Clear</button>
      <h2>Previus name:{previousNameRef.current}</h2>
    </>
  )
}

export default LearnUseRef