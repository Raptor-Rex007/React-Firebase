import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../firebase";
import "./SignIn.css"; // Import your CSS file for styling

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginSuccessMessage, setLoginSuccessMessage] = useState("");
  const [loginErrorMessage, setLoginErrorMessage] = useState("");


  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setLoginSuccessMessage("Login successful!");
        setLoginErrorMessage("");
        console.log(userCredential);
        window.location.href= "https://www.flipkart.com/"
        // Navigate to Home after successful login
  // Use history.push to navigate
      })
      .catch((error) => {
        setLoginSuccessMessage("");
        setLoginErrorMessage("Incorrect email or password. Please try again.");
        console.log(error);
      });
  };

  return (
    <div className="sign-in-container">
      <form onSubmit={signIn}>
        <h1>Log In to your Account</h1>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="input-field"
        ></input>
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="input-field"
        ></input>
        <button type="submit" className="submit-button">Log In</button>
      </form>
      {loginSuccessMessage && <p className="success-message">{loginSuccessMessage}</p>}
      {loginErrorMessage && <p className="error-message">{loginErrorMessage}</p>}
    </div>
  );
};

export default SignIn;
