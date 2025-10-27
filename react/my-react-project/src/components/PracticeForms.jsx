import React from 'react'
import { useState } from 'react'

function PracticeForms() {
  
   const [formData,setFormaData] = useState({
           name: "",
           email: "",
           message:""
   }) 
   const [submitted, setSubmitted] = useState(null) ; 

   const eventHandler = (e) => {
        setFormaData({...formData,[e.target.name]:e.target.value})

   }

   const eventHandlerSubmit = (e) =>{
        e.preventDefault();
        console.log("Submited",formData)
        setSubmitted(formData)
        
        setFormaData({
           name: "",
           email: "",
           message:""
        })
   }
  return (
    <>
     <form onSubmit={eventHandlerSubmit}>
        <label htmlFor="name">
               Name:
        </label>
        <input type="text" name="name" id="name" onChange={eventHandler} value={formData.name} />
        <label htmlFor="email">
               Email:
        </label>
        <input type="text" name="email" id="email" onChange={eventHandler} value={formData.email} />
        <label htmlFor="message">
               Message:
        </label>
        <input type="text" name="message" id="message" onChange={eventHandler} value={formData.message} />
        <button type="submit">Submit</button>
        <br />
        {submitted && <p>Thank you! {submitted.name}, we received your message! </p>}
     </form>
    </>
  )
}

export default PracticeForms