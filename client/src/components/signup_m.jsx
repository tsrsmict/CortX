import React from "react";
// import Navbar from '../components/navbar'
export default function SignupModule() {
  return (
    
  <div class="w-11/12 p-12 bg-sign-up sm:w-8/12 bg-white dark:bg-black shadow-10xl md:w-1/2 lg:w-5/12">
    <h1 class="text-5xl font-semibold dark:text-white">Sign Up</h1>
    <form class="mt-6">
      <div class="flex justify-between gap-3">
        <span class="w-1/2">
          <label for="firstname" class="block text-xs font-semibold text-gray-600 dark:text-white uppercase">Firstname</label>
          <input id="firstname" type="text" name="firstname" placeholder="John" autocomplete="given-name" class="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" required />
        </span>
        <span class="w-1/2">
          <label for="lastname" class="block text-xs font-semibold text-gray-600 dark:text-white uppercase">Lastname</label>
        <input id="lastname" type="text" name="lastname" placeholder="Doe" autocomplete="family-name" class="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" required />
        </span>
      </div>
      <label for="email" class="block mt-2 text-xs font-semibold text-gray-600 dark:text-white uppercase">E-mail</label>
      <input id="email" type="email" name="email" placeholder="john.doe@company.com" autocomplete="email" class="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" required />
      <label for="password" class="block mt-2 text-xs font-semibold text-gray-600  dark:text-white uppercase">Password</label>
      <input id="password" type="password" name="password" placeholder="********" autocomplete="new-password" class="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" required />
      <label for="password-confirm" class="block mt-2 text-xs font-semibold text-gray-600 dark:text-white uppercase">Confirm password</label>
      <input id="password-confirm" type="password" name="password-confirm" placeholder="********" autocomplete="new-password" class="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" required />
      <button type="submit" class="w-full py-3 mt-6 font-medium tracking-widest text-white dark:text-black uppercase bg-black shadow-lg dark:bg-white focus:outline-none hover:bg-gray-900 dark:hover:bg-gray-300 hover:shadow-none">
        Sign up
      </button>
      
    </form>
  </div>

  );
}
