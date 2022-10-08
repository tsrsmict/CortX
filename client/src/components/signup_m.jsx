import React from "react";
// import Navbar from '../components/navbar'
export default function SignupModule() {
  return (
<<<<<<< HEAD
    <div class="grid min-h-screen bg-sign-up-light dark:bg-sign-up-dark place-items-center">
    <div class="transition ease-in duration-200 hover:-translate-y-5  hover:-translate-x-5 hover:backdrop-blur-2xl border-1 border-gray-700 rounded-2xl w-11/12 p-12 bg-sign-up sm:w-8/12 bg-white/[0.7] dark:bg-zinc-900/[0.8] shadow-2xl dark:shadow-zinc-800  lg:w-5/12">
=======
    <div className="grid min-h-screen bg-sign-up-light dark:bg-sign-up-dark place-items-center">
    <div className="transition ease-in duration-200 hover:backdrop-blur-2xl border-1 border-gray-700 rounded-2xl w-11/12 p-12 bg-sign-up bg-white/[0.7] dark:bg-stone-900/[0.8] shadow-2xl dark:shadow-zinc-800 sm:w-1/2 lg:w-5/12">
>>>>>>> ed7829a713c651cbdb3755e30b073c900f128873
  
  <h1 className="text-5xl font-semibold dark:text-white">Sign Up</h1>
  <br/><br/>
  <form className="mt-6">
    
    <label htmlFor="email" className="block mt-2 text-xs font-semibold text-gray-600 dark:text-white uppercase">E-mail</label>
    <input id="email" type="email" name="email" placeholder="john.doe@company.com" autoComplete="email" className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" required />
    <br/><br/>
    <label htmlFor="password" className="block mt-2 text-xs font-semibold text-gray-600  dark:text-white uppercase">Password</label>
    <input id="password" type="password" name="password" placeholder="********" autoComplete="new-password" className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" required />
    <br/>
    <button type="submit" className="w-full py-3 mt-6 font-medium tracking-widest text-white dark:text-black uppercase bg-black shadow-lg dark:bg-white focus:outline-none hover:bg-gray-600 duration-300 hover:text-white hover:shadow-none">
      Sign up
    </button>
    <a href="/signin"><p className="flex justify-between mt-4 text-xs text-gray-500 dark:text-white cursor-pointer hover:text-sky-900">Already registered?</p></a>
  </form>
</div>

</div>
  );
}
