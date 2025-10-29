import { useState } from "react";

import React from 'react'

const LoginForm = () => {
  return (
    <>
    <h1>Login</h1>
    <form>
        <label htmlfor="login">
                Login
        </label>
        <input type="login" 
               name="login"/>
        <label htmlfor="password">
                Password 
        </label>
        <input type="password" 
               name="password" 
               />
    </form>
    </>
  )
}

export default LoginForm