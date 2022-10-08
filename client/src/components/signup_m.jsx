import React from "react";
// import Navbar from '../components/navbar'
export default function SignupModule() {
  return (
    <div class="grid min-h-screen bg-sign-up-light dark:bg-sign-up-dark place-items-center">
    <div class="transition ease-in duration-200 hover:-translate-y-5  hover:-translate-x-5 hover:backdrop-blur-2xl border-1 border-gray-700 rounded-2xl w-11/12 p-12 bg-sign-up sm:w-8/12 bg-white/[0.7] dark:bg-zinc-900/[0.8] shadow-2xl dark:shadow-zinc-800  lg:w-5/12">
  
  <h1 class="text-5xl font-semibold dark:text-white">Sign Up</h1>
  <br/><br/>
  <form class="mt-6">
    
    <label for="email" class="block mt-2 text-xs font-semibold text-gray-600 dark:text-white uppercase">E-mail</label>
    <input id="email" type="email" name="email" placeholder="john.doe@company.com" autocomplete="email" class="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" required />
    <br/><br/>
    <label for="password" class="block mt-2 text-xs font-semibold text-gray-600  dark:text-white uppercase">Password</label>
    <input id="password" type="password" name="password" placeholder="********" autocomplete="new-password" class="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" required />
    <br/>
    <button type="submit" class="w-full py-3 mt-6 font-medium tracking-widest text-white dark:text-black uppercase bg-black shadow-lg dark:bg-white focus:outline-none hover:bg-gray-900 dark:hover:bg-gray-300 hover:shadow-none">
      Sign up
    </button>
    <a href="/signin"><p class="flex justify-between mt-4 text-xs text-gray-500 dark:text-white cursor-pointer hover:text-sky-900">Already registered?</p></a>
  </form>
</div>

</div>
  );
}
