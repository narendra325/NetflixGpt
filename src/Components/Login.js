import React, { useState, useRef } from "react";
import Header from "./Header";
import { Validate } from "../Utils/Validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../Utils/Firebase";
import { addUser } from "../Utils/UserSlice";

import { useDispatch } from "react-redux";
import { BACKGROUND_IMG } from "../Utils/Constants";

const Login = () => {
  const dispatch = useDispatch();
  
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const [isSignin, setSignin] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const handlesubmit = (e) => {
    e.preventDefault();
    

    const emailvalue = email.current.value;
    const passwordvalue = password.current.value;
    const namevalue = isSignin ? " " : name.current.value;

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

          updateProfile(user, {
            displayName: namevalue,
          })
            .then(() => {
              const { uid, email, displayName } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                })
              );
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });
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

          updateProfile(user, {
            displayName: namevalue,
          }).then(() => {
            const { uid, email, displayName } = auth.currentUser;
            dispatch(
              addUser({
                uid: uid,
                email: email,
                displayName: displayName,
              })
            );
          });
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
          src={BACKGROUND_IMG}
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
