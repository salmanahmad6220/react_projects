import React from 'react'
import { useState } from 'react';
import { TextField } from "./TextField";
import "./Login.css";
export const Login = () => {
  const [error,setError] = useState(false);
    
  return (
    <div className='login'>
    <h1>Bizsoft</h1>
    <div className='log_in'>
    <TextField className={'input_login'} placeholder={'Enter Your Email'} label={'Enter Email'}/>
    <TextField className={'input_login'} placeholder={'Enter Your Password'} label={'Enter Password'}/>
    <button onClick={'submitt'}>Log in</button>


  <button>Create a new Account</button>
  </div>

    </div>
  )
}