import React from "react";
import { TextField } from "./TextField";
import "./Signup.css";
export const Signup = () => {
  
  return (
    <div id="signup">
      <h1>Bizsoft</h1>
      <div className="sign_up">
        <h3>Create a new account</h3>
        <p>It's quick and easy.</p>
        <div id="identity">
        <TextField placeholder={"Name"}/> 
        <TextField placeholder={"Surname"}/></div>
        <TextField id="address" placeholder={"Mobile number or email address"} />
        <TextField id="address" placeholder={"New password"}/>
       <div> <TextField type="date" label={"Date of birth"}/> </div>
       <button  className="btn" onClick={'submitt'}>Sign up</button>
      </div>
    </div>
  );
};
