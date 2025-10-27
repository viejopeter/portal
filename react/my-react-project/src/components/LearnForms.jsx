import React, { lazy } from 'react'
import { useState } from 'react'
const LearnForms = () => {
    // const [firstName,setFirstName] = useState('');
    // const [lastName,setLastName] = useState('');
    
    const [formData,setFormData] = useState({
        firstName:"",
        lastName:""
    })

    const eventHandler = (e) =>{
          setFormData({...formData, [e.target.name]: e.target.value})
    }

    const eventHandlerSubmit = (e) => {
        e.preventDefault();  
        console.log("Send",formData)
    }

    return (
    <>
    {/* <form action="">
        First Name: <input type='text' name='firtsName' value={firstName} onChange={e => setFirstName(e.target.value)}/>
        <br /><br />
        Last Name: <input type="text" name='LastName' value={lastName} onChange={e => setLastName(e.target.value)}/>
    </form> */}
    <form onSubmit={eventHandlerSubmit}>
        <label htmlFor="firstName">First Name:</label>
        <input type="text" name="firstName" id="firstName" onChange={eventHandler} value={formData.firstName} />
        <br />
        <label htmlFor="lastName">Last Name:</label>
        <input type="text" name="lastName" id="lastName" onChange={eventHandler} value={formData.lastName} />
        <button type='submit'>Send data</button>
    </form>
    </>
  )
}

export default LearnForms