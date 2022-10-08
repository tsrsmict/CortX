import React, { useState } from "react";
import SignupModule from "../components/signup_m";
import SigninModule from "../components/signin_m";
// import Navbar from '../components/navbar'
export default function SignIn() {
  const [SignUp, setSignUp] = useState(true)
  return (
    <div className="grid min-h-screen bg-sign-up-light dark:bg-sign-up-dark place-items-center">
      <SigninModule className={`$(!signup ? "hidden":"visible")`}/>
      <p className="flex justify-between mt-4 text-xs text-gray-500 dark:text-white cursor-pointer hover:text-sky-900" onClick={()=> {setSignUp(!SignUp)}} >Already registered?</p>
</div>
  );
}
