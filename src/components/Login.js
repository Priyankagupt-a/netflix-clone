import React, { useRef, useState } from "react";
import { checkValidData } from "../utils/Validate";
import Header from "./Header";

const Login = () => {
  const [isSignedIn, setSignedIn] = useState(true);
  const [errorMsg,setErrorMsg]=useState()

  const email = useRef(null);
  const password = useRef(null);

  const handleSign = () => {
    setSignedIn(!isSignedIn);
  };
  const handleSignIn = () => {
    // console.log(email.current.value);
    // console.log(password.current.value);
    const message = checkValidData(email.current.value, password.current.value);
    console.log(message);
    setErrorMsg(message)
  };

  return (
    <div>
      <div>
        <Header />
      </div>
      <div>
        <img
          className="absolute"
          alt="backgroung-img"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/9f46b569-aff7-4975-9b8e-3212e4637f16/453ba2a1-6138-4e3c-9a06-b66f9a2832e4/IN-en-20240415-popsignuptwoweeks-perspective_alpha_website_large.jpg"
        ></img>
      </div>
      <form
        className="absolute left-0 right-0 content-center w-3/12 p-12 mx-auto text-white bg-black rounded-lg my-36 bg-opacity-70"
        onSubmit={(e) => e.preventDefault()}
      >
        {isSignedIn ? (
          <h1 className="py-4 text-xl font-bold"> Signin</h1>
        ) : (
          <>
            <h1 className="py-4 text-xl font-bold"> Sign up</h1>
            <input
              type="text"
              placeholder="Name"
              className="w-full p-4 my-4 text-black bg-gray-300 rounded-lg "
            />
          </>
        )}
        <input
          type="text"
          ref={email}
          placeholder="Email address"
          className="w-full p-4 my-4 text-black bg-gray-300 rounded-lg "
        />
        <input
          type="password"
          ref={password}
          placeholder=" enter password"
          className="w-full p-4 my-4 text-black bg-gray-300 rounded-lg "
        />
         <p className="p-2 py-4 text-xl font-bold text-red-700 ">{errorMsg}</p>
        <button
          className="w-full p-4 my-6 text-black bg-red-600 rounded-lg"
          onClick={handleSignIn}
        >
          {isSignedIn ? "Sign in" : "Sign up"}
        </button>
        <p className="cursor-pointer " onClick={handleSign}>
          New to Netflix? Sign up now.
        </p>
       
      </form>
    </div>
  );
};

export default Login;

