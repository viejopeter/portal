import React from 'react'
import { useState } from 'react'
const LearnConditionalRendering = () => {
    const [isLoggedIn, setLoggedIn] = useState(false)
    const [status,setStatus] = useState(false)
  
    return (
    <>
       <h1>Learn Conditional Rendering</h1>

       {isLoggedIn ? (<h3>Weolcome</h3>) : (<h3>Please log in</h3>)}

       {status && (<h3>Show Data</h3>)}
    </>
  )
}

export default LearnConditionalRendering