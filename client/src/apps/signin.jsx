import React from "react";
// import Navbar from '../components/navbar'
import SignUp from "./signup";
export default function SignIn() {
  return (
    <div className="flex items-center justify-center p-64 bg-sign-up-light dark:bg-sign-up-dark text-dark-purple dark:text-white">
      <div className="bg-light-white dark:bg-dark-purple h-fit w-1/2 min-w-fit p-16 max-w-screen shadow-10xl items-center justify-center rounded-2xl">
        <div className="m-auto items-center justify-center text-center w-full">
        <h1 className="text-5xl font-bold">Log In</h1>
        <p className="text-lg mt-5">
          If you don't have an account{" "}
          <span className="text-blue-600 underline">
          <a href="signin.jsx" onClick={() => {<SignUp/>}}>sign up?</a>
          </span>
        </p>
        </div>
        <form action="/action_page.php" className="items-center justify-center w-full">
          <div  className="mt-5">
          <label for="email" className=" text-2xl mt-14">Email</label>
          <br />
          
          <input type="email" required id="email" name="email" placeholder="abcdgtgt@xyz.com" className="mt-10 p-5 w-full  bg-gray-200 dark:bg-gray-200"/>
          <br />
          </div>
          <br />
          <br />
          <div  className="mt-5">
          <label for="password" className=" text-2xl mt-14">Password</label>
          <br />
          <input type="password" required id="password" name="pwd"placeholder="***********" className="mt-10 mb-10 p-5 w-full  bg-gray-200 dark:bg-gray-200"/>
          <br />
          </div>          <br />
          <br />
          <br />

          <div className="flex items-center justify-center text-center">
          <input type="submit"  value="Submit" className="p-5 bg-dark-purple hover:bg-gradient-to-r from-gray-800 to-gray-600 dark:bg-gray-600 dark:hover:bg-gradient-to-r rounded-2xl mb-10 w-1/3 text-white"/>
          </div>

        </form>
      </div>
    </div>
  );
}
