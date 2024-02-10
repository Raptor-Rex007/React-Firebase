import React, { useState } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import "./SignUp.css"; // Import your CSS file for styling

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isSignIn, setIsSignIn] = useState(false); // State to control whether to show sign-up or sign-in form

  const signUpOrSignIn = (e) => {
    e.preventDefault();
    if (isSignIn) {
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          setSuccessMessage("Sign in successful!");
          setErrorMessage("");
          console.log(userCredential);
        })
        .catch((error) => {
          setSuccessMessage("");
          setErrorMessage(error.message);
          console.log(error);
        });
    } else {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          setSuccessMessage("Account created successfully! You can now log in.");
          setErrorMessage("");
          console.log(userCredential);
        })
        .catch((error) => {
          setSuccessMessage("");
          setErrorMessage(error.message);
          console.log(error);
        });
    }
  };

  const toggleForm = () => {
    setIsSignIn((prevState) => !prevState); // Toggle between sign-up and sign-in form
    setSuccessMessage("");
    setErrorMessage("");
  };

  return (
    <div className="sign-up-container">
      <form onSubmit={signUpOrSignIn}>
        <h1>{isSignIn ? "Sign In" : "Create Account"}</h1>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="input-field"
        />
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="input-field"
        />
        <button type="submit" className="submit-button">
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>
      </form>
      <p onClick={toggleForm} className="toggle-form">
        {isSignIn ? "Don't have an account? Sign Up" : "Already have an account? Sign In"}
      </p>
      {successMessage && <p className="success-message">{successMessage}</p>}
      {errorMessage && <p className="error-message">{errorMessage}</p>}
    </div>
  );
};

export default SignUp;
