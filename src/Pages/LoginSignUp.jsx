import React from "react";
import "./CSS/LoginSignUp.css";
import TextInput from "../Components/TextInput";
import { useState } from "react";

export default function LoginSignUp() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="login-signup-page">
      <div className="login-signup">
        <h1>{isLogin ? "Login" : "Sign Up"}</h1>
        {!isLogin ? (
          <TextInput type="name" placeholder="Name"></TextInput>
        ) : null}
        <TextInput type="email" placeholder="Email address"></TextInput>
        <TextInput type="password" placeholder="Password"></TextInput>
        <button>Continue</button>
        <p>
          {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
          <button onClick={() => setIsLogin(!isLogin)}>Click here</button>
        </p>
      </div>
    </div>
  );
}
