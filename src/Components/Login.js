import React, { useState, useRef } from "react";
import Header from "./Header";
import { Validate } from "../Utils/Validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../Utils/Firebase";

const Login = () => {
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);
  const confirmpassword = useRef(null);

  const [isSignin, setSignin] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const handlesubmit = (e) => {
    e.preventDefault();
    console.log("wfg");

    const emailvalue = email.current.value;
    const passwordvalue = password.current.value;
    

    console.log(emailvalue);
    console.log(passwordvalue);
   

    setErrorMessage(null);

    let message = Validate(emailvalue, passwordvalue);

    setErrorMessage(message);
    if (message) return;

    if (!isSignin) {
      // signup

      createUserWithEmailAndPassword(auth, emailvalue, passwordvalue)
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          console.log(user);
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    } else {
      signInWithEmailAndPassword(auth, emailvalue, passwordvalue)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user)
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };

  const handleSignin = () => {
    setSignin(!isSignin);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/4d2c5849-b306-4884-9036-6211f7ee0178/web/IN-en-20240930-TRIFECTA-perspective_1e1ca6cd-9e2d-4e9d-9e4b-ba0c2d3a0e31_large.jpg"
          alt="background-img"
        />
      </div>
      <form className="bg-black text-white absolute w-3/12 mx-auto right-0 left-0 my-36 p-9 m-2 bg-opacity-80 rounded-lg">
        <h1 className="p-2 my-2 font-bold text-xl">
          {isSignin ? "Sign in" : "Sign up"}
        </h1>
        {!isSignin && (
          <input
            ref={name}
            type="text"
            className="p-2 my-2 w-full rounded-lg bg-gray-800 bg-opacity-80"
            placeholder="Name"
          />
        )}
        <input
          ref={email}
          type="text"
          className="p-2 my-2 w-full rounded-lg bg-gray-800 bg-opacity-80"
          placeholder="Email-address"
        />
        <input
          ref={password}
          type="password"
          className="p-2 my-2 w-full rounded-lg bg-gray-800 bg-opacity-80"
          placeholder={!isSignin ? "Create password" : "Password"}
        />

        {errorMessage && (
          <p className="text-red-500 font-bold text-md py-3">{errorMessage}</p>
        )}
        <button
          onClick={handlesubmit}
          className="p-2 my-4 bg-red-600 w-full rounded-lg"
        >
          {isSignin ? "Sign in" : "Sign up"}
        </button>
        <div>
          <p className="p-2 my-2 cursor-pointer" onClick={handleSignin}>
            {isSignin ? " New to Netflix? Sign up" : "Already user? Sign in"}
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
