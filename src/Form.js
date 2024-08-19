import React, { useState } from "react";
import { Signup } from "./compoment/Signup";
import { Login } from "./compoment/Login";
const Form = () => {
  const [page, setPage] = useState("");
  return (
    <>
      <button
        className={`login_btn ${page === "login" ? "active " : ""}`}
        onClick={() => setPage("login")}
      >
        Login
      </button>
      <button
        className={`signup_btn ${page === "signup" ? "active " : ""}`}
        onClick={() => setPage("signup")}
      >
        Sign up
      </button>
      <section>
        {page === "login" && <Login />}

        {page === "signup" && <Signup />}
      </section>
    </>
  );
};

export default Form;
