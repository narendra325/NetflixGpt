import { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignin, setSignin] = useState(true);

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
            type="text"
            className="p-2 my-2 w-full rounded-lg  bg-gray-800 bg-opacity-80 "
            placeholder="Name"
          />
        )}
        <input
          type="text"
          className="p-2 my-2 w-full rounded-lg  bg-gray-800 bg-opacity-80 "
          placeholder="Email-address"
        />
        <input
          type="Password"
          className="p-2 my-2 w-full rounded-lg bg-gray-800 bg-opacity-80 "
          placeholder={!isSignin? "Create password":"Password"}
        />
        {!isSignin &&(
            <input
            type="password"
            className="p-2 my-2 w-full rounded-lg  bg-gray-800 bg-opacity-80 "
            placeholder="Confirm password"
          />
        )}

        <button className="p-2 my-4 bg-red-600 w-full rounded-lg ">
          {isSignin ? "Sign in" : "Sign up"}
        </button>
        <div>
          <p className=" p-2 my-2 cursor-pointer" onClick={handleSignin}>
            {isSignin ? " New to Netflix? Sign up" : "Already user? Sign in"}
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
