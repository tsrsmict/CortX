import React from "react";
// import Navbar from '../components/navbar'
import SignUp from "./signup";
export default function SignIn() {
  return (
    <div className="flex items-center justify-center p-80 bg-sign-up-light dark:bg-sign-up-dark text-dark-purple dark:text-white">
      <div className="bg-light-white dark:bg-dark-purple h-fit p-14 max-w-screen shadow-10xl items-center justify-center rounded-2xl">
        <div className="m-auto items-center justify-center text-center">
        <h1 className="text-5xl font-bold">Log In</h1>
        <p className="text-lg mt-5">
          If you don't have an account{" "}
          <span className="text-blue-600 underline">
          <a href="signin.jsx" onClick={() => {<SignUp/>}}>sign up?</a>
          </span>
        </p>
        </div>
        <form action="/action_page.php" className="my-5">
          <div className="flex">
            <div className="my-5 mr-5">
          <label for="fname" className="text-2xl">First name</label>
          <br />
          <input type="text" id="fname" required  name="fname" placeholder="John" className="text-2xl p-2 mt-5 bg-gray-200 dark:bg-gray-200"/>
          <br />
          </div> <div className="my-5 ml-5">
          <label for="lname" className=" text-2xl">Last name</label>
          <br />
          <input type="text" id="lname" required name="lname" placeholder="Doe" className=" p-2 text-2xl mt-5  bg-gray-200 dark:bg-gray-200"/>
          <br />
          </div>
          <br />
          </div>
          <div  className="mt-5">
          <label for="email" className=" text-2xl mt-14">Email</label>
          <br />
          <input type="email" required id="email" name="email" placeholder="abcdgtgt@xyz.com" className="mt-5 p-5 w-full  bg-gray-200 dark:bg-gray-200"/>
          <br />
          </div>
          <div  className="mt-5">
          <label for="password" className=" text-2xl mt-14">Password</label>
          <br />
          <input type="password" required id="password" name="pwd"placeholder="***********" className="mt-5 p-5 w-full  bg-gray-200 dark:bg-gray-200"/>
          <br />
          </div>
          <div className="flex items-center justify-center text-center">
          <input type="submit"  value="Submit" className="p-5 bg-dark-purple rounded-2xl m-5 w-1/3 text-white"/>
          </div>
        </form>
      </div>
    </div>
  );
}
